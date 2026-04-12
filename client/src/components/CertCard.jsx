import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';

export default function CertCard({ title, issuer, date, link, icon: Icon = FaAward }) {
  return (
    <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 md:p-8 
      bg-white dark:bg-gray-900 
      border-4 border-black dark:border-white 
      shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#ffffff] 
      hover:-translate-y-1 hover:translate-x-1 
      hover:shadow-[0px_0px_0px_#000000] dark:hover:shadow-[0px_0px_0px_#ffffff] 
      transition-all duration-300 w-full mb-6"
    >
      
      {/* Left Side: Icon & Details */}
      <div className="flex items-start gap-5 md:gap-8">
        
        {/* Brutalist Icon Box */}
        <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex justify-center items-center 
          bg-black dark:bg-white text-white dark:text-black 
          transition-transform duration-300 group-hover:scale-105"
        >
          <Icon className="text-2xl md:text-3xl" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1 leading-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
            {issuer}
          </p>
          
          {/* Mobile Date (Hidden on Desktop) */}
          <span className="text-sm font-medium text-gray-500 dark:text-gray-500 mt-3 sm:hidden">
            {date}
          </span>
        </div>
      </div>

      {/* Right Side: Date & Verify Button */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-6 sm:mt-0 gap-3">
        
        {/* Desktop Date (Hidden on Mobile) */}
        <span className="hidden sm:block text-sm font-bold text-gray-500 dark:text-gray-400 tracking-wider">
          {date}
        </span>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-2.5 w-full sm:w-auto
            border-2 border-black dark:border-white 
            text-black dark:text-white font-bold 
            hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
            transition-colors duration-300"
        >
          Verify <FaExternalLinkAlt size={14} />
        </a>
      </div>

    </div>
  );
}