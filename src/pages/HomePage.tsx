import React from 'react';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { SPORTS_DATA, Sport } from '../data/sportsData';
import { LaurelWreath, GreekColumnIcon, OlympianDivider } from '../components/GreekDecorations';
import { ArrowRight, Trophy, Users, MapPin, ExternalLink } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { FinalCTA } from '../components/FinalCTA';
import sportsArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';
import greekStatueImg from '../assets/images/olympus_greek_statue_1790530183863.jpg';
import templeSunsetImg from '../assets/images/olympus_temple_sunset_1790530195373.jpg';

interface HomePageProps {
  onEventRegistered: (eventName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  const { 
    navigateToSports, 
    navigateToSportDetail, 
    navigateToAbout, 
    navigateToTeam, 
    navigateToContact 
  } = useNavigation();

  return (
    <div className="min-h-screen bg-[#01040E] text-[#F8FAFC]">
      {/* 1. Full-Screen Cinematic Hero */}
      <Hero
        onExploreSports={navigateToSports}
        onRegisterNow={navigateToSports}
      />

      {/* 2. Intro Section: The Olympus Calls & Roman Stats */}
      <IntroSection />

      {/* 3. Featured Arenas Showcase */}
      <section className="py-24 bg-[#01040E] relative overflow-hidden" id="featured-arenas">
        {/* Background Ancient Athletics Arena Visual - Clear and Visible in Dark Theme */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={sportsArenaImg}
            alt="Ancient Olympian Athletics Arena"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-120 saturate-110 opacity-55"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/40 to-[#01040E]/70" />
        </div>

        {/* Subtle Sapphire Glow in the Deep Dark Sky */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0B1D54]/25 blur-[170px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-4 border-b border-[#F5B81C]/20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <LaurelWreath className="w-5 h-5 text-[#F5B81C]" />
                <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#F5B81C]">
                  CHOOSE YOUR BATTLEFIELD
                </span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-5xl font-black uppercase tracking-[0.14em] text-[#F8FAFC]">
                ENTER THE ARENA
              </h2>
            </div>

            <button
              onClick={navigateToSports}
              className="inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-[0.2em] text-[#FFC72C] hover:text-[#FFE066] transition-colors cursor-pointer"
            >
              <span>VIEW ALL 9 SPORTS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3x3 Sports Grid Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SPORTS_DATA.map((sport) => {
              const isEmblemSport = ['volleyball', 'football', 'badminton', 'basketball'].includes(sport.id);
              return (
                <div
                  key={sport.id}
                  className={`group relative bg-[#03091F]/90 border ${
                    isEmblemSport ? 'border-[#F5B81C]/50 shadow-[0_0_25px_rgba(11,29,84,0.45)]' : 'border-[#F5B81C]/25'
                  } hover:border-[#F5B81C] transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-xl hover:shadow-[0_0_35px_rgba(245,184,28,0.25),0_0_50px_rgba(11,29,84,0.5)] overflow-hidden`}
                >
                  {/* Clearly visible background sport arena/action image */}
                  <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-65 transition-opacity pointer-events-none">
                    <img
                      src={sport.heroImage}
                      alt={sport.name}
                      className="w-full h-full object-cover filter brightness-105 contrast-120 saturate-110 group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#03091F]/65 to-[#01040E]/30" />
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <span className="font-cinzel text-xs font-bold text-[#F5B81C] tracking-[0.2em]">
                        ARENA {sport.orderNumber} · {sport.greekDeity}
                      </span>
                      {isEmblemSport ? (
                        <span className="text-[10px] font-cinzel uppercase tracking-wider text-[#FFC72C] bg-[#07123A]/90 px-2 py-0.5 border border-[#F5B81C]/40">
                          LOGO EMBLEM
                        </span>
                      ) : (
                        <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#F5B81C]/80">
                          {sport.events.length} {sport.events.length === 1 ? 'EVENT' : 'EVENTS'}
                        </span>
                      )}
                    </div>

                    <h3 className="font-cinzel text-2xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC] group-hover:text-gold-light-gradient transition-colors">
                      {sport.name}
                    </h3>

                    <p className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#FFC72C] mt-1 mb-3">
                      {sport.subtitle}
                    </p>

                    <p className="font-sans text-xs text-[#94A3B8] italic leading-relaxed mb-6 font-light">
                      &ldquo;{sport.mythosQuote}&rdquo;
                    </p>
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

      {/* 4. Quick Portal Teaser Strips */}
      <section className="py-16 bg-[#01030B] border-y border-[#F5B81C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* About Portal Card */}
            <div className="relative p-6 bg-[#03091F]/90 border border-[#F5B81C]/25 hover:border-[#F5B81C]/50 transition-colors flex flex-col justify-between shadow-xl overflow-hidden group">
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none">
                <img
                  src={greekStatueImg}
                  alt="Ancient Greek statue"
                  className="w-full h-full object-cover filter brightness-105 contrast-120 saturate-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#03091F]/65 to-[#01040E]/35" />
              </div>

              <div className="relative z-10">
                <LaurelWreath className="w-6 h-6 text-[#F5B81C] mb-3" />
                <h4 className="font-cinzel text-lg font-bold uppercase tracking-wider text-[#F8FAFC] mb-2">
                  THE OLYMPIAN HERITAGE
                </h4>
                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Discover the story behind Olympus Reborn and the pillars of athletic honour at IIIT Bangalore.
                </p>
              </div>
              <button
                onClick={navigateToAbout}
                className="relative z-10 inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-wider text-[#FFC72C] hover:text-[#FFE066] cursor-pointer mt-4"
              >
                <span>EXPLORE ABOUT FEST</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sports Comm Council Card */}
            <div className="relative p-6 bg-[#03091F]/90 border border-[#F5B81C]/25 hover:border-[#F5B81C]/50 transition-colors flex flex-col justify-between shadow-xl overflow-hidden group">
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none">
                <img
                  src={templeSunsetImg}
                  alt="Olympus Temple"
                  className="w-full h-full object-cover filter brightness-105 contrast-120 saturate-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#03091F]/65 to-[#01040E]/35" />
              </div>

              <div className="relative z-10">
                <Users className="w-6 h-6 text-[#F5B81C] mb-3" />
                <h4 className="font-cinzel text-lg font-bold uppercase tracking-wider text-[#F8FAFC] mb-2">
                  THE COUNCIL OF OLYMPUS
                </h4>
                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Meet the student sports committee members managing grounds, athlete logistics, and competitions.
                </p>
              </div>
              <button
                onClick={navigateToTeam}
                className="relative z-10 inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-wider text-[#FFC72C] hover:text-[#FFE066] cursor-pointer mt-4"
              >
                <span>VIEW SPORTS COMM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Satellite Map & Contact Card */}
            <div className="relative p-6 bg-[#03091F]/90 border border-[#F5B81C]/25 hover:border-[#F5B81C]/50 transition-colors flex flex-col justify-between shadow-xl overflow-hidden group">
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none">
                <img
                  src={sportsArenaImg}
                  alt="Athletics Arena Grounds"
                  className="w-full h-full object-cover filter brightness-105 contrast-120 saturate-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#03091F]/65 to-[#01040E]/35" />
              </div>

              <div className="relative z-10">
                <MapPin className="w-6 h-6 text-[#F5B81C] mb-3" />
                <h4 className="font-cinzel text-lg font-bold uppercase tracking-wider text-[#F8FAFC] mb-2">
                  SACRED GROUNDS & RADAR
                </h4>
                <p className="font-sans text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Explore satellite view directions to IIIT Bangalore and connect directly with student leads.
                </p>
              </div>
              <button
                onClick={navigateToContact}
                className="relative z-10 inline-flex items-center gap-2 font-cinzel text-xs uppercase tracking-wider text-[#FFC72C] hover:text-[#FFE066] cursor-pointer mt-4"
              >
                <span>MAP & DIRECTIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCTA onRegisterNow={navigateToSports} />
    </div>
  );
};
