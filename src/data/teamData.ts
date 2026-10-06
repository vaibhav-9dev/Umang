/**
 * UMANG 2026 - Teams Directory
 * - Sports Committee (Sports Comm)
 * - Website Development Team
 * - Creative & Design Team
 * 
 * Edit this file to update names, roles, photos, contact numbers, and social links.
 */
import nehamam from '../assets/images/neha.jpeg';
import srikarImg from '../assets/images/SrikarImg.jpeg';
import abhiImg from '../assets/images/AbhiRam.jpeg';
import ajayImg from '../assets/images/Ajay.jpeg';
import yashrajImg from '../assets/images/YashRaj.jpeg';
import anshImg from '../assets/images/Ansh.png';
import pratikImg from '../assets/images/Pratik.jpeg';
import utkarshImg from '../assets/images/Utkarsh.jpeg';
import varunImg from '../assets/images/coord_varun_portrait_1790531424265.jpg';
import ayush from '../assets/images/ayush.jpeg';
import sachin from '../assets/images/sachin.jpeg';
import vaibhav from '../assets/images/vaibhav.png';
import bhargava from '../assets/images/bhargava.jpeg';
import raadhesh from '../assets/images/raadhesh.jpeg';
import ansh from '../assets/images/anshgupta.jpeg';
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

// 1. SPORTS COMMITTEE & LEADERSHIP
export const SPORTS_COMMITTEE: TeamMember[] = [
  {
    id: "sports-director",
    name: "Dr. Neha Arora",
    role: "Sports Director",
    mythologicalTitle: "Sports Director",
    department: "Sports Officer · Physical Education",
    phone: "+91 80 4140 7777",
    phoneRaw: "+918041407777",
    photoUrl: nehamam,
    linkedin: "https://www.linkedin.com/in/neha-arora-phd-83384b264/",
    instagram: "https://www.instagram.com/umang_iiitb/",
    email: "neha.arora@iiitb.ac.in",
    teamCategory: 'sports_comm'
  },
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
    photoUrl: yashrajImg,
    linkedin: "https://www.linkedin.com/in/yashraj-mahalle-8541b7383/",
    instagram: "https://www.instagram.com/",
    email: "yashraj.mahalle@iiitb.ac.in",
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
  },
  {
    id: "sports-5",
    name: "Pratik Patil",
    role: "Sports Comm Member",
    mythologicalTitle: "Sports Comm Member",
    department: "IC2025023",
    phone: "+91 89564 89981",
    phoneRaw: "+918956489981",
    photoUrl: pratikImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "Gokul.Patil@iiitb.ac.in",
    teamCategory: 'sports_comm'
  },
  {
    id: "sports-6",
    name: "Utkarsh Gupta",
    role: "Sports Comm Member",
    mythologicalTitle: "Sports Comm Member",
    department: "IMT2024042",
    phone: "+91 93115 09800",
    phoneRaw: "+919311509800",
    photoUrl: utkarshImg,
    linkedin: "https://www.linkedin.com/in/",
    instagram: "https://www.instagram.com/",
    email: "Utkarsh.G@iiitb.ac.in",
    teamCategory: 'sports_comm'
  }
];

// 2. WEBSITE DEVELOPMENT TEAM
export const WEBSITE_TEAM: TeamMember[] = [
  {
    id: "web-1",
    name: "Ayush Patel",
    role: "Website Team",
    mythologicalTitle: "Website Team",
    department: "IIITB",
    phone: "+91 98860 12450",
    phoneRaw: "+919886012450",
    photoUrl: ayush,
    linkedin: "https://www.linkedin.com/in/ayush-p1909/",
    instagram: "https://www.instagram.com/ayush.p_9?igsh=cGxqOXR6b2I5d3h6",
    email: "",
    teamCategory: 'website'
  },
  {
    id: "web-2",
    name: "Sachin Singh Nain",
    role: "Website Team",
    mythologicalTitle: "Website Team",
    department: "IIITB",
    phone: "+91 97425 33819",
    phoneRaw: "+919742533819",
    photoUrl: sachin,
    linkedin: "https://www.linkedin.com/in/sachin-nain-58054722a/",
    instagram: "https://www.instagram.com/",
    email: "",
    teamCategory: 'website'
  },
  {
    id: "web-3",
    name: "Vaibhav Kakaraparthi",
    role: "Website Team",
    mythologicalTitle: "Website Team",
    department: "IIITB",
    phone: "+91 98450 18234",
    phoneRaw: "+919845018234",
    photoUrl: vaibhav,
    linkedin: "https://www.linkedin.com/in/vaibhav-kakaraparthi-96335b3a6/",
    instagram: "https://www.instagram.com/",
    email: "Vaibhav.Kakaraparthi@iiitb.ac.in",
    teamCategory: 'website'
  }
];

// 3. DESIGN & CREATIVE TEAM
export const DESIGN_TEAM: TeamMember[] = [
  {
    id: "design-1",
    name: "N Bhargava Chaitanya",
    role: "Design Team",
    mythologicalTitle: "Design Team",
    department: "IIITB",
    phone: "+91 95350 44218",
    phoneRaw: "+919535044218",
    photoUrl: bhargava,
    linkedin: "https://www.linkedin.com/in/bhargava-chaitanya-nomula-a84471415/",
    instagram: "https://www.instagram.com/bhargava_0749?stkn=bHFjY205OXVhczNp",
    email: "",
    teamCategory: 'design'
  },
  {
    id: "design-2",
    name: "G.Raadhesh",
    role: "Design Team",
    mythologicalTitle: "Design Team",
    department: "Design Team",
    phone: "+91 91130 67584",
    phoneRaw: "+919113067584",
    photoUrl: raadhesh,
    linkedin: "https://www.linkedin.com/in/raadhesh-guggilam-0177a4370/",
    instagram: "https://www.instagram.com/",
    email: "",
    teamCategory: 'design'
  },
  {
    id: "design-3",
    name: "Ansh Gupta",
    role: "Design Team",
    mythologicalTitle: "Design Team",
    department: "IIITB",
    phone: "+91 99801 88342",
    phoneRaw: "+919980188342",
    photoUrl: ansh,
    linkedin: "https://www.linkedin.com/in/ansh-gupta-2517b4426/",
    instagram: "https://www.instagram.com/",
    email: "",
    teamCategory: 'design'
  }
];

// Aggregated Team Sections Meta for dynamic rendering
export const ALL_TEAM_GROUPS = [
  {
    id: 'sports_comm' as TeamCategory,
    name: 'SPORTS COMMITTEE',
    subTitle: 'Sports Committee Convenors',
    badge: 'CORE CONVENORS & SPORTS COMM',
    description: 'The student leaders and sports committee coordinators orchestrating sports tournaments, tournament schedules, athlete logistics, and pitch operations.',
    members: SPORTS_COMMITTEE
  },
  {
    id: 'website' as TeamCategory,
    name: 'WEBSITE & TECH TEAM',
    subTitle: 'Web & Systems Engineering',
    badge: 'PORTAL ENGINEERING & SYSTEMS',
    description: 'The engineering minds behind the official UMANG 2026 digital portal, real-time registration conduits, and performance architecture.',
    members: WEBSITE_TEAM
  },
  {
    id: 'design' as TeamCategory,
    name: 'CREATIVE & DESIGN TEAM',
    subTitle: 'Visual & UI/UX Design',
    badge: 'VISUAL IDENTITY & UI/UX',
    description: 'The visionary designers shaping the aesthetic presentation of UMANG 2026 — from UI/UX design to tournament branding and digital assets.',
    members: DESIGN_TEAM
  }
];
