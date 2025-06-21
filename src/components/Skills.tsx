import * as React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDocker, FaAndroid, FaJava,
} from 'react-icons/fa'
import { SiRedux, SiNextdotjs, SiTypescript, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiFlutter, SiNetlify, SiVercel, SiRender, SiPostman, SiFigma, SiWordpress } from 'react-icons/si'

const skillsData = [
  {
    title: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    items: [
      { name: 'React Js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
      { name: 'Next Js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-400 to-emerald-600',
    items: [
      { name: 'Node Js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express Js', icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    title: 'Others',
    color: 'from-pink-400 to-purple-500',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-green-400" /> },
      { name: 'VS Code', icon: <span className="text-blue-500 font-bold">VS</span> },
      { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
      { name: 'Render', icon: <SiRender className="text-blue-400" /> },
      { name: 'Wordpress', icon: <SiWordpress className="text-blue-700" /> },
    ],
  },
  {
    title: 'Android',
    color: 'from-yellow-400 to-orange-500',
    items: [
      { name: 'Java', icon: <FaJava className="text-orange-700" /> },
      { name: 'XML', icon: <span className="text-blue-400 font-bold">XML</span> },
      { name: 'Android Studio', icon: <FaAndroid className="text-green-500" /> },
      { name: 'Flutter', icon: <SiFlutter className="text-blue-400" /> },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-tertiary/60">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-secondary">Skills</h2>
        <p className="text-center text-textSecondary mb-10 max-w-2xl mx-auto">
          These are the technologies I've been working with over the past 2 years.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((group) => (
            <div
              key={group.title}
              className={`rounded-2xl shadow-xl border-2 border-secondary bg-primary/80 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-[3px] hover:border-secondary/80 hover:scale-105 mx-auto w-full max-w-md`}
              style={{ boxShadow: '0 0 16px 0 rgba(100,255,218,0.2)' }}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 px-3 py-1 rounded-lg border border-secondary bg-tertiary text-textPrimary text-sm font-medium shadow hover:bg-secondary hover:text-primary transition-all duration-200 cursor-pointer"
                  >
                    {item.icon}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 