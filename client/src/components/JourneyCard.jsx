import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function JourneyCard({ data, isLeft, illustration }) {
  // Determine icon based on type
  const isEducation = data.type === 'education';

  return (
    <div className={`relative flex flex-col md:flex-row items-center w-full ${isLeft ? '' : 'md:flex-row-reverse'}`}>
      
      {/* 1. The Timeline Node (Solid Black Diamond) */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="absolute left-8 md:left-1/2 w-6 h-6 -ml-3 z-10 transform rotate-45
          bg-black dark:bg-white border-4 border-white dark:border-gray-900 transition-colors duration-300"
      />

      {/* 2. The Text Card Container */}
      <div className={`w-full md:w-1/2 flex pl-20 md:pl-0 py-4 ${isLeft ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'}`}>
        
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-lg bg-white dark:bg-gray-900 
            border-4 border-black dark:border-white 
            shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#ffffff] p-6 md:p-8
            hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0px_0px_0px_#000000] dark:hover:shadow-[0px_0px_0px_#ffffff] 
            transition-all duration-300 relative text-left"
        >
          
          {/* Year Badge */}
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider 
            border-2 border-black dark:border-white text-black dark:text-white">
            {data.year}
          </div>

          {/* Icon & Title */}
          <div className="flex items-start gap-3 mb-2 text-black dark:text-white">
            <div className="mt-1">
              {isEducation ? <FaGraduationCap size={22} /> : <FaBriefcase size={20} />}
            </div>
            <h3 className="text-xl md:text-2xl font-bold leading-tight">{data.title}</h3>
          </div>

          {/* Institution */}
          <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-4 border-b-2 border-dashed border-gray-300 dark:border-gray-600 pb-3">
            {data.institution}
          </h4>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {data.description}
          </p>

        </motion.div>
      </div>

      {/* 3. The Illustration Container (Hidden on Mobile, Visible on Desktop) */}
      <div className={`hidden md:flex md:w-1/2 items-center ${isLeft ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-sm opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale"
        >
          {illustration}
        </motion.div>
      </div>

    </div>
  );
}