import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const CertificateCard = ({ cert, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    onClick={() => onClick(cert)}
    className="group relative bg-[#252526]/80 backdrop-blur-sm border border-[#2b2b2c] rounded-xl overflow-hidden hover:border-[#007acc] transition-all hover:shadow-xl cursor-pointer"
  >
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-[#1e1e1e]/90 backdrop-blur text-white text-xs px-3 py-1 rounded-full border border-[#333]">
          {cert.date}
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-center gap-2 mb-3 text-[#007acc] text-sm font-mono">
        <FaCertificate />
        <span>{cert.issuer}</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#007acc] transition-colors">
        {cert.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {cert.topic}
      </p>
    </div>
  </motion.div>
);

const CertificateModal = ({ cert, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-[#1e1e1e] border border-[#2b2b2c] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
    >
      <div className="relative h-64">
        <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <FaTimes />
        </button>
      </div>

      <div className="p-8 -mt-12 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#007acc] text-white px-3 py-1 rounded-full text-sm font-medium">
            {cert.issuer}
          </span>
          <span className="bg-[#252526] text-gray-300 px-3 py-1 rounded-full text-sm border border-[#333]">
            {cert.date}
          </span>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">{cert.title}</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-[#007acc] font-mono text-sm mb-2">TOPICS COVERED</h3>
            <p className="text-gray-300">{cert.topic}</p>
          </div>

          <div>
            <h3 className="text-[#007acc] font-mono text-sm mb-2">DESCRIPTION</h3>
            <p className="text-gray-400 leading-relaxed">
              {cert.description || "Comprehensive certification covering advanced topics in software development."}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-[#007acc] hover:bg-[#0063a5] text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <FaExternalLinkAlt />
              Verify Credential
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI/ML', 'Backend', 'Frontend', 'Architecture', 'Cloud', 'Agile', 'Others'];

  const certificates = [

    // ---------------------- AI / ML ----------------------
    {
      title: "Mastering AI Agents Bootcamp",
      issuer: "School of AI, Udemy",
      date: "2024",
      topic: "AI Agents, Tools, LangChain, LLM Integrations",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      category: "AI/ML"
    },
    {
      title: "Mastering Context Design for Intelligent AI Agents",
      issuer: "School of AI, Udemy",
      date: "2024",
      topic: "Context design, RAG, intelligent agent structures",
      image: "https://images.unsplash.com/photo-1526378722418-9aece8e1f0b4",
      category: "AI/ML"
    },
    {
      title: "From Prompt Engineering to Agent Engineering",
      issuer: "Udemy",
      date: "2024",
      topic: "Prompt engineering, agent systems",
      image: "https://images.unsplash.com/photo-1581091870627-3a1e3a32a5f1",
      category: "AI/ML"
    },
    {
      title: "Certified Generative AI Architect with Knowledge Graphs",
      issuer: "School of AI, Udemy",
      date: "2024",
      topic: "Knowledge graphs, generative AI pipelines",
      image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2",
      category: "AI/ML"
    },
    {
      title: "Building Effective Agentic Systems",
      issuer: "Udemy",
      date: "2024",
      topic: "End-to-end agentic workflows",
      image: "../public/effectiveagents.jpg",
      category: "AI/ML"
    },
    {
      title: "Model Context Protocol (MCP)",
      issuer: "Hugging Face",
      date: "2024",
      topic: "OpenAI MCP, tool calling, agent integration",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
      category: "AI/ML"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "2023",
      topic: "Python, AI basics, data science foundations",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f8b0c",
      category: "AI/ML"
    },

    // ---------------------- Backend ----------------------
    {
      title: "Java Core for Beginners",
      issuer: "ITER Academy, Udemy",
      date: "2025",
      topic: "OOP, Java fundamentals",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      category: "Backend"
    },
    {
      title: "Spring Framework for Java Developers",
      issuer: "Udemy",
      date: "2024",
      topic: "Spring Boot, REST APIs, JPA",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      category: "Backend"
    },
    {
      title: "Spring GraphQL",
      issuer: "Udemy",
      date: "2024",
      topic: "Spring Boot GraphQL APIs",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      category: "Backend"
    },
    {
      title: "Programming Network Applications in Java",
      issuer: "Cyber Quince, Udemy",
      date: "2024",
      topic: "Socket programming, networking in Java",
      image: "../public/network app.jpg",
      category: "Backend"
    },

    // ---------------------- Frontend ----------------------
    {
      title: "React Basics",
      issuer: "Meta",
      date: "2024",
      topic: "React fundamentals, components, hooks",
      image: "https://images.unsplash.com/photo-1584697964153-62354b72317b",
      category: "Frontend"
    },
    {
      title: "Next.js & Tailwind E-commerce",
      issuer: "Vapa Academy, Udemy",
      date: "2024",
      topic: "Next.js, Tailwind CSS, frontend systems",
      image: "../public/next.jpg",
      category: "Frontend"
    },
    {
      title: "The Complete JavaScript Course",
      issuer: "Udemy",
      date: "2024",
      topic: "JavaScript, DOM, advanced JS",
      image: "../public/js.jpg",
      category: "Frontend"
    },
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      date: "2023",
      topic: "HTML, CSS, responsive design",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
      category: "Frontend"
    },

    // ---------------------- Architecture ----------------------
    {
      title: "Master in Software Architecture",
      issuer: "Udemy",
      date: "2024",
      topic: "System design, microservices",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      category: "Architecture"
    },

    // ---------------------- Cloud ----------------------
    {
      title: "AWS Essentials",
      issuer: "Udemy",
      date: "2024",
      topic: "EC2, S3, IAM, cloud fundamentals",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
      category: "Cloud"
    },
    {
      title: "Containers / Docker / Kubernetes",
      issuer: "IBM",
      date: "2024",
      topic: "Docker, K8s, OpenShift",
      image: "https://images.unsplash.com/photo-1553708418-6e3e0a8d2cde",
      category: "Cloud"
    },
    {
      title: "CI/CD with Jenkins & Docker",
      issuer: "School of Devops, Udemy",
      date: "2024",
      topic: "CI/CD pipelines, automation",
      image: "../public/cicd.jpg",
      category: "Cloud"
    },

    // ---------------------- Agile ----------------------
    {
      title: "How to Create a Jira SCRUM Project",
      issuer: "Coursera",
      date: "2023",
      topic: "SCRUM, Agile workflow",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f",
      category: "Agile"
    },

    // ---------------------- Others ----------------------
    {
      title: "Git & GitHub for Beginners",
      issuer: "Udemy",
      date: "2024",
      topic: "Version control, Git workflows",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      category: "Others"
    },
    {
      title: "Git for Beginners",
      issuer: "Udemy",
      date: "2023",
      topic: "Git basics, branching",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      category: "Others"
    },
    {
      title: "MERN Stack Authentication & Deployment",
      issuer: "Udemy",
      date: "2024",
      topic: "Node.js, MongoDB, auth systems",
      image: "https://images.unsplash.com/photo-1547658718-1cdaa085b9ef",
      category: "Others"
    },
    {
      title: "CRUD App with NodeJS and MongoDB",
      issuer: "Udemy",
      date: "2023",
      topic: "MERN development",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f8b0c",
      category: "Others"
    },
    {
      title: "Keycloak Integration with Spring Boot",
      issuer: "Udemy",
      date: "2024",
      topic: "OIDC, SSO, identity management",
      image: "https://images.unsplash.com/photo-1526378722418-9aece8e1f0b4",
      category: "Others"
    }
  ];

  const filteredCertificates =
    selectedCategory === 'All'
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Certifications</h1>
        <p className="text-gray-400 mb-6">Professional credentials and technical certifications.</p>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredCertificates.map((cert, index) => (
            <CertificateCard
              key={`${selectedCategory}-${index}`}
              cert={cert}
              index={index}
              onClick={setSelectedCert}
            />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
