// netlify/functions/chat.js
import { HfInference } from "@huggingface/inference"

const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

export async function handler(event) {
  try {
    const body = JSON.parse(event.body)

    // Use Hugging Face SDK, just like you did locally
    const response = await hf.chatCompletion(body)

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
