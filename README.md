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
