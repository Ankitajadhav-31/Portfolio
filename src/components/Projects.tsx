import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface Project {
  title: string;
  date: string;
  techStack: string[];
  shortDescription: string;
  fullDescription: string;
  viewCodeUrl: string;
  viewLiveAppUrl: string;
  image: string;
  banner: string;
}

const projects: Project[] = [
  {
    title: 'Attendance Management System using QR Code',
    date: 'March 2022 – April 2022',
    techStack: ['Flutter', 'Firebase', 'UI/UX'],
    shortDescription: 'Developed a mobile app that allows students to mark attendance via QR code scanning and stores data in Firebase.',
    fullDescription: 'This app streamlines attendance tracking by allowing students to scan a QR code to register their presence. It syncs data with Firebase in real-time and displays summary reports. Designed for use in educational institutions during my final semester of diploma.',
    viewCodeUrl: '#',
    viewLiveAppUrl: '#',
    image: 'https://placehold.co/600x400/2E2E3E/FFFFFF?text=Project+1',
    banner: 'https://placehold.co/1200x600/2E2E3E/FFFFFF?text=Project+1+Banner'
  },
  {
    title: 'Personal Portfolio Website',
    date: 'May 2024 - Present',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    shortDescription: 'A responsive personal portfolio website to showcase my skills and projects, just like this one.',
    fullDescription: 'Designed and developed a personal portfolio website from scratch using modern web technologies. Implemented a clean and modern UI with a dark theme, animations, and a responsive layout to ensure a great user experience across all devices.',
    viewCodeUrl: '#',
    viewLiveAppUrl: '#',
    image: 'https://placehold.co/600x400/2E2E3E/FFFFFF?text=Project+2',
    banner: 'https://placehold.co/1200x600/2E2E3E/FFFFFF?text=Project+2+Banner'
  },
  {
    title: 'Fake News Detection System',
    date: 'October 2023 – December 2023',
    techStack: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NLP'],
    shortDescription: 'Developed a machine learning-based system to classify news articles as real or fake using natural language processing and supervised learning techniques.',
    fullDescription: 'The "Fake News Detection System" uses Python and machine learning algorithms to identify the authenticity of news articles. Leveraging NLP techniques and models such as Logistic Regression and SVM, the system analyzes textual content to detect misleading or false information. The dataset was preprocessed with tokenization, stop word removal, and TF-IDF vectorization. This tool helps users and media platforms minimize the spread of misinformation.',
    viewCodeUrl: '#',
    viewLiveAppUrl: '#',
    image: 'https://placehold.co/600x400/2E2E3E/FFFFFF?text=Project+3',
    banner: 'https://placehold.co/1200x600/2E2E3E/FFFFFF?text=Project+3+Banner'
  },
  {
    title: 'Centralized Intranet System for Internal Communication',
    date: 'January 2024 – July 2024',
    techStack: ['JavaScript', 'Google Apps Script', 'Google Sites', 'JotForm', 'Power BI', 'Looker Studio', 'Pabbly', 'Candelyy'],
    shortDescription: 'Designed and implemented a centralized intranet system to improve internal communication, tool integration, and workflow automation across departments.',
    fullDescription: 'This project was developed during my internship at Talent Corner HR Services. The goal was to create a centralized intranet platform to streamline internal processes and team collaboration. The system integrates third-party tools like JotForm, Power BI, Looker Studio, Pabbly, and Candelyy. I also implemented secure third-party authentication to ensure role-based access. The result was an efficient, user-friendly interface that significantly improved internal workflows and data visualization across teams.',
    viewCodeUrl: '#',
    viewLiveAppUrl: '#',
    image: 'https://placehold.co/600x400/2E2E3E/FFFFFF?text=Project+4',
    banner: 'https://placehold.co/1200x600/2E2E3E/FFFFFF?text=Project+4+Banner'
  },
  {
    title: 'Single Sign-On (SSO) Integration',
    date: 'March 2025 – April 2025',
    techStack: ['ASP.NET', 'C#', 'SQL Server', 'OAuth', 'OpenID Connect', 'SAML'],
    shortDescription: 'Created a secure SSO system using ASP.NET Identity with role-based access and third-party authentication.',
    fullDescription: 'Built a centralized login system using OAuth, OpenID Connect, and SAML for secure enterprise authentication. Included RBAC, JWT token handling, and modular N-Tier architecture using C# and SQL Server.',
    viewCodeUrl: '#',
    viewLiveAppUrl: '#',
    image: 'https://placehold.co/600x400/2E2E3E/FFFFFF?text=Project+5',
    banner: 'https://placehold.co/1200x600/2E2E3E/FFFFFF?text=Project+5+Banner'
  },
  {
    title: 'Product and Category Management System',
    date: 'Jan 2024 – May 2024',
    techStack: ['ASP.NET', 'C#', 'SQL Server', 'Entity Framework', 'AJAX', 'jQuery', 'SweetAlert', 'Toastr', 'Chosen'],
    shortDescription: 'A web-based system for managing products and categories with secure role-based access and dynamic UI.',
    fullDescription: 'Designed and built a multi-layered (N-Tier) web application to manage product listings and categories efficiently. It includes secure user registration and role management using ASP.NET Identity, with client-side/server-side validation and interactive features like AJAX, Toastr, and SweetAlert. The system follows best practices using the Repository Pattern with a Code-First approach. Key focus areas were scalability, security, and user experience.',
    viewCodeUrl: '#',
    viewLiveAppUrl: '#',
    image: 'https://placehold.co/600x400/2E2E3E/FFFFFF?text=Project+6',
    banner: 'https://placehold.co/1200x600/2E2E3E/FFFFFF?text=Project+6+Banner'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl">Projects</h2>
            <p className="mt-4 text-xl text-textSecondary">
                I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
            </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              onClick={() => setSelectedProject(project)}
              className="w-[340px] h-[480px] p-4 rounded-2xl bg-[#1f1f1f] text-white shadow-md hover:shadow-glow-secondary overflow-hidden cursor-pointer transition-all duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map(tag => (
                    <span key={tag} className="bg-primary/50 text-secondary text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-textSecondary mb-2">{project.date}</p>
              <p className="text-base text-textSecondary line-clamp-3">{project.shortDescription}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-tertiary rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-textSecondary hover:text-textPrimary transition-colors z-10"
            >
              <FiX size={24} />
            </button>
            
            <div className="p-0">
                <img src={selectedProject.banner} alt={selectedProject.title} className="w-full h-64 object-cover" />
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-textPrimary mb-2">{selectedProject.title}</h2>
              <p className="text-md text-textSecondary mb-4">{selectedProject.date}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.techStack.map(tech => (
                  <span key={tech} className="bg-primary/50 text-secondary text-sm font-semibold px-3 py-1.5 rounded-full">{tech}</span>
                ))}
              </div>

              <p className="text-textSecondary text-lg leading-relaxed">{selectedProject.fullDescription}</p>

              <div className="mt-8 flex gap-4">
                <a href={selectedProject.viewCodeUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  View Code
                </a>
                <a href={selectedProject.viewLiveAppUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  View Live App
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects; 