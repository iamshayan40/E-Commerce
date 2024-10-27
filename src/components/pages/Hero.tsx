import React from "react";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-white dark:bg-black overflow-x-hidden flex items-center">
      <div className="w-[60%] h-full flex flex-col justify-center items-start px-20 -mt-20">
        {/* Heading with Gradient */}
        <h1 className="text-5xl md:text-7xl font-bold font-monty">
          Your Ultimate Tech{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Destination.
          </span>
        </h1>

        {/* Subheading */}
        <h3 className="font-lexend text-xl md:text-xl mt-6 text-gray-700 dark:text-gray-300">
          Discover the latest in phones, gaming gear, laptops, and accessories.
        </h3>

        {/* Paragraph */}
        <p className="mt-4 font-lexend text-sm font-light md:text-lg text-black dark:text-gray-400 leading-relaxed">
          Elevate your tech game with top-notch phones, professional and gaming
          laptops, cutting-edge computers, and a wide range of accessories.
          Whether you're a pro gamer, a tech enthusiast, or a professional on
          the go, we have the perfect tools to power your lifestyle. Unleash
          your potential with the best in technology, designed for everyone.
        </p>

        {/* Call to Action */}
        <div className="relative group pt-6">
          <a
            href="#contact" // Change this to your desired link
            className="relative inline-block w-full md:w-[14vw] py-2  font-semibold text-gray-300 shadow-sm cursor-pointer rounded-full border border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-10 block px-4 py-1 rounded-full">
              <div className="relative z-10 flex items-center space-x-2 justify-center">
                <span className="transition-all text-xl text-black dark:text-white font-lexend font-light duration-500 group-hover:translate-x-1">
                  Explore Now
                </span>
              </div>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
