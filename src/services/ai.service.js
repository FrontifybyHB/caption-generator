import { GoogleGenAI } from "@google/genai";
import config from '../config/config.js'
import { prompt } from "../prompts/prompt.js";

const ai = new GoogleGenAI({
    apiKey: config.GENAI_API_KEY,
});

export async function generateCaption(file) {
    const base64ImageFile = new Buffer.from(file.buffer).toString("base64");
    const contents = [
        {
            inlineData: {
                mimeType: file.mimetype,
                data: base64ImageFile,
            },
        },
        { text: "Caption this image." },

    ];
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config: {
            systemInstruction: prompt(),
        }
    });
    return response.text;
}