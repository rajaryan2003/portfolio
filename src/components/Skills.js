import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, 
  FaBrain, FaUsers, FaReact, FaNodeJs, FaPython, FaJs, 
  FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMysql, SiExpress, SiVercel, SiNetlify, SiFirebase } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", level: 85, icon: <FaJs /> },
        { name: "Python", level: 75, icon: <FaPython /> },
        { name: "C", level: 70, icon: <FaCode /> },
        { name: "C++", level: 65, icon: <FaCode /> },
        { name: "TypeScript", level: 60, icon: <SiTypescript /> }
      ],
      color: "#667eea"
    },
    {
      title: "Frontend Technologies",
      icon: <FaLaptopCode />,
      skills: [
        { name: "HTML5", level: 90, icon: <FaHtml5 /> },
        { name: "CSS3", level: 85, icon: <FaCss3Alt /> },
        { name: "Bootstrap", level: 80, icon: <FaBootstrap /> },
        { name: "React.js", level: 75, icon: <FaReact /> },
        { name: "JavaScript", level: 85, icon: <FaJs /> }
      ],
      color: "#764ba2"
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", level: 70, icon: <FaNodeJs /> },
        { name: "Express.js", level: 65, icon: <SiExpress /> }
      ],
      color: "#f093fb"
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", level: 70, icon: <SiMongodb /> },
        { name: "MySQL", level: 65, icon: <SiMysql /> }
      ],
      color: "#f5576c"
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { name: "Git", level: 80, icon: <FaGitAlt /> },
        { name: "GitHub", level: 85, icon: <FaGithub /> },
        { name: "VS Code", level: 90, icon: <FaCode /> },
        { name: "Netlify", level: 75, icon: <SiNetlify /> },
        { name: "Vercel", level: 70, icon: <SiVercel /> },
        { name: "Firebase", level: 60, icon: <SiFirebase /> }
      ],
      color: "#4facfe"
    },
    {
      title: "CS Concepts",
      icon: <FaBrain />,
      skills: [
        { name: "Data Structures", level: 75, icon: <FaCode /> },
        { name: "Algorithms", level: 70, icon: <FaCode /> },
        { name: "Operating Systems", level: 65, icon: <FaCode /> },
        { name: "Computer Networks", level: 60, icon: <FaCode /> }
      ],
      color: "#00f2fe"
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      skills: [
        { name: "Problem Solving", level: 80, icon: <FaBrain /> },
        { name: "Team Collaboration", level: 85, icon: <FaUsers /> },
        { name: "Communication", level: 75, icon: <FaUsers /> },
        { name: "Time Management", level: 70, icon: <FaCode /> }
      ],
      color: "#667eea"
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Skills & Expertise</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              My technical skills and competencies
            </p>
          </Col>
        </Row>

        <Row>
          {skillCategories.map((category, index) => (
            <Col lg={6} md={6} className="mb-4" key={index}>
              <Card className="skill-category-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <Card.Body>
                  <div className="category-header">
                    <div className="category-icon" style={{ color: category.color }}>
                      {category.icon}
                    </div>
                    <Card.Title className="category-title">{category.title}</Card.Title>
                  </div>
                  
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <div className="skill-icon">
                            {skill.icon}
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="skills-summary" data-aos="fade-up">
              <h3>Always Learning</h3>
              <p>
                I'm constantly expanding my skill set and exploring new technologies. 
                Currently focusing on advanced React concepts, backend development, and cloud technologies.
              </p>
              <div className="learning-focus">
                <div className="focus-item">
                  <FaReact className="focus-icon" />
                  <span>Advanced React</span>
                </div>
                <div className="focus-item">
                  <FaServer className="focus-icon" />
                  <span>Backend Development</span>
                </div>
                <div className="focus-item">
                  <FaBrain className="focus-icon" />
                  <span>DSA & Problem Solving</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills; 