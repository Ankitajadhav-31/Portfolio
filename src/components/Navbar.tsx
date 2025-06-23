import * as React from 'react'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { FaGithub } from 'react-icons/fa'
import logo from '../logo.svg'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <ScrollLink
            to="home"
            className="flex items-center gap-2 text-2xl font-bold text-secondary cursor-pointer"
            smooth={true}
            duration={500}
          >
            <img src={logo} alt="logo" className="h-8 w-8" />
            <span>Ankita's Portfolio</span>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                className="nav-link"
                smooth={true}
                duration={500}
              >
                {item.name}
              </ScrollLink>
            ))}
            {/* GitHub Button */}
            <a
              href="https://github.com/Ankitajadhav-31"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 w-10 h-10 flex items-center justify-center rounded-lg bg-tertiary text-textPrimary hover:bg-gradient-to-tr hover:from-secondary hover:to-primary hover:text-primary shadow transition-all duration-300 border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-tertiary transition-colors ml-4"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-textPrimary" />
            ) : (
              <MoonIcon className="h-6 w-6 text-textPrimary" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-textPrimary mb-1.5"></div>
            <div className="w-6 h-0.5 bg-textPrimary mb-1.5"></div>
            <div className="w-6 h-0.5 bg-textPrimary"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  className="nav-link block px-3 py-2"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
              {/* GitHub Button in Mobile Menu */}
              <a
                href="https://github.com/Ankitajadhav-31"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 w-10 h-10 flex items-center justify-center rounded-lg bg-tertiary text-textPrimary hover:bg-gradient-to-tr hover:from-secondary hover:to-primary hover:text-primary shadow transition-all duration-300 border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 