import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, GraduationCap, Briefcase, FolderOpen, Code, Mail, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position - Updated order
      const sections = ['#hero', '#about', '#experience', '#education', '#projects', '#skills', '#contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#projects', label: 'Projects', icon: FolderOpen },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AlwinVJ/dashboard', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/alwinvj', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alwinvj5@gmail.com', label: 'Email' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar - Only visible on tablet and mobile */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 xl:hidden ${
          scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Button - Now positioned before the title */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={24} />
            </motion.button>

            {/* Portfolio Title */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              Alwin V J
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Desktop Sidebar - Card design with shadow */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="hidden xl:flex fixed top-6 left-6 h-[calc(100vh-48px)] w-72 bg-gray-800 z-50 shadow-2xl rounded-2xl flex-col overflow-hidden"
      >
        {/* Panel Header */}
        <div className="p-6 flex-shrink-0">
          <motion.h1
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-bold text-white"
          >
            Alwin V J
          </motion.h1>
          <p className="text-gray-400 text-sm mt-1">AI/ML Engineer</p>
        </div>

        {/* Navigation Items - Flex grow to take available space */}
        <div className="flex-1 px-6 flex flex-col">
          <nav className="space-y-3 flex-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              
              return (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: isActive ? 12 : 0,
                    y: isActive ? -2 : 0
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 12,
                    y: -2,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full flex items-center space-x-4 p-4 text-left text-gray-300 rounded-xl transition-all duration-300 group relative focus:outline-none"
                  style={{
                    transformOrigin: 'left center'
                  }}
                >
                  {/* Separated tab background effect - Always visible for active tab */}
                  <motion.div
                    className={`absolute inset-0 bg-gray-700 rounded-xl shadow-lg ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      boxShadow: isActive 
                        ? "0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)"
                        : "0 0 0 rgba(0, 0, 0, 0)"
                    }}
                    whileHover={{
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 relative z-10"
                  >
                    <item.icon 
                      size={20} 
                      className={`transition-colors duration-300 ${
                        isActive 
                          ? 'text-white' 
                          : 'group-hover:text-white'
                      }`}
                    />
                  </motion.div>

                  {/* Text */}
                  <span className={`font-medium relative z-10 transition-colors duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </nav>

          {/* Social Links - Fixed at bottom */}
          <div className="flex-shrink-0 pb-6">
            <div className="pt-6 border-t border-gray-700">
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none shadow-lg hover:shadow-xl"
                  >
                    <social.icon className="text-gray-300 hover:text-white transition-colors duration-200" size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay for mobile/tablet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile/Tablet Side Panel - Optimized for all screen sizes */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-80 bg-gray-900 z-50 shadow-2xl xl:hidden flex flex-col overflow-hidden"
          >
            {/* Panel Header - Fixed height */}
            <div className="flex items-center justify-between p-4 sm:p-6 flex-shrink-0 border-b border-gray-700">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">Alwin V J</h2>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">AI/ML Engineer</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white p-2 hover:bg-gray-800 rounded-lg transition-all duration-200 focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 flex flex-col min-h-0">
              {/* Navigation Items - Scrollable if needed */}
              <div className="flex-1 px-4 sm:px-6 py-4 overflow-y-auto">
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href;
                    
                    return (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ 
                          opacity: 1, 
                          x: isActive ? 8 : 0,
                          y: isActive ? -1 : 0
                        }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.02,
                          x: 8,
                          y: -1,
                          transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 text-left text-gray-300 rounded-lg transition-all duration-300 group relative focus:outline-none"
                      >
                        {/* Mobile separated background - Always visible for active tab */}
                        <motion.div
                          className={`absolute inset-0 bg-gray-800 rounded-lg ${
                            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            boxShadow: isActive 
                              ? "0 4px 15px rgba(0, 0, 0, 0.2)"
                              : "0 0 0 rgba(0, 0, 0, 0)"
                          }}
                          whileHover={{
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                            transition: { duration: 0.2 }
                          }}
                        />
                        
                        <motion.div className="flex-shrink-0 relative z-10">
                          <item.icon 
                            size={18} 
                            className={`transition-colors duration-200 ${
                              isActive 
                                ? 'text-white' 
                                : 'group-hover:text-white'
                            }`}
                          />
                        </motion.div>
                        <span className={`font-medium relative z-10 transition-colors duration-200 text-sm sm:text-base ${
                          isActive 
                            ? 'text-white' 
                            : 'group-hover:text-white'
                        }`}>
                          {item.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              {/* Social Links - Fixed at bottom */}
              <div className="flex-shrink-0 p-4 sm:p-6 border-t border-gray-700">
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none shadow-lg hover:shadow-xl"
                    >
                      <social.icon className="text-gray-300 hover:text-white transition-colors duration-200" size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;