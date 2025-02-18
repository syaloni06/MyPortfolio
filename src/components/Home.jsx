import BackgroundParticles from "../utils/BackgroundParticles";

const Home = () => {
  return (
    <>
      <BackgroundParticles />
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="relative w-64 h-64 flex justify-center items-center">
          {/* Rotating Circular Border */}
          <div className="absolute w-72 h-72 animate-spin-very-slow">
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
                strokeWidth="2" // Thicker lines
                strokeDasharray="40 10 20 30"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
          </div>

          {/* Profile Image - No Gap */}
          <img
            src="src/assets/heading.jpg"
            alt="Profile"
            className="absolute h-64 w-64 object-cover rounded-full border-4 border-transparent shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
