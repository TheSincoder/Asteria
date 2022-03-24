from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, RadioField
from wtforms.validators import DataRequired
from flask import url_for
from jinja2 import Markup

class CreateCharacter(FlaskForm):
    name = StringField('', validators=[DataRequired()])
    submit = SubmitField('Create Character')

    r1 = "Human Male"
    r2 = "Human Female"
    r3 = "Elf Male"
    r4 = "Elf Female"
    r5 = "Dwarf Male"
    r6 = "Dwarf Female"
    r7 = "Orc Male"
    r8 = "Orc Female"
    r9 = "Rusyon Male"
    r10 = "Rusyon Female"
    r11 = "Ervakt"

    r1_img=Markup( f'<img src=" static/images/human_male.jpg" style="width:10vh">')
    r2_img=Markup( f'<img src=" static/images/human_female.jpg" style="width:10vh">')
    r3_img=Markup( f'<img src=" static/images/elf_male.jpg" style="width:10vh">')
    r4_img=Markup( f'<img src=" static/images/elf_female.jpg" style="width:10vh">')
    r5_img=Markup( f'<img src=" static/images/dwarf_male.jpg" style="width:10vh">')
    r6_img=Markup( f'<img src=" static/images/dwarf_female.jpg" style="width:10vh">')
    r7_img=Markup( f'<img src=" static/images/orc_male.jpg" style="width:10vh">')
    r8_img=Markup( f'<img src=" static/images/orc_female.jpg" style="width:10vh">')
    r9_img=Markup( f'<img src=" static/images/rusyon_male.jpg" style="width:10vh">')
    r10_img=Markup( f'<img src=" static/images/rusyon_female.jpg" style="width:10vh">')
    r11_img=Markup( f'<img src=" static/images/ervakt.jpg" style="width:10vh">')

    race = RadioField('Race', validators=[DataRequired()],
        choices = [(r1, r1_img),(r2, r2_img),(r3, r3_img),(r4, r4_img),(r5, r5_img),
        (r6, r6_img),(r7, r7_img),(r8, r8_img),(r9, r9_img),(r10, r10_img),
        (r11, r11_img)])

    c1 = "Human Male"
    c2 = "Human Female"
    c3 = "Elf Male"
    c4 = "Elf Female"
    c5 = "Dwarf Male"
    c6 = "Dwarf Female"
    

    c1_img=Markup( f'<img src=" static/images/cleric.jpg" style="max-height:26vh">')
    c2_img=Markup( f'<img src=" static/images/mage.jpg" style="max-height:26vh">')
    c3_img=Markup( f'<img src=" static/images/monk.jpg" style="max-height:26vh">')
    c4_img=Markup( f'<img src=" static/images/ranger.jpg" style="max-height:26vh">')
    c5_img=Markup( f'<img src=" static/images/rogue.jpg" style="max-height:26vh">')
    c6_img=Markup( f'<img src=" static/images/warrior.jpg" style="max-height:26vh">')
    

    char_class = RadioField('Class', validators=[DataRequired()],
        choices = [(c1, c1_img),(c2, c2_img),(c3, c3_img),(c4, c4_img),(c5, c5_img),
        (c6, c6_img)])