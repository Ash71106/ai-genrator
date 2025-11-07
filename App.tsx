
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { RepoInput } from './components/RepoInput';
import { ReadmeOutput } from './components/ReadmeOutput';
import { Loader } from './components/Loader';
import { generateReadmeAndApiDocs } from './services/geminiService';
import type { GeneratedContent } from './types';

const App: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState<string>('');
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async (url: string) => {
    if (!url) {
      setError('Please enter a GitHub repository URL.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedContent(null);
    try {
      const content = await generateReadmeAndApiDocs(url);
      setGeneratedContent(content);
    } catch (err) {
      setError(err instanceof Error ? `Failed to generate content: ${err.message}` : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-slate-400 mb-8">
            Enter a public GitHub repository URL, and our AI will generate a professional README.md file and suggest API documentation for your project.
          </p>
          <RepoInput
            onGenerate={handleGenerate}
            isLoading={isLoading}
            repoUrl={repoUrl}
            setRepoUrl={setRepoUrl}
          />

          {isLoading && <Loader />}

          {error && (
            <div className="mt-8 bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-center" role="alert">
              <p>{error}</p>
            </div>
          )}

          {generatedContent && !isLoading && (
            <div className="mt-12 space-y-10">
              <ReadmeOutput title="Generated README.md" content={generatedContent.readme} />
              <ReadmeOutput title="Generated API Documentation" content={generatedContent.apiDocs} />
            </div>
          )}
        </div>
      </main>
      <footer className="text-center py-6 text-slate-500">
        <p>Powered by Gemini API</p>
      </footer>
    </div>
  );
};

export default App;
