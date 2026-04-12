// client/src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution featuring user authentication, product filtering, a shopping cart, and Stripe payment integration. Built entirely from scratch.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    githubLink: '#',
    liveLink: '#',
    // You can replace this with a real screenshot later
    image: 'https://via.placeholder.com/800x500/eeeeee/000000?text=Project+Screenshot' 
  },
  {
    title: 'Task Management Dashboard',
    description: 'A Kanban-style productivity app. Users can create boards, drag-and-drop tasks, and track project progress in real-time using WebSockets.',
    techStack: ['React', 'MongoDB', 'Framer Motion', 'Socket.io'],
    githubLink: '#',
    liveLink: '#',
    image: 'https://via.placeholder.com/800x500/eeeeee/000000?text=Project+Screenshot'
  },
  {
    title: 'Portfolio Website V1',
    description: 'A minimalist, high-contrast personal portfolio designed to showcase projects and skills. Features dark mode, responsive design, and CSS animations.',
    techStack: ['React', 'Tailwind CSS', 'Vite'],
    githubLink: '#',
    liveLink: '#',
    image: 'https://via.placeholder.com/800x500/eeeeee/000000?text=Project+Screenshot'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 border-b-4 border-black dark:border-white pb-6"
      >
        <h2 className="text-4xl md:text-6xl font-light text-black dark:text-white transition-colors duration-300">
          Selected <span className="font-bold">Projects.</span>
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            // Animate each card sliding up on scroll
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    className="px-3 py-1 text-xs font-bold uppercase tracking-wider 
                      border-2 border-black dark:border-white text-black dark:text-white"
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
      </div>
    </section>
  );
}