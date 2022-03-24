# Initializing things
from flask import Flask, send_from_directory
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_cors import CORS
import os
# init the app


login= LoginManager()
# do inits for database stuff
db = SQLAlchemy()
migrate = Migrate()

if os.environ.get('FLASK_ENV') == 'development':
    cors= CORS()

def create_app(config_class=Config):
    app = Flask(__name__, static_folder='../client/build', static_url_path='/')
    # init my Login Manager
    app.config.from_object(config_class)
    # link our config to our app

    login.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)
    # register plugins

    #Cors
    if os.environ.get('FLASK_ENV') == 'development':
        cors.init_app(app)
    
    # send here when not logged in if trying to access login page
    login.login_view='auth.login'
    login.login_message = "Please Login to enter the Shadow of Holy Light Game"
    login.login_message_category='light'

    

    @app.route('/')
    def serve():
        return send_from_directory(app.static_folder, 'index.html')

    @app.errorhandler(404)
    def not_found(e):
        return app.send_static_file('index.html')

    from .blueprints.auth import bp as auth_bp
    app.register_blueprint(auth_bp)

    from .blueprints.main import bp as main_bp
    app.register_blueprint(main_bp)

    from .blueprints.api import bp as api_bp
    app.register_blueprint(api_bp)



    
    return app