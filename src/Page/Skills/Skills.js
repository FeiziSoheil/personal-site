import React from "react";
import "./Skills.css";
import SkillsCard from "../../Components/SkillsCard/SkillsCard";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaWordpress,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="">
   
        <motion.div>
          <h2   className="text-white font-montserrat font-bold text-2xl ">
            My skills 
          </h2>
        </motion.div>
        <div className="flex gap-5 w-full mt-14  justify-center items-center flex-wrap overflow-hidden">
          <motion.div
            viewport={{ once: false }}
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsCard
              icon={<FaReact size={80} />}
              className="skill-icon-react"
            />
          </motion.div>


          <motion.div
            viewport={{ once: false }}
            initial={{ x: 60 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsCard
              icon={<FaHtml5 size={80} />}
              className="skill-icon-html"
            />
          </motion.div>

          <motion.div
            viewport={{ once: false }}
            initial={{ x: -60,opacity:0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsCard
              icon={<FaWordpress size={80} />}
              className="skill-icon-css"
            />
          </motion.div>

          <motion.div
            viewport={{ once: false }}
            initial={{ x: -60,opacity:0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsCard icon={<FaJs size={80} />} className="skill-icon-js" />
          </motion.div>

          <motion.div
            viewport={{ once: false }}
            initial={{ x: -60,opacity:0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsCard
              icon={<RiNextjsLine size={80} />}
              className="skill-icon-nextjs"
            />
          </motion.div>

          <motion.div
            viewport={{ once: false }}
            initial={{ y: 60,opacity:0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsCard
              icon={<FaPython size={80} />}
              className="skill-icon-python"
            />
          </motion.div>

          <motion.div
            viewport={{ once: false }}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsCard
              icon={<SiMongodb size={80} />}
              className="skill-icon-mongodb"
            />
          </motion.div>

          <motion.div
            viewport={{ once: false }}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsCard
              icon={<SiMysql size={80} />}
              className="skill-icon-mysql"
            />
          </motion.div>
        </div>
    </section>
  );
}
