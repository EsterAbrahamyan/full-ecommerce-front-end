import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-inner">
          <div className="ftr-link">
            <span className="ftr-title">Quick Links</span>
            <div className="menu-footer-menu-container">
              <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Partner With Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ’s</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="ftr-get-app">
            <div className="details">
              <div className="app-stores-ftr">
                <span className="ftr-title">Get the app now:</span>
                <div className="app-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://coderwrap.com/wp-content/uploads/2023/01/app-store.svg" alt="App Store" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://coderwrap.com/wp-content/uploads/2023/01/google-play.svg" alt="Google Play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ftr-stay-connect">
            <span className="ftr-title">Join us on social media</span>
            <ul className="social-media">
              <li>
                <a className="btn-base-m" title="Facebook" href="#">
                  <img src="https://coderwrap.com/wp-content/uploads/2022/12/facebook-icon.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a className="btn-base-m" title="Twitter" href="#">
                  <img src="https://coderwrap.com/wp-content/uploads/2022/12/twitter-icon.svg" alt="Twitter" />
                </a>
              </li>
              <li>
                <a className="btn-base-m" title="Youtube" href="#">
                  <img src="https://coderwrap.com/wp-content/uploads/2023/01/youtube.svg" alt="Youtube" />
                </a>
              </li>
              <li>
                <a className="btn-base-m" title="Instagram" href="#">
                  <img src="https://coderwrap.com/wp-content/uploads/2022/12/instgram-icon.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a className="btn-base-m" title="LinkedIn" href="#">
                  <img src="https://coderwrap.com/wp-content/uploads/2022/12/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
            </ul>
            <div className="single-subscribe-inner">
              <form>
                <input
                  type="email"
                  placeholder="Enter your E-mail"
                  onFocus={(e) => (e.target.placeholder = '')}
                  onBlur={(e) => (e.target.placeholder = 'Enter your E-mail')}
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            Copyright ©
            <span id="year">{currentYear}</span>
            <span className="createby">Coder Wrap</span>. All Rights reserved.
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
