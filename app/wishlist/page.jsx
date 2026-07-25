"use client";

import { useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { getWishlists, addWishlist, deleteWishlist, toggleAchieved, updateSavedAmount } from "@/lib/wishlistService";
import { Check, Trash2, Plus, DollarSign } from "lucide-react";
import { formatCurrency, parseCurrency } from "@/lib/currency";

export default function Wishlist() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [form, setForm] = useState({
    name: "",
    targetPrice: "",
    savedAmount: ""
  });

  const [addAmounts, setAddAmounts] = useState({});

  const wishlists = useLiveQuery(() => getWishlists(), []) || [];

  async function saveItem() {
    if (!form.name || !form.targetPrice) return;

    await addWishlist({
      name: form.name,
      targetPrice: Number(
        String(form.targetPrice)
          .replace(/\./g, "")
          .replace(",", ".")
      ),

      savedAmount: Number(
        String(form.savedAmount)
          .replace(/\./g, "")
          .replace(",", ".")
      ) || 0,
    });

    setForm({
      name: "",
      targetPrice: "",
      savedAmount: ""
    });
  }

  async function handleAddAmount(id, currentSaved) {
    const amount =
      Number(
        String(addAmounts[id])
          .replace(/\./g, "")
          .replace(",", ".")
      ) || 0;
      
    if (amount > 0) {
      await updateSavedAmount(id, currentSaved + amount);
      setAddAmounts(prev => ({ ...prev, [id]: "" }));
    }
  }

  if (!mounted) return null;

  return (
    <main className="main-content">
      <div style={{ marginBottom: '32px' }}>
        <h1 className="header-title">Wishlist</h1>
        <p className="header-subtitle">Daftar impian yang ingin kamu capai.</p>
      </div>

      <div className="card" style={{ marginBottom: '32px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input style={{ flex: 2, minWidth: '200px' }} type="text" placeholder="Nama Barang/Impian" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input style={{ flex: 1, minWidth: '150px' }} type="text" placeholder="Target Harga (€)" value={form.targetPrice} onChange={e => setForm({ ...form, targetPrice: e.target.value })} />
        <input style={{ flex: 1, minWidth: '150px' }} type="text" placeholder="Terkumpul (€)" value={form.savedAmount} onChange={e => setForm({ ...form, savedAmount: e.target.value })} />
        <button className="btn-primary" onClick={saveItem}><Plus size={20} /> Tambah</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
        {wishlists.map(item => {
          const currentTotal = item.savedAmount || 0;
          const percentage = Math.min(100, Math.round((currentTotal / item.targetPrice) * 100));

          return (
            <div key={item.id} className="card" style={{ position: 'relative', opacity: item.achieved ? 0.7 : 1 }}>
              {item.achieved && (
                <div style={{ position: 'absolute', top: 15, right: 15, background: 'var(--green)', color: 'white', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  Tercapai!
                </div>
              )}
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', textDecoration: item.achieved ? 'line-through' : 'none' }}>{item.name}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>
                {formatCurrency(item.targetPrice)}
              </p>

              {/* Progress Bar */}
              {!item.achieved && (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px', color: 'var(--text-light)' }}>
                    <span>Terkumpul: {formatCurrency(Math.min(currentTotal, item.targetPrice))}</span>
                    <span>{percentage}%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden', marginBottom: '15px' }}>
                    <div style={{
                      height: '100%',
                      width: `${percentage}%`,
                      background: 'var(--green)',
                      transition: 'width 0.5s ease'
                    }}></div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="Tambah €"
                      value={addAmounts[item.id] || ""}
                      onChange={e => setAddAmounts(prev => ({ ...prev, [item.id]: e.target.value }))}
                      style={{ flex: 1, padding: '8px', borderRadius: '8px', border: '1px solid var(--border)' }}
                    />
                    <button
                      onClick={() => handleAddAmount(item.id, currentTotal)}
                      style={{ background: 'var(--primary)', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
                    >
                      Tambah
                    </button>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', marginTop: item.achieved ? '20px' : '0' }}>
                <button
                  onClick={() => toggleAchieved(item.id, item.achieved)}
                  style={{
                    flex: 1,
                    background: item.achieved ? 'var(--border)' : 'var(--green)',
                    color: item.achieved ? 'var(--text)' : 'white',
                    padding: '10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    cursor: 'pointer',
                    border: 'none'
                  }}
                >
                  <Check size={18} /> {item.achieved ? 'Batal' : 'Tandai Tercapai'}
                </button>
                <button
                  onClick={() => deleteWishlist(item.id)}
                  style={{
                    background: 'var(--red)',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          );
        })}
        {wishlists.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
            Belum ada barang di wishlist kamu. Yuk mulai bermimpi!
          </div>
        )}
      </div>
    </main>
  );
}
