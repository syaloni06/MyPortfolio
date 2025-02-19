/* eslint-disable react/prop-types */
import { useState } from "react";
import DarkModeToggle from "../utils/DarkModeToggle";
import { FaAt } from "react-icons/fa";
const Navbar = ({ scrollToSection, refs }) => {
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "About", ref: refs.aboutRef },
    { name: "Education", ref: refs.educationRef },
    { name: "Skills", ref: refs.skillsRef },
    { name: "Projects", ref: refs.projectsRef },
    { name: "Certificates", ref: refs.certificatesRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  return (
    <nav className="w-full bg-white dark:bg-black shadow-sm h-16 flex items-center fixed top-0 left-0 z-50">
      <div className="w-full h-full flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center font-bold text-2xl italic">
          <div
            onClick={() => {
              scrollToSection(refs.homeRef);
              setActive("Home");
            }}
            className="bg-gradient-to-r flex from-sky-500 to-blue-800 text-transparent bg-clip-text cursor-pointer"
          >
            &lt;Sy<FaAt className="text-sky-600 text-2xl self-end"/>loni/&gt;
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          {navLinks.map(({ name, ref }) => (
            <li key={name}>
              <button
                onClick={() => {
                  scrollToSection(ref);
                  setActive(name);
                }}
                className={`relative cursor-pointer font-medium transition ${
                  active === name
                    ? "text-blue-600"
                    : "hover:text-blue-500 dark:text-white"
                }`}
              >
                {name}
                {active === name && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </button>
            </li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
