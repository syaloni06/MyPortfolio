/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdOutlineWork } from "react-icons/md";
import { FaCode, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    image: "src/assets/projects/Youtube_Clone Preview.jpg",
    name: "Youtube Clone",
    code: "https://github.com/syaloni06/Youtube_Clone",
    description:
      "YouTube Clone is a React-powered app for seamless video streaming, authentication, and channel management with Redux and React Router.",
  },
  {
    image: "src/assets/projects/Eventify preview.jpg",
    name: "Eventify",
    preview: "https://eventifysyaloni.netlify.app/",
    code: "https://github.com/syaloni06/Eventify",
    description:
      "Eventify is a powerful, user-friendly platform for effortless event creation, management, and participation.",
  },
  {
    image: "src/assets/projects/ShoppyGlobe Preview.jpg",
    name: "ShopyGlobe",
    preview: "https://shoppyglobebysyaloni.netlify.app/",
    code: "https://github.com/syaloni06/ShoppyGlobe",
    description:
      "ShoppyGlobe is a React-powered e-commerce app with seamless browsing, cart management, API integration, and optimized performance.",
  },
  {
    image: "src/assets/projects/CalcForge Preview.jpg",
    name: "CalcForge",
    preview: "https://calcforge.netlify.app/",
    code: "https://github.com/syaloni06/CalcForge",
    description:
      "CalcForge is a React-powered calculator builder app with drag-and-drop customization, powered by Zustand and Tailwind for a seamless experience.",
  },
  {
    image: "src/assets/projects/Skycast Preview.jpg",
    name: "SkyCast",
    preview: "https://syaloni06.github.io/Weather_Forcast_Application/",
    code: "https://github.com/syaloni06/Weather_Forcast_Application",
    description:
      "SkyCast delivers real-time weather updates and 6-day forecasts with theme support and city memory.",
  },
];

// Parent animation settings
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Projects appear one by one
  },
};

// Individual project animation
const projectVariants = {
  hidden: { opacity: 0, scale: 0.5 }, // Start smaller and faded
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = ({ refProp }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  return (
    <div
      ref={refProp}
      className="h-screen pt-12 dark:bg-black flex flex-col gap-6 items-center justify-center"
    >
      <h2 className="text-5xl flex gap-4 italic bg-gradient-to-r justify-center p-4 from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent">
        <MdOutlineWork className="self-end text-black dark:text-white" />
        My Project Works
      </h2>

      {/* Animated container */}
      <motion.div
        className="flex flex-wrap gap-8 justify-center mx-36"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map(({ image, name, preview, code, description }, index) => {return(
          <motion.div
            key={index}
            className="group w-[300px] rounded-lg bg-gradient-to-r from-sky-400 to-blue-700 dark:from-sky-800 dark:to-blue-950 shadow-lg relative overflow-hidden p-2"
            variants={projectVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            onClick={() => setSelectedCert({ image, name, preview, code, description })}
          >
            <img src={image} alt={name} className="w-full h-52 rounded-lg" />
            <div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-sky-400 to-blue-700 dark:from-sky-800 dark:to-blue-950 text-white font-bold text-xl px-4 py-2">
                {name}
              </div>
              <div>
                <div className="absolute bottom-[-100%] left-0 w-full bg-gradient-to-t from-sky-400 to-blue-700 dark:from-sky-800 dark:to-blue-950 transition-all duration-300 ease-in-out group-hover:bottom-0 p-4">
                  <div className="w-full text-amber-500 italic font-bold pb-2 text-xl">
                    {name}
                  </div>
                  <p className="text-white text-xs font-semibold italic">
                    {description}
                  </p>
                  <div className="mt-4 flex justify-between">
                    {preview && (
                      <a
                        href={preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-black text-white text-sm rounded-md flex items-center no-underline font-bold gap-2 cursor-pointer"
                      >
                        <FaEye className="text-xl self-center" />
                        View
                      </a>
                    )}
                    <a
                      href={code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-black text-white text-sm rounded-md flex items-center no-underline font-bold gap-2 cursor-pointer"
                    >
                      <FaCode className="text-xl self-center" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )})}
      </motion.div>
    </div>
  );
};

export default Projects;
