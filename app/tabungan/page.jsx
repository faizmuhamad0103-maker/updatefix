"use client";

import { useState, useMemo, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { getSavings, addSaving, deleteSaving, totalSavings } from "@/lib/savingsService";
import SummaryCard from "@/components/SummaryCard";
import { formatCurrency, parseCurrency } from "@/lib/currency";

export default function Tabungan() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [form, setForm] = useState({
    date: new Date().toISOString().split('T')[0],
    description: "",
    type: "deposit",
    amount: ""
  });

  const savings = useLiveQuery(() => getSavings(), []) || [];
  const currentTotal = useLiveQuery(() => totalSavings(), []) || 0;

  async function saveTransaction() {
    if (!form.date || !form.description || !form.amount) return;

    await addSaving({
      ...form,
      amount: parseCurrency(form.amount)
    });

    setForm({
      date: new Date().toISOString().split('T')[0],
      description: "",
      type: "deposit",
      amount: ""
    });
  }

  if (!mounted) return null;

  return (
    <main className="main-content">
      <div style={{ marginBottom: '32px' }}>
        <h1 className="header-title">Tabungan</h1>
        <p className="header-subtitle">Kelola dan pantau target tabunganmu.</p>
      </div>

      <div className="card" style={{ marginBottom: '32px', textAlign: 'center', background: 'linear-gradient(135deg, var(--accent), var(--primary))', color: 'white' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '500', opacity: 0.9 }}>Total Tabungan Saat Ini</h2>
        <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '10px 0' }}> {formatCurrency(currentTotal)}</p>
      </div>

      <div style={{ overflowY: 'auto', maxHeight: '450px', marginBottom: '15px' }}>
        <div className="card">
          <h2 style={{ marginBottom: '20px' }}>Catat Tabungan</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
            <input type="text" placeholder="Keterangan" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
              <option value="deposit">Menabung (Masuk)</option>
              <option value="withdraw">Penarikan (Keluar)</option>
            </select>
            <input type="text" inputMode="decimal" placeholder="Jumlah" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} />
            <button className="btn-primary" onClick={saveTransaction}>Simpan</button>
          </div>
        </div>


      </div>
      <div>
        <div className="card" style={{ overflowY: 'auto', maxHeight: '450px' }}>
          <h2 style={{ marginBottom: '20px' }}>Riwayat Tabungan</h2>
          {savings.length === 0 ? (
            <p style={{ color: 'var(--muted)', textAlign: 'center', marginTop: '40px' }}>Belum ada riwayat tabungan.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {savings.map(item => (
                <div key={item.id} className="glass" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: '600' }}>{item.description}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{new Date(item.date).toLocaleDateString("de-DE")}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: item.type === "deposit"
                          ? "var(--green)"
                          : "var(--red)",
                      }}
                    >
                      {item.type === "deposit" ? "+" : "-"}
                      {formatCurrency(item.amount)}
                    </p>
                    <button onClick={() => deleteSaving(item.id)} style={{ background: 'transparent', color: 'var(--red)', fontSize: '0.9rem', padding: '5px' }}>Hapus</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
