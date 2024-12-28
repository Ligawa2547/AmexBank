from flask import Blueprint, render_template, redirect, url_for, flash
from flask_login import login_required, current_user
from forms import UnitForm, ExamForm
from models import db, Course, Unit, Exam

lecturer_bp = Blueprint('lecturer', __name__)

@lecturer_bp.route('/dashboard')
@login_required
def lecturer_dashboard():
    if current_user.role != 'instructor':
        return redirect(url_for('home'))
    courses = Course.query.filter_by(instructor_id=current_user.id).all()
    return render_template('lecturer_dashboard.html', courses=courses)

@lecturer_bp.route('/post_content/<int:course_id>', methods=['GET', 'POST'])
@login_required
def post_content(course_id):
    if current_user.role != 'instructor':
        return redirect(url_for('home'))
    form = UnitForm()
    if form.validate_on_submit():
        unit = Unit(title=form.title.data, content=form.content.data, course_id=course_id)
        db.session.add(unit)
        db.session.commit()
        flash('Content posted!', 'success')
        return redirect(url_for('lecturer.lecturer_dashboard'))
    return render_template('post_content.html', form=form)

@lecturer_bp.route('/schedule_exam/<int:course_id>', methods=['GET', 'POST'])
@login_required
def schedule_exam(course_id):
    if current_user.role != 'instructor':
        return redirect(url_for('home'))
    form = ExamForm()
    if form.validate_on_submit():
        exam = Exam(title=form.title.data, date=form.date.data, course_id=course_id)
        db.session.add(exam)
        db.session.commit()
        flash('Exam scheduled!', 'success')
        return redirect(url_for('lecturer.lecturer_dashboard'))
    return render_template('schedule_exam.html', form=form)
