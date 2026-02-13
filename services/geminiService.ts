import { GoogleGenAI } from "@google/genai";

export const getRastaWisdom = async (userPrompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are Ruff Rasta, a legendary Reggae and Dancehall artist with deep roots and a modern edge. Speak with a charismatic Jamaican patois influence, but remain professional and inspiring. Give 'Rasta Wisdom' or vibes based on fan messages. Keep it under 100 words.",
        temperature: 0.8,
      },
    });
    return response.text || "Jah guide, the words are still forming in the wind...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The signal from Zion is weak, try again later, fam.";
  }
};