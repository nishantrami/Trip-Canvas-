import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, MapPin, ArrowRight, Compass, Sparkles, Building, Utensils } from 'lucide-react';
import { Modal } from '../common/Modal';
import { destinationService } from '../../services/destinationService';
import { hotelService } from '../../services/hotelService';
import { restaurantService } from '../../services/restaurantService';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export function QuickSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [destResults, setDestResults] = useState([]);
  const [hotelResults, setHotelResults] = useState([]);
  const [restResults, setRestResults] = useState([]);
  const [recentSearches, setRecentSearches] = useLocalStorage('tripcanvas_recent_searches', [
    'Udaipur',
    'Taj Lake Palace',
    'Ambrai Restaurant',
    'Goa'
  ]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setDestResults(destinationService.getPopularDestinations(3));
      setHotelResults(hotelService.getAllHotels().slice(0, 2));
      setRestResults(restaurantService.getAllRestaurants().slice(0, 2));
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setDestResults(destinationService.getPopularDestinations(3));
      setHotelResults(hotelService.getAllHotels().slice(0, 2));
      setRestResults(restaurantService.getAllRestaurants().slice(0, 2));
    } else {
      setDestResults(destinationService.searchDestinations(query).slice(0, 3));
      setHotelResults(hotelService.searchHotels(query).slice(0, 3));
      setRestResults(restaurantService.searchRestaurants(query).slice(0, 3));
    }
  }, [query]);

  const handleSelectDest = (dest) => {
    if (dest?.name) {
      setRecentSearches((prev) => {
        const filtered = prev.filter((item) => item.toLowerCase() !== dest.name.toLowerCase());
        return [dest.name, ...filtered].slice(0, 5);
      });
    }
    onClose();
    navigate(`/explore/${dest.id}`);
  };

  const handleSelectHotel = (hotel) => {
    onClose();
    navigate(`/hotels?search=${encodeURIComponent(hotel.name)}`);
  };

  const handleSelectRest = (rest) => {
    onClose();
    navigate(`/restaurants?search=${encodeURIComponent(rest.name)}`);
  };

  const handleRecentClick = (term) => {
    setQuery(term);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="640px" showClose={false}>
      <div className="quick-search-header">
        <div className="quick-search-input-box">
          <Search size={20} className="quick-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="quick-search-input"
            placeholder="Search destinations, luxury hotels, rooftop restaurants..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="quick-search-clear"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="quick-search-body max-h-[70vh] overflow-y-auto">
        {/* Recent Searches */}
        {!query && recentSearches.length > 0 && (
          <div className="quick-search-recents">
            <span className="quick-search-label">Recent Searches</span>
            <div className="quick-search-chips">
              {recentSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => handleRecentClick(term)}
                  className="quick-search-chip"
                >
                  <Sparkles size={12} />
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Destination Results */}
        {destResults.length > 0 && (
          <div className="quick-search-results mb-4">
            <span className="quick-search-label flex items-center gap-1">
              <Compass size={13} /> Destinations
            </span>
            <div className="quick-search-list">
              {destResults.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => handleSelectDest(dest)}
                  className="quick-search-item"
                  role="button"
                  tabIndex={0}
                >
                  <img src={dest.heroImage} alt={dest.name} className="quick-search-item-img" />
                  <div className="quick-search-item-info">
                    <div className="quick-search-item-title-row">
                      <h4 className="quick-search-item-title">{dest.name}</h4>
                      <span className="badge badge-accent">{dest.category}</span>
                    </div>
                    <p className="quick-search-item-sub">
                      <MapPin size={12} /> {dest.state ? `${dest.state}, ` : ''}{dest.country} · ★ {dest.rating}
                    </p>
                  </div>
                  <ArrowRight size={16} className="quick-search-item-arrow" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hotel Results */}
        {hotelResults.length > 0 && (
          <div className="quick-search-results mb-4">
            <span className="quick-search-label flex items-center gap-1">
              <Building size={13} /> Luxury Hotels & Stays
            </span>
            <div className="quick-search-list">
              {hotelResults.map((hotel) => (
                <div
                  key={hotel.id}
                  onClick={() => handleSelectHotel(hotel)}
                  className="quick-search-item"
                  role="button"
                  tabIndex={0}
                >
                  <img src={hotel.heroImage} alt={hotel.name} className="quick-search-item-img" />
                  <div className="quick-search-item-info">
                    <div className="quick-search-item-title-row">
                      <h4 className="quick-search-item-title">{hotel.name}</h4>
                      <span className="badge badge-primary">{hotel.category}</span>
                    </div>
                    <p className="quick-search-item-sub">
                      <MapPin size={12} /> {hotel.nearLocation} · ★ {hotel.rating}
                    </p>
                  </div>
                  <ArrowRight size={16} className="quick-search-item-arrow" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Restaurant Results */}
        {restResults.length > 0 && (
          <div className="quick-search-results mb-4">
            <span className="quick-search-label flex items-center gap-1">
              <Utensils size={13} /> Restaurants & Dining
            </span>
            <div className="quick-search-list">
              {restResults.map((rest) => (
                <div
                  key={rest.id}
                  onClick={() => handleSelectRest(rest)}
                  className="quick-search-item"
                  role="button"
                  tabIndex={0}
                >
                  <img src={rest.heroImage} alt={rest.name} className="quick-search-item-img" />
                  <div className="quick-search-item-info">
                    <div className="quick-search-item-title-row">
                      <h4 className="quick-search-item-title">{rest.name}</h4>
                      <span className="badge badge-accent">{rest.priceRange}</span>
                    </div>
                    <p className="quick-search-item-sub">
                      <MapPin size={12} /> {rest.nearLocation} · ★ {rest.rating}
                    </p>
                  </div>
                  <ArrowRight size={16} className="quick-search-item-arrow" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="quick-search-footer">
        <span className="quick-search-tip">
          Tip: Click on any destination, hotel, or restaurant to view details and book.
        </span>
      </div>
    </Modal>
  );
}
