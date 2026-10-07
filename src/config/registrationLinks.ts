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
  basketball_men_3v3: "https://docs.google.com/forms/d/e/1FAIpQLSe2sy8nfwup-hQAc0k6nfmM4QEbP8I1AIN_p09j0O9vbUWfSw/viewform?usp=dialog",
  basketball_men_5v5: "https://docs.google.com/forms/d/e/1FAIpQLSd0Kjx3oc4_Eh3jT9ltsUSPo_tMrwmNiR3-GBKZVNY58juTvw/viewform?usp=dialog",
  basketball_women_3v3: "https://docs.google.com/forms/d/e/1FAIpQLSdaA_0NtTKePoYjt2L4Ui9Atp4zAOitOacJ1hgmfunz0Xh6-A/viewform?usp=dialog",

  // Football
  football_men_6v6: "https://docs.google.com/forms/d/e/1FAIpQLSfun3LubZvo28FIYYcSxUFrhFxvdRSW0-uobaoGPdF4JdPxZg/viewform?usp=dialog",

  // Table Tennis
  table_tennis_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLSesdBTF-zn9fmS3PvPBciSwhRLdtzQ20zWWbWA8u3FNafQL2Q/viewform?usp=dialog",
  table_tennis_mens_singles: "https://docs.google.com/forms/d/e/1FAIpQLSeJmyBXxXanoj2VLAX_79uzVniM2sft4Iti8bmDcgG7beZfZw/viewform?usp=dialog",
  table_tennis_mens_doubles: "https://docs.google.com/forms/d/e/1FAIpQLScfrsbmVZRgsS5nRsLzYXjGEkZZTp2UAMtMXDh46i8H_6XHyA/viewform?usp=dialog",
  table_tennis_womens_singles: "https://docs.google.com/forms/d/e/1FAIpQLSdk3gKTCE-HJmSxT7z0R95YBM5Z1w63ap29Kae8mfQ0hyuptw/viewform?usp=dialog",
  table_tennis_mixed_doubles: "https://docs.google.com/forms/d/e/1FAIpQLSd7AQJMQTebtQmUtqEquzlZw_Ze4yLApK5MJfJqh3m3cyhkZg/viewform?usp=dialog",

  // Badminton
  badminton_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLSee0GBw2vxHw4_jCIe5ltSCKR4lMMBLfzIPmXHNOk8emUtMMw/viewform?usp=dialog",
  badminton_womens_singles: "https://docs.google.com/forms/d/e/1FAIpQLSf5opJEjm5_a6cqAwfiRriEHuS9PTzaZdSUPQosN2kDr_GvlQ/viewform?usp=dialog",
  badminton_mixed_doubles: "https://docs.google.com/forms/d/e/1FAIpQLSf33NO2cvsp3pfjOKwH4jIjwkIiCBgrCER4zd1Yk_FXRPUrHg/viewform?usp=dialog",
  badminton_womens_doubles: "https://docs.google.com/forms/d/e/1FAIpQLSe1TEmMmgMbUJweoTE8NghhcSBLaPmOXyevvjUQMfGP2tGjWw/viewform?usp=dialog",

  // Volleyball
  volleyball_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLSd7b3ZtjD3uLp6dhv0apiwcQdoobL7PwxgQBheS8B9sSeTBoQ/viewform?usp=dialog",

  // Tennis
  tennis_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLScQw90nz-Ik3XAvJHlPsGPQ-vo1z5d95xtQRv1__IKPVbey6A/viewform?usp=dialog",

  // Kabaddi
  kabaddi_mens_team: "https://docs.google.com/forms/d/e/1FAIpQLSedJMkaclvDb6PXKgL-yTlLVNy_BasDzVj7BzUcJPAN_Nz2kw/viewform?usp=dialog",

  // Throwball
  throwball_womens_team: "https://docs.google.com/forms/d/e/1FAIpQLSd5Uw7aqhHs95NSANu4Ea44Xs6dq0qTcR_vSY16Od1peWh-UQ/viewform?usp=dialog",

  // Chess
  chess_team: "https://docs.google.com/forms/d/e/1FAIpQLScJDpumHBPtmL0aDI8jcXaUfpnZVlTpcenaLxckFWKH3AuNnQ/viewform?usp=dialog"
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
