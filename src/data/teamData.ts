/**
 * UMANG 2026 - Teams Directory
 * - Sports Committee (Sports Comm)
 * - Website Development Team
 * - Creative & Design Team
 * 
 * Edit this file to update names, roles, photos, contact numbers, and social links.
 */

import srikarImg from '../assets/images/SrikarImg.jpeg';
import abhiImg from '../assets/images/AbhiRam.jpeg';
import ajayImg from '../assets/images/Ajay.jpeg';
import anshImg from '../assets/images/Ansh.png';
import rohanImg from '../assets/images/coord_rohan_portrait_1790531212102.jpg';
import diyaImg from '../assets/images/coord_diya_portrait_1790531405732.jpg';
import arjunImg from '../assets/images/coord_arjun_portrait_1790531178011.jpg';
import webLeadImg from '../assets/images/team_web_lead_portrait_1790608705709.jpg';
import designLeadImg from '../assets/images/team_design_lead_portrait_1790608720586.jpg';
import frontendDevImg from '../assets/images/team_frontend_portrait_1790608738699.jpg';

export type TeamCategory = 'sports_comm' | 'website' | 'design';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  mythologicalTitle: string;
  department: string;
  phone: string;
  phoneRaw: string;
  photoUrl: string;
  linkedin: string;
  instagram: string;
  email: string;
  teamCategory: TeamCategory;
}

// 1. SPORTS COMMITTEE MEMBERS (Four Core Members)
export const SPORTS_COMMITTEE: TeamMember[] = [
  {
    id: "sports-1",
    name: "Mopuri Abhiram",
    role: "Sports Comm Member",
    mythologicalTitle: "Sports Comm Member",
    department: "IMT2023108",
    phone: "+91 98497 54039",
    phoneRaw: "+919849754039",
    photoUrl: abhiImg,
    linkedin: "https://www.linkedin.com/in/abhiram-mopuri-0659b1385/",
    instagram: "https://www.instagram.com/",
    email: "Mpouri.AbhiRam@iiitb.ac.in",
    teamCategory: 'sports_comm'
  },
  
  
  {
    id: "sports-2",
    name: "Ansh Rupavatiya",
    role: "Sports Comm Member",
    mythologicalTitle: "Sports Comm Member",
    department: "IMT2024057",
    phone: "+91  96244 85222",
    phoneRaw: "+91 9624485222",
    photoUrl: anshImg,
    linkedin: " https://www.linkedin.com/in/ansh-rupavatiya-67529a312/",
    instagram: "https://www.instagram.com/",
    email: "RupavatiyaAnsh.Rasiklal@iiitb.ac.in",
    teamCategory: 'sports_comm'
  },
  {
    id: "sports-3",
    name: "Yashraj Mahalle",
    role: "Sports Comm Member",
    mythologicalTitle: "Sports Comm Member",
    department: "IC2025032",
    phone: "+91 93739 77020",
    phoneRaw: "+919373977020",
    photoUrl: ajayImg,
    linkedin: "https://www.linkedin.com/in/yashraj-mahalle-8541b7383/",
    instagram: "https://www.instagram.com/",
    email: "Ajay.Mahalle@iiitb.ac.in",
    teamCategory: 'sports_comm'
  },
  {
    id: "sports-4",
    name: "Srikar Pisupati",
    role: "Sports Comm Member",
    mythologicalTitle: "Sports Comm Member",
    department: "BC205074",
    phone: "+91 93539 09085",
    phoneRaw: "+919353909085",
    photoUrl: srikarImg,
    linkedin: "https://www.linkedin.com/in/srikar-pisupati-b1b6a5390/",
    instagram: "https://www.instagram.com/",
    email: "pisupati.srikar@iiitb.ac.in",
    teamCategory: 'sports_comm'
  }
];

