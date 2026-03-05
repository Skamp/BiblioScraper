import os
import json
import glob
import sys
import argparse
import smtplib
import configparser
from email.message import EmailMessage

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')  # type: ignore
    except AttributeError:
        pass


def load_json(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading {filepath}: {e}")
        return None

def send_email(to_email, subject, body):
    config = configparser.ConfigParser()
    config_file = "alert.cfg"
    
    # Default settings
    server = "localhost"
    port = 25
    sender = "noreply@biblioscraper.local"
    username = ""
    password = ""
    use_tls = False
    use_ssl = False
    
    if os.path.exists(config_file):
        config.read(config_file)
        if 'SMTP' in config:
            server = config['SMTP'].get('server', server)
            port = config['SMTP'].getint('port', port)
            sender = config['SMTP'].get('sender', sender)
            username = config['SMTP'].get('username', username)
            password = config['SMTP'].get('password', password)
            use_tls = config['SMTP'].getboolean('use_tls', use_tls)
            use_ssl = config['SMTP'].getboolean('use_ssl', use_ssl)
    else:
        print("Notice: alert.cfg not found. Using default localhost SMTP settings.")
        print("You can rename alert.cfg.template to alert.cfg and customize it.")

    msg = EmailMessage()
    msg.set_content(body)
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = to_email

    try:
        if use_ssl:
            s = smtplib.SMTP_SSL(server, port)
        else:
            s = smtplib.SMTP(server, port)
            
        if use_tls:
            s.starttls()
            
        if username and password:
            s.login(username, password)

        s.send_message(msg)
        s.quit()
        print(f"Email sent successfully to {to_email}")
    except Exception as e:
        print(f"Failed to send email to {to_email}. Error: {e}")

def main():
    parser = argparse.ArgumentParser(description="Compare courses.json with its backups.")
    parser.add_argument('-mail', type=str, help="Email address to send the report to")
    args = parser.parse_args()

    courses_dir = "courses"
    current_file = os.path.join(courses_dir, "courses.json")
    
    if not os.path.exists(current_file):
        print(f"Error: Current courses file not found at {current_file}")
        return

    # Find the most recent backup
    backup_files = glob.glob(os.path.join(courses_dir, "courses_backup_*.json"))
    if not backup_files:
        print("No backup files found for comparison.")
        return
        
    # Sort files by name (which includes the timestamp) to get the latest
    latest_backup = sorted(backup_files)[-1]
    
    report_lines_output = [f"Comparing current {current_file} with backup {latest_backup}\n"]
    
    current_data = load_json(current_file)
    backup_data = load_json(latest_backup)
    
    if not isinstance(current_data, list) or not isinstance(backup_data, list):
        print("Data is missing or invalid.")
        return
        
    # Convert lists to dictionaries keyed by library_id for easier comparison
    curr_dict = {lib["library_id"]: lib for lib in current_data}
    back_dict = {lib["library_id"]: lib for lib in backup_data}
    
    diff_found = False
    
    report_new_libs = []
    report_new_courses = []
    report_changed_courses = []
    report_removed_courses = []
    report_removed_libs = []
    
    for lib_id, curr_lib in curr_dict.items():
        lib_name = curr_lib.get("library_name", f"Unknown (ID: {lib_id})")
        
        curr_courses = {c["title"]: c.get("date", "") for c in curr_lib.get("courses", [])}
        
        if lib_id not in back_dict:
            # New library entirely
            lines = [f"=== {lib_name} ===", f"  [NEW LIBRARY] {len(curr_courses)} courses found."]
            for title, date in curr_courses.items():
                lines.append(f"  + {title} ({date})")
            report_new_libs.append("\n".join(lines) + "\n")
            diff_found = True
            continue
            
        back_lib = back_dict[lib_id]
        back_courses = {c["title"]: c.get("date", "") for c in back_lib.get("courses", [])}
        
        new_courses = []
        removed_courses = []
        changed_courses = []
        
        # Check for new and changed courses
        for title, date in curr_courses.items():
            if title not in back_courses:
                new_courses.append((title, date))
            elif back_courses[title] != date:
                changed_courses.append((title, back_courses[title], date))
                
        # Check for removed courses
        for title, date in back_courses.items():
            if title not in curr_courses:
                removed_courses.append((title, date))
                
        if new_courses:
            diff_found = True
            lines = [f"=== {lib_name} ==="]
            for title, date in new_courses:
                lines.append(f"    + {title} ({date})")
            report_new_courses.append("\n".join(lines) + "\n")
            
        if changed_courses:
            diff_found = True
            lines = [f"=== {lib_name} ==="]
            for title, old_date, new_date in changed_courses:
                lines.append(f"    ~ {title}")
                lines.append(f"      Old Date: {old_date}")
                lines.append(f"      New Date: {new_date}")
            report_changed_courses.append("\n".join(lines) + "\n")
            
        if removed_courses:
            diff_found = True
            lines = [f"=== {lib_name} ==="]
            for title, date in removed_courses:
                lines.append(f"    - {title} ({date})")
            report_removed_courses.append("\n".join(lines) + "\n")
            
    # Check for removed libraries
    for lib_id, back_lib in back_dict.items():
        if lib_id not in curr_dict:
            lib_name = back_lib.get("library_name", f"Unknown (ID: {lib_id})")
            report_removed_libs.append(f"=== {lib_name} ===\n  [REMOVED LIBRARY]\n")
            diff_found = True

    if not diff_found:
        report_lines_output.append("No differences found between the current data and the latest backup.")
    else:
        if report_new_libs:
            report_lines_output.append("[NEW LIBRARIES]")
            for r in report_new_libs:
                report_lines_output.append(r)
        if report_new_courses:
            report_lines_output.append("[NEW COURSES]")
            for r in report_new_courses:
                report_lines_output.append(r)
        if report_changed_courses:
            report_lines_output.append("[CHANGED COURSES]")
            for r in report_changed_courses:
                report_lines_output.append(r)
        if report_removed_courses:
            report_lines_output.append("[REMOVED COURSES]")
            for r in report_removed_courses:
                report_lines_output.append(r)
        if report_removed_libs:
            report_lines_output.append("[REMOVED LIBRARIES]")
            for r in report_removed_libs:
                report_lines_output.append(r)
                
        report_lines_output.append("End of report.")

    final_report = "\n".join(report_lines_output)
    print(final_report)
    
    if args.mail:
        print("\nAttempting to send email report...")
        subject = "BiblioScraper: Course Differences Report"
        send_email(args.mail, subject, final_report)

if __name__ == "__main__":
    main()
