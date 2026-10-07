import React from 'react';
import { LaurelWreath, GreekColumnIcon, OlympianDivider, GreekMeanderStrip } from '../components/GreekDecorations';
import { UmangLogo } from '../components/UmangLogo';
import { useNavigation } from '../context/NavigationContext';
import { FinalCTA } from '../components/FinalCTA';
import { GENERAL_TOURNAMENT_RULES } from '../data/rulesData';
import { ShieldCheck, Check, AlertCircle, Scroll, ExternalLink } from 'lucide-react';
import { ALL_SPORT_RULE_LINKS } from '../config/sportRuleLinks';
import sportsArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';
import greekStatueImg from '../assets/images/olympus_greek_statue_1790530183863.jpg';

export const AboutPage: React.FC = () => {
  const { navigateToHome, navigateToSports } = useNavigation();

  return (
    <div className="min-h-screen bg-[#01040E] text-[#F8FAFC] pt-24 pb-20">
      
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between py-3 border-b border-[#F5B81C]/20 text-xs font-cinzel">
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <button onClick={navigateToHome} className="hover:text-[#F5B81C] transition-colors uppercase tracking-wider cursor-pointer">
              HOME
            </button>
            <span className="text-[#F5B81C]/60">/</span>
            <span className="text-[#FFC72C] font-bold uppercase tracking-wider">
              ABOUT FESTIVAL
            </span>
          </div>
          <span className="text-[11px] text-[#94A3B8] tracking-widest uppercase">
            IIIT BANGALORE · UMANG &apos;26
          </span>
        </div>
      </div>

      {/* Main Narrative Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative bg-[#03091F]/95 border border-[#F5B81C]/35 p-8 sm:p-14 lg:p-20 shadow-2xl overflow-hidden">
          
          {/* High Clarity Background Scrim */}
          <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
            <img
              src={sportsArenaImg}
              alt="Collegiate sports arena with classical Greek marble colonnades"
              className="w-full h-full object-cover filter contrast-120 brightness-105 saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/40 to-[#01040E]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,4,14,0.2)_0%,rgba(1,4,14,0.7)_85%)]" />
          </div>

          {/* Classical Corner Accents in Gold */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F5B81C] z-10" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F5B81C] z-10" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F5B81C] z-10" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F5B81C] z-10" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Official Logo Medallion */}
            <div className="mb-4">
              <UmangLogo size="lg" withGlow withRing />
            </div>

            <div className="inline-flex items-center gap-2 mb-3">
              <LaurelWreath className="w-5 h-5 text-[#F5B81C]" />
              <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC72C]">
                IIIT BANGALORE ANNUAL SPORTS FESTIVAL
              </span>
              <LaurelWreath className="w-5 h-5 text-[#F5B81C] scale-x-[-1]" />
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl font-black uppercase tracking-[0.14em] text-[#F8FAFC] leading-tight mb-4">
              ONE FESTIVAL. ONE ARENA.
            </h1>

            <p className="font-cinzel text-sm sm:text-lg font-bold uppercase tracking-[0.24em] text-[#FFC72C] mb-8">
              WHERE CHAMPIONS COMPETE AND LEGENDS RISE
            </p>

            <div className="w-24 h-[1.5px] bg-[#F5B81C]/50 mx-auto mb-8" />

            <p className="font-sans text-base sm:text-lg text-[#F8FAFC]/90 leading-relaxed font-light mb-6">
              Umang 2026 brings together students and athletes for a celebration of sport, competition and community. This year&apos;s edition invites every competitor to step forward and create their own legend.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed font-light">
              From the roaring hardwood of the basketball court to the quiet contemplation of the chessboard, Umang celebrates collegiate athletic prowess, unshakeable camaraderie, and the timeless pursuit of greatness.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <GreekMeanderStrip className="w-full h-4 text-[#F5B81C]" opacity="opacity-35" />
          </div>
        </div>
      </div>

      {/* The 3 Classical Pillars of Olympus Reborn */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#F5B81C] block mb-1">
            CORE FOUNDATION
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC]">
            THE THREE PILLARS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 bg-[#03091F]/95 border border-[#F5B81C]/25 hover:border-[#F5B81C]/60 transition-all flex flex-col justify-between shadow-2xl">
            <div>
              <div className="w-10 h-10 border border-[#F5B81C]/60 flex items-center justify-center mb-6 text-[#F5B81C] bg-[#01040E]">
                <GreekColumnIcon className="w-5 h-7" />
              </div>
              <h3 className="font-cinzel text-lg font-bold uppercase tracking-[0.18em] text-[#F8FAFC] mb-3">
                ATHLETIC EXCELLENCE
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">
                Every arena is primed for high-octane collegiate competition, pushing limits and setting new benchmarks of physical achievement across 9 sports disciplines.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] font-cinzel text-[#FFC72C] tracking-widest uppercase">
              POWER · SPEED · ENDURANCE
            </div>
          </div>

          <div className="p-8 bg-[#03091F]/95 border border-[#F5B81C]/25 hover:border-[#F5B81C]/60 transition-all flex flex-col justify-between shadow-2xl">
            <div>
              <div className="w-10 h-10 border border-[#F5B81C]/60 flex items-center justify-center mb-6 text-[#F5B81C] bg-[#01040E]">
                <LaurelWreath className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold uppercase tracking-[0.18em] text-[#F8FAFC] mb-3">
                HONOUR & FAIR PLAY
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">
                True victory is won not only on the scoreboard, but through noble conduct, mutual respect, and unyielding sportsmanship that mirrors ancient Olympic ideals.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] font-cinzel text-[#FFC72C] tracking-widest uppercase">
              VALOUR · INTEGRITY · RESPECT
            </div>
          </div>

          <div className="p-8 bg-[#03091F]/95 border border-[#F5B81C]/25 hover:border-[#F5B81C]/60 transition-all flex flex-col justify-between shadow-2xl">
            <div>
              <div className="w-10 h-10 border border-[#F5B81C]/60 flex items-center justify-center mb-6 text-[#F5B81C] bg-[#01040E]">
                <span className="font-cinzel text-xs font-bold text-[#F5B81C]">IIITB</span>
              </div>
              <h3 className="font-cinzel text-lg font-bold uppercase tracking-[0.18em] text-[#F8FAFC] mb-3">
                CAMPUS SPIRIT
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light">
                A vibrant celebration uniting colleges across the country under the grand banner of Umang, forging friendships and memories that outlast the season.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] font-cinzel text-[#FFC72C] tracking-widest uppercase">
              UNITY · BROTHERHOOD · PASSION
            </div>
          </div>

        </div>
      </section>

      {/* Historical Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative p-2 border border-[#F5B81C]/30 bg-[#03091F]/90 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#01040E]">
                <img
                  src={greekStatueImg}
                  alt="Ancient Greek athlete in dynamic motion"
                  className="w-full h-full object-cover filter contrast-120 brightness-105 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#F5B81C] block mb-2">
              CAMPUS & ARENAS
            </span>
            <h3 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC] mb-6">
              THE GROUNDS OF IIIT BANGALORE
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light mb-4">
              Across its premier campus in Electronic City Phase 1, IIIT Bangalore opens its courts, pitches, and athletic complexes to hundreds of collegiate athletes from across India.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-light mb-8">
              Umang represents the apex of student athletic culture, completely organized, coordinated, and championed by the student sports committee. No logins or complicated profiles are required: choose your sport, gather your team, and step directly onto the field of glory.
            </p>

            <button
              onClick={navigateToSports}
              className="px-7 py-3 bg-gradient-to-r from-[#FFC72C] via-[#F5B81C] to-[#E6AA12] text-[#01040E] font-cinzel text-xs font-bold uppercase tracking-[0.22em] hover:brightness-110 transition-all shadow-lg cursor-pointer"
            >
              BROWSE ALL SPORTS & REGISTER
            </button>
          </div>
        </div>
      </section>

      {/* Official Tournament Rules & Code of Conduct Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" id="rules">
        <div className="bg-[#03091F]/95 border border-[#F5B81C]/35 p-8 sm:p-14 relative shadow-2xl">
          {/* Classical Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F5B81C]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F5B81C]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F5B81C]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F5B81C]" />

          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-[#F5B81C]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#F5B81C]">
              TOURNAMENT CODE OF CONDUCT
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC] mb-4">
            TOURNAMENT RULES FOR EVERY SPORT
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mb-8 max-w-3xl leading-relaxed">
            All participating institutions, team captains, and registered athletes across every collegiate sport must strictly abide by the official Umang tournament regulations and conduct guidelines:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-8">
            {GENERAL_TOURNAMENT_RULES.map((rule, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#01040E] border border-[#F5B81C]/25 hover:border-[#F5B81C]/50 transition-colors flex items-start gap-3.5 text-xs leading-relaxed"
              >
                <div className="w-6 h-6 rounded-none border border-[#F5B81C]/70 bg-[#03091F] flex items-center justify-center text-[#FFC72C] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-[#F8FAFC]/90 font-sans">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          {/* Sport Specific Rulebook Hyperlinks Directory */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F5B81C]/25">
              <Scroll className="w-4 h-4 text-[#F5B81C]" />
              <h3 className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FFC72C]">
                SPORT SPECIFIC RULEBOOK HYPERLINKS
              </h3>
            </div>
            <p className="font-sans text-xs text-[#94A3B8] mb-4">
              Access the official Google Docs rulebooks for each individual sport:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {ALL_SPORT_RULE_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#01040E] border border-[#F5B81C]/30 hover:border-[#F5B81C] hover:bg-[#03091F] transition-all duration-200 flex items-center justify-between gap-3 group cursor-pointer"
                >
                  <span className="font-cinzel text-xs sm:text-sm font-bold text-[#F8FAFC] group-hover:text-[#FFC72C] transition-colors truncate">
                    {item.name}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-cinzel text-[#F5B81C] group-hover:text-[#FFE066] font-semibold shrink-0">
                    <span className="text-[11px] uppercase tracking-wider">VIEW RULES</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Institutional Integrity Notice Box */}
          <div className="p-5 bg-[#01040E] border border-[#F5B81C]/30 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#F5B81C] shrink-0 mt-0.5" />
            <div className="text-xs text-[#94A3B8] leading-relaxed">
              <strong className="text-[#F8FAFC] block font-cinzel text-[11px] uppercase tracking-wider mb-1">
                DISPUTE RESOLUTION & DISCRETION
              </strong>
              The Sports Committee and the Convener of the Sports Committee (International Institute of Information Technology, Bangalore) reserve the absolute right to interpret rules, decide on disputes, and enforce disciplinary actions. All decisions of the organizing committee are final and binding.
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA onRegisterNow={navigateToSports} />
    </div>
  );
};
