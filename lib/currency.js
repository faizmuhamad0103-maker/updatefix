export function formatCurrency(value) {
  const amount = Number(value) || 0;

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function parseCurrency(value) {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  return Number(
    String(value)
      .replace(/\s/g, "")
      .replace(/€/g, "")
      .replace(/\./g, "")
      .replace(",", ".")
  );
}