import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { useNavigation } from '../context/NavigationContext';

export const ContactPage: React.FC = () => {
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
              CONTACT & MAP
            </span>
          </div>
          <span className="text-[11px] text-[#94A3B8] tracking-widest uppercase">
            ELECTRONIC CITY · BENGALURU
          </span>
        </div>
      </div>

      {/* Main Contact Section: Coordinators, Satellite View, & Instagram */}
      <ContactSection />
    </div>
  );
};
