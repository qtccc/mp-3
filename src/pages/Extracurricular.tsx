import React from 'react';
import Header from '../components/Header';  // Import Header
import Nav from '../components/Nav';        // Import Nav
import Footer from '../components/Footer';  // Import Footer
import '../css/extracurricular.css';        // Import your CSS file
import '../css/main.css'; // Main.css for consistent <main> styling

const Extracurricular: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />

      <main className="main-wrapper">
        <section className="experience-section">
          <h2 className="experience-title">Transition to Boston University (TTBU)</h2>
          <p className="experience-role">Mentor</p>
          <ul className="experience-list">
            <li className="experience-item">
              Actively mentor new students through TTBU, a student-led organization dedicated to supporting their transition at Boston University.
            </li>
            <li className="experience-item">
            Share insights from personal experience, offering actionable advice on managing university life, enhancing academic success, and exploring career pathways in tech, helping students build confidence and make informed decisions
            </li>
            <li className="experience-item">
            Lead workshops and discussions on topics such as academic planning, campus opportunities, and internship preparation, fostering both professional development and a strong sense of community within the computer science department
            </li>
          </ul>
        </section>

        <section className="experience-section">
          <h2 className="experience-title">Boston University Student Government</h2>
          <p className="experience-role">F.E.A.S.T. Senate Committee Member</p>
          <ul className="experience-list">
            <li className="experience-item">
              F.E.A.S.T: Focus on Food, Equity, Accountability, Sustainability, and Transparency.
            </li>
            <li className="experience-item">
              Advocate for food diversification and plant-forward options in BU dining halls.
            </li>
            <li className="experience-item">
              Serve as intermediaries between students and administration to enhance the dining experience for all.
            </li>
          </ul>
        </section>

        <section className="experience-section">
          <h2 className="experience-title">Hack4Impact (Boston University)</h2>
          <p className="experience-role">Junior Development Team Member</p>
          <ul className="experience-list">
            <li className="experience-item">
              Worked on full-stack skill building through workshops and creation of web development projects.
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Extracurricular;