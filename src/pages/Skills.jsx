import React from 'react';
import { motion } from 'framer-motion';
import { SiGooglecloud } from "react-icons/si";




// Icons
import {
    FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaFigma,
    FaHtml5, FaCss3Alt, FaJs, FaNetworkWired, FaStar,
    FaJava,FaDatabase
} from 'react-icons/fa';

import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql,
    SiGraphql, SiRedux, SiLinux, SiKubernetes, SiJenkins,
    SiMysql, SiFastapi, SiNestjs, SiRedis, SiNeo4J,SiRabbitmq,SiAngular, SiSpringboot, SiHuggingface ,SiLangchain
} from 'react-icons/si';

import { BiLogoSpringBoot,  } from "react-icons/bi";


// Fallback icon
const DefaultIcon = FaStar;

const SkillCard = ({ name, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay }}
        whileHover={{ y: -5, scale: 1.05 }}
        className="bg-[#252526]/80 backdrop-blur-sm border border-[#2b2b2c] p-6 rounded-xl 
                   flex flex-col items-center justify-center gap-4 
                   hover:border-[#007acc] hover:shadow-lg transition-all group cursor-default"
    >
        <div className={`text-5xl ${color} group-hover:scale-110 transition-transform duration-300`}>
            <Icon />
        </div>
        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{name}</span>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [




        // --------------------- Programming Languages ---------------------


         {
            title: "Programming Languages",
            skills: [
                { name: "Python", icon: FaPython, color: "text-[#3776ab]" },
                { name: "Java", icon: FaJava, color: "text-[#f44336]" },
                { name: "TypeScript", icon: SiTypescript, color: "text-[#3178c6]" },
                { name: "JavaScript", icon: FaJs, color: "text-[#f7df1e]" },
            ],
        },

        // --------------------- Backend ---------------------
        {
            title: "Backend Development",
            skills: [
                { name: "Spring Boot", icon: BiLogoSpringBoot, color: "text-[#6db33f]" },
                { name: "Spring Cloud", icon: SiSpringboot , color: "text-[#6db33f]" },
                { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
                { name: "NestJS", icon: SiNestjs, color: "text-[#e0234e]" },
                { name: "FastAPI", icon: SiFastapi, color: "text-[#00c07b]" },

                { name: "RabbitMQ", icon: SiRabbitmq, color: "text-[#ff6600]" },
                { name: "JUnit", icon: DefaultIcon, color: "text-[#4caf50]" },
                { name: "Unit Testing", icon: DefaultIcon, color: "text-[#4caf50]" },
            ],
        },

        // --------------------- Frontend ---------------------
        {
            title: "Frontend Development",
            skills: [
                { name: "React", icon: FaReact, color: "text-[#61dafb]" },
                { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
                { name: "Angular", icon: SiAngular, color: "text-[#dd0031]" },
                { name: "HTML5", icon: FaHtml5, color: "text-[#e34f26]" },
                { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572b6]" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06b6d4]" },
            ],
        },
        // --------------------- AI / ML ---------------------
        {
            title: "AI / Machine Learning",
            skills: [
                { name: "LangChain", icon: SiLangchain , color: "text-[#00e676]" },
                { name: "LangGraph", icon: SiLangchain , color: "text-[#00e676]" },
                { name: "AutoGen", icon: DefaultIcon, color: "text-[#00e676]" },
                { name: "CrewAI", icon: DefaultIcon, color: "text-[#00e676]" },
                { name: "RAG Architecture", icon: DefaultIcon, color: "text-[#00e676]" },
                { name: "Vector Databases", icon: FaDatabase , color: "text-[#00e676]" },
                { name: "Multi-Agent Systems", icon: DefaultIcon, color: "text-[#00e676]" },
                { name: "HuggingFace", icon: SiHuggingface  , color: "text-[#ffde59]" },
                { name: "Deep Learning", icon: DefaultIcon, color: "text-[#ff4081]" },
                { name: "Computer Vision", icon: DefaultIcon, color: "text-[#00bcd4]" },
                { name: "Fine-Tuning", icon: DefaultIcon, color: "text-[#ff9800]" },
                { name: "MLOps", icon: DefaultIcon, color: "text-[#cddc39]" },
            ],
        },


       

        // --------------------- Databases ---------------------
        {
            title: "Databases",
            skills: [
                { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169e1]" },
                { name: "MySQL", icon: SiMysql, color: "text-[#00758f]" },
                { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
                { name: "Redis", icon: SiRedis, color: "text-[#dc382d]" },
                { name: "Neo4j", icon: SiNeo4J, color: "text-[#008cc1]" },
                { name: "Pinecone", icon: DefaultIcon, color: "text-[#00bcd4]" },
            ],
        },

        // --------------------- DevOps ---------------------
        {
            title: "DevOps & Cloud",
            skills: [
                { name: "Docker", icon: FaDocker, color: "text-[#2496ed]" },
                { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326ce5]" },
                { name: "Jenkins", icon: SiJenkins, color: "text-[#d33833]" },
                { name: "AWS", icon: FaAws, color: "text-[#ff9900]" },
                { name: "CI/CD", icon: DefaultIcon, color: "text-[#4caf50]" },
            ],
        },

        // --------------------- Architecture ---------------------
    {
    title: "Architecture",
    skills: [
        { name: "Microservices", icon: FaNetworkWired, color: "text-purple-400" },
        { name: "REST APIs", icon: FaNetworkWired, color: "text-blue-400" },
        { name: "gRPC", icon: FaNetworkWired, color: "text-green-400" },
        { name: "Event-Driven", icon: FaNetworkWired, color: "text-orange-400" },
        { name: "SSE", icon: FaNetworkWired, color: "text-yellow-400" },
    ],
}
,
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
                    A complete collection of technologies, frameworks, and tools I use to build production-ready systems.
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
