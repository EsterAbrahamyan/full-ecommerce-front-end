import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header-scn">
      {/* Header Top Section Start */}
      <section className="hdr-top-scn">
        <div className="container">
          <div className="announcement">
            <div className="announce-item active">Անվճար առաքում Երևանի տարածքում</div>
            {/* <div className="announce-item">20% FLAT DISCOUNT IN ALL PRODUCTS. USE CODE: WELCOME2023</div>
            <div className="announce-item">COMPLIMENTARY GIFT WITH ANY ₹500 ORDERS <a href="#">Privacy Policy</a></div> */}
          </div>
        </div>
      </section>
      {/* Header Top Section End */}
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
                  <li><a href="#">Services 1</a></li>
                  <li><a href="#">Services 2</a></li>
                  <li><a href="#">Services 3</a></li>
                  <li><a href="#">Services 4</a></li>
                  <li><a href="#">Services 5</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Company</a>
                <ul>
                  <li><a href="#">Company 1</a></li>
                  <li><a href="#">Company 2</a></li>
                  <li><a href="#">Company 3</a></li>
                  <li><a href="#">Company 4</a></li>
                  <li><a href="#">Company 5</a></li>
                </ul>
              </li>
              <li className="menu-btn"><a href="#">Contact us</a></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <div className="hdr-right">
            <div className="icons-group">
              {/* <button className="icon search">
                <img src="https://coderwrap.com/wp-content/uploads/2023/01/search.svg" width="28" height="28" alt="Search" />
              </button> */}
              {/* <a href="#" className="icon user">
                <img src="https://coderwrap.com/wp-content/uploads/2023/01/user.svg" width="30" height="30" alt="User" />
              </a> */}
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
