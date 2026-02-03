export function fmtNumber(value, digits = 0) {
  if (value === null || value === undefined || Number.isNaN(value)) return "—";
  try {
    return new Intl.NumberFormat("fr-FR", {
      maximumFractionDigits: digits,
      minimumFractionDigits: digits,
    }).format(value);
  } catch {
    return String(value);
  }
}

export function fmtPercent(value, digits = 1) {
  if (value === null || value === undefined || Number.isNaN(value)) return "—";
  return `${fmtNumber(value, digits)}%`;
}
