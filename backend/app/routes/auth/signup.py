from flask import Blueprint, request, jsonify ,make_response, current_app
from app import db, bcrypt
from app.models.user import User
import jwt
import datetime

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username', '').strip()
    email = data.get('email', '').strip()
    password = data.get('password', '')
    confirm_password = data.get('confirmPassword', '')

    # Basic validation
    if not username or not email or not password or not confirm_password:
        return jsonify({'error': 'All fields are required.'}), 400
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match.'}), 400
    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'Username already exists.'}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already exists.'}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user = User(username=username, email=email, password=hashed_password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'Signup successful!'}), 201






@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username_or_email = data.get('usernameOrEmail', '').strip()
    password = data.get('password', '')

    if not username_or_email or not password:
        return jsonify({'error': 'All fields are required.'}), 400

    # Find user by username or email
    user = User.query.filter(
        (User.username == username_or_email) | (User.email == username_or_email)
    ).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({'error': 'Invalid credentials.'}), 401

    # JWT config
    secret = current_app.config.get('SECRET_KEY', 'your-secret-key')
    token = jwt.encode(
        {
            'user_id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        },
        secret,
        algorithm='HS256'
    )

    resp = make_response(jsonify({'message': 'Login successful!'}))
    resp.set_cookie(
        'access_token',
        token,
        httponly=True,
        secure=False,  # Set to True in production with HTTPS
        samesite='Lax',
        max_age=24*3600
    )
    return resp, 200



@auth_bp.route('/logout', methods=['POST'])
def logout():
    resp = make_response(jsonify({'message': 'Logged out successfully!'}))
    resp.set_cookie('access_token', '', expires=0, httponly=True, samesite='Lax')
    return resp, 200
