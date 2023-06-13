import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header-scn">
           <div className="container-fluid">
        <div className="hdr-inner">
          <h1 className="logo"><a href="#"><img src="img/logo.jpg" alt=""/>SweetEst</a></h1>
          <nav className="menu">
            <ul>
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li className="dropdown">
                <a href="#">Categories</a>
                <ul>
                  <li><a href="#">Cookies</a></li>
                  <li><a href="#">Cakes</a></li>
                  <li><a href="#">Pastries</a></li>
                  <li><a href="#">Capcakes</a></li>
                  </ul>
              </li>
             
              <li className="menu-btn"><a href="#">Contact us</a></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <div className="hdr-right">
            <div className="icons-group">
            
              <button className="icon cart">
                <span className="countno">0</span>
                <img src="https://coderwrap.com/wp-content/uploads/2023/01/cart.svg" width="36" height="36" alt="Cart" />
              </button>
              <span id="mobiletoggle" className="mobile-toggle">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
