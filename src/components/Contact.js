import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { 
  FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, 
  FaPaperPlane, FaUser, FaComments 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "rajaryanfront@gmail.com",
      link: "mailto:rajaryanfront@gmail.com",
      color: "#667eea"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 7250281353",
      link: "tel:+917250281353",
      color: "#764ba2"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "raj-aryan-1b17732ab",
      link: "https://linkedin.com/in/raj-aryan-1b17732ab",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "rajaryan2003",
      link: "https://github.com/rajaryan2003",
      color: "#333"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Let's work together on your next project
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="contact-info" data-aos="fade-right">
              <h3 className="contact-heading">Contact Information</h3>
              <p className="contact-description">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
              
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-item"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="contact-icon" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h5>{item.title}</h5>
                      <p>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links-contact" data-aos="fade-up" data-aos-delay="400">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  <a href="https://github.com/rajaryan2003" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/raj-aryan-1b17732ab" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/rajaryan2003" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href="mailto:rajaryanfront@gmail.com" className="social-icon">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <Card className="contact-form-card" data-aos="fade-left">
              <Card.Body>
                <div className="form-header">
                  <FaComments className="form-icon" />
                  <h3>Send Me a Message</h3>
                  <p>I'll get back to you as soon as possible</p>
                </div>
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FaUser className="input-icon" />
                          Name
                        </Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Your Name" 
                          required 
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FaEnvelope className="input-icon" />
                          Email
                        </Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="your.email@example.com" 
                          required 
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <FaComments className="input-icon" />
                      Subject
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="What's this about?" 
                      required 
                      className="form-control-custom"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>
                      <FaComments className="input-icon" />
                      Message
                    </Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Tell me about your project or just say hello!" 
                      required 
                      className="form-control-custom"
                    />
                  </Form.Group>
                  
                  <Button type="submit" className="btn-custom w-100">
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="contact-footer" data-aos="fade-up">
              <p>
                Currently available for freelance opportunities and full-time positions. 
                Let's create something amazing together!
              </p>
              <div className="availability-badge">
                <span className="status-dot"></span>
                Available for opportunities
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 