from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from core.db import Base


class User(Base):
    __tablename__ = "user"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(length=15), nullable=False, unique=True)
    hashed_password = Column(String(length=100), nullable=False)
    
    tasks = relationship("Task", back_populates="user")
    
    
class Task(Base):
    __tablename__ = "task"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)
    title = Column(String(length=15), nullable=False)
    description = Column(String(length=50))
    
    user = relationship("User", back_populates="tasks")
