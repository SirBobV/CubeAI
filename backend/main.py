print("🔥 THIS IS THE ACTIVE FASTAPI SERVER")
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Solve(BaseModel):
    time: float
    scramble: str
    event: str
    session: str

@app.get("/solves")
def get_solves(event:str = None):
    conn = sqlite3.connect("cube.db")
    cursor = conn.cursor()

    if event:
        cursor.execute(
            "SELECT * FROM solves WHERE event = ?",
            (event,)
        )
    else:
        cursor.execute("SELECT * FROM solves")

    rows = cursor.fetchall()

    conn.close()

    return [
    {"id": r[0], "time": r[1], "scramble": r[2], "event": r[3], "session": r[4], "createdAt":r[5]}
    for r in rows
]

@app.post("/solves")
def create_solve(solve: Solve):
    conn = sqlite3.connect("cube.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO solves (time, scramble, event, session) VALUES (?, ?, ?, ?)",
        (solve.time, solve.scramble, solve.event, solve.session)
    )

    conn.commit()
    conn.close()

    return {"status": "ok"}