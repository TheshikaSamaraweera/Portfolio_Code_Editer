
import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioContext } from "../data/portfolioContext";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;

if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
    // Note: There is no 'gemini-2.5-flash' yet. Using 1.5 Flash which is the current stable fast model.
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

export const sendMessageToGemini = async (history, message) => {
    if (!model) {
        if (!API_KEY) {
            return "Error: VITE_GEMINI_API_KEY is missing in .env file.";
        }
        // Initialize if key was added late (e.g. during session)
        genAI = new GoogleGenerativeAI(API_KEY);
        model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    }

    try {
        // Construct the full prompt context
        // We use a simple chat session approach or single-turn with history
        // For 1.5 Flash, passing system instruction in the chat start is best.

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{
                        text: `You are a helpful AI assistant for a developer's portfolio website. 
                    Here is the context about the developer and their resume:
                    ${portfolioContext}
                    
                    Answer questions based on this context. Be concise, professional, and friendly.
                    If the answer isn't in the context, say you don't know but suggest they contact the developer directly.` }]
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am ready to answer questions about the developer based on the provided context." }]
                },
                ...history
            ],
            generationConfig: {
                maxOutputTokens: 1000,
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
