import React from 'react';
import { ChevronDown, ArrowRight, Calendar, Trophy } from 'lucide-react';
import { LaurelWreath, GreekMeanderStrip } from './GreekDecorations';
import { UmangLogo } from './UmangLogo';
import heroBgImage from '../assets/images/olympus_hero_cinematic_1790530158793.jpg';

interface HeroProps {
  onExploreSports: () => void;
  onRegisterNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSports, onRegisterNow }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-12">
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
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#01040E] via-[#01040E]/80 to-transparent" />
      </div>

      {/* Decorative Classical Borders */}
      <div className="absolute top-16 left-0 right-0 z-10 pointer-events-none">
        <GreekMeanderStrip className="w-full h-4 text-[#F5B81C]" opacity="opacity-45" />
      </div>

      {/* Main Hero Content - Split Layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Logo & UMANG '26 */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
            {/* Official Umang '26 Medallion Logo */}
            <div className="animate-in fade-in zoom-in duration-500 mb-3">
              <UmangLogo size="xl" withGlow withRing className="hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Below Logo: UMANG '26 */}
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black tracking-[0.2em] text-[#F8FAFC] uppercase leading-tight drop-shadow-md">
              UMANG &apos;26
            </h2>

            {/* IIIT Bangalore Presenter Badge */}
            <div className="inline-flex items-center gap-2 mt-2 px-3.5 py-1 border-y border-[#F5B81C]/40 bg-[#020617]/85 backdrop-blur-md shadow-md">
              <LaurelWreath className="w-3.5 h-3.5 text-[#F5B81C]" />
              <span className="font-cinzel text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#FFC72C] uppercase">
                IIIT BANGALORE
              </span>
              <LaurelWreath className="w-3.5 h-3.5 text-[#F5B81C] scale-x-[-1]" />
            </div>

            {/* Grand Olympian Prize Pool Plaque below Umang Logo */}
            <div className="mt-5 relative group w-full max-w-[340px]">
              {/* Radiant Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F5B81C]/35 via-[#FFE066]/25 to-[#0B1D54]/50 rounded-sm blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* The Plaque Card */}
              <div className="relative px-4 py-3 sm:px-5 sm:py-3.5 bg-gradient-to-r from-[#03091F]/95 via-[#07123A]/90 to-[#020617]/95 border border-[#F5B81C]/65 shadow-[0_0_35px_rgba(245,184,28,0.3),inset_0_0_25px_rgba(245,184,28,0.1)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#FFC72C] group-hover:shadow-[0_0_45px_rgba(245,184,28,0.5)]">
                {/* Classical Greek Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FFE066]" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FFE066]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FFE066]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FFE066]" />

                <div className="flex items-center justify-center gap-3.5 sm:gap-4">
                  {/* Radiant Trophy Medallion */}
                  <div className="relative shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#FFE066] via-[#F5B81C] to-[#996E24] p-[2px] shadow-[0_0_18px_rgba(245,184,28,0.55)] group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-[#01040E] flex items-center justify-center">
                      <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFC72C] filter drop-shadow-[0_0_8px_rgba(245,184,28,0.85)]" />
                    </div>
                  </div>

                  {/* Typography & Prize Value */}
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1 mb-0.5">
                      <LaurelWreath className="w-3 h-3 text-[#F5B81C]" />
                      <span className="font-cinzel text-[10px] font-bold uppercase tracking-[0.24em] text-[#FFC72C]">
                        GRAND PRIZE POOL
                      </span>
                      <LaurelWreath className="w-3 h-3 text-[#F5B81C] scale-x-[-1]" />
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-cinzel text-2xl sm:text-3xl font-black text-gold-gradient tracking-tight drop-shadow-[0_2px_15px_rgba(245,184,28,0.6)] leading-none">
                        ₹3,00,000
                      </span>
                      <span className="font-cinzel text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-[#94A3B8] whitespace-nowrap">
                        CASH &amp; TROPHIES
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Olympus Reborn & Action Buttons */}
         {/* Right Side: Olympus Reborn & Action Buttons */}
<div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
  {/* Institution Presenter Tagline at top of Olympus Reborn */}
  <div className="flex items-center gap-2 mb-2 sm:mb-3">
    <span className="w-4 h-[1px] bg-white/60 hidden sm:inline-block" />

    <p className="font-cinzel text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-white leading-snug drop-shadow-md">
      INTERNATIONAL INSTITUTE OF INFORMATION TECHNOLOGY BANGALORE PRESENTS
    </p>
  </div>
            {/* Olympus Reborn Headline */}
            <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-black tracking-[0.1em] uppercase leading-[0.95] text-gold-gradient drop-shadow-2xl mb-3">
              OLYMPUS
              <span className="block text-[#F8FAFC] font-black tracking-[0.12em] text-3xl sm:text-5xl lg:text-6xl mt-1">
                REBORN
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#94A3B8] font-light leading-relaxed max-w-lg mb-5">
              A celebration of collegiate athleticism, unyielding honor, and campus spirit across IIIT Bangalore. Step onto the courts and fields to showcase your sporting excellence.
            </p>

            {/* Festival Dates Callout above Register Button */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-5 bg-[#03091F]/90 border border-[#F5B81C]/50 shadow-[0_0_20px_rgba(245,184,28,0.25)] backdrop-blur-md">
              <Calendar className="w-4 h-4 text-[#F5B81C] shrink-0" />
              <p className="font-cinzel text-xs sm:text-sm md:text-base font-bold text-[#FFC72C] tracking-wide">
                Join us for Umang on Oct 30 &amp; 31, Nov 1!
              </p>
            </div>

            {/* Action Buttons (REGISTER NOW and EXPLORE SPORTS) */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onRegisterNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#01040E] bg-gradient-to-r from-[#FFE066] via-[#F5B81C] to-[#FFC72C] border border-[#FFF4CE]/70 shadow-[0_0_30px_rgba(245,184,28,0.5)] hover:shadow-[0_0_45px_rgba(245,184,28,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4 text-[#01040E]" />
              </button>

              <button
                onClick={onExploreSports}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 font-cinzel text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#F8FAFC] bg-[#020617]/90 hover:bg-[#07123A] border border-[#F5B81C]/40 hover:border-[#F5B81C] hover:text-[#FFC72C] transition-all duration-300 cursor-pointer shadow-lg"
              >
                <span>EXPLORE SPORTS</span>
              </button>
            </div>
          </div>

        </div>

        {/* Subtle Scroll Down Affordance */}
        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={onExploreSports}
            className="inline-flex flex-col items-center gap-1 text-[#94A3B8]/70 hover:text-[#F5B81C] transition-colors group cursor-pointer focus:outline-none"
            aria-label="Scroll to introduction and sports"
          >
            <span className="font-cinzel text-[9px] uppercase tracking-[0.3em]">
              SCROLL TO ENTER
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#F5B81C]" />
          </button>
        </div>
      </div>

      {/* Bottom Greek Edge Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <GreekMeanderStrip className="w-full h-4 text-[#F5B81C]" opacity="opacity-35" />
      </div>
    </section>
  );
};
