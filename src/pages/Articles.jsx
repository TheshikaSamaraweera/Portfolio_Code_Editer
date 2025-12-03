import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscFolder, VscFolderOpened, VscFile, VscChevronRight, VscChevronDown, VscMarkdown } from 'react-icons/vsc';

const ArticleItem = ({ article, onSelect }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 py-1 px-4 hover:bg-[#2a2d2e] cursor-pointer text-gray-300 hover:text-white group transition-colors"
        onClick={() => onSelect(article)}
    >
        <VscMarkdown className="text-[#519aba] flex-shrink-0" />
        <span className="truncate text-sm">{article.title}.md</span>
        <span className="ml-auto text-xs text-gray-500 opacity-0 group-hover:opacity-100">{article.date}</span>
    </motion.div>
);

const Folder = ({ name, articles, onSelectArticle, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="mb-1">
            <div
                className="flex items-center gap-1 py-1 px-2 hover:bg-[#2a2d2e] cursor-pointer text-gray-300 select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <VscChevronDown className="text-gray-500" /> : <VscChevronRight className="text-gray-500" />}
                {isOpen ? <VscFolderOpened className="text-[#dcb67a]" /> : <VscFolder className="text-[#dcb67a]" />}
                <span className="font-semibold text-sm">{name}</span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4 border-l border-[#333]"
                    >
                        {articles.map((article, index) => (
                            <ArticleItem key={index} article={article} onSelect={onSelectArticle} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ArticleViewer = ({ article }) => {
    if (!article) return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <VscMarkdown size={64} className="mb-4 opacity-20" />
            <p>Select an article to read</p>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={article.title}
            className="max-w-3xl mx-auto"
        >
            <div className="mb-8 border-b border-[#2b2b2c] pb-8">
                <h1 className="text-3xl font-bold text-white mb-4">{article.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} read</span>
                    <span>•</span>
                    <span className="text-[#007acc]">{article.category}</span>
                </div>
            </div>

            <div className="prose prose-invert max-w-none">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover rounded-lg mb-8 border border-[#2b2b2c]"
                />
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {article.description}
                </p>

                <div className="bg-[#252526] p-4 rounded border border-[#2b2b2c] mb-8 font-mono text-sm text-gray-400">
                    {`// Full article content would go here...`}
                </div>

                <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#007acc] hover:bg-[#005a9e] text-white px-6 py-3 rounded transition-colors font-medium"
                >
                    Read on Medium
                    <VscChevronRight />
                </a>
            </div>
        </motion.div>
    );
};

const Articles = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const articles = {
        "Web Development": [
            {
                title: "Understanding React Server Components",
                description: "A deep dive into the architecture of React Server Components and how they change the way we build web applications.",
                date: "Nov 15, 2024",
                readTime: "5 min",
                category: "React",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
                link: "#"
            },
            {
                title: "Mastering Tailwind CSS",
                description: "Best practices and advanced techniques for building scalable design systems with Tailwind CSS.",
                date: "Oct 28, 2024",
                readTime: "8 min",
                category: "CSS",
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
                link: "#"
            }
        ],
        "System Design": [
            {
                title: "Microservices vs Monolith",
                description: "When to choose microservices architecture and when to stick with a monolithic approach.",
                date: "Sep 10, 2024",
                readTime: "12 min",
                category: "Architecture",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
                link: "#"
            }
        ],
        "Career": [
            {
                title: "Ace Your Coding Interview",
                description: "Tips and strategies for cracking technical interviews at top tech companies.",
                date: "Aug 05, 2024",
                readTime: "6 min",
                category: "Career",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
                link: "#"
            }
        ]
    };

    return (
        <div className="flex h-full">
            {/* Sidebar / Explorer */}
            <div className="w-64 border-r border-[#2b2b2c] bg-[#1e1e1e] flex flex-col">
                <div className="p-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Explorer: Articles
                </div>
                <div className="flex-1 overflow-y-auto">
                    {Object.entries(articles).map(([category, items], index) => (
                        <Folder
                            key={category}
                            name={category}
                            articles={items}
                            onSelectArticle={setSelectedArticle}
                            defaultOpen={index === 0}
                        />
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 bg-[#1e1e1e]">
                <ArticleViewer article={selectedArticle} />
            </div>
        </div>
    );
};

export default Articles;
