from pydantic import BaseModel


class Task(BaseModel):
    user_id: int
    title: str
    description: str

class TaskUpdate(BaseModel):
    id: int
    title: str
    description: str
