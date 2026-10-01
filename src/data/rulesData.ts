/**
 * Official Tournament Rules & Code of Conduct
 * Umang 2026 - IIIT Bangalore
 * 
 * Universal regulations applicable to all participating teams, athletes, and sports.
 */

export interface TournamentRule {
  id: number;
  text: string;
  category?: 'eligibility' | 'registration' | 'conduct' | 'general';
}

export const GENERAL_TOURNAMENT_RULES: string[] = [
  "Participants must produce bona fide certificates and institute ID Cards for verification.",
  "Each college may field two teams (Team A, Team B) for each sport.",
  "No player is allowed to play for more than one team.",
  "Fixtures and schedule will be sent to the team captain 3-4 days before the tournament.",
  "Under no circumstances will teams be allowed to change their players after registration.",
  "Accommodation will not be provided for this event.",
  "All events are subject to registrations and availability of venues.",
  "The Sports Committee of IIITB reserves the right to decide on all disputes.",
  "Use of abusive language directed towards officials, players, or the organizing committee will result in immediate disqualification.",
  "All participants are expected to maintain decorum on all sporting arenas, university campus, and related areas. Any altercations/misbehaviour shall be dealt with strictly, and the decision of the Organizing Committee in this regard is final.",
  "Any altercation/misbehaviour may result in the disqualification of the participating institution from Umang 2025 and future events.",
  "The Convener of the Sports Committee (International Institute of Information Technology, Bangalore) reserves the right to change the format or rules as may be necessary at any given point in time.",
  "Once a team has paid and registered for an event, the fees is not refundable at any point."
];
