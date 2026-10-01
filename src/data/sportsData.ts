import { EventRegistrationKey } from '../config/registrationLinks';

import basketballImg from '../assets/images/bbcourt.jpg';
import bbarena from '../assets/images/bbarena.jpg';
import footballImg from '../assets/images/sports_football_match_1790580542566.jpg';
import ffarena from '../assets/images/ftarena.jpg';
import ffplay from '../assets/images/ftplay.png';
import ff from '../assets/images/football.png';
import tt from '../assets/images/TT.png';
import ttplay from '../assets/images/ttplay.jpg';
import ttarena from '../assets/images/ttarena.jpg';
import ttImg from '../assets/images/sports_table_tennis_duel_1790580567841.jpg';
import btplay from '../assets/images/btplay.jpeg';
import btarena from '../assets/images/btarena.jpeg';
import badminton from '../assets/images/badminton.png';
import badmintonImg from '../assets/images/sports_badminton_smash_1790580555490.jpg';
import volleyball from '../assets/images/ballv.png';
import vbplay from '../assets/images/vbplay.jpg';
import vbarena from '../assets/images/vbarena.jpg';
import tenplay from '../assets/images/tenplay.jpg';
import tenarena from '../assets/images/tenarena.jpg';
import tennis from '../assets/images/tennis.png';
import kplay from '../assets/images/kplay.jpg';
import kabaddi from '../assets/images/kabaddi.png';
import thplay from '../assets/images/thplay.jpg';
import tharena from '../assets/images/tharena.jpg';
import throwball from '../assets/images/throwball.png';
import chplay from '../assets/images/chplay.jpg';
import charena from '../assets/images/charena.jpg';
import chess from '../assets/images/chess.jpg';
import bbstatue from '../assets/images/basketball.png';
import { GENERAL_TOURNAMENT_RULES } from './rulesData';

export { GENERAL_TOURNAMENT_RULES } from './rulesData';

export interface SportEvent {
  id: string;
  name: string;
  category: "Men" | "Women" | "Mixed" | "Open";
  format: string;
  registrationKey: EventRegistrationKey;
  notes?: string;
}

export interface SportGalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  caption: string;
}

export interface Sport {
  id: string;
  orderNumber: string; // e.g. "I", "II", "III"
  name: string;
  subtitle: string;
  greekDeity: string;
  mythosQuote: string;
  overview: string;
  events: SportEvent[];
  iconName: string;
  heroImage: string;
  rules: string[];
  sportSpecificRules?: string[];
  generalRules?: string[];
  gallery: SportGalleryItem[];
}

