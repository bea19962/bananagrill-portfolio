// src/components/Projects.js
import React from 'react';
import ProjectCard from './BaseCard';

const projectData = [
  {
    title: 'Project 1',
    description: 'An amazing project that solves many problems.',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Another amazing project that helps people.',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://example.com/project2',
  },
  {
    title: 'Project 3',
    description: 'A creative project for learning and growth.',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://example.com/project3',
  },
  {
   title: 'Project 4',
   description: 'An amazing project that solves many problems.',
   image: 'https://via.placeholder.com/300x180',
   link: 'https://example.com/project1',
 },
 {
   title: 'Project 5',
   description: 'Another amazing project that helps people.',
   image: 'https://via.placeholder.com/300x180',
   link: 'https://example.com/project2',
 },
 {
   title: 'Project 6',
   description: 'A creative project for learning and growth.',
   image: 'https://via.placeholder.com/300x180',
   link: 'https://example.com/project3',
 },
];

const Projects = () => {
  return (
    <section style={projectsContainerStyle}>
      <h2 style={headingStyle}>My Projects</h2>
      <div style={cardsContainerStyle}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

// Styles for Projects
const projectsContainerStyle = {
  padding: '40px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
};

const headingStyle = {
  fontSize: '2rem',
  color: '#333',
  marginBottom: '24px',
};

const cardsContainerStyle = {
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
};

export default Projects;
