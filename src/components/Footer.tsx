import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Resume', to: 'resume' },
  { name: 'Contact', to: 'contact' },
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

export default Footer; 