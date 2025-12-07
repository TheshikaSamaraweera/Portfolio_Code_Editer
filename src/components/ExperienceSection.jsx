import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaDownload, FaCog, FaCheckCircle } from 'react-icons/fa';

// Color palette for tech tags
const tagColors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-yellow-600",
    "bg-red-600",
    "bg-indigo-600",
    "bg-teal-600",
];

const ExperienceCard = ({ company, role, duration, description, downloads, rating, installed, index, logo, tech }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-6 hover:border-[#007acc] transition-all"
        >
            <div className="flex items-start gap-4">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg flex items-center justify-center text-2xl font-bold text-[#007acc]">
                        {logo}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">

                    {/* Header */}
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <span className="font-mono">{company}</span>
                                <span className="text-gray-600">•</span>
                                <span className="font-mono">{duration}</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`text-sm ${i < rating ? 'text-yellow-500' : 'text-gray-600'}`}
                                />
                            ))}
                            <span className="text-xs text-gray-400 ml-1">({rating}.0)</span>
                        </div>

                        {/* <div className="flex items-center gap-1 text-xs text-gray-400">
                            <FaDownload className="text-[10px]" />
                            <span>{downloads}</span>
                        </div> */}

                        {installed && (
                            <div className="flex items-center gap-1 text-xs text-green-400">
                                <FaCheckCircle />
                                <span>Completed</span>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {description}
                    </p>

                    {/* Tech Stack Section */}
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-[#007acc] mb-2">// Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {tech.map((item, i) => (
                                <span
                                    key={i}
                                    className={`text-xs px-3 py-1 rounded-full text-white ${tagColors[i % tagColors.length]}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        {installed ? (
                            <>
                                <button className="px-4 py-2 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#3c3c3c] text-white rounded text-sm font-medium transition-all flex items-center gap-2">
                                    <FaCog /> Manage
                                </button>
                                <button className="px-4 py-2 bg-transparent hover:bg-[#2a2a2a] border border-[#3c3c3c] text-gray-400 hover:text-white rounded text-sm font-medium transition-all">
                                    Disable
                                </button>
                            </>
                        ) : (
                            <button className="px-4 py-2 bg-[#007acc] hover:bg-[#005a9e] text-white rounded text-sm font-medium transition-all">
                                Install
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

const ExperienceSection = () => {
    const experiences = [
        {
            company: 'Applantics (Pvt) Ltd',
            role: 'Associate Software Engineer',
            duration: 'Feb 2025 – Present',
            description:
                'Developing enterprise POS system with microservices for real-time transactions, inventory management, and payment integrations. Building AI-powered RAG chatbots using LangChain and vector databases. Developing analytics dashboards with React + WebSockets. Deploying on Docker + AWS.',
            downloads: '20K+ impact',
            rating: 5,
            installed: true,
            logo: 'AP',
            tech: [
                'Java', 'Spring Boot', 'JavaScript', 'React', 'Python', 'MySQL',
                'MongoDB', 'LangChain', 'AI Agents', 'RAG', 'Docker', 'AWS'
            ]
        },
        {
            company: 'Information Systems Associates (ISA)',
            role: 'Intern Software Engineer',
            duration: 'Jul 2024 – Jan 2025',
            description:
                'Developed microservices for Air Arabia aviation systems using Spring Boot & Angular. Refactored 200+ critical issues, increased test coverage to 80%. Migrated REST to gRPC reducing latency by 40%. Built real-time boarding pass and event streaming features. Worked in Agile with Jira/Confluence.',
            downloads: '10K+ contributions',
            rating: 5,
            installed: true,
            logo: 'ISA',
            tech: [
                'Java 8/11/17', 'Spring Boot', 'Angular', 'React', 'PostgreSQL',
                 'Redis', 'Kafka', 'gRPC', 'Docker', 'Jenkins', 'JUnit',
                'Mockito', 'SonarQube'
            ]
        }
    ];

    return (
        <div className="mt-8">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
            >
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-[#007acc]">//</span>
                    Professional Experience
                </h2>
                <p className="text-gray-400 text-sm font-mono">
                    Hands-on industry experience building scalable, production-ready systems
                </p>
            </motion.div>

            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} index={index} />
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
