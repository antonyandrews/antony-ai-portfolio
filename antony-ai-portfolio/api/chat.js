import OpenAI from "openai";

export const config = {
  runtime: "edge"
};

const context = `
You are Antony's AI portfolio assistant.

About Antony:
- Angular developer with 9 years experience
- Associate Tech Lead
- Expert in Angular, Node.js, AI integrations
- Builds enterprise architectures
- Available for freelance and consulting
`;

export default async function handler(req) {
  try {
    const { message } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Antony's AI portfolio assistant." },
        { role: "user", content: message }
      ],
      stream: true
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      }
    });

    return new Response(stream);

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}