export const SPORTS_DATA: Sport[] = [
  {
    id: "basketball",
    orderNumber: "I",
    name: "Basketball",
    subtitle: "THE ARENA OF CHAMPIONS",
    greekDeity: "Domain of Nike & Ares",
    mythosQuote: "Ascend the heights of Olympus. Rise above the rim where mortals become legends.",
    overview: "The hardwood arena beckons the bold. Combining explosive verticality, court vision, and relentless fast breaks, the basketball tournament at Umang 2026 tests the absolute limits of team chemistry and clutch shooting.",
    iconName: "Flame",
    heroImage: bbstatue,
    events: [
      {
        id: "basketball-m-3v3",
        name: "Men's 3v3",
        category: "Men",
        format: "3 vs 3 Half Court",
        registrationKey: "basketball_men_3v3",
        notes: "Details will be announced soon."
      },
      {
        id: "basketball-m-5v5",
        name: "Men's 5v5",
        category: "Men",
        format: "Full Court 5 vs 5",
        registrationKey: "basketball_men_5v5",
        notes: "Details will be announced soon."
      },
      {
        id: "basketball-w-3v3",
        name: "Women's 3v3",
        category: "Women",
        format: "3 vs 3 Half Court",
        registrationKey: "basketball_women_3v3",
        notes: "Details will be announced soon."
      }
    ],
    sportSpecificRules: [
      "All standard FIBA rules govern the matches unless specifically modified by the tournament committee.",
      "For 5v5: 4 quarters of regulation playing time; running clock until the final 2 minutes of the fourth quarter.",
      "For 3v3: Half court format with a 12-second shot clock; first team to 21 points or highest score after 10 minutes wins.",
      "Teams must report in matching collegiate jerseys with visible numbers at least 20 minutes prior to scheduled tip-off.",
      "Strict zero-tolerance policy for unsportsmanlike fouls, technical fouls, or referee dissent.",
      "Fixtures, bracket draws, and court timings will be announced soon by the Sports Committee."
    ],
    generalRules: GENERAL_TOURNAMENT_RULES,
    rules: [
      "All standard FIBA rules govern the matches unless specifically modified by the tournament committee.",
      "For 5v5: 4 quarters of regulation playing time; running clock until the final 2 minutes of the fourth quarter.",
      "For 3v3: Half court format with a 12-second shot clock; first team to 21 points or highest score after 10 minutes wins.",
      "Teams must report in matching collegiate jerseys with visible numbers at least 20 minutes prior to scheduled tip-off.",
      "Strict zero-tolerance policy for unsportsmanlike fouls, technical fouls, or referee dissent.",
      "Fixtures, bracket draws, and court timings will be announced soon by the Sports Committee.",
      ...GENERAL_TOURNAMENT_RULES
    ],
    gallery: [
      {
        id: "bball-1",
        imageUrl: basketballImg,
        title: "Ascent to the Rim",
        caption: "High-flying action above the defense under dramatic arena spotlights."
      },
      {
        id: "bball-2",
        imageUrl: bbarena,
        title: "The Collegiate Colosseum",
        caption: "IIIT Bangalore court prepared for high-intensity tournament play."
      },
      {
        id: "bball-3",
        imageUrl: bbstatue,
        title: "Classical Athleticism",
        caption: "The spirit of ancient Greek athletics reborn in collegiate competition."
      }
    ]
  },
  {
    id: "football",
    orderNumber: "II",
    name: "Football",
    subtitle: "BATTLE BENEATH OLYMPUS",
    greekDeity: "Domain of Hephaestus & Ares",
    mythosQuote: "Forged in endurance. A contest of speed, tactical unity, and unyielding will.",
    overview: "Under the stadium lights of IIIT Bangalore, teams collide in a high-octane 6v6 tournament. Space is tight, pace is relentless, and every through ball carries the weight of victory.",
    iconName: "Shield",
    heroImage: ff,
    events: [
      {
        id: "football-m-6v6",
        name: "Men's 6v6",
        category: "Men",
        format: "6 vs 6 Squad",
        registrationKey: "football_men_6v6",
        notes: "Details will be announced soon."
      }
    ],
    sportSpecificRules: [
      "Tournament follows standard 6v6 short-pitch football regulations with rolling substitutions.",
      "Matches consist of two 20-minute halves separated by a 5-minute halftime interval.",
      "No offside rule in effect; goalkeepers may not throw or kick the ball directly into the opponent's penalty box on the full.",
      "Players must wear proper football boots/studs and shin guards at all times during match play.",
      "Yellow cards result in a 2-minute sin-bin penalty; red cards incur immediate ejection and a one-match suspension.",
      "Detailed fixture brackets and kickoff schedules will be announced soon."
    ],
    generalRules: GENERAL_TOURNAMENT_RULES,
    rules: [
      "Tournament follows standard 6v6 short-pitch football regulations with rolling substitutions.",
      "Matches consist of two 20-minute halves separated by a 5-minute halftime interval.",
      "No offside rule in effect; goalkeepers may not throw or kick the ball directly into the opponent's penalty box on the full.",
      "Players must wear proper football boots/studs and shin guards at all times during match play.",
      "Yellow cards result in a 2-minute sin-bin penalty; red cards incur immediate ejection and a one-match suspension.",
      "Detailed fixture brackets and kickoff schedules will be announced soon.",
      ...GENERAL_TOURNAMENT_RULES
    ],
    gallery: [
      {
        id: "fb-1",
        imageUrl: ffplay,
        title: "Battle for Possession",
        caption: "Fierce midfield skirmish under the evening stadium floodlights."
      },
      {
        id: "fb-2",
        imageUrl: ffarena,
        title: "The Pitch of Honour",
        caption: "Pristine turf ready for the premier inter-college clash."
      },
      {
        id: "fb-3",
        imageUrl: ff,
        title: "Olympian Twilight",
        caption: "Sunset over the championship arena as teams gear up for kick-off."
      }
    ]
  },
  {
    id: "table-tennis",
    orderNumber: "III",
    name: "Table Tennis",
    subtitle: "PRECISION OF THE GODS",
    greekDeity: "Domain of Apollo",
    mythosQuote: "Split-second instinct and divine precision. When the orb flies, destiny is decided.",
    overview: "Lightning reflexes, deceitful spin, and unwavering composure. Table tennis at Umang 2026 spans across individual singles, doubles partnerships, mixed duels, and prestigious team championships.",
    iconName: "Zap",
    heroImage: tt,
    events: [
      {
        id: "tt-m-team",
        name: "Men's Team",
        category: "Men",
        format: "Team Tournament",
        registrationKey: "table_tennis_mens_team",
        notes: "Details will be announced soon."
      },
      {
        id: "tt-m-singles",
        name: "Men's Singles",
        category: "Men",
        format: "Individual Singles",
        registrationKey: "table_tennis_mens_singles",
        notes: "Details will be announced soon."
      },
      {
        id: "tt-m-doubles",
        name: "Men's Doubles",
        category: "Men",
        format: "Doubles Pair",
        registrationKey: "table_tennis_mens_doubles",
        notes: "Details will be announced soon."
      },
      {
        id: "tt-w-singles",
        name: "Women's Singles",
        category: "Women",
        format: "Individual Singles",
        registrationKey: "table_tennis_womens_singles",
        notes: "Details will be announced soon."
      },
      {
        id: "tt-mixed-doubles",
        name: "Mixed Doubles",
        category: "Mixed",
        format: "Mixed Pair",
        registrationKey: "table_tennis_mixed_doubles",
        notes: "Details will be announced soon."
      }
    ],
    sportSpecificRules: [
      "All matches adhere strictly to International Table Tennis Federation (ITTF) guidelines.",
      "Singles and doubles preliminary rounds are best-of-5 sets; semi-finals and finals are best-of-7 sets (11 points per set).",
      "Two-point advantage required to conclude deuce situations at 10-10.",
      "Only ITTF-approved rubber paddles and non-marking indoor sports shoes are permitted on the court matting.",
      "Team championship format entails best-of-5 matches (3 Singles and 2 Doubles ties).",
      "Table assignments and draw sheets will be announced soon."
    ],
    generalRules: GENERAL_TOURNAMENT_RULES,
    rules: [
      "All matches adhere strictly to International Table Tennis Federation (ITTF) guidelines.",
      "Singles and doubles preliminary rounds are best-of-5 sets; semi-finals and finals are best-of-7 sets (11 points per set).",
      "Two-point advantage required to conclude deuce situations at 10-10.",
      "Only ITTF-approved rubber paddles and non-marking indoor sports shoes are permitted on the court matting.",
      "Team championship format entails best-of-5 matches (3 Singles and 2 Doubles ties).",
      "Table assignments and draw sheets will be announced soon.",
      ...GENERAL_TOURNAMENT_RULES
    ],
    gallery: [
      {
        id: "tt-1",
        imageUrl: ttplay,
        title: "The Service of Apollo",
        caption: "Razor-sharp spin generation during high-stakes championship play."
      },
      {
        id: "tt-2",
        imageUrl: ttarena,
        title: "The Dual Arenas",
        caption: "Championship tables prepared inside the IIIT Bangalore sports complex."
      },
      {
        id: "tt-3",
        imageUrl: tt,
        title: "Sanctuary of Speed",
        caption: "Atmospheric collegiate stage setting the scene for epic rallies."
      }
    ]
  },
  {
    id: "badminton",
    orderNumber: "IV",
    name: "Badminton",
    subtitle: "WINGS OF VICTORY",
    greekDeity: "Domain of Hermes",
    mythosQuote: "Swift as feathered sandals across Mount Olympus. Agility reigns supreme.",
    overview: "Soaring overhead smashes and feather-light net drops. The badminton arena brings explosive footwork and tactical racquet craft together across singles, doubles, and team encounters.",
    iconName: "Feather",
    heroImage: badminton,
    events: [
      {
        id: "badminton-m-team",
        name: "Men's Team",
        category: "Men",
        format: "Team Championship",
        registrationKey: "badminton_mens_team",
        notes: "Details will be announced soon."
      },
      {
        id: "badminton-w-singles",
        name: "Women's Singles",
        category: "Women",
        format: "Individual Singles",
        registrationKey: "badminton_womens_singles",
        notes: "Details will be announced soon."
      },
      {
        id: "badminton-mixed-doubles",
        name: "Mixed Doubles",
        category: "Mixed",
        format: "Mixed Pair",
        registrationKey: "badminton_mixed_doubles",
        notes: "Details will be announced soon."
      },
      {
        id: "badminton-w-doubles",
        name: "Women's Doubles",
        category: "Women",
        format: "Doubles Pair",
        registrationKey: "badminton_womens_doubles",
        notes: "Details will be announced soon."
      }
    ],
    sportSpecificRules: [
      "Matches played according to standard Badminton World Federation (BWF) rally point scoring system.",
      "Best of 3 games to 21 points; side winning a rally adds a point to its score.",
      "If score reaches 20-all, the side which gains a 2-point lead first wins; at 29-all, the side scoring the 30th point wins.",
      "Non-marking rubber shoes are strictly mandatory on the synthetic courts.",
      "Tournament grade feathered shuttlecocks will be provided for all official ties.",
      "Detailed court schedules and tie timings will be announced soon."
    ],
    generalRules: GENERAL_TOURNAMENT_RULES,
    rules: [
      "Matches played according to standard Badminton World Federation (BWF) rally point scoring system.",
      "Best of 3 games to 21 points; side winning a rally adds a point to its score.",
      "If score reaches 20-all, the side which gains a 2-point lead first wins; at 29-all, the side scoring the 30th point wins.",
      "Non-marking rubber shoes are strictly mandatory on the synthetic courts.",
      "Tournament grade feathered shuttlecocks will be provided for all official ties.",
      "Detailed court schedules and tie timings will be announced soon.",
      ...GENERAL_TOURNAMENT_RULES
    ],
    gallery: [
      {
        id: "bad-1",
        imageUrl: btplay,
        title: "Thunderous Jump Smash",
        caption: "Athletes airborne at peak height delivering decisive match points."
      },
      {
        id: "bad-2",
        imageUrl: btarena,
        title: "The Court of Hermes",
        caption: "Synthetic indoor courts prepared for non-stop racquet battles."
      },
      {
        id: "bad-3",
        imageUrl: badminton,
        title: "Grace in Motion",
        caption: "The classical fusion of physical grace, balance, and unyielding speed."
      }
    ]
  },
  {
    id: "volleyball",
    orderNumber: "V",
    name: "Volleyball",
    subtitle: "POWER OF OLYMPUS",
    greekDeity: "Domain of Zeus",
    mythosQuote: "Commanding the air with thunderous strikes. Defend your citadel.",
    overview: "Above the net, power meets timing. The men's volleyball championship pits powerhouse collegiate teams in thunderous spikes, three-man blocks, and miraculous floor digs.",
    iconName: "Activity",
    heroImage: volleyball,
    events: [
      {
        id: "volleyball-m-team",
        name: "Men's Team",
        category: "Men",
        format: "Team Squad",
        registrationKey: "volleyball_mens_team",
        notes: "Details will be announced soon."
      }
    ],
    sportSpecificRules: [
      "FIVB international guidelines apply throughout the tournament bracket.",
      "Knockout ties played as best of 3 sets (first two sets to 25 points, decider set to 15 points with a 2-point lead).",
      "Finals played as best of 5 sets.",
      "Rotation must be maintained; libero rules apply according to standard collegiate conventions.",
      "Maximum of 12 registered squad players per team on the official match sheet.",
      "Draws and court assignments will be announced soon."
    ],
    generalRules: GENERAL_TOURNAMENT_RULES,
    rules: [
      "FIVB international guidelines apply throughout the tournament bracket.",
      "Knockout ties played as best of 3 sets (first two sets to 25 points, decider set to 15 points with a 2-point lead).",
      "Finals played as best of 5 sets.",
      "Rotation must be maintained; libero rules apply according to standard collegiate conventions.",
      "Maximum of 12 registered squad players per team on the official match sheet.",
      "Draws and court assignments will be announced soon.",
      ...GENERAL_TOURNAMENT_RULES
    ],
    gallery: [
      {
        id: "vb-1",
        imageUrl: vbplay,
        title: "Aerial Fortress",
        caption: "Spikers clashing with two-man blocks high above the net."
      },
      {
        id: "vb-2",
        imageUrl: vbarena,
        title: "Sunset Over the Court",
        caption: "Outdoor and indoor court arenas primed for high-stakes competition."
      },
      {
        id: "vb-3",
        imageUrl: volleyball,
        title: "Power and Unity",
        caption: "Team coordination tested in the furnace of championship competition."
      }
    ]
  },
  {
    id: "tennis",
    orderNumber: "VI",
    name: "Tennis",
    subtitle: "THE DUEL",
    greekDeity: "Domain of Artemis",
    mythosQuote: "An unyielding duel of endurance, court mastery, and relentless focus.",
    overview: "Pounding baselines and crisp volleys. The men's team tennis tournament challenges players across both hard-hitting singles ties and tactical doubles combinations.",
    iconName: "Crosshair",
    heroImage: tennis,
    events: [
      {
        id: "tennis-m-team",
        name: "Men's Team",
        category: "Men",
        format: "Team Tournament",
        registrationKey: "tennis_mens_team",
        notes: "Details will be announced soon."
      }
    ],
    sportSpecificRules: [
      "ITF tennis rules govern all team match encounters.",
      "Each team tie comprises 2 Singles matches and 1 deciding Doubles match (if required).",
      "Matches played as advantage sets with a 7-point tiebreak at 6-6.",
      "Deuce scoring with standard advantage rule; tournament committee reserves right to use sudden-death No-Ad scoring in qualifiers.",
      "Regulation ITF-approved tennis balls will be supplied for each match.",
      "Match court schedules and seeded brackets will be announced soon."
    ],
    generalRules: GENERAL_TOURNAMENT_RULES,
    rules: [
      "ITF tennis rules govern all team match encounters.",
      "Each team tie comprises 2 Singles matches and 1 deciding Doubles match (if required).",
      "Matches played as advantage sets with a 7-point tiebreak at 6-6.",
      "Deuce scoring with standard advantage rule; tournament committee reserves right to use sudden-death No-Ad scoring in qualifiers.",
      "Regulation ITF-approved tennis balls will be supplied for each match.",
      "Match court schedules and seeded brackets will be announced soon.",
      ...GENERAL_TOURNAMENT_RULES
    ],
    gallery: [
      {
        id: "tn-1",
        imageUrl: tenplay,
        title: "The Classical Serve",
        caption: "Endurance and court mastery embodied in every stroke."
      },
      {
        id: "tn-2",
        imageUrl: tenarena,
        title: "Hard Courts of Olympus",
        caption: "The premier outdoor hard court arena of IIIT Bangalore."
      },
      {
        id: "tn-3",
        imageUrl: tennis,
        title: "Evening Finals",
        caption: "Golden light casting long shadows across the baseline during championship ties."
      }
    ]
  },
  {
    id: "kabaddi",
    orderNumber: "VII",
    name: "Kabaddi",
    subtitle: "STRENGTH OF TITANS",
    greekDeity: "Domain of the Titans & Heracles",
    mythosQuote: "Pure strength, fearless raids, and unbreakable brotherhood in the circle of sand.",
    overview: "Rooted in raw strength, tactical breath control, and ironclad chain tackles. The Kabaddi arena tests who can hold the raid and who can hold the line when the Titans clash.",
    iconName: "Trophy",
    heroImage: kabaddi,
    events: [
      {
        id: "kabaddi-m-team",
        name: "Men's Team",
        category: "Men",
        format: "Team Squad",
        registrationKey: "kabaddi_mens_team",
        notes: "Details will be announced soon."
      }
    ],
    sportSpecificRules: [
      "Matches governed by Amateur Kabaddi Federation of India (AKFI) regulations.",
      "Match duration: Two halves of 20 minutes each with a 5-minute break.",
      "Raid clock strictly enforced at 30 seconds; continuous audible cant mandatory.",
      "Bonus line, baulk line, and lobby rules strictly observed by certified referees.",
      "Each team may register up to 12 squad members (7 active on mat, 5 substitutes).",
      "Mat schedule, weigh-in criteria, and fixtures will be announced soon."
    ],
    generalRules: GENERAL_TOURNAMENT_RULES,
    rules: [
      "Matches governed by Amateur Kabaddi Federation of India (AKFI) regulations.",
      "Match duration: Two halves of 20 minutes each with a 5-minute break.",
      "Raid clock strictly enforced at 30 seconds; continuous audible cant mandatory.",
      "Bonus line, baulk line, and lobby rules strictly observed by certified referees.",
      "Each team may register up to 12 squad members (7 active on mat, 5 substitutes).",
      "Mat schedule, weigh-in criteria, and fixtures will be announced soon.",
      ...GENERAL_TOURNAMENT_RULES
    ],
    gallery: [
      {
        id: "kb-1",
        imageUrl: kplay,
        title: "Circle of Titans",
        caption: "The sacred mat where brotherhood and sheer physical will are tested."
      },
      {
        id: "kb-2",
        imageUrl: kplay,
        title: "Heraclean Might",
        caption: "Raw grip, chain synergy, and fearless diving ankle holds."
      },
      {
        id: "kb-3",
        imageUrl: kabaddi,
        title: "Arena of Valour",
        caption: "Championship stage radiating the unyielding energy of Kabaddi."
      }
    ]
  },
  {
    id: "throwball",
    orderNumber: "VIII",
    name: "Throwball",
    subtitle: "GRACE & POWER",
    greekDeity: "Domain of Hera & Artemis",
    mythosQuote: "Poise beneath pressure, explosive agility, and seamless team coordination.",
    overview: "Rapid catches, bullet releases, and spatial dominance. The women's throwball championship highlights precision ball placement and synchronized defensive coverage.",
    iconName: "Target",
    heroImage: throwball,
    events: [
      {
        id: "throwball-w-team",
        name: "Women's Team",
        category: "Women",
        format: "Team Squad",
        registrationKey: "throwball_womens_team",
        notes: "Details will be announced soon."
      }
    ],
    sportSpecificRules: [
      "Follows official Throwball Federation rules for collegiate tournaments.",
      "Matches played as best of 3 sets, 25 points per set (running points).",
      "Ball must be caught with both hands and thrown back with one hand within 3 seconds.",
      "No jumping while throwing the ball; two-handed throws are strictly penalized.",
      "Team roster consists of 7 active court players and up to 5 substitutes.",
      "Tournament fixtures and match timings will be announced soon."
    ],
    generalRules: GENERAL_TOURNAMENT_RULES,
    rules: [
      "Follows official Throwball Federation rules for collegiate tournaments.",
      "Matches played as best of 3 sets, 25 points per set (running points).",
      "Ball must be caught with both hands and thrown back with one hand within 3 seconds.",
      "No jumping while throwing the ball; two-handed throws are strictly penalized.",
      "Team roster consists of 7 active court players and up to 5 substitutes.",
      "Tournament fixtures and match timings will be announced soon.",
      ...GENERAL_TOURNAMENT_RULES
    ],
    gallery: [
      {
        id: "tb-1",
        imageUrl: thplay,
        title: "Poise Above the Net",
        caption: "Graceful reception and lightning release in championship throwball."
      },
      {
        id: "tb-2",
        imageUrl: tharena,
        title: "The Court of Hera",
        caption: "Lined court ready for energetic team throwball fixtures."
      },
      {
        id: "tb-3",
        imageUrl: throwball,
        title: "Olympic Symmetry",
        caption: "Athletic poise and team synchrony on the collegiate stage."
      }
    ]
  },
  {
    id: "chess",
    orderNumber: "IX",
    name: "Chess",
    subtitle: "THE BATTLE OF MINDS",
    greekDeity: "Domain of Athena",
    mythosQuote: "The grand arena of intellect. Every move echoes across the immortal pantheon.",
    overview: "Quiet intensity and deep strategic depth. The team chess championship demands visionary opening preparation, tactical calculations, and unshakeable psychological resilience.",
    iconName: "Crown",
    heroImage: chess,
    events: [
      {
        id: "chess-team",
        name: "Team",
        category: "Open",
        format: "Team Championship",
        registrationKey: "chess_team",
        notes: "Details will be announced soon."
      }
    ],
    sportSpecificRules: [
      "FIDE rapid / classical team regulations apply across all boards.",
      "Swiss league tournament format or round-robin depending on total college entries.",
      "Board order must be declared before Round 1 and remain fixed throughout.",
      "Time control: Rapid format with increment per move (e.g. 15 mins + 10s increment).",
      "Touch-move rule strictly enforced; electronic devices strictly forbidden in the tournament hall.",
      "Round schedules, board pairings, and arbiter panel will be announced soon."
    ],
    generalRules: GENERAL_TOURNAMENT_RULES,
    rules: [
      "FIDE rapid / classical team regulations apply across all boards.",
      "Swiss league tournament format or round-robin depending on total college entries.",
      "Board order must be declared before Round 1 and remain fixed throughout.",
      "Time control: Rapid format with increment per move (e.g. 15 mins + 10s increment).",
      "Touch-move rule strictly enforced; electronic devices strictly forbidden in the tournament hall.",
      "Round schedules, board pairings, and arbiter panel will be announced soon.",
      ...GENERAL_TOURNAMENT_RULES
    ],
    gallery: [
      {
        id: "ch-1",
        imageUrl: chplay,
        title: "The Council of Athena",
        caption: "Intellect and strategy clashing across 64 squares of marble."
      },
      {
        id: "ch-2",
        imageUrl: charena,
        title: "Pantheon of Grandmasters",
        caption: "Silent atmosphere charged with collegiate tactical rivalry."
      },
      {
        id: "ch-3",
        imageUrl: chess,
        title: "Timeless Contest",
        caption: "Echoes of ancient wisdom channeled into modern collegiate minds."
      }
    ]
  }
];

export const TOTAL_SPORTS_COUNT = SPORTS_DATA.length; // 9
export const TOTAL_EVENTS_COUNT = SPORTS_DATA.reduce((acc, s) => acc + s.events.length, 0); // 18
