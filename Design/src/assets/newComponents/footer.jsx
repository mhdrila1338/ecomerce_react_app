import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div style={{position:"relative",width:"100%"}}>
    <footer className="bg-dark text-light py-4 mt-5" style={{width:"100%"}}>
    
      <Container>
        <Row>
          
          <Col md={4} className="text-center text-md-start">
            <h5>ABC PVT LMT</h5>
            <p>123, Dummy Street, City, Country</p>
            <p>Email: contact@abcpvtlmt.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>

          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-light text-decoration-none">
                  Terms of Service
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <a
              href="https://facebook.com"
              className="text-light me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="text-light me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </Col>
        </Row>
           
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2025 ABC PVT LMT. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
}

export default Footer;
