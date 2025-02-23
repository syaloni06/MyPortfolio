import { IoHeart } from "react-icons/io5";
import { FaAt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-white py-10 px-5">
      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {/* Portfolio Info */}
        <div>
          <h2 className="text-2xl font-semibold">Syaloni&apos;s Portfolio</h2>
          <p className="mt-3">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p className="mt-3">
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold">Quick Links</h2>
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
        <div>
          <h2 className="text-2xl font-semibold">Contact Info</h2>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📞</span> +91 XXX-XXX-XXXX
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span> jigarsable21@gmail.com
            </li>
            <li className="flex items-center">
              <span className="mr-2">📍</span> Pune, India - 412206
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {["linkedin", "github", "email", "twitter", "telegram"].map(
              (icon) => (
                <span
                  key={icon}
                  className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-black"
                >
                  {icon[0].toUpperCase()}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t flex justify-center text-xl font-bold gap-2 border-gray-600 mt-10 pt-5 text-center">
        <div className="flex gap-2">
       <span> Designed With</span> <IoHeart className="text-red-500 self-center" /><span>By</span>
        </div>
        <div className="flex gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 font-bold bg-clip-text text-transparent italic">
          <div className=" flex">
            Sy<FaAt className="self-end text-yellow-500"/>loni
          </div>
          <div className="flex">
          B
            <FaAt className="self-end text-orange-400" />
            rm
            <FaAt className="self-end text-orange-500" />
            n
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