// 2. WEBSITE DEVELOPMENT TEAM
export const WEBSITE_TEAM: TeamMember[] = [
  {
    id: "web-1",
    name: "Aditya Verma",
    role: "Lead Web Architect & Developer",
    mythologicalTitle: "Daedalus of the Web",
    department: "iM.Tech CSE · IIIT Bangalore",
    phone: "+91 98860 12450",
    phoneRaw: "+919886012450",
    photoUrl: webLeadImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "aditya.verma@iiitb.ac.in",
    teamCategory: 'website'
  },
  {
    id: "web-2",
    name: "Nikhil Rao",
    role: "Frontend & Interactions Engineer",
    mythologicalTitle: "Hephaestus' Artisan",
    department: "M.Tech CSE · IIIT Bangalore",
    phone: "+91 97425 33819",
    phoneRaw: "+919742533819",
    photoUrl: frontendDevImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "nikhil.rao@iiitb.ac.in",
    teamCategory: 'website'
  },
  {
    id: "web-3",
    name: "Arjun Sharma",
    role: "Systems & Cloud Infrastructure",
    mythologicalTitle: "Titan of the Cloud",
    department: "M.Tech CSE · IIIT Bangalore",
    phone: "+91 98450 18234",
    phoneRaw: "+919845018234",
    photoUrl: arjunImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "arjun.sharma@iiitb.ac.in",
    teamCategory: 'website'
  }
];

// 3. DESIGN & CREATIVE TEAM
export const DESIGN_TEAM: TeamMember[] = [
  {
    id: "design-1",
    name: "Meera Krishnan",
    role: "Creative Director & UI/UX Lead",
    mythologicalTitle: "Muse of Aesthetics",
    department: "M.Sc Digital Society · IIIT Bangalore",
    phone: "+91 95350 44218",
    phoneRaw: "+919535044218",
    photoUrl: designLeadImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "meera.krishnan@iiitb.ac.in",
    teamCategory: 'design'
  },
  {
    id: "design-2",
    name: "Sneha Sen",
    role: "Visual Branding & Graphic Designer",
    mythologicalTitle: "Weaver of Olympus",
    department: "iM.Tech · IIIT Bangalore",
    phone: "+91 91130 67584",
    phoneRaw: "+919113067584",
    photoUrl: diyaImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "sneha.sen@iiitb.ac.in",
    teamCategory: 'design'
  },
  {
    id: "design-3",
    name: "Tanmay Bhat",
    role: "Motion Graphics & Social Assets",
    mythologicalTitle: "Illuminator of the Agora",
    department: "iM.Tech · IIIT Bangalore",
    phone: "+91 99801 88342",
    phoneRaw: "+919980188342",
    photoUrl: rohanImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "tanmay.bhat@iiitb.ac.in",
    teamCategory: 'design'
  }
];

// Aggregated Team Sections Meta for dynamic rendering
export const ALL_TEAM_GROUPS = [
  {
    id: 'sports_comm' as TeamCategory,
    name: 'SPORTS COMMITTEE',
    subTitle: 'The Council of Olympus',
    badge: 'CORE CONVENORS & SPORTS COMM',
    description: 'The student leaders and sports committee coordinators orchestrating sports tournaments, tournament schedules, athlete logistics, and pitch operations.',
    members: SPORTS_COMMITTEE
  },
  {
    id: 'website' as TeamCategory,
    name: 'WEBSITE & TECH TEAM',
    subTitle: 'The Digital Artisans',
    badge: 'PORTAL ENGINEERING & SYSTEMS',
    description: 'The engineering minds behind the official UMANG 2026 digital portal, real-time registration conduits, and performance architecture.',
    members: WEBSITE_TEAM
  },
  {
    id: 'design' as TeamCategory,
    name: 'CREATIVE & DESIGN TEAM',
    subTitle: 'The Muses of Olympus',
    badge: 'VISUAL IDENTITY & UI/UX',
    description: 'The visionary designers shaping the aesthetic legacy of UMANG 2026 — from Greek mythological visual lore and UI/UX design to tournament branding.',
    members: DESIGN_TEAM
  }
];
