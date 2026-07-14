"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wallet, PiggyBank, Heart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Transaksi", path: "/", icon: Wallet },
    { name: "Tabungan", path: "/tabungan", icon: PiggyBank },
    { name: "Wishlist", path: "/wishlist", icon: Heart },
  ];

  return (
    <nav className="glass nav-bar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">ayoo catet ayangg</span>
        </div>
        <div className="glass ambient-shadow p-8 rounded-xl flex flex-col items-center text-center space-y-2 transform transition-transform active:scale-[0.98]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
