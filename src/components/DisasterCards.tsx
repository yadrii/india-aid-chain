import { mockDisasterZones, DisasterZone } from "@/lib/mockData";
import { MapPin, Users, AlertTriangle, TrendingUp } from "lucide-react";

const severityStyles: Record<string, string> = {
  critical: "bg-destructive/15 text-destructive border-destructive/20",
  high: "bg-warning/15 text-warning border-warning/20",
  medium: "bg-primary/15 text-primary border-primary/20",
};

const typeIcons: Record<string, string> = {
  flood: "🌊",
  earthquake: "🏚️",
  cyclone: "🌀",
  drought: "☀️",
  landslide: "⛰️",
};

const formatCurrency = (amount: number) => {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
  return `₹${amount.toLocaleString("en-IN")}`;
};

const DisasterCard = ({ zone }: { zone: DisasterZone }) => {
  const progress = (zone.fundingRaised / zone.fundingGoal) * 100;

  return (
    <div className="bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group animate-slide-in">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{typeIcons[zone.type]}</span>
          <div>
            <h3 className="font-display font-bold text-foreground text-sm leading-tight">{zone.title}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-xs mt-0.5">
              <MapPin className="w-3 h-3" />
              <span>{zone.location}, {zone.state}</span>
            </div>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-semibold capitalize border ${severityStyles[zone.severity]}`}>
          {zone.severity === "critical" && <AlertTriangle className="w-3 h-3 inline mr-1" />}
          {zone.severity}
        </span>
      </div>

      <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">{zone.description}</p>

      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
        <Users className="w-3 h-3" />
        <span>{zone.affectedPeople.toLocaleString("en-IN")} affected</span>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-foreground font-semibold">{formatCurrency(zone.fundingRaised)}</span>
          <span className="text-muted-foreground">of {formatCurrency(zone.fundingGoal)}</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-warning transition-all duration-700"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="flex items-center gap-1 text-xs text-accent mt-1.5">
          <TrendingUp className="w-3 h-3" />
          <span>{progress.toFixed(0)}% funded</span>
        </div>
      </div>

      <button className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity glow-primary">
        Fund This Relief
      </button>
    </div>
  );
};

const DisasterCards = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="font-display font-bold text-lg text-foreground">Active Disaster Zones</h2>
        <p className="text-muted-foreground text-sm">Fund verified relief operations across India</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {mockDisasterZones.map((zone) => (
        <DisasterCard key={zone.id} zone={zone} />
      ))}
    </div>
  </div>
);

export default DisasterCards;
