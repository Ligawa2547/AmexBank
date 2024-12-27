import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <header>
        <h1>About Western Governors University</h1>
        <p>Revolutionizing education for students around the world</p>
      </header>

      <section>
        <h2>Our Vision</h2>
        <p>Western Governors University (WGU) was founded with one goal in mind: to make high-quality education accessible and affordable to anyone, anywhere. We are an online, non-profit university that provides competency-based education, allowing you to progress as you master the material—at your own pace, on your own schedule. Our mission is to empower individuals to improve their lives through education, and we are committed to making that possible for you.</p>
        
        <h2>Why Choose WGU?</h2>
        <ul>
          <li><strong>Affordable:</strong> Our low, flat-rate tuition ensures that you can get the education you need without the crushing burden of student debt.</li>
          <li><strong>Flexible:</strong> Learn at your own pace with 24/7 access to course materials, so you can balance your education with work and life commitments.</li>
          <li><strong>Accredited:</strong> WGU is regionally accredited by the Northwest Commission on Colleges and Universities (NWCCU), ensuring your degree is respected by employers worldwide.</li>
          <li><strong>Supportive:</strong> With personal mentors and a vibrant online community, you’ll never feel alone as you work towards your degree.</li>
        </ul>

        <h2>Our Programs</h2>
        <p>WGU offers a wide range of accredited undergraduate and graduate degree programs in fields such as business, IT, healthcare, and education. Whether you're looking to start a new career or advance in your current field, WGU has a program to meet your goals.</p>

        <Link to="/courses" className="btn">Explore Our Programs</Link>
      </section>
    </div>
  );
};

export default About;

