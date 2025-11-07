
import React from 'react';
import { CopyButton } from './CopyButton';

interface ReadmeOutputProps {
  title: string;
  content: string;
}

export const ReadmeOutput: React.FC<ReadmeOutputProps> = ({ title, content }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg">
      <div className="flex justify-between items-center p-4 border-b border-slate-700">
        <h2 className="text-xl font-semibold text-cyan-400">{title}</h2>
        <CopyButton textToCopy={content} />
      </div>
      <div className="p-4 md:p-6">
        <pre className="bg-slate-900 p-4 rounded-md text-sm text-slate-300 overflow-x-auto whitespace-pre-wrap break-words">
          <code>{content}</code>
        </pre>
      </div>
    </div>
  );
};
