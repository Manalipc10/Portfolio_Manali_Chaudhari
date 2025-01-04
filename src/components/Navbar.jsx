import logo from "../assets/ManaliLogo.png";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

       {/* Middle section: Navigation links */}
       <ul className="hidden md:flex items-center gap-8 text-neutral-700">
        <li>
          <a href="#about" className="hover:text-neutral-900 transition">
            About
          </a>
        </li>
        <li>
          <a href="#technology" className="hover:text-neutral-900 transition">
            Technology
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-neutral-900 transition">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-neutral-900 transition">
            Projects
          </a>
        </li>
      </ul>
      
      {/* Right section: Social links */}
      <div className="flex items-center gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/manali-chaudhari/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-blue-600 hover:text-blue-800 transition mr-2" // Adjusted text size and added margin
        >
          <FaLinkedin />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
