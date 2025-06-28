import { useState, useRef } from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LiaChevronCircleLeftSolid, LiaChevronCircleRightSolid } from "react-icons/lia";

import './Project.css';
import { motion, useScroll, useTransform } from 'framer-motion';

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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [20, 0, 0, -20]);

  function goToNext() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }
  function goToPrevious() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }
  function handleImageClick() {
    if (liveLink) window.open(liveLink, '_blank');
  }

  return (
    <motion.div
      ref={ref}
      className={`project-container ${leftSide ? 'left-side' : 'right-side'}`}
      style={{ rotateX, transformPerspective: 1000 }}
    >
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
                  <LiaChevronCircleLeftSolid size={24} />
                </button>
                <button
                  className="nav-arrow nav-arrow-right"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <LiaChevronCircleRightSolid size={24} />
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
              <FaGithub size={20} />
              GitHub
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-button live-button">
              <FaExternalLinkAlt size={20} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
