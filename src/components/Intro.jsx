import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 w-full overflow-hidden pt-20 sm:pt-24 md:pt-24 lg:pt-6 pb-4 sm:pb-6 lg:min-h-screen lg:py-6 transition-colors duration-300">
      {/* Animated background elements */}
      <motion.div 
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900 opacity-20 dark:opacity-30 blur-xl transition-colors duration-300"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-200 dark:bg-purple-900 opacity-20 dark:opacity-30 blur-xl transition-colors duration-300"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-full opacity-15 dark:opacity-25 blur-2xl pointer-events-none transition-colors duration-300"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-400 dark:from-cyan-600 dark:to-blue-600 rounded-full opacity-15 dark:opacity-25 blur-2xl pointer-events-none transition-colors duration-300"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-12 dark:opacity-22 blur-xl pointer-events-none transition-colors duration-300"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-0 h-0 border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-blue-400 dark:border-b-cyan-400 opacity-18 dark:opacity-28 pointer-events-none transition-colors duration-300"
        animate={{
          rotate: [360, 0],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 16, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
        }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-full opacity-14 dark:opacity-24 blur-xl pointer-events-none transition-colors duration-300"
        animate={{
          y: [0, 28, 0],
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 pt-4 pb-2 sm:pt-6 sm:pb-4 lg:py-0 space-y-3 sm:space-y-4 lg:space-y-6"
      >
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white text-center lg:text-left leading-tight px-2 transition-colors duration-300">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-cyan-400">
            MANYA SHUKLA
          </span>
        </h1>
        
        <div className="text-gray-800 dark:text-gray-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left h-auto min-h-[2.5rem] sm:min-h-[3rem] px-2 transition-colors duration-300">
          I'm {" "}
          <span className="text-blue-600 dark:text-cyan-400">
            <TypeAnimation
              sequence={[
                "a Full Stack Developer",
                1000,
                "a MERN Stack Developer",
                1000,
                "a Software Engineer",
                1000,
                "a Web Developer",
                1000,
                "a Backend Developer",
                1000,
                "a React Specialist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold"
            />
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl text-center lg:text-left max-w-2xl leading-relaxed px-2 transition-colors duration-300">
          <span className="font-bold text-blue-600 dark:text-cyan-400">Hello!</span> I craft stunning, 
          high-performance websites that don't just look beautiful but deliver real results. 
          No templates—just custom, responsive designs that elevate your brand and 
          outperform the competition.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-2 sm:mt-4 w-full sm:w-auto">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contacts" 
            className="w-full sm:w-auto"
          >
            <motion.button 
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium shadow-lg relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Hire Me <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.span>
              </span>
            </motion.button>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.google.com/document/d/1lTCFnN52DzzxgNiTpGpxFPbuqxaIBu6WkuEr2IVHQuY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <motion.button 
              className="w-full px-8 py-3 bg-white border-2 border-blue-500 text-blue-600 rounded-xl font-medium shadow-lg relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-blue-50"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Download CV</span>
            </motion.button>
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center w-full lg:w-1/2 mb-0"
      >
        <div className="relative">
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-lg opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src="https://media.licdn.com/dms/image/v2/D5603AQEerXqV43cdpA/profile-displayphoto-scale_400_400/B56ZrjuMwCMIAg-/0/1764757131881?e=1768435200&v=beta&t=rS_q8fWC3pa6TEFQHcRGewgXtnTlpBhEcRp4ji5Zvyk"
            alt="MANYA SHUKLA"
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] aspect-square object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-2xl dark:shadow-cyan-500/20 z-10 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{ 
              scale: { duration: 0.3 },
              rotate: { duration: 0.5 }
            }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-30 pointer-events-none"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Glowing rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-20 pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Intro;
