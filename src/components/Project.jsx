import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import './Project.css';

export default function Project({
  title,
  description,
  images,
  githubLink,
  liveLink,
  leftSide = false,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    if (liveLink) window.open(liveLink, '_blank');
  };

  return (
    <div className={`project-container ${leftSide ? 'left-side' : 'right-side'}`}>
      {/* Image Slider */}
      <div
        className="image-section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleImageClick}
      >
        {images && images.length > 0 && (
          <>
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${title}-${index}`}
                  className={`slider-image ${isHovered ? 'hovered' : ''}`}
                />
              ))}
            </div>

            {images.length > 1 && isHovered && (
              <>
                <button
                  className="nav-arrow nav-arrow-left"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="nav-arrow nav-arrow-right"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {images.length > 1 && (
              <div className="image-indicators">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Text Content */}
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
