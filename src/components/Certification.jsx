/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { PiCertificateFill } from "react-icons/pi";

const certificates = [
  {
    certificate: "src/assets/certificates/NSCD Certificate.jpg",
    name: "Full Stack Development",
    university: "NSDC",
  },
  {
    certificate:
      "src/assets/certificates/Full Stack Development Certificate.jpg",
    name: "Full Stack Development",
    university: "Internshala",
  },
  {
    certificate: "src/assets/certificates/React.jpg",
    name: "React.js",
    university: "Internshala",
  },
  {
    certificate: "src/assets/certificates/Javascript .jpg",
    name: "JavaScript Programming",
    university: "Internshala",
  },
  {
    certificate: "src/assets/certificates/Node, Express & MongoDB.jpg",
    name: "Node, Express & MongoDB",
    university: "Internshala",
  },
  {
    certificate: "src/assets/certificates/HTML, CSS.jpg",
    name: "HTML, CSS & Tailwind CSS",
    university: "Internshala",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delays each child animation by 0.3s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Certification = ({ refProp }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div
      ref={refProp}
      className="w-full min-h-screen justify-center text-white dark:bg-black flex items-center py-16 z-40"
    >
      {/* Title Section */}
      <motion.div
        className="w-2/5 pl-10 z-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl flex w-full gap-2 items-center pb-2 italic bg-gradient-to-r from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent">
          <PiCertificateFill className="text-black dark:text-white" />
          <span>My Certificates</span>
        </h2>
        <p className="text-lg text-black dark:text-white font-bold mt-4">
        I have successfully completed a range of programming courses to enhance my expertise and stay ahead in the field. These certifications have equipped me with in-depth knowledge of modern technologies, frameworks, and best coding practices. Through hands-on projects and real-world applications, I have strengthened my problem-solving abilities and gained practical experience. Here are some of my certifications.
        </p>
      </motion.div>

      {/* Certificate Grid with One-by-One Animation on Scroll */}
      <motion.div
        className="flex flex-wrap  w-3/5 justify-center gap-6 mt-10 z-40"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% of the element is in view
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-sky-400 to-blue-700 dark:from-sky-800 dark:to-blue-950 rounded-lg p-2 shadow-lg w-60 cursor-pointer z-40"
            variants={itemVariants} // Staggered Animation on Scroll
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.certificate}
              alt={cert.name}
              className="w-full h-40 rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">{cert.name}</h3>
            <p className="text-cyan-950 dark:text-green-400 font-bold italic">{cert.university}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Full-Screen Modal for Viewing Certificate */}
      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative flex flex-col items-center justify-center">
            <button
              className="absolute -top-10 -right-10 text-gray-500 text-4xl"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <img
              src={selectedCert.certificate}
              alt={selectedCert.name}
              className="rounded-lg max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certification;
