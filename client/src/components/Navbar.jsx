import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Dark Mode Initialization
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Handle Scroll to add a soft shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Project', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 transition-all duration-300 
      ${isScrolled ? 'shadow-md dark:shadow-gray-950' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
        
        {/* Left: Logo */}
        {/* Left: Signature Logo */}
        <a 
          href="#" 
          className="text-3xl md:text-4xl text-black dark:text-white hover:opacity-70 transition-opacity duration-300"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Nidhesh
        </a>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-bold text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Actions (Theme Toggle & Mobile Menu Toggle) */}
        <div className="flex items-center gap-4">
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>

          {/* Mobile Menu Hamburger */}
          <button 
            className="lg:hidden p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute w-full bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden shadow-xl ${isMobileMenuOpen ? 'max-h-96 border-b border-gray-200 dark:border-gray-800' : 'max-h-0'}`}>
        <div className="flex flex-col px-4 pt-4 pb-8 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu when a link is clicked
              className="text-lg font-bold text-black dark:text-white hover:text-gray-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}