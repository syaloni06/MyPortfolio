import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Work",
    "Experience",
    "Contact",
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-sm h-16 flex items-center fixed top-0 left-0 z-50">
        <div className="w-full h-full flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex gap-1 items-center font-bold text-2xl italic">
            <div className="text-black">&lt;</div>
            <div className="bg-gradient-to-r from-sky-300 to-blue-500 text-transparent bg-clip-text">
              Syaloni Barman</div>
            <div>/&gt;</div>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={() => setActive(item)}
                  className={`relative cursor-pointer font-medium text-gray-800 transition ${
                    active === item ? "text-blue-600" : "hover:text-blue-500"
                  }`}
                >
                  {item}
                  {active === item && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
