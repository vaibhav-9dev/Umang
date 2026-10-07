export interface OfficialSportRuleDoc {
  id: string;
  sportName: string;
  title: string;
  categorySummary?: string;
  venueInfo?: {
    name: string;
    address: string;
    distance?: string;
    surface?: string;
    ball?: string;
    courts?: string;
  };
  officials?: Array<{
    role: string;
    name: string;
    phone: string;
    email: string;
  }>;
  sections: Array<{
    heading: string;
    items: string[];
  }>;
}

export const OFFICIAL_SPORT_RULES: Record<string, OfficialSportRuleDoc> = {
  tennis: {
    id: 'tennis',
    sportName: 'Tennis',
    title: 'UMANG 2026 TENNIS RULES & REGULATIONS',
    categorySummary: "Men's Team (2 to 4 Players)",
    venueInfo: {
      name: 'SOL Sports Tennis Academy',
      address: 'RJWV+89V, Neeladri Road, Electronic City, Bengaluru, Karnataka 560100',
      distance: 'Around 2.4 km from IIIT Bangalore (teams arrange own transport)',
      surface: 'Clay Court',
      ball: 'Dunlop AO',
      courts: '2 Courts (Non-floodlit)'
    },
    officials: [
      { role: 'SPOC 1', name: 'Surya Karthik', phone: '+91 7569566894', email: 'Surya.chimalapati@iiitb.ac.in' },
      { role: 'SPOC 2', name: 'Hanish P', phone: '+91 9346883771', email: 'Penumarti.hanish@iiitb.ac.in' }
    ],
    sections: [
      {
        heading: 'General Rules',
        items: [
          'Conducted strictly under official All India Tennis Association (AITA) rules.',
          "The Umpire's decision on all on-court matters is final and binding.",
          'All matches will be played on clay courts using Dunlop AO tennis balls.'
        ]
      },
      {
        heading: 'Player & Team Responsibilities',
        items: [
          'Each team must have a minimum of 2 players and a maximum of 4 players.',
          'Players must arrive at their assigned court at least 15 minutes prior to scheduled match time.'
        ]
      },
      {
        heading: 'Team Match Structure',
        items: [
          'Singles 1: Player A (Team 1) vs. Player X (Team 2).',
          'Singles 2: Player B (Team 1) vs. Player Y (Team 2). Important: A player cannot compete in both singles matches.',
          'Doubles (Decider Match): Played only if singles matches are split 1-1.'
        ]
      },
      {
        heading: 'Winning a Tie',
        items: [
          'Outright Win: If a team wins both singles matches, they win the tie (doubles match not played).',
          'Decider: If tied 1-1 after singles, the winner of the doubles match wins the tie.'
        ]
      },
      {
        heading: 'Scoring Format',
        items: [
          'Group Stage: Best of 15 games (first to 8; 7-point tiebreak at 7-7).',
          'Semi-Finals: Best of 17 games (first to 9; 7-point tiebreak at 8-8).',
          'Finals: Best of 3 full sets.',
          'All games across all rounds played with a 2-point advantage on deuce (applies to both singles and doubles).'
        ]
      }
    ]
  },

  throwball: {
    id: 'throwball',
    sportName: 'Throwball',
    title: "UMANG 2026 WOMEN'S THROWBALL RULES & REGULATIONS",
    categorySummary: "Women's Team (7 on court + 5 substitutes)",
    sections: [
      {
        heading: 'Match Format & Team Composition',
        items: [
          'Match played as best of 3 sets, each set going up to 25 points.',
          'Teams must have 7 players on court with a maximum of 5 substitutes.',
          'Court Arrangement: Players must be positioned in a 2-3-2 formation during service.'
        ]
      },
      {
        heading: 'Service & Ball Handling Rules',
        items: [
          'Service changes count as a point (continuous scoring applies).',
          'Ball must be thrown above shoulder height; underarm serves and sidearm throws are strictly prohibited.',
          'Ball must be caught with both hands and thrown with one hand only.',
          'Contact with the body beyond the palm is prohibited (touching results in foul).',
          'Shifting the ball from one hand to another or pushing it is not allowed.',
          'Two players cannot catch the ball simultaneously.'
        ]
      },
      {
        heading: 'Player Movement & Service Procedure',
        items: [
          'Players cannot rotate 360° with the ball.',
          'Spinning the ball is allowed, even during service.',
          'Ball must be released within 3 seconds of catching it.',
          'Service occurs only after the whistle and must be executed within 5 seconds.',
          'Server must enter the court as soon as the ball leaves hand; boundary line must not be crossed during service.'
        ]
      },
      {
        heading: 'Catching & Dead Box Rules',
        items: [
          'While catching a service, double touch by two people is prohibited.',
          'For all other balls, double touch by the same person is not allowed.',
          'Jumping while catching is prohibited. Jumping while serving and throwing the ball is permitted.',
          'Dead Box: If ball falls within dead box, it is a foul. Stepping into dead box with or without ball is also a foul.',
          'Ball can touch net except during service. Any ball landing on boundary line is considered in.'
        ]
      },
      {
        heading: 'Timeouts, Substitutions & Rain Policy',
        items: [
          'Two time-outs and 5 substitutions permitted per set.',
          'Every player must serve, rotating in a Z formation.',
          'Spectators must remain outside designated areas; standing behind baseline is prohibited.',
          'In case of drizzle, play continues after pitch inspection; in heavy rain, league games conclude in a draw.'
        ]
      }
    ]
  },

  chess: {
    id: 'chess',
    sportName: 'Chess',
    title: 'UMANG 2026 CHESS TOURNAMENT RULES',
    categorySummary: 'Team Event (Min 4, Max 5 Players)',
    sections: [
      {
        heading: 'Team Formation & Prizes',
        items: [
          'Category: Open Team Championship (Minimum 4, Maximum 5 players including substitute).',
          'Registration Fee: ₹2,000 per team.',
          'Cash Prizes: 1st Position – ₹10,000 | 2nd Position – ₹6,000.',
          'Team captain must be declared during registration and remains fixed throughout.'
        ]
      },
      {
        heading: 'Tournament System & Format',
        items: [
          'Adheres strictly to FIDE Laws of Chess and FIDE Tournament Rules.',
          'All team members must be affiliated with the same educational institution.',
          'Tournament pairings conducted using the official FIDE Swiss System (qualifiers/knockout stage may precede Swiss league based on entry count).',
          'In each round, exactly 4 players from the team compete on boards 1 to 4.'
        ]
      },
      {
        heading: 'Time Control & Substitution',
        items: [
          'Time Format: 30 minutes initial time + 30 seconds increment (bonus time) per move from Move 1.',
          'Substitute player may only be slotted on Board 4, with active players shifting up as per fixed team alignment.',
          'Captain submits written board pairings list before round, informs players, and signs match protocol.',
          'Rules & schedule subject to change in spirit of the game; decision of Chief Arbiter/SPOC is final.'
        ]
      }
    ]
  },

  kabaddi: {
    id: 'kabaddi',
    sportName: 'Kabaddi',
    title: 'UMANG 2026 KABADDI CHAMPIONSHIP RULES',
    categorySummary: "Men's Team (Min 10, Max 12 Players · Weight <= 85 kg)",
    sections: [
      {
        heading: 'Team Formation & Prizes',
        items: [
          "Category: Men's Team (Min 10, Max 12 squad members; 7 active on mat).",
          'Registration Fee: ₹2,000 per team.',
          'Cash Prizes: 1st Position – ₹14,000 | 2nd Position – ₹9,000.',
          'Captain declared during registration remains the same throughout.'
        ]
      },
      {
        heading: 'Standard Game Rules',
        items: [
          'Matches played on International standard synthetic Kabaddi mat; mat shoes compulsory.',
          'Weight Category: Strict 85 Kg and below weigh-in requirement.',
          'Governed by Amateur Kabaddi Federation of India (AKFI) official rules & regulations.',
          'Valid student ID cards mandatory for all players prior to mat entry.',
          "Referee's decision is final and binding. Any misbehavior leads to immediate team disqualification.",
          'Teams must be accompanied by their Physical Education Director / Team Manager who is responsible for conduct.'
        ]
      },
      {
        heading: 'Misconduct Protocol',
        items: [
          'In extreme cases of misconduct, team receives an official warning followed by immediate tournament disqualification.',
          'Authority to execute sanctions lies exclusively with the Umang SPOCs and certified Referees.'
        ]
      }
    ]
  },

  volleyball: {
    id: 'volleyball',
    sportName: 'Volleyball',
    title: 'UMANG 2026 VOLLEYBALL CHAMPIONSHIP RULES',
    categorySummary: "Men's Team (Min 10, Max 12 Squad · 6 on Court)",
    sections: [
      {
        heading: 'Team Formation & Prizes',
        items: [
          "Category: Men's Team (Min 10, Max 12 squad members including liberos).",
          'Registration Fee: ₹2,500 per team.',
          'Cash Prizes: 1st Position – ₹20,000 | 2nd Position – ₹12,500.'
        ]
      },
      {
        heading: 'Match Format & Scoring',
        items: [
          'Exactly 6 active players on court at any time.',
          'League matches: Best of 3 sets to 25 points each (continuous scoring).',
          'Final match: Best of 5 sets of 25 points each, with the 5th deciding set played to 15 points.',
          'Service changes count as points; on-the-line balls during play and service are considered IN.',
          'Rotations must be strictly observed as per FIVB international guidelines.'
        ]
      },
      {
        heading: 'Net, Centreline & Substitution Rules',
        items: [
          'Net Contact Fault: Contact with net between antennae during the action of playing ball (including take-off, hit, landing) is a fault.',
          'Centreline: Partial foot crossing allowed; full crossover with no part touching centreline is a foul.',
          'Maximum 4 substitutions per set (including injury substitution).',
          'Injured players receive a one-time 3-minute medical timeout.',
          'Timeouts: Maximum 2 timeouts of 30 seconds per set (1 additional timeout if set runs beyond 3 deuces).',
          'Libero must wear a contrasting jersey and can replace only one back-row position at a time.'
        ]
      }
    ]
  },

  football: {
    id: 'football',
    sportName: 'Football',
    title: 'UMANG 2026 6V6 SHORT PITCH FOOTBALL RULES',
    categorySummary: "Men's 6v6 (10 Squad · 6 on Pitch)",
    sections: [
      {
        heading: 'Squad & Substitutions',
        items: [
          'Team of 10 players including goalkeeper (6 active + 4 substitutes).',
          'Rolling substitutions permitted from registered match sheet by informing referee.',
          'Goalkeeper can change within registered 10 players with referee permission.',
          'Minimum 5 players required to start match; fewer than 5 results in a 3-0 walkover.',
          'Proper football shoes mandatory; jewelry (rings, kada, bracelets) strictly prohibited.'
        ]
      },
      {
        heading: 'Match Duration & Ball Rules',
        items: [
          'League Stage: Two 15-minute halves with a 5-minute halftime interval (15-5-15).',
          'Knockout Stage: Two 20-minute halves with a 5-minute halftime interval (20-5-20).',
          'No throw-ins: Kick-ins from touchline apply throughout.',
          'Goal from direct goal-kick and centre-start counts as goal; direct goal from touchline kick-in does not count.',
          'Tree Deflection: If ball touches trees and deflects, play stops immediately and kick-in is awarded to opposing team.'
        ]
      },
      {
        heading: 'Penalties & Infringements',
        items: [
          "Penalties awarded inside 'D' for fouls preventing scoring or intentional/unintentional handball by outfield players.",
          'Penalty kick taken without a run-up with non-striking foot implanted on ground. No retakes.',
          'Back-pass: If goalkeeper catches back-pass made by teammate, penalty awarded to opponent.',
          'Yellow card incurs a 2-minute sin-bin penalty; repeated offense or red card results in match ejection.',
          'No offside rule in effect for this tournament.'
        ]
      },
      {
        heading: 'Points, Standings & Tiebreakers',
        items: [
          'Points: Win = 3 pts, Draw = 1 pt, Loss = 0 pts. Walkover awarded as 2-0 win (3 pts).',
          'Tiebreaker in Knockouts: Extra time of 5-5 minutes followed by penalty shootout (3 kicks each, followed by sudden death).',
          'Only players on pitch at final whistle may participate in penalty shootouts.'
        ]
      }
    ]
  },

  basketball: {
    id: 'basketball',
    sportName: 'Basketball',
    title: 'UMANG 2026 BASKETBALL CHAMPIONSHIP RULES',
    categorySummary: "Men's 5v5, Men's 3v3, Women's 3v3",
    sections: [
      {
        heading: 'Team Categories & Registration Fees',
        items: [
          "1. Men's 5v5: Registration Fee ₹2,500 per team (Min 5, Max 12 players). Cash Prizes: 1st ₹20,000 | 2nd ₹12,500.",
          "2. Men's 3v3: Registration Fee ₹1,000 per team (Min 3, Max 4 players). Cash Prizes: 1st ₹10,000 | 2nd ₹6,000.",
          "3. Women's 3v3: Registration Fee ₹1,000 per team (Min 3, Max 4 players). Cash Prizes: 1st ₹10,000 | 2nd ₹6,000.",
          'Each college may field up to two teams (Team A, Team B). No player may play for more than one team.'
        ]
      },
      {
        heading: "Men's 5v5 Match Regulations",
        items: [
          'Conducted under official FIBA rules and regulations.',
          'Quarter Length: 8 minutes per quarter until semi-finals; 10 minutes per quarter for semi-finals and finals.',
          'Official Match Ball: Nivia Pro-Touch Size 7 balls.',
          'Teams must report in uniform jerseys with visible numbers at least 20 minutes prior to tip-off.'
        ]
      },
      {
        heading: "Women's & Men's 3v3 Regulations",
        items: [
          'Played under official FIBA 3x3 half-court rules.',
          'Match Duration: 8 minutes until semi-finals; 10 minutes for semi-finals and finals (or first team to 21 points).',
          'Official Match Ball: Nivia official 3v3 basketball.',
          '12-second shot clock applies; 1-point and 2-point arc scoring.'
        ]
      },
      {
        heading: 'Code of Conduct & Misconduct',
        items: [
          'Zero tolerance for abusive language or referee dissent; results in immediate disqualification.',
          'Under no circumstances may teams change players after registration verification.'
        ]
      }
    ]
  },

  'table-tennis': {
    id: 'table-tennis',
    sportName: 'Table Tennis',
    title: 'UMANG 2026 TABLE TENNIS CHAMPIONSHIP RULES',
    categorySummary: "Men's Team, Singles, Doubles, Mixed Doubles",
    sections: [
      {
        heading: "Men's Team Tie Format",
        items: [
          'Team Composition: Minimum 3 players, Maximum 5 players (exactly 3 players compete in each tie).',
          'Captains conduct coin toss before match to determine Team ABC vs Team XYZ.',
          'Format: 5 individual singles matches: A vs X, B vs Y, C vs Z, followed by Reverse Singles A vs Y and B vs X.',
          'First team to win 3 out of 5 matches wins the tie.'
        ]
      },
      {
        heading: 'Service Rules (ITTF Compliant)',
        items: [
          'Ball must be tossed vertically at least 16 cm (approx 6 inches) from an open palm above table surface.',
          'Ball must be visible to opponent at all times throughout toss and strike; hiding serve with body or apparel is an immediate violation.',
          'Service must alternate every 2 points.',
          'Doubles Service: Must bounce from server right cross-court to receiver right cross-court.'
        ]
      },
      {
        heading: 'General Match Play & Equipment',
        items: [
          'Free hand must not touch table playing surface at any time (awards point to opponent).',
          'Maximum 1 timeout of 1 minute 30 seconds allowed per match.',
          '1-minute break allowed between successive sets; towel breaks allowed after every 6 points.',
          'Wet ball rule: If ball becomes wet during rally, point is replayed.',
          'White apparel is strictly discouraged due to white tournament balls.',
          'Table tennis is a non-contact sport; sledging or racquet abuse will invite immediate point penalties.'
        ]
      },
      {
        heading: 'Doubles Sequence of Play',
        items: [
          'Order of return: P serves to R -> R returns to Q -> Q returns to S -> S returns to P (strict rotation).',
          'Failure to follow rotational order awards point to opponent pair.'
        ]
      }
    ]
  },

  badminton: {
    id: 'badminton',
    sportName: 'Badminton',
    title: 'UMANG 2026 BADMINTON CHAMPIONSHIP RULES',
    categorySummary: "Men's Team, Women's Singles, Mixed Doubles, Women's Doubles",
    sections: [
      {
        heading: "Men's Team Event Structure",
        items: [
          'Category: Men’s Team (Registration Fee ₹2,500; 4 to 7 players per team).',
          '5-Match Tie Sequence: 1st Singles -> 1st Doubles -> 2nd Singles -> 2nd Doubles -> 3rd Singles.',
          'First team to win 3 matches wins the tie.',
          'Each player can play a maximum of one singles match and one doubles match in a tie.',
          'Maximum 2 teams per college allowed.'
        ]
      },
      {
        heading: 'Individual Categories & Equipment',
        items: [
          "Women's Singles: Registration Fee ₹500 per person.",
          "Mixed Doubles: Registration Fee ₹800 per pair.",
          "Women's Doubles: Registration Fee ₹800 per pair.",
          'Official Shuttlecock: Yonex Mavis 350 tournament shuttles used for all matches.',
          'Only non-marking badminton shoes allowed on synthetic indoor courts.'
        ]
      },
      {
        heading: 'BWF Scoring System',
        items: [
          'Best of 3 games to 21 points (rally point scoring system).',
          'Every rally won awards 1 point to the winning side.',
          'At 20-all, a 2-point lead is required to win; at 29-all, the side scoring the 30th point wins the game.',
          'Players receive a 60-second break when leading score reaches 11 points, and a 2-minute interval between games.',
          'In the deciding 3rd game, players change sides when either side reaches 11 points.'
        ]
      },
      {
        heading: 'Faults & Continuous Play',
        items: [
          'Shuttle touching ceiling, net post, clothing, or invading opponent court over net is a fault.',
          'Deliberately distracting opponent with shouts or gestures will receive warnings and point penalties.',
          'Double hit or sling/carry during stroke execution is a fault.',
          'Continuous play rule enforced; players may only receive coaching during designated intervals.'
        ]
      }
    ]
  }
};
