import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css'; 

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/employment" className={({ isActive }) => (isActive ? 'active' : '')}>
            Work Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/references" className={({ isActive }) => (isActive ? 'active' : '')}>
            References
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" className={({ isActive }) => (isActive ? 'active' : '')}>
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/extracurricular" className={({ isActive }) => (isActive ? 'active' : '')}>
            Extracurricular
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;