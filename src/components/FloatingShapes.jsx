import React from "react";
import { motion } from "framer-motion";

function FloatingShapes() {
  const shapes = [
    {
      id: 1,
      className: "absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 blur-xl",
      animation: "float",
      delay: 0,
    },
    {
      id: 2,
      className: "absolute top-40 right-20 w-32 h-32 bg-purple-400 rounded-full opacity-15 blur-xl",
      animation: "floatReverse",
      delay: 1,
    },
    {
      id: 3,
      className: "absolute bottom-32 left-20 w-24 h-24 bg-cyan-400 rounded-full opacity-20 blur-xl",
      animation: "float",
      delay: 2,
    },
    {
      id: 4,
      className: "absolute bottom-20 right-10 w-28 h-28 bg-indigo-400 rounded-full opacity-15 blur-xl",
      animation: "floatReverse",
      delay: 1.5,
    },
    {
      id: 5,
      className: "absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-25 blur-lg",
      animation: "float",
      delay: 0.5,
    },
    {
      id: 6,
      className: "absolute top-1/3 right-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 blur-lg",
      animation: "floatReverse",
      delay: 2.5,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={shape.className}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
      
      {/* Additional geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-blue-400 opacity-20"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-purple-400 opacity-15"
        animate={{
          rotate: [360, 0],
          y: [0, 25, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </div>
  );
}

export default FloatingShapes;

