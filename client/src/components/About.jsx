import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUserGraduate, FaFilePdf, FaFileWord } from 'react-icons/fa';
import myImage from '../assets/download (10).png';

export default function About() {
  // Use the environment variable from Vite, defaulting to localhost if not found
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  
  // Triggers the backend download route using the dynamic URL
  const handleDownload = (format) => {
    window.open(`${API_BASE_URL}/api/cv/download/${format}`, '_blank');
  };

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-6xl mx-auto font-sans">
      
      {/* Brutalist ID Card Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row w-full bg-white dark:bg-gray-900 
          border-4 border-black dark:border-white 
          shadow-[12px_12px_0px_#000000] dark:shadow-[12px_12px_0px_#ffffff] transition-colors duration-300"
      >
        
        {/* Left Side: Profile Photo Box */}
        <div className="w-full md:w-2/5 p-8 flex justify-center items-center 
          border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white 
          bg-gray-100 dark:bg-black transition-colors duration-300"
        >
          <div className="w-full max-w-[280px] aspect-square overflow-hidden border-4 border-black dark:border-white bg-white">
            <img 
              src={myImage} 
              alt="Nidhesh Soni Profile" 
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </div>

        {/* Right Side: Bio, Status, Location, and CV Buttons */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white uppercase tracking-tight">
            About Me.
          </h2>

          {/* Rubric Requirements: Location & Status */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <FaUserGraduate size={16} className="text-black dark:text-white" /> 
              CS Student
            </span>
            <span className="hidden sm:block text-black dark:text-white">|</span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt size={16} className="text-black dark:text-white" /> 
              Jaipur, India
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            I am a passionate MERN stack developer currently studying computer science. 
            I specialize in building responsive, scalable full-stack web applications. 
            I believe in writing clean code, focusing on user experience, and turning complex problems into elegant solutions.
          </p>

          {/* Brutalist CV Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            
            <button 
              onClick={() => handleDownload('pdf')}
              className="flex-1 flex justify-center items-center gap-3 px-6 py-4 
                border-2 border-black dark:border-white 
                bg-black dark:bg-white text-white dark:text-black font-bold 
                hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-colors duration-300"
            >
              <FaFilePdf size={18} /> Download CV (PDF)
            </button>
            
            <button 
              onClick={() => handleDownload('docx')}
              className="flex-1 flex justify-center items-center gap-3 px-6 py-4 
                border-2 border-black dark:border-white 
                text-black dark:text-white font-bold 
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
            >
              <FaFileWord size={18} /> Download CV (DOCX)
            </button>

          </div>
        </div>

      </motion.div>

    </section>
  );
}