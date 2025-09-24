import React from 'react'

const Projects = () => {
  return (
    <section className="p-4">
      <h3
        id="projects"
        className="text-center font-bold pb-0 text-4xl pt-6 text-violet-400"
      >
        Projects
      </h3>
      <br />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a
          href=""
          className="flex items-center justify-center shadow-xl/20 aspect-square rounded-xl hover:shadow-2xl transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Rhivva
          </span>
        </a>

        <a
          href=""
          className="flex items-center justify-center shadow-xl/20 aspect-square rounded-xl hover:shadow-2xl transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-2xl font-semibold text-slate-200">
            Portfolio
          </span>
        </a>

        <a
          href="https://akalya-t.github.io/landing_page_tea/"
          className="flex items-center justify-center shadow-xl/20 aspect-square rounded-xl hover:shadow-2xl transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-2xl font-semibold text-red-100">Tea page</span>
        </a>

        <a
          href="https://akalya-t.github.io/logo_designs/"
          className="flex items-center justify-center shadow-xl/20 aspect-square rounded-xl hover:shadow-2xl transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-2xl font-semibold text-teal-100">Logos</span>
        </a>
      </div>
    </section>
  );
}

export default Projects