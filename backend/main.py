import json

from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware

from requests.select import get_tasks_by_user_id
from requests.insert import add_task
from schemas import Task


app = FastAPI()


origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/tasks")
async def get_tasks() -> dict:
    tasks = get_tasks_by_user_id(1)
    
    return {"data": tasks}

@app.post("/tasks")
async def create_task(task: Task) -> dict:
    add_task(task.user_id, task.title, task.description)
    
    return {"data": "Task added."}
