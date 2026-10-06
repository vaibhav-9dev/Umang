import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { Sport, SportEvent } from '../data/sportsData';
import { openRegistrationForm } from '../config/registrationLinks';
import { GreekMeanderStrip } from './GreekDecorations';

interface SportCardProps {
  sport: Sport;
  onSelectSport: (sport: Sport) => void;
  onEventRegistered: (eventName: string) => void;
}

export const SportCard: React.FC<SportCardProps> = ({
  sport,
  onSelectSport,
  onEventRegistered,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRegister = (e: React.MouseEvent, event: SportEvent) => {
    e.stopPropagation();
    openRegistrationForm(event.registrationKey);
    onEventRegistered(`${sport.name} - ${event.name}`);
  };

  const isEmblemSport = ['volleyball', 'football', 'badminton', 'basketball'].includes(sport.id);

  return (
    <div className={`group relative bg-[#03091F] border ${
      isEmblemSport ? 'border-[#F5B81C]/50 shadow-[0_0_25px_rgba(11,29,84,0.4)]' : 'border-[#F5B81C]/25'
    } hover:border-[#F5B81C]/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_0_35px_rgba(245,184,28,0.25),0_0_50px_rgba(11,29,84,0.5)] min-h-[390px] sm:min-h-[430px]`}>
      {/* Classical Corner Notches in Gold */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#F5B81C]/70 group-hover:border-[#F5B81C] transition-colors z-10" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#F5B81C]/70 group-hover:border-[#F5B81C] transition-colors z-10" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#F5B81C]/70 group-hover:border-[#F5B81C] transition-colors z-10" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#F5B81C]/70 group-hover:border-[#F5B81C] transition-colors z-10" />

      {/* Clearly visible background sport arena/action image */}
      <div className="absolute inset-0 z-0 opacity-45 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none">
        <img
          src={sport.heroImage}
          alt={sport.name}
          className="w-full h-full object-cover object-center filter brightness-110 contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/40 to-[#01040E]/20" />
      </div>

      {/* Royal Olympian Blue Gradient & Sapphire Radial Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05112E]/40 via-transparent to-[#01040E]/80 pointer-events-none" />
      <div className="absolute -right-8 -top-8 w-36 h-36 bg-[#0B1D54]/30 rounded-full blur-2xl group-hover:bg-[#0B1D54]/50 transition-colors pointer-events-none" />

      {/* Card Header Content */}
      <div className="relative z-10 p-6 sm:p-7 flex-1 flex flex-col">
        {/* Roman Order Numeral & Domain */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-xs font-bold text-[#F5B81C] tracking-[0.2em]">
              ARENA {sport.orderNumber}
            </span>
            <span className="text-[#A0ABC4]/40">·</span>
            <span className="text-[11px] font-sans text-[#A0ABC4] tracking-wider">
              {sport.events.length} {sport.events.length === 1 ? 'EVENT' : 'EVENTS'}
            </span>
          </div>
          
          {isEmblemSport ? (
            <span className="inline-flex items-center gap-1 font-cinzel text-[10px] uppercase tracking-wider text-[#FFC72C] bg-[#0E2866]/80 px-2 py-0.5 border border-[#F5B81C]/40">
              <ShieldCheck className="w-3 h-3 text-[#F5B81C]" />
              FEATURED
            </span>
          ) : (
            <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#F5B81C]/80">
              UMANG 2026
            </span>
          )}
        </div>

        {/* Sport Name */}
        <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.14em] text-[#F8F9FA] group-hover:text-gold-light-gradient transition-all mb-6">
          {sport.name}
        </h3>

        {/* Events Preview Pills */}
        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-xs text-[#A0ABC4] mb-2.5">
            <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#F8F9FA]/80">
              EVENTS LIST
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-[11px] text-[#FFC72C] hover:underline cursor-pointer"
            >
              <span>{isExpanded ? 'Hide' : 'Quick view'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Quick Expandable Event Register Drawer */}
          {isExpanded && (
            <div className="space-y-2 mb-4 animate-in fade-in duration-200">
              {sport.events.map((event) => (
                <div
                  key={event.id}
                  className="p-2.5 bg-[#01040E] border border-[#F5B81C]/30 flex items-center justify-between gap-2"
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
                    onClick={(e) => handleRegister(e, event)}
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
            <div className="text-xs text-[#A0ABC4]/80 flex flex-wrap gap-x-2 gap-y-1">
              {sport.events.map((ev, i) => (
                <span key={ev.id}>
                  {ev.name}
                  {i < sport.events.length - 1 && <span className="text-[#A0ABC4]/30 ml-2">/</span>}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Greek Meander Accent Line */}
      <GreekMeanderStrip className="w-full h-4 text-[#F5B81C]" opacity="opacity-40" />

      {/* Card Action: VIEW EVENTS Button */}
      <div className="relative z-10 p-5 pt-0 bg-transparent">
        <button
          onClick={() => onSelectSport(sport)}
          className="w-full py-3 px-4 font-cinzel text-xs font-bold uppercase tracking-[0.24em] text-[#F8FAFC] bg-[#01040E] hover:bg-gradient-to-r hover:from-[#FFC72C] hover:to-[#E6AA12] hover:text-[#01040E] border border-[#F5B81C]/40 hover:border-[#F5B81C] transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(245,184,28,0.35)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B81C] cursor-pointer"
        >
          <span>VIEW EVENTS</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
