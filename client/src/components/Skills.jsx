// client/src/components/Skills.jsx
import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiGit, 
  SiSass, 
  SiNestjs, 
  SiStorybook, 
  SiSocketdotio 
} from 'react-icons/si';

// Combined your MERN stack skills with the ones from the image
const skillsData = [
  { name: 'JavaScript', level: 95, icon: SiJavascript },
  { name: 'React.js', level: 90, icon: SiReact },
  { name: 'Node.js', level: 85, icon: SiNodedotjs },
  { name: 'MongoDB', level: 80, icon: SiMongodb },
  { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss },
  { name: 'Git', level: 85, icon: SiGit },
  { name: 'Sass/Scss', level: 80, icon: SiSass },
  { name: 'Nest.Js', level: 70, icon: SiNestjs },
  { name: 'Storybook', level: 65, icon: SiStorybook },
  { name: 'Socket.io', level: 75, icon: SiSocketdotio },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto font-sans">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white transition-colors duration-300">
          My <span className="font-bold">Skills</span>
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          
          return (
            <motion.div 
              key={index} 
              variants={cardVariants}
              // The 'group' class is the magic that triggers hover effects on child elements
              className="group relative flex flex-col items-center justify-center p-6 aspect-square 
                border-2 border-black bg-white text-black 
                dark:border-white dark:bg-gray-900 dark:text-white
                transition-all duration-300 ease-in-out cursor-pointer overflow-hidden
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              
              {/* Percentage Text (Hidden until hover) */}
              <span className="absolute top-3 right-3 text-xs font-bold opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {skill.level}%
              </span>

              {/* Logo Icon */}
              <Icon className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110" />
              
              {/* Skill Name */}
              <span className="font-bold tracking-wide text-sm md:text-base text-center">
                {skill.name}
              </span>

              {/* Brutalist Progress Bar at the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-transparent">
                {/* We use an inline style to dynamically pass the width percentage. 
                  The bar fills up from 0 to the skill level on hover.
                */}
                <div 
                  className="h-full bg-white dark:bg-black transition-all duration-700 ease-out w-0 group-hover:w-[var(--skill-level)]"
                  style={{ '--skill-level': `${skill.level}%` }}
                />
              </div>

            </motion.div>
          );
        })}
      </motion.div>
      
    </section>
  );
}