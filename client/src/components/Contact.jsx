// client/src/components/Contact.jsx
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  // Use the environment variable from Vite, defaulting to localhost if not found
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    try {
      // UPDATED: Now uses the dynamic base URL
      const res = await axios.post(`${API_BASE_URL}/api/contact`, formData);
      setStatus({ loading: false, success: true, message: res.data.message });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      setStatus({ 
        loading: false, 
        success: false, 
        message: 'Something went wrong. Please try again.' 
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-6xl mx-auto font-sans">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 border-b-4 border-black dark:border-white pb-6"
      >
        <h2 className="text-4xl md:text-6xl font-light text-black dark:text-white transition-colors duration-300">
          Get In <span className="font-bold">Touch.</span>
        </h2>
      </motion.div>

      {/* Brutalist Postcard Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row w-full bg-white dark:bg-gray-900 
          border-4 border-black dark:border-white 
          shadow-[12px_12px_0px_#000000] dark:shadow-[12px_12px_0px_#ffffff] transition-colors duration-300"
      >
        
        {/* Left Side: Contact Info (Inverted Colors) */}
        <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between
          bg-black dark:bg-white text-white dark:text-black border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white transition-colors duration-300"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Let's build something great.
            </h3>
            <p className="text-gray-300 dark:text-gray-700 text-lg mb-8 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex justify-center items-center border-2 border-white dark:border-black rounded-none">
                <FaEnvelope size={20} />
              </div>
              <span className="font-bold tracking-wide text-lg">nidheshsoni@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex justify-center items-center border-2 border-white dark:border-black rounded-none">
                <FaMapMarkerAlt size={20} />
              </div>
              <span className="font-bold tracking-wide text-lg">Jaipur, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
            
            <div className="space-y-6">
              {/* Name Input */}
              <div className="flex flex-col">
                <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">Name</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-4 border-2 border-black dark:border-white bg-transparent 
                    text-black dark:text-white font-medium focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">Email</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-4 border-2 border-black dark:border-white bg-transparent 
                    text-black dark:text-white font-medium focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col">
                <label className="text-sm font-bold uppercase tracking-widest text-black dark:text-white mb-2">Message</label>
                <textarea 
                  name="message" rows="4" value={formData.message} onChange={handleChange} required
                  className="w-full px-4 py-4 border-2 border-black dark:border-white bg-transparent 
                    text-black dark:text-white font-medium focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button & Status */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button 
                type="submit" disabled={status.loading}
                className="w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-4 
                  border-4 border-black dark:border-white 
                  bg-black dark:bg-white text-white dark:text-black font-bold text-lg
                  shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#ffffff]
                  hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_#000000] dark:hover:shadow-[8px_8px_0px_#ffffff]
                  active:translate-y-1 active:translate-x-1 active:shadow-none
                  transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Sending...' : 'Send Message'} <FaPaperPlane size={16} />
              </button>

              {/* Feedback Message */}
              {status.message && (
                <span className={`font-bold tracking-wide ${status.success ? 'text-black-600 dark:text-white-400' : 'text-red-600 dark:text-red-400'}`}>
                  {status.message}
                </span>
              )}
            </div>

          </form>
        </div>

      </motion.div>
    </section>
  );
}