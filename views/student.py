from flask import Blueprint, render_template, redirect, url_for, flash
from flask_login import login_required, current_user
from models import Enrollment, Course, Unit, Attendance

student_bp = Blueprint('student', __name__)

@student_bp.route('/dashboard')
@login_required
def student_dashboard():
    if current_user.role != 'student':
        return redirect(url_for('home'))
    enrollments = Enrollment.query.filter_by(student_id=current_user.id).all()
    return render_template('student_dashboard.html', enrollments=enrollments)

@student_bp.route('/view_units/<int:course_id>')
@login_required
def view_units(course_id):
    if current_user.role != 'student':
        return redirect(url_for('home'))
    units = Unit.query.filter_by(course_id=course_id).all()
    return render_template('view_units.html', units=units)

@student_bp.route('/register_units/<int:course_id>', methods=['GET', 'POST'])
@login_required
def register_units(course_id):
    if current_user.role != 'student':
        return redirect(url_for('home'))
    if request.method == 'POST':
        unit_ids = request.form.getlist('unit_ids')
        for unit_id in unit_ids:
            enrollment = Enrollment(student_id=current_user.id, course_id=course_id, unit_id=unit_id)
            db.session.add(enrollment)
        db.session.commit()
        flash('Units registered!', 'success')
        return redirect(url_for('student.student_dashboard'))
    units = Unit.query.filter_by(course_id=course_id).all()
    return render_template('register_units.html', units=units)

@student_bp.route('/view_attendance')
@login_required
def view_attendance():
    if current_user.role != 'student':
        return redirect(url_for('home'))
    attendance_records = Attendance.query.filter_by(student_id=current_user.id).all()
    return render_template('view_attendance.html', attendance_records=attendance_records)

@student_bp.route('/view_grades')
@login_required
def view_grades():
    if current_user.role != 'student':
        return redirect(url_for('home'))
    enrollments = Enrollment.query.filter_by(student_id=current_user.id).all()
    return render_template('view_grades.html', enrollments=enrollments)

@student_bp.route('/view_transcript')
@login_required
def view_transcript():
    if current_user.role != 'student':
        return redirect(url_for('home'))
    
    enrollments = Enrollment.query.filter_by(student_id=current_user.id).all()
    transcript = {}
    
    for enrollment in enrollments:
        course = Course.query.get(enrollment.course_id)
        unit = Unit.query.get(enrollment.unit_id)
        if course.title not in transcript:
            transcript[course.title] = []
        transcript[course.title].append({
            'unit_title': unit.title,
            'grade': enrollment.grade
        })
    
    return render_template('view_transcript.html', transcript=transcript)
