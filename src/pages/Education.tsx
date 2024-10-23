import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/education.css'; // Import the corresponding CSS file
import '../css/main.css'; // Main.css for consistent <main> styling

const Education: React.FC = () => (
  <>
    <Header />  {/* Include Header */}
    <Nav />     {/* Include Navigation */}

    <main>
      <section className="school">
        <img src="/images/bu_logo.jpg" alt="Boston University" className="school-logo" />
        <div className="school-info">
          <h2>Boston University</h2>
          <p><strong>Degree: </strong>Bachelor of Arts in Computer Science</p>
          <p><strong>Years Attending: </strong>2021 - 2025</p>
          <p><strong>Relevant Courses: </strong>Web Application Development (in-progress), Data Science Tools and Applications (in-progress), Concepts of Programming Languages (in-progress), Algorithms, Data Structures, Software Engineering, Computer Systems, Database Systems, etc.</p>
        </div>
      </section>

      <section className="school">
        <img src="/images/bths_logo.JPG" alt="Brooklyn Technical High School" className="school-logo" />
        <div className="school-info">
          <h2>Brooklyn Technical High School</h2>
          <p><strong>Diploma: </strong>High School Diploma (Biological Sciences Major)</p>
          <p><strong>Years Attended: </strong>2016 - 2020</p>
        </div>
      </section>
    </main>

    <Footer />  {/* Include Footer */}
  </>
);

export default Education;