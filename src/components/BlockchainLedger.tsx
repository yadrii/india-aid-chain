import { mockTransactions, BlockchainTransaction } from "@/lib/mockData";
import { CheckCircle2, Clock, ArrowRight, Link2 } from "lucide-react";

const typeColors: Record<string, string> = {
  donation: "bg-primary/15 text-primary",
  supply: "bg-accent/15 text-accent",
  disbursement: "bg-warning/15 text-warning",
  verification: "bg-muted text-muted-foreground",
};

const formatAmount = (amount: number) => {
  if (amount === 0) return "—";
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
  return `₹${amount.toLocaleString("en-IN")}`;
};

const formatTime = (ts: string) => {
  const d = new Date(ts);
  return d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
};

const TransactionRow = ({ tx }: { tx: BlockchainTransaction }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group animate-fade-in">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
      <Link2 className="w-4 h-4 text-chain-foreground" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono text-xs text-muted-foreground">{tx.hash}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${typeColors[tx.type]}`}>
          {tx.type}
        </span>
      </div>
      <div className="flex items-center gap-1 text-sm">
        <span className="text-foreground/80 truncate">{tx.from}</span>
        <ArrowRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
        <span className="text-foreground/80 truncate">{tx.to}</span>
      </div>
    </div>
    <div className="text-right flex-shrink-0">
      <div className="font-display font-semibold text-foreground">{formatAmount(tx.amount)}</div>
      <div className="flex items-center gap-1 justify-end text-xs text-muted-foreground">
        {tx.status === "confirmed" ? (
          <CheckCircle2 className="w-3 h-3 text-accent" />
        ) : (
          <Clock className="w-3 h-3 text-warning" />
        )}
        <span>Block #{tx.blockNumber}</span>
        <span>· {formatTime(tx.timestamp)}</span>
      </div>
    </div>
  </div>
);

const BlockchainLedger = () => (
  <div className="bg-card rounded-xl border border-border p-6">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="font-display font-bold text-lg text-foreground">Blockchain Ledger</h2>
        <p className="text-muted-foreground text-sm">Real-time verified transactions</p>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-accent text-xs font-semibold">Live</span>
      </div>
    </div>
    <div className="space-y-1 divide-y divide-border/50">
      {mockTransactions.map((tx) => (
        <TransactionRow key={tx.id} tx={tx} />
      ))}
    </div>
  </div>
);

export default BlockchainLedger;
