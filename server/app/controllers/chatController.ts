import { Request, Response } from "express";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const chatHandler = async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: "You are an AI study assistant." },
        { role: "user", content: message },
      ],
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};