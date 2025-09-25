import React from 'react'
import{FaGithub,FaGlobe,FaLinkedin} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="text-5 flex mt-16 bg-slate-800 text-white inset-shadow-sm inset-shadow-slate-950 w-screen px-4 flex-col items-center justify-center">
      <p className="text-center text-2xl font-semibold py-4 text-violet-400">
        Thanks for here!
      </p>

      <div className="flex gap-6 text-2xl pb-6">
        {/* Website */}
        <a
          href="https://akalya-t.github.io/portfolio_v4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe className="hover:text-gray-600 transition-colors" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/akalya-t"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-600 transition-colors" />
        </a>

        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/akalya-thirumurugan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-gray-600 transition-colors" />
        </a>
      </div>
      <p className="text-sm">©akalya@2025 all rights reserved.</p>
    </div>
  );
}

export default Footer
