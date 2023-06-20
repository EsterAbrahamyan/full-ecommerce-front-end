import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer" style={{ backgroundColor: 'rgb(221, 188, 210)', color: 'black', padding: '20px', textAlign: 'center' }}>
      <Container>
        <Row className="py-2">
        <Col xs={12} md={6} className="text-center text-md-start">
            <a href="img/logo.jpg" className="logo text-decoration-none">
              SweetEst
            </a>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <small style={{ fontSize: '14px', color: 'black' }}>&copy; {new Date().getFullYear()} SweetEst. All rights reserved.</small>
          </Col>
        </Row>
        <Row className="pb-2">
          <Col xs={12} className="text-center">
            <span style={{ fontSize: '20px' }}>
              <a href="#" className="social-icon">
                <FaFacebookF style={{ color: 'black' }} />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter style={{ color: 'black' }} />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram style={{ color: 'black' }} />
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
