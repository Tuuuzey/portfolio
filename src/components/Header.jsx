import './Header.css';
import { motion, useTransform, useScroll, useMotionTemplate } from 'framer-motion';
import { useState, useEffect } from 'react';
import GithubIcon from '../assets/techLogos/github.png';
import LinkedinIcon from '../assets/techLogos/linkedin.png';

const MOBILE_BREAKPOINT = 1200;
const SCROLL_RANGES = {
  header: [0, 600],
  buttons: [0, 600], 
  margins: [0, 600],
  listWidth: [0, 300, 600, 800],
  sideElements: [300, 400],
  leftRightMargins: [400, 600],
  borderRadius: [200, 600]
};

const TRANSFORM_VALUES = {
  headerFont: [100, 80],
  buttonFont: [1, 0.8],
  headerMargin: [0.7, 0.5],
  listWidth: [100, 100, 40, 25],
  sideOpacity: [1, 0],
  sideScale: [1, 0],
  leftRightMargin: [8, 2],
  borderRadius: [8, 25],
  headerWidth: [100, 40] 
};

export default function Header({ sectionRefs }) {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const headerFont = useTransform(scrollY, SCROLL_RANGES.header, TRANSFORM_VALUES.headerFont);
  const headerFontWithUnit = useMotionTemplate`${headerFont}%`;

  const buttonFontSize = useTransform(scrollY, SCROLL_RANGES.buttons, TRANSFORM_VALUES.buttonFont);
  const buttonFontSizeUnit = useMotionTemplate`${buttonFontSize}rem`;

  const headerMiddleWrapperMargin = useTransform(scrollY, SCROLL_RANGES.margins, TRANSFORM_VALUES.headerMargin);
  const headerMarginWithUnit = useMotionTemplate`${headerMiddleWrapperMargin}rem`;

  const sideOpacity = useTransform(scrollY, SCROLL_RANGES.sideElements, TRANSFORM_VALUES.sideOpacity);
  const sideScale = useTransform(scrollY, SCROLL_RANGES.sideElements, TRANSFORM_VALUES.sideScale);

  const borderRadius = useTransform(scrollY, SCROLL_RANGES.borderRadius, TRANSFORM_VALUES.borderRadius);
  const borderRadiusUnit = useMotionTemplate`0 0 ${borderRadius}px ${borderRadius}px`;

  const socialLinks = {
    github: 'http://example.com',
    linkedin: 'http://example.com'
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const scrollToSection = (sectionKey) => {
    const section = sectionRefs[sectionKey]?.current;
    if (!section) return;
    let offset = -100;
    if (sectionKey === 'contact') {
      const elementRect = section.getBoundingClientRect();
      const elementTop = window.pageYOffset + elementRect.top;
      const scrollY = elementTop - (window.innerHeight - elementRect.height) + 210;

      window.scrollTo({
        top: scrollY,
        behavior: 'smooth',
      });
    }
    else if(sectionKey === 'about') {
      offset = 0;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    else {
      const top = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    setIsMenuOpen(false);
  };

  const navigationItems = [
    { key: 'about', label: 'About me' },
    { key: 'projects', label: 'Projects' },
    { key: 'tech', label: 'Technologies' },
    { key: 'contact', label: 'Contact' }
  ];

  if (isMobile) {
    return (
      <>
        <img className="background-image" alt="" />
        <motion.header className="mobile-header">
          <div className="mobile-nav">
            <div className="mobile-logo">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <img src={GithubIcon} width="30" height="30" alt="GitHub" />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <img 
                  src={LinkedinIcon} 
                  width="30" 
                  height="30" 
                  alt="LinkedIn" 
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </div>
            
            <button 
              className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <motion.nav
            className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
            initial={false}
            animate={{
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="mobile-menu-list">
              {navigationItems.map(({ key, label }) => (
                <li key={key}>
                  <button onClick={() => scrollToSection(key)}>
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a 
                  href="cv.pdf" 
                  download 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.nav>
        </motion.header>
      </>
    );
  }

  return (
    <>
      <img className="background-image" alt="" />
      <motion.header 
        className="desktop-header"
        style={{ fontSize: headerFontWithUnit }}
      >
        <motion.div
          className="header-container"
          style={{
            borderRadius: borderRadiusUnit,
          }}
        >
          <motion.div
            className="header-left"
            style={{
              opacity: sideOpacity,
              scale: sideScale,
            }}
          >
            <div className="social-icons">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <img src={GithubIcon} width="40" height="40" alt="GitHub" />
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <img src={LinkedinIcon} width="40" height="40" alt="LinkedIn" />
              </a>
            </div>
          </motion.div>

          <motion.nav 
            className="header-middle" 
            style={{ marginTop: headerMarginWithUnit }}
          >
            <ul className="navigation-list">
              {navigationItems.map(({ key, label }) => (
                <li key={key}>
                  <motion.button
                    onClick={() => scrollToSection(key)}
                    style={{ fontSize: buttonFontSizeUnit }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            className="header-right"
            style={{
              opacity: sideOpacity,
              scale: sideScale,
            }}
          >
            <motion.a
              href="cv.pdf"
              download
              className="download-button"
              whileTap={{ scale: 0.90 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.header>
    </>
  );
}