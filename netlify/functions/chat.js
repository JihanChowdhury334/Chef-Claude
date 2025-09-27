// netlify/functions/chat.js

export async function handler(event) {
  try {
    const body = JSON.parse(event.body);

    const response = await fetch("https://router.huggingface.co/together/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.VITE_HF_ACCESS_TOKEN}`, // your env var
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
