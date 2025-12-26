import React, { useState } from "react";
import { FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setSuccessMessage("");

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://ngo-model-backend.vercel.app/api/sendMessageRoute/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccessMessage("🎉 Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
          setTimeout(() => setSuccessMessage(""), 5000);
        } else {
          setApiError(data.message || "Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        setApiError("Network error. Please check your connection.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { duration: 0.3 },
  };

  const tapEffect = {
    scale: 0.98,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-15 dark:opacity-25 blur-3xl pointer-events-none"
        animate={{
          y: [0, -35, 0],
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 dark:from-purple-600 dark:to-indigo-600 rounded-full opacity-18 dark:opacity-28 blur-2xl pointer-events-none"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 dark:from-cyan-600 dark:to-blue-600 rounded-full opacity-20 dark:opacity-30 blur-2xl pointer-events-none"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-blue-400 dark:border-b-cyan-400 opacity-20 dark:opacity-30 pointer-events-none"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-full opacity-22 dark:opacity-32 blur-2xl pointer-events-none"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 transition-colors duration-300"
          >
            Have a project in mind or want to collaborate? Drop me a message!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 overflow-hidden transition-colors duration-300"
          >
            <div className="p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
                <FaPaperPlane className="text-blue-500 dark:text-cyan-400 mr-3 flex-shrink-0" />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={item}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"} focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent transition`}
                    placeholder="Manya Shukla"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"} focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent transition`}
                    placeholder="shuklamanya99@gmail.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"} focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:border-transparent transition`}
                    placeholder="Hy Manya Shukla"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </motion.div>

                <motion.div variants={item}>
                  <motion.button
                    type="submit"
                    whileHover={hoverEffect}
                    whileTap={tapEffect}
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </motion.div>

                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 text-green-700 rounded-lg text-center"
                  >
                    {successMessage}
                  </motion.div>
                )}

                {apiError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 text-red-700 rounded-lg text-center"
                  >
                    {apiError}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          <div className="space-y-8">
            
            <motion.div
              variants={item}
              className="h-64 sm:h-80 lg:h-96 rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14046.92945687822!2d77.1653805!3d28.546195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dec15d2acfb%3A0x44144b13d050b48e!2sDAMODAR%20HOSTEL%20BLOCK-A%2C%20JAWAHARLAL%20NEHRU%20UNIVERSITY-2%2C%20Old%20SPS%20Rd%2C%20Delhi%2C%20New%20Delhi%2C%20Delhi%20110048%2C%20India!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
              ></iframe>
            </motion.div>

            
            <motion.div
              variants={item}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl dark:shadow-gray-900/50 transition-colors duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
                <FaMapMarkerAlt className="text-blue-500 mr-3 flex-shrink-0" />
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">Damodar Hostel, JNU, New Delhi, India (110067)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      <a href="mailto:work.shuklamanya@gmail.com" className="hover:text-blue-600 dark:hover:text-cyan-400 transition break-all">
                        work.shuklamanya@gmail.com
                      </a>
                      <br className="sm:hidden" />
                      <span className="hidden sm:inline">, </span>
                      <a href="mailto:shuklamanya99@gmail.com" className="hover:text-blue-600 transition break-all">
                        shuklamanya99@gmail.com
                      </a>
                      <br className="sm:hidden" />
                      <span className="hidden sm:inline">, </span>
                      <a href="mailto:manyas36_soe@jnu.ac.in" className="hover:text-blue-600 transition break-all">
                        manyas36_soe@jnu.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhoneAlt className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                    <a href="tel:+918005586588" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition">
                      +91 8005586588
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4 transition-colors duration-300">Connect With Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <FaLinkedin />, color: "text-blue-700", href: "https://www.linkedin.com/in/manya-shukla99/" },
                    { icon: <FaGithub />, color: "text-black-700", href: "https://github.com/MANYA-SHUKLA" },
                    { icon: <FaWhatsapp />, color: "text-green-600", href: "https://wa.me/918005586588?text=Hy%20Manya%20Shukla" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-2xl hover:scale-110 transition-transform`}
                      whileHover={{ y: -3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
