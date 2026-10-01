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
        <GreekMeanderStrip className="w-full h-2 text-[#F5B81C]" opacity="opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid: Brand, Address & College Details, Contact Info & Leads, Umang Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Theme (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <UmangLogo size="md" withGlow withRing />
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold tracking-[0.2em] text-[#F8FAFC]">
                  UMANG &apos;26
                </span>
                <span className="font-cinzel text-[9px] uppercase tracking-[0.24em] text-[#F5B81C]">
                  IIIT BANGALORE
                </span>
              </div>
            </div>

            <p className="font-cinzel text-xs font-bold uppercase tracking-[0.24em] text-[#FFC72C] mb-2">
              OLYMPOUS REBORN
            </p>

            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed mb-4">
              The flagship annual sports festival of the International Institute of Information Technology Bangalore. Where legends rise, champions compete, and Olympus comes alive again.
            </p>

            <div className="mt-auto flex items-center gap-2 text-xs font-cinzel tracking-wider text-[#F5B81C]/80">
              <GreekColumnIcon className="w-3 h-5 text-[#F5B81C]/60" />
              <span>IIIT BANGALORE · SPORTS FESTIVAL</span>
            </div>
          </div>

          {/* Column 2: College Campuses & Addresses (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#F8FAFC] mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#F5B81C]" />
              CAMPUSES & ADDRESSES
            </span>

            <div className="font-sans text-xs text-[#94A3B8] space-y-4 leading-relaxed">
              {/* Main E-City Campus */}
              <div className="p-3 bg-[#03091F] border border-[#F5B81C]/20 rounded-none space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#F8FAFC] block font-cinzel text-[11px] uppercase tracking-wider text-[#FFC72C]">
                    E-City Main Campus
                  </strong>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#F5B81C]/15 text-[#FFC72C] border border-[#F5B81C]/30">
                    560100
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8]">
                  26/C, Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka
                </p>
                <p className="text-[10px] text-[#94A3B8]/70 italic">
                  Landmark: Opposite Infosys Gate 1
                </p>
                <div className="pt-1">
                  <a
                    href={CONTACT_CONFIG.campuses[0].map.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#FFC72C] hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Extension Campus */}
              <div className="p-3 bg-[#03091F] border border-[#F5B81C]/20 rounded-none space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-[#F8FAFC] block font-cinzel text-[11px] uppercase tracking-wider text-[#FFC72C]">
                    Hosa Road Extension Campus
                  </strong>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#F5B81C]/15 text-[#FFC72C] border border-[#F5B81C]/30">
                    560114
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8]">
                  65, Aishwarya Crystal Layout, Singasandra, Off Hosa Road, Begur, Bengaluru, Karnataka
                </p>
                <p className="text-[10px] text-[#94A3B8]/70 italic">
                  Landmark: Off Hosa Road, Near Singasandra
                </p>
                <div className="pt-1">
                  <a
                    href={CONTACT_CONFIG.campuses[1].map.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#FFC72C] hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info & Student Leads (2.5 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#F8FAFC] mb-4 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#F5B81C]" />
              CONTACT INFO
            </span>

            <div className="font-sans text-xs text-[#94A3B8] space-y-3">
              <div>
                <span className="text-[10px] uppercase font-cinzel text-[#94A3B8]/70 block tracking-wider">Helpdesk Email</span>
                <a
                  href={`mailto:${CONTACT_CONFIG.contacts.sportsEmail}`}
                  className="text-[#F8FAFC] hover:text-[#FFC72C] transition-colors break-all"
                >
                  {CONTACT_CONFIG.contacts.sportsEmail}
                </a>
              </div>

              {/* Three Contact Persons & Mobile Numbers */}
              <div className="pt-1 border-t border-white/5 space-y-2">
                <span className="text-[10px] uppercase font-cinzel text-[#FFC72C] block tracking-wider font-semibold">
                  STUDENT LEADS
                </span>
                
                {CONTACT_CONFIG.coordinators.map((c) => (
                  <div key={c.id} className="text-[11px]">
                    <span className="text-[#F8FAFC] block font-medium truncate">{c.name}</span>
                    <a
                      href={`tel:${c.phoneRaw}`}
                      className="font-mono text-[#94A3B8] hover:text-[#FFC72C] transition-colors flex items-center gap-1 mt-0.5"
                    >
                      <Phone className="w-2.5 h-2.5 text-[#F5B81C]" />
                      <span>{c.phone}</span>
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-1 border-t border-white/5">
                <span className="text-[10px] uppercase font-cinzel text-[#94A3B8]/70 block tracking-wider">Campus Desk</span>
                <span className="text-[#F8FAFC] font-mono text-xs">
                  {CONTACT_CONFIG.contacts.studentConvenorPhone}
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: College Umang Social Media (2.5 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#F8FAFC] mb-4">
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

          <div className="flex items-center gap-2 text-xs font-cinzel tracking-wider text-[#F5B81C]">
            <GreekColumnIcon className="w-3 h-5 text-[#F5B81C]" />
            <span>IIIT BANGALORE · OLYMPOUS REBORN</span>
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
