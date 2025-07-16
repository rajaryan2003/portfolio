import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skillsCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: ["JavaScript", "Python", "C", "C++", "TypeScript (Basic)"],
      color: "#667eea"
    },
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
      color: "#764ba2"
    },
    {
      title: "Backend",
      icon: <FaCode />,
      skills: ["Node.js", "Express.js"],
      color: "#f093fb"
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MongoDB", "MySQL"],
      color: "#f5576c"
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "VS Code", "Netlify", "Vercel", "Firebase"],
      color: "#4facfe"
    }
  ];

  return (
    <section id="about" className="section about-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">About Me</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Get to know me better
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="about-content" data-aos="fade-right">
              <div className="about-image-wrapper">
                <img 
                  src={require('../assets/profile.jpg')} 
                  alt="Raj Aryan Profile" 
                  className="about-profile-img"
                />
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-text" data-aos="fade-left">
              <h3 className="about-heading">Who I Am</h3>
              <p className="about-bio">
                I'm Raj Aryan, a dedicated B.Tech 4th year Computer Science student and aspiring full-stack web developer. 
                I enjoy turning ideas into real-world web applications and continuously expanding my knowledge in modern tech stacks. 
                I'm actively learning Data Structures and Algorithms to strengthen my problem-solving abilities. 
                I'm also highly curious to explore new technologies and deeply interested in the evolving field of Artificial Intelligence.
              </p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <h4>4th Year</h4>
                  <p>B.Tech CSE</p>
                </div>
                <div className="stat-item">
                  <h4>7+</h4>
                  <p>Projects</p>
                </div>
                <div className="stat-item">
                  <h4>5+</h4>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12}>
            <h3 className="skills-heading text-center mb-5" data-aos="fade-up">
              Technical Skills Summary
            </h3>
          </Col>
        </Row>

        <Row>
          {skillsCategories.map((category, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="skill-category-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <Card.Body className="text-center">
                  <div className="category-icon" style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <Card.Title className="category-title">{category.title}</Card.Title>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About; 