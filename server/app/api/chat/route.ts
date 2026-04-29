import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const response = await openai.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "system",
          content:
            "You are an AI study assistant. Help users learn concepts simply.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return new Response(
      JSON.stringify({
        reply: response.choices[0].message.content,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  }
}