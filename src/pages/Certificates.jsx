import React, { useState } from "react";
import { motion } from "framer-motion";

const certificatesData = [
  {
    id: 1,
    title: "React Developer Certificate",
    topic: "React, Hooks, SPA",
    description: "Comprehensive course covering modern React patterns and best practices.",
    image: "https://images.unsplash.com/photo-1584697964153-62354b72317b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Node.js Backend Certificate",
    topic: "API, Express, Auth",
    description: "Built secure REST APIs with Node.js, Express, and JWT based authentication.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cloud Fundamentals",
    topic: "AWS, Deployments",
    description: "Learned core AWS services and deployed scalable applications to the cloud.",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Database Design",
    topic: "SQL, Schema, Indexing",
    description: "Designed relational schemas and optimized queries for performance.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="text-sm">
      <p className="text-green-400">// Certificates and Achievements</p>
      <p className="text-green-400">// Hover a card to flip. Click to view fullscreen.</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certificatesData.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} onOpen={() => setSelected(cert)} />
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSelected(null)}
          />
          <div className="relative z-10 max-w-5xl w-[92vw] md:w-[80vw] lg:w-[70vw]">
            <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="text-xs text-gray-300 truncate pr-4">
                  {selected.title} — {selected.topic}
                </div>
                <button
                  className="text-gray-300 hover:text-white text-sm"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>
              </div>
              <div className="p-3">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-[70vh] object-contain bg-black"
                />
                <p className="mt-3 text-gray-300 text-xs">{selected.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CertificateCard({ cert, onOpen }) {
  return (
    <div className="group bg-gray-900/40 border border-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <div className="relative h-56 perspective">
        <motion.div
          className="absolute inset-0 preserve-3d"
          whileHover={{ rotateY: 180 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          <div className="absolute inset-0 backface-hidden">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-white text-sm font-semibold truncate">{cert.title}</h3>
              <p className="text-gray-300 text-xs truncate">{cert.topic}</p>
            </div>
          </div>

          <div
            className="absolute inset-0 bg-gray-800 p-3 rotateY-180 backface-hidden flex flex-col justify-between"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div>
              <h3 className="text-blue-400 text-sm font-semibold">{cert.title}</h3>
              <p className="text-gray-300 text-xs mt-1">{cert.description}</p>
            </div>
            <button
              className="self-start mt-3 text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded"
              onClick={onOpen}
            >
              View fullscreen
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Tailwind helpers via global classes
// We rely on inline styles for 3D, but add class names that match the theme 