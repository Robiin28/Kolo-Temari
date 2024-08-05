import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import "./headland.css";

export const HeadLand = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>Kolo Temari</h1>
            <img src="/image/Kolo.png" alt="Background" className="logoImage" />
            <span className="spam">ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
          <div className="action-btn">
            <button className="loginBtn">LogOut</button>
          </div>
          <div className="user-profile">
            <img src="/image/students.png" alt="User" className="user-image" />
            <FaUser className="user-icon" />
          </div>
        </div>
      </section>

      <header>
        <nav className='flexSB'>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li className={click ?"login" : "log"}> <Link to ='/login'>Login</Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/course'>All Courses</Link></li>
          </ul>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>

          <div className="search-container">
            <input type="text" placeholder="Search course" className="search-input" />
            <FaSearch className="search-icon" />
          </div>

         
        </nav>
      </header>
    </>
  );
};
