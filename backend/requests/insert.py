from sqlalchemy.dialects.postgresql import insert

from core.base import Task
from core.db import connection


def add_task(help_user_id: int, task_title: str, task_description: str) -> None:
    connection.execute(insert(Task).values(
        user_id = help_user_id,
        title = task_title,
        description=task_description
    ))
