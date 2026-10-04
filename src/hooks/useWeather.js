import { useState, useEffect } from 'react';
import { weatherService } from '../services/weatherService';

export function useWeather(lat, lng, fallbackProfile = null) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!lat || !lng) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await weatherService.getWeatherForCoordinates(lat, lng, fallbackProfile);
      setWeather(data);
    } catch (err) {
      setError(err.message || 'Could not load weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [lat, lng]);

  return { weather, loading, error, refetch: fetchWeather };
}
