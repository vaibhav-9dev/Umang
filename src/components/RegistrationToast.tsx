import React, { useEffect } from 'react';
import { ExternalLink, CheckCircle, X } from 'lucide-react';

interface RegistrationToastProps {
  eventName: string | null;
  onClose: () => void;
}

export const RegistrationToast: React.FC<RegistrationToastProps> = ({ eventName, onClose }) => {
  useEffect(() => {
    if (!eventName) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [eventName, onClose]);

  if (!eventName) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#081845] border border-[#F5B81C]/70 shadow-[0_0_30px_rgba(245,184,28,0.35)] p-4 text-[#F8F9FA] relative">
        {/* Corner Greek Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#F5B81C]" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#F5B81C]" />

        <div className="flex items-start gap-3">
          <div className="p-1.5 bg-[#F5B81C]/20 border border-[#F5B81C]/40 shrink-0 mt-0.5">
            <CheckCircle className="w-4 h-4 text-[#F5B81C]" />
          </div>

          <div className="flex-1 pr-2">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#FFC72C]">
              Redirecting to Google Form
            </h4>
            <p className="font-sans text-xs text-[#A0ABC4] mt-1 leading-snug">
              Official registration form for <strong className="text-[#F8F9FA] font-medium">{eventName}</strong> opened in a new tab.
            </p>
            <div className="flex items-center gap-1 mt-2 text-[10px] font-cinzel tracking-wider text-[#F5B81C]/90">
              <ExternalLink className="w-3 h-3" />
              <span>Complete your registration in Google Forms</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#A0ABC4] hover:text-[#F8F9FA] p-1 transition-colors"
            aria-label="Dismiss notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
