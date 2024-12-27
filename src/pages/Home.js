import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseList from '../components/CourseList';

const Home = ({ courses }) => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to Western Governors University eLearning</h2>
        <CourseList courses={courses} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

