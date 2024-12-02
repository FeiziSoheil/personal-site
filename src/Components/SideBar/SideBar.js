import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, GraduationCap, Code, Briefcase, 
  Info, Mail, Award, MessageSquare, Menu, X 
} from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export default function SideBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Handle responsive screen width
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      // Close mobile menu if screen becomes larger
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { 
      x: -300, 
      opacity: 0,
      rotate: -10 
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        staggerChildren: 0.1, 
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: -50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const menuItems = [
    { icon: <LayoutDashboard size={24} />, text: "Dashboard", path: "/" },
    { icon: <GraduationCap size={24} />, text: "Education", path: "/education" },
    { icon: <Code size={24} />, text: "Projects", path: "/projects" },
    { icon: <Briefcase size={24} />, text: "Skills", path: "/skills" },
    { icon: <Info size={24} />, text: "About Me", path: "/aboutme" },
    { icon: <Mail size={24} />, text: "Contact Me", path: "/contactme" },
    { icon: <Award size={24} />, text: "Certifications", path: "/certifications" },
    { icon: <MessageSquare size={24} />, text: "Feedback", path: "/feedback" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderSidebarContent = () => (
    <>
      {/* Header */}
      <motion.header 
        className='flex items-center space-x-4 flex-wrap border-b-2 pb-4 sticky'
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.img 
          src="/image/profile.jpeg" 
          alt="Profile"  
          className='w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 object-cover rounded-full'
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
        <div>
          <h2 className='font-montserrat font-medium text-white text-sm sm:text-base md:text-lg'>Soheil Feizi</h2>
          <p className='font-roboto font-normal opacity-60 text-white text-xs sm:text-sm md:text-base'>
          <Typewriter
          className='font-roboto font-normal opacity-60 text-white text-xs sm:text-sm md:text-base'
          words={['Active Developer','Front-End Developer','ML & DL Student']}
          loop
          typeSpeed={200}
          deleteSpeed={100}
          delaySpeed={1000}
          cursor
          />
          </p>
         
        </div>
      </motion.header>

      {/* Sidebar Menu */}
      <motion.ul 
        className='py-5 side-bar-ul no-scrollbar overflow-y-auto h-[calc(100vh-200px)] sm:h-[calc(100vh-250px)] md:h-[450px] scrollbar-hide'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item, index) => (
          <motion.li 
            key={index}
            className='cursor-pointer py-2 sm:py-3 border-b flex items-center text-sm sm:text-base md:text-xl font-roboto text-white space-x-3'
            variants={itemVariants}
            whileHover={{ 
              x: 5, 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.99 }}
          >
            <Link 
              to={item.path} 
              className="flex items-center space-x-3 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.icon}
              <span className='block w-full'>{item.text}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );

  return (
    <>
      {/* Mobile & Tablet Menu Toggle */}
      <div className='md:hidden fixed top-4 left-4 z-50'>
        <motion.button
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          className='bg-white/20 p-2 rounded-full'
        >
          {isMobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </motion.button>
      </div>

      {/* Mobile & Tablet Menu (Overlay) */}
      <AnimatePresence>
        {(screenWidth < 768 && isMobileMenuOpen) && (
          <motion.div
            className='fixed inset-0 bg-primary z-40 md:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className='w-full h-full p-6 pt-20'
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {renderSidebarContent()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop & Tablet Sidebar */}
      <motion.div 
        className={`
          ${screenWidth < 768 ? 'hidden' : 'block'}
          w-full sm:w-64 md:w-80 
          h-[500px] sm:h-[550px] md:h-[600px] 
          border rounded-3xl p-4 sm:p-5
        `}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {renderSidebarContent()}
      </motion.div>
    </>
  );
}