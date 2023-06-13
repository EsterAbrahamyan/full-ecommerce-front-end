import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="custom-footer" style={{ backgroundColor: '#f07bb9', color: 'white', padding: '20px', textAlign: 'center' }}>
      <Container>
        <Row className="py-3">
          <Col xs={12} md={6} className="text-center text-md-start">
            <a href="/" className="text-light text-decoration-none">
              Logo
            </a>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <small>&copy; {new Date().getFullYear()} SweetEst. All rights reserved.</small>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col xs={12} className="text-center">
            <a href="#" className="text-light me-3">
              <FaFacebookF />
            </a>
            <a href="#" className="text-light me-3">
              <FaTwitter />
            </a>
            <a href="#" className="text-light">
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
