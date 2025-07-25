import React from "react";
import { motion } from "framer-motion";
import WebsiteIcom from "../assets/website.svg";

function ProjectPanel() {
  const Projects = [
 {
  title: "Manya Closet",
  description: "A pixel-perfect e-commerce frontend built with React.js, featuring modern UI, dynamic product listings, and responsive design.",
  live: "https://manya-closet.vercel.app/",
  image: "/site.png",
  tags: ["React.js", "Javascript", "CSS", "Responsive Design"]
},

  {
    title: "World Atlas",
    description: "A responsive web app that displays country-specific data like population, region, and capital using a public REST API and modern UI.",
    live: "https://world-atlas-xi.vercel.app/",
    image: "/atlas.png",
    tags: ["React.js", "REST API", "CSS", "Responsive Design", "JavaScript"]
  },
  {
    title: "Doctor-Patient Locator",
    description: "A location-based web application that connects patients with nearby doctors using Google Maps API and MongoDB geospatial queries.",
    live: "https://github.com/MANYA-SHUKLA/doctor-patient-locator", 
    image: "/doctor.png", 
    tags: ["React.js", "Node.js", "MongoDB", "Google Maps API", "express.js"]
  },
  {
    title: "Artwork Table UI",
    description: "An interactive and responsive UI table for managing artwork data using PrimeReact components with filtering and pagination.",
    live: "https://artworks-data-table-k6x5.vercel.app/", 
    image: "/row.png", 
    tags: ["React.js", "PrimeReact", "CSS", "JavaScript"]
  },
];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my skills through real-world applications and solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100"
    >
      {/* Image with gradient overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          loading="lazy"
          src={project.image}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-blue-500/80 text-white text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <img src={WebsiteIcom} alt="Live Demo" className="w-5 h-5" />
            <span>View Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPanel;
