import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  MessageCircle 
} from 'lucide-react';
import { CONTACT_CONFIG } from '../data/contactData';
import { LaurelWreath, GreekColumnIcon, OlympianDivider } from './GreekDecorations';
import { UmangLogo } from './UmangLogo';
import sportsArenaImg from '../assets/images/olympus_athletics_arena_1790530172404.jpg';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [activeCampusId, setActiveCampusId] = useState<'ecity' | 'extension'>('ecity');

  const activeCampus = CONTACT_CONFIG.campuses.find((c) => c.id === activeCampusId) || CONTACT_CONFIG.campuses[0];

  const handleCopyPhone = (phone: string, id: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(id);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section className="relative pt-4 sm:pt-6 pb-20 sm:pb-28 bg-[#01040E] overflow-hidden" id="contact">
      {/* Background Campus Athletics Visual - Clear and Visible in Dark Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={sportsArenaImg}
          alt="Campus Athletics Arena"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-120 saturate-110 opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/80 to-[#01040E]/85" />
      </div>

      {/* Background Royal Sapphire Glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#0B1D54]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="flex justify-center mb-2">
            <UmangLogo size="sm" withGlow withRing />
          </div>

          <div className="inline-flex items-center justify-center gap-2 mb-1.5">
            <LaurelWreath className="w-4 h-4 text-[#F5B81C]" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-[#F5B81C]">
              UMANG 2026
            </span>
            <LaurelWreath className="w-4 h-4 text-[#F5B81C] scale-x-[-1]" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.14em] text-[#F8FAFC] leading-tight">
            CONTACT & DIRECTIONS
          </h2>

          <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#FFC72C] uppercase mt-1.5">
            STUDENT COORDINATORS · SATELLITE RADAR · CAMPUSES
          </p>

          <div className="mt-3.5 flex items-center justify-center">
            <div className="w-24 h-[1.5px] bg-[#F5B81C]/40" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 1. THREE STUDENT CONTACT COORDINATORS WITH HOVER SOCIALS & PHONES */}
        {/* ============================================================ */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-5 pb-2.5 border-b border-[#F5B81C]/20">
            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#F8FAFC]">
                STUDENT COORDINATORS
              </h3>
            </div>
            <span className="font-sans text-xs text-[#94A3B8] hidden sm:block">
              Hover photo for LinkedIn & Instagram
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CONTACT_CONFIG.coordinators.map((person) => (
              <div
                key={person.id}
                className="group relative bg-[#03091F]/90 border border-[#F5B81C]/30 hover:border-[#F5B81C] transition-all duration-300 p-6 flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_rgba(245,184,28,0.25)]"
              >
                {/* Classical Greek Corner Accents */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />

                <div>
                  {/* Photo Container with Hover Overlay for LinkedIn & Instagram */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#01040E] border border-[#F5B81C]/25 mb-5 group/photo">
                    <img
                      src={person.photoUrl}
                      alt={person.name}
                      className="w-full h-full object-cover object-center filter contrast-105 group-hover/photo:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Base Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01040E]/80 via-transparent to-transparent opacity-60 group-hover/photo:opacity-0 transition-opacity" />

                    {/* HOVER OVERLAY: REVEALS LINKEDIN & INSTAGRAM */}
                    <div className="absolute inset-0 bg-[#01040E]/92 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover/photo:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                      <LaurelWreath className="w-6 h-6 text-[#F5B81C] mb-2" />
                      <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#FFC72C] font-bold mb-1">
                        CONNECT ON SOCIALS
                      </span>
                      <p className="font-sans text-[11px] text-[#94A3B8] mb-4">
                        {person.name}
                      </p>

                      <div className="flex items-center gap-3">
                        {/* LinkedIn on hover */}
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-[#0077B5]/20 hover:bg-[#0077B5] border border-[#0077B5]/40 text-[#F8FAFC] text-xs font-sans transition-all duration-200 transform hover:scale-105"
                          title={`${person.name} on LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                          <span className="font-medium text-[11px]">LinkedIn</span>
                        </a>

                        {/* Instagram on hover */}
                        <a
                          href={person.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-[#E1306C]/20 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#D62976] hover:to-[#962FBF] border border-[#E1306C]/40 text-[#F8FAFC] text-xs font-sans transition-all duration-200 transform hover:scale-105"
                          title={`${person.name} on Instagram`}
                        >
                          <Instagram className="w-4 h-4" />
                          <span className="font-medium text-[11px]">Instagram</span>
                        </a>
                      </div>
                    </div>

                    {/* Touch device indicator (shows icon pills if on touch or not hovered) */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 opacity-80 group-hover:opacity-0 transition-opacity bg-[#01040E]/80 backdrop-blur-sm px-2 py-1 border border-white/10 z-10">
                      <Linkedin className="w-3 h-3 text-[#94A3B8]" />
                      <Instagram className="w-3 h-3 text-[#94A3B8]" />
                      <span className="text-[10px] font-sans text-[#94A3B8]">Hover</span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="mb-4">
                    <h4 className="font-cinzel text-lg sm:text-xl font-bold uppercase tracking-[0.12em] text-[#F8FAFC] group-hover:text-[#FFC72C] transition-colors">
                      {person.name}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-[#F5B81C] uppercase tracking-wider mt-0.5">
                      {person.role}
                    </p>
                  </div>
                </div>

                {/* Mobile Number & Action Buttons */}
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div>
                    <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#94A3B8] block mb-1">
                      MOBILE NUMBER
                    </span>

                    <div className="flex items-center justify-between gap-2 p-2 bg-[#01040E] border border-[#F5B81C]/20">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#F5B81C]" />
                        <a
                          href={`tel:${person.phoneRaw}`}
                          className="font-mono text-xs font-bold text-[#F8FAFC] hover:text-[#FFC72C] transition-colors tracking-wider"
                          title="Click to call"
                        >
                          {person.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-1">
                        {/* Copy phone button */}
                        <button
                          onClick={() => handleCopyPhone(person.phone, person.id)}
                          className="p-1.5 text-[#94A3B8] hover:text-[#FFC72C] hover:bg-white/5 transition-colors cursor-pointer"
                          title="Copy phone number"
                          aria-label={`Copy phone number for ${person.name}`}
                        >
                          {copiedPhone === person.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {/* WhatsApp / Chat link */}
                        <a
                          href={`https://wa.me/${person.phoneRaw.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-[#94A3B8] hover:text-emerald-400 hover:bg-white/5 transition-colors"
                          title="Message on WhatsApp"
                          aria-label={`WhatsApp ${person.name}`}
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Button Bar */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={`tel:${person.phoneRaw}`}
                      className="py-1.5 px-3 bg-[#01040E] hover:bg-[#F5B81C] hover:text-[#01040E] border border-[#F5B81C]/30 text-[11px] font-cinzel uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1 font-semibold"
                    >
                      <Phone className="w-3 h-3" />
                      <span>CALL</span>
                    </a>

                    <a
                      href={`mailto:${person.email}`}
                      className="py-1.5 px-3 bg-[#01040E] hover:bg-[#F5B81C] hover:text-[#01040E] border border-[#F5B81C]/30 text-[11px] font-cinzel uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1 font-semibold"
                    >
                      <Mail className="w-3 h-3" />
                      <span>EMAIL</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. GOOGLE MAPS SATELLITE VIEW & UMANG INSTAGRAM SHOWCASE */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column (7 cols): Google Maps Satellite View Embed & Campus Switcher */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Campus Selector Tabs */}
            <div className="bg-[#03091F]/90 border border-[#F5B81C]/30 p-1.5 flex flex-col sm:flex-row gap-2">
              {CONTACT_CONFIG.campuses.map((campus) => {
                const isActive = campus.id === activeCampusId;
                return (
                  <button
                    key={campus.id}
                    onClick={() => setActiveCampusId(campus.id)}
                    className={`flex-1 px-4 py-2.5 text-left transition-all flex items-center justify-between border cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#F5B81C]/25 to-[#FFC72C]/15 border-[#F5B81C] text-[#F8FAFC]'
                        : 'bg-[#01040E] border-white/5 text-[#94A3B8] hover:border-[#F5B81C]/40 hover:text-[#F8FAFC]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-[#FFC72C]' : 'text-[#94A3B8]'}`} />
                        <span className="font-cinzel text-xs font-bold uppercase tracking-wider block">
                          {campus.shortName}
                        </span>
                      </div>
                      <span className="text-[11px] font-sans text-[#94A3B8]/80 block mt-0.5">
                        {campus.area} · PIN {campus.pincode}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-cinzel uppercase px-2 py-0.5 border ${
                        isActive
                          ? 'border-[#F5B81C] text-[#FFC72C] bg-[#F5B81C]/20 font-bold'
                          : 'border-white/10 text-[#94A3B8]/60'
                      }`}
                    >
                      {isActive ? 'ACTIVE VIEW' : 'SELECT'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Map Frame */}
            <div className="relative bg-[#03091F]/90 border border-[#F5B81C]/30 p-2 sm:p-3 shadow-2xl flex-1 flex flex-col">
              
              {/* Map Title Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#01040E] border border-[#F5B81C]/15 mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F5B81C]" />
                  <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
                    SATELLITE ORBIT · {activeCampus.shortName.toUpperCase()}
                  </span>
                </div>
                <span className="font-sans text-[11px] text-[#FFC72C]">
                  {activeCampus.area}
                </span>
              </div>

              {/* Embedded Satellite View Map Iframe */}
              <div className="relative w-full h-[340px] sm:h-[400px] overflow-hidden bg-[#01040E] border border-white/10">
                <iframe
                  key={activeCampus.id}
                  title={`${activeCampus.name} Satellite View Map`}
                  src={activeCampus.map.embedSatelliteUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.08) saturate(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Satellite Badge Overlay */}
                <div className="absolute top-3 left-3 bg-[#01040E]/90 backdrop-blur-md px-3 py-1 border border-[#F5B81C]/30 flex items-center gap-2 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-cinzel text-[10px] tracking-wider uppercase text-[#FFC72C]">
                    LIVE SATELLITE · {activeCampus.shortName}
                  </span>
                </div>
              </div>

              {/* Action Bar beneath Map */}
              <div className="mt-3 p-3 bg-[#01040E] border border-[#F5B81C]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left">
                  <p className="font-sans text-xs text-[#F8FAFC] font-medium">
                    {activeCampus.street}
                  </p>
                  <p className="font-sans text-[11px] text-[#94A3B8]">
                    {activeCampus.landmark} · Pincode: {activeCampus.pincode}
                  </p>
                </div>

                <a
                  href={activeCampus.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 font-cinzel text-xs font-bold uppercase tracking-wider text-[#01040E] bg-gradient-to-r from-[#FFC72C] to-[#F5B81C] hover:brightness-110 transition-all shrink-0 font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>DIRECTIONS TO {activeCampus.shortName.toUpperCase()}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Side-by-Side Dual Campus Reference Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONTACT_CONFIG.campuses.map((c) => {
                const isCurrent = c.id === activeCampusId;
                return (
                  <div
                    key={c.id}
                    className={`p-3.5 border transition-all ${
                      isCurrent
                        ? 'bg-[#061438] border-[#F5B81C]/70 shadow-lg'
                        : 'bg-[#03091F]/80 border-white/5 hover:border-[#F5B81C]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#F8FAFC] flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#F5B81C]" />
                        {c.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#F5B81C]/10 text-[#FFC72C] border border-[#F5B81C]/30">
                        {c.pincode}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-1">
                      {c.street}, {c.city}
                    </p>
                    <p className="text-[10px] text-[#94A3B8]/70 italic mb-2.5">
                      Landmark: {c.landmark}
                    </p>

                    <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                      <button
                        onClick={() => setActiveCampusId(c.id)}
                        className={`text-[10px] font-cinzel uppercase px-2.5 py-1 border transition-colors cursor-pointer ${
                          isCurrent
                            ? 'bg-[#F5B81C] text-[#01040E] font-bold border-[#F5B81C]'
                            : 'border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#F5B81C]/50'
                        }`}
                      >
                        {isCurrent ? 'Viewing Map' : 'View on Map'}
                      </button>
                      <a
                        href={c.map.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-cinzel uppercase text-[#FFC72C] hover:underline ml-auto"
                      >
                        <span>Navigate</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column (5 cols): Umang Instagram & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Highlighted Card: College Umang Instagram Page with Official Logo */}
            <div className="relative bg-gradient-to-br from-[#03091F] via-[#051233] to-[#01040E] border border-[#F5B81C]/40 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <UmangLogo size="sm" withGlow withRing />
                  <div>
                    <h3 className="font-cinzel text-sm font-bold uppercase tracking-widest text-[#F8FAFC]">
                      COLLEGE UMANG INSTAGRAM
                    </h3>
                    <span className="font-sans text-xs text-[#FFC72C]">
                      {CONTACT_CONFIG.socialMedia.instagramHandle}
                    </span>
                  </div>
                </div>
                <LaurelWreath className="w-6 h-6 text-[#F5B81C]" />
              </div>

              <p className="font-sans text-xs text-[#94A3B8] leading-relaxed mb-5">
                Catch behind-the-scenes arena preparations, fixture announcements, real-time match results, and athlete spotlights from IIIT Bangalore.
              </p>

              <a
                href={CONTACT_CONFIG.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#01040E] bg-gradient-to-r from-[#FFC72C] via-[#F5B81C] to-[#E6AA12] hover:brightness-110 active:scale-[0.98] transition-all shadow-md font-semibold"
              >
                <Instagram className="w-4 h-4 text-[#01040E]" />
                <span>FOLLOW @UMANG_IIITB</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#01040E]" />
              </a>
            </div>

            {/* Inquiries & Direct Email Card */}
            <div className="bg-[#03091F] border border-[#F5B81C]/20 p-6 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <Mail className="w-4 h-4 text-[#F5B81C]" />
                <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
                  OFFICIAL INQUIRIES & HELPDESK
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#94A3B8] block mb-0.5">Festival & Sports Queries:</span>
                  <a
                    href={`mailto:${CONTACT_CONFIG.contacts.sportsEmail}`}
                    className="font-sans text-sm text-[#F8FAFC] hover:text-[#F5B81C] transition-colors font-medium flex items-center gap-1.5"
                  >
                    <span>{CONTACT_CONFIG.contacts.sportsEmail}</span>
                    <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                  </a>
                </div>

                <div>
                  <span className="text-[#94A3B8] block mb-0.5">Sports Committee Desk:</span>
                  <a
                    href={`mailto:${CONTACT_CONFIG.contacts.generalEmail}`}
                    className="font-sans text-sm text-[#F8FAFC] hover:text-[#F5B81C] transition-colors font-medium flex items-center gap-1.5"
                  >
                    <span>{CONTACT_CONFIG.contacts.generalEmail}</span>
                    <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                  </a>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Institute Desk: {CONTACT_CONFIG.contacts.studentConvenorPhone}</span>
                  <span className="text-[#F5B81C]">Bengaluru, India</span>
                </div>
              </div>
            </div>

            {/* Transit Guidance for Both Campuses */}
            <div className="p-4 bg-[#03091F] border border-[#F5B81C]/25 flex items-start gap-3">
              <GreekColumnIcon className="w-4 h-7 text-[#F5B81C] shrink-0 mt-0.5" />
              <div className="text-xs text-[#94A3B8] leading-relaxed space-y-2">
                <strong className="text-[#F8FAFC] block font-cinzel text-[11px] uppercase tracking-wider">
                  CAMPUS ENTRY & ACCESS GUIDE
                </strong>
                <div>
                  <span className="text-[#FFC72C] font-semibold block">E-City Main Campus:</span>
                  Located in Electronic City Phase 1. Accessible via Namma Metro Yellow Line (Infosys Foundation / Electronic City Station) and Elevated Expressway from Silk Board.
                </div>
                <div>
                  <span className="text-[#FFC72C] font-semibold block">Hosa Road Extension Campus:</span>
                  Located Off Hosa Road, Begur / Singasandra. Accessible via Hosur Main Road and Singasandra Metro Station.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="mt-20">
        <OlympianDivider />
      </div>
    </section>
  );
};
