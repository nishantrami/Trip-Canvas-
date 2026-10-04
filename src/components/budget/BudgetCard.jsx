import React, { useState } from 'react';
import {
  IndianRupee,
  Plus,
  Trash2,
  TrendingUp,
  PieChart,
  Users,
  Calendar,
  Edit2,
  Check,
  X,
  Hotel,
  Plane,
  Utensils,
  Ticket,
  ShoppingBag,
  MoreHorizontal
} from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import { calculateTripBudgetMetrics, DEFAULT_BUDGET_CATEGORIES } from '../../utils/calculateBudget';
import { useTrips } from '../../context/TripContext';

const CATEGORY_ICONS = {
  travel: Plane,
  hotel: Hotel,
  food: Utensils,
  activities: Ticket,
  shopping: ShoppingBag,
  other: MoreHorizontal
};

export function BudgetCard({ trip }) {
  const { addExpense, deleteExpense, updateBudgetTotal } = useTrips();

  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [targetBudgetInput, setTargetBudgetInput] = useState(trip?.budget?.total || 15000);

  // New Expense form state
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('hotel');
  const [showAddExpense, setShowAddExpense] = useState(false);

  if (!trip) return null;

  const metrics = calculateTripBudgetMetrics(
    trip.budget,
    trip.expenses || [],
    trip.travelers || 1,
    trip.daysCount || 1
  );

  const handleSaveBudget = (e) => {
    e.preventDefault();
    updateBudgetTotal(trip.id, targetBudgetInput);
    setIsEditingBudget(false);
  };

  const handleAddExpenseSubmit = (e) => {
    e.preventDefault();
    if (!expenseTitle.trim() || !expenseAmount) return;

    addExpense(trip.id, {
      title: expenseTitle.trim(),
      amount: Number(expenseAmount),
      category: expenseCategory,
      date: new Date().toISOString().split('T')[0]
    });

    setExpenseTitle('');
    setExpenseAmount('');
    setShowAddExpense(false);
  };

  return (
    <div className="budget-workspace-grid">
      {/* Left Column: Top Level Analytics & Visual Categories */}
      <div className="budget-overview-col">
        {/* Main Budget Summary Card */}
        <div className="card budget-hero-card">
          <div className="budget-hero-header">
            <div>
              <span className="budget-hero-eyebrow">Trip Target Budget</span>
              {isEditingBudget ? (
                <form onSubmit={handleSaveBudget} className="budget-edit-form">
                  <span className="rupee-symbol">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="500"
                    className="budget-edit-input"
                    value={targetBudgetInput}
                    onChange={(e) => setTargetBudgetInput(e.target.value)}
                    autoFocus
                  />
                  <button type="submit" className="btn btn-primary btn-sm btn-icon" title="Save">
                    <Check size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingBudget(false)}
                    className="btn btn-ghost btn-sm btn-icon"
                    title="Cancel"
                  >
                    <X size={16} />
                  </button>
                </form>
              ) : (
                <div className="budget-hero-amount-row">
                  <h2 className="budget-hero-amount">{formatCurrency(metrics.targetBudget)}</h2>
                  <button
                    onClick={() => {
                      setTargetBudgetInput(metrics.targetBudget);
                      setIsEditingBudget(true);
                    }}
                    className="btn-edit-inline"
                    title="Change Budget Goal"
                  >
                    <Edit2 size={15} />
                  </button>
                </div>
              )}
            </div>

            <span className={`badge ${metrics.isOverBudget ? 'badge-warning' : 'badge-success'}`}>
              {metrics.isOverBudget ? 'Over Budget' : 'On Track'}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="budget-health-meter">
            <div className="meter-labels">
              <span>Spent: <strong>{formatCurrency(metrics.totalSpent)}</strong></span>
              <span>
                {metrics.isOverBudget
                  ? `Exceeded by ${formatCurrency(metrics.overBudgetAmount)}`
                  : `Remaining: ${formatCurrency(metrics.remaining)}`}
              </span>
            </div>
            <div className="meter-track">
              <div
                className={`meter-fill ${metrics.isOverBudget ? 'danger' : ''}`}
                style={{ width: `${Math.min(100, metrics.spentPercentage)}%` }}
              />
            </div>
            <span className="meter-subtext">
              {metrics.spentPercentage}% of allocated budget utilized
            </span>
          </div>

          {/* Quick Metrics Grid */}
          <div className="budget-breakdown-stats">
            <div className="stat-box">
              <Users size={16} className="stat-icon" />
              <div>
                <span className="stat-label">Per Traveler ({metrics.numTravelers})</span>
                <span className="stat-val">{formatCurrency(metrics.perPersonCost)}</span>
              </div>
            </div>

            <div className="stat-box">
              <Calendar size={16} className="stat-icon" />
              <div>
                <span className="stat-label">Daily Average ({metrics.numDays} Days)</span>
                <span className="stat-val">{formatCurrency(metrics.dailyAverageCost)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown Progress Bars */}
        <div className="card budget-categories-card">
          <h3 className="card-section-title">
            <PieChart size={18} /> Category Breakdown
          </h3>

          <div className="category-bars-list">
            {Object.entries(DEFAULT_BUDGET_CATEGORIES).map(([catKey, catInfo]) => {
              const spent = metrics.categoryTotals[catKey] || 0;
              const percent = metrics.totalSpent > 0 ? Math.round((spent / metrics.totalSpent) * 100) : 0;
              const IconComp = CATEGORY_ICONS[catKey] || MoreHorizontal;

              return (
                <div key={catKey} className="category-bar-item">
                  <div className="category-bar-header">
                    <div className="category-bar-title">
                      <div className="category-icon-box" style={{ color: catInfo.color }}>
                        <IconComp size={15} />
                      </div>
                      <span>{catInfo.label}</span>
                    </div>
                    <div className="category-bar-values">
                      <strong>{formatCurrency(spent)}</strong>
                      <span className="category-percent">({percent}%)</span>
                    </div>
                  </div>
                  <div className="category-track">
                    <div
                      className="category-fill"
                      style={{
                        width: `${percent}%`,
                        backgroundColor: catInfo.color
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Column: Detailed Expense Ledger */}
      <div className="budget-ledger-col">
        <div className="card ledger-card">
          <div className="ledger-header">
            <div>
              <h3 className="card-section-title">
                <TrendingUp size={18} /> Expense Ledger
              </h3>
              <p className="text-muted text-sm">Log itemized receipts and reservations</p>
            </div>

            <button
              type="button"
              onClick={() => setShowAddExpense(!showAddExpense)}
              className="btn btn-primary btn-sm"
            >
              <Plus size={16} />
              <span>Log Expense</span>
            </button>
          </div>

          {/* Inline Add Expense Form */}
          {showAddExpense && (
            <form onSubmit={handleAddExpenseSubmit} className="add-expense-form-panel">
              <h4 className="text-sm font-bold mb-3">Add New Expense Item</h4>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Expense description (e.g. 3-Night Stay, Lunch, Cab)"
                  value={expenseTitle}
                  onChange={(e) => setExpenseTitle(e.target.value)}
                  autoFocus
                  required
                />
              </div>

              <div className="form-row-2 mb-3">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Amount (₹)"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                  required
                />

                <select
                  className="form-control"
                  value={expenseCategory}
                  onChange={(e) => setExpenseCategory(e.target.value)}
                >
                  <option value="hotel">Hotels & Stays</option>
                  <option value="travel">Flight & Transit</option>
                  <option value="food">Food & Dining</option>
                  <option value="activities">Sightseeing & Passes</option>
                  <option value="shopping">Shopping & Souvenirs</option>
                  <option value="other">Miscellaneous</option>
                </select>
              </div>

              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddExpense(false)}
                  className="btn btn-ghost btn-sm"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  Add Item
                </button>
              </div>
            </form>
          )}

          {/* Expenses List */}
          <div className="expenses-table-wrap">
            {trip.expenses && trip.expenses.length > 0 ? (
              <div className="expenses-list">
                {trip.expenses.map((expense) => {
                  const catInfo = DEFAULT_BUDGET_CATEGORIES[expense.category] || DEFAULT_BUDGET_CATEGORIES.other;
                  const IconComp = CATEGORY_ICONS[expense.category] || MoreHorizontal;

                  return (
                    <div key={expense.id} className="expense-row-item">
                      <div className="expense-icon-badge" style={{ backgroundColor: `${catInfo.color}15`, color: catInfo.color }}>
                        <IconComp size={16} />
                      </div>

                      <div className="expense-item-info">
                        <span className="expense-item-title">{expense.title}</span>
                        <span className="expense-item-meta">
                          {catInfo.label} · {expense.date || 'Recent'}
                        </span>
                      </div>

                      <div className="expense-item-amount">
                        {formatCurrency(expense.amount)}
                      </div>

                      <button
                        type="button"
                        onClick={() => deleteExpense(trip.id, expense.id)}
                        className="expense-delete-btn"
                        title="Remove expense"
                        aria-label="Remove expense"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-expenses-state">
                <IndianRupee size={32} className="text-muted mb-2" />
                <p className="text-muted text-sm">No expenses logged yet.</p>
                <button
                  type="button"
                  onClick={() => setShowAddExpense(true)}
                  className="btn btn-outline btn-sm mt-3"
                >
                  <Plus size={14} /> Log First Expense
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
