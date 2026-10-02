import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { Sport, SportEvent } from '../data/sportsData';
import { openRegistrationForm } from '../config/registrationLinks';
import { LaurelWreath, GreekColumnIcon } from './GreekDecorations';

interface EventModalProps {
  sport: Sport | null;
  onClose: () => void;
  onEventRegistered: (eventName: string) => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  sport,
  onClose,
  onEventRegistered,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (sport) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sport, onClose]);

  if (!sport) return null;

  const handleRegisterClick = (event: SportEvent) => {
    openRegistrationForm(event.registrationKey);
    onEventRegistered(`${sport.name} - ${event.name}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#01040E]/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-sport-title"
    >
      {/* Modal Card Container */}
      <div
        className="relative w-full max-w-2xl bg-[#03091F] border border-[#F5B81C]/40 shadow-[0_0_60px_rgba(0,0,0,0.95),0_0_40px_rgba(11,29,84,0.5)] p-6 sm:p-8 text-[#F8FAFC] my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Greek Classical Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F5B81C]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F5B81C]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F5B81C]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F5B81C]" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#F5B81C]/20 pb-5 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-cinzel text-xs font-semibold text-[#F5B81C] tracking-[0.2em] uppercase">
                ARENA {sport.orderNumber}
              </span>
            </div>

            <h3
              id="modal-sport-title"
              className="font-cinzel text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.16em] text-[#F8FAFC]"
            >
              {sport.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#94A3B8] hover:text-[#F5B81C] hover:bg-[#07153B] border border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B81C] cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable Events Area */}
        <div className="overflow-y-auto py-6 pr-1 space-y-4">
          <div className="flex items-center justify-between pt-1 pb-1">
            <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#F8FAFC]/80">
              AVAILABLE EVENTS ({sport.events.length})
            </span>
            <span className="text-[11px] font-sans text-[#94A3B8]">
              Direct Google Form Registration
            </span>
          </div>

          {/* List of Events */}
          <div className="space-y-3">
            {sport.events.map((event) => (
              <div
                key={event.id}
                className="group relative p-4 bg-[#01040E] hover:bg-[#061230] border border-white/10 hover:border-[#F5B81C]/50 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Event Information */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-cinzel text-sm sm:text-base font-bold tracking-[0.12em] text-[#F8FAFC] group-hover:text-[#FFC72C] transition-colors">
                      {event.name}
                    </span>
                    <span className="text-[10px] font-sans px-1.5 py-0.5 uppercase tracking-wider text-[#FFC72C] bg-[#0B1D54]/80 border border-[#F5B81C]/30">
                      {event.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                    <span>Format: {event.format}</span>
                    <span>·</span>
                    <span className="text-[#94A3B8]/70 italic">{event.notes}</span>
                  </div>
                </div>

                {/* Direct Register Action Button */}
                <button
                  onClick={() => handleRegisterClick(event)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#01040E] bg-gradient-to-r from-[#FFC72C] via-[#F5B81C] to-[#E6AA12] hover:brightness-110 active:scale-[0.98] border border-[#FFF4CE]/50 shadow-md transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B81C] cursor-pointer"
                  title={`Register for ${event.name}`}
                >
                  <span>REGISTER</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#01040E]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-[#F5B81C]/20 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-[#94A3B8] shrink-0">
          <div className="flex items-center gap-2">
            <LaurelWreath className="w-4 h-4 text-[#F5B81C]" />
            <span>Registration takes you directly to the official Google Form</span>
          </div>

          <button
            onClick={onClose}
            className="font-cinzel uppercase tracking-[0.2em] text-[#94A3B8] hover:text-[#FFC72C] text-left sm:text-right cursor-pointer"
          >
            RETURN TO ARENA
          </button>
        </div>
      </div>
    </div>
  );
};
