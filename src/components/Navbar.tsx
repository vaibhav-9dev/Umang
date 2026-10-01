import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { UmangLogo } from './UmangLogo';
import { useNavigation } from '../context/NavigationContext';

export const Navbar: React.FC = () => {
  const {
    currentRoute,
    navigateToHome,
    navigateToSports,
    navigateToAbout,
    navigateToTeam,
    navigateToContact,
  } = useNavigation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  const isActive = (route: string) => {
    if (route === 'sports' && (currentRoute === 'sports' || currentRoute === 'sport-detail')) return true;
    return currentRoute === route;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#01040E]/95 backdrop-blur-md border-b border-[#F5B81C]/25 shadow-2xl shadow-[#0B1D54]/30 py-2.5'
          : 'bg-gradient-to-b from-[#01040E]/95 via-[#020617]/80 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo & Wordmark */}
        <button
          onClick={navigateToHome}
          className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B81C]"
          aria-label="UMANG 2026 Home"
        >
          <UmangLogo size="sm" withGlow withRing />
          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-[#F8FAFC] group-hover:text-[#FFC72C] transition-colors whitespace-nowrap">
              UMANG &apos;26
            </span>
            <span className="font-cinzel text-[9px] uppercase tracking-[0.28em] text-[#94A3B8] group-hover:text-[#F5B81C] transition-colors">
              IIIT Bangalore · Olympus Reborn
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links with Active Highlighting */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button
            onClick={navigateToHome}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B81C] ${
              isActive('home') ? 'text-[#FFC72C] font-bold' : 'text-[#94A3B8] hover:text-[#F5B81C]'
            }`}
          >
            HOME
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#F5B81C] transition-all duration-300 ${
                isActive('home') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
          <button
            onClick={navigateToSports}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B81C] ${
              isActive('sports') ? 'text-[#FFC72C] font-bold' : 'text-[#94A3B8] hover:text-[#F5B81C]'
            }`}
          >
            SPORTS
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#F5B81C] transition-all duration-300 ${
                isActive('sports') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
          <button
            onClick={navigateToAbout}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B81C] ${
              isActive('about') ? 'text-[#FFC72C] font-bold' : 'text-[#94A3B8] hover:text-[#F5B81C]'
            }`}
          >
            ABOUT
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#F5B81C] transition-all duration-300 ${
                isActive('about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
          <button
            onClick={navigateToTeam}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B81C] ${
              isActive('team') ? 'text-[#FFC72C] font-bold' : 'text-[#94A3B8] hover:text-[#F5B81C]'
            }`}
          >
            SPORTS COMM TEAM
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#F5B81C] transition-all duration-300 ${
                isActive('team') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
          <button
            onClick={navigateToContact}
            className={`font-cinzel text-xs uppercase tracking-[0.22em] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B81C] ${
              isActive('contact') ? 'text-[#FFC72C] font-bold' : 'text-[#94A3B8] hover:text-[#F5B81C]'
            }`}
          >
            CONTACT & MAP
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#F5B81C] transition-all duration-300 ${
                isActive('contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </button>
        </nav>

        {/* Right: Primary Action (Register Now) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={navigateToSports}
            className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#01040E] bg-gradient-to-r from-[#FFE066] via-[#F5B81C] to-[#FFC72C] rounded-none border border-[#FFF4CE]/60 shadow-lg hover:shadow-[0_0_25px_rgba(245,184,28,0.55)] transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B81C]"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4 text-[#01040E]" />
          </button>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={navigateToSports}
            className="px-3.5 py-1.5 font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-[#01040E] bg-[#F5B81C] font-semibold active:scale-95"
          >
            REGISTER
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F8FAFC] hover:text-[#F5B81C] focus-visible:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#01040E]/98 border-b border-[#F5B81C]/30 px-6 py-6 mt-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-3.5 text-center">
            <div className="flex justify-center mb-2">
              <UmangLogo size="md" withGlow withRing />
            </div>
            <button
              onClick={() => handleLinkClick(navigateToHome)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('home') ? 'text-[#FFC72C] font-bold' : 'text-[#F8FAFC] hover:text-[#F5B81C]'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => handleLinkClick(navigateToSports)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('sports') ? 'text-[#FFC72C] font-bold' : 'text-[#F8FAFC] hover:text-[#F5B81C]'
              }`}
            >
              SPORTS
            </button>
            <button
              onClick={() => handleLinkClick(navigateToAbout)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('about') ? 'text-[#FFC72C] font-bold' : 'text-[#F8FAFC] hover:text-[#F5B81C]'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => handleLinkClick(navigateToTeam)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('team') ? 'text-[#FFC72C] font-bold' : 'text-[#F8FAFC] hover:text-[#F5B81C]'
              }`}
            >
              SPORTS COMM TEAM
            </button>
            <button
              onClick={() => handleLinkClick(navigateToContact)}
              className={`font-cinzel text-sm uppercase tracking-[0.25em] py-2 border-b border-white/5 ${
                isActive('contact') ? 'text-[#FFC72C] font-bold' : 'text-[#F8FAFC] hover:text-[#F5B81C]'
              }`}
            >
              CONTACT & MAP
            </button>

            <button
              onClick={() => handleLinkClick(navigateToSports)}
              className="mt-2 w-full py-3 font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#01040E] bg-gradient-to-r from-[#FFC72C] via-[#F5B81C] to-[#E6AA12] flex items-center justify-center gap-2"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
