/* eslint-disable react/prop-types */
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiExpress,
} from "react-icons/si";
import { BiLogoVisualStudio, BiLogoNetlify } from "react-icons/bi";
import { SiRender } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const skills = [
  { name: "ReactJS", icon: <FaReact className="text-sky-500" /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-800" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="text-sky-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-700" /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "VS Code", icon: <BiLogoVisualStudio className="text-sky-500" /> },
  { name: "Netlify", icon: <BiLogoNetlify className="text-teal-600" /> },
  { name: "Render", icon: <SiRender className="text-white text-3xl" /> },
];

const Skill = ({ refProp }) => {
  return (
    <div
      ref={refProp}
      className="h-screen flex flex-col gap-8 items-center justify-center dark:bg-black"
    >
      <h2 className="text-5xl flex gap-4 italic bg-gradient-to-r from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent">
        <FaLaptopCode className="self-end text-black dark:text-white" />
        Skills & Abilities
      </h2>
      <div className="flex flex-wrap justify-center gap-6 p-8 bg-gradient-to-r from-sky-200 to-blue-400 rounded-xl shadow-lg w-3/5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-black rounded-lg shadow-md text-white w-28"
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="mt-2 text-lg font-semibold text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
