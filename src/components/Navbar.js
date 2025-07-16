import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}
      expanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    >
      <Container>
        <NavbarBrand href="#home" className="brand">
          <FaCode className="brand-icon" />
          <span className="brand-text">Raj Aryan</span>
        </NavbarBrand>
        
        <NavbarToggle aria-controls="basic-navbar-nav">
          {isExpanded ? <FaTimes /> : <FaBars />}
        </NavbarToggle>
        
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('about')}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('skills')}>Skills</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 