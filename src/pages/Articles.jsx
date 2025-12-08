import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscFolder, VscFolderOpened, VscMarkdown, VscChevronRight, VscChevronDown } from 'react-icons/vsc';

const ArticleItem = ({ article, onSelect }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 py-1 px-4 hover:bg-[#2a2d2e] cursor-pointer text-gray-300 hover:text-white group transition-colors"
        onClick={() => onSelect(article)}
    >
        <VscMarkdown className="text-[#519aba] flex-shrink-0" />
        <span className="truncate text-sm">{article.title}</span>
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
        "AI/ML": [
            {
                title: "Prompt Engineering Frameworks: Complete Systems for Pro-Level AI",
                description: "Complete frameworks for designing pro-level AI prompt systems.",
                date: "2025-01-10",
                readTime: "10 min",
                category: "AI/ML",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
            {
                title: "Prompt Patterns: Your Toolkit for Smarter AI Conversations",
                description: "Essential patterns for creating efficient AI conversations.",
                date: "2025-01-05",
                readTime: "8 min",
                category: "AI/ML",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
            {
                title: "Prompt Engineering for Beginners. The Art of Talking to AI Like a Pro",
                description: "Beginner’s guide to communicating effectively with AI.",
                date: "2025-01-02",
                readTime: "12 min",
                category: "AI/ML",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
            {
                title: "Full Roadmap to Mastering AI Agents",
                description: "Comprehensive roadmap to mastering AI agent systems.",
                date: "2024-11-25",
                readTime: "12 min",
                category: "AI/ML",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            }
        ],
        "Backend": [
            {
                title: "7 Types of APIs You Must Know in 2025",
                description: "Overview of essential APIs for backend development.",
                date: "2024-12-28",
                readTime: "9 min",
                category: "Backend",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            }
        ],
        "Web": [
            {
                title: "Part 7: Pagination, Sorting, and Filtering — Spring Boot + React CRUD Series",
                description: "Implement pagination, sorting, and filtering in full-stack applications.",
                date: "2024-12-25",
                readTime: "15 min",
                category: "Web",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
            {
                title: "Part 6: Validation — Spring Boot + React CRUD Series",
                description: "Learn validation best practices in CRUD applications.",
                date: "2024-12-20",
                readTime: "12 min",
                category: "Web",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
            {
                title: "Part 5: Exception Handling — Spring Boot + React CRUD Series",
                description: "Exception handling strategies for backend and frontend.",
                date: "2024-12-18",
                readTime: "10 min",
                category: "Web",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
                       {
                title: "Part 4: Securing Your Application using Spring Security and JWT — CRUD Series",
                description: "Secure your apps using Spring Security and JWT.",
                date: "2024-12-15",
                readTime: "14 min",
                category: "web",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
            {
                title: "Part 3: Building a Simple To-do CRUD Application — CRUD Series",
                description: "Step-by-step to build a simple CRUD app.",
                date: "2024-12-12",
                readTime: "10 min",
                category: "Web",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
            {
                title: "Part 2: Building a Simple To-do CRUD Application — CRUD Series",
                description: "Continued series for CRUD app development.",
                date: "2024-12-10",
                readTime: "9 min",
                category: "Web",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
            {
                title: "Part 1: Understand the Core — CRUD Series",
                description: "Understand the fundamentals of full-stack CRUD apps.",
                date: "2024-12-05",
                readTime: "8 min",
                category: "Web",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            }
        ],
        "Security": [
 
            {
                title: "OAuth 2.0 for Beginners",
                description: "Learn OAuth 2.0 for secure logins and third-party access.",
                date: "2024-11-28",
                readTime: "10 min",
                category: "Security",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            },
            {
                title: "JWT for Beginners",
                description: "Beginner’s guide to JWT and API security.",
                date: "2024-11-20",
                readTime: "9 min",
                category: "Security",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            }
        ],
        "Git": [
            {
                title: "Mastering Git: A Beginner’s Guide to Version Control",
                description: "Learn Git version control for efficient collaboration.",
                date: "2024-11-15",
                readTime: "8 min",
                category: "Git",
                image: "https://images.unsplash.com/photo-1581090700227-b8cf00c6710b?w=800&q=80",
                link: "https://medium.com/@theshikanavod"
            }
        ]
    };

    return (
        <div className="flex h-full">
            {/* Sidebar / Explorer */}
            <div className="w-64 border-r border-[#2b2b2c] bg-[#333333] flex flex-col">
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
            <div className="flex-1 overflow-y-auto p-8 bg-[#333333]">
                <ArticleViewer article={selectedArticle} />
            </div>
        </div>
    );
};

export default Articles;
