from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify
)
from werkzeug.utils import secure_filename

from flaskr.db import get_db
from flaskr.auth import token_required
import base64

bp = Blueprint('post', __name__, url_prefix='/post')

@bp.route('/create', methods=['POST'])
@token_required
def create(current_user):
    title = request.form['title']
    body = request.form['body']
    file = request.files['image']
    error = None

    if not title:
        error = 'Title is required.'

    if file.filename == '':
        error = 'No selected file'

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_stream = file.read()

    if error is not None:
        print(error)
    else:
        db = get_db()
        db.execute(
            'INSERT INTO post (title, body, author_id, image)'
            ' VALUES (?, ?, ?, ?)',
            (title, body, current_user, file_stream)
        )
        db.commit()

        return jsonify({
            "message": "Post created successfully!"
        }), 201

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@bp.route('/', methods=['GET'])
def get_posts():
    db = get_db()
    posts = db.execute(
        'SELECT p.id, p.title, p.body, p.image, u.username, u.firstname, u.lastname '
        'FROM post p JOIN user u ON p.author_id = u.username'
    ).fetchall()
    
    posts_list = []
    for post in posts:
        image_data = post['image']
        base64_image = base64.b64encode(image_data).decode('utf-8') if image_data else None
        posts_list.append({
            'id': post['id'],
            'title': post['title'],
            'body': post['body'],
            'image': base64_image,
            'author': {
                'username': post['username'],
                'firstname': post['firstname'],
                'lastname': post['lastname']
            }
        })
        
    return jsonify(posts_list), 200

@bp.route('/user', methods=['GET'])
@token_required
def get_user_posts(current_user):
    db = get_db()
    user_posts = db.execute(
        'SELECT p.id, p.title, p.body, p.image, u.username, u.firstname, u.lastname '
        'FROM post p JOIN user u ON p.author_id = u.username '
        'WHERE p.author_id = ?',
        (current_user,)
    ).fetchall()

    posts_list = []
    for post in user_posts:
        image_data = post['image']
        base64_image = base64.b64encode(image_data).decode('utf-8') if image_data else None
        posts_list.append({
            'id': post['id'],
            'title': post['title'],
            'body': post['body'],
            'image': base64_image,
            'author': {
                'username': post['username'],
                'firstname': post['firstname'],
                'lastname': post['lastname']
            }
        })

    return jsonify(posts_list), 200

@bp.route('/edit/<int:post_id>', methods=['PUT'])
@token_required
def edit_post(current_user, post_id):
    # Assuming 'current_user' is the ID of the user who made the request
    # 'post_id' is the ID of the post to be edited
    data = request.form
    file = request.files.get('image')
    error = None

    # Fetch the post to ensure it exists and belongs to the current user
    db = get_db()
    post = db.execute(
        'SELECT * FROM post WHERE id = ? AND author_id = ?',
        (post_id, current_user)
    ).fetchone()

    if post is None:
        return jsonify({"error": "Post not found or you don't have the permission to edit it."}), 404

    title = data.get('title', post['title'])  # Use the current title if no new title is provided
    body = data.get('body', post['body'])  # Use the current body if no new body is provided
    
    if 'image' in request.files:
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_stream = file.read()
            # Update the post with the new image
            db.execute(
                'UPDATE post SET title = ?, body = ?, image = ? WHERE id = ?',
                (title, body, file_stream, post_id)
            )
        else:
            error = 'No selected file or file type not allowed'
    else:
        # Update the post without changing the image
        db.execute(
            'UPDATE post SET title = ?, body = ? WHERE id = ?',
            (title, body, post_id)
        )

    if error is not None:
        return jsonify({"error": error}), 400

    db.commit()
    return jsonify({"message": "Post updated successfully!"}), 200

