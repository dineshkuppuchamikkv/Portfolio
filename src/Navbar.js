import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-light">
      <div className="container justify-content-center">
        <Link className="navbar-brand" to="/"><img src="favicon.ico" className='logo' alt="Logo"></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav font"> 
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Projects">Projects</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/PingMe">Ping Me</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
