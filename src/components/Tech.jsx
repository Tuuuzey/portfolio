import './Tech.css'
import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

export default function Technologie({ image, desc }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const bounds = ref.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const rotateAmountX = ((y - centerY) / centerY) * -20;
    const rotateAmountY = ((x - centerX) / centerX) * 20;

    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="tech-wrapper">
      <motion.div
        className="tech-circle"
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src={image}
          alt="Tech Logo"
          className="tech-logo-img"
        />
      </motion.div>
      <p className="tech-desc">{desc}</p>
    </div>
  );
}
