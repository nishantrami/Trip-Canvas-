/**
 * Weather Service
 * Connects to open-meteo API for real-time weather forecasts with structured mock fallback
 */

const getWeatherCodeDescription = (code) => {
  if (code === 0) return "Clear Sky";
  if (code === 1 || code === 2) return "Mainly Clear & Mild";
  if (code === 3) return "Overcast";
  if (code === 45 || code === 48) return "Foggy & Misty";
  if (code >= 51 && code <= 55) return "Light Drizzle";
  if (code >= 61 && code <= 65) return "Rain Showers";
  if (code >= 71 && code <= 77) return "Snow Flurries";
  if (code >= 80 && code <= 82) return "Heavy Rain Showers";
  if (code >= 95) return "Thunderstorm";
  return "Pleasant Weather";
};

export const weatherService = {
  getWeatherForCoordinates: async (lat, lng, fallbackProfile = null) => {
    try {
      if (!lat || !lng) {
        throw new Error("Missing coordinates");
      }

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&hourly=relativehumidity_2m,apparent_temperature,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Weather service response ${response.status}`);
      }

      const data = await response.json();
      const current = data.current_weather;
      const condition = getWeatherCodeDescription(current.weathercode);

      // Extract 4-day forecast
      const forecast = (data.daily?.time || []).slice(0, 4).map((time, index) => {
        const dateObj = new Date(time);
        const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
        return {
          day: dayName,
          date: time,
          maxTemp: Math.round(data.daily.temperature_2m_max[index]),
          minTemp: Math.round(data.daily.temperature_2m_min[index]),
          condition: getWeatherCodeDescription(data.daily.weathercode[index])
        };
      });

      return {
        isLive: true,
        temp: Math.round(current.temperature),
        condition: condition,
        windSpeed: `${Math.round(current.windspeed)} km/h`,
        humidity: `${data.hourly?.relativehumidity_2m?.[0] || 52}%`,
        feelsLike: Math.round(data.hourly?.apparent_temperature?.[0] || current.temperature),
        forecast: forecast
      };
    } catch (err) {
      // Graceful fallback to rich static profile
      return {
        isLive: false,
        temp: fallbackProfile?.temp || 26,
        condition: fallbackProfile?.condition || "Clear & Pleasant",
        windSpeed: fallbackProfile?.wind || "12 km/h",
        humidity: fallbackProfile?.humidity || "45%",
        feelsLike: fallbackProfile?.feelsLike || fallbackProfile?.temp || 25,
        forecast: [
          { day: "Today", maxTemp: (fallbackProfile?.temp || 26) + 2, minTemp: (fallbackProfile?.temp || 26) - 5, condition: fallbackProfile?.condition || "Sunny" },
          { day: "Tomorrow", maxTemp: (fallbackProfile?.temp || 26) + 1, minTemp: (fallbackProfile?.temp || 26) - 4, condition: "Mostly Clear" },
          { day: "Day 3", maxTemp: (fallbackProfile?.temp || 26) + 3, minTemp: (fallbackProfile?.temp || 26) - 6, condition: "Breezy & Fine" },
          { day: "Day 4", maxTemp: (fallbackProfile?.temp || 26), minTemp: (fallbackProfile?.temp || 26) - 5, condition: "Mild" }
        ]
      };
    }
  }
};
