import React, { useState } from 'react';
import {
  Clock,
  IndianRupee,
  Plus,
  Building,
  Utensils,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Navigation,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import { destinationService } from '../../services/destinationService';
import { hotelService } from '../../services/hotelService';
import { restaurantService } from '../../services/restaurantService';

// Place type icon and accent matcher
const getPlaceTypeBadgeStyle = (placeType = '') => {
  const p = placeType.toLowerCase();
  if (p.includes('palace') || p.includes('fort')) {
    return { icon: '🏰', badgeClass: 'badge-accent' };
  }
  if (p.includes('lake') || p.includes('water') || p.includes('ghat')) {
    return { icon: '🌊', badgeClass: 'badge-info' };
  }
  if (p.includes('temple') || p.includes('religious')) {
    return { icon: '🛕', badgeClass: 'badge-warning' };
  }
  if (p.includes('garden') || p.includes('nature')) {
    return { icon: '🌿', badgeClass: 'badge-success' };
  }
  if (p.includes('craft') || p.includes('folk') || p.includes('museum')) {
    return { icon: '🎨', badgeClass: 'badge-primary' };
  }
  if (p.includes('cable') || p.includes('view') || p.includes('ropeway')) {
    return { icon: '🚠', badgeClass: 'badge-accent' };
  }
  return { icon: '📍', badgeClass: 'badge-secondary' };
};

export function AttractionCard({
  attraction,
  destinationId,
  destinationName = '',
  onAddToTrip,
  onBookHotel,
  onReserveRestaurant,
  onViewOnMap,
  actionButtonLabel = 'Add to Itinerary',
  showAddButton = true
}) {
  const [activeNearbyTab, setActiveNearbyTab] = useState('hotels'); // 'hotels' | 'restaurants'
  const [isExpanded, setIsExpanded] = useState(false);

  // Resolve nearby hotels & restaurants
  const nearbyData = destinationService.getAttractionNearby(destinationId, attraction);
  const nearbyHotels = nearbyData.nearbyHotels || [];
  const nearbyRestaurants = nearbyData.nearbyRestaurants || [];

  const { icon: typeIcon, badgeClass } = getPlaceTypeBadgeStyle(attraction.placeType || attraction.category);

  // Handlers for booking and reserving
  const handleHotelClick = (hotel) => {
    if (onBookHotel) {
      // Find full hotel object from service if exists
      const fullHotel = hotelService.getHotelById(hotel.id) || hotel;
      onBookHotel(fullHotel);
    }
  };

  const handleRestaurantClick = (restaurant) => {
    if (onReserveRestaurant) {
      // Find full restaurant object from service if exists
      const fullRest = restaurantService.getRestaurantById(restaurant.id) || restaurant;
      onReserveRestaurant(fullRest);
    }
  };

  const displayedHotels = isExpanded ? nearbyHotels : nearbyHotels.slice(0, 2);
  const displayedRestaurants = isExpanded ? nearbyRestaurants : nearbyRestaurants.slice(0, 2);

  return (
    <div className="card attraction-card-enhanced">
      {/* Media & Badges */}
      <div className="attraction-card-media">
        <img
          src={attraction.image}
          alt={attraction.name}
          loading="lazy"
          className="attraction-img"
        />

        <div className="attraction-badge-group-top">
          <span className="badge badge-accent attraction-cat-badge">
            {attraction.category || 'Sightseeing'}
          </span>
          {attraction.placeType && (
            <span className={`badge ${badgeClass} attraction-place-type-badge`}>
              <span className="badge-emoji">{typeIcon}</span> {attraction.placeType}
            </span>
          )}
        </div>

        {attraction.timeSlot && (
          <div className="attraction-timeslot-chip">
            <Clock size={11} /> {attraction.timeSlot}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="attraction-card-content">
        <div className="attraction-header-row">
          <div>
            <h3 className="attraction-card-title">{attraction.name}</h3>
            {attraction.placeType && (
              <p className="attraction-type-subtitle">
                {typeIcon} {attraction.placeType}
              </p>
            )}
          </div>
        </div>

        <p className="attraction-card-desc">{attraction.description}</p>

        {/* Quick Meta Stats */}
        <div className="attraction-meta-row">
          <span className="attraction-meta-pill" title="Typical visit duration">
            <Clock size={13} className="text-accent" /> {attraction.duration || '2 Hours'}
          </span>
          <span className="attraction-meta-pill" title="Entry fee per adult">
            <IndianRupee size={13} className="text-accent" />
            {attraction.entryFee > 0 ? `${formatCurrency(attraction.entryFee)} entry` : 'Free Admission'}
          </span>
          {attraction.coordinates && (
            <span className="attraction-meta-pill text-muted" title="Geographical location">
              <MapPin size={12} /> {destinationName || attraction.city || 'Sightseeing'}
            </span>
          )}
        </div>

        {/* NEARBY HOTELS & RESTAURANTS SECTION */}
        <div className="attraction-nearby-box">
          <div className="nearby-box-header">
            <span className="nearby-box-title">
              <Sparkles size={13} className="text-accent" /> Near this Place:
            </span>

            {/* Segmented Switcher */}
            <div className="nearby-switcher-pills">
              <button
                type="button"
                onClick={() => setActiveNearbyTab('hotels')}
                className={`nearby-pill-btn ${activeNearbyTab === 'hotels' ? 'active' : ''}`}
              >
                <Building size={12} />
                <span>Hotels ({nearbyHotels.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNearbyTab('restaurants')}
                className={`nearby-pill-btn ${activeNearbyTab === 'restaurants' ? 'active' : ''}`}
              >
                <Utensils size={12} />
                <span>Dining ({nearbyRestaurants.length})</span>
              </button>
            </div>
          </div>

          {/* HOTELS LIST */}
          {activeNearbyTab === 'hotels' && (
            <div className="nearby-items-list">
              {displayedHotels.length > 0 ? (
                displayedHotels.map((h, idx) => (
                  <div key={h.id || idx} className="nearby-item-row">
                    <img
                      src={h.image}
                      alt={h.name}
                      className="nearby-item-thumb"
                      loading="lazy"
                    />

                    <div className="nearby-item-details">
                      <div className="nearby-item-header">
                        <h4 className="nearby-item-name" title={h.name}>
                          {h.name}
                        </h4>
                        <div className="nearby-item-rating">
                          <Star size={11} className="fill-warning text-warning" />
                          <span>{h.rating}</span>
                        </div>
                      </div>

                      <div className="nearby-dist-row">
                        <span className="nearby-dist-pill">
                          <MapPin size={10} /> {h.distance}
                        </span>
                        {h.walkTime && (
                          <span className="nearby-walk-pill">{h.walkTime}</span>
                        )}
                      </div>

                      <div className="nearby-item-footer">
                        <div className="nearby-price-tag">
                          <span className="price-val">₹{h.pricePerNight?.toLocaleString('en-IN')}</span>
                          <span className="price-unit">/night</span>
                        </div>

                        {onBookHotel && (
                          <button
                            type="button"
                            onClick={() => handleHotelClick(h)}
                            className="btn btn-outline btn-2xs nearby-action-btn"
                          >
                            <span>Book Stay</span>
                            <ArrowRight size={11} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-muted p-2">Explore nearby hotels in the Hotels directory.</p>
              )}
            </div>
          )}

          {/* RESTAURANTS LIST */}
          {activeNearbyTab === 'restaurants' && (
            <div className="nearby-items-list">
              {displayedRestaurants.length > 0 ? (
                displayedRestaurants.map((r, idx) => (
                  <div key={r.id || idx} className="nearby-item-row">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="nearby-item-thumb"
                      loading="lazy"
                    />

                    <div className="nearby-item-details">
                      <div className="nearby-item-header">
                        <h4 className="nearby-item-name" title={r.name}>
                          {r.name}
                        </h4>
                        <div className="nearby-item-rating">
                          <Star size={11} className="fill-warning text-warning" />
                          <span>{r.rating}</span>
                        </div>
                      </div>

                      <div className="nearby-dist-row">
                        <span className="nearby-dist-pill">
                          <MapPin size={10} /> {r.distance}
                        </span>
                        {r.walkTime && (
                          <span className="nearby-walk-pill">{r.walkTime}</span>
                        )}
                      </div>

                      {r.specialty && (
                        <p className="nearby-specialty-line truncate" title={r.specialty}>
                          ✨ {r.specialty}
                        </p>
                      )}

                      <div className="nearby-item-footer">
                        <div className="nearby-price-tag">
                          <span className="price-val">₹{r.costForTwo?.toLocaleString('en-IN')}</span>
                          <span className="price-unit"> for 2</span>
                        </div>

                        {onReserveRestaurant && (
                          <button
                            type="button"
                            onClick={() => handleRestaurantClick(r)}
                            className="btn btn-outline btn-2xs nearby-action-btn"
                          >
                            <span>Reserve</span>
                            <ArrowRight size={11} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-muted p-2">Explore nearby dining in the Restaurants directory.</p>
              )}
            </div>
          )}

          {/* Expand/Collapse Toggle for more hotels/restaurants */}
          {((activeNearbyTab === 'hotels' && nearbyHotels.length > 2) ||
            (activeNearbyTab === 'restaurants' && nearbyRestaurants.length > 2)) && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="nearby-expand-btn"
            >
              <span>{isExpanded ? 'Show Less' : `View All (${activeNearbyTab === 'hotels' ? nearbyHotels.length : nearbyRestaurants.length})`}</span>
              {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
          )}
        </div>

        {/* Card Main Actions */}
        <div className="attraction-card-footer mt-auto pt-3">
          {showAddButton && onAddToTrip && (
            <button
              type="button"
              onClick={() => onAddToTrip(attraction)}
              className="btn btn-primary btn-sm w-full"
            >
              <Plus size={15} />
              <span>{actionButtonLabel}</span>
            </button>
          )}

          {onViewOnMap && attraction.coordinates && (
            <button
              type="button"
              onClick={() => onViewOnMap(attraction)}
              className="btn btn-outline btn-sm w-full mt-2"
              title="Locate on Interactive Map"
            >
              <Navigation size={14} />
              <span>View On Map</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
