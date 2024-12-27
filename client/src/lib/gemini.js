import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

// Define safety settings
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

// Initialize GoogleGenerativeAI with the API key from the environment
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PUBLIC_KEY);

// Get the generative model
let model;
try {
  model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    safetySettings,
  });
} catch (error) {
  console.error("Failed to initialize the generative model:", error);
}

export default model;
