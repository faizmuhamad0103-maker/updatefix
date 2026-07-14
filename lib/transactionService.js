import { db } from "./db";

export async function getTransactions() {
  return await db.transactions
    .orderBy("date")
    .reverse()
    .toArray();
}

export async function addTransaction(transaction) {
  return await db.transactions.add({
    ...transaction,
    amount: Number(String(transaction.amount).replace(",", ".")),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export async function updateTransaction(id, transaction) {
  return await db.transactions.update(id, {
    ...transaction,
    amount: Number(String(transaction.amount).replace(",", ".")),
    updatedAt: new Date().toISOString(),
  });
}

export async function deleteTransaction(id) {
  return await db.transactions.delete(id);
}

export async function getTransaction(id) {
  return await db.transactions.get(id);
}

export async function clearTransactions() {
  return await db.transactions.clear();
}

export async function totalIncome() {
  const data = await db.transactions
    .where("type")
    .equals("income")
    .toArray();

  return data.reduce(
    (sum, item) =>
      sum +
      Number(String(item.amount).replace(",", ".")),
    0
  );
}

export async function totalExpense() {
  const data = await db.transactions
    .where("type")
    .equals("expense")
    .toArray();

  return data.reduce(
    (sum, item) =>
      sum +
      Number(String(item.amount).replace(",", ".")),
    0
  );
}

export async function monthlyTransactions(month, year) {
  const data = await db.transactions.toArray();

  return data.filter((item) => {
    const date = new Date(item.date);

    return (
      date.getMonth() + 1 === month &&
      date.getFullYear() === year
    );
  });
}
