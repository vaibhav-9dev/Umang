import React from 'react';
import { LaurelWreath, GreekColumnIcon, OlympianDivider } from './GreekDecorations';
import { UmangLogo } from './UmangLogo';
import { GENERAL_TOURNAMENT_RULES } from '../data/rulesData';
import { ShieldCheck, Check, Scroll, ExternalLink } from 'lucide-react';
import { ALL_SPORT_RULE_LINKS } from '../config/sportRuleLinks';
import sportsArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#01040E] overflow-hidden" id="about">
      {/* Background Graphic with High Clarity */}
      <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
        <img
          src={sportsArenaImg}
          alt="Atmospheric dark sports arena with classical Greek marble colonnades"
          className="w-full h-full object-cover filter contrast-120 brightness-105 saturate-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#01040E] via-[#01040E]/40 to-[#01040E]/80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Logo and Tag */}
        <div className="flex flex-col items-center mb-6">
          <UmangLogo size="md" withGlow withRing className="mb-3" />
          <div className="inline-flex items-center gap-2">
            <LaurelWreath className="w-5 h-5 text-[#F5B81C]" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC72C]">
              IIIT BANGALORE ANNUAL SPORTS FESTIVAL
            </span>
            <LaurelWreath className="w-5 h-5 text-[#F5B81C] scale-x-[-1]" />
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.14em] text-[#F8FAFC] leading-tight mb-8">
          ONE FESTIVAL. ONE ARENA.
        </h2>

        {/* Narrative Copy */}
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-base sm:text-xl text-[#F8FAFC]/90 leading-relaxed font-light mb-6">
            Umang 2026 brings together students and athletes for a celebration of sport, competition and community. This year&apos;s edition invites every competitor to step forward and create their own legend.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed font-light mb-12">
            From the roaring hardwood of the basketball court and the high flying spikes of volleyball to the lightning smashes of badminton and the roaring soccer pitches, Umang celebrates collegiate athletic prowess, unshakeable camaraderie, and the timeless pursuit of greatness.
          </p>
        </div>

        {/* 3 Pillars of Olympus Reborn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6 border-t border-[#F5B81C]/20">
          
          <div className="p-6 bg-[#03091F]/90 border border-[#F5B81C]/25 hover:border-[#F5B81C]/60 transition-colors shadow-lg">
            <div className="w-8 h-8 rounded-none border border-[#F5B81C]/60 flex items-center justify-center mb-4 text-[#F5B81C]">
              <GreekColumnIcon className="w-4 h-6" />
            </div>
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-[0.18em] text-[#F8FAFC] mb-2">
              ATHLETIC EXCELLENCE
            </h3>
            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
              Every arena is primed for high-octane collegiate competition, pushing limits and setting new benchmarks of physical achievement.
            </p>
          </div>

          <div className="p-6 bg-[#03091F]/90 border border-[#F5B81C]/25 hover:border-[#F5B81C]/60 transition-colors shadow-lg">
            <div className="w-8 h-8 rounded-none border border-[#F5B81C]/60 flex items-center justify-center mb-4 text-[#F5B81C]">
              <LaurelWreath className="w-4 h-4" />
            </div>
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-[0.18em] text-[#F8FAFC] mb-2">
              HONOUR & FAIR PLAY
            </h3>
            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
              True victory is won not only on the scoreboard, but through noble conduct, mutual respect, and unyielding sportsmanship.
            </p>
          </div>

          <div className="p-6 bg-[#03091F]/90 border border-[#F5B81C]/25 hover:border-[#F5B81C]/60 transition-colors shadow-lg">
            <div className="w-8 h-8 rounded-none border border-[#F5B81C]/60 flex items-center justify-center mb-4 text-[#F5B81C]">
              <span className="font-cinzel text-xs font-bold text-[#F5B81C]">IIITB</span>
            </div>
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-[0.18em] text-[#F8FAFC] mb-2">
              CAMPUS SPIRIT
            </h3>
            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
              A vibrant celebration uniting colleges across the region under the grand banner of Umang, forging memories that outlast the season.
            </p>
          </div>

        </div>

        {/* Official Tournament Rules & Code of Conduct */}
        <div className="mt-16 text-left p-6 sm:p-10 bg-[#03091F]/90 border border-[#F5B81C]/35 shadow-2xl relative">
          {/* Classical Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F5B81C]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F5B81C]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F5B81C]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F5B81C]" />

          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#F5B81C]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#F5B81C]">
              OFFICIAL CODE & REGULATIONS
            </span>
          </div>

          <h3 className="font-cinzel text-xl sm:text-3xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC] mb-3">
            TOURNAMENT RULES FOR EVERY SPORT
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mb-6 max-w-3xl leading-relaxed">
            All participating institutions, contingent captains, and athletes across all sports must adhere strictly to these universal tournament regulations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-8">
            {GENERAL_TOURNAMENT_RULES.map((rule, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#01040E] border border-[#F5B81C]/25 flex items-start gap-3 text-xs leading-relaxed"
              >
                <div className="w-5 h-5 rounded-none border border-[#F5B81C]/70 bg-[#03091F] flex items-center justify-center text-[#FFC72C] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-[#F8FAFC]/90 font-sans">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          {/* Sport Specific Rulebook Hyperlinks */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F5B81C]/25">
              <Scroll className="w-4 h-4 text-[#F5B81C]" />
              <h3 className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FFC72C]">
                SPORT SPECIFIC RULEBOOK HYPERLINKS
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ALL_SPORT_RULE_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-[#01040E] border border-[#F5B81C]/30 hover:border-[#F5B81C] hover:bg-[#03091F] transition-all duration-200 flex items-center justify-between gap-3 group cursor-pointer"
                >
                  <span className="font-cinzel text-xs font-bold text-[#F8FAFC] group-hover:text-[#FFC72C] transition-colors truncate">
                    {item.name}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-cinzel text-[#F5B81C] group-hover:text-[#FFE066] font-semibold shrink-0">
                    <span className="text-[11px] uppercase tracking-wider">RULES</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              ))}
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
