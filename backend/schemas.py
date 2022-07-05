from pydantic import BaseModel


class Task(BaseModel):
    user_id: int
    title: str
    description: str
