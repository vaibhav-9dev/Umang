import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Scroll, 
  Image as ImageIcon, 
  Trophy, 
  ShieldCheck, 
  AlertCircle, 
  ChevronRight,
  Maximize2,
  X,
  Check
} from 'lucide-react';
import { SPORTS_DATA, Sport, SportEvent, SportGalleryItem, GENERAL_TOURNAMENT_RULES } from '../data/sportsData';
import { openRegistrationForm } from '../config/registrationLinks';
import { LaurelWreath, GreekColumnIcon, OlympianDivider, GreekMeanderStrip } from '../components/GreekDecorations';
import { UmangLogo } from '../components/UmangLogo';
import { useNavigation } from '../context/NavigationContext';

interface SportDetailPageProps {
  sportId: string;
  onEventRegistered: (eventName: string) => void;
}

export const SportDetailPage: React.FC<SportDetailPageProps> = ({
  sportId,
  onEventRegistered,
}) => {
  const { navigateToSports, navigateToHome, navigateToSportDetail } = useNavigation();
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<SportGalleryItem | null>(null);

  // Find sport or fallback to first
  const sport = SPORTS_DATA.find((s) => s.id === sportId) || SPORTS_DATA[0];

  const handleRegister = (event: SportEvent) => {
    openRegistrationForm(event.registrationKey);
    onEventRegistered(`${sport.name} - ${event.name}`);
  };

  const otherSports = SPORTS_DATA.filter((s) => s.id !== sport.id);

  return (
    <div className="min-h-screen bg-[#01040E] text-[#F8FAFC] pt-24 pb-20">
      
      {/* Top Breadcrumb & Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#F5B81C]/20 text-xs">
          
          {/* Breadcrumb links */}
          <nav className="flex items-center gap-2 text-[#94A3B8] font-cinzel">
            <button
              onClick={navigateToHome}
              className="hover:text-[#F5B81C] transition-colors uppercase tracking-wider cursor-pointer"
            >
              HOME
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#F5B81C]/60" />
            <button
              onClick={navigateToSports}
              className="hover:text-[#F5B81C] transition-colors uppercase tracking-wider cursor-pointer"
            >
              SPORTS ARENA
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#F5B81C]/60" />
            <span className="text-[#FFC72C] font-bold uppercase tracking-wider">
              {sport.name}
            </span>
          </nav>

          {/* Back button */}
          <button
            onClick={navigateToSports}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#03091F] hover:bg-[#07123A] border border-[#F5B81C]/35 text-xs font-cinzel text-[#F8FAFC] hover:text-[#FFC72C] transition-colors uppercase tracking-wider font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL SPORTS</span>
          </button>
        </div>
      </div>

      {/* Sport Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden bg-[#03091F]/95 border border-[#F5B81C]/35 shadow-2xl">
          {/* Background Highlight Visual - Clear and Vivid in Dark Theme */}
          <div className="absolute inset-0 z-0 opacity-75">
            <img
              src={sport.heroImage}
              alt={sport.name}
              className="w-full h-full object-cover object-center filter contrast-120 brightness-110 saturate-115"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/30 to-[#01040E]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#01040E]/95 via-[#01040E]/65 to-transparent" />
          </div>

          {/* Classical Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F5B81C] z-10" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F5B81C] z-10" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F5B81C] z-10" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F5B81C] z-10" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl">
            {/* Order Tag */}
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-[#F5B81C]/35 bg-[#01040E]/90 backdrop-blur-sm mb-4">
              <UmangLogo size="xs" withRing className="w-4 h-4" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#FFC72C]">
                ARENA {sport.orderNumber}
              </span>
            </div>

            {/* Sport Name */}
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-[0.14em] text-[#F8FAFC] leading-tight mb-6">
              {sport.name}
            </h1>

            {/* Overview narrative */}
            <p className="font-sans text-sm sm:text-base text-[#F8FAFC]/90 leading-relaxed font-light max-w-3xl mb-8">
              {sport.overview}
            </p>

            {/* Quick jump anchor buttons */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-cinzel tracking-wider">
              <a
                href="#events"
                className="px-5 py-2.5 bg-gradient-to-r from-[#FFC72C] to-[#E6AA12] text-[#01040E] font-bold uppercase tracking-widest hover:brightness-110 shadow-lg shadow-[#F5B81C]/20 transition-all flex items-center gap-2"
              >
                <Trophy className="w-4 h-4 text-[#01040E]" />
                <span>REGISTER FOR EVENTS ({sport.events.length})</span>
              </a>

              <a
                href="#rules"
                className="px-5 py-2.5 bg-[#03091F] hover:bg-[#07123A] border border-[#F5B81C]/40 text-[#F8FAFC] uppercase tracking-widest transition-colors flex items-center gap-2 font-semibold"
              >
                <Scroll className="w-4 h-4 text-[#F5B81C]" />
                <span>OFFICIAL RULES</span>
              </a>

              <a
                href="#gallery"
                className="px-5 py-2.5 bg-[#03091F] hover:bg-[#07123A] border border-[#F5B81C]/40 text-[#F8FAFC] uppercase tracking-widest transition-colors flex items-center gap-2 font-semibold"
              >
                <ImageIcon className="w-4 h-4 text-[#F5B81C]" />
                <span>ARENA GALLERY</span>
              </a>
            </div>
          </div>

          <GreekMeanderStrip className="w-full h-1.5 text-[#F5B81C]" opacity="opacity-30" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 1. EVENTS SELECTION & DIRECT REGISTER BUTTONS */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-28" id="events">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#F5B81C]/25">
          <div>
            <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-[0.25em] text-[#F5B81C] mb-1">
              <LaurelWreath className="w-4 h-4 text-[#F5B81C]" />
              <span>OFFICIAL CONTESTS</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC]">
              CHOOSE YOUR EVENT & REGISTER
            </h2>
          </div>

          <p className="font-sans text-xs text-[#94A3B8] max-w-sm">
            Clicking REGISTER redirects directly to the official Google Form for that event in a new tab.
          </p>
        </div>

        {/* Events Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sport.events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-[#03091F]/95 border border-[#F5B81C]/30 hover:border-[#F5B81C] p-6 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(245,184,28,0.25)]"
            >
              {/* Corner Notches */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />

              <div>
                {/* Event Category Tag */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                  <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#FFC72C] border border-[#F5B81C]/40 px-2.5 py-0.5 bg-[#01040E]">
                    {event.category} DIVISION
                  </span>
                  <span className="font-sans text-[11px] text-[#94A3B8]/80">
                    Format: {event.format}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-[0.12em] text-[#F8FAFC] group-hover:text-[#FFC72C] transition-colors mb-2">
                  {event.name}
                </h3>

                {/* Format description & notes */}
                <p className="font-sans text-xs text-[#94A3B8] mb-6 leading-relaxed">
                  Inter-college championship contest for {sport.name}. {event.notes || "Details will be announced soon."}
                </p>
              </div>

              {/* Direct Register Action Button */}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => handleRegister(event)}
                  className="w-full py-3 px-4 font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#01040E] bg-gradient-to-r from-[#FFC72C] via-[#F5B81C] to-[#E6AA12] hover:brightness-110 active:scale-[0.98] border border-[#FFF0C2]/50 shadow-md transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>REGISTER</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#01040E] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
                <span className="block text-center text-[10px] font-sans text-[#94A3B8]/70 mt-2">
                  Opens Google Form in a new tab
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================ */}
      {/* 2. OFFICIAL RULES & GUIDELINES */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-28" id="rules">
        <div className="bg-[#03091F]/95 border border-[#F5B81C]/35 p-8 sm:p-12 relative shadow-2xl">
          {/* Classical Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F5B81C]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F5B81C]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F5B81C]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F5B81C]" />

          <div className="flex items-center gap-2 mb-2">
            <Scroll className="w-4 h-4 text-[#F5B81C]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#F5B81C]">
              TOURNAMENT CODE OF CONDUCT
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC] mb-4">
            RULES & GUIDELINES
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#94A3B8] mb-8 max-w-2xl leading-relaxed">
            All participating athletes and college contingents must uphold strict adherence to the official rulebook and collegiate conduct guidelines.
          </p>

          {/* Rules List - General Tournament Rules First */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F5B81C]/25">
              <ShieldCheck className="w-4 h-4 text-[#F5B81C]" />
              <h3 className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FFC72C]">
                GENERAL TOURNAMENT RULES (APPLIES TO EVERY SPORT)
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {(sport.generalRules || GENERAL_TOURNAMENT_RULES).map((rule, idx) => (
                <div
                  key={`general-${idx}`}
                  className="p-3.5 bg-[#01040E] border border-[#F5B81C]/25 hover:border-[#F5B81C]/50 transition-colors flex items-start gap-3 text-xs leading-relaxed"
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
          </div>

          {/* Sport-Specific Regulations */}
          {sport.sportSpecificRules && sport.sportSpecificRules.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F5B81C]/25">
                <Trophy className="w-4 h-4 text-[#F5B81C]" />
                <h3 className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FFC72C]">
                  {sport.name.toUpperCase()} SPECIFIC REGULATIONS
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {sport.sportSpecificRules.map((rule, idx) => (
                  <div
                    key={`specific-${idx}`}
                    className="p-3.5 bg-[#01040E] border border-[#F5B81C]/20 flex items-start gap-3 text-xs leading-relaxed"
                  >
                    <div className="w-5 h-5 rounded-none border border-[#F5B81C]/60 bg-[#03091F] flex items-center justify-center font-cinzel text-[10px] font-bold text-[#FFC72C] shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <p className="text-[#F8FAFC]/90 font-sans">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notice Box */}
          <div className="p-4 bg-[#01040E] border border-[#F5B81C]/30 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#F5B81C] shrink-0 mt-0.5" />
            <div className="text-xs text-[#94A3B8] leading-relaxed">
              <strong className="text-[#F8FAFC] block font-cinzel text-[11px] uppercase tracking-wider mb-0.5">
                FIXTURES & SCHEDULE ANNOUNCEMENT
              </strong>
              Official tournament draws, court allotments, and reporting timings will be announced soon. Team captains will receive briefing instructions prior to the tournament opening ceremony.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ARENA GALLERY */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-28" id="gallery">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F5B81C]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-[0.25em] text-[#F5B81C] mb-1">
              <ImageIcon className="w-4 h-4 text-[#F5B81C]" />
              <span>VISUAL CHRONICLES</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC]">
              ARENA GALLERY
            </h2>
          </div>
          <span className="font-sans text-xs text-[#94A3B8] hidden sm:block">
            Click image to view full scale
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sport.gallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryImage(item)}
              className="group relative bg-[#03091F]/90 border border-[#F5B81C]/25 hover:border-[#F5B81C] cursor-pointer overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#01040E]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Enlarge Icon Badge */}
                <div className="absolute top-3 right-3 p-1.5 bg-[#01040E]/80 backdrop-blur-sm border border-[#F5B81C]/30 opacity-0 group-hover:opacity-100 transition-opacity text-[#FFC72C]">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4 bg-[#01040E] border-t border-white/5">
                <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#F8FAFC] group-hover:text-[#FFC72C] transition-colors">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-[#94A3B8] mt-1 leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. EXPLORE OTHER ARENAS BAR */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OlympianDivider title="EXPLORE OTHER ARENAS" />

        <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2">
          {otherSports.map((s) => (
            <button
              key={s.id}
              onClick={() => navigateToSportDetail(s.id)}
              className="px-4 py-2.5 bg-[#03091F]/90 hover:bg-[#07123A] border border-[#F5B81C]/25 hover:border-[#F5B81C] text-left shrink-0 transition-all group cursor-pointer"
            >
              <span className="font-cinzel text-[10px] text-[#F5B81C] block uppercase tracking-widest">
                ARENA {s.orderNumber}
              </span>
              <span className="font-cinzel text-xs font-bold text-[#F8FAFC] group-hover:text-[#FFC72C] uppercase tracking-wider">
                {s.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Image Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01040E]/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#03091F] border border-[#F5B81C]/50 p-2 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#01040E]/80 border border-[#F5B81C]/30 text-[#F8FAFC] hover:text-[#FFC72C] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black mb-3">
              <img
                src={selectedGalleryImage.imageUrl}
                alt={selectedGalleryImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-2 sm:p-4 text-left">
              <h3 className="font-cinzel text-lg font-bold uppercase tracking-wider text-[#FFC72C]">
                {selectedGalleryImage.title}
              </h3>
              <p className="font-sans text-xs text-[#94A3B8] mt-1">
                {selectedGalleryImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
