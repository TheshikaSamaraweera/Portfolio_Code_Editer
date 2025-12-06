import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaDownload, FaCog, FaCheckCircle } from 'react-icons/fa';

const ExperienceCard = ({ company, role, duration, description, downloads, rating, installed, index, logo }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-6 hover:border-[#007acc] transition-all"
        >
            <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg flex items-center justify-center text-2xl font-bold text-[#007acc]">
                        {logo}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
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

                    {/* Rating and Stats */}
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
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                            <FaDownload className="text-[10px]" />
                            <span>{downloads}</span>
                        </div>
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

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        {installed ? (
                            <>
                                <button className="px-4 py-2 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-[#3c3c3c] text-white rounded text-sm font-medium transition-all flex items-center gap-2">
                                    <FaCog />
                                    Manage
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
            company: 'Applanters (Pvt) Ltd',
            role: 'Associate Software Engineer',
            duration: '2023 - Present',
            description: 'Developing and maintaining scalable web applications using modern JavaScript frameworks. Collaborating with cross-functional teams to deliver high-quality software solutions. Implementing best practices in code quality, testing, and deployment.',
            downloads: '10K+ projects',
            rating: 5,
            installed: true,
            logo: 'AP',
        },
        {
            company: 'ISA (Pvt) Ltd',
            role: 'Software Engineering Intern',
            duration: '2022 - 2023',
            description: 'Gained hands-on experience in full-stack development. Contributed to various projects involving React, Node.js, and database management. Learned agile methodologies and professional software development practices.',
            downloads: '5K+ contributions',
            rating: 4,
            installed: true,
            logo: 'ISA',
        },
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
                    Building software solutions and gaining expertise
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
