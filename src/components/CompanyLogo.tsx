import React from 'react';

interface CompanyLogoProps {
  company: string;
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ company, className = 'w-11 h-11' }) => {
  const comp = company.toLowerCase();

  if (comp.includes('infosys') || comp.includes('springboard')) {
    return (
      <div
        className={`${className} rounded-xl bg-white border border-slate-200 dark:border-slate-700/80 p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden`}
        title="Infosys Springboard"
      >
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full object-contain"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definitions for split wave gradient / clip */}
          <defs>
            <clipPath id="springboard-top-clip">
              <path d="M 0 0 L 200 0 L 200 78 Q 150 72 100 84 Q 50 96 0 88 Z" />
            </clipPath>
            <clipPath id="springboard-bottom-clip">
              <path d="M 0 88 Q 50 96 100 84 Q 150 72 200 78 L 200 120 L 0 120 Z" />
            </clipPath>
          </defs>

          {/* "Infosys" text */}
          <text
            x="10"
            y="52"
            fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
            fontSize="48"
            fontWeight="700"
            letterSpacing="-1.5"
            fill="#007cc3"
          >
            Infosys
          </text>

          {/* "Springboard" - Top half (Blue) */}
          <g clipPath="url(#springboard-top-clip)">
            <text
              x="10"
              y="108"
              fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
              fontSize="38"
              fontWeight="800"
              letterSpacing="-0.5"
              fill="#007cc3"
            >
              Springboard
            </text>
          </g>

          {/* "Springboard" - Bottom half (Orange/Coral) */}
          <g clipPath="url(#springboard-bottom-clip)">
            <text
              x="10"
              y="108"
              fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
              fontSize="38"
              fontWeight="800"
              letterSpacing="-0.5"
              fill="#f15a24"
            >
              Springboard
            </text>
          </g>

          {/* Springboard Orange Dot for 'i' */}
          <circle cx="61" cy="74" r="4.5" fill="#f15a24" />

          {/* Subtle Wave Division Line */}
          <path
            d="M 10 90 Q 55 98 105 86 Q 155 74 195 80"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  if (comp.includes('fiverr')) {
    return (
      <div
        className={`${className} rounded-xl bg-[#1dbf73]/10 border border-[#1dbf73]/30 p-1.5 flex items-center justify-center shrink-0 shadow-sm`}
        title="Fiverr Freelance"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#1dbf73" />
          {/* Fiverr 'fi' mark with dot */}
          <text
            x="24"
            y="68"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="54"
            fontWeight="900"
            fill="#ffffff"
            letterSpacing="-2"
          >
            fi
          </text>
          <circle cx="78" cy="62" r="7" fill="#10b981" stroke="#ffffff" strokeWidth="4" />
        </svg>
      </div>
    );
  }

  return null;
};
