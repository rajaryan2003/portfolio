import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiExpress, SiBootstrap } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Counter App",
      description: "A modern counter application built with React, Redux Toolkit, and TypeScript. Features include increment, decrement, reset functionality with state management.",
      tech: ["React", "Redux Toolkit", "TypeScript"],
      icons: [<FaReact />, <SiRedux />, <SiTypescript />],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "ToDo List App",
      description: "A feature-rich todo application with add, edit, delete, and mark as complete functionality. Built with React and modern CSS.",
      tech: ["React", "JavaScript", "CSS"],
      icons: [<FaReact />, <FaCode />, <FaCode />],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "TextUtils App",
      description: "A text utility application that provides various text manipulation features like case conversion, word counting, and text analysis.",
      tech: ["React", "Bootstrap", "JavaScript"],
      icons: [<FaReact />, <SiBootstrap />, <FaCode />],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Blogify Website",
      description: "A full-stack blog platform with user authentication, CRUD operations, and responsive design. Built with Node.js, Express, and MongoDB.",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      icons: [<FaNodeJs />, <SiExpress />, <FaDatabase />, <FaCode />],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tic Tac Toe - HTML/CSS/JS",
      description: "Classic Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. Features include game logic, score tracking, and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      icons: [<FaCode />, <FaCode />, <FaCode />],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tic Tac Toe - React",
      description: "Modern Tic Tac Toe game built with React. Includes game state management, player turns, win detection, and game reset functionality.",
      tech: ["React", "JavaScript", "CSS"],
      icons: [<FaReact />, <FaCode />, <FaCode />],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Bootstrap. Features smooth animations, dark/light mode, and mobile-first design.",
      tech: ["React", "Bootstrap", "CSS"],
      icons: [<FaReact />, <SiBootstrap />, <FaCode />],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">My Projects</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Here are some of the projects I've worked on
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-image-container">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    className="project-image"
                    alt={project.title}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                
                <Card.Body className="project-body">
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                  
                  <div className="project-tech">
                    <div className="tech-icons">
                      {project.icons.map((icon, iconIndex) => (
                        <span key={iconIndex} className="tech-icon">
                          {icon}
                        </span>
                      ))}
                    </div>
                    <div className="tech-badges">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} className="tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="more-projects" data-aos="fade-up">
              <p className="more-projects-text">
                More projects coming soon! I'm constantly working on new ideas and learning new technologies.
              </p>
              <a href="https://github.com/rajaryan2003" target="_blank" rel="noopener noreferrer" className="btn-custom">
                View All Projects
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects; 