import BackgroundParticles from "../utils/BackgroundParticles";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-white dark:bg-black relative px-28 text-black">
        <BackgroundParticles />
        {/* Left Side Content */}
        <div className="text-left max-w-lg z-50">
          <h1 className="text-5xl font-bold dark:text-white">
            Hi There, <br /> I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-800 font-bold bg-clip-text text-transparent">Syaloni Barman</span>
          </h1>
          <p className="flex gap-2 italic text-2xl mt-2 font-semibold">
            <span className="dark:text-white">I Am Into</span>
            <span className="text-yellow-400">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Development",
                    "Web Development",
                    "MERN Stack Development",
                    "Backend Development",
                    "Full Stack Development",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </span>
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-800 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            About Me ↓
          </button>
        </div>

        {/* Right Side - Profile Image */}
        <div className="relative w-72 h-72 flex justify-center items-center ml-12">
          <div className="absolute w-80 h-80 animate-spin-very-slow">
            <svg
              className="w-full h-full"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="#0099ff"
                strokeWidth="3"
                strokeDasharray="40 10 20 30"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
          </div>
          <img
            src="src/assets/heading.jpg"
            alt="Profile"
            className="absolute h-72 w-72 object-cover rounded-full border-4 border-transparent shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
