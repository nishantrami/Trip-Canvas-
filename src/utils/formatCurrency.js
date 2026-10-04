/**
 * Format currency amounts nicely in Indian Rupees (₹) or standard numbers
 */
export const formatCurrency = (amount, options = {}) => {
  const num = Number(amount) || 0;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
    ...options
  }).format(num);
};

export const formatCompactNumber = (num) => {
  return new Intl.NumberFormat('en-IN', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(Number(num) || 0);
};
