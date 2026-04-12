// client/src/components/Certifications.jsx
import { motion } from 'framer-motion';
import CertCard from './CertCard';
import { 
  SiGooglecloud, 
  SiCoursera, 
  SiMeta, 
  SiJavascript 
} from 'react-icons/si';
// Add this line right below:
import { FaLinkedin } from 'react-icons/fa';
const certificationsData = [
  {
    id: 1,
    title: 'Meta Full-Stack Engineer Professional Certificate',
    issuer: 'Meta / Coursera',
    date: 'Expected April 2026',
    link: 'https://coursera.org/verify/example',
    icon: SiMeta
  },
  {
    id: 2,
    title: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: 'Jan 2025',
    link: 'https://google.com/verify/example',
    icon: SiGooglecloud
  },
  {
    id: 3,
    title: 'Advanced JavaScript (ES6+)',
    issuer: 'HackerRank',
    date: 'Nov 2024',
    link: 'https://hackerrank.com/certificates/example',
    icon: SiJavascript
  },
  {
    id: 4,
    title: 'Project Management Foundations',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2024',
    link: 'https://linkedin.com/learning/verify/example',
    icon: FaLinkedin
  }
];

export default function Certifications() {
  // Animation variants for the container (staggers the children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each card appears 0.2s after the previous one
      }
    }
  };

  // Animation variants for individual cards
  const itemVariants = {
    hidden: { opacity: 0, x: -30 }, // Slide in from the left
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 max-w-5xl mx-auto font-sans">
      
      {/* Section Header - Matching your Experience/Skills style */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white transition-colors duration-300">
          My <span className="font-bold">Certifications.</span>
        </h2>
        <div className="mt-4 w-24 h-1.5 bg-black dark:bg-white mx-auto" />
      </motion.div>

      {/* Staggered List of Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-2"
      >
        {certificationsData.map((cert) => (
          <motion.div key={cert.id} variants={itemVariants}>
            <CertCard 
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              link={cert.link}
              icon={cert.icon}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Optional Achievement Note */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center text-gray-500 dark:text-gray-400 italic text-sm"
      >
        * Continuous learning in progress... Currently exploring Cloud Native Architectures.
      </motion.p>

    </section>
  );
}