import React from 'react';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { SPORTS_DATA, Sport } from '../data/sportsData';
import { LaurelWreath, GreekColumnIcon, OlympianDivider } from '../components/GreekDecorations';
import { ArrowRight, Trophy } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import sportsArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';

interface HomePageProps {
  onEventRegistered: (eventName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  const { 
    navigateToSports, 
    navigateToSportDetail
  } = useNavigation();

  return (
    <div className="min-h-screen bg-[#01040E] text-[#F8FAFC]">
      {/* 1. Full-Screen Cinematic Hero */}
      <Hero
        onExploreSports={navigateToSports}
        onRegisterNow={navigateToSports}
      />

      {/* 2. Intro Section: The Arenas Await & Stats */}
      <IntroSection />

      {/* 3. Featured Arenas Showcase */}
      <section className="py-24 bg-[#01040E] relative overflow-hidden" id="featured-arenas">
        {/* Background Ancient Athletics Arena Visual - Clear and Visible in Dark Theme */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={sportsArenaImg}
            alt="Ancient Athletics Arena"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-120 saturate-110 opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#01040E] via-[#01040E]/60 to-[#01040E]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,4,14,0.1)_0%,rgba(1,4,14,0.7)_88%)]" />
        </div>

        {/* Ambient deep gold & sapphire glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0B1D54]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#F5B81C]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <LaurelWreath className="w-5 h-5 text-[#F5B81C]" />
                <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#FFC72C]">
                  UMANG 2026 ARENAS
                </span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-black uppercase tracking-[0.14em] text-[#F8FAFC]">
                SELECT YOUR SPORT
              </h2>
            </div>

            <button
              onClick={navigateToSports}
              className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-[0.2em] text-[#FFC72C] hover:text-[#FFE066] cursor-pointer self-start md:self-auto border-b border-[#F5B81C]/40 pb-1"
            >
              <span>VIEW ALL 9 SPORTS & 18 EVENTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Sports Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPORTS_DATA.slice(0, 6).map((sport: Sport) => {
              const isEmblemSport = ['volleyball', 'football', 'badminton', 'basketball'].includes(sport.id);
              
              return (
                <div
                  key={sport.id}
                  className="group relative p-7 bg-[#03091F]/90 border border-[#F5B81C]/25 hover:border-[#F5B81C]/70 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(245,184,28,0.25)] flex flex-col justify-between overflow-hidden min-h-[390px] sm:min-h-[430px]"
                >
                  {/* Clearly Visible Background Sport Hero Artwork & Picture */}
                  <div className="absolute inset-0 z-0 opacity-45 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none">
                    <img
                      src={sport.heroImage}
                      alt={sport.name}
                      className="w-full h-full object-cover object-center filter brightness-110 contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/35 to-[#01040E]/15" />
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <span className="font-cinzel text-xs font-bold text-[#F5B81C] tracking-[0.2em]">
                        ARENA {sport.orderNumber}
                      </span>
                      {isEmblemSport ? (
                        <span className="text-[10px] font-cinzel uppercase tracking-wider text-[#FFC72C] bg-[#07123A]/90 px-2 py-0.5 border border-[#F5B81C]/40">
                          FEATURED
                        </span>
                      ) : (
                        <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#F5B81C]/80">
                          {sport.events.length} {sport.events.length === 1 ? 'EVENT' : 'EVENTS'}
                        </span>
                      )}
                    </div>

                    <h3 className="font-cinzel text-2xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC] group-hover:text-gold-light-gradient transition-colors mb-6">
                      {sport.name}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-white/10 relative z-10">
                    <button
                      onClick={() => navigateToSportDetail(sport.id)}
                      className="w-full py-3 px-4 font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#F8FAFC] bg-[#01040E]/90 hover:bg-gradient-to-r hover:from-[#FFC72C] hover:to-[#E6AA12] hover:text-[#01040E] border border-[#F5B81C]/40 hover:border-[#F5B81C] transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(245,184,28,0.3)] cursor-pointer"
                    >
                      <span>VIEW EVENTS & RULES</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};
