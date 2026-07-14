import {

TrendingUp,

TrendingDown,

Wallet,

Receipt

} from "lucide-react";

const icons={

Saldo:Wallet,

Pemasukan:TrendingUp,

Pengeluaran:TrendingDown,

Transaksi:Receipt

}

export default function SummaryCard({

title,

amount,

color

}){

const Icon=icons[title];

return (
  <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div>
      <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--muted)' }}>
        {title}
      </p>
      <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginTop: '12px', color: color }}>
        {amount}
      </h2>
    </div>
    <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={24} color="var(--primary)" />
    </div>
  </div>
);

}