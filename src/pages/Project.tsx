import React from 'react';
import Header from '../components/Header';  // Import Header
import Nav from '../components/Nav';        // Import Nav
import Footer from '../components/Footer';  // Import Footer
import '../css/project.css';                // Import your CSS file
import '../css/main.css'; // Main.css for consistent <main> styling
import Calculator from "../components/Calculator.tsx";

const Project: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      
      <main className="main-wrapper">
      <section className="project-section">
        <h2 className="project-title">Calculator Project</h2>
        <p className="project-description">
          A simple interactive calculator that allows users to perform basic arithmetic operations.
        </p>
        <Calculator /> 
      </section>

        <section className="project">
          <h2>Spotify Playlist Recommendation System</h2>
          <p>
            <strong>Group Project</strong> | <strong>Role:</strong> Front-End Developer
          </p>
          <p>
            <strong>Technology Stack:</strong> HTML, CSS, JavaScript, Spotify Web API
          </p>
          <p>
            <strong>GitHub Link:</strong>{" "}
            <a href="https://github.com/JordanEspinal17/CS411" target="_blank" rel="noopener noreferrer">
              https://github.com/JordanEspinal17/CS411
            </a>
          </p>

          {/* <p><strong>Timeframe:</strong> </p> */}

          <h3>Project Overview:</h3>
          <p>
            This project involved building a web application that leverages the Spotify Web API to generate song recommendations and playlists based on a movie. The system interacts with Spotify’s vast music database, allowing users to receive song suggestions tailored to their taste. The goal of the project was to improve the music discovery experience by creating dynamic playlists or song suggestions.
          </p>

          <h3>My Role:</h3>
          <p>
            I was responsible for developing the front-end of the application, ensuring that the user experience was smooth, intuitive, and visually appealing. My key responsibilities included:
          </p>
          <ul>
            <li>Designing the layout and UI components using HTML and CSS to create a user-friendly experience across devices.</li>
            <li>Implementing responsive web design techniques to ensure compatibility across different screen sizes (desktop, tablet, mobile).</li>
            <li>
              Collaborating with the back-end team to integrate the Spotify Web API into the front-end using JavaScript, enabling real-time song recommendations and playlist creation.
            </li>
            <li>
              Developing interactive features, such as buttons for playlist generation, track selection, and playlist saving, using JavaScript.
            </li>
            <li>
              Ensuring the interface was visually engaging and user-friendly by incorporating animations, hover effects, and clear navigation cues.
            </li>
          </ul>
</section>
      </main>

      <Footer />
    </>
  );
};

export default Project;