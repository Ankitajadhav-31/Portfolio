import * as React from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1UYGpt2ucNGkhU0kw9X8hiws2kEZA9P7b/view?usp=sharing'
    window.open(resumeUrl, '_blank')
  }

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="section-title">Resume</h2>
          <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications. I am always open to new opportunities and collaborations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaDownload />
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 