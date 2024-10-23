import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/main.css'; // Main.css for consistent <main> styling
import '../css/home.css'; // Import the corresponding CSS file

const Home: React.FC = () => (
  <>
    <Header /> {/* Include the Header component */}
    <Nav />    {/* Include the Nav component */}
    
    <main>
      <h2>About Me</h2>
      <p>
        Welcome to my online resume! My name is Tiffany Chen. I'm currently a computer science student at Boston University. 
        Here, you will find details about my academic journey, professional experiences, interests, and projects.
      </p>
      <img src="images/Chen_Tiffany_534-0717-retouched.jpg" alt="Tiffany Chen" id="image" />
    </main>

    <Footer /> {/* Include the Footer component */}
  </>
);

export default Home;