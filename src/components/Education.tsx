import * as React from 'react';
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    logo: <FaUniversity className="text-4xl text-cyan-400" />,
    institute: 'Bharati Vidyapeeth College of Engineering',
    degree: 'BTech in Computer Engineering',
    duration: 'Aug 2024 – Aug 2027',
    grade: '90%',
    description:
      'I am currently pursuing a BTech in Computer Engineering at Bharati Vidyapeeth College of Engineering, Mumbai. I have completed 4 semesters and have an average percentage of 90%. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.',
  },
  {
    logo: <FaGraduationCap className="text-4xl text-cyan-400" />,
    institute: 'Government Polytechnic, Mumbai',
    degree: 'Diploma in Computer Engineering',
    duration: 'Aug 2021 – Aug 2024',
    grade: '88%',
    description:
      'I have completed my Diploma in Computer Engineering at Government Polytechnic, Mumbai. I have an average percentage of 88%. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.',
  },
  {
    logo: <FaSchool className="text-4xl text-cyan-400" />,
    institute: 'Sahyadri Vidya Mandir',
    degree: 'SSC (X)',
    duration: 'June 2015 – May 2021',
    grade: '95.40%',
    description:
      'I completed my class 10 education at Sahyadri Vidya Mandir, Mumbai.',
  },
];

const Education = () => (
  <section id="education" className="py-20 bg-tertiary/80">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Education</h2>
      <p className="text-center text-textSecondary mb-10 max-w-2xl mx-auto">
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </p>
      <div className="flex flex-col gap-8">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center rounded-2xl border-2 border-cyan-400/80 bg-primary/95 shadow-2xl p-6 md:p-8 gap-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300 hover:shadow-[0_0_40px_8px_rgba(0,255,255,0.25)] max-w-2xl mx-auto w-full"
            style={{ boxShadow: '0 0 32px 0 rgba(0,255,255,0.18)' }}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-tertiary rounded-xl mr-4 border-2 border-cyan-400/40">
              {edu.logo}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-xl md:text-2xl text-secondary mb-1 truncate">{edu.institute}</div>
              <div className="text-base text-textSecondary font-semibold mb-1">{edu.degree}</div>
              <div className="text-sm text-cyan-300 mb-1">{edu.duration}</div>
              <div className="text-sm text-cyan-200 mb-2 font-semibold">Grade: {edu.grade}</div>
              <div className="text-sm text-textSecondary leading-relaxed line-clamp-3">{edu.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 