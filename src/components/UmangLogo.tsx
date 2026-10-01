import React from 'react';
import logoImg from '../assets/images/umang_logo_2026_official.png';

export { logoImg as umangLogoImg };

interface UmangLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  withGlow?: boolean;
  withRing?: boolean;
  alt?: string;
}

export const UmangLogo: React.FC<UmangLogoProps> = ({
  className = '',
  size = 'md',
  withGlow = false,
  withRing = true,
  alt = "UMANG '26 Official Event Emblem - Olympus Reborn",
}) => {
  const sizeClasses = {
    xs: 'w-7 h-7',
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-32 h-32 sm:w-44 sm:h-44',
    '2xl': 'w-52 h-52 sm:w-72 sm:h-72',
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full select-none ${
        withRing ? 'p-[2px] bg-gradient-to-tr from-[#E6AA12] via-[#F5B81C] to-[#0D2260]' : ''
      } ${withGlow ? 'shadow-[0_0_35px_rgba(245,184,28,0.5),0_0_60px_rgba(13,34,96,0.65)]' : ''} ${className}`}
    >
      <img
        src={logoImg}
        alt={alt}
        className={`${sizeClasses} rounded-full object-cover filter contrast-[1.08] saturate-[1.05]`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
