import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ProfileCard from '../components/ProfileCard';
import Notification from '../components/Notification';

const DashboardPage = ({ user, courses, notifications }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetch (e.g., from an API or database)
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const enrolledCourses = courses.filter((course) => user.enrolledCourses.includes(course.id));

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.firstName}!</h2>
      
      <div className="dashboard-section">
        <h3>Your Profile</h3>
        <ProfileCard user={user} />
      </div>
      
      <div className="dashboard-section">
        <h3>Your Courses</h3>
        <div className="courses-list">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p>You are not enrolled in any courses yet. <Link to="/courses">Browse courses</Link></p>
          )}
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Notifications</h3>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <Notification key={index} notification={notification} />
          ))
        ) : (
          <p>No new notifications.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;

