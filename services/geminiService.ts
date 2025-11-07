import { GoogleGenAI, Type } from '@google/genai';
import type { GeneratedContent } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const schema = {
  type: Type.OBJECT,
  properties: {
    readme: {
      type: Type.STRING,
      description: "A complete, well-structured README.md file in Markdown format. It must include sections for Project Title, a concise Description, Key Features (as a bulleted list), Installation instructions (using code blocks for commands), Usage examples (with code blocks), Technologies Used, and a Contributing guide.",
    },
    apiDocs: {
      type: Type.STRING,
      description: "Detailed API documentation in Markdown format. Based on the project's purpose, create a plausible API. It should include sections for Introduction, Authentication, at least two example Endpoints, and Error Handling. Each endpoint must specify the HTTP Method (e.g., GET, POST), the URL path, a description, URL Parameters or Request Body (with data types), and an example JSON response in a code block. The Error Handling section should list common HTTP status codes (e.g., 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error) and explain what they mean in the context of this API.",
    },
  },
  required: ['readme', 'apiDocs'],
};

export const generateReadmeAndApiDocs = async (repoUrl: string): Promise<GeneratedContent> => {
  try {
    const prompt = `
      Analyze the conceptual structure and purpose of a project located at the GitHub repository URL: "${repoUrl}".
      Based on this analysis, generate two documents:
      1. A comprehensive README.md file.
      2. A detailed API documentation.

      The README should be professional, clear, and provide all necessary information for a new developer to understand and use the project.
      The API documentation should be hypothetical but logical for the type of project, outlining potential endpoints and their usage.

      Provide the output in the specified JSON format. Ensure the markdown formatting is clean and correct.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: schema,
      },
    });
    
    const jsonString = response.text;
    const parsedContent = JSON.parse(jsonString);

    if (parsedContent.readme && parsedContent.apiDocs) {
      return parsedContent as GeneratedContent;
    } else {
      throw new Error("Received incomplete data from the API.");
    }

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to communicate with the AI model. Please check your API key and try again.");
  }
};
