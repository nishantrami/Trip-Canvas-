/**
 * Manali Hotels & Stays
 * Himalayan pine chalets, Beas riverside luxury retreats, apple orchard cottages, and alpine lodges.
 * Price range: ₹2,100 to ₹24,500
 */

export const MANALI_HOTELS = [
  {
    id: "the-himalayan-castle-manali",
    name: "The Himalayan - Victorian Castle & Cottages",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Hadimba Road, Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "Luxury Heritage Castle",
    type: "Chalet",
    rating: 4.93,
    reviewsCount: 1740,
    badge: "Gothic Castle in the Pines",
    tagline: "Victorian Gothic stone castle surrounded by apple & cherry orchards with snow peak views",
    address: "Hadimba Road, Kullu Valley, Manali, Himachal Pradesh 175131",
    nearLocation: "Near Hadimba Devi Temple",
    distanceToLandmarks: [
      { landmark: "Hadimba Temple", distance: "0.4 km" },
      { landmark: "Mall Road Manali", distance: "1.8 km" },
      { landmark: "Solang Valley", distance: "12.0 km" }
    ],
    pricePerNight: 24500,
    originalPrice: 29500,
    heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Built in Victorian Gothic style using handcrafted local stone and wood, The Himalayan features antique four-poster beds, working fireplaces, and an outdoor swimming pool overlooking snow peaks.",
    amenities: [
      "Heated Outdoor Pool with Mountain Views",
      "The Refectory Fine Dining",
      "The Dungeon Bar",
      "Fireplace in Every Room",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "castle_grand_chamber",
        name: "Castle Grand Chamber",
        price: 24500,
        size: "520 sq.ft",
        bed: "Carved Antique King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
        perks: ["Snow Peak View", "Working Fireplace", "Gourmet Breakfast"]
      }
    ],
    coordinates: { lat: 32.2470, lng: 77.1780 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-span-resort-manali",
    name: "Span Resort & Spa Manali",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Katrain, Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "5-Star Riverside Resort",
    type: "Resort",
    rating: 4.89,
    reviewsCount: 1980,
    badge: "Beas Riverfront Stays",
    tagline: "Riverside luxury sanctuary with pine forest trails and Himalayan vistas",
    address: "Baragarh Estate, Kullu Manali Highway, Katrain, Manali, HP 175129",
    nearLocation: "On the banks of Beas River, Katrain valley",
    distanceToLandmarks: [
      { landmark: "Naggar Castle", distance: "6.5 km" },
      { landmark: "Mall Road Manali", distance: "14.0 km" },
      { landmark: "Solang Valley", distance: "18.0 km" }
    ],
    pricePerNight: 16500,
    originalPrice: 21000,
    heroImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Nestled along the glacial waters of the Beas River surrounded by cedar and pine forest groves with majestic snow-clad Himalayan peaks.",
    amenities: [
      "Beas Riverfront Deck & Trout Fishing",
      "Heated Swimming Pool",
      "L’Occitane Spa",
      "Bonfire & Barbecue Evenings",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "span_grand_deluxe",
        name: "Grand Deluxe River View Room",
        price: 16500,
        size: "480 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
        perks: ["River & Mountain view", "Fireplace", "Breakfast Included"]
      }
    ],
    coordinates: { lat: 32.1287, lng: 77.1354 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: true }
  },
  {
    id: "larisa-resort-manali",
    name: "Larisa Resort Manali - Orchard Retreat",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Haripur, Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "Luxury Boutique Resort",
    type: "Resort",
    rating: 4.90,
    reviewsCount: 1420,
    badge: "Apple Orchard Retreat",
    tagline: "Stone and pine wood villas set inside private apple orchards with heated plunge pools",
    address: "Kullu Manali Highway, Haripur, Manali, HP 175136",
    nearLocation: "Haripur Village, 12 km before Manali",
    distanceToLandmarks: [
      { landmark: "Naggar Castle", distance: "4.0 km" },
      { landmark: "Mall Road Manali", distance: "11.0 km" }
    ],
    pricePerNight: 11500,
    originalPrice: 14500,
    heroImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop"],
    description: "Serene boutique resort set amongst organic vegetable gardens and apple trees, serving farm-to-table meals and offering panoramic Dhauladhar views.",
    amenities: [
      "Outdoor Swimming Pool",
      "Farm-to-Table Restaurant",
      "Spa Treatments",
      "Orchard Walks",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "larisa_deluxe_suite",
        name: "Deluxe Pine Suite",
        price: 11500,
        size: "450 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop",
        perks: ["Orchard View Deck", "Jacuzzi Tub", "Organic Breakfast"]
      }
    ],
    coordinates: { lat: 32.1640, lng: 77.1620 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "solang-valley-resort",
    name: "Solang Valley Resort",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Solang Valley, Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "4-Star Alpine Resort",
    type: "Resort",
    rating: 4.85,
    reviewsCount: 1680,
    badge: "Gateway to Adventure",
    tagline: "Directly on the banks of Beas river right at the foot of Solang ski slopes",
    address: "VPO Palchan, Solang Valley, Manali, HP 175103",
    nearLocation: "Solang Valley Ski Area",
    distanceToLandmarks: [
      { landmark: "Solang Ski Slopes & Ropeway", distance: "1.2 km" },
      { landmark: "Atal Tunnel South Portal", distance: "8.5 km" },
      { landmark: "Mall Road Manali", distance: "8.0 km" }
    ],
    pricePerNight: 8900,
    originalPrice: 11200,
    heroImage: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop"],
    description: "Surrounded by snow-capped peaks, glacier-fed streams, and pine slopes, offering paragliding, skiing, and bonfires under mountain stars.",
    amenities: [
      "Riverbank Open-Air Deck",
      "The Dhauldhar Multi-Cuisine Dining",
      "Adventure Activity Desk",
      "Evening Bonfires",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "solang_deluxe_glacier",
        name: "Glacier Point Deluxe Room",
        price: 8900,
        size: "380 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=800&auto=format&fit=crop",
        perks: ["River & Snow Peak View", "Complimentary Breakfast", "Heater"]
      }
    ],
    coordinates: { lat: 32.3160, lng: 77.1580 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "apple-country-resort-manali",
    name: "Apple Country Resorts & Spa",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Log Huts Area, Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "4-Star Mountain Resort",
    type: "Resort",
    rating: 4.83,
    reviewsCount: 1510,
    badge: "Highest Vantage Point",
    tagline: "Perched at the highest peak of Log Huts area with 360-degree snow-capped panoramas",
    address: "Log Huts Area, Manali, Himachal Pradesh 175131",
    nearLocation: "Log Huts, Above Old Manali",
    distanceToLandmarks: [
      { landmark: "Hadimba Temple", distance: "0.8 km" },
      { landmark: "Old Manali Cafes", distance: "1.0 km" },
      { landmark: "Mall Road", distance: "2.2 km" }
    ],
    pricePerNight: 5400,
    originalPrice: 6900,
    heroImage: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1200&auto=format&fit=crop"],
    description: "Quiet mountain hideaway overlooking cedar forest valleys, with vegetarian fine dining, discotheque, and spa steam rooms.",
    amenities: [
      "Mountain View Panoramic Deck",
      "Pure Veg Fine Dining",
      "Tattva Spa with Cedar Saunas",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "apple_deluxe_valley",
        name: "Valley View Deluxe Room",
        price: 5400,
        size: "320 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop",
        perks: ["Valley Balcony", "Free Breakfast", "Mountain Heating"]
      }
    ],
    coordinates: { lat: 32.2510, lng: 77.1750 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "snow-valley-resorts-manali",
    name: "Snow Valley Resorts Manali",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Log Huts Area, Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "Comfort Mountain Resort",
    type: "Resort",
    rating: 4.81,
    reviewsCount: 1980,
    badge: "Pine Forest Setting",
    tagline: "Eco-friendly resort surrounded by whispering deodar pines and snow mountain peaks",
    address: "Log Huts Area, Manali, Himachal Pradesh 175131",
    nearLocation: "Log Huts Area",
    distanceToLandmarks: [
      { landmark: "Hadimba Temple", distance: "0.5 km" },
      { landmark: "Mall Road", distance: "1.9 km" }
    ],
    pricePerNight: 3600,
    originalPrice: 4800,
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"],
    description: "Surrounded by tall pines with manicured apple lawns, wooden interiors, buffet multi-cuisine dining, and games room.",
    amenities: [
      "Rooftop Coffee Terrace",
      "Multi-Cuisine Buffet Restaurant",
      "Kids Play Area & Pool Table",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "snow_valley_std",
        name: "Standard Pine View Room",
        price: 3600,
        size: "290 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        perks: ["Forest View", "Free Breakfast", "Tea/Coffee Maker"]
      }
    ],
    coordinates: { lat: 32.2490, lng: 77.1760 },
    policies: { checkIn: "12:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "zostel-old-manali",
    name: "Zostel Old Manali - Alpine Lodge",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Old Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "Alpine Backpacker & Chalet",
    type: "Chalet",
    rating: 4.88,
    reviewsCount: 3820,
    badge: "Old Manali Social Hub",
    tagline: "Rustic wooden chalet with mountain cafe overlooking gushing streams and apple trees",
    address: "Manu Temple Road, Old Manali, Himachal Pradesh 175131",
    nearLocation: "Manu Temple Road, Old Manali",
    distanceToLandmarks: [
      { landmark: "Manu Temple", distance: "0.3 km" },
      { landmark: "Old Manali Cafes", distance: "0.2 km" },
      { landmark: "Hadimba Temple", distance: "1.2 km" }
    ],
    pricePerNight: 2100,
    originalPrice: 2700,
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop"],
    description: "Perched near the historic Manu Temple in Old Manali, featuring wooden lofts, guitar jams by the bonfire, and views of the snow ranges.",
    amenities: [
      "Garden Cafe & Mountain Deck",
      "Co-Working Space with High-Speed Wi-Fi",
      "Nightly Bonfires & Music",
      "Board Games & Library"
    ],
    roomTypes: [
      {
        id: "zostel_manali_deluxe",
        name: "Private Mountain View Room",
        price: 2100,
        size: "230 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
        perks: ["Mountain Balcony", "Attached Private Bath", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 32.2570, lng: 77.1680 },
    policies: { checkIn: "12:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
