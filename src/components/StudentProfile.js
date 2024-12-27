import React from 'react';

const StudentProfile = ({ student }) => {
  return (
    <div>
      <h2>{student.name}'s Profile</h2>
      <p>Email: {student.email}</p>
    </div>
  );
}

export default StudentProfile;

