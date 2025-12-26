import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HtmlIcon from "../assets/html.svg";
import CssIcon from "../assets/css.svg";
import JsIcon from "../assets/js.svg";
import TailwindIcon from "../assets/tailwind.svg";
import ReactIcon from "../assets/react.svg";
import NextIcon from "../assets/next.svg";
import nodeJsIcon from "../assets/nodejs.svg";
import expressIcon from "../assets/expressjs.svg";
import typeScriptIcon from "../assets/typescript.svg";
import mongoDBIcon from "../assets/mongodb.svg";
import gitIcon from "../assets/git.svg";
import figmaIcon from "../assets/figma.svg";
import ejsIcon from "../assets/ejs.jpeg";

function SkillPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const skills = [
    {
      name: "HTML",
      icon: HtmlIcon,
    },
    {
      name: "CSS",
      icon: CssIcon,
    },
    {
      name: "JavaScript",
      icon: JsIcon,
    },
    {
      name: "Tailwind",
      icon: TailwindIcon,
    },
    {
      name: "React",
      icon: ReactIcon,
    },
    {
      name: "Next",
      icon: NextIcon,
    },
    {
      name: "Node Js",
      icon: nodeJsIcon,
    },
    {
      name: "Express",
      icon: expressIcon,
    },
    {
      name: "TypeScript",
      icon: typeScriptIcon,
    },
    {
      name: "MongoDB",
      icon: mongoDBIcon,
    },
    {
      name: "Git",
      icon: gitIcon,
    },
    {
      name: "EJS",
      icon: ejsIcon,
    },
    {
      name: "Figma",
      icon: figmaIcon,
    }
  ];

  return (
    <>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-12 sm:pt-16 pb-8 sm:pb-12 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
        {/* Floating decorative shapes */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-12 dark:opacity-22 blur-3xl pointer-events-none transition-colors duration-300"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-indigo-400 dark:from-purple-600 dark:to-indigo-600 rounded-full opacity-12 dark:opacity-22 blur-3xl pointer-events-none transition-colors duration-300"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 right-10 w-28 h-28 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-15 dark:opacity-25 blur-2xl pointer-events-none"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-12 dark:opacity-22 blur-2xl pointer-events-none"
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 dark:from-cyan-600 dark:to-blue-600 rounded-full opacity-18 dark:opacity-28 blur-xl pointer-events-none"
          animate={{
            y: [0, -28, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 14, repeat: Infinity, ease: "linear" },
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-blue-400 dark:border-b-cyan-400 opacity-20 dark:opacity-30 pointer-events-none"
          animate={{
            rotate: [0, 360],
            y: [0, -22, 0],
          }}
          transition={{
            rotate: { duration: 17, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-full opacity-22 dark:opacity-32 blur-xl pointer-events-none"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* top text  */}
        <motion.div 
          className="text-center max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-black dark:text-white text-3xl sm:text-4xl md:text-5xl text-center mb-3 transition-colors duration-300">
            Tech Stack
          </h2>
          <p className="text-textBlackColor dark:text-gray-300 pt-2 text-sm sm:text-base md:text-lg px-4 transition-colors duration-300">
            These are my skills on the basis of which I have made projects.
          </p>
        </motion.div>
        {/* skills  */}
        <div ref={ref} className="mt-10 sm:mt-12 md:mt-16 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const SkillCard = ({ skill, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
      }}
      className="flex flex-col justify-center items-center gap-2 sm:gap-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3 sm:p-4 cursor-pointer relative overflow-hidden group transition-colors duration-300"
    >
      {/* Hover effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20"
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        whileHover={{ 
          rotate: 360,
          scale: 1.2,
        }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <img
          loading="lazy"
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
      </motion.div>
      <motion.p 
        className="text-black dark:text-white font-bold text-xs sm:text-sm md:text-base text-center relative z-10 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        {skill.name}
      </motion.p>
    </motion.div>
  );
};

export default SkillPanel;
