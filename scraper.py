import requests
from bs4 import BeautifulSoup
import urllib3
import json
import time
import os
import sys
from datetime import datetime
import argparse
import sqlite3

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        pass

urllib3.disable_warnings()

BASE_URL = "https://s2.puntxarxa.org/cbb/cursos/llista_cursos.php"
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}

def get_center_ids():
    """Fetches the main page to extract all library center IDs"""
    try:
        resp = requests.get(BASE_URL, headers=HEADERS, verify=False)
        resp.raise_for_status()
        
        soup = BeautifulSoup(resp.content, "html.parser", from_encoding="latin-1")
        select_centers = soup.find("select", id="centre")
        
        centers = []
        if select_centers:
            # Skip the first empty option
            for option in select_centers.find_all("option")[1:]:
                if option.get("value"):
                    centers.append({
                        "id": option.get("value"),
                        "name": option.get_text(strip=True)
                    })
        return centers
    except Exception as e:
        print(f"Error fetching centers: {e}")
        return []

def scrape_courses(center_id):
    """Fetches and parses courses for a specific center ID"""
    try:
        params = {
            "centre": center_id,
            "oberts": "1" # Assuming 1 is 'Tots' or Open
        }
        resp = requests.get(BASE_URL, params=params, headers=HEADERS, verify=False)
        resp.raise_for_status()
        
        soup = BeautifulSoup(resp.content, "html.parser", from_encoding="latin-1")
        
        # Get actual library name from the page if available
        lib_div = soup.find(class_="nom_biblioteca")
        lib_name_from_page = lib_div.get_text(strip=True) if lib_div else "Unknown Library"
        
        courses = []
        container = soup.find(id="llista_biblioteques")
        
        if container:
            course_divs = container.find_all("div", class_="texte_cursos")
            for cdiv in course_divs:
                title_div = cdiv.find(class_="texte_titol")
                title = title_div.get_text(strip=True) if title_div else "No title"
                
                horari_div = cdiv.find(class_="horari")
                horari = horari_div.get_text(separator=" | ", strip=True) if horari_div else "No date"
                
                courses.append({
                    "title": title,
                    "date": horari
                })
                
        return lib_name_from_page, courses
    
    except Exception as e:
        print(f"Error scraping courses for center {center_id}: {e}")
        return "Error", []

def init_db(db_path):
    """Initializes the SQLite database with necessary tables."""
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS scrapes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT NOT NULL
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS scraped_libraries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            scrape_id INTEGER NOT NULL,
            library_id TEXT NOT NULL,
            library_name TEXT NOT NULL,
            FOREIGN KEY(scrape_id) REFERENCES scrapes(id)
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS scraped_courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            scrape_id INTEGER NOT NULL,
            library_id TEXT NOT NULL,
            title TEXT NOT NULL,
            date TEXT NOT NULL,
            FOREIGN KEY(scrape_id) REFERENCES scrapes(id)
        )
    ''')
    
    conn.commit()
    return conn

def main():
    parser = argparse.ArgumentParser(description="BiblioScrapper: Scrape and export library courses.")
    parser.add_argument("-scrap", action="store_true", help="Scrape library courses and save to courses/database.db")
    parser.add_argument("-export", action="store_true", help="Export latest scrape from database to js/courses.js for the web UI")
    args = parser.parse_args()

    if not args.scrap and not args.export:
        parser.print_help()
        return

    start_time = time.time()
    all_data = []

    if args.scrap:
        print("Starting scraping process...")
        centers = get_center_ids()
        print(f"Found {len(centers)} centers.")
        
        for idx, center in enumerate(centers):
            center_id = center["id"]
            center_name = center["name"]
            
            print(f"[{idx+1}/{len(centers)}] Scraping: {center_name} (ID: {center_id})")
            
            lib_name, courses = scrape_courses(center_id)
            
            all_data.append({
                "library_id": center_id,
                "library_name": lib_name if lib_name != "Unknown Library" else center_name,
                "courses_found": len(courses),
                "courses": courses
            })
            
            # Polite delay
            time.sleep(0.5)
            
        output_dir = "courses"
        os.makedirs(output_dir, exist_ok=True)
        db_path = os.path.join(output_dir, "database.db")
        
        conn = init_db(db_path)
        cursor = conn.cursor()
        
        timestamp = datetime.now().isoformat()
        cursor.execute("INSERT INTO scrapes (timestamp) VALUES (?)", (timestamp,))
        scrape_id = cursor.lastrowid
        
        for lib_data in all_data:
            cursor.execute('''
                INSERT INTO scraped_libraries (scrape_id, library_id, library_name)
                VALUES (?, ?, ?)
            ''', (scrape_id, lib_data['library_id'], lib_data['library_name']))
            
            for course in lib_data['courses']:
                cursor.execute('''
                    INSERT INTO scraped_courses (scrape_id, library_id, title, date)
                    VALUES (?, ?, ?, ?)
                ''', (scrape_id, lib_data['library_id'], course['title'], course['date']))
                
        conn.commit()
        conn.close()
            
        print(f"\nScraping complete. Data saved to {db_path}")

    if args.export:
        print("\nStarting export process...")
        db_path = os.path.join("courses", "database.db")
        if not os.path.exists(db_path):
            print(f"Error: Could not find '{db_path}' to export. Please run with -scrap first.")
        else:
            try:
                conn = sqlite3.connect(db_path)
                conn.row_factory = sqlite3.Row
                cursor = conn.cursor()
                
                # Get latest scrape_id and timestamp
                cursor.execute("SELECT id, timestamp FROM scrapes ORDER BY id DESC LIMIT 1")
                row = cursor.fetchone()
                
                export_data = []
                
                if not row:
                    print("Error: No scraping data found in database.")
                else:
                    scrape_id = row['id']
                    
                    cursor.execute("SELECT library_id, library_name FROM scraped_libraries WHERE scrape_id = ?", (scrape_id,))
                    libraries = cursor.fetchall()
                    
                    for lib in libraries:
                        lib_id = lib['library_id']
                        lib_name = lib['library_name']
                        
                        cursor.execute("SELECT title, date FROM scraped_courses WHERE scrape_id = ? AND library_id = ?", (scrape_id, lib_id))
                        courses = [dict(c) for c in cursor.fetchall()]
                        
                        export_data.append({
                            "library_id": lib_id,
                            "library_name": lib_name,
                            "courses_found": len(courses),
                            "courses": courses
                        })
                        
                conn.close()
                
                if export_data:
                    # Update all_data for summary reporting
                    all_data = export_data 
                    js_dir = "js"
                    os.makedirs(js_dir, exist_ok=True)
                    js_file = os.path.join(js_dir, "courses.js")
                    
                    with open(js_file, 'w', encoding='utf-8') as f:
                        f.write(f"const scrapeTimestamp = '{row['timestamp']}';\n")
                        f.write(f"const coursesData = {json.dumps(export_data, ensure_ascii=False, indent=4)};")
                        
                    print(f"Export complete. Data saved to {js_file}")
            except Exception as e:
                print(f"Error reading or writing data for export: {e}")

    # Summary
    if all_data:
        total_libraries = len(all_data)
        total_courses = sum(lib.get("courses_found", 0) for lib in all_data)
        print("\n=== Execution Summary ===")
        print(f"Libraries Processed: {total_libraries}")
        print(f"Total Courses Detected: {total_courses}")
        print("=========================")

    end_time = time.time()
    elapsed = end_time - start_time
    minutes = int(elapsed // 60)
    seconds = elapsed % 60
    print(f"\nTotal Execution Time: {minutes}m {seconds:.2f}s")

if __name__ == "__main__":
    main()
