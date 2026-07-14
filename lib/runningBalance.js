export function addRunningBalance(transactions) {
  if (!Array.isArray(transactions)) {
    return [];
  }

  // Urutkan dari transaksi paling lama
  const sorted = [...transactions].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA.getTime() !== dateB.getTime()) {
      return dateA - dateB;
    }

    return (a.id ?? 0) - (b.id ?? 0);
  });

  let runningBalance = 0;

  const result = sorted.map((transaction) => {
    const amount = Number(transaction.amount) || 0;

    if (transaction.type === "income") {
      runningBalance += amount;
    } else {
      runningBalance -= amount;
    }

    return {
      ...transaction,
      balance: runningBalance,
    };
  });

  // Tampilkan kembali transaksi terbaru di atas
  return result.reverse();
}

export function calculateCurrentBalance(transactions) {
  return transactions.reduce((total, transaction) => {
    const amount = Number(transaction.amount) || 0;

    return transaction.type === "income"
      ? total + amount
      : total - amount;
  }, 0);
}

export function calculateBalanceBeforeDate(
  transactions,
  targetDate
) {
  const limit = new Date(targetDate);

  return transactions.reduce((total, transaction) => {
    const date = new Date(transaction.date);

    if (date >= limit) {
      return total;
    }

    const amount = Number(transaction.amount) || 0;

    return transaction.type === "income"
      ? total + amount
      : total - amount;
  }, 0);
}
