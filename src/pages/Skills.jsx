import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiGraphql, SiRedux, SiLinux
} from 'react-icons/si';

const SkillCard = ({ name, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay }}
        whileHover={{ y: -5, scale: 1.05 }}
        className="bg-[#252526]/80 backdrop-blur-sm border border-[#2b2b2c] p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-[#007acc] hover:shadow-lg transition-all group cursor-default"
    >
        <div className={`text-5xl ${color} group-hover:scale-110 transition-transform duration-300`}>
            <Icon />
        </div>
        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{name}</span>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: FaReact, color: "text-[#61dafb]" },
                { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
                { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
                { name: "JavaScript", icon: FaJs, color: "text-[#f7df1e]" },
                { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06b6d4]" },
                { name: "HTML5", icon: FaHtml5, color: "text-[#e34f26]" },
                { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572b6]" },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
                { name: "Python", icon: FaPython, color: "text-[#3776ab]" },
                { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169e1]" },
                { name: "GraphQL", icon: SiGraphql, color: "text-[#e10098]" },
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "Docker", icon: FaDocker, color: "text-[#2496ed]" },
                { name: "AWS", icon: FaAws, color: "text-[#ff9900]" },
                { name: "Git", icon: FaGitAlt, color: "text-[#f05032]" },
                { name: "Linux", icon: SiLinux, color: "text-[#fcc624]" },
                { name: "Figma", icon: FaFigma, color: "text-[#f24e1e]" },
                { name: "Redux", icon: SiRedux, color: "text-[#764abc]" },
            ]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto p-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Tech Stack</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Technologies and tools I work with to build high-quality software.
                </p>
            </motion.div>

            <div className="space-y-12">
                {skillCategories.map((category, catIndex) => (
                    <div key={category.title}>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white mb-6 border-l-4 border-[#007acc] pl-4"
                        >
                            {category.title}
                        </motion.h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {category.skills.map((skill, index) => (
                                <SkillCard
                                    key={index}
                                    {...skill}
                                    delay={(catIndex * 0.2) + (index * 0.05)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
