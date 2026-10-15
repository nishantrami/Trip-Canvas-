import React from 'react';
import {
  IndianRupee,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Building,
  Utensils,
  Car,
  Ticket,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Info
} from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';

export function BudgetSummarySidebar({
  totalBudget = 10000,
  hotelBudget = 3000,
  selectedHotel = null,
  selectedRoom = null,
  nights = 2,
  allocatedExpenses = null,
  isAccommodationOnly = false,
  affordableAlternatives = [],
  onSelectAlternative = () => {},
  onAdjustBudgetClick = () => {}
}) {
  const currentPricePerNight = selectedRoom?.price || selectedHotel?.pricePerNight || 0;
  const selectedHotelCost = selectedHotel ? currentPricePerNight * nights : 0;

  // Other committed expenses (Food, Transportation, Activities)
  const foodExpense = !isAccommodationOnly && allocatedExpenses ? Number(allocatedExpenses.food) || 0 : 0;
  const transportExpense = !isAccommodationOnly && allocatedExpenses ? Number(allocatedExpenses.transportation) || 0 : 0;
  const activitiesExpense = !isAccommodationOnly && allocatedExpenses ? Number(allocatedExpenses.activities) || 0 : 0;
  const reserveExpense = !isAccommodationOnly && allocatedExpenses ? Number(allocatedExpenses.emergencyReserve) || 0 : 0;

  const totalOtherExpenses = foodExpense + transportExpense + activitiesExpense;

  // Remaining budget formula: Total trip budget - Selected hotel cost - Other committed trip expenses
  const remainingBudget = Math.max(
    -50000,
    totalBudget - selectedHotelCost - (isAccommodationOnly ? 0 : totalOtherExpenses)
  );

  const totalCommitted = selectedHotelCost + (isAccommodationOnly ? 0 : totalOtherExpenses);
  const budgetUsagePercent = totalBudget > 0 ? Math.min(150, Math.round((totalCommitted / totalBudget) * 100)) : 0;

  // Check if stay exceeds stay allowance
  const isStayOverAllowance = selectedHotel && selectedHotelCost > hotelBudget;
  const stayOverAllowanceAmount = isStayOverAllowance ? selectedHotelCost - hotelBudget : 0;

  // Check if total trip is over budget
  const isOverallOverBudget = remainingBudget < 0;
  const overBudgetTotalAmount = isOverallOverBudget ? Math.abs(remainingBudget) : 0;

  const getStatusColor = () => {
    if (budgetUsagePercent > 100) return 'danger';
    if (budgetUsagePercent >= 85) return 'warning';
    return 'success';
  };

  const statusColor = getStatusColor();

  return (
    <div className="budget-summary-sidebar-wrapper">
      <div className="card budget-summary-live-card">
        {/* Header */}
        <div className="budget-summary-card-header">
          <div className="flex items-center gap-2">
            <span className="live-pulse-dot" />
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
              Live Budget Tracker
            </h3>
          </div>
          <span className="badge badge-accent text-2xs">
            {isAccommodationOnly ? 'Stay Only' : 'All-Inclusive'}
          </span>
        </div>

        {/* Progress Bar & Usage */}
        <div className="budget-progress-section mt-3">
          <div className="flex justify-between items-center text-xs mb-1.5">
            <span className="text-muted font-medium">Budget Usage</span>
            <strong className={`font-bold text-${statusColor}`}>
              {budgetUsagePercent}% ({formatCurrency(totalCommitted)} / {formatCurrency(totalBudget)})
            </strong>
          </div>
          <div className="budget-progress-track">
            <div
              className={`budget-progress-fill progress-${statusColor}`}
              style={{ width: `${Math.min(100, budgetUsagePercent)}%` }}
            />
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="budget-key-metrics-grid mt-4">
          <div className="budget-metric-cell">
            <span className="metric-label">Total Trip Budget</span>
            <div className="metric-value font-bold text-primary">
              {formatCurrency(totalBudget)}
            </div>
          </div>

          <div className="budget-metric-cell">
            <span className="metric-label">Stay Allowance</span>
            <div className="metric-value font-bold text-accent">
              {formatCurrency(hotelBudget)}
            </div>
          </div>

          <div className="budget-metric-cell">
            <span className="metric-label">Selected Stay ({nights}N)</span>
            <div className={`metric-value font-bold ${isStayOverAllowance ? 'text-danger' : selectedHotel ? 'text-success' : 'text-muted'}`}>
              {selectedHotel ? formatCurrency(selectedHotelCost) : 'None'}
            </div>
          </div>

          <div className="budget-metric-cell highlight-cell">
            <span className="metric-label">Estimated Remaining</span>
            <div className={`metric-value font-extrabold ${isOverallOverBudget ? 'text-danger' : 'text-success'}`}>
              {isOverallOverBudget ? `-${formatCurrency(overBudgetTotalAmount)}` : formatCurrency(remainingBudget)}
            </div>
          </div>
        </div>

        {/* Breakdown of Other Committed Expenses */}
        {!isAccommodationOnly && (
          <div className="budget-other-expenses-list mt-4 pt-3 border-t">
            <span className="text-2xs font-bold text-muted uppercase tracking-wider block mb-2">
              Committed Trip Expenses Breakdown
            </span>

            <div className="budget-breakdown-row">
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <Building size={13} className="text-accent" /> Hotel Accommodation:
              </span>
              <strong className="text-xs text-primary">
                {selectedHotel ? (
                  <span className="text-success font-semibold">
                    {formatCurrency(selectedHotelCost)} [Confirmed]
                  </span>
                ) : (
                  <span className="text-muted">
                    {formatCurrency(hotelBudget)} [Allocated]
                  </span>
                )}
              </strong>
            </div>

            <div className="budget-breakdown-row">
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <Utensils size={13} className="text-accent" /> Food & Dining:
              </span>
              <span className="text-xs font-semibold text-primary">
                {formatCurrency(foodExpense)} <span className="text-3xs text-muted">[Est.]</span>
              </span>
            </div>

            <div className="budget-breakdown-row">
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <Car size={13} className="text-accent" /> Transportation & Cabs:
              </span>
              <span className="text-xs font-semibold text-primary">
                {formatCurrency(transportExpense)} <span className="text-3xs text-muted">[Est.]</span>
              </span>
            </div>

            <div className="budget-breakdown-row">
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <Ticket size={13} className="text-accent" /> Sightseeing & Activities:
              </span>
              <span className="text-xs font-semibold text-primary">
                {formatCurrency(activitiesExpense)} <span className="text-3xs text-muted">[Est.]</span>
              </span>
            </div>

            {reserveExpense > 0 && (
              <div className="budget-breakdown-row pt-1.5 border-t border-dashed">
                <span className="flex items-center gap-1.5 text-xs text-muted">
                  <ShieldCheck size={13} className="text-success" /> Emergency Reserve:
                </span>
                <span className="text-xs font-semibold text-success">
                  {formatCurrency(reserveExpense)}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Selected Hotel Preview Chip */}
        {selectedHotel && (
          <div className="selected-hotel-sidebar-pill mt-4 p-3 bg-surface-alt rounded-lg border">
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="text-2xs text-accent font-bold uppercase">
                Selected Stay
              </span>
              <span className="badge badge-success text-3xs py-0.5 px-1.5">
                ✓ Confirmed
              </span>
            </div>
            <h5 className="font-bold text-xs text-primary truncate" title={selectedHotel.name}>
              {selectedHotel.name}
            </h5>
            <div className="flex justify-between items-center text-2xs text-muted mt-1">
              <span>{selectedRoom?.name || 'Standard Room'}</span>
              <strong>{formatCurrency(selectedHotelCost)}</strong>
            </div>
          </div>
        )}

        {/* Over-Budget Warning & Affordable Alternatives */}
        {(isStayOverAllowance || isOverallOverBudget) && (
          <div className="over-budget-warning-block mt-4 p-3 bg-danger-subtle border border-danger rounded-lg">
            <div className="flex items-start gap-2 text-danger">
              <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs block font-bold">
                  {isOverallOverBudget ? 'Total Trip Budget Exceeded!' : 'Exceeds Stay Allocation'}
                </strong>
                <p className="text-2xs leading-relaxed mt-0.5 text-danger font-medium">
                  {isOverallOverBudget
                    ? `Your stay makes the trip exceed your total budget by ${formatCurrency(overBudgetTotalAmount)}. Consider one of these verified affordable alternatives:`
                    : `This stay costs ${formatCurrency(stayOverAllowanceAmount)} more than your recommended ${formatCurrency(hotelBudget)} stay allocation.`}
                </p>
              </div>
            </div>

            {/* Affordable Alternatives Quick Switch */}
            {affordableAlternatives.length > 0 && (
              <div className="affordable-alternatives-list mt-2.5 pt-2 border-t border-danger-subtle">
                <span className="text-3xs uppercase font-bold text-muted block mb-1">
                  Budget-Friendly Alternatives (Under {formatCurrency(hotelBudget)}):
                </span>
                {affordableAlternatives.slice(0, 2).map((alt) => {
                  const altTotal = alt.pricePerNight * nights;
                  return (
                    <div
                      key={alt.id}
                      className="alt-hotel-row p-1.5 rounded flex items-center justify-between gap-2 hover:bg-surface cursor-pointer mt-1"
                      onClick={() => onSelectAlternative(alt)}
                    >
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-primary truncate block">
                          {alt.name}
                        </span>
                        <span className="text-3xs text-muted">
                          {formatCurrency(alt.pricePerNight)}/night • {alt.rating} ★
                        </span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-xs btn-outline text-2xs text-accent"
                      >
                        Switch ({formatCurrency(altTotal)})
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Quick Edit Budget Button */}
        <button
          type="button"
          onClick={onAdjustBudgetClick}
          className="btn btn-ghost btn-xs w-full mt-3 text-muted hover:text-primary text-center"
        >
          Adjust Budget Allocation ⚙️
        </button>
      </div>
    </div>
  );
}
