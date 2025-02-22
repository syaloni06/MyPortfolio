/* eslint-disable react/prop-types */
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const Contact = ({ refProp }) => {
  return (
    <div ref={refProp} className="h-screen flex flex-col items-center justify-center dark:bg-black pt-12">
       <h2 className="text-5xl flex gap-4 mb-8 italic bg-gradient-to-r from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent z-40">
          <RiCustomerService2Fill className="self-end text-black dark:text-white" />
          Get In Touch
        </h2>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-10 w-2/3 bg-gradient-to-r from-sky-200 to-blue-400 dark:from-sky-800 dark:to-blue-950 shadow-lg px-5 rounded-2xl">
        {/* Left Side: Contact Image */}
        <div className="w-full md:w-1/2">
          <img src="src\assets\contact.png" alt="Contact Illustration" className="w-full" />
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-4 dark:text-white text-black" />
              <input type="text" placeholder="Name" className="w-full pl-10 p-3 rounded-md bg-blue-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 dark:text-white text-black" />
              <input type="email" placeholder="Email" className="w-full pl-10 p-3 rounded-md bg-blue-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div className="relative">
              <FaPhone className="absolute left-3 top-4 dark:text-white text-black" />
              <input type="tel" placeholder="Phone" className="w-full pl-10 p-3 rounded-md bg-blue-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div className="relative">
              <FaCommentDots className="absolute left-3 top-4 dark:text-white text-black" />
              <textarea placeholder="Message" rows="4" className="w-full pl-10 p-3 rounded-md bg-blue-100 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-sky-500 to-blue-800 text-xl font-bold text-white flex items-center justify-center gap-2 py-3 rounded-md hover:bg-blue-700 transition">
              Submit <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
