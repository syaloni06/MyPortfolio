/* eslint-disable react/prop-types */
import { BsPersonBoundingBox } from "react-icons/bs";
import AboutMeImage from "../assets/About Me.jpg"; // Adjust path if needed
import ResumePDF from "../assets/Syaloni_Barman_Resume.pdf"; // Import PDF

const About = ({ refProp }) => {
  return (
    <div ref={refProp} className="h-screen dark:bg-black p-20 z-40">
      <div className="flex flex-col md:flex-row px-20 gap-10 items-center justify-center z-40">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center relative z-40">
          <img
            src={AboutMeImage}
            alt="About Me"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col gap-4 z-40">
          <h2 className="text-5xl flex gap-4 italic bg-gradient-to-r from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent">
            <BsPersonBoundingBox className="self-center text-4xl text-black dark:text-white" />
            About Me
          </h2>
          <p className="text-lg text-justify font-bold text-gray-800 dark:text-gray-300">
            I am a passionate MERN stack developer dedicated to crafting
            high-performance, scalable web applications that deliver seamless
            user experiences. With expertise in MongoDB, Express.js, React, and
            Node.js, I specialize in building dynamic, responsive, and efficient
            solutions. My strong foundation in front-end technologies like
            Tailwind CSS and Redux, combined with backend proficiency in Node.js
            and database management with MongoDB and SQL, allows me to develop
            full-stack applications from the ground up.
          </p>
          
          {/* Resume Download Button */}
          <a href={ResumePDF} download="Syaloni_Barman_Resume.pdf">
            <button className="mt-6 w-1/4 px-1 py-2 bg-gradient-to-r from-sky-500 to-blue-800 text-white text-xl font-bold rounded-lg shadow-md hover:bg-blue-700 transition">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
