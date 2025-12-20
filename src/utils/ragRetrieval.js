import { knowledgeChunks, systemPrompt } from '../data/knowledgeBase';

/**
 * Simple RAG retrieval system for client-side use
 * Uses keyword matching and basic semantic similarity
 */

// Normalize text for matching
const normalize = (text) => text.toLowerCase().replace(/[^\w\s]/g, '');

// Calculate keyword match score for a chunk
const getMatchScore = (query, chunk) => {
    const normalizedQuery = normalize(query);
    const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 2);

    let score = 0;

    // Check keyword matches (high weight)
    for (const keyword of chunk.keywords) {
        if (normalizedQuery.includes(keyword)) {
            score += 10;
        }
        // Partial word match
        for (const word of queryWords) {
            if (keyword.includes(word) || word.includes(keyword)) {
                score += 3;
            }
        }
    }

    // Check content matches (lower weight)
    const normalizedContent = normalize(chunk.content);
    for (const word of queryWords) {
        if (normalizedContent.includes(word)) {
            score += 1;
        }
    }

    return score;
};

/**
 * Retrieve relevant chunks based on user query
 * @param {string} query - User's question
 * @param {number} topK - Number of top chunks to return (default: 3)
 * @returns {string[]} - Array of relevant content chunks
 */
export const retrieveRelevantChunks = (query, topK = 3) => {
    // Score all chunks
    const scoredChunks = knowledgeChunks.map(chunk => ({
        ...chunk,
        score: getMatchScore(query, chunk)
    }));

    // Sort by score descending
    scoredChunks.sort((a, b) => b.score - a.score);

    // Filter chunks with score > 0 and take top K
    const relevantChunks = scoredChunks
        .filter(chunk => chunk.score > 0)
        .slice(0, topK);

    // If no matches found, return a default chunk (personal info)
    if (relevantChunks.length === 0) {
        const defaultChunk = knowledgeChunks.find(c => c.id === 'personal_info');
        return defaultChunk ? [defaultChunk.content] : [];
    }

    return relevantChunks.map(chunk => chunk.content);
};

/**
 * Build context for the LLM from retrieved chunks
 * @param {string} query - User's question
 * @returns {string} - Combined context string
 */
export const buildContext = (query) => {
    const chunks = retrieveRelevantChunks(query, 3);

    if (chunks.length === 0) {
        return "No specific information found. Please ask about Theshika's skills, experience, projects, or education.";
    }

    return chunks.join('\n\n---\n\n');
};

/**
 * Get the system prompt
 */
export const getSystemPrompt = () => systemPrompt;

/**
 * Estimate token count (rough approximation)
 * Average: 1 token ≈ 4 characters
 */
export const estimateTokens = (text) => Math.ceil(text.length / 4);
