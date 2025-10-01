import React, { useState, useEffect } from 'react';
import { VscCalendar, VscGlobe } from 'react-icons/vsc';
import { FaBuilding, FaMapMarkerAlt, FaTwitter, FaGithub } from 'react-icons/fa';

// Mock components for demo
const GitHubRepoCard = ({ repo }) => (
  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
    <a href={repo.html_url} className="text-blue-400 hover:text-blue-300 font-semibold">
      {repo.name}
    </a>
    <p className="text-gray-300 text-sm mt-2">{repo.description}</p>
  </div>
);

const GitHubLanguageChart = ({ languages }) => (
  <div className="text-gray-400">Language stats: {Object.keys(languages).length} languages</div>
);

const GitHubActivityChart = ({ username }) => (
  <div className="text-gray-400">Activity chart for {username}</div>
);

const GitHubStats = ({ userData, repos }) => (
  <div className="text-gray-400">Stats loaded</div>
);

const GitHubProjects = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [githubUrl, setGithubUrl] = useState('');

  // GitHub API configuration
  const GITHUB_API_BASE = 'https://api.github.com';
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  // Set your default GitHub username here
  const DEFAULT_USERNAME = 'TheshikaSamaraweera'; // Change this to your username

  const extractUsernameFromUrl = (url) => {
    const match = url.match(/github\.com\/([^/]+)/);
    return match ? match[1] : null;
  };

  const fetchGitHubData = async (username) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch user data
      const userResponse = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
        headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {}
      });

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data');
      }

      const user = await userResponse.json();
      setUserData(user);

      // Fetch repositories
      const reposResponse = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`, {
        headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {}
      });

      if (!reposResponse.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const reposData = await reposResponse.json();
      setRepos(reposData);

      // Calculate language statistics
      const languageStats = {};
      for (const repo of reposData) {
        if (repo.language) {
          languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
        }
      }
      setLanguages(languageStats);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Auto-load your profile on component mount
  useEffect(() => {
    fetchGitHubData(DEFAULT_USERNAME);
  }, []);

  // Auto-refresh data every 5 minutes
  useEffect(() => {
    if (userData) {
      const interval = setInterval(() => {
        fetchGitHubData(userData.login);
      }, 300000); // 5 minutes

      return () => clearInterval(interval);
    }
  }, [userData]);

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    const username = extractUsernameFromUrl(githubUrl) || githubUrl;
    if (username) {
      fetchGitHubData(username);
      setGithubUrl('');
    } else {
      setError('Please enter a valid GitHub username or URL');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading GitHub data...</p>
        </div>
      </div>
    );
  }

  if (error && !userData) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center max-w-md">
          <FaGithub className="text-6xl text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Error Loading Profile</h2>
          <p className="text-red-400 mb-6">{error}</p>
          <form onSubmit={handleUrlSubmit} className="space-y-4">
            <input
              type="text"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="Enter GitHub username or URL"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Load Profile
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src={userData.avatar_url}
              alt={userData.name || userData.login}
              className="w-48 h-48 rounded-full border-4 border-gray-700"
            />
          </div>

          {/* Profile Details */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {userData.name || userData.login}
                </h1>
                <p className="text-xl text-gray-400 mb-2">@{userData.login}</p>
                {userData.bio && (
                  <p className="text-gray-300 mb-4 max-w-2xl">{userData.bio}</p>
                )}
              </div>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg border border-gray-600 transition-colors">
                Follow
              </button>
            </div>

            {/* Profile Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4">
              {userData.company && (
                <div className="flex items-center">
                  <FaBuilding className="mr-2" />
                  <span>{userData.company}</span>
                </div>
              )}
              {userData.location && (
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{userData.location}</span>
                </div>
              )}
              <div className="flex items-center">
                <VscCalendar className="mr-2" />
                <span>
                  Joined{' '}
                  {new Date(userData.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {userData.blog && (
                <a
                  href={userData.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <VscGlobe className="text-xl" />
                </a>
              )}
              {userData.twitter_username && (
                <a
                  href={`https://twitter.com/${userData.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FaTwitter className="text-xl" />
                </a>
              )}
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white">
                {userData.public_repos}
              </div>
              <div className="text-sm text-gray-400">Repositories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                {userData.followers}
              </div>
              <div className="text-sm text-gray-400">Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                {userData.following}
              </div>
              <div className="text-sm text-gray-400">Following</div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Profile Form */}
      <div className="bg-gray-800 rounded-lg p-4">
        <form onSubmit={handleUrlSubmit} className="flex gap-2">
          <input
            type="text"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="Load different profile (username or URL)"
            className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Load
          </button>
        </form>
      </div>

      {/* Repositories Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            {repos.length} repositories
          </h2>
        </div>

        <div className="space-y-3">
          {repos.map((repo) => (
            <GitHubRepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>

      {/* Language Statistics */}
      {Object.keys(languages).length > 0 && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
          <GitHubLanguageChart languages={languages} />
        </div>
      )}

      {/* GitHub Stats */}
      <GitHubStats userData={userData} repos={repos} />

      {/* Activity Chart */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Contribution Activity
        </h3>
        <GitHubActivityChart username={userData.login} />
      </div>
    </div>
  );
};

export default GitHubProjects;