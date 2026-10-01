import React from 'react';
import { GreekColumnIcon, LaurelWreath, OlympianDivider } from './GreekDecorations';
import greekStatueImg from '../assets/images/olympus_greek_statue_1790530183863.jpg';
import olympusArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';
import { TOTAL_SPORTS_COUNT, TOTAL_EVENTS_COUNT } from '../data/sportsData';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#01040E] overflow-hidden" id="intro">
      {/* Background Olympian Athletics Arena with crisp high visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={olympusArenaImg}
          alt="Ancient Olympian Athletics Arena"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-120 saturate-110 opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/30 to-[#01040E]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,4,14,0.15)_0%,rgba(1,4,14,0.7)_88%)]" />
      </div>

      {/* Royal sapphire radial backdrop accent in deep dark night */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0B1D54]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Classical Pillar & Statue Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Classical Frame */}
              <div className="relative p-2 border border-[#F5B81C]/35 bg-[#03091F]/90 shadow-2xl">
                {/* Corner Accents */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#F5B81C]" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#F5B81C]" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#F5B81C]" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#F5B81C]" />

                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#01040E]">
                  <img
                    src={greekStatueImg}
                    alt="Classical Greek athletic statue sculpted in marble and bronze under dramatic lighting"
                    className="w-full h-full object-cover object-center filter contrast-115 brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-transparent to-transparent opacity-60" />

                  {/* Classical Inscription Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#01040E]/95 backdrop-blur-md border border-[#F5B81C]/35 flex items-center justify-between shadow-xl">
                    <div>
                      <span className="font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#94A3B8] block">
                        ATHLETIC TRADITION
                      </span>
                      <span className="font-cinzel text-xs font-bold tracking-[0.18em] text-[#F8FAFC]">
                        HONOUR · VALOUR · STRENGTH
                      </span>
                    </div>
                    <GreekColumnIcon className="w-4 h-8 text-[#F5B81C]" />
                  </div>
                </div>
              </div>

              {/* Behind-frame decorative Greek accent line */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-[#F5B81C]/25 pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & The Olympus Calls */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header label */}
            <div className="flex items-center gap-2 mb-3">
              <LaurelWreath className="w-5 h-5 text-[#F5B81C]" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#FFC72C]">
                UMANG &apos;26 EDITION
              </span>
            </div>

            {/* Monumental Section Title */}
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.16em] text-[#F8FAFC] leading-tight">
              THE OLYMPUS CALLS
            </h2>

            {/* Gold Hairline Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#F5B81C] to-transparent my-6" />

            {/* Narrative text */}
            <p className="font-sans text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-6 font-light">
              Umang returns in 2026, bringing athletes and teams together for a celebration of competition, athleticism and campus spirit. Choose your arena. Gather your team. Enter the games.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#94A3B8]/80 leading-relaxed mb-10 font-light">
              Rooted in the eternal legacy of ancient Olympia and ignited by the fierce collegiate pride of IIIT Bangalore, every match is a crucible of determination, team synergy, and relentless passion.
            </p>

            {/* Roman-inspired Three Stat Pillars */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#F5B81C]/20">
              
              {/* Stat 1: 09 Sports */}
              <div className="flex flex-col">
                <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#F5B81C] mb-1">
                  ARENAS
                </span>
                <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-gold-gradient tracking-tight tabular-nums">
                  0{TOTAL_SPORTS_COUNT}
                </span>
                <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#F8FAFC] uppercase mt-1">
                  SPORTS
                </span>
              </div>

              {/* Stat 2: 18 Events */}
              <div className="flex flex-col">
                <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#F5B81C] mb-1">
                  CONTESTS
                </span>
                <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-gold-gradient tracking-tight tabular-nums">
                  {TOTAL_EVENTS_COUNT}
                </span>
                <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#F8FAFC] uppercase mt-1">
                  EVENTS
                </span>
              </div>

              {/* Stat 3: 01 Olympus */}
              <div className="flex flex-col">
                <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#F5B81C] mb-1">
                  PANTHÉON
                </span>
                <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-gold-gradient tracking-tight tabular-nums">
                  01
                </span>
                <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#F8FAFC] uppercase mt-1">
                  OLYMPUS
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="mt-20">
        <OlympianDivider />
      </div>
    </section>
  );
};
