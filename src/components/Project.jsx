import { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Project.css';

export default function Project({
  title,
  description,
  images,
  githubLink,
  liveLink,
  leftSide = false
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    if (images?.length > 1) {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images?.length > 1) {
      setDirection(-1);
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleImageClick = () => {
    if (liveLink) {
      window.open(liveLink, '_blank');
    }
  };

  return (
    <div className={`project-container ${leftSide ? 'left-side' : 'right-side'}`}>
      <div
        className="image-section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleImageClick}
      >
        {images?.length > 0 && (
          <div className="image-wrapper">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={title}
                className="project-image motion-image"
                custom={direction}
                initial={{ x: direction > 0 ? -650 : 650, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? 650 : -650, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>
        )}

        {/* Navigation arrows */}
        {images.length > 1 && isHovered && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="nav-arrow nav-arrow-left"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="nav-arrow nav-arrow-right"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="image-indicators">
            {images.map((_, index) => (
              <div
                key={index}
                className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="content-section">
        <h1 className="project-title">{title}</h1>
        <p className="project-description">{description}</p>

        <div className="buttons-container">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-button github-button">
              <Github size={20} />
              GitHub
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-button live-button">
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
