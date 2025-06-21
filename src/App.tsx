import * as React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Education from './components/Education'
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-primary text-textPrimary transition-colors duration-300`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div data-aos="fade-up">
          <Hero />
        </div>
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Education />
        </div>
        <div data-aos="fade-up">
          <Skills />
        </div>
        <div data-aos="fade-up">
          <Experience />
        </div>
        <div data-aos="fade-up">
          <Projects />
        </div>
        <div data-aos="fade-up">
          <Resume />
        </div>
        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App 