import React from 'react';

interface SkillLogoProps {
  name: string;
  className?: string;
}

export const SkillLogo: React.FC<SkillLogoProps> = ({ name, className = 'w-4 h-4' }) => {
  const norm = name.toLowerCase().trim();

  // Python
  if (norm.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.3 4C35.8 4 37.5 15.9 37.5 15.9l.03 12.3h26.3v3.7H20.2S4 30.1 4 57.7c0 27.5 14.2 26.5 14.2 26.5h8.5V72c0-14.7 12.7-14.3 12.7-14.3h26.4c12.3 0 11.9-11.7 11.9-11.7V15.9S78.2 4 63.3 4zm-14.4 7.7a3.8 3.8 0 110 7.7 3.8 3.8 0 010-7.7z" fill="#387EB8" />
        <path d="M64.7 124c27.5 0 25.8-11.9 25.8-11.9l-.03-12.3H64.2v-3.7h43.6s16.2 1.8 16.2-25.8c0-27.5-14.2-26.5-14.2-26.5h-8.5v12.2c0 14.7-12.7 14.3-12.7 14.3H62.2c-12.3 0-11.9 11.7-11.9 11.7v30.1s-4.5 11.9 14.4 11.9zm14.4-7.7a3.8 3.8 0 110-7.7 3.8 3.8 0 010 7.7z" fill="#FFE052" />
      </svg>
    );
  }

  // SQL / MySQL
  if (norm === 'sql') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="#38bdf8" fillOpacity="0.2" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  if (norm.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#00758F" />
        <path d="M6 16c2-4 5-6 10-6m-9 6c2-1 4-1 6-1 3 0 5 1 5 1m-10-3c1-2 3-3 5-3" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="9" r="1.2" fill="#ffffff" />
      </svg>
    );
  }

  // JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M8 11v6c0 1.5-.8 2-2 2H5m8-8h2.5c1.5 0 2.5 1 2.5 2s-.5 1.8-1.5 2c1.5.3 2 1.2 2 2.2 0 1.5-1.2 2.3-2.8 2.3H13V11z" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5 8h6m-3 0v10m6-6.5c1-.5 2-.5 3 0s1.5 1.5 1.5 2.5-1 2.5-2.5 2.5-2 .5-2 1.5 1 1.5 2.5 1.5 2.5-.5 3-1" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Power BI
  if (norm.includes('power bi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F2C811" />
        <rect x="5" y="13" width="3" height="7" rx="1" fill="#242424" />
        <rect x="10.5" y="9" width="3" height="11" rx="1" fill="#242424" />
        <rect x="16" y="5" width="3" height="15" rx="1" fill="#242424" />
      </svg>
    );
  }

  // DAX
  if (norm.includes('dax')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#E08316" />
        <text x="4.5" y="16.5" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="monospace">f(x)</text>
      </svg>
    );
  }

  // Pandas
  if (norm.includes('pandas')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#150458" />
        <rect x="5" y="6" width="3" height="12" fill="#E70488" />
        <rect x="10.5" y="10" width="3" height="8" fill="#FFD43B" />
        <rect x="16" y="6" width="3" height="12" fill="#130754" />
        <rect x="16" y="6" width="3" height="7" fill="#00D2B6" />
      </svg>
    );
  }

  // NumPy
  if (norm.includes('numpy')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#013243" />
        <path d="M6 17V7l6 5V7l6 5v5l-6-5v5z" fill="#4DABCF" />
      </svg>
    );
  }

  // Scikit-learn
  if (norm.includes('scikit') || norm.includes('sklearn')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F89939" />
        <circle cx="12" cy="12" r="6" fill="#3499CD" />
        <circle cx="12" cy="12" r="3" fill="#ffffff" />
        <path d="M12 4v4m0 8v4M4 12h4m8 0h4" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
    );
  }

  // Plotly
  if (norm.includes('plotly')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#111625" />
        <rect x="4" y="14" width="2.5" height="6" rx="1" fill="#3F4F75" />
        <rect x="8" y="10" width="2.5" height="10" rx="1" fill="#8C9CB8" />
        <rect x="12" y="5" width="2.5" height="15" rx="1" fill="#38BDF8" />
        <rect x="16" y="12" width="2.5" height="8" rx="1" fill="#10B981" />
      </svg>
    );
  }

  // Streamlit
  if (norm.includes('streamlit')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#FF4B4B" fillOpacity="0.15" />
        <path d="M12 4L16.5 12L19.5 7L21 20H3L4.5 16L7.5 20L12 4Z" fill="#FF4B4B" />
      </svg>
    );
  }

  // React & React Native
  if (norm.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.4" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.4" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
      </svg>
    );
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z" fill="#339933" />
        <path d="M12 6.5l5 2.9v5.8l-5 2.9-5-2.9V9.4l5-2.9z" fill="#ffffff" fillOpacity="0.3" />
      </svg>
    );
  }

  // Express
  if (norm.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#222222" />
        <text x="3.5" y="16.5" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">ex</text>
      </svg>
    );
  }

  // MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 6 8 6 14C6 17.5 8.5 20.5 11.5 21.8V22H12.5V21.8C15.5 20.5 18 17.5 18 14C18 8 12 2 12 2Z" fill="#47A248" />
        <path d="M12 2V21.8C11.8 21.9 11.6 22 11.5 22V2Z" fill="#13AA52" />
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
      </svg>
    );
  }

  // HTML / CSS
  if (norm.includes('html') || norm.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#E44D26" />
        <path d="M6 5l1.2 13.5L12 20l4.8-1.5L18 5H6zm9.5 4h-6l.2 2.5h5.5l-.5 5-2.7.8-2.7-.8-.2-2.5h2.2l.1 1.2 1.4.4 1.4-.4.2-2.2H9.3L8.8 7h7.2l-.5 2z" fill="#ffffff" />
      </svg>
    );
  }

  // Postman
  if (norm.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" fill="#ffffff" />
      </svg>
    );
  }

  // REST APIs
  if (norm.includes('rest') || norm.includes('api')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    );
  }

  // PHP
  if (norm.includes('php')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
        <text x="4.5" y="15" fill="#ffffff" fontSize="8.5" fontWeight="900" fontFamily="sans-serif">PHP</text>
      </svg>
    );
  }

  // Generative AI / LLMs
  if (norm.includes('generative') || norm.includes('genai') || norm.includes('llm')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#8B5CF6" />
        <path d="M12 4l1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4z" fill="#ffffff" />
        <circle cx="17.5" cy="5.5" r="1.5" fill="#FCD34D" />
        <circle cx="6.5" cy="16.5" r="1.5" fill="#38BDF8" />
      </svg>
    );
  }

  // LangChain
  if (norm.includes('langchain')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00A67E" />
        <path d="M7 12h10M7 8h5M12 16h5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="6" cy="12" r="2" fill="#ffffff" />
        <circle cx="18" cy="12" r="2" fill="#ffffff" />
      </svg>
    );
  }

  // LlamaIndex
  if (norm.includes('llamaindex') || norm.includes('llama')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#8B5CF6" />
        <path d="M8 18v-8l3-3 2 1 2-2 2 2v10h-9z" fill="#ffffff" />
        <circle cx="15" cy="9" r="1" fill="#8B5CF6" />
      </svg>
    );
  }

  // RAG Architecture
  if (norm.includes('rag')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h16M4 18h10" />
        <polyline points="14 15 18 19 22 15" />
      </svg>
    );
  }

  // Groq
  if (norm.includes('groq')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F55036" />
        <path d="M13 3L4 14h7v7l9-11h-7V3z" fill="#ffffff" />
      </svg>
    );
  }

  // ChromaDB
  if (norm.includes('chroma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E293B" />
        <circle cx="8" cy="8" r="3.5" fill="#EC4899" />
        <circle cx="16" cy="8" r="3.5" fill="#3B82F6" />
        <circle cx="12" cy="16" r="3.5" fill="#10B981" />
      </svg>
    );
  }

  // FAISS
  if (norm.includes('faiss')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0080FF" />
        <path d="M6 6h12v3H6zm0 5h8v3H6zm0 5h10v3H6z" fill="#ffffff" />
      </svg>
    );
  }

  // Git
  if (norm === 'git') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.6 10.9L13.1 2.4a1.7 1.7 0 00-2.4 0L8.3 4.8l3.1 3.1a2 2 0 012.5 2.5l3 3a2 2 0 11-1.2 1.2l-3-3v4.6a2 2 0 11-1.7 0V11a2 2 0 01-1-2.6L7.9 5.3 2.4 10.8a1.7 1.7 0 000 2.4l8.5 8.5a1.7 1.7 0 002.4 0l8.3-8.3a1.7 1.7 0 000-2.5z" fill="#F05032" />
      </svg>
    );
  }

  // GitHub
  if (norm.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  // VS Code
  if (norm.includes('vs code') || norm.includes('vscode')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2L5 13.5l4 3.7L17.5 2z" fill="#0065A9" />
        <path d="M17.5 22L5 10.5l4-3.7L17.5 22z" fill="#007ACC" />
        <path d="M17.5 2l4.5 2.2v15.6L17.5 22V2z" fill="#1F9CF0" />
        <path d="M2 12l3-2.5v5L2 12z" fill="#007ACC" />
      </svg>
    );
  }

  // Jupyter
  if (norm.includes('jupyter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="9" ry="3.5" fill="#F37626" />
        <ellipse cx="12" cy="17" rx="9" ry="3.5" fill="#9E9E9E" />
        <circle cx="5" cy="12" r="1.5" fill="#F37626" />
        <circle cx="19" cy="12" r="1.5" fill="#616161" />
      </svg>
    );
  }

  // Firebase
  if (norm.includes('firebase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 18.5L8.5 4l4 7.5-3.5 7z" fill="#FFC400" />
        <path d="M20 18.5L16 8l-3.5 3.5 7.5 7z" fill="#FFA000" />
        <path d="M4 18.5l8 4.5 8-4.5-7.5-7L4 18.5z" fill="#FF8F00" />
      </svg>
    );
  }

  // Default code icon fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
