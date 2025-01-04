import React, { useState, useEffect } from "react";
import { ABOUT_CONTENT } from "../constants";
import profilePic1 from "../assets/ManaliProfile.jpg";
import profilePic2 from "../assets/ManaliProfile2.jpg"; // Second image

const About = () => {
  // State to track whether the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Flip the card every 5 seconds (10,000 ms)
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          /* Container with 3D perspective */
          .flip-card {
            perspective: 1000px; /* Distance from the viewer to the card */
          }

          /* Inner container for front/back images */
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.6s; /* Flip duration */
            /* Dynamically rotate based on isFlipped state */
            transform: rotateY(${isFlipped ? "180deg" : "0deg"});
          }

          /* Front and back faces */
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden; /* Hide backside when facing away */
            border-radius: 12px;
          }

          /* The back face is rotated 180° by default */
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>

      <section className="px-4 py-4 lg:px-16 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          {/* Left Section: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1
              className="pb-4 text-4xl md:text-6xl lg:text-7xl tracking-tight"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
              }}
            >
              Manali Chaudhari
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-neutral-900 mb-4">
              MS in Information Studies at Syracuse University
            </p>

            <span
              className="text-3xl lg:text-4xl tracking-tight"
              style={{ color: "#6A0DAD" }}
            >
              Data Analyst
            </span>

            <p className="mt-6 text-base md:text-lg text-gray-700">
              {ABOUT_CONTENT}
            </p>

            <a
              href="/ManaliChaudhariResume.pdf"
              download
              className="inline-block mt-6 px-6 py-3 font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Right Section: Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="flip-card w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] mx-auto">
              <div className="flip-card-inner">
                {/* Front Image */}
                <div className="flip-card-front">
                  <img
                    src={profilePic1}
                    alt="Manali Chaudhari Front"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Back Image */}
                <div className="flip-card-back">
                  <img
                    src={profilePic2}
                    alt="Manali Chaudhari Back"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
