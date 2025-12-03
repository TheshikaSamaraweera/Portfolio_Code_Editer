import React, { useState, useEffect } from 'react';
import { VscCalendar, VscGlobe, VscRepoForked, VscEye } from 'react-icons/vsc';
import { FaBuilding, FaMapMarkerAlt, FaTwitter, FaGithub, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const GitHubRepoCard = ({ repo, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="bg-[#252526] hover:bg-[#2a2d2e] border border-[#2b2b2c] rounded-lg p-4 transition-all hover:border-[#007acc] group"
  >
    <div className="flex justify-between items-start mb-2">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3794ff] font-semibold text-lg hover:underline flex items-center gap-2"
      >
        {repo.name}
      </a>
      <span className="text-xs text-gray-500 border border-gray-700 rounded-full px-2 py-0.5">
        {repo.visibility}
      </span>
    </div>

    <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">
      {repo.description || "No description available"}
    </p>

    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
      <div className="flex items-center gap-4">
        {repo.language && (
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span>{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1 hover:text-gray-300">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-gray-300">
          <VscRepoForked />
          <span>{repo.forks_count}</span>
        </div>
      </div>
      <div className="text-gray-600">
        {new Date(repo.updated_at).toLocaleDateString()}
      </div>
    </div>
  </motion.div>
);

const GitHubProjects = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const USERNAME = 'TheshikaSamaraweera';
  const GITHUB_API_BASE = 'https://api.github.com';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const [userRes, reposRes] = await Promise.all([
          fetch(`${GITHUB_API_BASE}/users/${USERNAME}`),
          fetch(`${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=12`)
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('Failed to fetch data');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUserData(userData);
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-[#007acc]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-red-400">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 animate-fade-in">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-6"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative group">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-32 h-32 rounded-full border-4 border-[#007acc] shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-[#252526] rounded-full"></div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                {userData.name}
                <a href={userData.html_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-xl">
                  <FaGithub />
                </a>
              </h1>
              <p className="text-[#007acc] font-mono">@{userData.login}</p>
            </div>

            <p className="text-gray-300 max-w-2xl text-lg">{userData.bio}</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              {userData.company && (
                <div className="flex items-center gap-2">
                  <FaBuilding /> {userData.company}
                </div>
              )}
              {userData.location && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt /> {userData.location}
                </div>
              )}
              {userData.blog && (
                <a href={userData.blog} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#007acc]">
                  <VscGlobe /> Website
                </a>
              )}
            </div>

            <div className="flex gap-8 pt-4 border-t border-[#3e3e42]">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{userData.public_repos}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{userData.followers}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{userData.following}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Following</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contribution Graph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-[#252526] border border-[#2b2b2c] rounded-lg p-6 overflow-hidden"
      >
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <VscCalendar className="text-[#007acc]" />
          Contribution Map
        </h2>
        <div className="w-full overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/219138/${USERNAME}`}
            alt="Github Contribution Graph"
            className="w-full min-w-[800px]"
          />
        </div>
      </motion.div>

      {/* Repositories Grid */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <VscRepoForked className="text-[#007acc]" />
          Latest Repositories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, index) => (
            <GitHubRepoCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubProjects;