export function calculateSummary(transactions) {
  const summary = {
    income: 0,
    expense: 0,
    balance: 0,
    transactionCount: transactions.length,
  };

  for (const transaction of transactions) {
    if (transaction.type === "income") {
      summary.income += Number(transaction.amount);
    } else {
      summary.expense += Number(transaction.amount);
    }
  }

  summary.balance =
    summary.income - summary.expense;

  return summary;
}

export function calculateMonthlySummary(
  transactions,
  month,
  year
) {
  const monthly = transactions.filter((transaction) => {
    const date = new Date(transaction.date);

    return (
      date.getMonth() === month &&
      date.getFullYear() === year
    );
  });

  return calculateSummary(monthly);
}

export function calculateCategorySummary(
  transactions
) {
  const categories = {};

  transactions.forEach((transaction) => {
    if (!categories[transaction.category]) {
      categories[transaction.category] = {
        income: 0,
        expense: 0,
      };
    }

    if (transaction.type === "income") {
      categories[transaction.category].income +=
        Number(transaction.amount);
    } else {
      categories[transaction.category].expense +=
        Number(transaction.amount);
    }
  });

  return Object.entries(categories).map(
    ([name, value]) => ({
      name,
      income: value.income,
      expense: value.expense,
      total: value.income - value.expense,
    })
  );
}

export function getLatestTransactions(
  transactions,
  limit = 10
) {
  return [...transactions]
    .sort(
      (a, b) =>
        new Date(b.date) - new Date(a.date)
    )
    .slice(0, limit);
}
