import React from 'react';
import { TeamSection } from '../components/TeamSection';
import { useNavigation } from '../context/NavigationContext';
import { LaurelWreath, GreekColumnIcon, OlympianDivider } from '../components/GreekDecorations';

export const TeamPage: React.FC = () => {
  const { navigateToHome } = useNavigation();

  return (
    <div className="min-h-screen bg-[#01040E] text-[#F8FAFC] pt-16 sm:pt-20 pb-8">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3">
        <div className="flex items-center justify-between py-2 border-b border-[#F5B81C]/20 text-xs font-cinzel">
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <button onClick={navigateToHome} className="hover:text-[#F5B81C] transition-colors uppercase tracking-wider cursor-pointer">
              HOME
            </button>
            <span className="text-[#F5B81C]/50">/</span>
            <span className="text-[#FFC72C] font-bold uppercase tracking-wider">
              SPORTS COMM & TEAMS
            </span>
          </div>
          <span className="text-[11px] text-[#94A3B8] tracking-widest uppercase">
            SPORTS COMM · WEBSITE TEAM · DESIGN TEAM
          </span>
        </div>
      </div>

      {/* Main Team Section with Member Photos, Mobile Numbers, & Hover Socials */}
      <TeamSection />
    </div>
  );
};
