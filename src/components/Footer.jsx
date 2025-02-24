import { IoHeart } from "react-icons/io5";
import { FaAt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/syaloni-barman/",
      icon: <FaLinkedinIn />,
    },
    { href: "https://github.com/syaloni06", icon: <TbBrandGithubFilled /> },
    {
      href: "https://www.facebook.com/profile.php?id=100009206428249",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/syalon_i/?hl=en",
      icon: <GrInstagram />,
    },
    {
      href: "mailto:syalonib@gmail.com",
      icon: <SiGmail />,
    },
  ];
  return (
    <footer className="bg-white dark:bg-black text-white py-10 px-5 z-40">
      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {/* Portfolio Info */}
        <div>
          <h2 className="text-3xl italic bg-gradient-to-r from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent p-1">Syaloni&apos;s Portfolio</h2>
          <p className="mt-3 italic font-bold text-black dark:text-white">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-3xl italic bg-gradient-to-r from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            {["Home", "About", "Skills", "Education", "Work", "Experience"].map(
              (link) => (
                <li key={link} className="flex items-center">
                  <span className="mr-2">➤</span> {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="z-40">
          <h2 className="text-3xl italic bg-gradient-to-r from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent">Contact Info</h2>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center">
              <span className="mr-2"><IoIosMail className="text-3xl text-yellow-500"/></span> 
              <span className="italic text-xl font-bold text-black dark:text-white">syalonib@gmail.com</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2"><ImLocation className="text-3xl text-rose-700"/></span> <span className="italic text-xl font-bold text-black dark:text-white">Kolkata, India - 700055</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex mt-6 text-2xl text-customBlue space-x-6">
            {links.map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 rounded-full hover:text-white border-customBlue hover:bg-customBlue p-2 hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t flex justify-center text-xl font-bold gap-2 border-gray-600 mt-10 pt-5 text-center">
        <div className="flex gap-2">
          <span className="text-black dark:text-white"> Designed With</span>{" "}
          <IoHeart className="text-red-500 self-center text-2xl" />
          <span className="text-black dark:text-white">By</span>
        </div>
        <div className="flex gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 font-bold bg-clip-text text-transparent italic">
          <div className=" flex">
            Sy
            <FaAt className="self-end text-yellow-500" />
            loni
          </div>
          <div className="flex">
            B
            <FaAt className="self-end text-orange-400" />
            rm
            <FaAt className="self-end text-orange-500" />n
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-5 right-5 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer">
        ⬆️
      </div>
    </footer>
  );
};

export default Footer;
