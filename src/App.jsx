import React from 'react'

import Herosection from './components/Herosection';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';




const App = () => {
  return (
    <>
     
      <Navbar />
      <Herosection />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App