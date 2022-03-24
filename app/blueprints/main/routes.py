from .import bp as main #this makes it easier to know what's going on
from .forms import CreateCharacter
from app.models import Character, Item, CharItemJoin, UserCharJoin
from flask import render_template, request, flash, redirect, url_for
import requests
from flask_login import  login_required, current_user

@main.route('/index', methods=['GET'])
@login_required
def index():
    return render_template('index.html.j2')

@main.route('/adventure', methods=['GET'])
@login_required
def adventure():
    return render_template('adventure.html.j2')

@main.route('/create_character', methods=['POST'])
@login_required
def create_character():
    form = CreateCharacter()
    if request.method =='POST' and form.validate_on_submit():
        # Create a new user
        try:
            new_user_data = {
                "name":form.name.data.title(),
                "race":int(form.race.data),
                "char_class":int(form.char_class.data),
                "strength":int(form.strength.data),
                "dexterity":int(form.dexterity.data),
                "constitution":int(form.constitution.data),
                "intelligence":int(form.intelligence.data),
                "wisdom":int(form.wisdom.data),
                "charisma":int(form.charisma.data),
            }
            #create an empty User
            new_user_object = CreateCharacter()
            #build user with form data
            new_user_object.from_dict(new_user_data)
            #save user to the database
            new_user_object.save()
        except:
            flash('There was an unexpected Error creating your Character Please Try Again.','danger')
            #Error Return
            return render_template('create_character.html.j2', form = form)
        # If it worked
        flash('You have successfully created a character!', 'warning')
        return redirect(url_for('main.index'))
    #Get Return
    
    return render_template('create_character.html.j2', form=form)

