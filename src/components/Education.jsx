/* eslint-disable react/prop-types */
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
const details = [
  {
    course: "Full Stack Developement Training Programme",
    organization: "Internshala",
    duration: "June 2024 - Present",
  },
  {
    course: "Full stack Java Developer Trainning Program",
    organization: "Generation, Anudip Foundation",
    duration: "Aug 2023 - Jan 2024",
  },
  {
    course: "B.Tech, Electronics and Communication Engineering",
    organization: "Bengal Institute Of Technology",
    duration: "Aug 2019 - Jul 2023",
  },
  {
    course: "West Bengal Council of Higher Secondary Education",
    organization: "Christ Church Girls' High School",
    duration: "2018 - 2019",
  },
  {
    course: "West Bengal Board of Secondary Education",
    organization: "Christ Church Girls' High School",
    duration: "2016 - 2017",
  }
];

const Education = ({ refProp }) => {
  return (
    <div
      ref={refProp}
      className="bg-white dark:bg-black min-h-screen flex flex-col items-center py-10"
    >
      {/* Title */}
      <h2 className="text-5xl flex gap-4 p-10 italic bg-gradient-to-r from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent">
              <IoSchoolSharp className="self-end text-black dark:text-white" />
              My Education
            </h2>

      {/* Timeline Container */}
      <div className="relative w-11/12 md:w-2/3">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[5px] bg-gray-300"></div>

        {details.map((exp, index) => (
          <div key={index} className="relative flex items-center mb-4">
            {/* Icon (Centered on the Timeline) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-blue-800 shadow-md">
            <FaSchool className="text-xl text-blue-800"/>
            </div>

            {/* Experience Card with Attached Triangle */}
            <div
              className={`relative w-[45%] p-3 bg-gradient-to-r from-sky-500 to-blue-800 text-white rounded-lg shadow-md ${
                index % 2 === 0 ? "ml-auto text-left" : "mr-auto text-left"
              }`}
            >
              {/* Triangle Attached to Card */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-[10px] border-transparent ${
                  index % 2 === 0
                    ? "border-r-[12px] border-r-sky-500 -left-2" // Left-aligned: Triangle on left
                    : "border-l-[12px] border-l-blue-800 -right-2" // Right-aligned: Triangle on right
                }`}
              ></div>

              <h3 className="text-xl italic font-bold">{exp.organization}</h3>
              <p className="text-sm italic font-bold">{exp.course}</p>
              <span className="text-xs italic font-bold opacity-80">{exp.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
