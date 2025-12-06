import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaTimes, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

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
              {cert.description || "Comprehensive certification covering advanced topics and practical applications in the field."}
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

  const categories = ['All', 'Web Development', 'Cloud', 'AI/ML', 'Agile'];

  const certificates = [
    {
      title: "Machine Learning Fundamentals",
      issuer: "Coursera",
      date: "2024",
      topic: "Python, TensorFlow, Neural Networks",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
      description: "Mastered the basics of machine learning, including supervised and unsupervised learning, neural networks, and deep learning applications.",
      category: "AI/ML"
    },
    {
      title: "React Developer Certificate",
      issuer: "Meta",
      date: "2024",
      topic: "Advanced React, Hooks, Redux, Performance Optimization",
      image: "https://images.unsplash.com/photo-1584697964153-62354b72317b?q=80&w=1200&auto=format&fit=crop",
      description: "In-depth training on building scalable React applications, state management with Redux, and optimizing performance for production.",
      category: "Web Development"
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      topic: "Cloud Architecture, Security, Scalability",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
      description: "Designed and deployed scalable, highly available, and fault-tolerant systems on AWS.",
      category: "Cloud"
    },
    {
      title: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "2023",
      topic: "Agile Methodologies, Team Leadership",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=1200&auto=format&fit=crop",
      description: "Learned the Scrum framework, team roles, events, and artifacts to effectively lead agile teams.",
      category: "Agile"
    }
  ];

  const filteredCertificates = selectedCategory === 'All'
    ? certificates
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Certifications</h1>
        <p className="text-gray-400 mb-6">
          Professional credentials and technical certifications.
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
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;