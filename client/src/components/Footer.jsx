// client/src/components/Footer.jsx
import { FaLinkedinIn, FaGithub, FaArrowUp, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  
  // Smooth scroll back to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Added a thick top border to separate the footer brutally from the main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t-4 border-black dark:border-white">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold tracking-tighter text-black dark:text-white uppercase mb-2">
            Nidhesh Soni.
          </h2>
          <p className="text-sm font-bold text-gray-500 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-4">
          <a 
            href="https://github.com/NIDhesh04" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/nidhesh-soni-27b80622b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>
          {/* Email Icon Added Here */}
          <a 
            href="mailto:nidheshsoni@gmail.com" 
            className="w-10 h-10 flex justify-center items-center rounded border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
          >
            <FaEnvelope size={18} />
          </a>
          <a 
            href="https://leetcode.com/u/nidheshsoni/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center rounded border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
          >
            <SiLeetcode size={18} />
          </a>
        </div>

        {/* Right Side: Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-3 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
        >
          Top 
          <FaArrowUp className="transform transition-transform duration-300 group-hover:-translate-y-1" size={14} />
        </button>

      </div>
    </footer>
  );
}