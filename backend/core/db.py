from os import getenv

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


load_dotenv()
USER_DB = getenv("USER_DB")
PASSWORD = getenv("PASSWORD")
POSTGRESSERVER = getenv("POSTGRESSERVER")
DB = getenv("DB")

SQLALCHEMY_DATABASE_URL =\
    f"postgresql+psycopg2://{USER_DB}:{PASSWORD}@{POSTGRESSERVER}/{DB}"

engine = create_engine(SQLALCHEMY_DATABASE_URL) 
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
connection = engine.connect()
