import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <Container className="hero-content">
        <Row className="align-items-center min-vh-100">
          <Col lg={8} md={10} className="mx-auto text-center">
            <div className="hero-text" data-aos="fade-up" data-aos-delay="200">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Raj Aryan</span>
              </h1>
              <h2 className="hero-subtitle">
                Web Developer | CSE Student | Full-Stack Learner
              </h2>
              <p className="hero-description">
                Passionate about creating innovative web solutions and exploring the latest technologies. 
                Currently pursuing B.Tech (4th year) in Computer Science and Engineering.
              </p>
              
              <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
                <Button 
                  className="btn-custom me-3 mb-3"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline-light" 
                  className="btn-outline-custom mb-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>
              
              <div className="social-links" data-aos="fade-up" data-aos-delay="600">
                <a href="https://github.com/rajaryan2003" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/raj-aryan-1b17732ab" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="mailto:rajaryanfront@gmail.com" className="social-link">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="800">
          <FaArrowDown className="scroll-icon" />
          <span>Scroll Down</span>
        </div>
      </Container>
    </section>
  );
};

export default Header; 