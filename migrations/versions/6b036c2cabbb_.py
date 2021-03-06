"""empty message

Revision ID: 6b036c2cabbb
Revises: f6b6b57794f3
Create Date: 2022-03-17 15:01:04.277160

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6b036c2cabbb'
down_revision = 'f6b6b57794f3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=150), nullable=True),
    sa.Column('first_name', sa.String(length=150), nullable=True),
    sa.Column('last_name', sa.String(length=150), nullable=True),
    sa.Column('email', sa.String(length=150), nullable=True),
    sa.Column('password', sa.String(length=200), nullable=True),
    sa.Column('created_on', sa.DateTime(), nullable=True),
    sa.Column('token', sa.String(), nullable=True),
    sa.Column('token_exp', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_index(op.f('ix_user_token'), 'user', ['token'], unique=True)
    op.add_column('character', sa.Column('strength', sa.Integer(), nullable=True))
    op.add_column('character', sa.Column('dexterity', sa.Integer(), nullable=True))
    op.add_column('character', sa.Column('constitution', sa.Integer(), nullable=True))
    op.add_column('character', sa.Column('intelligence', sa.Integer(), nullable=True))
    op.add_column('character', sa.Column('wisdom', sa.Integer(), nullable=True))
    op.add_column('character', sa.Column('charisma', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'user_char_join', 'user', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user_char_join', type_='foreignkey')
    op.drop_column('character', 'charisma')
    op.drop_column('character', 'wisdom')
    op.drop_column('character', 'intelligence')
    op.drop_column('character', 'constitution')
    op.drop_column('character', 'dexterity')
    op.drop_column('character', 'strength')
    op.drop_index(op.f('ix_user_token'), table_name='user')
    op.drop_table('user')
    # ### end Alembic commands ###
