from sqlalchemy import select

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
