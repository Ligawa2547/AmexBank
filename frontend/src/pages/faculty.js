import React from 'react';

const Faculty = () => {
  return (
    <div>
      <header>
        <h1>Meet Our Faculty</h1>
        <p>Learn from experienced instructors dedicated to your success</p>
      </header>

      <section>
        <h2>Our Expert Faculty</h2>
        <p>WGU faculty members are leaders in their fields, bringing real-world expertise and a passion for teaching to the virtual classroom. They are here to support you as you work toward your degree and career goals.</p>
        <div className="faculty-list">
          <div className="faculty-member">
            <h3>Dr. Jane Smith</h3>
            <p>Professor of Business Administration. 15 years of experience in corporate leadership and teaching.</p>
          </div>
          <div className="faculty-member">
            <h3>Prof. John Doe</h3>
            <p>Professor of Information Technology. Expert in cybersecurity with over 10 years of industry experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;

