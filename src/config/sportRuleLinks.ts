/**
 * UMANG 2026 - Official Sport Rulebook Links Configuration
 * 
 * Set external Google Drive, Notion, or PDF links here if available.
 * If empty, the app opens the built-in comprehensive official rulebook document.
 */
export const SPORT_RULE_LINKS: Record<string, string> = {
  tennis: 'https://docs.google.com/document/d/1nRWUco2f21ilabrugueg3F38gMtIzAUM/edit?usp=drivesdk&ouid=106965097086014730182&rtpof=true&sd=true',
  throwball: 'https://docs.google.com/document/d/1WLWmo2YuZgI6M1zzlasb0WgYLxK7D_k-/edit?usp=drivesdk&ouid=106965097086014730182&rtpof=true&sd=true',
  chess: 'https://docs.google.com/document/d/1c-NsDKJ9zRF8jqNZXKE14bLzH5CXWEMe/edit?usp=drivesdk&ouid=106965097086014730182&rtpof=true&sd=true',
  kabaddi: 'https://docs.google.com/document/d/1CTtHv6PJLikrdL4i9Jr_b8epbTt_rYu0/edit?usp=drivesdk&ouid=106965097086014730182&rtpof=true&sd=true',
  volleyball: 'https://docs.google.com/document/d/19wJ7I8uvjyVKr14FBmHmRhaOW-X-gL8D/edit?usp=drivesdk&ouid=106965097086014730182&rtpof=true&sd=true',
  football: 'https://docs.google.com/document/d/1wueUt9L7LibV0nUmCzlP0XjdFq61H4_f/edit?usp=drivesdk&ouid=106965097086014730182&rtpof=true&sd=true',
  basketball: 'https://docs.google.com/document/d/1NqZ2wCRWNBuWrWqZM58groFDNK58RY_o/edit?usp=drivesdk&ouid=106965097086014730182&rtpof=true&sd=true',
  'table-tennis': 'https://docs.google.com/document/d/1TOvIp30naybuFUE6f-sT308jMdFe-Lnz/edit?usp=sharing&ouid=106965097086014730182&rtpof=true&sd=true',
  badminton: 'https://docs.google.com/document/d/1Chne5x89ICGT6_6TXf_EJ5e7hFrcejkN/edit?usp=drivesdk&ouid=106965097086014730182&rtpof=true&sd=true',
};

export interface SportRuleLinkItem {
  id: string;
  name: string;
  url: string;
}

export const ALL_SPORT_RULE_LINKS: SportRuleLinkItem[] = [
  {
    id: 'tennis',
    name: 'Tennis',
    url: SPORT_RULE_LINKS.tennis,
  },
  {
    id: 'throwball',
    name: 'Throwball',
    url: SPORT_RULE_LINKS.throwball,
  },
  {
    id: 'chess',
    name: 'Chess',
    url: SPORT_RULE_LINKS.chess,
  },
  {
    id: 'kabaddi',
    name: 'Kabaddi',
    url: SPORT_RULE_LINKS.kabaddi,
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    url: SPORT_RULE_LINKS.volleyball,
  },
  {
    id: 'football',
    name: 'Football',
    url: SPORT_RULE_LINKS.football,
  },
  {
    id: 'basketball',
    name: 'Basketball',
    url: SPORT_RULE_LINKS.basketball,
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    url: SPORT_RULE_LINKS['table-tennis'],
  },
  {
    id: 'badminton',
    name: 'Badminton',
    url: SPORT_RULE_LINKS.badminton,
  },
];
