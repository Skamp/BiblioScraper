import os
import json
import sqlite3
import sys
import argparse
import smtplib
import configparser
import requests
from email.message import EmailMessage

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')  # type: ignore
    except AttributeError:
        pass


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

def send_telegram(body, token_override=None, chat_id_override=None):
    config = configparser.ConfigParser()
    config_file = "alert.cfg"
    
    bot_token = ""
    user_chat_id = ""
    
    # Check config file first
    if os.path.exists(config_file):
        config.read(config_file)
        if 'Telegram' in config:
            bot_token = config['Telegram'].get('bot_token', bot_token)
            user_chat_id = config['Telegram'].get('user_chat_id', user_chat_id)
            
    # Override with CLI parameters if provided
    if token_override:
        bot_token = token_override
    if chat_id_override:
        user_chat_id = chat_id_override
            
    if not bot_token or not user_chat_id:
        print("Failed to send Telegram message: bot_token or user_chat_id is missing. Provide them in alert.cfg or via CLI parameters.")
        return

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    
    # Telegram messages are limited to 4096 characters.
    max_len = 4000
    if len(body) > max_len:
        body = body[:max_len] + "\n...[Report Truncated due to Telegram limits]"

    payload = {
        "chat_id": user_chat_id,
        "text": body,
        "parse_mode": "HTML"  # Optional: Allows for some basic HTML tags if you format the report
    }
    
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()
        print("Telegram message sent successfully.")
    except requests.exceptions.RequestException as e:
        print(f"Failed to send Telegram message. Error: {e}")
        if e.response is not None:
            print(f"Response details: {e.response.text}")

def main():
    parser = argparse.ArgumentParser(description="Compare latest two scrapes in the database.")
    parser.add_argument('-mail', type=str, help="Email address to send the report to")
    parser.add_argument('-telegram', action='store_true', help="Send the report via Telegram (requires alert.cfg setup or CLI parameters)")
    parser.add_argument('-bot_token', type=str, help="Telegram bot token (only if -telegram is used)")
    parser.add_argument('-user_chat_id', type=str, help="Telegram user chat ID (only if -telegram is used)")
    parser.add_argument('-url', type=str, help="Add a link to the updated website in the report")
    args = parser.parse_args()
    
    if (args.bot_token or args.user_chat_id) and not args.telegram:
        print("Error: -bot_token and -user_chat_id can only be used when -telegram is specified.")
        parser.print_help()
        return

    db_path = os.path.join("courses", "database.db")
    
    if not os.path.exists(db_path):
        print(f"Error: Database not found at {db_path}")
        return

    try:
        conn = sqlite3.connect(db_path)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        
        # Get the two most recent scrape IDs
        cursor.execute("SELECT id, timestamp FROM scrapes ORDER BY id DESC LIMIT 2")
        rows = cursor.fetchall()
        
        if len(rows) < 2:
            print("Not enough scrape history for comparison. Need at least 2 scrapes in the database.")
            conn.close()
            return
            
        current_scrape_id = rows[0]['id']
        current_timestamp = rows[0]['timestamp']
        backup_scrape_id = rows[1]['id']
        backup_timestamp = rows[1]['timestamp']
        
        report_lines_output = [f"Comparing current scrape (ID: {current_scrape_id}, Time: {current_timestamp}) with previous scrape (ID: {backup_scrape_id}, Time: {backup_timestamp})\n"]
        
        def get_scrape_data(scrape_id):
            cursor.execute("SELECT library_id, library_name FROM scraped_libraries WHERE scrape_id = ?", (scrape_id,))
            libraries = cursor.fetchall()
            
            data = []
            for lib in libraries:
                lib_id = lib['library_id']
                lib_name = lib['library_name']
                
                cursor.execute("SELECT title, date FROM scraped_courses WHERE scrape_id = ? AND library_id = ?", (scrape_id, lib_id))
                courses = [dict(c) for c in cursor.fetchall()]
                
                data.append({
                    "library_id": lib_id,
                    "library_name": lib_name,
                    "courses": courses
                })
            return data
            
        current_data = get_scrape_data(current_scrape_id)
        backup_data = get_scrape_data(backup_scrape_id)
        
        conn.close()
        
    except Exception as e:
        print(f"Database error: {e}")
        return
    
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
                report_lines_output.append(r) # type: ignore
        if report_new_courses:
            report_lines_output.append("[NEW COURSES]")
            for r in report_new_courses:
                report_lines_output.append(r) # type: ignore
        if report_changed_courses:
            report_lines_output.append("[CHANGED COURSES]")
            for r in report_changed_courses:
                report_lines_output.append(r) # type: ignore
        if report_removed_courses:
            report_lines_output.append("[REMOVED COURSES]")
            for r in report_removed_courses:
                report_lines_output.append(r) # type: ignore
        if report_removed_libs:
            report_lines_output.append("[REMOVED LIBRARIES]")
            for r in report_removed_libs:
                report_lines_output.append(r) # type: ignore
                
        report_lines_output.append("End of report.")

    final_report = "\n".join(report_lines_output)
    print(final_report)
    
    if args.mail:
        print("\nAttempting to send email report...")
        subject = "BiblioScraper: Course Differences Report"
        email_report = final_report
        if args.url:
            email_report += f"\n\nAccess the updated courses here: {args.url}"
        send_email(args.mail, subject, email_report)
        
    if args.telegram:
        print("\nAttempting to send Telegram report...")
        # Optional basic formatting for Telegram
        tg_report = f"<b>BiblioScraper: Course Differences Report</b>\n\n<pre>{final_report}</pre>"
        if args.url:
            tg_report += f"\n👉 <a href='{args.url}'>View the complete update here</a>"
        send_telegram(tg_report, args.bot_token, args.user_chat_id)

if __name__ == "__main__":
    main()
