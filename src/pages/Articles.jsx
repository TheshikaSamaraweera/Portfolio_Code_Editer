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
                description: "Now in Part 3, we’re learning frameworks complete systems that combine everything. Think of frameworks as the difference between knowing how to dribble a basketball vs. knowing complete plays that win games!...",
                date: "2025-01-10",
                readTime: "10 min",
                category: "AI/ML",
                image: "../public/pframwork.png",
                link: "https://medium.com/@theshikanavod/prompt-engineering-frameworks-complete-systems-for-pro-level-ai-23d33c880e6a"
            },
            {
                title: "Prompt Patterns: Your Toolkit for Smarter AI Conversations",
                description: "Now it’s time to level up! Today, we’re learning prompt patterns and ready to use techniques that solve specific problems. Think of them as recipes in a cookbook. Once you know these patterns, you’ll never struggle with AI conversations again....",
                date: "2025-01-05",
                readTime: "8 min",
                category: "AI/ML",
                image: "../public/ppatterns.png",
                link: "https://medium.com/@theshikanavod/prompt-patterns-your-toolkit-for-smarter-ai-conversations-bab0b285c67c"
            },
            {
                title: "Prompt Engineering for Beginners. The Art of Talking to AI Like a Pro",
                description: "Ever felt like you’re speaking a foreign language to ChatGPT? You ask for help writing an email and get a robotic response that sounds nothing like you. You request a creative story and receive something so generic it could have been written by a committee. You’re not alone. Most people treat AI like a search engine, typing basic questions and hoping for magic....",
                date: "2025-01-02",
                readTime: "12 min",
                category: "AI/ML",
                image: "../public/pbiginers.png",
                link: "https://medium.com/@theshikanavod/prompt-engineering-for-beginners-the-art-of-talking-to-ai-like-a-pro-bb85306b7b05"
            },
            {
                title: "Full Roadmap to Mastering AI Agents",
                description: "Comprehensive roadmap to mastering AI agent systems...",
                date: "2024-11-25",
                readTime: "12 min",
                category: "AI/ML",
                image: "../public/rdmap.png",
                link: "https://medium.com/@theshikanavod/full-roadmap-to-mastering-ai-agents-c59f71f56529"
            }
        ],
        "Backend": [
            {
                title: "7 Types of APIs You Must Know in 2025",
                description: "Ever wondered how your favorite apps talk to each other? When you order food, check the weather, or video call a friend, APIs are working behind the scenes making it all happen. Let’s break down the most important types of APIs in the simplest way possible....",
                date: "2024-12-28",
                readTime: "9 min",
                category: "Backend",
                image: "../public/api.png",
                link: "https://medium.com/@theshikanavod/7-types-of-apis-you-must-know-in-2025-f9e1cadfae58"
            }
        ],
        "Web": [
            {
                title: "Part 7: Pagination, Sorting, and Filtering — Spring Boot + React CRUD Series",
                description: "Welcome back to our Spring Boot journey! In Parts 1–6, we built a secure, validated CRUD application. But there’s a major problem waiting to happen. What occurs when your database grows to thousands or millions of records?...",
                date: "2024-12-25",
                readTime: "15 min",
                category: "Web",
                image: "../public/sp1 (6).png",
                link: "https://medium.com/@theshikanavod/part-7-pagination-sorting-and-filtering-from-zero-to-hero-building-a-full-stack-crud-050a7cf4d8ac"
            },
            {
                title: "Part 6: Validation — Spring Boot + React CRUD Series",
                description: "Welcome back to our Spring Boot journey! In Part 5, we learned how to handle errors gracefully when things go wrong. But what if we could prevent many of these errors from happening in the first place?...",
                date: "2024-12-20",
                readTime: "12 min",
                category: "Web",
                image: "../public/sp1 (6).png",
                link: "https://medium.com/@theshikanavod/part-6-validation-from-zero-to-hero-building-a-full-stack-crud-application-using-java-spring-15d5ef508339"
            },
            {
                title: "Part 5: Exception Handling — Spring Boot + React CRUD Series",
                description: "Welcome back to our Spring Boot journey! In Parts 1–4, we developed a comprehensive CRUD application with security features. But there’s still one crucial piece missing: What happens when things go wrong?..",
                date: "2024-12-18",
                readTime: "10 min",
                category: "Web",
                image: "../public/sp1 (5).png",
                link: "https://medium.com/@theshikanavod/part-5-exception-handling-from-zero-to-hero-building-a-full-stack-crud-application-using-java-604f90429ad6"
            },
            {
                title: "Part 4: Securing Your Application using Spring Security and JWT — CRUD Series",
                description: "Welcome back to our Spring Boot journey! In Parts 1–3, we built a complete CRUD application for managing todos, users, and notifications. Now we have a functional app, but there’s a serious problem we need to fix...",
                date: "2024-12-15",
                readTime: "14 min",
                category: "web",
                image: "../public/sp1 (4).png",
                link: "https://medium.com/@theshikanavod/part-4-securing-your-application-using-spring-security-and-jwt-from-zero-to-hero-building-a-37af0416bec2"
            },
            {
                title: "Part 3: Building a Simple To-do CRUD Application — CRUD Series",
                description: "Now it’s time to get our hands dirty and build a real To-do application. By the end of this article, you’ll have a working CRUD application that can create, read, update, and delete to-do items, as well as manage users and notifications...",
                date: "2024-12-12",
                readTime: "10 min",
                category: "Web",
                image: "../public/sp1 (3).png",
                link: "https://medium.com/@theshikanavod/from-zero-to-hero-building-a-full-stack-crud-application-using-java-spring-boot-and-react-part-4e6a9c06a743"
            },
            {
                title: "Part 2: Building a Simple To-do CRUD Application — CRUD Series",
                description: "Today, we’re moving from theory to practice. You’ll bootstrap a professional Spring Boot project, understand build tools, configure databases, and have a running application by the end. No more “it works on my machine” problems...",
                date: "2024-12-10",
                readTime: "9 min",
                category: "Web",
                image: "../public/sp1 (2).png",
                link: "https://medium.com/@theshikanavod/from-zero-to-hero-building-a-full-stack-crud-application-using-java-spring-boot-and-react-part-9568c409a10d"
            },
            {
                title: "Part 1: Understand the Core — CRUD Series",
                description: "These days, creating a simple web application might seem easy with AI technologies that can develop complete applications from a single query. While this helps experienced developers, what if you are a beginner?...",
                date: "2024-12-05",
                readTime: "8 min",
                category: "Web",
                image: "../public/sp1 (1).png",
                link: "https://medium.com/@theshikanavod/from-zero-to-hero-building-a-full-stack-crud-application-using-java-spring-boot-and-react-part-1-42b4682fd320"
            }
        ],
        "Security": [

            {
                title: "OAuth 2.0 for Beginners",
                description: "OAuth 2.0 (Open Authorization) is an authorization framework that allows applications to obtain limited access to user accounts on an HTTP service like Google, Facebook, or GitHub, without exposing the user’s credentials. It works by delegating user authentication to the service that hosts the user account, and authorizing third-party applications to access the user’s account...",
                date: "2024-11-28",
                readTime: "10 min",
                category: "Security",
                image: "../public/oauth.png",
                link: "https://medium.com/@theshikanavod/oauth-2-0-for-beginners-the-real-engine-behind-secure-logins-third-party-access-2dd7dbec7c23"
            },
            {
                title: "JWT for Beginners",
                description: "Ever wondered how apps like Facebook, Google, or Instagram remember who you are even after refreshing the page?Welcome to the world of JWT — the secret sauce behind modern web authentication and API security. Whether you’re building a secure login for your web app or scaling your microservices, understanding JWT is essential....",
                date: "2024-11-20",
                readTime: "9 min",
                category: "Security",
                image: "../public/jwt.png",
                link: "https://medium.com/@theshikanavod/jwt-for-beginners-the-secret-behind-web-authentication-and-api-security-d42c1d951336"
            }
        ],
        "Git": [
            {
                title: "Mastering Git: A Beginner’s Guide to Version Control",
                description: "මොනවද මේ Git කියන්නේ? ඇයි software industry එකේ ඉන්න අය මේක use කරන්නේ.Git කියන්නෙ Distributed Version Control System (DVCS) එකක්.ඔබේ code එකේ වෙනස්කම් track කිරීම, version එකක් මත revert වීම, හා එකම project එකේ කණ්ඩායමක් ලෙස වැඩ කිරීම සඳහා Git ඉතා වැදගත් වේ.ඒක අපි මේ විදිහට තේරුම් ගමු....",
                date: "2024-11-15",
                readTime: "8 min",
                category: "Git",
                image: "../public/git.webp",
                link: "https://medium.com/@theshikanavod/mastering-git-a-beginners-guide-to-version-control-and-efficient-collaboration-80ca32091ab6"
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
