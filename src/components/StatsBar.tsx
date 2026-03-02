import { stats } from "@/lib/mockData";
import { IndianRupee, Zap, Users, Building2, MapPin, Heart } from "lucide-react";

const items = [
  { label: "Funds Tracked", value: `₹${(stats.totalFundsTracked / 10000000).toFixed(1)} Cr`, icon: <IndianRupee className="w-4 h-4" />, color: "text-primary" },
  { label: "Transactions", value: stats.totalTransactions.toLocaleString(), icon: <Zap className="w-4 h-4" />, color: "text-accent" },
  { label: "Active Disasters", value: stats.activeDisasters.toString(), icon: <MapPin className="w-4 h-4" />, color: "text-destructive" },
  { label: "NGO Partners", value: stats.ngoPartners.toString(), icon: <Building2 className="w-4 h-4" />, color: "text-warning" },
  { label: "States Covered", value: stats.statesAffected.toString(), icon: <Heart className="w-4 h-4" />, color: "text-primary" },
  { label: "People Helped", value: `${(stats.peopleBenefited / 1000).toFixed(0)}K+`, icon: <Users className="w-4 h-4" />, color: "text-accent" },
];

const StatsBar = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
    {items.map((item) => (
      <div key={item.label} className="bg-card rounded-xl border border-border p-4 animate-fade-in">
        <div className={`${item.color} mb-2`}>{item.icon}</div>
        <div className="font-display font-bold text-xl text-foreground">{item.value}</div>
        <div className="text-muted-foreground text-xs">{item.label}</div>
      </div>
    ))}
  </div>
);

export default StatsBar;
