import * as React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

const roles = [
  'Programmer', 2000,
  'Data Scientist', 2000,
  'UI/UX Designer', 2000,
]

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-primary to-tertiary">
      <div className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-left w-full max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-textPrimary">
            Hi, I'm Ankita Jadhav
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-secondary mb-4 min-h-[2.5rem]">
            <Typewriter
              words={['Programmer', 'Data Scientist', 'UI/UX Designer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          <p className="text-textSecondary text-lg md:text-xl mb-8 max-w-2xl">
            I'm a passionate data science enthusiast with a strong foundation in machine learning, Python, and data visualization. I enjoy uncovering insights from data and building intelligent systems that solve real-world problems. With a growth mindset and curiosity-driven approach, I'm always eager to learn, collaborate, and make meaningful contributions in the field.
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/Ankitajadhav-31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-textPrimary hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ankita-jadhav-465767283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-textPrimary hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:jadhavankita715@gmail.com"
              className="text-2xl text-textPrimary hover:text-secondary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          <div className="flex gap-4">
            {/* @ts-ignore */}
            <ScrollLink
              to="about"
              className="btn-primary cursor-pointer"
              smooth={true}
              duration={500}
            >
              Learn More About Me
            </ScrollLink>
          </div>
        </motion.div>
        <div className="flex-1 flex justify-start md:justify-end mb-8 md:mb-0 md:-ml-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="w-60 md:w-72 h-60 md:h-72 rounded-full border-4 border-secondary shadow-lg bg-tertiary flex items-center justify-center overflow-hidden"
            style={{ minWidth: '240px', minHeight: '240px', maxWidth: '300px', maxHeight: '300px' }}
          >
            <img
              src="/ankita.jpeg"
              alt="Ankita Jadhav profile"
              className="object-cover w-full h-full rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
];

const Footer = () => (
  <footer className="py-10 bg-primary text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-secondary mb-4">Ankita Jadhav</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        {navItems.map((item) => (
          <ScrollLink
            key={item.name}
            to={item.to}
            smooth={true}
            duration={500}
            className="cursor-pointer text-textPrimary hover:text-secondary font-medium transition-colors"
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>
      <div className="flex justify-center gap-6 mb-4">
        <a href="mailto:your.email@example.com" className="text-2xl text-textPrimary hover:text-secondary transition-colors" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-2xl text-textPrimary hover:text-secondary transition-colors" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="text-2xl text-textPrimary hover:text-secondary transition-colors" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
      <div className="text-textSecondary text-sm mt-6">
        © {new Date().getFullYear()} Ankita Jadhav. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Hero 