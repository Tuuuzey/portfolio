// Projects.jsx
import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment integration with Stripe, product management, shopping cart functionality, and responsive design. Admin dashboard for inventory management and order tracking.",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop"
      ],
      githubLink: "https://github.com/username/ecommerce-platform",
      liveLink: "https://ecommerce-demo.com",
      leftSide: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Modern task management application with drag-and-drop functionality, real-time collaboration, and team workspace features. Built using React, TypeScript, and Firebase. Includes project timelines, file attachments, comments system, and mobile-responsive design.",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
      ],
      githubLink: "https://github.com/username/task-manager",
      liveLink: "https://taskmanager-demo.com",
      leftSide: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with beautiful visualizations and forecasts. Features current weather conditions, 7-day forecasts, interactive maps, weather alerts, and location-based services. Built with React, D3.js for charts, and OpenWeatherMap API integration.",
      images: [
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1601134467661-3d775b2b2ee1?w=600&h=400&fit=crop"
      ],
      githubLink: "https://github.com/username/weather-dashboard",
      liveLink: "https://weather-app-demo.com",
      leftSide: true
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Full-featured social media platform with real-time messaging, post sharing, user profiles, and social interactions. Includes photo/video uploads, story features, following system, notifications, and content moderation. Built with React, Socket.io, and PostgreSQL.",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop"
      ],
      githubLink: "https://github.com/username/social-platform",
      liveLink: "https://social-demo.com",
      leftSide: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing web development skills and projects. Features smooth animations, dark/light mode toggle, contact form integration, blog section, and optimized performance. Built with React, Framer Motion, and deployed on Vercel with CI/CD pipeline.",
      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
      ],
      githubLink: "https://github.com/username/portfolio-website",
      liveLink: "https://portfolio-demo.com",
      leftSide: true
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <header className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">A collection of my recent work.</p>
        </header>

        <div className="projects-list">
          {projectsData.map((project) => (
            <div key={project.id} className="project-item">
              <Project
                title={project.title}
                description={project.description}
                images={project.images}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                leftSide={project.leftSide}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;