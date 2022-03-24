from app import db, login
from flask_login import UserMixin # This is just for the User Model!
from datetime import datetime as dt, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import secrets


class UserCharJoin(db.Model):
    character_id = db.Column(db.Integer, db.ForeignKey('character.id'), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)

    def remove(self):
        db.session.delete(self)
        db.session.commit()

class User(UserMixin, db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(200))
    created_on = db.Column(db.DateTime, default = dt.utcnow)
    token = db.Column(db.String, index=True, unique=True)
    token_exp = db.Column(db.DateTime)
    user_character = db.relationship(
        'Character',
        secondary = 'user_char_join',
        backref= 'users',        
        lazy='dynamic'
    )

    def get_token(self, exp=86400):
        current_time = dt.utcnow()
        if self.token and self.token_exp > current_time + timedelta(seconds=60):
            return self.token
        self.token = secrets.token_urlsafe(32)
        self.token_exp = current_time + timedelta(seconds=exp)
        self.save()
        return self.token

    def revoke_token(self):
        self.token_exp = dt.utcnow() - timedelta(seconds=61)

    @staticmethod
    def check_token(token):
        u = User.query.filter_by(token=token).first()
        if not u or u.token_exp < dt.utcnow():
            return None
        return u

    def __repr__(self):
        return f'<User: {self.id} | {self.email}>'
    #salts and hashes our password to make it hard to steal
    def hash_password(self, original_password):
        return generate_password_hash(original_password)
    # compares the user password to the password provided in the login form
    def check_hashed_password(self, login_password):
        return check_password_hash(self.password, login_password)

    def from_dict(self, data):
        self.username = data['username']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = self.hash_password(data['password'])

    def to_dict(self):
        return {
            "user_id": self.id,
            "username": self.username,              
            "first_name":self.first_name,
            "last_name":self.last_name,
            "email": self.email,
        }
       

    # saves the user to the database
    def save(self):
        db.session.add(self) # add the user to the db session
        db.session.commit() # save everyuthing in the session to the database

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

class CharItemJoin(db.Model):
    character_id = db.Column(db.Integer, db.ForeignKey('character.id'), primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey('item.id'), primary_key=True)

    def remove(self):
        db.session.delete(self)
        db.session.commit()

class Character(db.Model):
    __tablename__ = 'character'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    race = db.Column(db.String(50))
    char_class = db.Column(db.String(50))
    hp = db.Column(db.Integer)
    defense = db.Column(db.Integer)
    attack = db.Column(db.Integer)
    weapon = db.Column(db.String(50))
    off_hand = db.Column(db.String(50))
    armor = db.Column(db.Integer)
    unit = db.Column(db.Integer)
    strength = db.Column(db.Integer)
    dexterity = db.Column(db.Integer)
    constitution = db.Column(db.Integer)
    intelligence = db.Column(db.Integer)
    wisdom = db.Column(db.Integer)
    charisma = db.Column(db.Integer)
    character_item = db.relationship(
        'Item',
        secondary = 'char_item_join',
        backref= 'characters',        
        lazy='dynamic'
    )

    def from_dict(self, data):
        self.name = data['name']
        self.race = data['race']
        self.char_class = data['char_class']
        self.strength = data['strength']
        self.dexterity = data['dexterity']
        self.constitution = data['constitution']
        self.intelligence = data['intelligence']
        self.wisdom = data['wisdom']
        self.charisma = data['charisma']

    def to_dict(self):
        return {
            "char_id": self.id,
            "name": self.name,              
            "race":self.race,
            "char_class":self.char_class,
            "strength": self.strength,
            "dexterity": self.dexterity,
            "constitution": self.constitution,
            "intelligence": self.intelligence,
            "wisdom": self.wisdom,
            "charisma": self.charisma,
        }
        

    
class Item(db.Model):
    __tablename__ = 'item'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    desc = db.Column(db.String(50))
