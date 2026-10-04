/**
 * Map utilities and distance calculators
 */

export const mapService = {
  // Haversine formula to compute great-circle distance between two points in km
  calculateDistanceKm: (lat1, lon1, lat2, lon2) => {
    if (!lat1 || !lon1 || !lat2 || !lon2) return null;
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return Math.round(distance * 10) / 10; // 1 decimal place
  },

  formatTravelTimeEstimate: (distanceKm) => {
    if (!distanceKm) return "N/A";
    if (distanceKm < 1) return "5 mins walk";
    if (distanceKm < 4) return `${Math.round(distanceKm * 4)} mins drive`;
    const minutes = Math.round(distanceKm * 2.2);
    if (minutes < 60) return `${minutes} mins drive`;
    const hours = Math.floor(minutes / 60);
    const remMins = minutes % 60;
    return `${hours} hr ${remMins > 0 ? `${remMins}m` : ''} drive`;
  }
};
