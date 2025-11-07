
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';

interface RepoInputProps {
  onGenerate: (url: string) => void;
  isLoading: boolean;
  repoUrl: string;
  setRepoUrl: (url: string) => void;
}

export const RepoInput: React.FC<RepoInputProps> = ({ onGenerate, isLoading, repoUrl, setRepoUrl }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(repoUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <GithubIcon className="h-6 w-6 text-slate-500" />
        </div>
        <input
          type="url"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="https://github.com/username/repository"
          className="w-full bg-slate-800 border border-slate-600 rounded-md py-3 pl-12 pr-4 text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200 placeholder:text-slate-500"
          disabled={isLoading}
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto flex-shrink-0 bg-cyan-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Generating...</span>
          </>
        ) : (
          <span>Generate</span>
        )}
      </button>
    </form>
  );
};
