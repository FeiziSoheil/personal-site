import React from "react";
import { motion } from "framer-motion";
import EducationCard from "../../Components/EducationCard/EducationCard";

export default function Education() {
  // Variants for section title animation
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Variants for card animations
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: (index) => ({
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.2, // Staggered delay
        duration: 0.6,
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  // Education details
  const educationDetails = [
    {
      title: "Bachelors Degree in Computer Engineering",
      content: "Currently pursuing my Bachelor's degree in Computer Engineering at Payam Noor University. This academic path provides me with a strong foundation in computer science, programming, and problem-solving techniques.",
      image: "/image/download1.jpg"
    },
    {
      title: "Python Certification",
      content: "I have completed a Python certification from Atipayesh Academy of Amir Kabir University, under the guidance of Professor Zehbahollah Zabihi Lehermi. This course enhanced my proficiency in Python, with practical applications in data analysis, machine learning, and automation.",
    },
    {
      title: "Image Processing with Python",
      content: "I am currently enrolled in an Image Processing with Python course by Alireza Akhavanpour. This course helps me deepen my understanding of computer vision techniques and practical implementation using Python libraries such as OpenCV and scikit-image.",
    
    },
    {
      title: "Self-Taught Web Development",
      content: "I have taught myself front-end web development, including JavaScript, React, and web design principles. This self-driven learning has allowed me to build responsive, dynamic websites and improve my understanding of user interface (UI) and user experience (UX) design.",
    }
  ];

  return (
    <div className="container mx-auto ">
      {/* Animated Title */}
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={titleVariants}
        viewport={{ once: true, amount: 0.1 }}
        className="text-white font-montserrat font-bold text-2xl mb-8"
      >
        Education
      </motion.h2>

      {/* Animated Cards Container */}
      <div className="flex flex-wrap gap-5">
        {educationDetails.map((education, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            className="text-white border rounded-lg p-5 "
          >
            <EducationCard
              title={education.title}
              content={education.content}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}