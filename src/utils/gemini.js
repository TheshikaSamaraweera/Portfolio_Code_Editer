
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildContext, getSystemPrompt, estimateTokens } from "./ragRetrieval";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;

if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
    // Using Gemini 2.0 Flash which is the current stable fast model.
    model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
}

/**
 * Send message to Gemini using RAG architecture
 * Only sends relevant context chunks instead of the entire knowledge base
 */
export const sendMessageToGemini = async (history, message) => {
    if (!model) {
        if (!API_KEY) {
            return "Error: VITE_GEMINI_API_KEY is missing in .env file.";
        }
        // Initialize if key was added late
        genAI = new GoogleGenerativeAI(API_KEY);
        model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    }

    try {
        // RAG: Retrieve only relevant context based on the user's question
        const relevantContext = buildContext(message);
        const systemPrompt = getSystemPrompt();

        // Log token savings (for debugging - can remove in production)
        const contextTokens = estimateTokens(relevantContext);
        console.log(`📊 RAG: Using ~${contextTokens} tokens of context (instead of full 6000+)`);

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{
                        text: `${systemPrompt}

Here is the relevant context for answering the user's question:
---
${relevantContext}
---

Answer concisely based on this context.`
                    }]
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I'm ready to help with questions about Theshika based on the relevant context provided." }]
                },
                ...history
            ],
            generationConfig: {
                maxOutputTokens: 500, // Reduced since responses should be concise
            },
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Sorry, I encountered an error connecting to the AI service. Please try again later.";
    }
};
