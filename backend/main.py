print("🔥 THIS IS THE ACTIVE FASTAPI SERVER")
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import requests
import os
from dotenv import load_dotenv
load_dotenv()

#region SQL
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://ntimer.netlify.app", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Solve(BaseModel):
    time: float
    scramble: str
    event: str
    session: str
    penalty: int

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
    {"id": r[0], "time": r[1], "scramble": r[2], "event": r[3], "session": r[4], "createdAt":r[5], "penalty":r[6]}
    for r in rows
]

@app.post("/solves")
def create_solve(solve: Solve):
    conn = sqlite3.connect("cube.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO solves (time, scramble, event, session, penalty) VALUES (?, ?, ?, ?, ?)",
        (solve.time, solve.scramble, solve.event, solve.session, solve.penalty)
    )

    conn.commit()
    conn.close()

    return {"status": "ok"}

@app.delete("/solves/{solve_id}")
def delete_solve(solve_id: int):
    conn = sqlite3.connect("cube.db")
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM solves WHERE id = ?",
        (solve_id,)
    )

    conn.commit()
    conn.close()

    return {"status": "ok"}

@app.patch("/solves/{solve_id}/penalty")
def update_penalty(solve_id: int, penalty: int):
    conn = sqlite3.connect("cube.db")
    cursor = conn.cursor()

    cursor.execute(
        "UPDATE solves SET penalty = ? WHERE id = ?",
        (penalty, solve_id)
    )

    conn.commit()
    conn.close()

    return {"status": "ok"}
#endregion SQL

class TrainerRequest(BaseModel):
    message: str
    user_id: int

@app.post("/trainer")
async def trainer(request: TrainerRequest):

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3",
            "prompt": request.message,
            "stream": False
        }
    )

    data = response.json()

    return {
        "answer": data["response"]
    }