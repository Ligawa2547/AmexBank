from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField, SelectField, TextAreaField, DateTimeField
from wtforms.validators import DataRequired, Email, EqualTo, ValidationError
from models import College

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    role = SelectField('Role', choices=[('student', 'Student'), ('instructor', 'Instructor'), ('admin', 'Admin')], validators=[DataRequired()])
    college = SelectField('College', choices=[], validators=[DataRequired()])
    submit = SubmitField('Register')

    def __init__(self, *args, **kwargs):
        super(RegistrationForm, self).__init__(*args, **kwargs)
        self.college.choices = [(college.id, college.name) for college in College.query.all()]

    def validate_email(self, email):
        if not email.data.endswith('@wgu.college') and email.data != 'wilsonligawa@gmail.com':
            raise ValidationError('Please use your institution email @wgu.college to register.')

class CourseForm(FlaskForm):
    course_id = StringField('Course ID', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    level = SelectField('Level', choices=[('Bachelor\'s', 'Bachelor\'s'), ('Master\'s', 'Master\'s')], validators=[DataRequired()])
    college = SelectField('College', choices=[], validators=[DataRequired()])
    instructor = SelectField('Instructor', choices=[], validators=[DataRequired()])
    submit = SubmitField('Create Course')

    def __init__(self, *args, **kwargs):
        super(CourseForm, self).__init__(*args, **kwargs)
        self.college.choices = [(college.id, college.name) for college in College.query.all()]
        self.instructor.choices = [(user.id, user.username) for user in User.query.filter_by(role='instructor').all()]

class UnitForm(FlaskForm):
    unit_code = StringField('Unit Code', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    content = TextAreaField('Content', validators=[DataRequired()])
    course = SelectField('Course', choices=[], validators=[DataRequired()])
    prerequisites = TextAreaField('Prerequisites', validators=[DataRequired()])
    submit = SubmitField('Create Unit')

    def __init__(self, *args, **kwargs):
        super(UnitForm, self).__init__(*args, **kwargs)
        self.course.choices = [(course.id, course.title) for course in Course.query.all()]

class ExamForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    date = DateTimeField('Date', validators=[DataRequired()])
    course = SelectField('Course', choices=[], validators=[DataRequired()])
    submit = SubmitField('Schedule Exam')

    def __init__(self, *args, **kwargs):
        super(ExamForm, self).__init__(*args, **kwargs)
        self.course.choices = [(course.id, course.title) for course in Course.query.all()]                                                                  
