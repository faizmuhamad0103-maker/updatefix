import { db } from "./db";

export async function getSavings() {
  return await db.savings
    .orderBy("date")
    .reverse()
    .toArray();
}

export async function addSaving(saving) {
  return await db.savings.add({
    ...saving,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export async function updateSaving(id, saving) {
  return await db.savings.update(id, {
    ...saving,
    updatedAt: new Date().toISOString(),
  });
}

export async function deleteSaving(id) {
  return await db.savings.delete(id);
}

export async function totalSavings() {
  const data = await db.savings.toArray();
  return data.reduce(
    (sum, item) => item.type === "deposit" ? sum + item.amount : sum - item.amount,
    0
  );
}
