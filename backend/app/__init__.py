from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
import os

db = SQLAlchemy()
bcrypt = Bcrypt()

def create_app():
    load_dotenv()
    app = Flask(__name__)
    
    # Configurations
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///db.sqlite3')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key')
    
    # Extensions
    db.init_app(app)
    bcrypt.init_app(app)
    CORS(app)
    
    # Register blueprints here
    # from .routes import main as main_blueprint
    # app.register_blueprint(main_blueprint)
    
    return app