import "dotenv/config";
import { OpenAI } from "openai";
import { spiritualGuru } from "./systemPrompt.js";

const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

// const history = [];

const systemPrompt = spiritualGuru;
export default async function Agent(userInput,history) {
    const response = await openai.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
            {
                role: "system",
                content: systemPrompt,
            },
            ...history.map(entry => ({
                role: entry.role,
                content: entry.content
            })),
            {
                role:"user",
                content:userInput
            }
        ],
    });
    // history.push({ role: "assistant", content: JSON.stringify(response.choices[0].message.content) });
    // console.log(response.choices[0].message.content);
    console.log("agent is called .. returned the response");
    return response.choices[0].message.content;
}
// main("Hello, how are you?");
