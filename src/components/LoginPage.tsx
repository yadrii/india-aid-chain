import { useState } from "react";
import { UserRole } from "@/lib/mockData";
import { Shield, Heart, Building2, Users, ArrowRight, Link2 } from "lucide-react";
import heroImage from "@/assets/hero-disaster.png";

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

const roles: { role: UserRole; label: string; icon: React.ReactNode; desc: string }[] = [
  { role: "donor", label: "Donor", icon: <Heart className="w-6 h-6" />, desc: "Fund disaster relief & track your impact" },
  { role: "ngo", label: "NGO", icon: <Shield className="w-6 h-6" />, desc: "Manage supplies & coordinate operations" },
  { role: "government", label: "Government", icon: <Building2 className="w-6 h-6" />, desc: "Oversee disbursements & policy" },
  { role: "end-user", label: "Beneficiary", icon: <Users className="w-6 h-6" />, desc: "Request aid & verify deliveries" },
];

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) onLogin(selectedRole);
  };

  return (
    <div className="min-h-screen gradient-hero flex">
      {/* Left: Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img src={heroImage} alt="Disaster relief operations in India" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end p-12 pb-16">
          <div className="flex items-center gap-2 mb-6">
            <Link2 className="w-5 h-5 text-primary" />
            <span className="text-primary font-display font-semibold text-sm tracking-wider uppercase">Blockchain Verified</span>
          </div>
          <h1 className="text-5xl font-display font-bold text-secondary-foreground leading-tight mb-4">
            Transparent Disaster<br />
            <span className="text-gradient">Relief for India</span>
          </h1>
          <p className="text-secondary-foreground/70 text-lg max-w-md font-body">
            Every rupee tracked. Every supply verified. Powered by blockchain for complete transparency in disaster supply chain management.
          </p>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md animate-slide-in">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <Link2 className="w-5 h-5 text-primary" />
            <span className="text-primary font-display font-semibold text-sm tracking-wider uppercase">ReliefChain India</span>
          </div>

          <h2 className="text-3xl font-display font-bold text-secondary-foreground mb-2">Sign In</h2>
          <p className="text-secondary-foreground/60 mb-8">Select your role to access the dashboard</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-3">
              {roles.map(({ role, label, icon, desc }) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`p-4 rounded-lg border text-left transition-all duration-200 group ${
                    selectedRole === role
                      ? "border-primary bg-primary/10 glow-primary"
                      : "border-secondary-foreground/10 bg-secondary-foreground/5 hover:border-secondary-foreground/20"
                  }`}
                >
                  <div className={`mb-2 ${selectedRole === role ? "text-primary" : "text-secondary-foreground/50 group-hover:text-secondary-foreground/70"}`}>
                    {icon}
                  </div>
                  <div className={`font-display font-semibold text-sm ${selectedRole === role ? "text-primary" : "text-secondary-foreground"}`}>
                    {label}
                  </div>
                  <div className="text-secondary-foreground/40 text-xs mt-1 leading-snug">{desc}</div>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-secondary-foreground/60 text-sm mb-2 font-body">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@organization.in"
                className="w-full px-4 py-3 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-secondary-foreground/60 text-sm mb-2 font-body">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={!selectedRole}
              className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed glow-primary"
            >
              Enter Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-secondary-foreground/30 text-xs text-center mt-8">
            Secured by blockchain · NDMA Compliant · ISO 27001
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
