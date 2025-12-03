import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaStar } from 'react-icons/fa';

const TimelineItem = ({ year, title, description, icon: Icon, color, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`flex items-center justify-between w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
    >
        <div className="w-5/12" />

        <div className="z-20 flex items-center order-1 bg-[#1e1e1e] shadow-xl w-8 h-8 rounded-full border-2 border-[#007acc]">
            <div className="mx-auto w-3 h-3 bg-[#007acc] rounded-full" />
        </div>

        <div className="w-5/12 order-1">
            <div className="bg-[#252526]/60 backdrop-blur-sm border border-[#2b2b2c] p-6 rounded-xl hover:border-[#007acc] transition-all group">
                <div className="flex items-center gap-3 mb-2">
                    <Icon className={`${color} text-xl`} />
                    <span className="text-[#007acc] font-mono text-sm">{year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#007acc] transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    </motion.div>
);

const Achievements = () => {
    const achievements = [
        {
            year: "Oct 2024",
            title: "Hackathon Winner",
            description: "First place in the National Coding Championship 2024. Built an AI-powered accessibility tool.",
            icon: FaTrophy,
            color: "text-yellow-500"
        },
        {
            year: "Aug 2024",
            title: "AWS Certified Solutions Architect",
            description: "Achieved professional certification for designing distributed systems on AWS.",
            icon: FaCertificate,
            color: "text-blue-500"
        },
        {
            year: "2023",
            title: "Open Source Contributor",
            description: "Major contributor to React ecosystem libraries with over 500+ commits.",
            icon: FaStar,
            color: "text-green-500"
        },
        {
            year: "June 2023",
            title: "Best UI/UX Design",
            description: "Awarded for the most innovative interface design in the WebDev Summit.",
            icon: FaMedal,
            color: "text-purple-500"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-8 relative">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Journey & Achievements</h1>
                <p className="text-gray-400">A timeline of my professional milestones.</p>
            </motion.div>

            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#2b2b2c] top-0 z-0" />

            <div className="relative z-10">
                {achievements.map((item, index) => (
                    <TimelineItem
                        key={index}
                        {...item}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Achievements;
