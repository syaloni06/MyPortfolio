/* eslint-disable react/prop-types */
import { MdOutlineWork } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const projects = [
  {
    image: "src/assets/projects/Youtube_Clone Preview.jpg",
    name: "Youtube Clone",
    code: "https://github.com/syaloni06/Youtube_Clone",
    description: "YouTube Clone is a React-powered app for seamless video streaming, authentication, and channel management with Redux and React Router."
  },
  {
    image: "src/assets/projects/Eventify preview.jpg",
    name: "Eventify",
    preview: "https://eventifysyaloni.netlify.app/",
    code: "https://github.com/syaloni06/Eventify",
    description: "Eventify is a powerful, user-friendly platform for effortless event creation, management, and participation."
  },
  {
    image: "src/assets/projects/ShoppyGlobe Preview.jpg",
    name: "ShopyGlobe",
    preview: "https://shoppyglobebysyaloni.netlify.app/",
    code: "https://github.com/syaloni06/ShoppyGlobe",
    description: "ShoppyGlobe is a React-powered e-commerce app with seamless browsing, cart management, API integration, and optimized performance."
  },
  {
    image: "src/assets/projects/CalcForge Preview.jpg",
    name: "CalcForge",
    preview: "https://calcforge.netlify.app/",
    code: "https://github.com/syaloni06/CalcForge",
    description: "CalcForge is a React-powered calculator builder app with drag-and-drop customization, powered by Zustand and Tailwind for a seamless experience."
  },
  {
    image: "src/assets/projects/Skycast Preview.jpg",
    name: "SkyCast",
    preview: "https://syaloni06.github.io/Weather_Forcast_Application/",
    code: "https://github.com/syaloni06/Weather_Forcast_Application",
    description: "SkyCast delivers real-time weather updates and 6-day forecasts with theme support and city memory."
  },
];

const Projects = ({ refProp }) => {
  return (
    <div
      ref={refProp}
      className="min-h-screen pt-12 dark:bg-black flex flex-col gap-6"
    >
      <h2 className="text-5xl flex gap-4 italic bg-gradient-to-r justify-center p-4 from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent">
        <MdOutlineWork className="self-end text-black dark:text-white" />
        My Project Works
      </h2>
      <div className="flex flex-wrap gap-10 justify-center mx-36 z-40">
        {projects.map(({ image, name, preview, code, description }, index) => {
          return (
            <div
              key={index}
              className="w-[300px] rounded-lg bg-gradient-to-r from-sky-400 to-blue-700 dark:from-sky-800 dark:to-blue-950 shadow-lg relative overflow-hidden group">
              <img src={image} alt={name} className="w-full h-56 rounded-md" />
              <div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-sky-400 to-blue-700 dark:from-sky-800 dark:to-blue-950 text-white font-bold text-xl px-4 py-2">
                  {name}
                </div>
                <div>
                  <div className="absolute bottom-[-100%] left-0 w-full bg-gradient-to-t from-sky-400 to-blue-700 dark:from-sky-800 dark:to-blue-950 transition-all duration-300 ease-in-out group-hover:bottom-0 p-4">
                  <div className="w-full text-cyan-800 dark:text-amber-500 italic font-bold pb-2 text-xl">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
