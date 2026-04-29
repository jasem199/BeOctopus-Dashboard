export const mockData = {
  widgets: {
    signups: {
      total: 24830,
      trend: { value: 12, isPositive: true },
      label: "Total Signups",
      supportText: "Since tournament start",
    },
    newSignups: {
      total: 1240,
      trend: { value: 5, isPositive: true },
      label: "New Signups",
      supportText: "In the last 24 hours",
    },
    predictions: {
      total: 142600,
      trend: { value: 8, isPositive: true },
      label: "Total Predictions",
      supportText: "Across all matches",
    },
    clicks: {
      total: 38420,
      trend: { value: -2, isPositive: false },
      label: "Total Clicks",
      supportText: "Ad banner interactions",
    },
  },
  leaderboard: [
    { rank: 1, name: "Shakib Al H.", points: 1450 },
    { rank: 2, name: "Mushfiqur R.", points: 1320 },
    { rank: 3, name: "Tamim I.", points: 1280 },
    { rank: 4, name: "Mahmudullah R.", points: 1150 },
    { rank: 5, name: "Mashrafe M.", points: 1090 },
    { rank: 6, name: "Taskin A.", points: 980 },
    { rank: 7, name: "Mustafizur R.", points: 940 },
    { rank: 8, name: "Mehedi H.", points: 890 },
    { rank: 9, name: "Litton D.", points: 820 },
    { rank: 10, name: "Soumya S.", points: 790 },
  ],
  signupGraph: {
    labels: ["10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun", "15 Jun", "16 Jun"],
    data: [400, 600, 550, 900, 1240, 1100, 800],
    highestDay: "1,240 signups on 14 June",
  },
};
