import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, image, links, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.45, delay: index * 0.06 }}
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
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1e1e1e] rounded-full hover:bg-[#007acc] text-white transition-colors">
            <FaGithub size={18} />
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1e1e1e] rounded-full hover:bg-[#007acc] text-white transition-colors">
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col h-full">
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI/ML',
    'Web',
    'Microservices',
    'DevOps / Cloud',
    'Mobile',
    'Desktop',
    'Scripting'
  ];

  // All projects you provided (kept; no removals). Adjust images/links as needed.
  const projects = [
    {
      title: "AI Code Generator and Reviewer System",
      description: "VS Code extension automating code generation and bug detection for legacy codebases. Multi-agent reviewer system using fine-tuned LLMs detecting security vulnerabilities, code smells and performance issues with human-in-the-loop validation; reduced manual review time by ~60%.",
      tags: ["Python", "TypeScript", "LangGraph", "LLM", "VS Code API", "Fine-tuning"],
      image: "/aiml.png",
      links: { github: "https://github.com/AI-Code-Generator" },
      category: "AI/ML"
    },
    {
      title: "Dataflow RAG-Based Customer Service Agent",
      description: "Enterprise-grade Retrieval-Augmented-Generation system for automated customer support using local AI models and FAISS vector store with optimized chunking and embeddings.",
      tags: ["Python", "LangChain", "FAISS", "RAG", "Embeddings"],
      image: "/aiml.png",
      links: { github: "https://github.com/TheshikaSamaraweera/Real_-World_RAG_System" },
      category: "AI/ML"
    },
    {
      title: "Business Intelligence Multi-Agent Analysis System",
      description: "Automated business analysis using a 3-agent workflow (Data Collector, Analyst, Report Writer) to detect sales trends and generate actionable recommendations.",
      tags: ["Python", "CrewAI", "OpenAI", "Data Analysis"],
      image: "/aiml.png",
      links: { github: "https://github.com/TheshikaSamaraweera/Business-analysis-multi-agent-system" },
      category: "AI/ML"
    },
    {
      title: "Multi-Agent Customer Support System (Support Flow)",
      description: "Multi-agent ticket triage and response system implementing sequential and parallel workflows to handle complex multi-issue tickets. Deployed locally for privacy (no external API dependencies).",
      tags: ["Python", "Microsoft AutoGen", "Ollama", "Multi-Agent"],
      image: "/aiml.png",
      links: { github: "https://github.com/TheshikaSamaraweera/SupportFlow-Customer-Support-Hub" },
      category: "AI/ML"
    },
    {
      title: "Sinhala Sign Language Learning Management System",
      description: "AI-powered LMS for Sinhala Sign Language learners. Real-time hand-gesture recognition using MediaPipe and deep learning; achieved ~87% accuracy.",
      tags: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "NLP"],
      image: "/aiml.png",
      links: { github: "https://github.com/TheshikaSamaraweera/Sinhala-Sign-Language-LMS" },
      category: "AI/ML"
    },
    {
      title: "HPC Optimization for LLM Parallel Prompt Processing",
      description: "Optimized LLM prompt processing using HPC techniques (OpenMP, MPI, hybrid) across C and Python, achieving ~3.27x speedup.",
      tags: ["C", "Python", "OpenMP", "MPI", "HPC"],
      image: "/aiml.png",
      links: { github: "https://github.com/TheshikaSamaraweera/HPC-project" },
      category: "AI/ML"
    },
    {
      title: "Book Prediction System (ML)",
      description: "Book recommendation/prediction system using KNN and Decision Trees with hyperparameter tuning and visualization.",
      tags: ["Python", "scikit-learn", "matplotlib", "seaborn"],
      image: "/aiml.png",
      links: { github: "https://github.com/TheshikaSamaraweera/book_recomendation_system" },
      category: "AI/ML"
    },

    {
      title: "Portfolio Website (VS Code theme)",
      description: "Modern portfolio website with VS Code theme, animations, and interactive elements.",
      tags: ["React", "Framer Motion", "Tailwind"],
      image: "/web.png",
      links: { github: "https://github.com/TheshikaSamaraweera/Sample_VsCode_Extention" },
      category: "Web"
    },
    {
      title: "Complete Responsive Frontend E-commerce Project",
      description: "Fully responsive front-end for an e-commerce site using Next.js and Tailwind CSS — deployed to Vercel.",
      tags: ["Next.js", "Tailwind", "Responsive"],
      image: "/web.png",
      links: { github: "https://github.com/TheshikaSamaraweera/E-commerce_Fronted" },
      category: "Web"
    },
    {
      title: "Motel Manager - Full Stack (MERN)",
      description: "Full-stack CRUD motel food management app built with the MERN stack.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      image: "/web.png",
      links: { github: "https://github.com/TheshikaSamaraweera/MERN_Food-Manager" },
      category: "Web"
    },
    {
      title: "Pharmacy Products Buying System (Ongoing)",
      description: "Responsive MERN app with prescription-based purchase flow (user must upload valid prescription to buy certain products).",
      tags: ["MERN", "React", "Node.js"],
      image: "/web.png",
      links: { github: "https://github.com/TheshikaSamaraweera/Pharmacy-App" },
      category: "Web"
    },
    {
      title: "Multi-Tenant SaaS POS System",
      description: "Multi-tenant POS with DB-level tenant isolation and role-based auth using Clerk. Responsive UI built with shadcn/ui.",
      tags: ["NestJS", "Next.js", "MongoDB", "Clerk Auth"],
      image: "/web.png",
      links: { github: "https://github.com/TheshikaSamaraweera/SaaS_PoS_Fe_and_Be" },
      category: "Web"
    },
    {
      title: "Microservice Ordering App",
      description: "Microservice-based ordering application with synchronous and asynchronous inter-service communication and advanced backend patterns.",
      tags: ["Spring Boot", "Kafka", "Docker", "Microservices", "Avro", "WebSocket", "DLQ"],
      image: "/micro.png",
      links: { github: "https://github.com/TheshikaSamaraweera/kafka-order-platform" },
      category: "Microservices"
    },
    {
      title: "Enterprise Microservices Platform",
      description: "Production-grade microservices system with API Gateway, service discovery, event-driven architecture, OAuth2, circuit breakers, distributed tracing, and monitoring.",
      tags: ["Spring Boot", "Spring Cloud", "Kafka", "Docker"],
      image: "/micro.png",
      links: { github: "https://github.com/TheshikaSamaraweera/MicroService" },
      category: "Microservices"
    },
    {
      title: "BookFair Zone – Microservices Stall Reservation",
      description: "Microservices platform for event stall reservation with real-time updatable map, JWT auth, Kafka-driven events and load balancing.",
      tags: ["Spring Boot", "React", "PostgreSQL", "Kafka", "JWT", "Docker", "API Gateway", "Service Discovery", "Event-Driven Architecture", "Circuit Breakers", "Load Balancing"],
      image: "/micro.png",
      links: { github: "https://github.com/DSNDTC/BookFairZone" },
      category: "Microservices"
    },
    {
      title: "Kafka Order Analytics Platform",
      description: "Real-time order analytics using Apache Kafka, Avro serialization, fault-tolerant patterns and live dashboard aggregation.",
      tags: ["Kafka", "Avro", "Spring Boot", "WebSocket"],
      image: "/micro.png",
      links: { github: "https://github.com/TheshikaSamaraweera/kafka-order-platform" },
      category: "Microservices"
    },

    {
      title: "Jenkins Pipeline for Spring Boot App",
      description: "CI/CD Jenkins pipeline: Checkout, Test & Build, SonarQube analysis & quality gate, package, Docker build and deploy with monitoring.",
      tags: ["Jenkins", "Docker", "SonarQube", "Gradle", "CI/CD", "Monitoring", "Prometheus", "Grafana"],
      image: "/devops.png",
      links: { github: "https://github.com/TheshikaSamaraweera/ToDo_FullStack" },
      category: "DevOps / Cloud"
    },

    {
      title: "PoS and Inventory Management System",
      description: "Smart Investment Planner with AI/ML features",
      tags: ["ReactJs", "NodeJs", "Express", "MongoDB", "AI/ML", "Prompt Engineering"],
      image: "/web.png",
      links: { github: "https://github.com/TheshikaSamaraweera/InvestmentPlanner" },
      category: "Web"
    },

    {
      title: "Work Manager – Mobile Application",
      description: "Mobile app for university students to manage tasks; combines many productivity features. Built with Flutter & Firebase.",
      tags: ["Flutter", "Dart", "Firebase"],
      image: "/mobile.png",
      links: { github: "https://github.com/TheshikaSamaraweera/Work_Manager_Android" },
      category: "Mobile"
    },

    {
      title: "Student Management System – Desktop App",
      description: "Desktop application to manage student records using C#, .NET Core, Entity Framework and MySQL.",
      tags: ["C#", ".NET Core", "Entity Framework", "MySQL"],
      image: "/dextop.png",
      links: { github: "https://github.com/TheshikaSamaraweera/Student_Management_System_withDB/tree/main" },
      category: "Desktop"
    },

    {
      title: "High-Security Voting System",
      description: "Highly secure voting platform with cryptographic authentication, end-to-end encryption, anonymous verifiable elections and brute-force protections.",
      tags: ["Java", "Spring Security", "JWT", "Cryptography"],
      image: "/web.png",
      links: { github: "https://github.com/TheshikaSamaraweera/high_security_voting_system" },
      category: "Web"
    },


    {
      title: "Digital Clock, Password Generator & User Creation Scripts",
      description: "Collection of Bash automation scripts: digital clock, password generator, user creation and other admin scripts.",
      tags: ["Bash", "Shell Scripting"],
      image: "/cripting.png",
      links: { github: "https://github.com/TheshikaSamaraweera/Digital_Clock" },
      category: "Scripting"
    },



  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <FaCode className="text-[#007acc]" />
          Featured Projects
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          A showcase of my best work in web development and software engineering.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                ? 'bg-[#007acc] text-white shadow-lg'
                : 'bg-[#252526] text-gray-400 hover:bg-[#2a2a2a] hover:text-white border border-[#3c3c3c]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
