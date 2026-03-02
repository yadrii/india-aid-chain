import { UserRole } from "@/lib/mockData";
import { Link2, Bell, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  role: UserRole;
  onLogout: () => void;
}

const roleLabels: Record<UserRole, string> = {
  donor: "Donor",
  ngo: "NGO Partner",
  government: "Government Official",
  "end-user": "Beneficiary",
};

const DashboardHeader = ({ role, onLogout }: DashboardHeaderProps) => (
  <header className="bg-secondary border-b border-border/30 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
          <Link2 className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="font-display font-bold text-secondary-foreground text-lg leading-none">ReliefChain</h1>
          <p className="text-secondary-foreground/50 text-xs">India Disaster Supply Chain</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs text-secondary-foreground/50 hidden sm:block">Logged in as</span>
        <span className="px-3 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold">
          {roleLabels[role]}
        </span>
        <button className="p-2 rounded-lg hover:bg-secondary-foreground/5 transition-colors relative">
          <Bell className="w-4 h-4 text-secondary-foreground/60" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>
        <button onClick={onLogout} className="p-2 rounded-lg hover:bg-secondary-foreground/5 transition-colors">
          <LogOut className="w-4 h-4 text-secondary-foreground/60" />
        </button>
      </div>
    </div>
  </header>
);

export default DashboardHeader;
