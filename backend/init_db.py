import sqlite3

def init_db():
    conn = sqlite3.connect("cube.db")
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS solves (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        time REAL NOT NULL,
        scramble TEXT NOT NULL,
        event TEXT NOT NULL,
        session TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)

    conn.commit()
    conn.close()

init_db()