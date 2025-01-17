export const formatCurrencyName = (name) =>
  name?.toLowerCase().replace(/\s+/g, "-");
export const formatDate = () => {
  const now = new Date();
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(now);
};
export const generateCurrencyLink = (currencyCode, currencyName) =>
  `https://www.xe.com/currency/${currencyCode?.toLowerCase()}-${formatCurrencyName(
    currencyName
  )}/`;
