import React from 'react'
import { motion } from 'framer-motion'

export default function AboutMe() {
  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  const paragraphs = [
    "Hello! I'm Soheil, a passionate front-end developer, AI enthusiast, and lifelong learner. I am currently pursuing my Bachelor's degree in Computer Engineering at Payam Noor University, where I am strengthening my foundation in computer science and problem-solving techniques.",
    "Beyond my academic journey, I've explored various areas in technology, including Python programming, image processing, and machine learning. I've earned a certification in Python from Atipayesh Academy of Amir Kabir University, and I'm currently deepening my knowledge in image processing with Python under the mentorship of Alireza Akhavanpour.",
    "I have a strong interest in front-end development, which I pursued on my own by learning JavaScript, React, and web design principles. My passion for creating intuitive, user-friendly web applications drives me to continuously improve and stay up-to-date with the latest technologies in the field.",
    "Currently, I'm also involved in an exciting AI project focused on control systems, where I'm leveraging machine learning algorithms to create intelligent systems capable of decision-making in complex environments. This project is a blend of my interests in AI, robotics, and programming, pushing me to explore new technologies and ideas.",
    "In everything I do, I strive for continuous growth, whether it's through teaching, research, or developing new projects. I believe in the power of technology to transform the world and I'm excited to contribute my skills and knowledge to build innovative solutions for real-world problems."
  ]

  return (
    <div className="overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-white font-montserrat font-bold text-2xl mb-5'
      >
        About Me
      </motion.h2>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='space-y-4'
      >
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={paragraphVariants}
            className='font-roboto text-white text-lg'
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </div>
  )
}