from flask import Blueprint, render_template, redirect, url_for, flash
from flask_login import login_required, current_user
from forms import CourseForm, UnitForm
from models import db, College, Course, Unit

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/dashboard')
@login_required
def admin_dashboard():
    if current_user.role != 'admin':
        return redirect(url_for('home'))
    return render_template('admin_dashboard.html')

@admin_bp.route('/create_program', methods=['GET', 'POST'])
@login_required
def create_program():
    if current_user.role != 'admin':
        return redirect(url_for('home'))
    form = CourseForm()
    if form.validate_on_submit():
        course = Course(course_id=form.course_id.data, title=form.title.data, description=form.description.data, level=form.level.data, college_id=form.college.data, instructor_id=form.instructor.data)
        db.session.add(course)
        db.session.commit()
        flash('Course created!', 'success')
        return redirect(url_for('admin.admin_dashboard'))
    return render_template('create_program.html', form=form)

@admin_bp.route('/create_unit', methods=['GET', 'POST'])
@login_required
def create_unit():
    if current_user.role != 'admin':
        return redirect(url_for('home'))
    form = UnitForm()
    if form.validate_on_submit():
        unit = Unit(unit_code=form.unit_code.data, title=form.title.data, content=form.content.data, course_id=form.course.data, prerequisites=form.prerequisites.data)
        db.session.add(unit)
        db.session.commit()
        flash('Unit created!', 'success')
        return redirect(url_for('admin.admin_dashboard'))
    return render_template('create_unit.html', form=form)

@admin_bp.route('/manage_units')
@login_required
def manage_units():
    if current_user.role != 'admin':
        return redirect(url_for('home'))
    units = Unit.query.all()
    return render_template('manage_units.html', units=units)
