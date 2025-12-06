import React, { useState, useEffect } from 'react';
import { VscCalendar, VscGlobe, VscRepoForked } from 'react-icons/vsc';
import { FaBuilding, FaMapMarkerAlt, FaGithub, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const GitHubRepoCard = ({ repo, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="bg-[#1e1e1e] hover:bg-[#2d2d2d] border border-[#2b2b2c] rounded-xl p-5 transition-all hover:border-[#007acc] group cursor-pointer"
    >
        <div className="flex justify-between items-start mb-3">
            <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3794ff] font-semibold text-lg hover:underline flex items-center gap-2"
            >
                {repo.name}
            </a>
            <span className="text-xs text-gray-400 border border-[#2b2b2c] rounded-full px-3 py-1 bg-[#2d2d2d]">
                {repo.visibility}
            </span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10 leading-relaxed">
            {repo.description || "No description available"}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
            <div className="flex items-center gap-4">
                {repo.language && (
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ffcc02]"></span>
                        <span>{repo.language}</span>
                    </div>
                )}
                <div className="flex items-center gap-1.5 hover:text-[#3794ff] transition-colors">
                    <FaStar className="text-[#ffcc02]" />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-[#3794ff] transition-colors">
                    <VscRepoForked />
                    <span>{repo.forks_count}</span>
                </div>
            </div>
            <div className="text-gray-500 text-xs">
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
            <div className="min-h-screen bg-[#181818] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#007acc] mx-auto mb-4"></div>
                    <p className="text-[#d4d4d4]">Loading GitHub data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#181818] flex flex-col items-center justify-center">
                <div className="text-[#f14c4c] text-center">
                    <p className="text-xl mb-2">⚠️ Error Loading Data</p>
                    <p className="text-sm text-gray-500">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#181818] text-[#d4d4d4]">
            <div className="max-w-7xl mx-auto p-6 space-y-8">
                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#333333] border border-[#2b2b2c] rounded-xl p-8 shadow-2xl"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#007acc] to-[#0e639c] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <img
                                src={userData.avatar_url}
                                alt={userData.login}
                                className="relative w-36 h-36 rounded-full border-4 border-[#333333] shadow-lg group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-2 right-2 w-7 h-7 bg-[#4ec9b0] border-4 border-[#333333] rounded-full shadow-lg"></div>
                        </div>

                        <div className="flex-1 space-y-5">
                            <div>
                                <h1 className="text-4xl font-bold text-white flex items-center gap-3 mb-2">
                                    {userData.name}
                                    <a
                                        href={userData.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#cccccc] hover:text-[#3794ff] text-2xl transition-colors"
                                    >
                                        <FaGithub />
                                    </a>
                                </h1>
                                <p className="text-[#3794ff] font-mono text-lg">@{userData.login}</p>
                            </div>

                            <p className="text-[#cccccc] max-w-2xl text-base leading-relaxed">{userData.bio}</p>

                            <div className="flex flex-wrap gap-6 text-sm text-[#cccccc]">
                                {userData.company && (
                                    <div className="flex items-center gap-2 hover:text-[#3794ff] transition-colors">
                                        <FaBuilding /> {userData.company}
                                    </div>
                                )}
                                {userData.location && (
                                    <div className="flex items-center gap-2 hover:text-[#3794ff] transition-colors">
                                        <FaMapMarkerAlt /> {userData.location}
                                    </div>
                                )}
                                {userData.blog && (
                                    <a
                                        href={userData.blog}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 hover:text-[#3794ff] transition-colors"
                                    >
                                        <VscGlobe /> Website
                                    </a>
                                )}
                            </div>

                            <div className="flex gap-8 pt-6 border-t border-[#2b2b2c]">
                                <div className="text-center group cursor-pointer">
                                    <div className="text-3xl font-bold text-white group-hover:text-[#007acc] transition-colors">
                                        {userData.public_repos}
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Repositories</div>
                                </div>
                                <div className="text-center group cursor-pointer">
                                    <div className="text-3xl font-bold text-white group-hover:text-[#007acc] transition-colors">
                                        {userData.followers}
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Followers</div>
                                </div>
                                <div className="text-center group cursor-pointer">
                                    <div className="text-3xl font-bold text-white group-hover:text-[#007acc] transition-colors">
                                        {userData.following}
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Following</div>
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
                    className="bg-[#333333] border border-[#2b2b2c] rounded-xl p-8 shadow-2xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-gradient-to-br from-[#007acc] to-[#0e639c] p-3 rounded-lg shadow-lg">
                            <VscCalendar className="text-white text-2xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">GitHub Contributions</h2>
                    </div>

                    <div className="bg-[#1e1e1e] border border-[#2b2b2c] rounded-lg p-6 overflow-hidden">
                        <div className="w-full overflow-x-auto">
                            <img
                                src={`https://ghchart.rshah.org/161b22/${USERNAME}`}
                                alt="Github Contribution Graph"
                                className="w-full min-w-[800px]"
                                style={{
                                    filter: 'brightness(0.95) contrast(1.1)',
                                    backgroundColor: '#0d1117'
                                }}
                            />
                        </div>
                        <div className="flex items-center justify-end mt-4 pt-4 border-t border-[#2b2b2c]">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 font-medium">Less</span>
                                <div className="w-3 h-3 rounded-sm bg-[#1e1e1e] border border-[#2b2b2c]"></div>
                                <div className="w-3 h-3 rounded-sm bg-[#0e4429]"></div>
                                <div className="w-3 h-3 rounded-sm bg-[#006d32]"></div>
                                <div className="w-3 h-3 rounded-sm bg-[#26a641]"></div>
                                <div className="w-3 h-3 rounded-sm bg-[#39d353]"></div>
                                <span className="text-xs text-gray-500 font-medium">More</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Repositories Grid */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-gradient-to-br from-[#007acc] to-[#0e639c] p-3 rounded-lg shadow-lg">
                            <VscRepoForked className="text-white text-2xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Latest Repositories</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {repos.map((repo, index) => (
                            <GitHubRepoCard key={repo.id} repo={repo} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubProjects;