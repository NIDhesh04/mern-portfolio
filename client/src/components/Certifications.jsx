// client/src/components/Certifications.jsx
import { motion } from 'framer-motion';
import CertCard from './CertCard';
import { SiCoursera, SiLeetcode } from 'react-icons/si';

// Import the custom LeetCode badge image
import leetcodeBadgeImage from '../assets/leetcode.png';

const certificationsData = [
  {
    id: 1,
    title: 'Linear Algebra for Machine Learning and Data Science',
    issuer: 'Coursera',
    date: 'Recent',
    link: 'https://coursera.org/share/9dcae4655a857e299e4f207deef079a1',
    icon: SiCoursera
  },
  {
    id: 2,
    title: 'LeetCode 365 Days Badge',
    issuer: 'LeetCode',
    date: 'Continuous',
    // We keep the original link here just as a reference, 
    // but we will override it in the render mapping below.
    link: 'https://leetcode.com/u/nidheshsoni/', 
    icon: SiLeetcode,
    image: leetcodeBadgeImage 
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 }, 
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 max-w-5xl mx-auto font-sans">
      
      {/* Section Header */}
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
              // THE MAGIC TRICK: If cert.image exists, use it as the hyperlink. 
              // Otherwise, use the standard web URL.
              link={cert.image ? cert.image : cert.link} 
              icon={cert.icon}
              image={cert.image} 
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Optional Achievement Note */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs"
      >
        * Continuous learning and daily problem-solving in progress.
      </motion.p>

    </section>
  );
}