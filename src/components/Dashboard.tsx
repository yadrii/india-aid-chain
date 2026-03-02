import { UserRole } from "@/lib/mockData";
import DashboardHeader from "./DashboardHeader";
import StatsBar from "./StatsBar";
import BlockchainLedger from "./BlockchainLedger";
import DisasterCards from "./DisasterCards";

interface DashboardProps {
  role: UserRole;
  onLogout: () => void;
}

const Dashboard = ({ role, onLogout }: DashboardProps) => (
  <div className="min-h-screen bg-background">
    <DashboardHeader role={role} onLogout={onLogout} />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      <StatsBar />
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        <div className="xl:col-span-2">
          <BlockchainLedger />
        </div>
        <div className="xl:col-span-3">
          <DisasterCards />
        </div>
      </div>
    </main>
  </div>
);

export default Dashboard;
