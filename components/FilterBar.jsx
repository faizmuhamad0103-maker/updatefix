"use client";

import { Search, Filter } from "lucide-react";

const categories = [
  "Semua",
  "Makanan",
  "Transport",
  "Belanja",
  "Tagihan",
  "Gaji",
  "Investasi",
  "Hiburan",
  "Kesehatan",
  "Lainnya",
];

export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <section className="card mt-8">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-bold">
            Filter Transaksi
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Cari transaksi atau filter berdasarkan kategori.
          </p>

        </div>

        <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
          <Filter size={20} />
        </div>

      </div>

      <div className="grid gap-4 lg:grid-cols-2">

        <div className="relative">

        

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Cari transaksi..."
            className="w-full pl-12"
          />

        </div>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="w-full"
        >
          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

      </div>

      {(search !== "" || category !== "Semua") && (

        <div className="min-w-[280px] glass ambient-shadow rounded-xl p-6 space-y-4">

          {search !== "" && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm hover:bg-slate-200"
            >
              🔍 {search} ✕
            </button>
          )}

          {category !== "Semua" && (
            <button
              type="button"
              onClick={() => setCategory("Semua")}
              className="rounded-full bg-pink-100 px-4 py-2 text-sm hover:bg-pink-200"
            >
              📂 {category} ✕
            </button>
          )}

        </div>

      )}

    </section>
  );
}
