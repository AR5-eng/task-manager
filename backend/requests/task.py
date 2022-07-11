from sqlalchemy import select, delete, update
from sqlalchemy.dialects.postgresql import insert

from core.base import Task
from core.db import connection


def get_tasks_by_user_id(user_id) -> list[dict]:
    # Получаю список словарей тасков пользователя по user_id
    select_tasks = connection.execute(select(Task.id, Task.title, 
                                             Task.description).where(
                                                 Task.user_id == user_id))\
                                                     .fetchall().copy()
    tasks = list()
    for task in select_tasks:
        tasks.append({
            "id": task[0],
            "title": task[1],
            "description": task[2]
        })
    
    return tasks


def add_task(help_user_id: int, task_title: str, task_description: str) -> None:
    # Добавление задания
    connection.execute(insert(Task).values(
        user_id = help_user_id,
        title = task_title,
        description=task_description
    ))


def remove_task(task_id: int) -> None:
    # Удаление задания
    connection.execute(delete(Task).where(Task.id == task_id))


def update_task(id: int, task_title: str, task_description: str) -> None:
    # Обновление задания
    connection.execute(update(Task).where(Task.id == id).values(
        title=task_title,
        description=task_description
    ))
