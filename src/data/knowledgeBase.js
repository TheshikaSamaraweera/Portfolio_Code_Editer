// Knowledge base chunks for RAG retrieval
// Each chunk is a logical unit that can be retrieved independently

export const knowledgeChunks = [
    // ===== PERSONAL INFO =====
    {
        id: "personal_info",
        keywords: ["name", "who", "theshika", "navod", "contact", "email", "phone", "location", "about", "introduction", "yourself"],
        content: `Name: Theshika Samaraweera (also known as Theshika Navod)
Title: Computer Engineer / Software Engineer / AI Engineer
Email: theshikanavod@gmail.com
Phone: +94 713621414
Location: Kurunegala, Sri Lanka
Status: Open for work / Available for hire
Looking for: Backend Engineering, Full-Stack Engineering, or AI Engineering roles
GitHub: https://github.com/TheshikaSamaraweera
LinkedIn: https://linkedin.com/in/theshika-navod-a6a22a254
Medium: https://medium.com/@theshikanavod`
    },

    // ===== PROFESSIONAL SUMMARY =====
    {
        id: "profile_summary",
        keywords: ["summary", "profile", "describe", "tell me about", "background", "specialization", "expertise", "passionate"],
        content: `Theshika is a hybrid Engineer specializing in:
- Java, Spring Boot, Microservices, Distributed Systems
- Cloud-native development and scalable backend engineering
- Production-grade AI systems: RAG pipelines, agentic architectures, multimodal applications
- Generative AI, Multi-Agent Systems, and Prompt Engineering
He is passionate about building reliable, high-performance systems. He's a researcher, fast learner, hard worker, and leads teams with clarity and purpose.`
    },

    // ===== CURRENT JOB =====
    {
        id: "current_job",
        keywords: ["current", "now", "working", "applantics", "job", "present", "2025", "associate", "employment"],
        content: `Current Position: Associate Software Engineer at Applantics (PVT) LTD
Duration: February 2025 – Current
Responsibilities:
• Developing enterprise POS system with microservices architecture
• Real-time transaction processing, inventory management, payment gateway integrations
• Building AI-powered customer support chatbot using RAG + LangChain + vector databases
• Designing real-time analytics dashboards with React and WebSocket
Tech Stack: Java, JavaScript, Python, React, MySQL, MongoDB, AI Agents, LangChain, Docker, AWS`
    },

    // ===== INTERNSHIP =====
    {
        id: "internship",
        keywords: ["intern", "internship", "isa", "information systems", "air arabia", "aviation", "2024", "previous"],
        content: `Internship: Information Systems Associates (ISA)
Role: Intern Software Engineer
Duration: July 2024 – January 2025
Client: Air Arabia aviation systems
Achievements:
• Developed microservices using Spring Boot and Angular
• Resolved 200+ critical bugs identified by SonarQube
• Increased test coverage from 10% to 80% using JUnit and Mockito
• Migrated REST to gRPC, reducing inter-service latency by 40%
• Reduced passenger wait time by 25% with real-time departure display
Tech Stack: Java (8, 11, 17), Spring Boot, Angular, PostgreSQL, Oracle DB, Redis, Kafka, gRPC, Docker, Jenkins`
    },

    // ===== AI/ML SKILLS =====
    {
        id: "ai_skills",
        keywords: ["ai", "ml", "machine learning", "artificial intelligence", "langchain", "rag", "agent", "llm", "deep learning", "computer vision", "nlp"],
        content: `AI/ML Skills:
• Frameworks: LangChain, LangGraph, AutoGen, CrewAI
• Architecture: RAG Systems, Multi-Agent Systems, Agentic architectures
• Tools: Vector Databases (Pinecone, FAISS), HuggingFace, Ollama
• Techniques: Prompt Engineering, Fine-tuning LLMs, MLOps
• Areas: Computer Vision, Deep Learning, NLP, TensorFlow, OpenCV, MediaPipe`
    },

    // ===== BACKEND SKILLS =====
    {
        id: "backend_skills",
        keywords: ["backend", "java", "spring", "node", "fastapi", "server", "api", "microservices", "kafka"],
        content: `Backend Development Skills:
• Languages: Java, Python, TypeScript, JavaScript
• Frameworks: Spring Boot, Spring Cloud, Node.js, NestJS, FastAPI
• Message Queues: Apache Kafka, RabbitMQ
• Testing: JUnit, Mockito, Unit Testing
• Architecture: Microservices, REST APIs, gRPC, Event-Driven, SSE`
    },

    // ===== FRONTEND SKILLS =====
    {
        id: "frontend_skills",
        keywords: ["frontend", "react", "next", "angular", "ui", "html", "css", "tailwind", "web"],
        content: `Frontend Development Skills:
• Frameworks: React, Next.js, Angular
• Languages: HTML5, CSS3, JavaScript, TypeScript
• Styling: Tailwind CSS, shadcn/ui
• Tools: Framer Motion, WebSockets for real-time features`
    },

    // ===== DEVOPS SKILLS =====
    {
        id: "devops_skills",
        keywords: ["devops", "docker", "kubernetes", "jenkins", "aws", "ci", "cd", "cloud", "deployment", "container"],
        content: `DevOps & Cloud Skills:
• Containers: Docker, Kubernetes
• CI/CD: Jenkins, GitHub Actions
• Cloud: AWS
• Monitoring: Prometheus, Grafana, SonarQube
• Architecture: CI/CD pipelines, containerized deployments`
    },

    // ===== DATABASE SKILLS =====
    {
        id: "database_skills",
        keywords: ["database", "db", "sql", "postgres", "mysql", "mongo", "redis", "neo4j", "pinecone", "vector"],
        content: `Database Skills:
• Relational: PostgreSQL, MySQL, Oracle DB
• NoSQL: MongoDB, Redis
• Graph: Neo4j
• Vector: Pinecone, FAISS
• ORM: JPA, Hibernate`
    },

    // ===== AI PROJECTS =====
    {
        id: "ai_projects",
        keywords: ["ai project", "code generator", "reviewer", "rag", "chatbot", "agent", "crewai", "autogen"],
        content: `AI Projects:
1. AI Code Generator & Reviewer (Research Project)
   - VS Code extension for code generation and bug detection
   - Achieved 42% on SWE-bench
   - Multi-agent system detecting vulnerabilities and code smells
   - Tech: Python, LangGraph, LLM APIs, Fine-tuning, Pinecone

2. RAG Customer Service Agent
   - Enterprise-grade automated customer support
   - FAISS vector store with optimized embeddings
   - Tech: Python, LangChain, FAISS, HuggingFace

3. Business Intelligence Multi-Agent System
   - CrewAI framework with 3 agents (Data Collector, Analyst, Report Writer)
   - Automated sales trend analysis
   - Tech: Python, CrewAI, OpenAI

4. Multi-Agent Customer Support (Support Flow)
   - Intelligent ticket triage & response generation
   - Deployed locally using AutoGen + Ollama
   - Tech: Python, Microsoft AutoGen, Ollama`
    },

    // ===== SOFTWARE PROJECTS =====
    {
        id: "software_projects",
        keywords: ["project", "bookfair", "kafka", "voting", "pos", "saas", "jenkins", "microservices"],
        content: `Software Engineering Projects:
1. BookFair Zone - Microservices Stall Reservation
   - Hall management, booking, real-time map updates
   - Tech: Spring Boot, Kafka, JWT, API Gateway

2. Kafka Order Analytics Platform
   - High-throughput streaming with Avro serialization
   - Fault-tolerant with Dead Letter Queue
   - Tech: Kafka, Avro, Spring Boot, React, WebSocket

3. High-Security E-Voting System
   - End-to-end encryption, MFA, rate limiting
   - Tech: Java, Spring Security, JWT, Cryptography

4. Multi-Tenant SaaS POS System
   - Database-level tenant isolation
   - Tech: NestJS, React, Next.js, MongoDB, Clerk Auth

5. Jenkins CI/CD Pipeline
   - Full pipeline: test, build, SonarQube, Docker, deploy
   - Tech: Jenkins, Docker, SonarQube, Prometheus, Grafana`
    },

    // ===== SIGN LANGUAGE PROJECT =====
    {
        id: "sign_language_project",
        keywords: ["sign language", "sinhala", "lms", "gesture", "hearing", "impaired", "mediapipe", "computer vision"],
        content: `Sinhala Sign Language LMS:
- AI-powered learning management system for hearing/speech impaired
- 87% gesture recognition accuracy in real-time
- Computer vision with MediaPipe pose estimation
- Tech: Python, OpenCV, MediaPipe, TensorFlow, FastAPI, NLP`
    },

    // ===== HPC PROJECT =====
    {
        id: "hpc_project",
        keywords: ["hpc", "parallel", "optimization", "mpi", "openmp", "speedup", "llm processing"],
        content: `HPC Optimization for LLM Parallel Prompt Processing:
- Achieved 3.27x speedup using HPC techniques
- Benchmarked OpenMP, MPI, and hybrid parallelization
- Tested across Pure Python, Pure C, and C + Python
- Tech: C, Python, OpenMP, MPI, Performance Optimization`
    },

    // ===== EDUCATION =====
    {
        id: "education",
        keywords: ["education", "university", "degree", "bsc", "gpa", "ruhuna", "study", "college", "school"],
        content: `Education:
Degree: B.Sc. (Hons) Computer Engineering
University: Faculty of Engineering, University of Ruhuna, Sri Lanka
GPA: 3.30
Previous: Mayurapada Central College, Maliyadeva College`
    },

    // ===== CERTIFICATES =====
    {
        id: "certificates",
        keywords: ["certificate", "certification", "course", "udemy", "training", "learn", "certified"],
        content: `Professional Certificates:
AI/ML:
- Mastering AI Agents Bootcamp (School of AI)
- Certified Generative AI Architect with Knowledge Graphs
- From Prompt Engineering to Agent Engineering
- Building Effective Agentic Systems
- Model Context Protocol (MCP) Course - Hugging Face

Software Engineering:
- Java Complete Core for Beginners (2025)
- Spring Framework for Java Developers
- CI/CD with Jenkins and Docker
- AWS Essentials
- Master in Software Architecture
- Spring GraphQL, Network Applications in Java
- Next.js with Tailwind CSS
- Information Security Fundamentals`
    },

    // ===== ACHIEVEMENTS =====
    {
        id: "achievements",
        keywords: ["achievement", "award", "competition", "haxtreme", "prefect", "leader", "football", "involvement"],
        content: `Achievements & Involvement:
• 3rd Year Field Representative – Computer Engineering
• Haxtreme 2.0 Hackathon - 4th place
• IEEE INSL Competition – Participant
• Former Senior Prefect – Mayurapada Central College
• Leadership Development Program – Maliyadeva College
• Football Team Champion – Mayurapada Central`
    },

    // ===== SOFT SKILLS =====
    {
        id: "soft_skills",
        keywords: ["soft skill", "communication", "leadership", "teamwork", "team", "stress", "time management", "personality"],
        content: `Soft Skills:
• Communication & Presentation
• Stress Management
• Time Management
• Team Collaboration
• Leadership`
    },

    // ===== REFERENCES =====
    {
        id: "references",
        keywords: ["reference", "recommend", "dr", "lecturer", "professor", "contact reference"],
        content: `Professional References:
1. Dr. Kushan Sudheera
   - Senior Lecturer, Faculty of Engineering, University of Ruhuna
   - Phone: +94 719693164
   - Email: kushan@eie.ruh.ac.lk

2. Dr. Rajitha Udawalpola
   - Senior Lecturer, Faculty of Engineering, University of Ruhuna
   - Phone: +94 718578608
   - Email: rajitha@eie.ruh.ac.lk`
    },

    // ===== WEBSITE INFO =====
    {
        id: "website_info",
        keywords: ["website", "portfolio", "vs code", "theme", "built with", "design", "this site"],
        content: `About This Portfolio Website:
Theme: VS Code / IDE style with dark mode and syntax highlighting
Features: Interactive file explorer, terminal navigation, AI chatbot
Built with: React, Tailwind CSS, Framer Motion, and Vite
Created by: Theshika Samaraweera`
    },

    // ===== NAVIGATION =====
    {
        id: "navigation",
        keywords: ["navigate", "how to", "use", "sidebar", "terminal", "page", "file", "open", "command", "help"],
        content: `How to Navigate This Website:

1. Sidebar Navigation (File Explorer):
   - Click any .jsx file in the left sidebar to open it as a tab
   - Close tabs by clicking the × button

2. Terminal Navigation:
   - Open terminal from bottom bar
   - Commands: pwd, ls, ls -la, cd .., code filename.jsx, clear, help

Available Pages:
• about.jsx - Background, introduction, resume download
• skills.jsx - Technical skills by category
• projects.jsx - GitHub projects
• my_projects.jsx - Featured portfolio projects
• certificates.jsx - Professional certifications
• achievements.jsx - Awards and accomplishments
• articles.jsx - Medium blog posts
• contact.jsx - Contact form, email, phone
• README.jsx - Welcome and usage guide

Tips: Use ↑/↓ for command history, Ctrl+C to cancel`
    }
];

// System prompt for the chatbot (minimal, constant)
export const systemPrompt = `You are a helpful AI assistant for Theshika Samaraweera's portfolio website.
Be concise, professional, and friendly. Answer based on the context provided.
If asked about availability, he is "Open for work" and looking for Backend/Full-Stack/AI Engineering roles.
If you don't know something, suggest contacting Theshika directly at theshikanavod@gmail.com.
Guide users to relevant pages when appropriate.`;
