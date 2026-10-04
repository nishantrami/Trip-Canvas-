/**
 * Budget Calculation Engine
 * Computes category aggregations, per-person rates, daily rates, and spent vs remaining
 */

export const DEFAULT_BUDGET_CATEGORIES = {
  travel: { label: "Flight & Transit", color: "#357DBC", icon: "Plane" },
  hotel: { label: "Hotels & Stays", color: "#6F8F72", icon: "Hotel" },
  food: { label: "Food & Dining", color: "#E8794F", icon: "Utensils" },
  activities: { label: "Sightseeing & Passes", color: "#D99B26", icon: "Ticket" },
  shopping: { label: "Shopping & Souvenirs", color: "#9355B8", icon: "ShoppingBag" },
  other: { label: "Miscellaneous & Buffer", color: "#7A827E", icon: "MoreHorizontal" }
};

export const calculateTripBudgetMetrics = (budget = {}, expenses = [], travelers = 1, totalDays = 1) => {
  const targetBudget = Number(budget.total) || 0;
  const numTravelers = Math.max(1, Number(travelers) || 1);
  const numDays = Math.max(1, Number(totalDays) || 1);

  // Grouped expenses by category
  const categoryTotals = {
    travel: 0,
    hotel: 0,
    food: 0,
    activities: 0,
    shopping: 0,
    other: 0
  };

  let totalSpent = 0;

  expenses.forEach(expense => {
    const amount = Number(expense.amount) || 0;
    const cat = expense.category || 'other';
    if (categoryTotals[cat] !== undefined) {
      categoryTotals[cat] += amount;
    } else {
      categoryTotals.other += amount;
    }
    totalSpent += amount;
  });

  // Calculate remaining and percentages
  const remaining = Math.max(0, targetBudget - totalSpent);
  const isOverBudget = totalSpent > targetBudget && targetBudget > 0;
  const overBudgetAmount = isOverBudget ? totalSpent - targetBudget : 0;
  
  const spentPercentage = targetBudget > 0 
    ? Math.min(100, Math.round((totalSpent / targetBudget) * 100))
    : 0;

  const perPersonCost = Math.round((targetBudget || totalSpent) / numTravelers);
  const dailyAverageCost = Math.round((targetBudget || totalSpent) / numDays);

  return {
    targetBudget,
    totalSpent,
    remaining,
    isOverBudget,
    overBudgetAmount,
    spentPercentage,
    perPersonCost,
    dailyAverageCost,
    categoryTotals,
    numTravelers,
    numDays
  };
};
