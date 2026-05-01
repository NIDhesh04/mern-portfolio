// client/src/components/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// 1. Import the image here
import aarogyaImage from '../assets/unnamed (5).png'; 
import anamoly from '../assets/unnamed (6).png'; 
import graphED from '../assets/unnamed (7).png'; 

const projectsData = [
  {
    title: 'AarogyaLink Telemedicine',
    category: 'Dev',
    description: 'A telemedicine platform featuring...',
    techStack: ['MERN', 'Redis', 'Docker', 'BullMQ', 'Claude API', 'SSE'],
    githubLink: 'https://github.com/NIDhesh04/aarogyalink-telemedicine',
    liveLink: '#',
    image: aarogyaImage // 2. Use the imported variable without quotes
  },
  // ... other projects
  {
    title: 'GraphED: Bounded GraphRAG',
    category: 'AI/ML', // Assigned to AI/ML
    description: 'A GraphRAG engine enforcing a strict ontology to isolate contexts and mitigate LLM hallucinations. Implemented spreading activation to resolve semantic overlap and optimized retrieval physics to significantly reduce latency and token usage.',
    techStack: ['FastAPI', 'Neo4j', 'Mistral LLM', 'LangChain'],
    githubLink: 'https://github.com/NIDhesh04/minorproject_graphrag',
    liveLink: '#',
    image: graphED
  },
  {
    title: 'Industrial Anomaly Detection',
    category: 'AI/ML', // Assigned to AI/ML
    description: 'Benchmarked deep learning models for real-time inference on industrial datasets. Evaluated robustness against factory distortions and enhanced interpretability by generating anomaly heatmaps to localize surface cracks and structural defects.',
    techStack: ['PyTorch', 'ViT', 'DINOv2', 'PatchCore', 'OpenCV'],
    githubLink: '#',
    liveLink: '#',
    image: anamoly
  }
];

export default function Projects() {
  // Set the default filter to 'All'
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Hardcode the three specific categories you want
  const filterCategories = ['All', 'AI/ML', 'Dev'];

  // Filter projects based on the assigned category string
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 border-b-4 border-black dark:border-white pb-6"
      >
        <h2 className="text-4xl md:text-6xl font-light text-black dark:text-white transition-colors duration-300">
          Selected <span className="font-bold">Projects.</span>
        </h2>
      </motion.div>

      {/* Category Filter Buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-4 mb-12"
      >
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-300
              ${selectedCategory === category 
                ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white' 
                : 'bg-transparent text-black border-black hover:bg-gray-100 dark:text-white dark:border-white dark:hover:bg-gray-800'
              }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col bg-white dark:bg-gray-900 border-4 border-black dark:border-white 
                shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ffffff] 
                transition-all duration-300 hover:-translate-y-2 hover:translate-x-2 
                hover:shadow-[0px_0px_0px_#000000] dark:hover:shadow-[0px_0px_0px_#ffffff]"
            >
              
              {/* Project Image Box */}
              <div className="w-full border-b-4 border-black dark:border-white overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black dark:border-white text-black dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-3 border-2 border-black dark:border-white 
                      bg-black dark:bg-white text-white dark:text-black font-bold 
                      hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-colors duration-300"
                  >
                    <FaGithub size={20} /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-3 border-2 border-black dark:border-white 
                      text-black dark:text-white font-bold 
                      hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                  >
                    Live Demo <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}