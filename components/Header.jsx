"use client";

import { Wallet, CalendarDays } from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="glass ambient-shadow rounded-xl p-8 relative overflow-hidden group">

      <div className="glass ambient-shadow rounded-xl p-8 relative overflow-hidden group">

        <div className="glass ambient-shadow p-8 rounded-xl flex flex-col items-center text-center space-y-2 transform transition-transform active:scale-[0.98]">
          <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">

            ayangg harus nyatet setiap pengeluaran dan pemasukan meskipun itu cuman 1 cent,
            tapi ini aku tulis pake format rupiah yaa, biar keliatan banyak hehehe, biar ayang semangat nabung😘.
          </p>

        </div>

        <div className="flex justify-end">

          <div className="rounded-3xl bg-white px-6 py-5 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200 to-rose-300">

                <CalendarDays size={22} />

              </div>

              <div>

                <p className="text-xs uppercase tracking-wider text-slate-400">

                  Hari Ini

                </p>

                <p className="mt-1 font-semibold text-slate-700">

                  {today}

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}
