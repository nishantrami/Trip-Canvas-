import React from 'react';
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Thermometer,
  Compass,
  RefreshCw
} from 'lucide-react';
import { useWeather } from '../../hooks/useWeather';
import { WeatherSkeleton } from '../common/Skeleton';
import { ErrorState } from '../common/ErrorState';

export function WeatherCard({
  coordinates,
  fallbackProfile,
  locationName = 'Destination'
}) {
  const { weather, loading, error, refetch } = useWeather(
    coordinates?.lat,
    coordinates?.lng,
    fallbackProfile
  );

  if (loading) {
    return <WeatherSkeleton />;
  }

  if (error && !weather) {
    return (
      <ErrorState
        title="Weather Unavailable"
        message="Could not load real-time meteorology data for this location."
        onRetry={refetch}
      />
    );
  }

  const getWeatherIcon = (cond = '') => {
    const c = cond.toLowerCase();
    if (c.includes('rain') || c.includes('drizzle')) return <CloudRain size={36} className="text-info" />;
    if (c.includes('snow')) return <CloudSnow size={36} className="text-info" />;
    if (c.includes('cloud') || c.includes('overcast')) return <Cloud size={36} className="text-muted" />;
    return <Sun size={36} className="text-amber" />;
  };

  return (
    <div className="card weather-card-root">
      <div className="weather-card-header">
        <div>
          <span className="weather-location-tag">
            <Compass size={13} /> {locationName}
          </span>
          <h3 className="weather-heading">Current Climate</h3>
        </div>

        <div className="weather-live-indicator">
          <span className={`live-dot ${weather?.isLive ? 'active' : 'demo'}`} />
          <span>{weather?.isLive ? 'Live API Forecast' : 'Seasonal Profile'}</span>
          <button onClick={refetch} className="weather-refresh-btn" title="Refresh weather">
            <RefreshCw size={12} />
          </button>
        </div>
      </div>

      <div className="weather-main-display">
        <div className="weather-temp-hero">
          <div className="weather-icon-bubble">{getWeatherIcon(weather?.condition)}</div>
          <div>
            <div className="weather-deg-row">
              <span className="weather-temp-val">{weather?.temp ?? 26}</span>
              <span className="weather-temp-unit">°C</span>
            </div>
            <p className="weather-condition-text">{weather?.condition || 'Clear Sky'}</p>
          </div>
        </div>

        {/* Vital stats */}
        <div className="weather-vitals-grid">
          <div className="weather-vital-item">
            <Thermometer size={16} className="vital-icon" />
            <div>
              <span className="vital-label">Feels Like</span>
              <span className="vital-val">{weather?.feelsLike ?? 25}°C</span>
            </div>
          </div>

          <div className="weather-vital-item">
            <Droplets size={16} className="vital-icon" />
            <div>
              <span className="vital-label">Humidity</span>
              <span className="vital-val">{weather?.humidity || '45%'}</span>
            </div>
          </div>

          <div className="weather-vital-item">
            <Wind size={16} className="vital-icon" />
            <div>
              <span className="vital-label">Wind Speed</span>
              <span className="vital-val">{weather?.windSpeed || '12 km/h'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Day Extended Outlook */}
      {weather?.forecast && weather.forecast.length > 0 && (
        <div className="weather-forecast-section">
          <span className="forecast-title">Upcoming Outlook</span>
          <div className="weather-forecast-row">
            {weather.forecast.map((fc, idx) => (
              <div key={idx} className="forecast-day-card">
                <span className="forecast-day-name">{fc.day}</span>
                <div className="forecast-icon">{getWeatherIcon(fc.condition)}</div>
                <div className="forecast-temps">
                  <span className="forecast-max">{fc.maxTemp}°</span>
                  <span className="forecast-min text-muted">{fc.minTemp}°</span>
                </div>
                <span className="forecast-cond-small">{fc.condition}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
