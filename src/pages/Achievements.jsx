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
            year: "2025",
            title: "Rexto 2025 Exhibition – Final Year Project Demonstration",
            description: "Demonstrated final year project at the Rexto 2025 Exhibition held at the University of Ruhuna, Faculty of Engineering.",
            icon: FaTrophy,
            color: "text-yellow-500"
        },
        {
            year: "2025",
            title: "HackerRank – Java (Gold Level)",
            description: "Achieved 5-star rating in Java on HackerRank, showcasing advanced proficiency in Java programming.",
            icon: FaStar,
            color: "text-orange-500"
        },
        {
            year: "2024",
            title: "Haxtreme 2.0 – 4th Place",
            description: "Secured 4th place in the Haxtreme 2.0 hackathon competition.",
            icon: FaTrophy,
            color: "text-yellow-500"
        },

        {
            year: "2024",
            title: "IEEE INSL Competition",
            description: "Participated in the IEEE INSL Competition, gaining valuable experience in innovation and technology.",
            icon: FaMedal,
            color: "text-blue-500"
        },
        {
            year: "2024",
            title: "HackerRank – Problem Solving",
            description: "Earned 2-star (Bronze Level) Problem Solving badge on HackerRank, demonstrating algorithmic and data structure skills.",
            icon: FaStar,
            color: "text-green-500"
        },

        {
            year: "2024",
            title: "HackerRank – 10 Days of JS",
            description: "Completed the 10 Days of JavaScript challenge on HackerRank.",
            icon: FaCertificate,
            color: "text-purple-500"
        },
        {
            year: "2024",
            title: "HackerRank – SQL",
            description: "Earned SQL badge (Bronze Level) on HackerRank, demonstrating database querying proficiency.",
            icon: FaCertificate,
            color: "text-cyan-500"
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
