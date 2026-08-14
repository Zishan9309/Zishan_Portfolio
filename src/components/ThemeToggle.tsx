import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label="Toggle light/dark theme"
      className={`p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
        isDark
          ? 'bg-slate-800/80 text-amber-400 hover:bg-slate-700 hover:text-amber-300 border border-slate-700/60'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-sky-600 border border-slate-300'
      }`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform hover:rotate-45 duration-300" />
      ) : (
        <Moon className="w-5 h-5 transition-transform hover:-rotate-12 duration-300" />
      )}
    </button>
  );
};
