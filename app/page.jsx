"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import SummaryCard from "@/components/SummaryCard";
import TransactionForm from "@/components/TransactionForm";
import FilterBar from "@/components/FilterBar";
import TransactionTable from "@/components/TransactionTable";
import EmptyState from "@/components/EmptyState";
import { getTransactions, addTransaction, updateTransaction, deleteTransaction as removeTransaction } from "@/lib/transactionService";
import { calculateSummary } from "@/lib/summary";
import { useLiveQuery } from "dexie-react-hooks";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [form, setForm] = useState({
    date: "",
    description: "",
    category: "Makanan",
    type: "expense",
    amount: ""
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [editingId, setEditingId] = useState(null);

  const transactions = useLiveQuery(() => getTransactions(), []) || [];

  async function saveTransaction() {
    if (!form.date || !form.description || !form.amount) {
      return;
    }

    const payload = {
      ...form,
      amount: Number(form.amount)
    };

    if (editingId) {
      await updateTransaction(editingId, payload);
      setEditingId(null);
    } else {
      await addTransaction(payload);
    }

    setForm({
      date: "",
      description: "",
      category: "Makanan",
      type: "expense",
      amount: ""
    });
  }

  async function deleteTransaction(id) {
    if (!confirm("Hapus transaksi?")) {
      return;
    }
    await removeTransaction(id);
  }

  function editTransaction(item) {
    setEditingId(item.id);
    setForm({
      date: item.date,
      description: item.description,
      category: item.category,
      type: item.type,
      amount: item.amount
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const filtered = useMemo(() => {
    return transactions.filter((item) => {
      const text = item.description.toLowerCase().includes(search.toLowerCase());
      const cat = category === "Semua" ? true : item.category === category;
      return text && cat;
    });
  }, [transactions, search, category]);

  const { income, expense, balance } = useMemo(() => calculateSummary(filtered), [filtered]);

  if (!mounted) return null;

  return (
    <main className="main-content">
      <Header />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '32px', marginBottom: '32px' }}>
        <SummaryCard
          title="Saldo"
          amount={`€ ${balance.toLocaleString("de-DE")}`}
          color="var(--primary)"
        />
        <SummaryCard
          title="Pemasukan"
          amount={`€ ${income.toLocaleString("de-DE")}`}
          color="var(--green)"
        />
        <SummaryCard
          title="Pengeluaran"
          amount={`€ ${expense.toLocaleString("de-DE")}`}
          color="var(--red)"
        />
        <SummaryCard
          title="Transaksi"
          amount={filtered.length}
          color="var(--text)"
        />
      </div>

      <div className="card" style={{ marginBottom: '32px' }}>
        <h2 style={{ marginBottom: '16px', color: 'var(--text)' }}>Form Transaksi</h2>
        <TransactionForm
          form={form}
          setForm={setForm}
          saveTransaction={saveTransaction}
          editingId={editingId}
        />
      </div>

      <div className="card">
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ color: 'var(--text)' }}>Daftar Transaksi</h2>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <FilterBar
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />
    

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          
          <TransactionTable
            transactions={filtered}
            deleteTransaction={deleteTransaction}
            editTransaction={editTransaction}
          />
        )}
        </div>
      </div>
    </main>
  );
}