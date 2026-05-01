// client/src/components/Timeline.jsx
import { motion } from 'framer-motion';
import JourneyCard from './JourneyCard'; // Ensure this path matches

// --- 1. Custom SVG Illustrations ---
// Geometric Developer Workstation
const WorkstationIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto text-black dark:text-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 250H350" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    <rect x="70" y="130" width="120" height="80" rx="4" stroke="currentColor" strokeWidth="6"/>
    <rect x="210" y="130" width="120" height="80" rx="4" stroke="currentColor" strokeWidth="6"/>
    <path d="M130 210v40M270 210v40" stroke="currentColor" strokeWidth="6"/>
    <circle cx="270" cy="170" r="15" stroke="currentColor" strokeWidth="4" strokeDasharray="4 4"/>
    <path d="M90 150h40M90 170h60M90 190h30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <rect x="40" y="80" width="40" height="170" rx="2" stroke="currentColor" strokeWidth="6"/>
    <circle cx="60" cy="100" r="4" fill="currentColor"/>
    <circle cx="60" cy="120" r="4" fill="currentColor"/>
  </svg>
);

// Geometric University/Academy
const AcademyIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto text-black dark:text-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M200 60L80 140H320L200 60Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"/>
    <rect x="110" y="140" width="20" height="90" stroke="currentColor" strokeWidth="6"/>
    <rect x="190" y="140" width="20" height="90" stroke="currentColor" strokeWidth="6"/>
    <rect x="270" y="140" width="20" height="90" stroke="currentColor" strokeWidth="6"/>
    <path d="M60 230H340M40 250H360" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    <path d="M200 90v30" stroke="currentColor" strokeWidth="4"/>
    <circle cx="200" cy="105" r="10" stroke="currentColor" strokeWidth="4"/>
  </svg>
);

// --- 2. Timeline Data ---
const timelineData = [
  {
    id: 2,
    type: 'education',
    year: '2023 - 2027',
    title: 'B.Tech in Computer Science',
    institution: 'JK Lakshmipat University',
    description: 'Core coursework in Data Structures, Algorithms, Web Development, Machine Learning, Deep Learning, Computer Vision',
  },
  {
    id: 3,
    type: 'experience',
    year: 'Summer 2025',
    title: 'Full-Stack Developer Intern',
    institution: 'LMNIIT Jaipur',
    description: 'Designed and deployed 3 high-converting landing pages for local businesses using React and Tailwind CSS, increasing their client acquisition by 20%.',
  },
  {
    id: 4,
    type: 'education',
    year: '2020 - 2022',
    title: 'Higher Secondary Education',
    institution: 'Sanskar School',
    description: 'Specialized in Physics, Chemistry, and Mathematics. Graduated with 77% aggregate',
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4 md:px-8 max-w-7xl mx-auto font-sans overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-6xl font-light text-black dark:text-white transition-colors duration-300">
          My <span className="font-bold">Journey.</span>
        </h2>
        {/* Brutalist underline to match other sections */}
        <div className="mt-6 w-32 h-1.5 bg-black dark:bg-white transition-colors duration-300" />
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative">
        
        {/* The Center Spine (Vertical Line) */}
        {/* Placed at left-8 on mobile, perfectly centered on desktop */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 -ml-[2px] bg-black dark:bg-white transition-colors duration-300" />

        {/* Mapped Journey Cards */}
        <div className="space-y-16 md:space-y-24 pt-4">
          {timelineData.map((item, index) => {
            // Determine side: Left for even indices (0, 2), Right for odd (1, 3)
            const isLeft = index % 2 === 0;
            
            // Choose the illustration based on the type
            const illustration = item.type === 'experience' 
              ? <WorkstationIllustration /> 
              : <AcademyIllustration />;

            return (
              <JourneyCard 
                key={item.id} 
                data={item} 
                isLeft={isLeft} 
                illustration={illustration} 
              />
            );
          })}
        </div>
        
      </div>
      
    </section>
  );
}