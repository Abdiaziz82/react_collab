from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from dotenv import load_dotenv
import os

db = SQLAlchemy()
bcrypt = Bcrypt()
migrate = Migrate()

def create_app():
    load_dotenv()
    app = Flask(__name__)
    
    # Configurations
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///database.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key')
    
    # Extensions
    db.init_app(app)
    bcrypt.init_app(app)
    CORS(
        app,
        resources={r"/*": {"origins": ["http://localhost:5173", "http://localhost:3000"]}},
        supports_credentials=True,
        allow_headers=["Content-Type", "Authorization"]  # ✅ Explicitly allow Content-Type
    )

    migrate.init_app(app, db)

    # Register blueprints
    from app.routes.auth.signup import auth_bp
    app.register_blueprint(auth_bp)
    
    from app.routes.auth.protected import protected_bp  
    app.register_blueprint(protected_bp)

    # ✅ Auto-create tables on first run
    with app.app_context():
        db.create_all()

    return app
