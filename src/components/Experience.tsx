import * as React from 'react';
import { FaBuilding, FaUserTie, FaCalendarAlt, FaCertificate } from 'react-icons/fa';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Talent Corner HR Services',
    duration: 'January 2024 – July 2024',
    description: [
      'Designed a centralized intranet to enhance internal communication and collaboration.',
      'Integrated tools like JotForm, Power BI, Looker Studio, Pabbly, and Candelyy.',
      'Implemented secure third-party authentication for controlled access.',
      'Improved user experience and streamlined internal workflows across departments.'
    ],
    skills: [
      'JavaScript',
      'Google Apps Script',
      'Google Sites',
      'JotForm Integration',
      'Power BI & Looker Studio',
      'Pabbly & Candelyy',
      'Third-Party Authentication',
      'Workflow Automation',
      'UI/UX Design',
      'Internal Tool Integration'
    ],
    certificate: 'https://drive.google.com/file/d/1fYNqiy0pN8lSR7NoYO8QwrVujNfjjru7/view?usp=sharing',
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-tertiary/80">
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-secondary">Industry Experience</h2>
      <div className="flex flex-col items-center w-full">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative rounded-3xl border-4 border-cyan-400/80 bg-gradient-to-br from-primary/90 to-tertiary/80 shadow-2xl p-8 md:p-10 flex flex-col gap-5 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_0_40px_8px_rgba(0,255,255,0.25)] mx-auto w-full max-w-2xl"
            style={{ boxShadow: '0 0 32px 0 rgba(0,255,255,0.18)' }}
          >
            <div className="flex items-center gap-4 mb-2">
              <FaUserTie className="text-cyan-400 text-3xl" />
              <span className="text-2xl font-bold text-textPrimary">{exp.role}</span>
            </div>
            <div className="flex items-center gap-3 text-cyan-200 font-semibold mb-1">
              <FaBuilding className="text-cyan-300 text-lg" />
              <span>{exp.company}</span>
            </div>
            <div className="flex items-center gap-2 text-base text-cyan-300 font-semibold mb-3">
              <FaCalendarAlt />
              <span>{exp.duration}</span>
            </div>
            <ul className="list-disc list-inside text-textSecondary mb-2 pl-2 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-base">{desc}</li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-cyan-900/60 border border-cyan-400/40 text-cyan-100 px-3 py-1 rounded-lg text-sm font-medium shadow hover:bg-cyan-700/80 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={exp.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border-2 border-cyan-400 text-cyan-100 font-semibold shadow-md transition-all duration-200 hover:bg-cyan-400 hover:text-primary hover:scale-105 hover:shadow-lg focus:outline-none"
            >
              <FaCertificate /> View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 