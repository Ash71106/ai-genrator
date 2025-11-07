# AI README & API Docs Generator

A powerful web application that leverages the Google Gemini API to automatically generate professional README.md files and comprehensive API documentation for any public GitHub repository.

## Description

This tool is designed to save developers time and effort in documenting their projects. By simply providing a GitHub repository URL, our AI analyzes the project's conceptual structure and purpose to produce high-quality, well-structured documentation. This includes a detailed README file to get new users and contributors up to speed, and a plausible API documentation to showcase the project's potential endpoints.

## Features

-   **AI-Powered Content Generation:** Utilizes the advanced reasoning capabilities of the Gemini API to create relevant and accurate documentation.
-   **Comprehensive READMEs:** Generates README files with essential sections like Project Title, Description, Key Features, Installation, Usage, and more.
-   **Detailed API Docs:** Creates hypothetical but logical API documentation, including endpoints, HTTP methods, parameters, and example responses.
-   **Sleek & Responsive UI:** A clean, modern, and dark-themed user interface built with React and Tailwind CSS that works beautifully on all devices.
-   **Easy to Use:** A simple, single-input interface for a seamless user experience.
-   **Copy to Clipboard:** Quickly copy the generated Markdown content with a single click.

## Technologies Used

-   **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
-   **AI Model:** [Google Gemini API](https://ai.google.dev/gemini-api) (`@google/genai`)

## Setup for Developers

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ai-readme-generator.git
    cd ai-readme-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    This project requires a Google Gemini API key. The application is configured to read the key from the `process.env.API_KEY` environment variable. Ensure this variable is available in your development environment. For example, you can create a `.env` file in the root of the project:
    ```
    # .env
    API_KEY="your_google_gemini_api_key"
    ```
    *Note: You may need to configure your build tool (e.g., Vite, Webpack) to correctly expose environment variables to your client-side code.*

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application should now be running on your local development server.

## How to Use

1.  Navigate to the application URL in your web browser.
2.  Find a public GitHub repository you want to generate documentation for.
3.  Copy the URL of the repository (e.g., `https://github.com/username/repository`).
4.  Paste the URL into the input field on the web page.
5.  Click the **Generate** button.
6.  The AI will process your request. This may take a few moments.
7.  Once complete, the generated README.md and API Documentation will be displayed in separate cards.
8.  Use the **Copy** button on each card to copy the Markdown content to your clipboard.

---

Powered by the **Google Gemini API**.
