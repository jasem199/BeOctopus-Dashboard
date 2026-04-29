export interface AdClickData {
  id: string;
  bannerName: string;
  position: string;
  impressions: number;
  clicks: number;
  ctr: string;
  lastUpdated: string;
}

export const clicksMockData: AdClickData[] = [
  { id: "1", bannerName: "Matchday Banner - Brazil vs France", position: "Matchday Main", impressions: 45200, clicks: 1240, ctr: "2.74%", lastUpdated: "2h ago" },
  { id: "2", bannerName: "Leaderboard - Top Brand Promo", position: "Leaderboard Top", impressions: 32100, clicks: 980, ctr: "3.05%", lastUpdated: "5h ago" },
  { id: "3", bannerName: "Tournament Promo - 25% Off Shop", position: "Leaderboard After 10", impressions: 28400, clicks: 650, ctr: "2.28%", lastUpdated: "12 Jun, 10:20" },
  { id: "4", bannerName: "Finals Hype Banner", position: "Matchday Main", impressions: 18900, clicks: 520, ctr: "2.75%", lastUpdated: "Yesterday" },
  { id: "5", bannerName: "Community Hub Invitation", position: "Leaderboard After 20", impressions: 12500, clicks: 180, ctr: "1.44%", lastUpdated: "Yesterday" },
  { id: "6", bannerName: "Matchday Banner - Germany vs Spain", position: "Matchday Main", impressions: 41200, clicks: 1100, ctr: "2.67%", lastUpdated: "2 days ago" },
];

export const summaryStats = {
  totalImpressions: 178300,
  totalClicks: 4670,
  averageCtr: "2.62%",
  topBanner: "Leaderboard - Top Brand Promo"
};
