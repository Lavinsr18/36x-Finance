import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; // Optional for styling

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <li className='lli'><Link to="/"><h2 style={{fontSize:"30px", marginLeft:"50px"}}><b>36x</b> Finance</h2></Link></li>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Tools</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Servicees</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="hero-buttons">
      <button className="wat-btn">Join WhatsApp</button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;