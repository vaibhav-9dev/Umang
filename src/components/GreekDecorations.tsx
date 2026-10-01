import React from 'react';

/**
 * Classical Laurel Wreath SVG Icon
 */
export const LaurelWreath: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#F5B81C]" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M24 6C20 12 16 19 16 26C16 33 19 39 24 42C29 39 32 33 32 26C32 19 28 12 24 6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.3"
    />
    <path
      d="M24 42C17 42 10 36 8 28C6 20 10 13 14 8M10 24C8 22 7 19 8 16M11 31C9 30 7 28 8 25M15 37C13 36 11 34 11 31"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M24 42C31 42 38 36 40 28C42 20 38 13 34 8M38 24C40 22 41 19 40 16M37 31C39 30 41 28 40 25M33 37C35 36 37 34 37 31"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="24" cy="8" r="2.5" fill="currentColor" />
  </svg>
);

/**
 * Classical Greek Column SVG Graphic
 */
export const GreekColumnIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-12 text-[#F5B81C]" }) => (
  <svg viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Capital */}
    <path d="M2 6H22V8H2V6Z" fill="currentColor" opacity="0.9" />
    <path d="M4 8C4 8 3 11 7 11H17C21 11 20 8 20 8H4Z" stroke="currentColor" strokeWidth="1.2" />
    {/* Fluted shaft */}
    <line x1="6.5" y1="12" x2="6.5" y2="40" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    <line x1="10" y1="12" x2="10" y2="40" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
    <line x1="14" y1="12" x2="14" y2="40" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
    <line x1="17.5" y1="12" x2="17.5" y2="40" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    {/* Base */}
    <path d="M4 40H20V42H4V40Z" fill="currentColor" opacity="0.8" />
    <path d="M2 42H22V44H2V42Z" fill="currentColor" />
  </svg>
);

/**
 * Greek Meander Key Pattern Horizontal Strip matching the Umang '26 Logo
 */
export const GreekMeanderStrip: React.FC<{ className?: string; opacity?: string }> = ({ 
  className = "w-full h-3.5 text-[#F5B81C]",
  opacity = "opacity-75"
}) => (
  <div className={`overflow-hidden flex items-center justify-center ${className} ${opacity}`} aria-hidden="true">
    <svg className="w-full h-3.5" viewBox="0 0 400 14" fill="none" preserveAspectRatio="repeat">
      <pattern id="greek-meander" width="32" height="14" patternUnits="userSpaceOnUse">
        <path
          d="M0 13 H28 V2 H10 V9 H20 V6 H15"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </pattern>
      <rect width="100%" height="14" fill="url(#greek-meander)" />
    </svg>
  </div>
);

/**
 * Olympian Divider with Centered Emblem
 */
export const OlympianDivider: React.FC<{ title?: string }> = ({ title }) => (
  <div className="flex items-center justify-center w-full max-w-xl mx-auto my-8 gap-4 px-4" aria-hidden="true">
    <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#F5B81C]/40 to-[#F5B81C]" />
    <div className="flex items-center gap-2 text-[#F5B81C]">
      <span className="w-1.5 h-1.5 rotate-45 bg-[#F5B81C]" />
      {title ? (
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#FFC72C] px-2 font-bold">
          {title}
        </span>
      ) : (
        <LaurelWreath className="w-5 h-5 text-[#F5B81C]" />
      )}
      <span className="w-1.5 h-1.5 rotate-45 bg-[#F5B81C]" />
    </div>
    <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#F5B81C]/40 to-[#F5B81C]" />
  </div>
);
