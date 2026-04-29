export interface Participant {
  rank: number;
  displayName: string;
  predictions: number;
  points: number;
  submitted: string;
  country: string;
  email: string;
}

export const leaderboardParticipants: Participant[] = [
  { rank: 1, displayName: "Alex Johnson", predictions: 64, points: 1250, submitted: "3h ago", country: "USA", email: "alex.j@example.com" },
  { rank: 2, displayName: "Sarah Miller", predictions: 62, points: 1180, submitted: "5h ago", country: "Canada", email: "sarah.m@example.com" },
  { rank: 3, displayName: "Marco Rossi", predictions: 60, points: 1150, submitted: "1h ago", country: "Italy", email: "marco.r@example.com" },
  { rank: 4, displayName: "Yuki Tanaka", predictions: 58, points: 1120, submitted: "12 Jun, 09:41", country: "Japan", email: "yuki.t@example.com" },
  { rank: 5, displayName: "Elena Petrova", predictions: 57, points: 1100, submitted: "12 Jun, 08:30", country: "Russia", email: "elena.p@example.com" },
  { rank: 6, displayName: "David Smith", predictions: 55, points: 1080, submitted: "Yesterday", country: "UK", email: "david.s@example.com" },
  { rank: 7, displayName: "Sofia Garcia", predictions: 54, points: 1060, submitted: "Yesterday", country: "Spain", email: "sofia.g@example.com" },
  { rank: 8, displayName: "Lucas Muller", predictions: 53, points: 1040, submitted: "2 days ago", country: "Germany", email: "lucas.m@example.com" },
  { rank: 9, displayName: "Amira Hassan", predictions: 52, points: 1020, submitted: "2 days ago", country: "Egypt", email: "amira.h@example.com" },
  { rank: 10, displayName: "Liam Wilson", predictions: 51, points: 1000, submitted: "3 days ago", country: "Australia", email: "liam.w@example.com" },
  { rank: 11, displayName: "Olivia Brown", predictions: 50, points: 980, submitted: "3 days ago", country: "USA", email: "olivia.b@example.com" },
  { rank: 12, displayName: "Noah Davis", predictions: 49, points: 960, submitted: "4 days ago", country: "USA", email: "noah.d@example.com" },
  { rank: 13, displayName: "Emma Thomas", predictions: 48, points: 940, submitted: "4 days ago", country: "UK", email: "emma.t@example.com" },
  { rank: 14, displayName: "Mateo Silva", predictions: 47, points: 920, submitted: "5 days ago", country: "Brazil", email: "mateo.s@example.com" },
  { rank: 15, displayName: "Chloe Wright", predictions: 46, points: 900, submitted: "5 days ago", country: "Canada", email: "chloe.w@example.com" },
  { rank: 16, displayName: "Leo Berger", predictions: 45, points: 880, submitted: "6 days ago", country: "France", email: "leo.b@example.com" },
  { rank: 17, displayName: "Mia Anderson", predictions: 44, points: 860, submitted: "6 days ago", country: "USA", email: "mia.a@example.com" },
  { rank: 18, displayName: "Jack Evans", predictions: 43, points: 840, submitted: "1 week ago", country: "UK", email: "jack.e@example.com" },
  { rank: 19, displayName: "Zoe Lee", predictions: 42, points: 820, submitted: "1 week ago", country: "South Korea", email: "zoe.l@example.com" },
  { rank: 20, displayName: "Ryan Taylor", predictions: 41, points: 800, submitted: "1 week ago", country: "USA", email: "ryan.t@example.com" },
  { rank: 21, displayName: "Ava Martinez", predictions: 40, points: 780, submitted: "1 week ago", country: "Mexico", email: "ava.m@example.com" },
  { rank: 22, displayName: "Sebastian Koch", predictions: 39, points: 760, submitted: "2 weeks ago", country: "Germany", email: "seb.k@example.com" },
  { rank: 23, displayName: "Harper Hall", predictions: 38, points: 740, submitted: "2 weeks ago", country: "USA", email: "harper.h@example.com" },
  { rank: 24, displayName: "Gabriel Dubois", predictions: 37, points: 720, submitted: "2 weeks ago", country: "France", email: "gab.d@example.com" },
  { rank: 25, displayName: "Mila Popova", predictions: 36, points: 700, submitted: "2 weeks ago", country: "Bulgaria", email: "mila.p@example.com" },
];

export const getCountryFlag = (country: string) => {
  const flags: Record<string, string> = {
    USA: "🇺🇸",
    Canada: "🇨🇦",
    Italy: "🇮🇹",
    Japan: "🇯🇵",
    Russia: "🇷🇺",
    UK: "🇬🇧",
    Spain: "🇪🇸",
    Germany: "🇩🇪",
    Egypt: "🇪🇬",
    Australia: "🇦🇺",
    Brazil: "🇧🇷",
    France: "🇫🇷",
    "South Korea": "🇰🇷",
    Mexico: "🇲🇽",
    Bulgaria: "🇧🇬",
  };
  return flags[country] || "🏳️";
};
