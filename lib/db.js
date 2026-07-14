import Dexie from "dexie";

export const db = new Dexie("moneyKu");

db.version(1).stores({
  transactions: `
    ++id,
    date,
    description,
    category,
    type,
    amount,
    createdAt,
    updatedAt
  `,
});

db.version(2).stores({
  transactions: `
    ++id,
    date,
    description,
    category,
    type,
    amount,
    createdAt,
    updatedAt
  `,
  savings: `
    ++id,
    date,
    description,
    type,
    amount,
    createdAt,
    updatedAt
  `,
  wishlist: `
    ++id,
    name,
    targetPrice,
    achieved,
    createdAt,
    updatedAt
  `,
});

db.open();

export async function seedDatabase() {
  const total = await db.transactions.count();

  if (total > 0) return;

  await db.transactions.bulkAdd([
    {
      date: "2026-07-01",
      description: "Gaji Bulanan",
      category: "Gaji",
      type: "income",
      amount: 8000000,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      date: "2026-07-02",
      description: "Makan Siang",
      category: "Makanan",
      type: "expense",
      amount: 45000,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      date: "2026-07-03",
      description: "Bensin",
      category: "Transport",
      type: "expense",
      amount: 100000,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
}
