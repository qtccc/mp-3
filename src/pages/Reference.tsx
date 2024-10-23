import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/reference.css'; // Import the corresponding CSS file
import '../css/main.css'; // Main.css for consistent <main> styling

const Reference: React.FC = () => (
  <>
    <Header />
    <Nav />

    <main>
      <section className="reference">
        <h2>Professional Contact</h2>
        <p><strong>Name:</strong> Rhoda Bilansky</p>
        <p><strong>Position:</strong> Interlibrary Loan Supervisor</p>
        <p><strong>Email:</strong> <a href="mailto:rhoda@bu.edu">rhoda@bu.edu</a></p>
      </section>

      <section className="reference">
        <h2>Personal Contact</h2>
        <p><strong>Name:</strong> Maggie Chen</p>
        <p><strong>Email:</strong> <a href="mailto:mengjinc@gmail.com">mengjinc@gmail.com</a></p>
      </section>
    </main>

    <Footer />
  </>
);

export default Reference;