/**
 * Delhi NCR Hotels & Stays
 * Lutyens colonial heritage palaces, UNESCO-awarded Mughal havelis, contemporary Aerocity stays, and Hauz Khas boutiques.
 * Price range: ₹2,500 to ₹27,500
 */

export const DELHI_HOTELS = [
  {
    id: "the-imperial-new-delhi",
    name: "The Imperial, New Delhi",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Janpath, New Delhi",
    state: "Delhi",
    country: "India",
    category: "5-Star Colonial Museum Hotel",
    type: "Palace",
    rating: 4.96,
    reviewsCount: 3950,
    badge: "Legendary Lutyens Landmark",
    tagline: "1930s Art Deco and Victorian grandeur set amidst 8 acres of lush gardens on Janpath",
    address: "Janpath, Connaught Place, New Delhi, Delhi 110001",
    nearLocation: "Janpath & Connaught Place",
    distanceToLandmarks: [
      { landmark: "Connaught Place", distance: "0.6 km" },
      { landmark: "India Gate", distance: "1.8 km" },
      { landmark: "Rashtrapati Bhavan", distance: "2.4 km" }
    ],
    pricePerNight: 27500,
    originalPrice: 34000,
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Inaugurated by Lord Willingdon in 1936, The Imperial is Asia's top colonial museum hotel, housing over 5,000 original colonial-era artworks, Italian marble corridors, the famous Spice Route restaurant, and Royal Palm gardens.",
    amenities: [
      "Royal Palm Garden Swimming Pool",
      "The Spice Route Pan-Asian Dining",
      "The Imperial Spa & Ayurvedic Wellness",
      "1911 Colonial High Tea Bar",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "imperial_heritage_room",
        name: "Heritage Grand Room",
        price: 27500,
        size: "500 sq.ft",
        bed: "Four-Poster Mahogany King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        perks: ["Royal Garden View", "Italian Marble Bathroom", "Gourmet Breakfast"]
      }
    ],
    coordinates: { lat: 28.6230, lng: 77.2180 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-lodhi-delhi",
    name: "The Lodhi - Luxury Pool Suites",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Lodhi Road, New Delhi",
    state: "Delhi",
    country: "India",
    category: "5-Star Ultra-Luxury",
    type: "Resort",
    rating: 4.94,
    reviewsCount: 2310,
    badge: "Private Balcony Plunge Pools",
    tagline: "Serene urban sanctuary with private heated plunge pools on every room balcony",
    address: "Lodhi Rd, CGO Complex, Pragati Vihar, New Delhi, Delhi 110003",
    nearLocation: "Lodhi Gardens & Humayun's Tomb",
    distanceToLandmarks: [
      { landmark: "Humayun's Tomb", distance: "0.8 km" },
      { landmark: "Lodhi Gardens", distance: "1.5 km" },
      { landmark: "Khan Market", distance: "2.0 km" }
    ],
    pricePerNight: 25000,
    originalPrice: 31000,
    heroImage: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Spread over 7 verdant acres near Lodhi Gardens, The Lodhi provides private plunge pools on room terraces, a 50m lap pool, subterranean spa with hammam, and Michelin-acclaimed culinary experiences.",
    amenities: [
      "Private Balcony Plunge Pools",
      "50m Olympic Sized Lap Pool",
      "The Lodhi Spa with Turkish Hammam",
      "Elan Multi-Cuisine Courtyard Dining",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "lodhi_premier_pool_room",
        name: "Lodhi Premier Room with Private Plunge Pool",
        price: 25000,
        size: "750 sq.ft",
        bed: "Custom King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Heated Plunge Pool", "Balcony Daybed", "Breakfast Included"]
      }
    ],
    coordinates: { lat: 28.5910, lng: 77.2380 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "andaz-delhi-aerocity",
    name: "Andaz Delhi - Concept by Hyatt",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Aerocity, New Delhi",
    state: "Delhi",
    country: "India",
    category: "5-Star Contemporary Luxury",
    type: "Resort",
    rating: 4.90,
    reviewsCount: 3410,
    badge: "Aerocity Art Destination",
    tagline: "Art-filled contemporary luxury minutes from IGI Airport with 401 unique Delhi art installations",
    address: "Asset No. 1, Northern Access Rd, Aerocity, New Delhi 110037",
    nearLocation: "Delhi Aerocity & IGI Airport",
    distanceToLandmarks: [
      { landmark: "IGI Airport Terminal 3", distance: "2.5 km" },
      { landmark: "Qutub Minar", distance: "9.5 km" }
    ],
    pricePerNight: 14200,
    originalPrice: 17500,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"],
    description: "Vibrant lifestyle hotel showcasing Delhi's rich culture, featuring European food hall AnnaMaya, poolside sunbeds, gin bar The Juniper, and expansive soundproof suites.",
    amenities: [
      "Large Outdoor Courtyard Swimming Pool",
      "AnnaMaya European Artisanal Foodhall",
      "Andaz Spa & 24/7 Fitness Center",
      "Free Minibar Snacks",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "andaz_runway_king",
        name: "Standard King Runway View Room",
        price: 14200,
        size: "450 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
        perks: ["Soundproof Aerocity View", "Free Breakfast", "Complimentary Minibar"]
      }
    ],
    coordinates: { lat: 28.5520, lng: 77.1210 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: true }
  },
  {
    id: "haveli-dharampura-delhi",
    name: "Haveli Dharampura - UNESCO Mughal Stay",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Chandni Chowk, Old Delhi",
    state: "Delhi",
    country: "India",
    category: "UNESCO Heritage Haveli",
    type: "Haveli",
    rating: 4.89,
    reviewsCount: 1650,
    badge: "UNESCO Heritage Award",
    tagline: "Late Mughal-era restored 1887 mansion with rooftop views of Jama Masjid and kite flying",
    address: "2293, Gali Guliyan, Dharampura, Chandni Chowk, New Delhi 110006",
    nearLocation: "Chandni Chowk, near Jama Masjid",
    distanceToLandmarks: [
      { landmark: "Jama Masjid", distance: "0.2 km" },
      { landmark: "Red Fort", distance: "0.9 km" },
      { landmark: "Chandni Chowk Metro", distance: "0.5 km" }
    ],
    pricePerNight: 11500,
    originalPrice: 14000,
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"],
    description: "Awarded by UNESCO for cultural heritage conservation, this 19th-century haveli features wooden carvings, stone jharokhas, Kathak dance evenings, and royal Mughlai dinners under Jama Masjid minarets.",
    amenities: [
      "Rooftop Jama Masjid Panorama",
      "Lakhori Mughlai Fine Dining",
      "Daily Classical Kathak Performances",
      "Pigeon Flying & Kite Flying Traditions",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "dharampura_jharokha_room",
        name: "Jharokha Heritage Room",
        price: 11500,
        size: "350 sq.ft",
        bed: "Antique Carved Wood Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard Jharokha", "Complimentary High Tea", "Kathak Show Included"]
      }
    ],
    coordinates: { lat: 28.6505, lng: 77.2340 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-manor-delhi",
    name: "The Manor - Boutique Urban Oasis",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Friends Colony West, New Delhi",
    state: "Delhi",
    country: "India",
    category: "Modern Boutique Oasis",
    type: "Boutique",
    rating: 4.86,
    reviewsCount: 1280,
    badge: "Quiet Garden Sanctuary",
    tagline: "Tranquil 1950s modernist boutique retreat nestled within quiet leafy Friends Colony",
    address: "77 Friends Colony West, New Delhi, Delhi 110065",
    nearLocation: "Friends Colony, South Delhi",
    distanceToLandmarks: [
      { landmark: "Lotus Temple", distance: "2.8 km" },
      { landmark: "Humayun's Tomb", distance: "4.5 km" }
    ],
    pricePerNight: 8900,
    originalPrice: 11000,
    heroImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop"],
    description: "An intimate two-storey hotel built in 1950 and restored with mid-century teakwood, stone pathways, and lush lawns, offering respite from Delhi's lively avenues.",
    amenities: [
      "In-House Culinary Kitchen",
      "Manicured Lawn Dining",
      "Ayurvedic Massage Therapy",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "manor_junior_suite",
        name: "Junior Garden Suite",
        price: 8900,
        size: "380 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        perks: ["Garden View Terrace", "Free Artisanal Breakfast", "Quiet Neighborhood"]
      }
    ],
    coordinates: { lat: 28.5680, lng: 77.2710 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "bloomrooms-janpath-delhi",
    name: "Bloomrooms @ Janpath",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Janpath, Central Delhi",
    state: "Delhi",
    country: "India",
    category: "Chic Minimalist Boutique",
    type: "Boutique",
    rating: 4.83,
    reviewsCount: 2450,
    badge: "Central Connaught Place",
    tagline: "Bright signature yellow-and-white minimalist design hotel in prime central Delhi",
    address: "1, Janpath Lane, Connaught Place, New Delhi 110001",
    nearLocation: "Janpath Lane, CP",
    distanceToLandmarks: [
      { landmark: "Connaught Place", distance: "0.5 km" },
      { landmark: "Janpath Market", distance: "0.2 km" }
    ],
    pricePerNight: 4500,
    originalPrice: 5800,
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"],
    description: "Famous for crisp cloud-like beds, Grohe rain showers, and vibrant contemporary cafe, right in the heart of Janpath's diplomatic and shopping quarters.",
    amenities: [
      "Bloom Cafe & Breakfast Room",
      "High-Pressure Rain Showers",
      "iMac Business Stations",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "bloom_queen_deluxe",
        name: "Standard Cloud Queen Room",
        price: 4500,
        size: "260 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        perks: ["Cloud Bed", "Free Breakfast", "Grohe Rain Shower"]
      }
    ],
    coordinates: { lat: 28.6210, lng: 77.2190 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "madpackers-delhi-hauzkhas",
    name: "Madpackers Delhi - Hauz Khas Stays",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Hauz Khas, New Delhi",
    state: "Delhi",
    country: "India",
    category: "Bohemian Backpacker Hub",
    type: "Boutique",
    rating: 4.85,
    reviewsCount: 3100,
    badge: "Hauz Khas Village Vibe",
    tagline: "Vibrant community hostel with a grass-carpeted rooftop terrace overlooking Hauz Khas monuments",
    address: "S-39A, Panchsheel Park South, Near Hauz Khas, New Delhi 110017",
    nearLocation: "Near Hauz Khas Village & Deer Park",
    distanceToLandmarks: [
      { landmark: "Hauz Khas Fort & Lake", distance: "1.5 km" },
      { landmark: "Qutub Minar", distance: "4.8 km" }
    ],
    pricePerNight: 2500,
    originalPrice: 3200,
    heroImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop"],
    description: "Award-winning backpacker hub in South Delhi with grass-covered rooftop terrace, live chai sessions, food walks through Old Delhi, and cozy private AC rooms.",
    amenities: [
      "Grass-Carpeted Rooftop Lounge",
      "Communal Kitchen & Free Chai",
      "High-Speed Wi-Fi for Digital Nomads",
      "Luggage Storage & Lockers"
    ],
    roomTypes: [
      {
        id: "madpackers_private_deluxe",
        name: "Private Ensuite Queen Room",
        price: 2500,
        size: "220 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Bathroom", "Air Conditioning", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 28.5440, lng: 77.2180 },
    policies: { checkIn: "12:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
