import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Camera, Film, Gamepad2, Book, BookOpen, Library } from 'lucide-react'
import StatisticsCard from '../../Components/StatisticsCard/StatisticsCard'

export default function Dashboard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  // Common animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} className="overflow-hidden p-4 md:p-0">
   
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className='personal-info flex flex-col md:flex-row gap-6 md:gap-10 border-b pb-8 border-dashed items-center'
      >
        <motion.div 
          variants={itemVariants} 
          className='text-center md:text-left w-full md:w-2/3'
        >
          <h2 className='text-white font-montserrat font-bold text-xl md:text-2xl mb-4'>Hi, I'm Soheil Feizi</h2>
          <p className='text-white font-roboto text-base md:text-lg z-50 opacity-55'>A frontend developer and AI student with a passion for crafting professional user interfaces and developing intelligent systems. Always eager to learn new technologies and apply them to create innovative and impactful digital experiences. Looking for opportunities to collaborate on projects that push the boundaries of design and technology.</p>
        </motion.div>
        <motion.img
          variants={itemVariants}
          className='w-32 md:w-44 rounded-2xl z-10 object-cover mx-auto md:mx-0'
          src="/image/profile.jpeg"
          alt="Profile" 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Statistics Card */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className='border-b pb-8 border-dashed py-5'
      >
        <motion.h2 
          variants={itemVariants}
          className='text-white font-montserrat font-bold text-xl md:text-2xl mb-6 text-center md:text-left'
        >
          Statistics and projects
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className='grid grid-cols-2 md:flex md:justify-between gap-4 md:gap-5'
        >
          <StatisticsCard content='Completed Projects' count={12} />
          <StatisticsCard content='Satisfied customer' count={8} />
          <StatisticsCard content='Work history' count={3+' y'} />
          <StatisticsCard content='Students' count={160} />
        </motion.div>
      </motion.div>

      {/* Hobbies and interests */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className='border-b border-dashed py-5'
      >
        <motion.h2 
          variants={itemVariants}
          className='text-white font-montserrat font-bold text-xl md:text-2xl mb-6 text-center md:text-left'
        >
          Hobbies and interests
        </motion.h2>
        <motion.ul 
          variants={containerVariants}
          className='mt-5 space-y-3'
        >
          {[
            { icon: Camera, text: 'Photography' },
            { icon: Library, text: 'Studying scientific and marketing books' },
            { icon: Gamepad2, text: 'Brain and strategy games' },
            { icon: Film, text: 'Science fiction and action movies' }
          ].map((hobby, index) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              className='flex items-center text-white gap-2 bg-gray-800 py-2 px-3 rounded-md'
            >
              <hobby.icon className='flex-shrink-0' />
              <span className='font-roboto text-sm md:text-base'>{hobby.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Current situation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className='py-5'
      >
        <motion.h2 
          variants={itemVariants}
          className='text-white font-montserrat font-bold text-xl md:text-2xl mb-6 text-center md:text-left'
        >
          Current situation
        </motion.h2>
        <motion.ul 
          variants={containerVariants}
          className='space-y-4 md:space-y-3'
        >
          {[
            {
              title: 'Teaching React and Python with a Practical, Project-Based Approach',
              description: 'I am currently teaching React and Python to students and enthusiasts, simplifying complex concepts through hands-on, real-world projects like building web applications and data-driven systems. This experience not only enhances my technical skills but also strengthens my communication and teaching abilities.'
            },
            {
              title: 'Deep Learning and Implementing Advanced Algorithms',
              description: 'I am diving deep into the world of deep learning, studying complex algorithms and models such as Convolutional Neural Networks (CNNs) and Reinforcement Learning. I apply these skills to research and practical projects, aiming to enhance and implement artificial intelligence solutions.'
            },
            {
              title: 'AI Project & Control Systems: From Concept to Implementation',
              description: 'Specifically, I am working on an innovative AI-driven control systems project. My goal is to use machine learning algorithms to create systems capable of making intelligent decisions in complex environments. This project not only improves my understanding of control systems but also has the potential to deliver innovative real-world solutions.'
            },
            {
              title: 'Building a Diverse Portfolio with Challenging Projects',
              description: 'Alongside all of this, I am constantly developing and expanding my portfolio. Challenging and diverse projects showcase my technical and creative capabilities, ensuring that I remain competitive and at the forefront of programming and AI development.'
            }
          ].map((situation, index) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              className='text-white bg-gray-800 p-4 rounded-md'
            >
              <h3 className='font-montserrat font-medium text-base md:text-lg mb-2'>{situation.title}</h3>
              <p className='font-roboto opacity-55 text-sm md:text-base'>{situation.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  )
}