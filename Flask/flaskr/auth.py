from functools import ( wraps )
from flask import (
    Blueprint, Flask, g, redirect, render_template, request, session, url_for, jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash
from flaskr.db import get_db
from flask_session import Session
import jwt
import datetime

app = Flask(__name__)

app.config['SECRET_KEY'] = 'a_very_secret_secret_key'
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

revoked_tokens = []


bp = Blueprint('auth', __name__, url_prefix='/auth')
    
@bp.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    db = get_db()
    error = None

    if not firstName:
        error = 'First Name is required'
    elif not lastName:
        error = 'Last Name is required'
    elif not username:
        error = 'Username is required.'
    elif not password:
        error = 'Password is required.'

    if error is None:
        try:
            db.execute(
                "INSERT INTO user (username, password, firstname, lastname) VALUES (?, ?, ?, ?)",
                (username, generate_password_hash(password), firstName, lastName),
            )
            db.commit()
        except db.IntegrityError:
            error = f"User {username} is already registered."
    
    if error is None:
        return jsonify({"message": "User registered successfully"}), 201
    return jsonify({"error": error}), 400
    

@bp.route('/login', methods=['POST'])
def login():
    print(request)
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    db = get_db()
    error = None
    user = db.execute(
        'SELECT * FROM user WHERE username = ?', (username,)
    ).fetchone()

    if user is None:
        error = 'Incorrect username.'
    elif not check_password_hash(user['password'], password):
        error = 'Incorrect password.'

    if error is None:
        session['username'] = username

        token = jwt.encode({
            'user': username,
            'firstName': user['firstname'],
            'lastName': user['lastname'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, app.config['SECRET_KEY'], algorithm="HS256")

        return jsonify({
            "message": "User signed in successfully",
            "firstName": user['firstname'],
            'lastName': user['lastname'],
            "token": token
        }), 201
    return jsonify({"error": error}), 400

@bp.route('/logout', methods=['POST'])
def logout():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        token = auth_header.split(" ")[1]
        revoked_tokens.append(token)
        return jsonify({"message": "Logged out successfully"}), 200
    return jsonify({"error": "Token not provided"}), 400


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]  # Assumes Bearer token

        if not token or token in revoked_tokens:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = data['user']
        except:
            return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated