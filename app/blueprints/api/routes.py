from . import bp as api
from app.models import User, Character
from flask import make_response, g, abort,request
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth

basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()

@basic_auth.verify_password
def verify_password(username, password):
    #check if the user exists
    u = User.query.filter_by(username=username).first()
    if u is None:
        return False
    g.current_user = u
    return u.check_hashed_password(password)

@token_auth.verify_token
def verify_token(token):
    u = User.check_token(token) if token else None
    g.current_user = u
    return g.current_user or None

@api.get('/token')
@basic_auth.login_required()
def get_token():
    user = g.current_user
    token = user.get_token()
    return make_response({"token":token}, 200)

@api.get('/login')
@basic_auth.login_required()
def get_login():
    user = g.current_user
    token = user.get_token()
    return make_response({"token":token, **user.to_dict()}, 200)

@api.post('/register')
def post_user():
    '''
        No Auth
        creates a new user.
        expected payload:
        {
            "username" : STRING,
            "first_name" : STRING,
            "last_name" : STRING,
            "email" : STRING,
            "password" : STRING,
            
        }
    '''
    data = request.get_json()
    print(data, 'just data')
    print(data.get('username'), 'data.get')
    if User.query.filter_by(username=data.get('username')).first():
        abort(422)
    new_user = User()
    new_user.from_dict(data)
    new_user.save()
    return make_response("success",200)

@api.get('/character')
@basic_auth.login_required()
def get_character():
    character = User.user_character
    token = character.get_token()
    return make_response({"token":token, **character.to_dict()}, 200)

@api.post('/create_character')
def post_character():
    '''
        No Auth
        creates a new character.
        expected payload:
        {
            "name" : STRING,
            .....
            
        }
    '''
    data = request.get_json()
    print(data, 'just data')
    print(data.get('name'), 'data.get')
    if Character.query.filter_by(name=data.get('name')).first():
        abort(422)
    new_character = Character()
    new_character.from_dict(data)
    new_character.save()
    return make_response("success",200)
