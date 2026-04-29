export const tournamentDays = [
  { date: "12", month: "Jun", day: "Fri", fullDate: "12 June 2026" },
  { date: "13", month: "Jun", day: "Sat", fullDate: "13 June 2026" },
  { date: "14", month: "Jun", day: "Sun", fullDate: "14 June 2026" },
  { date: "15", month: "Jun", day: "Mon", fullDate: "15 June 2026" },
  { date: "16", month: "Jun", day: "Tue", fullDate: "16 June 2026" },
  { date: "17", month: "Jun", day: "Wed", fullDate: "17 June 2026" },
  { date: "18", month: "Jun", day: "Thu", fullDate: "18 June 2026" },
  { date: "19", month: "Jun", day: "Fri", fullDate: "19 June 2026" },
  { date: "20", month: "Jun", day: "Sat", fullDate: "20 June 2026" },
  { date: "21", month: "Jun", day: "Sun", fullDate: "21 June 2026" },
];

export const matchesByDate: Record<string, any[]> = {
  "12 June 2026": [
    { teamA: "Brazil", teamB: "France", time: "21:00 GST" },
    { teamA: "Germany", teamB: "Spain", time: "23:00 GST" },
  ],
  "13 June 2026": [
    { teamA: "Argentina", teamB: "England", time: "18:00 GST" },
    { teamA: "Portugal", teamB: "Netherlands", time: "21:00 GST" },
  ],
  // ... can fill more if needed
};

export const leaderboardPositions = [
  { id: "top", label: "Top" },
  { id: "after10", label: "After 10" },
  { id: "after15", label: "After 15" },
  { id: "after20", label: "After 20" },
];
