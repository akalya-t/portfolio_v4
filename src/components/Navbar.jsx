
import React,{ useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-3 sticky top-0 bg-slate-800 text-violet-200 shadow-md z-50">
      {/* Logo or name */}
      <h1 className="text-xl font-bold">Akalya</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="hover:text-gray-400 transition-colors">
          About
        </a>
        <a
          href="#experiences"
          className="hover:text-gray-400 transition-colors"
        >
          Experiences
        </a>
        <a href="#projects" className="hover:text-gray-400 transition-colors">
          Projects
        </a>
        <a
          href="mailto:akalyaofficial271@gmail.com"
          className="hover:text-gray-400 transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-slate-800 flex flex-col items-center space-y-4 py-6 md:hidden shadow-md">
          <a
            href="#about"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#experiences"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Experiences
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="mailto:akalyaofficial271@gmail.com"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
