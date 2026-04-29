export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedDate: string;
  predictionCount: number;
  points: number;
}

export const usersMockData: User[] = [
  { id: "1", name: "Alex Johnson", email: "alex.j@example.com", phone: "+1 234 567 8901", joinedDate: "12 May 2026", predictionCount: 64, points: 1250 },
  { id: "2", name: "Sarah Miller", email: "sarah.m@example.com", phone: "+1 345 678 9012", joinedDate: "15 May 2026", predictionCount: 62, points: 1180 },
  { id: "3", name: "Marco Rossi", email: "marco.r@example.com", phone: "+39 02 1234 5678", joinedDate: "18 May 2026", predictionCount: 60, points: 1150 },
  { id: "4", name: "Yuki Tanaka", email: "yuki.t@example.com", phone: "+81 3 1234 5678", joinedDate: "20 May 2026", predictionCount: 58, points: 1120 },
  { id: "5", name: "Elena Petrova", email: "elena.p@example.com", phone: "+7 495 123 4567", joinedDate: "22 May 2026", predictionCount: 57, points: 1100 },
  { id: "6", name: "David Smith", email: "david.s@example.com", phone: "+44 20 7123 4567", joinedDate: "25 May 2026", predictionCount: 55, points: 1080 },
  { id: "7", name: "Sofia Garcia", email: "sofia.g@example.com", phone: "+34 91 123 4567", joinedDate: "28 May 2026", predictionCount: 54, points: 1060 },
  { id: "8", name: "Lucas Muller", email: "lucas.m@example.com", phone: "+49 30 1234567", joinedDate: "30 May 2026", predictionCount: 53, points: 1040 },
  { id: "9", name: "Amira Hassan", email: "amira.h@example.com", phone: "+20 2 12345678", joinedDate: "01 Jun 2026", predictionCount: 52, points: 1020 },
  { id: "10", name: "Liam Wilson", email: "liam.w@example.com", phone: "+61 2 1234 5678", joinedDate: "02 Jun 2026", predictionCount: 51, points: 1000 },
  { id: "11", name: "Olivia Brown", email: "olivia.b@example.com", phone: "+1 456 789 0123", joinedDate: "03 Jun 2026", predictionCount: 50, points: 980 },
  { id: "12", name: "Noah Davis", email: "noah.d@example.com", phone: "+1 567 890 1234", joinedDate: "04 Jun 2026", predictionCount: 49, points: 960 },
  { id: "13", name: "Emma Thomas", email: "emma.t@example.com", phone: "+44 77 1234 5678", joinedDate: "05 Jun 2026", predictionCount: 48, points: 940 },
  { id: "14", name: "Mateo Silva", email: "mateo.s@example.com", phone: "+55 11 1234-5678", joinedDate: "06 Jun 2026", predictionCount: 47, points: 920 },
  { id: "15", name: "Chloe Wright", email: "chloe.w@example.com", phone: "+1 678 901 2345", joinedDate: "07 Jun 2026", predictionCount: 46, points: 900 },
  { id: "16", name: "Leo Berger", email: "leo.b@example.com", phone: "+33 1 12 34 56 78", joinedDate: "08 Jun 2026", predictionCount: 45, points: 880 },
  { id: "17", name: "Mia Anderson", email: "mia.a@example.com", phone: "+1 789 012 3456", joinedDate: "09 Jun 2026", predictionCount: 44, points: 860 },
  { id: "18", name: "Jack Evans", email: "jack.e@example.com", phone: "+44 79 1234 5678", joinedDate: "10 Jun 2026", predictionCount: 43, points: 840 },
  { id: "19", name: "Zoe Lee", email: "zoe.l@example.com", phone: "+82 2 1234 5678", joinedDate: "11 Jun 2026", predictionCount: 42, points: 820 },
  { id: "20", name: "Ryan Taylor", email: "ryan.t@example.com", phone: "+1 890 123 4567", joinedDate: "12 Jun 2026", predictionCount: 41, points: 800 },
];
