from flask import Blueprint, request, jsonify, current_app
from app.models.user import User
import jwt

protected_bp = Blueprint('protected', __name__, url_prefix='/api')

@protected_bp.route('/protected', methods=['GET'])
def protected():
    token = request.cookies.get('access_token')
    if not token:
        return jsonify({'error': 'Unauthorized'}), 401
    try:
        payload = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=['HS256'])
        user = User.query.get(payload['user_id'])
        if not user:
            return jsonify({'error': 'User not found'}), 401
        return jsonify({'message': 'Authorized', 'username': user.username}), 200
    except Exception:
        return jsonify({'error': 'Invalid or expired token'}), 401