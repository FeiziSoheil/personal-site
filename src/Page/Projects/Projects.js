import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { projects}from '../../Data';
import "./Projects.css";

export default function Projects() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const uniqueCategories = [
      "all",
      ...new Set(projects.map((project) => project.category)),
    ];
    setCategories(uniqueCategories);
  }, []);


  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" bg-primary_bg_color flex relative -z-0"
    >
      <div className="container mx-auto flex flex-col gap-10">
        {/* Header */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white font-montserrat font-bold text-2xl "
        >
          Projects
        </motion.h1>

        <div className="relative">
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-secondary_bg_color"
      >
       
        <div 
          className="md:hidden p-3 text-center cursor-pointer bg-secondary_txt text-primary_bg_color"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {activeCategory === "all" ? "همه نمونه کارها" : activeCategory}
        </div>

        {/* Desktop Horizontal Menu */}
        <ul className="hidden md:flex w-full flex-wrap px-0 justify-between mb-0 items-center">
          {categories.map((category, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-gray-800 text-white"
                  : "text-secondary_txt hover:bg-gray-800  text-white"
              } font-roboto   p-3 text-center cursor-pointer duration-200 rounded-sm`}
            >
              {category === "all" ? "All Projects" : category}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-0 w-full bg-red-400 z-10"
            >
              {categories.map((category, index) => (
                <motion.li
                  key={index}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  whileHover={{ opacity:0.8 }}
                  className={`${
                    activeCategory === category
                      ? "bg-secondary_txt text-primary_bg_color"
                      : "text-secondary_txt hover:bg-secondary_txt hover:text-secondary_bg_color"
                  } font-dana-regular p-3 text-center w-full cursor-pointer duration-200`}
                >
                  {category === "all" ? "All Projects" : category}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>

     
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.5 }}
              className="text-center bg-secondary_bg_color text-secondary_txt p-6 rounded-lg border"
            >
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h2 className="font-montserrat font-medium text-xl text-white">
                {project.title}
              </h2>
              <p className="text-sm text-white mt-2 font-roboto ">
                <strong>Category:</strong> {project.category}
              </p>
              <p className="text-sm text-white opacity-70 mt-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white font-roboto no-underline rounded-md bg-gray-800  w-full py-3 "
              >
                See Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
