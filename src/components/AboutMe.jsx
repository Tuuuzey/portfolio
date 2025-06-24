import { motion } from 'framer-motion';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <motion.section
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        className="about-me">
      <h1>Hey! I'm Miłosz 👋</h1>

      <p>I aspire to the position of junior Fullstack Developer.</p>

      <p>With a particular interest in front-end technologies.</p>

      <p>Check out my projects and skills.</p>

      <p id="localization">
        <em>📌 Poland, Lublin/Warsaw</em>
      </p>
    </motion.section>
  );
}
