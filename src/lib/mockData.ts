export type UserRole = "donor" | "ngo" | "government" | "end-user";

export interface BlockchainTransaction {
  id: string;
  hash: string;
  from: string;
  to: string;
  amount: number;
  type: "donation" | "supply" | "disbursement" | "verification";
  timestamp: string;
  status: "confirmed" | "pending";
  blockNumber: number;
}

export interface DisasterZone {
  id: string;
  title: string;
  location: string;
  state: string;
  type: "flood" | "earthquake" | "cyclone" | "drought" | "landslide";
  severity: "critical" | "high" | "medium";
  fundingGoal: number;
  fundingRaised: number;
  affectedPeople: number;
  description: string;
  date: string;
}

export const mockTransactions: BlockchainTransaction[] = [
  { id: "1", hash: "0x7a3f...e9b2", from: "Donor: Tata Trust", to: "NGO: Red Cross India", amount: 5000000, type: "donation", timestamp: "2026-03-02T10:23:00", status: "confirmed", blockNumber: 18234 },
  { id: "2", hash: "0x4c1d...a7f8", from: "GOI: NDRF", to: "District: Wayanad", amount: 12000000, type: "disbursement", timestamp: "2026-03-02T09:45:00", status: "confirmed", blockNumber: 18233 },
  { id: "3", hash: "0x9e2b...c3d1", from: "NGO: SEEDS India", to: "Supply: Medical Kits", amount: 800000, type: "supply", timestamp: "2026-03-02T09:12:00", status: "confirmed", blockNumber: 18232 },
  { id: "4", hash: "0x1f8a...d4e6", from: "Donor: Infosys Fdn", to: "NGO: Goonj", amount: 3000000, type: "donation", timestamp: "2026-03-02T08:55:00", status: "pending", blockNumber: 18231 },
  { id: "5", hash: "0x6b3c...f2a9", from: "GOI: SDRF Tamil Nadu", to: "District: Cuddalore", amount: 8500000, type: "disbursement", timestamp: "2026-03-01T22:30:00", status: "confirmed", blockNumber: 18230 },
  { id: "6", hash: "0x2d7e...b1c4", from: "NGO: Red Cross India", to: "Verification: Audit", amount: 0, type: "verification", timestamp: "2026-03-01T20:15:00", status: "confirmed", blockNumber: 18229 },
  { id: "7", hash: "0x8f4a...e5d7", from: "Donor: Azim Premji", to: "NGO: CRY India", amount: 10000000, type: "donation", timestamp: "2026-03-01T18:00:00", status: "confirmed", blockNumber: 18228 },
];

export const mockDisasterZones: DisasterZone[] = [
  { id: "1", title: "Kerala Flood Relief 2026", location: "Wayanad & Idukki", state: "Kerala", type: "flood", severity: "critical", fundingGoal: 50000000, fundingRaised: 32000000, affectedPeople: 145000, description: "Severe flooding due to unprecedented rainfall. Over 145,000 displaced. Urgent need for food, shelter, and medical aid.", date: "2026-02-25" },
  { id: "2", title: "Assam Flood Emergency", location: "Barpeta & Nalbari", state: "Assam", type: "flood", severity: "critical", fundingGoal: 35000000, fundingRaised: 12000000, affectedPeople: 98000, description: "Brahmaputra river breach affecting multiple districts. Emergency evacuations underway.", date: "2026-02-28" },
  { id: "3", title: "Cyclone Vardah-II Response", location: "Coastal Tamil Nadu", state: "Tamil Nadu", type: "cyclone", severity: "high", fundingGoal: 40000000, fundingRaised: 28000000, affectedPeople: 72000, description: "Category 3 cyclone landfall. Infrastructure damage, power outages across coastal regions.", date: "2026-02-20" },
  { id: "4", title: "Uttarakhand Landslide Aid", location: "Chamoli & Rudraprayag", state: "Uttarakhand", type: "landslide", severity: "high", fundingGoal: 20000000, fundingRaised: 8500000, affectedPeople: 15000, description: "Multiple landslides blocking roads and isolating communities. Helicopter-based rescue needed.", date: "2026-03-01" },
  { id: "5", title: "Gujarat Drought Relief", location: "Kutch & Saurashtra", state: "Gujarat", type: "drought", severity: "medium", fundingGoal: 25000000, fundingRaised: 18000000, affectedPeople: 200000, description: "Prolonged drought affecting agriculture and water supply. Livestock and crop losses mounting.", date: "2026-01-15" },
  { id: "6", title: "Sikkim Earthquake Response", location: "Gangtok & Mangan", state: "Sikkim", type: "earthquake", severity: "high", fundingGoal: 30000000, fundingRaised: 5000000, affectedPeople: 25000, description: "6.2 magnitude earthquake causing structural damage. Search and rescue operations active.", date: "2026-03-01" },
];

export const stats = {
  totalFundsTracked: 285000000,
  activeDisasters: 6,
  totalTransactions: 18234,
  ngoPartners: 47,
  statesAffected: 12,
  peopleBenefited: 555000,
};
