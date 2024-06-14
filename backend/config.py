import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    DATABASE_URI = os.environ.get('DATABASE_URI') or 'postgresql://postgres:123456@localhost/Company'
