import React from 'react';
import { ChevronDown, ArrowRight, Trophy } from 'lucide-react';
import { LaurelWreath, GreekMeanderStrip } from './GreekDecorations';
import { UmangLogo } from './UmangLogo';
import heroBgImage from '../assets/images/olympus_hero_cinematic_1790530158793.jpg';

interface HeroProps {
  onExploreSports: () => void;
  onRegisterNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSports, onRegisterNow }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with High Clarity & Deep Dark Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgImage}
          alt="Mount Olympus with majestic classical Greek temple columns and golden sunlight breaking through clouds"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in filter brightness-115 contrast-120 saturate-110"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Dark Vignette: Keeps center temple and golden sky bright and clear while fading into dark edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/20 to-[#01040E]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,4,14,0.1)_0%,rgba(1,4,14,0.65)_90%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#01040E] via-[#01040E]/80 to-transparent" />
      </div>

      {/* Decorative Classical Borders */}
      <div className="absolute top-20 left-0 right-0 z-10 pointer-events-none">
        <GreekMeanderStrip className="w-full h-3 text-[#F5B81C]" opacity="opacity-45" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Umang '26 Medallion Logo (Remains Untouched) */}
        <div className="mb-4 animate-in fade-in zoom-in duration-500">
          <UmangLogo size="xl" withGlow withRing className="hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Pre-title Label */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-3 border-y border-[#F5B81C]/40 bg-[#020617]/85 backdrop-blur-md shadow-lg shadow-[#01040E]">
          <LaurelWreath className="w-4 h-4 text-[#F5B81C]" />
          <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#FFC72C] uppercase">
            IIIT BANGALORE PRESENTS
          </span>
          <LaurelWreath className="w-4 h-4 text-[#F5B81C] scale-x-[-1]" />
        </div>

        {/* Classical Motto */}
        <p className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#F5B81C]/90 mb-1">
          CITIUS · ALTIUS · FORTIUS · COMMUNITER
        </p>

        {/* Festival Title */}
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl tracking-[0.35em] text-[#F8FAFC]/90 uppercase font-medium mb-2">
          UMANG 2026
        </h2>

        {/* Monumental Theme Heading */}
        <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.12em] uppercase leading-[0.95] text-gold-gradient drop-shadow-2xl my-2">
          OLYMPUS
          <span className="block text-[#F8FAFC] font-black tracking-[0.14em] text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-1">
            REBORN
          </span>
        </h1>

        {/* Canonical Sports from the Official Logo Emblem */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-4">
          {['VOLLEYBALL', 'FOOTBALL', 'BADMINTON', 'BASKETBALL'].map((sport) => (
            <span
              key={sport}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#03091F]/90 border border-[#F5B81C]/35 text-[10px] sm:text-xs font-cinzel tracking-[0.18em] text-[#F8FAFC] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B81C]" />
              {sport}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0B1D54]/70 border border-[#F5B81C]/45 text-[10px] sm:text-xs font-cinzel tracking-[0.18em] text-[#FFE066] uppercase font-bold">
            <Trophy className="w-3 h-3 text-[#F5B81C]" />
            & 10+ MORE ARENAS
          </span>
        </div>

        {/* Description & Supporting Text */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-2xl mx-auto font-light leading-relaxed mt-2 mb-8">
          A celebration of collegiate athleticism, unyielding honor, and campus spirit across IIIT Bangalore. Step onto the courts and fields and showcase your sporting excellence.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onRegisterNow}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#01040E] bg-gradient-to-r from-[#FFE066] via-[#F5B81C] to-[#FFC72C] border border-[#FFF4CE]/70 shadow-[0_0_30px_rgba(245,184,28,0.5)] hover:shadow-[0_0_45px_rgba(245,184,28,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 text-[#01040E]" />
          </button>

          <button
            onClick={onExploreSports}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 font-cinzel text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#F8FAFC] bg-[#020617]/90 hover:bg-[#07123A] border border-[#F5B81C]/40 hover:border-[#F5B81C] hover:text-[#FFC72C] transition-all duration-300 cursor-pointer shadow-lg"
          >
            <span>EXPLORE SPORTS</span>
          </button>
        </div>

        {/* Subtle Scroll Down Affordance */}
        <button
          onClick={onExploreSports}
          className="mt-12 inline-flex flex-col items-center gap-2 text-[#94A3B8]/70 hover:text-[#F5B81C] transition-colors group cursor-pointer focus:outline-none"
          aria-label="Scroll to introduction and sports"
        >
          <span className="font-cinzel text-[10px] uppercase tracking-[0.3em]">
            SCROLL TO ENTER
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#F5B81C]" />
        </button>
      </div>

      {/* Bottom Greek Edge Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <GreekMeanderStrip className="w-full h-2 text-[#F5B81C]" opacity="opacity-35" />
      </div>
    </section>
  );
};
