import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WebsiteLogo from "../assets/website.png";
import Seo from "../assets/seo.png";
import Api from "../assets/api.png";
import Performance from "../assets/performance.png";
import Maintainance from "../assets/maintainance.png";
import AnimationLogo from "../assets/animation.png";

function Service() {
  const Services = [
    {
      title: "Custom Websites",
      description: "Responsive, high-performance websites tailored to meet your goals.",
      icon: WebsiteLogo,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      learnMoreLink: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that leave a lasting impression.",
      icon: "https://themewagon.github.io/satner/img/services/s2.png",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      learnMoreLink: "https://www.interaction-design.org/literature/topics/ui-design"
    },
    {
      title: "SEO Optimization",
      description: "Boost visibility and attract more traffic with expert SEO strategies.",
      icon: Seo,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      learnMoreLink: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
    },
    {
      title: "E-commerce Solutions",
      description: "Scalable online stores with secure payments and seamless experiences.",
      icon: "https://themewagon.github.io/satner/img/services/s4.png",
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      learnMoreLink: "https://www.shopify.com/blog/ecommerce-website-development"
    },
    {
      title: "Maintenance & Hosting",
      description: "Keep your site secure, fast, and always up-to-date.",
      icon: Maintainance,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      learnMoreLink: "https://www.website.com/?source=SC&country=IN"
    },
    {
      title: "Performance Optimization",
      description: "Boost your website speed and performance for better user experience.",
      icon: Performance,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      learnMoreLink: "https://web.dev/learn/#performance"
    },
    {
      title: "API Integration",
      description: "Integrate or build APIs to extend your website's capabilities.",
      icon: Api,
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      learnMoreLink: "https://developer.mozilla.org/en-US/docs/Web/API"
    },
    {
      title: "Web Animations",
      description: "Bring your website to life with captivating animations.",
      icon: AnimationLogo,
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      learnMoreLink: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API"
    },
  ];

  return (
    <section className="relative bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 overflow-hidden transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30 transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30 transition-colors duration-300"></div>
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-20 dark:opacity-30 blur-2xl pointer-events-none"
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
        className="absolute top-1/2 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-15 dark:opacity-25 blur-2xl pointer-events-none"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 dark:from-green-600 dark:to-emerald-600 rounded-full opacity-25 dark:opacity-35 blur-xl pointer-events-none"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
      />
      {/* Floating Triangle */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-blue-400 dark:border-b-cyan-400 opacity-20 dark:opacity-30 pointer-events-none"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
            Services I Offer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 transition-colors duration-300">
            I help businesses and individuals bring their ideas to life with professional, 
            custom-built web solutions tailored to meet your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {Services.map((item, index) => (
            <ServiceCard key={index} service={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ 
        y: -15,
        scale: 1.03,
        rotate: [0, -2, 2, -2, 0],
      }}
      className={`${service.color} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl flex flex-col items-center text-white h-full relative overflow-hidden group`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="bg-white/20 p-3 sm:p-4 rounded-full mb-4 sm:mb-5 md:mb-6 relative z-10"
        whileHover={{ 
          scale: 1.1,
          rotate: 360,
        }}
        transition={{ duration: 0.5 }}
      >
        <img
          loading="lazy"
          src={service.icon}
          alt={service.title}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
        />
      </motion.div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center relative z-10">{service.title}</h3>
      <p className="text-white/90 text-sm sm:text-base text-center flex-grow relative z-10">{service.description}</p>
      
      {/* Learn more button with link */}
      <motion.a
        href={service.learnMoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 sm:mt-5 md:mt-6 px-4 sm:px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium border border-white/30 relative z-10 overflow-hidden"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="absolute inset-0 bg-white/30"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10">Learn more →</span>
      </motion.a>
    </motion.div>
  );
};

export default Service;