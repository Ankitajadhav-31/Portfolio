import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    alert('Thank you for reaching out! (This is a placeholder form.)')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-tertiary/60">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-textSecondary mb-6">
                I'm currently open to new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
              <div className="flex gap-4 items-center mb-4">
                <a
                  href="https://github.com/Ankitajadhav-31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-2xl text-textPrimary hover:text-secondary transition-colors"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankita-jadhav-465767283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-2xl text-textPrimary hover:text-secondary transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/ankitajadhav_31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-2xl text-textPrimary hover:text-secondary transition-colors"
                  title="Twitter (X)"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-textPrimary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tertiary rounded-md text-textPrimary focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textPrimary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tertiary rounded-md text-textPrimary focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textPrimary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-tertiary rounded-md text-textPrimary focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary w-full"
              >
                Send
              </motion.button>
            </form>
            <div className="flex flex-col justify-center items-start gap-4 md:col-span-1 mt-8 md:mt-0">
              <div className="flex items-center gap-2 text-textPrimary">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:jadhavankita715@gmail.com"
                  className="hover:text-secondary transition-colors text-base font-medium"
                >
                  jadhavankita715@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 