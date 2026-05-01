// client/src/components/Hero.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import myImage from "../assets/Gemini_Generated_Image_ks87bqks87bqks87.svg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="hero" 
      className="pt-28 min-h-[80vh] flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-8 max-w-7xl mx-auto font-sans text-black dark:text-white transition-colors duration-300"
    >
      <motion.div 
        className="flex-1 max-w-2xl mt-12 md:mt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-[4rem] leading-[1.1] font-light mb-2">
          Hello I'm <span className="font-bold">Nidhesh Soni.</span>
        </motion.h1>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-[4rem] leading-[1.1] font-light mb-2">
          <span className="font-bold">Full-Stack</span>{' '}
          {/* THE MAGIC HOLLOW TEXT: Defaults to black stroke, flips to white stroke in dark mode */}
          <span className="font-bold text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white] transition-colors duration-300">
            Developer
          </span>
        </motion.h1>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-[4rem] leading-[1.1] font-light mb-6">
          Based In <span className="font-bold">India.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 pr-0 md:pr-12 transition-colors duration-300">
          I'm Nidhesh Soni. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </motion.p>

        {/* Social Icons - Dynamic switching */}
        <motion.div variants={itemVariants} className="flex space-x-4">
          
          {/* Active/Filled Icon - GitHub */}
          <a 
            href="https://github.com/NIDhesh04" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center rounded transition-colors duration-300 
            border-2 border-black bg-black text-white hover:bg-gray-800 
            dark:border-white dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <FaGithub size={22} />
          </a>
          
          {/* Outline Icon - LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/nidhesh-soni-27b80622b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center rounded transition-colors duration-300 
            border-2 border-black text-black hover:bg-black hover:text-white 
            dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <FaLinkedinIn size={20} />
          </a>
          
          {/* Outline Icon - LeetCode */}
          <a 
            href="https://leetcode.com/u/nidheshsoni/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center rounded transition-colors duration-300 
            border-2 border-black text-black hover:bg-black hover:text-white 
            dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <SiLeetcode size={20} />
          </a>

        </motion.div>
      </motion.div>

      <motion.div 
        className="flex-1 flex justify-end w-full max-w-md md:max-w-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-full bg-white transition-colors duration-300 flex justify-center items-center">
          <img 
            src={myImage} 
            alt="Nidhesh Soni Illustration" 
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}