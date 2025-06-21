import React from 'react';
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-tertiary/60">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-textSecondary">
                Hi! I'm Ankita, a curious and creative Computer Engineering student at Bharati Vidyapeeth College of Engineering, Navi Mumbai. My journey in tech began with a fascination for how things work and a drive to solve real-world problems.
              </p>
              <p className="text-textSecondary">
                I'm passionate about building solutions that make a difference, whether it's through intuitive user experiences or smart automation. I value collaboration, continuous learning, and believe that the best ideas come from diverse perspectives and teamwork.
              </p>
              <p className="text-textSecondary">
                Outside of coding, you'll find me exploring new hiking trails, experimenting with digital art, or volunteering at community events. I'm always eager to connect, learn, and contribute to projects that have a positive impact.
              </p>
              <p className="text-textSecondary">
                Let's connect and create something amazing together!
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="aspect-square rounded-lg bg-tertiary p-4 w-48 h-48 flex items-center justify-center">
                <img src="https://drive.google.com/uc?export=view&id=1-KNRuL1tJxahhRfdL7ujElipuLF4epGg" alt="Ankita Ankush Jadhav" className="rounded-lg object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-secondary rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 