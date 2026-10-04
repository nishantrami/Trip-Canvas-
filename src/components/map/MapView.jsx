import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Navigation, Compass, ExternalLink, Clock, IndianRupee, Building, Utensils } from 'lucide-react';
import { mapService } from '../../services/mapService';
import { formatCurrency } from '../../utils/formatCurrency';

// Fix Leaflet default marker icon paths in bundled React environments
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

// Custom pin marker for attractions
const createCustomPin = (color = '#E8794F') => {
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<div style="
      background-color: ${color};
      width: 32px;
      height: 32px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      border: 2px solid #ffffff;
    ">
      <div style="
        width: 10px;
        height: 10px;
        background-color: #ffffff;
        border-radius: 50%;
        transform: rotate(45deg);
      "></div>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

function MapRecenter({ center, zoom = 13 }) {
  const map = useMap();
  useEffect(() => {
    if (center && center.length === 2 && !isNaN(center[0]) && !isNaN(center[1])) {
      map.flyTo(center, zoom, { duration: 1.2 });
    }
  }, [center, zoom, map]);
  return null;
}

export function MapView({
  centerCoordinates = { lat: 24.5854, lng: 73.7125 },
  attractions = [],
  destinationName = "Destination",
  height = "460px"
}) {
  const defaultCenter = [centerCoordinates.lat || 24.5854, centerCoordinates.lng || 73.7125];
  const [activeCenter, setActiveCenter] = useState(defaultCenter);
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  useEffect(() => {
    if (centerCoordinates?.lat && centerCoordinates?.lng) {
      setActiveCenter([centerCoordinates.lat, centerCoordinates.lng]);
    }
  }, [centerCoordinates]);

  const handleSelectAttraction = (att) => {
    setSelectedAttraction(att);
    if (att.coordinates?.lat && att.coordinates?.lng) {
      setActiveCenter([att.coordinates.lat, att.coordinates.lng]);
    }
  };

  return (
    <div className="map-view-wrapper card">
      <div className="map-view-header">
        <div>
          <h3 className="card-section-title">
            <Compass size={18} /> Interactive Destination Map
          </h3>
          <p className="text-muted text-sm">
            Exploring {destinationName} & surrounding attractions
          </p>
        </div>

        <button
          onClick={() => setActiveCenter(defaultCenter)}
          className="btn btn-outline btn-sm"
          title="Recenter map"
        >
          <Navigation size={14} /> Recenter
        </button>
      </div>

      <div className="map-view-content-split">
        {/* Leaflet Map Canvas */}
        <div className="map-canvas-container" style={{ height }}>
          <MapContainer
            center={defaultCenter}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%', borderRadius: '12px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            <MapRecenter center={activeCenter} zoom={selectedAttraction ? 15 : 13} />

            {/* Destination Primary Center Marker */}
            <Marker position={defaultCenter} icon={createCustomPin('#17201C')}>
              <Popup>
                <div className="map-popup-card">
                  <h4 className="map-popup-title">{destinationName} Center</h4>
                  <p className="text-sm text-muted">Primary hub & gateway</p>
                </div>
              </Popup>
            </Marker>

            {/* Attraction Markers */}
            {attractions.map((att) => {
              if (!att.coordinates?.lat || !att.coordinates?.lng) return null;
              const pos = [att.coordinates.lat, att.coordinates.lng];
              const isSelected = selectedAttraction?.id === att.id;

              return (
                <Marker
                  key={att.id}
                  position={pos}
                  icon={createCustomPin(isSelected ? '#357DBC' : '#E8794F')}
                  eventHandlers={{
                    click: () => setSelectedAttraction(att)
                  }}
                >
                  <Popup>
                    <div className="map-popup-card">
                      {att.image && (
                        <img src={att.image} alt={att.name} className="map-popup-img" />
                      )}
                      <h4 className="map-popup-title">{att.name}</h4>
                      {att.placeType && (
                        <span className="map-popup-type-tag">
                          📍 {att.placeType}
                        </span>
                      )}
                      <p className="map-popup-desc">{att.description}</p>
                      
                      {/* Nearby Hotel & Restaurant Highlights */}
                      {(att.nearbyHotels?.[0] || att.nearbyRestaurants?.[0]) && (
                        <div className="map-popup-nearby-section">
                          {att.nearbyHotels?.[0] && (
                            <div className="map-popup-nearby-item">
                              <Building size={11} className="text-accent flex-shrink-0" />
                              <span className="truncate">
                                Stay: <strong>{att.nearbyHotels[0].name}</strong> ({att.nearbyHotels[0].distance})
                              </span>
                            </div>
                          )}
                          {att.nearbyRestaurants?.[0] && (
                            <div className="map-popup-nearby-item">
                              <Utensils size={11} className="text-accent flex-shrink-0" />
                              <span className="truncate">
                                Eat: <strong>{att.nearbyRestaurants[0].name}</strong> ({att.nearbyRestaurants[0].distance})
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="map-popup-meta">
                        {att.duration && (
                          <span>
                            <Clock size={12} /> {att.duration}
                          </span>
                        )}
                        {att.entryFee !== undefined && (
                          <span>
                            <IndianRupee size={12} /> {att.entryFee > 0 ? formatCurrency(att.entryFee) : 'Free Entry'}
                          </span>
                        )}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        {/* Attractions List Sidebar */}
        {attractions.length > 0 && (
          <div className="map-attractions-sidebar">
            <h4 className="sidebar-list-title">Key Landmarks ({attractions.length})</h4>
            <div className="map-attractions-scroll">
              {attractions.map((att) => {
                const isSelected = selectedAttraction?.id === att.id;
                const dist = mapService.calculateDistanceKm(
                  centerCoordinates.lat,
                  centerCoordinates.lng,
                  att.coordinates?.lat,
                  att.coordinates?.lng
                );

                return (
                  <div
                    key={att.id}
                    onClick={() => handleSelectAttraction(att)}
                    className={`map-sidebar-item ${isSelected ? 'active' : ''}`}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="sidebar-item-dot" />
                    <div className="sidebar-item-info">
                      <span className="sidebar-item-name">{att.name}</span>
                      <span className="sidebar-item-dist">
                        <MapPin size={11} /> {dist ? `${dist} km from city center` : att.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
