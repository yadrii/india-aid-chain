import { useState } from "react";
import { UserRole } from "@/lib/mockData";
import LoginPage from "@/components/LoginPage";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [role, setRole] = useState<UserRole | null>(null);

  if (!role) return <LoginPage onLogin={setRole} />;
  return <Dashboard role={role} onLogout={() => setRole(null)} />;
};

export default Index;
