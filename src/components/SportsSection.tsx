import React, { useState, useMemo } from 'react';
import { Search, Flame, Trophy, Award } from 'lucide-react';
import { SPORTS_DATA, Sport } from '../data/sportsData';
import { SportCard } from './SportCard';
import { LaurelWreath, GreekMeanderStrip } from './GreekDecorations';
import sportsArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';

interface SportsSectionProps {
  onSelectSport: (sport: Sport) => void;
  onEventRegistered: (eventName: string) => void;
}

export const SportsSection: React.FC<SportsSectionProps> = ({
  onSelectSport,
  onEventRegistered,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'emblem' | 'team' | 'individual' | 'women'>('all');

  const filteredSports = useMemo(() => {
    return SPORTS_DATA.filter((sport) => {
      // Search matching either sport name, subtitle, or any of its events
      const matchesSearch =
        searchQuery.trim() === '' ||
        sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sport.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sport.events.some((e) => e.name.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // Category tab filtering
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'emblem') {
        return ['volleyball', 'football', 'badminton', 'basketball'].includes(sport.id);
      }
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

  return (
    <section className="relative py-24 sm:py-32 bg-[#01040E] overflow-hidden" id="arena">
      {/* Background Ancient Athletics Arena Visual - Clear and Visible in Dark Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={sportsArenaImg}
          alt="Ancient Olympian Athletics Arena"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-120 saturate-110 opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/40 to-[#01040E]/70" />
      </div>

      {/* Royal sapphire radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[#0B1D54]/20 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <LaurelWreath className="w-4 h-4 text-[#F5B81C]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#F5B81C]">
              UMANG 2026
            </span>
            <LaurelWreath className="w-4 h-4 text-[#F5B81C] scale-x-[-1]" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC] leading-tight">
            ENTER THE ARENA
          </h2>

          <div className="mt-4 flex items-center justify-center">
            <div className="w-24 h-[1.5px] bg-[#F5B81C]/40" />
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-[#03091F]/90 border border-[#F5B81C]/30 shadow-2xl backdrop-blur-md">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto p-1 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold shadow-md'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#07153B]'
              }`}
            >
              All Arenas (9)
            </button>
            <button
              onClick={() => setSelectedCategory('emblem')}
              className={`px-3.5 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === 'emblem'
                  ? 'bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold shadow-md'
                  : 'text-[#FFC72C] hover:text-[#FFD54F] hover:bg-[#07153B]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B81C]" />
              Emblem Arenas (4)
            </button>
            <button
              onClick={() => setSelectedCategory('team')}
              className={`px-3.5 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'team'
                  ? 'bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold shadow-md'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#07153B]'
              }`}
            >
              Team Sports
            </button>
            <button
              onClick={() => setSelectedCategory('individual')}
              className={`px-3.5 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'individual'
                  ? 'bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold shadow-md'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#07153B]'
              }`}
            >
              Singles & Duels
            </button>
            <button
              onClick={() => setSelectedCategory('women')}
              className={`px-3.5 py-2 font-cinzel text-xs tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'women'
                  ? 'bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold shadow-md'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#07153B]'
              }`}
            >
              Women&apos;s Divisions
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
              className="w-full bg-[#01040E] border border-[#F5B81C]/20 hover:border-[#F5B81C]/50 focus:border-[#F5B81C] focus:outline-none text-xs text-[#F8FAFC] placeholder-[#94A3B8]/60 pl-9 pr-4 py-2 transition-colors font-sans"
            />
          </div>
        </div>

        {/* 9 Sports Grid */}
        {filteredSports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSports.map((sport) => (
              <SportCard
                key={sport.id}
                sport={sport}
                onSelectSport={onSelectSport}
                onEventRegistered={onEventRegistered}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-[#F5B81C]/20 bg-[#03091F] p-8">
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

        {/* Direct Journey Notice */}
        <div className="mt-16 p-6 border border-[#F5B81C]/25 bg-[#03091F]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#F5B81C]/50 flex items-center justify-center shrink-0 bg-[#01040E]">
              <LaurelWreath className="w-6 h-6 text-[#F5B81C]" />
            </div>
            <div>
              <h4 className="font-cinzel text-sm font-bold uppercase tracking-[0.16em] text-[#F8FAFC]">
                DIRECT OFFICIAL REGISTRATION JOURNEY
              </h4>
              <p className="font-sans text-xs text-[#94A3B8] mt-0.5">
                HOME → SPORTS → SELECT EVENT → REGISTER → GOOGLE FORM. No student account or password required.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="font-cinzel text-xs text-[#FFC72C] tracking-wider uppercase font-semibold">
              18 OFFICIAL CONTESTS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
