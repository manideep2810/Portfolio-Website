import React from 'react';
// Temporarily comment out BallCanvas
// import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

// Import tech icons
import { 
  html, css, javascript, typescript, reactjs, redux, 
  tailwind, nodejs, mongodb, threejs, git, figma, docker 
} from '../assets';

const Tech = () => {
  // Function to get icon URL for each technology
  const getIconUrl = (techName) => {
    switch (techName) {
      case 'HTML 5':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
      case 'CSS 3':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';
      case 'JavaScript':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
      case 'TypeScript':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg';
      case 'React JS':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
      case 'Redux Toolkit':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg';
      case 'Tailwind CSS':
        return 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg';
      case 'Node JS':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg';
      case 'MongoDB':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg';
      case 'Three JS':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png';
      case 'git':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg';
      case 'figma':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg';
      case 'PostgreSQL':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg';
      default:
        return `https://placehold.co/400?text=${techName}`;
    }
  };

  return (
    <div id="tech" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
            <div className='w-20 h-20 rounded-full bg-tertiary flex items-center justify-center'>
              <img 
                src={getIconUrl(technology.name)}
                alt={technology.name}
                className='w-16 h-16 object-contain'
              />
            </div>
            <p className='text-center text-secondary mt-2'>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech; 