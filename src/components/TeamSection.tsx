import React, { useState } from 'react';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  MessageCircle, 
  Globe, 
  Palette, 
  Trophy, 
  Users 
} from 'lucide-react';
import { 
  ALL_TEAM_GROUPS, 
  TeamMember, 
  TeamCategory 
} from '../data/teamData';
import { LaurelWreath, OlympianDivider } from './GreekDecorations';
import { UmangLogo } from './UmangLogo';
import templeSunsetImg from '../assets/images/olympus_temple_sunset_1790530195373.jpg';

export const TeamSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | TeamCategory>('all');
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopyPhone = (phone: string, id: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(id);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const filteredGroups = activeFilter === 'all'
    ? ALL_TEAM_GROUPS
    : ALL_TEAM_GROUPS.filter(g => g.id === activeFilter);

  const getTeamIcon = (id: TeamCategory) => {
    switch (id) {
      case 'sports_comm':
        return <Trophy className="w-4 h-4 text-[#F5B81C]" />;
      case 'website':
        return <Globe className="w-4 h-4 text-[#F5B81C]" />;
      case 'design':
        return <Palette className="w-4 h-4 text-[#F5B81C]" />;
      default:
        return <Users className="w-4 h-4 text-[#F5B81C]" />;
    }
  };

  return (
    <section className="relative pt-4 sm:pt-6 pb-20 sm:pb-28 bg-[#01040E] overflow-hidden" id="team">
      {/* Background Classical Temple Visual - Clear and Visible in Dark Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={templeSunsetImg}
          alt="Olympus Temple"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-120 saturate-110 opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01040E] via-[#01040E]/75 to-[#01040E]/85" />
      </div>

      {/* Background Subtle Royal Sapphire Radial Accent */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#0B1D54]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#F5B81C]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Logo medallion */}
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
            THE ORGANIZING COMMITTEE
          </h2>

          <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#FFC72C] uppercase mt-1.5">
            SPORTS COMM · WEBSITE TEAM · DESIGN TEAM
          </p>

          {/* Classical divider line */}
          <div className="mt-3.5 flex items-center justify-center">
            <div className="w-24 h-[1.5px] bg-[#F5B81C]/40" />
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-cinzel uppercase tracking-[0.18em] transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-[#FFC72C] via-[#F5B81C] to-[#E6AA12] text-[#01040E] border-[#FFC72C] font-bold shadow-[0_0_20px_rgba(245,184,28,0.4)]'
                : 'bg-[#03091F]/90 text-[#94A3B8] border-[#F5B81C]/25 hover:border-[#F5B81C]/60 hover:text-[#F8FAFC]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>ALL TEAMS ({ALL_TEAM_GROUPS.reduce((acc, g) => acc + g.members.length, 0)})</span>
          </button>

          <button
            onClick={() => setActiveFilter('sports_comm')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-cinzel uppercase tracking-[0.18em] transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
              activeFilter === 'sports_comm'
                ? 'bg-gradient-to-r from-[#FFC72C] via-[#F5B81C] to-[#E6AA12] text-[#01040E] border-[#FFC72C] font-bold shadow-[0_0_20px_rgba(245,184,28,0.4)]'
                : 'bg-[#03091F]/90 text-[#94A3B8] border-[#F5B81C]/25 hover:border-[#F5B81C]/60 hover:text-[#F8FAFC]'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>SPORTS COMM ({ALL_TEAM_GROUPS[0].members.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('website')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-cinzel uppercase tracking-[0.18em] transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
              activeFilter === 'website'
                ? 'bg-gradient-to-r from-[#FFC72C] via-[#F5B81C] to-[#E6AA12] text-[#01040E] border-[#FFC72C] font-bold shadow-[0_0_20px_rgba(245,184,28,0.4)]'
                : 'bg-[#03091F]/90 text-[#94A3B8] border-[#F5B81C]/25 hover:border-[#F5B81C]/60 hover:text-[#F8FAFC]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>WEBSITE TEAM ({ALL_TEAM_GROUPS[1].members.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('design')}
            className={`px-4 sm:px-5 py-2.5 text-xs font-cinzel uppercase tracking-[0.18em] transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
              activeFilter === 'design'
                ? 'bg-gradient-to-r from-[#FFC72C] via-[#F5B81C] to-[#E6AA12] text-[#01040E] border-[#FFC72C] font-bold shadow-[0_0_20px_rgba(245,184,28,0.4)]'
                : 'bg-[#03091F]/90 text-[#94A3B8] border-[#F5B81C]/25 hover:border-[#F5B81C]/60 hover:text-[#F8FAFC]'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>DESIGN TEAM ({ALL_TEAM_GROUPS[2].members.length})</span>
          </button>
        </div>

        {/* Grouped Team Sections */}
        <div className="space-y-20">
          {filteredGroups.map((group) => (
            <div key={group.id} className="relative">
              {/* Group Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#F5B81C]/25">
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    {getTeamIcon(group.id)}
                    <span className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#F5B81C]">
                      {group.badge}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#F8FAFC]">
                    {group.name}
                  </h3>
                </div>

                <div className="shrink-0 hidden sm:flex items-center gap-2 text-xs font-cinzel text-[#FFC72C]">
                  <span>{group.subTitle}</span>
                  <span className="text-[#F5B81C]/50">·</span>
                  <span className="font-bold text-[#F8FAFC]">{group.members.length} MEMBERS</span>
                </div>
              </div>

              {/* Members Cards Grid */}
              <div className={`grid gap-6 sm:gap-8 ${
                group.members.length === 4
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {group.members.map((member: TeamMember) => (
                  <div
                    key={member.id}
                    className="group relative bg-[#03091F]/95 border border-[#F5B81C]/25 hover:border-[#F5B81C] p-6 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_rgba(245,184,28,0.25)]"
                  >
                    {/* Greek Classical Corner Accents */}
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#F5B81C]/60 group-hover:border-[#F5B81C] transition-colors" />

                    <div>
                      {/* Photo Container with Hover Overlay for LinkedIn & Instagram */}
                      <div className="relative aspect-square w-full overflow-hidden bg-[#01040E] border border-[#F5B81C]/25 mb-5 group/photo">
                        <img
                          src={member.photoUrl}
                          alt={member.name}
                          className="w-full h-full object-cover object-center filter contrast-105 group-hover/photo:scale-105 transition-transform duration-500"
                        />

                        {/* Top-Right Mythological Badge */}
                        <div className="absolute top-3 right-3 bg-[#01040E]/90 backdrop-blur-md px-2.5 py-1 border border-[#F5B81C]/30 z-10">
                          <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#FFC72C]">
                            {member.mythologicalTitle}
                          </span>
                        </div>

                        {/* Gradient Base Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#01040E]/80 via-transparent to-transparent opacity-60 group-hover/photo:opacity-0 transition-opacity" />

                        {/* HOVER OVERLAY: REVEALS LINKEDIN */}
                        <div className="absolute inset-0 bg-[#01040E]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover/photo:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                          <LaurelWreath className="w-6 h-6 text-[#F5B81C] mb-2" />
                          <span className="font-cinzel text-xs uppercase tracking-[0.2em] text-[#FFC72C] font-bold mb-1">
                            CONNECT ON LINKEDIN
                          </span>
                          <p className="font-sans text-[11px] text-[#94A3B8] mb-4">
                            {member.name}
                          </p>

                          <div className="flex items-center justify-center">
                            {/* LinkedIn on hover */}
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-[#0077B5]/20 hover:bg-[#0077B5] border border-[#0077B5]/40 text-[#F8FAFC] text-xs font-sans transition-all duration-200 transform hover:scale-105"
                              title={`${member.name} on LinkedIn`}
                            >
                              <Linkedin className="w-4 h-4" />
                              <span className="font-medium text-xs">LinkedIn Profile</span>
                            </a>
                          </div>
                        </div>

                        {/* Touch device indicator (shows icon pill if on touch or not hovered) */}
                        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 opacity-80 group-hover:opacity-0 transition-opacity bg-[#01040E]/80 backdrop-blur-sm px-2 py-1 border border-white/10 z-10">
                          <Linkedin className="w-3 h-3 text-[#94A3B8]" />
                          <span className="text-[10px] font-sans text-[#94A3B8]">LinkedIn</span>
                        </div>
                      </div>

                      {/* Member Name */}
                      <h4 className="font-cinzel text-xl font-bold uppercase tracking-[0.14em] text-[#F8FAFC] group-hover:text-[#FFC72C] transition-colors">
                        {member.name}
                      </h4>

                      {/* Official Role */}
                      <p className="font-sans text-xs font-semibold text-[#F5B81C] uppercase tracking-wider mt-1 mb-5">
                        {member.role}
                      </p>
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
                              href={`tel:${member.phoneRaw}`}
                              className="font-mono text-xs font-bold text-[#F8FAFC] hover:text-[#FFC72C] transition-colors tracking-wider"
                              title="Click to call"
                            >
                              {member.phone}
                            </a>
                          </div>

                          <div className="flex items-center gap-1">
                            {/* Copy phone button */}
                            <button
                              onClick={() => handleCopyPhone(member.phone, member.id)}
                              className="p-1.5 text-[#94A3B8] hover:text-[#FFC72C] hover:bg-white/5 transition-colors cursor-pointer"
                              title="Copy phone number"
                              aria-label={`Copy phone number for ${member.name}`}
                            >
                              {copiedPhone === member.id ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>

                            {/* WhatsApp / Chat link */}
                            <a
                              href={`https://wa.me/${member.phoneRaw.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-[#94A3B8] hover:text-emerald-400 hover:bg-white/5 transition-colors"
                              title="Message on WhatsApp"
                              aria-label={`WhatsApp ${member.name}`}
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Direct Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <a
                          href={`tel:${member.phoneRaw}`}
                          className="py-1.5 px-3 bg-[#01040E] hover:bg-[#F5B81C] hover:text-[#01040E] border border-[#F5B81C]/30 text-[11px] font-cinzel uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1 font-semibold"
                        >
                          <Phone className="w-3 h-3" />
                          <span>CALL</span>
                        </a>

                        <a
                          href={`mailto:${member.email}`}
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
          ))}
        </div>

      </div>

      <div className="mt-20">
        <OlympianDivider />
      </div>
    </section>
  );
};
