import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, image, links, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-[#252526] rounded-xl overflow-hidden border border-[#2b2b2c] hover:border-[#007acc] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
        {/* Image Overlay */}
        <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors z-10" />
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <a href={links.github} className="p-2 bg-[#1e1e1e] rounded-full hover:bg-[#007acc] text-white transition-colors">
                    <FaGithub size={18} />
                </a>
                <a href={links.demo} className="p-2 bg-[#1e1e1e] rounded-full hover:bg-[#007acc] text-white transition-colors">
                    <FaExternalLinkAlt size={18} />
                </a>
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#007acc] transition-colors">
                {title}
            </h3>
            <p className="text-gray-400 mb-4 line-clamp-3">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="text-xs font-mono px-2 py-1 rounded bg-[#1e1e1e] text-[#007acc] border border-[#007acc]/30"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with cart, checkout, and admin dashboard. Built with Next.js and Stripe.",
            tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
            links: { github: "#", demo: "#" }
        },
        {
            title: "AI Chat Application",
            description: "Real-time chat application powered by OpenAI GPT-4. Features include voice input and code highlighting.",
            tags: ["React", "Node.js", "Socket.io", "OpenAI"],
            image: "https://images.unsplash.com/photo-1587560699334-cc4da63c2409?w=800&q=80",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Task Management Tool",
            description: "Kanban-style task manager with drag-and-drop interface and team collaboration features.",
            tags: ["Vue.js", "Firebase", "Pinia"],
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
            links: { github: "#", demo: "#" }
        },
        {
            title: "Portfolio Website",
            description: "Modern portfolio website with VS Code theme, animations, and interactive elements.",
            tags: ["React", "Framer Motion", "Tailwind"],
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
            links: { github: "#", demo: "#" }
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                    <FaCode className="text-[#007acc]" />
                    Featured Projects
                </h1>
                <p className="text-gray-400 text-lg">
                    A showcase of my best work in web development and software engineering.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
