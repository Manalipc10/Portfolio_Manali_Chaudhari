import { ABOUT_CONTENT } from "../constants";
import profilePic from "../assets/ManaliProfile.jpg";

const About = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-8">
          <h1 className="pb-4 text-4xl md:text-6xl lg:text-8xl tracking-tight whitespace-nowrap"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
          }}>
          Manali Chaudhari
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-neutral-900 mb-6">
          MS in Information Studies at Syracuse University
          </p>

            <span className="text-4xl tracking-tight" style={{ color: '#6A0DAD' }}>
              Data Analyst
            </span>
            <p className="mt-6 text-lg text-gray-700 lg:pl-0">
              {ABOUT_CONTENT}
            </p>
            <a 
          href="/ManaliChaudhariResume.pdf"
          download
          className="inline-block mt-6 px-6 py-2 font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Download Resume
        </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <img src={profilePic} alt="Manali Chaudhari"
            className="w-[400px] h-[500px] object-cover"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
