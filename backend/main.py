import json

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from requests.task import get_tasks_by_user_id, add_task, remove_task,\
    update_task
from schemas import Task, TaskUpdate


app = FastAPI()


origins = [
    "http://localhost:8000",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
# Регистрация пользователя
async def register_user() -> dict:
    return {"data": "OK"}

@app.get("/tasks")
# Получение задач
async def get_tasks() -> dict:
    tasks = get_tasks_by_user_id(1)
    
    return {"data": tasks}


@app.post("/tasks")
# Добавление задачи
async def create_task(task: Task) -> dict:
    add_task(task.user_id, task.title, task.description)
    
    return {"data": "Task added."}


@app.delete("/tasks/{id}")
# Удаление задачи
async def delete_task(id: int) -> dict:
    remove_task(id)
    
    return {"data": f"Task with id {id} has been removed."}


@app.put("/tasks/{id}")
# Обновление задачи
async def change_task(task: TaskUpdate) -> dict:
    update_task(task.id, task.title, task.description)
    
    return {"data": f"Task with id {task.id} has been updated."}
