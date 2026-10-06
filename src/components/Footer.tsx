import React from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Globe, ExternalLink } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/contactData';
import { GreekColumnIcon, GreekMeanderStrip } from './GreekDecorations';
import { UmangLogo } from './UmangLogo';
import { useNavigation } from '../context/NavigationContext';

export const Footer: React.FC = () => {
  const {
    navigateToHome,
    navigateToSports,
    navigateToAbout,
    navigateToTeam,
    navigateToContact,
  } = useNavigation();

  return (
    <footer className="relative bg-[#01030B] border-t border-[#F5B81C]/30 text-[#94A3B8] pt-16 pb-12">
      {/* Decorative Greek Meander Border at top of Footer */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <GreekMeanderStrip className="w-full h-4 text-[#F5B81C]" opacity="opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3-Column Grid: Contact Info & Leads, Campuses & Addresses, Umang Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Contact Info & Student Leads (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#F8FAFC] mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F5B81C]" />
              CONTACT INFO & LEADS
            </span>

            <div className="font-sans space-y-4">
              <div>
                <span className="text-[11px] uppercase font-cinzel text-[#FFC72C] block tracking-wider font-semibold">
                  Helpdesk Email
                </span>
                <a
                  href={`mailto:${CONTACT_CONFIG.contacts.sportsEmail}`}
                  className="text-xs sm:text-[13px] font-medium text-[#F8FAFC] hover:text-[#FFC72C] transition-colors break-all block mt-0.5"
                >
                  {CONTACT_CONFIG.contacts.sportsEmail}
                </a>
              </div>

              {/* Three Contact Persons & Mobile Numbers */}
              <div className="pt-2 border-t border-white/10 space-y-2.5">
                <span className="text-[11px] uppercase font-cinzel text-[#FFC72C] block tracking-wider font-bold">
                  STUDENT LEADS
                </span>
                
                {CONTACT_CONFIG.coordinators.map((c) => (
                  <div key={c.id} className="pb-1.5 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-xs sm:text-[13px] text-[#F8FAFC] block font-semibold truncate">
                      {c.name}
                    </span>
                    <a
                      href={`tel:${c.phoneRaw}`}
                      className="font-mono text-xs sm:text-[13px] font-medium text-[#E2E8F0] hover:text-[#FFC72C] transition-colors flex items-center gap-1.5 mt-0.5"
                    >
                      <Phone className="w-3 h-3 text-[#F5B81C]" />
                      <span>{c.phone}</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[11px] uppercase font-cinzel text-[#FFC72C] block tracking-wider font-semibold">
                  Campus Desk
                </span>
                <span className="text-[#F8FAFC] font-mono text-xs sm:text-[13px] font-medium block mt-0.5">
                  {CONTACT_CONFIG.contacts.studentConvenorPhone}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: College Campuses & Addresses (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#F8FAFC] mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F5B81C]" />
              CAMPUSES & VENUES
            </span>

            <div className="font-sans text-xs sm:text-sm text-[#94A3B8] space-y-3.5 leading-relaxed">
              {/* Main E-City Campus */}
              <div className="p-3.5 bg-[#03091F] border border-[#F5B81C]/25 rounded-none space-y-1.5 shadow-md">
                <div className="flex items-center justify-between">
                  <strong className="text-[#FFC72C] block font-cinzel text-xs sm:text-sm uppercase tracking-wider font-bold">
                    E-City Main Campus
                  </strong>
                  <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 bg-[#F5B81C]/20 text-[#FFC72C] border border-[#F5B81C]/40">
                    560100
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
                  26/C, Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka
                </p>
                <p className="text-[11px] sm:text-xs text-[#94A3B8] italic">
                  Landmark: Opposite Infosys Gate 1
                </p>
                <div className="pt-1.5">
                  <a
                    href={CONTACT_CONFIG.campuses[0].map.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#FFC72C] hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Extension Campus */}
              <div className="p-3.5 bg-[#03091F] border border-[#F5B81C]/25 rounded-none space-y-1.5 shadow-md">
                <div className="flex items-center justify-between">
                  <strong className="text-[#FFC72C] block font-cinzel text-xs sm:text-sm uppercase tracking-wider font-bold">
                    Hosa Road Extension
                  </strong>
                  <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 bg-[#F5B81C]/20 text-[#FFC72C] border border-[#F5B81C]/40">
                    560114
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
                  65, Aishwarya Crystal Layout, Singasandra, Off Hosa Road, Begur, Bengaluru
                </p>
                <p className="text-[11px] sm:text-xs text-[#94A3B8] italic">
                  Landmark: Off Hosa Road, Near Singasandra
                </p>
                <div className="pt-1.5">
                  <a
                    href={CONTACT_CONFIG.campuses[1].map.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#FFC72C] hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: College Umang Social Media (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#F8FAFC] mb-4">
              COLLEGE & UMANG SOCIALS
            </span>

            <div className="space-y-3">
              {/* Official Instagram */}
              <a
                href={CONTACT_CONFIG.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 bg-[#03091F] hover:bg-[#07143B] border border-[#F5B81C]/20 hover:border-[#F5B81C]/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#FFC72C]" />
                  <div className="text-left">
                    <span className="text-xs font-cinzel font-semibold text-[#F8FAFC] block">
                      Umang Instagram
                    </span>
                    <span className="text-[11px] font-sans text-[#94A3B8]">
                      {CONTACT_CONFIG.socialMedia.instagramHandle}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#FFC72C] transition-colors" />
              </a>

              {/* IIIT Bangalore LinkedIn */}
              <a
                href={CONTACT_CONFIG.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 bg-[#03091F] hover:bg-[#07143B] border border-[#F5B81C]/20 hover:border-[#F5B81C]/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#F5B81C]" />
                  <div className="text-left">
                    <span className="text-xs font-cinzel font-semibold text-[#F8FAFC] block">
                      IIIT Bangalore LinkedIn
                    </span>
                    <span className="text-[11px] font-sans text-[#94A3B8]">
                      Official University Page
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#F5B81C] transition-colors" />
              </a>

              {/* IIITB Website */}
              <a
                href={CONTACT_CONFIG.socialMedia.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 bg-[#03091F] hover:bg-[#07143B] border border-[#F5B81C]/20 hover:border-[#F5B81C]/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#F5B81C]" />
                  <div className="text-left">
                    <span className="text-xs font-cinzel font-semibold text-[#F8FAFC] block">
                      IIITB Official Portal
                    </span>
                    <span className="text-[11px] font-sans text-[#94A3B8]">
                      www.iiitb.ac.in
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#F5B81C] transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Quick Navigation Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
          <nav className="flex flex-wrap items-center gap-6 text-xs font-cinzel tracking-[0.2em]">
            <button
              onClick={navigateToHome}
              className="text-[#94A3B8] hover:text-[#F5B81C] transition-colors uppercase cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={navigateToSports}
              className="text-[#94A3B8] hover:text-[#F5B81C] transition-colors uppercase cursor-pointer"
            >
              SPORTS
            </button>
            <button
              onClick={navigateToAbout}
              className="text-[#94A3B8] hover:text-[#F5B81C] transition-colors uppercase cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={navigateToTeam}
              className="text-[#94A3B8] hover:text-[#F5B81C] transition-colors uppercase cursor-pointer"
            >
              SPORTS COMM TEAM
            </button>
            <button
              onClick={navigateToContact}
              className="text-[#94A3B8] hover:text-[#F5B81C] transition-colors uppercase cursor-pointer"
            >
              CONTACT & MAP
            </button>
            <button
              onClick={navigateToSports}
              className="text-[#FFC72C] hover:text-[#FFD54F] font-bold transition-colors uppercase cursor-pointer"
            >
              REGISTER
            </button>
          </nav>

          <div className="flex items-center gap-2.5 text-xs font-cinzel tracking-wider text-[#F5B81C]">
            <UmangLogo size="xs" />
            <span className="font-bold text-[#F8FAFC]">UMANG &apos;26</span>
            <span className="text-[#F5B81C]/50">·</span>
            <span>IIIT BANGALORE</span>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#94A3B8]/70 text-center sm:text-left">
          <p className="font-cinzel tracking-wider">
            © 2026 UMANG — IIIT Bangalore. All rights reserved.
          </p>

          <p className="text-[11px]">
            Direct registration via Google Forms · No accounts or logins required
          </p>
        </div>

      </div>
    </footer>
  );
};
