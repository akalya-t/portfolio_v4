import React from 'react'

const Experience = () => {
  return (
    <section className="p-4">
      <h2 id="experiences" className="text-center py-6 font-bold text-4xl text-violet-400">Experiences</h2>
      <div className="text-justify">
        <h5 className="font-semibold pt-4">Logo Design (2022 – 2024)</h5>I
        started by designing logos for startups and small businesses, helping
        them tell their story through clean and meaningful visuals. Some of the
        projects I worked on include:
        <ul className="list-disc pl-10">
          <li>Boutique Pilates Club – modern and elegant branding.</li>
          <li>Signature Meat – bold and strong identity</li>
          <li>Obsidian Athletic Club – sporty and energetic look</li>
          <li>Sacred Vine Church – traditional and spiritual design</li>
        </ul>
        <h4 className="font-semibold pt-4">
          Front-End Development (2024 – Present)
        </h4>
        <p className="text-justify">
          I’m now bringing designs to life by building websites that look great
          and are easy to use. I work on creating responsive, mobile-friendly
          sites and learning new tools to improve performance and user
          experience.
        </p>
      </div>
    </section>
  );
}

export default Experience