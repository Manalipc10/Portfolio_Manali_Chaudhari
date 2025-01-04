import React from "react";
// Update the paths/names below to match where your images are stored
import Card1Image from "../assets/tam_logo.jpeg";
import Card2Image from "../assets/cp_logo.png";
import Card3Image from "../assets/menstrupedia_logo.png";

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      {/* Outer container with horizontal padding and centered layout */}
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
        <h2 className="my-10 text-4xl font-serif text-black text-center mb-8">Experience</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image */}
            <img
              src={Card1Image}
              alt="Project Intern, TAM Media Research"
              className="h-48 w-full object-cover"
            />
            {/* Card Content */}
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Project Intern, TAM Media Research</h3>
              <p className="mb-4">
              Devised and deployed automated real-time solutions with Google API and Streamlit, slashing manual article retrieval by 80% and boosting keyword-based media coverage speed and accuracy.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: Python, API Integration, Streamlit
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card2Image}
              alt="GIT Intern,CP"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2"> Global Information Technology Intern, Colgate-Palmolive
              </h3>
              <p className="mb-4">
              Executed over 500+ monthly regression tests, elevated supply chain efficiency by 20%, championed agile methods, and cut support tickets by 25% through clear documentation.
              </p>
              <p className="text-sm font-semibold">
                Key Skills:  UFT, ALM, Visual Basic Scripting, Technical Documentation
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={Card3Image}
              alt="Web Developer Intern"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-neutral-800">
              <h3 className="text-xl font-semibold mb-2">Web Developer Intern, Menstrupedia</h3>
              <p className="mb-4">
              Collaborated on user-friendly web designs, increasing engagement by 20%, reducing bounce rate by 15%, and achieving a 95% bug-free launch with 50+ pre-production tests.
              </p>
              <p className="text-sm font-semibold">
                Key Skills: HTML, CSS, Bootstrap, JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
