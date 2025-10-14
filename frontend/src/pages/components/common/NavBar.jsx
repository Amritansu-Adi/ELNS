import React, { useState } from 'react';
import logo from '../../../assets/images/logo.jpg';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header'>
      <div className='logo'>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
          <img src={logo} alt="Logo" />
        </button>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><button onClick={() => navigate('/')}>Home</button></li>
          <li><button onClick={() => navigate('/news')}>News</button></li>
          <li><button onClick={() => navigate('/career')}>Career</button></li>
          <li><button onClick={() => navigate('/aktuprep')}>Exam</button></li>
        </ul>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
};

export default NavBar;