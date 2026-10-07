/**
 * UMANG 2026 - Official Sport Rulebook Links Configuration
 * 
 * Set external Google Drive, Notion, or PDF links here if available.
 * If empty, the app opens the built-in comprehensive official rulebook document.
 */
export const SPORT_RULE_LINKS: Record<string, string> = {
  tennis: 'https://docs.google.com/document/d/1kRACQeJhMcODjy3XQP2f9nFrgUlP-zH5KcdGjpkTkkI/edit?usp=drivesdk',
  throwball: 'https://docs.google.com/document/d/1pKUu5wS1WNQ91bzIPmS7Q-8LSTHnECrIITWl4JWiVbg/edit?usp=drivesdk',
  chess: 'https://docs.google.com/document/d/1Xzh1HJBYZGidqLDhxh7FDsv2iIXH8pJwDJIq81ohxOs/edit?usp=drivesdk',
  kabaddi: 'https://docs.google.com/document/d/17jwO4K1VKQA0iAihlJ7UDtBeHk7VAtYxDgX3vBSA47c/edit?usp=drivesdk',
  volleyball: 'https://docs.google.com/document/d/1VQxA5w4D0MBBkS2tlppf3h6dED3DIO3LIfzLWX2PtNY/edit?usp=drivesdk',
  football: 'https://docs.google.com/document/d/1e8iGmGGVuzvuIYmo1k4ebpMtu4MCjtn5s8PyxBOcN-c/edit?usp=drivesdk',
  basketball: 'https://docs.google.com/document/d/1NqZ2wCRWNBuWrWqZM58groFDNK58RY_o/edit?usp=sharing&ouid=106965097086014730182&rtpof=true&sd=true',
  'table-tennis': 'https://docs.google.com/document/d/1e3LlHk4R1xgk2LEBpthICzBSA-JjkmT_4TuqKJSxYc8/edit?usp=drive_link',
  badminton: 'https://docs.google.com/document/d/1P1EI6oCfZud2WI_Ie0Ww7e4WGM_amKMK3Phx65HS2ZE/edit?usp=drivesdk',
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
