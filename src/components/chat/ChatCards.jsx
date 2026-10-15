import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  IndianRupee,
  Star,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  Utensils,
  Hotel as HotelIcon,
  Compass
} from 'lucide-react';
import { useChat } from '../../context/ChatContext';

export function DestinationCard({ destination }) {
  const navigate = useNavigate();
  const { toggleOpen } = useChat();

  if (!destination) return null;

  const handleExplore = () => {
    navigate(`/explore/${destination.id}`);
  };

  const handlePlan = () => {
    navigate('/create-trip', { state: { prefillDestinationId: destination.id } });
    toggleOpen(false);
  };

  return (
    <div className="chat-card chat-card-dest">
      <div className="chat-card-img-wrapper">
        <img
          src={destination.heroImage || destination.image}
          alt={destination.name}
          className="chat-card-img"
          loading="lazy"
        />
        <div className="chat-card-badge-row">
          <span className="chat-badge rating-badge">
            <Star size={12} fill="#D99B26" stroke="#D99B26" />
            {destination.rating || '4.9'}
          </span>
          {destination.budgetTier && (
            <span className="chat-badge tier-badge">
              {destination.budgetTier}
            </span>
          )}
        </div>
      </div>

      <div className="chat-card-body">
        <div className="chat-card-header">
          <h4 className="chat-card-title">{destination.name}</h4>
          <span className="chat-card-location">
            <MapPin size={12} />
            {destination.state ? `${destination.state}, ` : ''}{destination.country}
          </span>
        </div>

        {destination.tagline && (
          <p className="chat-card-tagline">"{destination.tagline}"</p>
        )}

        <div className="chat-card-meta-grid">
          <div className="chat-meta-item">
            <Calendar size={13} />
            <span>{destination.bestTime || 'Year-round'}</span>
          </div>
          <div className="chat-meta-item">
            <Clock size={13} />
            <span>{destination.idealDuration || '3 - 4 Days'}</span>
          </div>
          <div className="chat-meta-item">
            <IndianRupee size={13} />
            <span>₹{(destination.averageBudget || 4500).toLocaleString('en-IN')}/day</span>
          </div>
        </div>

        <div className="chat-card-actions">
          <button onClick={handleExplore} className="btn-chat-sec">
            <span>Explore Details</span>
            <ExternalLink size={13} />
          </button>
          <button onClick={handlePlan} className="btn-chat-pri">
            <Sparkles size={13} />
            <span>Plan This Trip</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function HotelCardsList({ hotels, destinationId }) {
  const navigate = useNavigate();
  const { toggleOpen } = useChat();

  if (!hotels || !Array.isArray(hotels) || hotels.length === 0) return null;

  return (
    <div className="chat-hotels-container">
      <div className="chat-subhead-row">
        <span className="chat-subhead-title">
          <HotelIcon size={14} /> Recommended Stays ({hotels.length})
        </span>
        {destinationId && (
          <button
            onClick={() => {
              navigate(`/hotels?destination=${destinationId}`);
              toggleOpen(false);
            }}
            className="chat-see-all-link"
          >
            All Hotels <ArrowRight size={12} />
          </button>
        )}
      </div>

      <div className="chat-horizontal-scroll">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="chat-hotel-mini-card">
            <div className="chat-hotel-mini-img-wrap">
              <img
                src={hotel.heroImage || hotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400'}
                alt={hotel.name}
                className="chat-hotel-mini-img"
                loading="lazy"
              />
              <span className="chat-mini-rating">
                <Star size={11} fill="#D99B26" stroke="#D99B26" />
                {hotel.rating}
              </span>
            </div>
            <div className="chat-hotel-mini-info">
              <h5 className="chat-hotel-name" title={hotel.name}>{hotel.name}</h5>
              <p className="chat-hotel-cat">{hotel.category || hotel.type || 'Hotel'}</p>
              <div className="chat-hotel-price-row">
                <span className="chat-hotel-price">
                  ₹{Number(hotel.pricePerNight).toLocaleString('en-IN')}
                </span>
                <span className="chat-hotel-per-night">/night</span>
              </div>
              <button
                onClick={() => {
                  navigate(`/hotels?destination=${hotel.destinationId || destinationId || ''}`);
                  toggleOpen(false);
                }}
                className="btn-chat-mini-action"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RestaurantCardsList({ restaurants, destinationId }) {
  const navigate = useNavigate();
  const { toggleOpen } = useChat();

  if (!restaurants || !Array.isArray(restaurants) || restaurants.length === 0) return null;

  return (
    <div className="chat-restaurants-container">
      <div className="chat-subhead-row">
        <span className="chat-subhead-title">
          <Utensils size={14} /> Culinary Highlights ({restaurants.length})
        </span>
        {destinationId && (
          <button
            onClick={() => {
              navigate(`/restaurants?destination=${destinationId}`);
              toggleOpen(false);
            }}
            className="chat-see-all-link"
          >
            All Restaurants <ArrowRight size={12} />
          </button>
        )}
      </div>

      <div className="chat-horizontal-scroll">
        {restaurants.map((rest) => (
          <div key={rest.id} className="chat-rest-mini-card">
            <div className="chat-rest-mini-img-wrap">
              <img
                src={rest.heroImage || rest.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400'}
                alt={rest.name}
                className="chat-rest-mini-img"
                loading="lazy"
              />
              <span className="chat-mini-rating">
                <Star size={11} fill="#D99B26" stroke="#D99B26" />
                {rest.rating}
              </span>
            </div>
            <div className="chat-rest-mini-info">
              <h5 className="chat-rest-name" title={rest.name}>{rest.name}</h5>
              <p className="chat-rest-cuisines">
                {rest.cuisines?.slice(0, 2).join(', ') || 'Regional Cuisines'}
              </p>
              <div className="chat-rest-cost">
                <span>Cost for two: ₹{rest.costForTwo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ItineraryCard({ itinerary, destination }) {
  const [expandedDay, setExpandedDay] = useState(1);
  const navigate = useNavigate();
  const { toggleOpen } = useChat();

  if (!itinerary || !itinerary.days) return null;

  const handleLoadPlanner = () => {
    navigate('/create-trip', {
      state: {
        prefillDestinationId: destination?.id || itinerary.destinationId || ''
      }
    });
    toggleOpen(false);
  };

  return (
    <div className="chat-itinerary-card">
      <div className="chat-itinerary-header">
        <div>
          <span className="chat-itinerary-tag">Custom Travel Plan</span>
          <h4 className="chat-itinerary-title">
            {itinerary.daysCount}-Day Itinerary: {itinerary.destinationName}
          </h4>
        </div>
        {itinerary.totalCost && (
          <div className="chat-itinerary-cost">
            <span className="cost-lbl">Est. Trip Cost</span>
            <span className="cost-val">₹{itinerary.totalCost.toLocaleString('en-IN')}</span>
          </div>
        )}
      </div>

      <div className="chat-itinerary-days-list">
        {itinerary.days.map((d) => {
          const isExp = expandedDay === d.day;
          return (
            <div key={d.day} className={`chat-itin-day-item ${isExp ? 'expanded' : ''}`}>
              <button
                type="button"
                onClick={() => setExpandedDay(isExp ? null : d.day)}
                className="chat-itin-day-btn"
              >
                <div className="chat-itin-day-title-wrap">
                  <span className="chat-itin-day-pill">Day {d.day}</span>
                  <span className="chat-itin-day-text">{d.title}</span>
                </div>
                {isExp ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isExp && (
                <div className="chat-itin-day-content">
                  <div className="chat-itin-slot">
                    <span className="slot-badge morning">🌅 Morning</span>
                    <p>{d.morning}</p>
                  </div>
                  <div className="chat-itin-slot">
                    <span className="slot-badge afternoon">☀️ Afternoon</span>
                    <p>{d.afternoon}</p>
                  </div>
                  <div className="chat-itin-slot">
                    <span className="slot-badge evening">🌙 Evening</span>
                    <p>{d.evening}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={handleLoadPlanner} className="btn-chat-pri full-width mt-3">
        <Sparkles size={14} />
        <span>Open in Trip Planner</span>
        <ArrowRight size={14} />
      </button>
    </div>
  );
}

export function BudgetEstimateCard({ budget, destination }) {
  const navigate = useNavigate();
  const { toggleOpen } = useChat();

  if (!budget || !budget.categories) return null;

  const cats = [
    { label: 'Hotels & Stays', amount: budget.categories.hotel, color: '#6F8F72' },
    { label: 'Food & Dining', amount: budget.categories.food, color: '#E8794F' },
    { label: 'Transit & Cabs', amount: budget.categories.transport, color: '#357DBC' },
    { label: 'Attractions & Passes', amount: budget.categories.activities, color: '#D99B26' },
    { label: 'Buffer & Shopping', amount: budget.categories.other, color: '#9355B8' }
  ];

  const total = budget.total || cats.reduce((acc, c) => acc + (c.amount || 0), 0);

  return (
    <div className="chat-budget-card">
      <div className="chat-budget-header">
        <div>
          <span className="chat-budget-tag">Cost Projection</span>
          <h4 className="chat-budget-title">
            {budget.destinationName} ({budget.days} Days)
          </h4>
        </div>
        <div className="chat-budget-total">
          <span className="total-label">Total Est.</span>
          <span className="total-amount">₹{total.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <div className="chat-budget-bars">
        {cats.map((c) => {
          const pct = total > 0 ? Math.round(((c.amount || 0) / total) * 100) : 0;
          return (
            <div key={c.label} className="chat-budget-cat-row">
              <div className="cat-label-row">
                <span className="cat-dot" style={{ backgroundColor: c.color }} />
                <span className="cat-name">{c.label}</span>
                <span className="cat-val">₹{(c.amount || 0).toLocaleString('en-IN')} ({pct}%)</span>
              </div>
              <div className="cat-progress-track">
                <div
                  className="cat-progress-fill"
                  style={{ width: `${pct}%`, backgroundColor: c.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          navigate('/create-trip', {
            state: {
              prefillDestinationId: destination?.id || ''
            }
          });
          toggleOpen(false);
        }}
        className="btn-chat-pri full-width mt-3"
      >
        <Compass size={14} />
        <span>Plan with this Budget</span>
      </button>
    </div>
  );
}
