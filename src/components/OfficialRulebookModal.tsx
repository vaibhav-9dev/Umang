import React, { useEffect } from 'react';
import { X, Scroll, Trophy, ExternalLink, MapPin, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_SPORT_RULES, OfficialSportRuleDoc } from '../data/officialSportRules';
import { LaurelWreath, GreekMeanderStrip } from './GreekDecorations';
import { SPORT_RULE_LINKS } from '../config/sportRuleLinks';

interface OfficialRulebookModalProps {
  sportId: string | null;
  onClose: () => void;
}

export const OfficialRulebookModal: React.FC<OfficialRulebookModalProps> = ({ sportId, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (sportId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sportId, onClose]);

  if (!sportId) return null;

  const ruleDoc: OfficialSportRuleDoc | undefined = OFFICIAL_SPORT_RULES[sportId];
  if (!ruleDoc) return null;

  const externalLink = SPORT_RULE_LINKS[sportId];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#01040E]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#03091F] border border-[#F5B81C]/50 shadow-[0_0_50px_rgba(245,184,28,0.25)] flex flex-col overflow-hidden text-[#F8FAFC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Classical Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#FFE066] z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FFE066] z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#FFE066] z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#FFE066] z-20 pointer-events-none" />

        {/* Modal Header */}
        <div className="p-5 sm:p-7 border-b border-[#F5B81C]/25 bg-gradient-to-r from-[#01040E] via-[#07123A] to-[#01040E] relative shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <LaurelWreath className="w-4 h-4 text-[#F5B81C]" />
                <span className="font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FFC72C]">
                  OFFICIAL ATHLETIC RULEBOOK
                </span>
              </div>
              <h2 className="font-cinzel text-xl sm:text-3xl font-black uppercase tracking-[0.14em] text-[#F8FAFC] drop-shadow">
                {ruleDoc.sportName} Rules &amp; Regulations
              </h2>
              {ruleDoc.categorySummary && (
                <p className="font-sans text-xs text-[#94A3B8] mt-1">
                  Format: <span className="text-[#FFC72C] font-semibold">{ruleDoc.categorySummary}</span> · UMANG 2026
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              {externalLink && (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 font-cinzel text-[10px] font-bold uppercase tracking-wider text-[#01040E] bg-gradient-to-r from-[#FFE066] to-[#F5B81C] hover:brightness-110"
                >
                  <span>EXTERNAL DOC</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 text-[#94A3B8] hover:text-[#F8FAFC] bg-[#01040E] border border-white/10 hover:border-[#F5B81C]/60 transition-colors"
                aria-label="Close rulebook"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-sm leading-relaxed">
          {/* Venue & SPOC Callout (if available, e.g. for Tennis) */}
          {ruleDoc.venueInfo && (
            <div className="p-4 bg-[#01040E] border border-[#F5B81C]/35">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10">
                <MapPin className="w-4 h-4 text-[#F5B81C]" />
                <span className="font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#FFC72C]">
                  OFFICIAL VENUE DETAILS
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#94A3B8] block">Venue:</span>
                  <strong className="text-[#F8FAFC] text-sm font-cinzel">{ruleDoc.venueInfo.name}</strong>
                  <p className="text-[#94A3B8] mt-0.5">{ruleDoc.venueInfo.address}</p>
                  {ruleDoc.venueInfo.distance && (
                    <p className="text-[#F5B81C] text-[11px] mt-1">📍 {ruleDoc.venueInfo.distance}</p>
                  )}
                </div>
                <div className="space-y-1 sm:border-l sm:border-white/10 sm:pl-4">
                  {ruleDoc.venueInfo.surface && (
                    <p><span className="text-[#94A3B8]">Surface:</span> <span className="text-[#F8FAFC] font-semibold">{ruleDoc.venueInfo.surface}</span></p>
                  )}
                  {ruleDoc.venueInfo.ball && (
                    <p><span className="text-[#94A3B8]">Match Ball:</span> <span className="text-[#F8FAFC] font-semibold">{ruleDoc.venueInfo.ball}</span></p>
                  )}
                  {ruleDoc.venueInfo.courts && (
                    <p><span className="text-[#94A3B8]">Courts:</span> <span className="text-[#F8FAFC] font-semibold">{ruleDoc.venueInfo.courts}</span></p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tournament SPOCs / Officials (if available) */}
          {ruleDoc.officials && ruleDoc.officials.length > 0 && (
            <div className="p-4 bg-[#01040E]/80 border border-white/10">
              <span className="font-cinzel text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFC72C] block mb-2">
                TOURNAMENT OFFICIALS / SPOCS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {ruleDoc.officials.map((official, idx) => (
                  <div key={idx} className="p-2.5 bg-[#03091F] border border-white/5">
                    <span className="text-[10px] font-cinzel uppercase text-[#F5B81C] block">{official.role}</span>
                    <strong className="text-[#F8FAFC] text-sm">{official.name}</strong>
                    <div className="mt-1 space-y-0.5 text-[11px] text-[#94A3B8]">
                      <p className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#FFC72C]" /> {official.phone}</p>
                      <p className="flex items-center gap-1.5 truncate"><Mail className="w-3 h-3 text-[#FFC72C]" /> {official.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section Rules */}
          {ruleDoc.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-3">
              <div className="flex items-center gap-2 pb-1.5 border-b border-[#F5B81C]/25">
                <Scroll className="w-4 h-4 text-[#F5B81C]" />
                <h3 className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#FFC72C]">
                  {section.heading}
                </h3>
              </div>
              <div className="space-y-2">
                {section.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-3 bg-[#01040E]/90 border border-white/5 hover:border-[#F5B81C]/30 transition-colors flex items-start gap-3"
                  >
                    <div className="w-4 h-4 rounded-none border border-[#F5B81C]/60 bg-[#03091F] flex items-center justify-center text-[#FFC72C] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <p className="text-[#F8FAFC]/90 text-xs sm:text-sm font-sans leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer with Print/Close */}
        <div className="p-4 border-t border-[#F5B81C]/20 bg-[#01040E] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <LaurelWreath className="w-4 h-4 text-[#F5B81C]" />
            <span>Official Sports Committee Rules · IIIT Bangalore Umang 2026</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 font-cinzel text-xs font-bold uppercase tracking-wider text-[#01040E] bg-gradient-to-r from-[#FFE066] to-[#F5B81C]"
              >
                <span>OPEN EXTERNAL LINK</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2 font-cinzel text-xs font-semibold uppercase tracking-wider text-[#F8FAFC] bg-[#07123A] border border-[#F5B81C]/40 hover:bg-[#0B1D54]"
            >
              CLOSE
            </button>
          </div>
        </div>

        <GreekMeanderStrip className="w-full h-3 text-[#F5B81C]" opacity="opacity-30" />
      </div>
    </div>
  );
};
