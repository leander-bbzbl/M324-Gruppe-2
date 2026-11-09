import sqlite3
from pathlib import Path

database = sqlite3.connect(Path(__file__).with_name("larpometer.sqlite3"))
database.close()

print("SQLite database initialized.")
