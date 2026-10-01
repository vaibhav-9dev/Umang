/**
 * UMANG 2026 - Official Google Form Registration Links
 * 
 * Replace the placeholder URLs below with the official Google Form URLs for each event.
 * When an athlete clicks "REGISTER" for any event, they are redirected directly to
 * the corresponding Google Form in a new tab.
 */

export type EventRegistrationKey =
  | 'basketball_men_3v3'
  | 'basketball_men_5v5'
  | 'basketball_women_3v3'
  | 'football_men_6v6'
  | 'table_tennis_mens_team'
  | 'table_tennis_mens_singles'
  | 'table_tennis_mens_doubles'
  | 'table_tennis_womens_singles'
  | 'table_tennis_mixed_doubles'
  | 'badminton_mens_team'
  | 'badminton_womens_singles'
  | 'badminton_mixed_doubles'
  | 'badminton_womens_doubles'
  | 'volleyball_mens_team'
  | 'tennis_mens_team'
  | 'kabaddi_mens_team'
  | 'throwball_womens_team'
  | 'chess_team';

export const REGISTRATION_LINKS: Record<EventRegistrationKey, string> = {
  // Basketball
  basketball_men_3v3: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-basketball-m3v3/viewform",
  basketball_men_5v5: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-basketball-m5v5/viewform",
  basketball_women_3v3: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-basketball-w3v3/viewform",

  // Football
  football_men_6v6: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-football-m6v6/viewform",

  // Table Tennis
  table_tennis_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-tt-mens-team/viewform",
  table_tennis_mens_singles: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-tt-mens-singles/viewform",
  table_tennis_mens_doubles: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-tt-mens-doubles/viewform",
  table_tennis_womens_singles: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-tt-womens-singles/viewform",
  table_tennis_mixed_doubles: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-tt-mixed-doubles/viewform",

  // Badminton
  badminton_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-badminton-mens-team/viewform",
  badminton_womens_singles: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-badminton-womens-singles/viewform",
  badminton_mixed_doubles: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-badminton-mixed-doubles/viewform",
  badminton_womens_doubles: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-badminton-womens-doubles/viewform",

  // Volleyball
  volleyball_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-volleyball-mens-team/viewform",

  // Tennis
  tennis_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-tennis-mens-team/viewform",

  // Kabaddi
  kabaddi_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-kabaddi-mens-team/viewform",

  // Throwball
  throwball_womens_team: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-throwball-womens-team/viewform",

  // Chess
  chess_team: "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-chess-team/viewform"
};

/**
 * Dispatches navigation directly to the event's Google Form in a new tab
 */
export function openRegistrationForm(key: EventRegistrationKey) {
  const url = REGISTRATION_LINKS[key];
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
