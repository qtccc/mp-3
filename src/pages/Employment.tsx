import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/employment.css'; // Import the corresponding CSS file
import '../css/main.css'; // Main.css for consistent <main> styling

const Employment: React.FC = () => (
  <>
    <Header />
    <Nav />

    <main>
      <section className="job">
        <h2>Mugar Memorial Library</h2>
        <p><strong>Position: </strong>Library Assistant</p>
        <p><strong>Years: </strong>2023 - Present</p>
        <ul>
          <li>Delivering resources to patrons at BU and partner libraries across the country.</li>
        </ul>
      </section>

      <section className="job">
        <h2>New York City Board of Elections</h2>
        <p><strong>Position: </strong>Election Inspector & Chinese Interpreter</p>
        <p><strong>Years: </strong>2017 - 2024</p>
        <ul>
          <li>Ensured a smooth and secure voting process by verifying voter information and troubleshooting issues, demonstrating strong attention to detail and problem-solving abilities</li>
          <li>Provided Mandarin Chinese interpretation services, facilitating clear communication and supporting a diverse population</li>
          <li>Collaborated with a team to set up and maintain the voting site, ensuring accessibility and compliance with regulatory standards, emphasizing teamwork and adaptability in dynamic environments</li>
        </ul>
      </section>
    </main>

    <Footer />
  </>
);

export default Employment;