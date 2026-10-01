import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { SPORTS_DATA, Sport, SportEvent } from '../data/sportsData';
import { LaurelWreath, GreekColumnIcon, OlympianDivider, GreekMeanderStrip } from '../components/GreekDecorations';
import { UmangLogo } from '../components/UmangLogo';
import { openRegistrationForm } from '../config/registrationLinks';
import { useNavigation } from '../context/NavigationContext';

interface SportsPageProps {
  onEventRegistered: (eventName: string) => void;
}

export const SportsPage: React.FC<SportsPageProps> = ({ onEventRegistered }) => {
  const { navigateToSportDetail, navigateToHome } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'team' | 'individual' | 'women'>('all');
  const [expandedSportId, setExpandedSportId] = useState<string | null>(null);

  const filteredSports = useMemo(() => {
    return SPORTS_DATA.filter((sport) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sport.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sport.events.some((e) => e.name.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'team') {
        return sport.events.some((e) => e.name.toLowerCase().includes('team') || e.format.includes('vs') || e.format.includes('Court'));
      }
      if (selectedCategory === 'individual') {
        return sport.events.some((e) => e.name.toLowerCase().includes('singles'));
      }
      if (selectedCategory === 'women') {
        return sport.events.some((e) => e.name.toLowerCase().includes("women") || e.category === 'Women');
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  const handleRegister = (e: React.MouseEvent, sportName: string, event: SportEvent) => {
    e.stopPropagation();
    openRegistrationForm(event.registrationKey);
    onEventRegistered(`${sportName} - ${event.name}`);
  };

  return (
    <div className="min-h-screen bg-[#01040E] text-[#F8FAFC] pt-24 pb-20">
      
      {/* Top Banner / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between py-3 border-b border-[#F5B81C]/20 text-xs font-cinzel">
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <button onClick={navigateToHome} className="hover:text-[#F5B81C] transition-colors uppercase tracking-wider cursor-pointer">
              HOME
            </button>
            <span className="text-[#F5B81C]/50">/</span>
            <span className="text-[#FFC72C] font-bold uppercase tracking-wider">
              SPORTS ARENA
            </span>
          </div>
          <span className="text-[11px] text-[#94A3B8] tracking-widest uppercase">
            9 ARENAS · 18 CONTESTS
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-3">
            <UmangLogo size="sm" withGlow withRing />
          </div>

          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <LaurelWreath className="w-5 h-5 text-[#F5B81C]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#F5B81C]">
              CHOOSE YOUR ARENA
            </span>
            <LaurelWreath className="w-5 h-5 text-[#F5B81C] scale-x-[-1]" />
          </div>

          <h1 className="font-cinzel text-4xl sm:text-6xl font-black uppercase tracking-[0.14em] text-[#F8FAFC] leading-tight">
            ENTER THE ARENA
          </h1>

          <p className="font-cinzel text-base sm:text-lg font-semibold tracking-[0.22em] text-[#FFC72C] uppercase mt-2">
            CHOOSE YOUR BATTLEFIELD
          </p>

          <p className="font-sans text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed font-light">
            Select your sport to view full tournament rules, arena galleries, and register directly through official Google Forms.
          </p>

          <div className="mt-6 flex items-center justify-center">
            <div className="w-24 h-[1.5px] bg-[#F5B81C]/40" />
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-[#03091F]/95 border border-[#F5B81C]/35 shadow-xl">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto p-1 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold shadow-sm'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'
              }`}
            >
              All Arenas (9)
            </button>
            <button
              onClick={() => setSelectedCategory('team')}
              className={`px-4 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'team'
                  ? 'bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold shadow-sm'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'
              }`}
            >
              Team Sports
            </button>
            <button
              onClick={() => setSelectedCategory('individual')}
              className={`px-4 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'individual'
                  ? 'bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold shadow-sm'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'
              }`}
            >
              Singles & Duels
            </button>
            <button
              onClick={() => setSelectedCategory('women')}
              className={`px-4 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'women'
                  ? 'bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold shadow-sm'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'
              }`}
            >
              Women's Divisions
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[260px] md:max-w-xs px-2 py-1">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sport or event..."
              className="w-full bg-[#01040E] border border-white/10 hover:border-[#F5B81C]/40 focus:border-[#F5B81C] focus:outline-none text-xs text-[#F8FAFC] placeholder-[#94A3B8]/60 pl-9 pr-4 py-2 transition-colors font-sans"
            />
          </div>
        </div>

        {/* 9 Sports Grid */}
        {filteredSports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSports.map((sport) => {
              const isExpanded = expandedSportId === sport.id;

              return (
                <div
                  key={sport.id}
                  className="group relative bg-[#03091F]/95 border border-[#F5B81C]/30 hover:border-[#F5B81C] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_0_35px_rgba(245,184,28,0.25)]"
                >
                  {/* Clearly visible background sport arena/action image */}
                  <div className="absolute inset-0 z-0 opacity-35 group-hover:opacity-60 transition-opacity pointer-events-none">
                    <img
                      src={sport.heroImage}
                      alt={sport.name}
                      className="w-full h-full object-cover filter brightness-105 contrast-120 saturate-110 group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#03091F]/70 to-[#01040E]/35" />
                  </div>

                  {/* Classical Corner Notches */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors z-10" />

                  <div className="relative z-10 p-6 sm:p-7 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                      <span className="font-cinzel text-xs font-bold text-[#F5B81C] tracking-[0.2em]">
                        ARENA {sport.orderNumber} · {sport.greekDeity}
                      </span>
                      <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#FFC72C]/90">
                        {sport.events.length} {sport.events.length === 1 ? 'EVENT' : 'EVENTS'}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC] group-hover:text-[#FFC72C] transition-all">
                      {sport.name}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#F5B81C] mt-1 mb-3">
                      {sport.subtitle}
                    </p>

                    {/* Mythos Quote */}
                    <p className="font-sans text-xs text-[#94A3B8] italic leading-relaxed mb-6 font-light">
                      &ldquo;{sport.mythosQuote}&rdquo;
                    </p>

                    {/* Events List / Quick Drawer */}
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-2.5">
                        <span className="font-cinzel text-[10px] uppercase tracking-[0.2em]">
                          EVENTS LIST
                        </span>
                        <button
                          onClick={() => setExpandedSportId(isExpanded ? null : sport.id)}
                          className="inline-flex items-center gap-1 text-[11px] text-[#F5B81C] hover:underline cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide' : 'Quick register'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {/* Expandable Quick Register Drawer */}
                      {isExpanded && (
                        <div className="space-y-2 mb-4 animate-in fade-in duration-200">
                          {sport.events.map((event) => (
                            <div
                              key={event.id}
                              className="p-2.5 bg-[#01040E] border border-[#F5B81C]/25 flex items-center justify-between gap-2"
                            >
                              <div className="truncate pr-2">
                                <span className="font-cinzel text-xs text-[#F8FAFC] font-medium block truncate">
                                  {event.name}
                                </span>
                                <span className="text-[10px] text-[#94A3B8]">
                                  {event.format}
                                </span>
                              </div>

                              <button
                                onClick={(e) => handleRegister(e, sport.name, event)}
                                className="px-3 py-1 bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] hover:brightness-110 text-[#01040E] font-cinzel text-[10px] font-bold uppercase tracking-wider shrink-0 transition-colors flex items-center gap-1 cursor-pointer"
                                title={`Register for ${event.name}`}
                              >
                                <span>REGISTER</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Collapsed event summary */}
                      {!isExpanded && (
                        <div className="text-xs text-[#94A3B8]/80 flex flex-wrap gap-x-2 gap-y-1">
                          {sport.events.map((ev, i) => (
                            <span key={ev.id}>
                              {ev.name}
                              {i < sport.events.length - 1 && <span className="text-[#94A3B8]/40 ml-2">/</span>}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <GreekMeanderStrip className="w-full h-1.5 text-[#F5B81C]" opacity="opacity-30" />

                  {/* Card Primary Action: VIEW EVENTS (Navigates to dedicated page) */}
                  <div className="relative z-10 p-5 pt-0 bg-transparent">
                    <button
                      onClick={() => navigateToSportDetail(sport.id)}
                      className="w-full py-3 px-4 font-cinzel text-xs font-bold uppercase tracking-[0.24em] text-[#F8FAFC] bg-[#01040E] hover:bg-[#F5B81C] hover:text-[#01040E] border border-[#F5B81C]/40 hover:border-[#F5B81C] transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(245,184,28,0.3)] font-semibold cursor-pointer"
                    >
                      <span>VIEW EVENTS, RULES & GALLERY</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center border border-white/5 bg-[#03091F]/80 p-8">
            <p className="font-cinzel text-lg text-[#F8FAFC] uppercase tracking-widest mb-2">
              No arena matches your search
            </p>
            <p className="text-xs text-[#94A3B8] font-sans mb-4">
              Clear your search term or select &ldquo;All Arenas&rdquo; to view all 9 sports.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2 font-cinzel text-xs font-bold text-[#01040E] bg-[#F5B81C] uppercase tracking-wider cursor-pointer"
            >
              RESET FILTERS
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
