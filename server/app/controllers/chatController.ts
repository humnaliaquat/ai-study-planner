import { Request, Response } from "express";
import OpenAI from "openai";

export const chatHandler = async (req: Request, res: Response) => {
  const openai = new OpenAI({
    apiKey: process.env.API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });

  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
    model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are an AI study assistant." },
        { role: "user", content: message },
      ],
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error: any) {
  console.error("FULL ERROR:", error);   // 👈 add this
  res.status(500).json({ error: error.message || "Something went wrong" });
}
};