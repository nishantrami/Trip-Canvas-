/**
 * Goa Hotels & Stays
 * Beachfront resorts, Portuguese heritage villas, tropical boutique stays, and coastal lodges.
 * Price range: ₹2,200 to ₹25,500
 */

export const GOA_HOTELS = [
  {
    id: "taj-exotica-resort-spa-goa",
    name: "Taj Exotica Resort & Spa, Goa",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Benaulim, South Goa",
    state: "Goa",
    country: "India",
    category: "5-Star Luxury Beach Resort",
    type: "Resort",
    rating: 4.93,
    reviewsCount: 3180,
    badge: "56 Acres Mediterranean Sanctuary",
    tagline: "Sprawling luxury resort on pristine Benaulim Beach with private plunge villas",
    address: "Calwaddo, Benaulim, Salcete, Goa 403716",
    nearLocation: "Direct Benaulim Beachfront",
    distanceToLandmarks: [
      { landmark: "Benaulim Beach", distance: "0.1 km (Direct Beach Access)" },
      { landmark: "Colva Beach", distance: "4.2 km" },
      { landmark: "Madgaon Railway Station", distance: "8.5 km" },
      { landmark: "Dabolim Airport", distance: "27.0 km" }
    ],
    pricePerNight: 25500,
    originalPrice: 31000,
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Embrace the relaxed Goan susegad vibe at this premier 5-star Mediterranean sanctuary on untouched golden sands with private villas, 9-hole golf course, and beachfront lobster dining.",
    amenities: [
      "Private Beach Access",
      "Golf Course & Tennis Courts",
      "Jiva Spa & Wellness Pavilion",
      "Fine Dining Seafood Restaurant",
      "Huge Oceanfront Pool",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "taj_goa_villa_room",
        name: "Garden Villa Room",
        price: 25500,
        size: "610 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Verandah", "Free Gourmet Breakfast", "Direct Beach Walkway"]
      }
    ],
    coordinates: { lat: 15.2532, lng: 73.9168 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: true }
  },
  {
    id: "w-goa-vagator",
    name: "W Goa - Vagator Beach Resort",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Vagator, North Goa",
    state: "Goa",
    country: "India",
    category: "5-Star Ultra-Chic Resort",
    type: "Resort",
    rating: 4.90,
    reviewsCount: 2840,
    badge: "Cliffside Sunset Vibe",
    tagline: "Where dramatic Chapora cliffs meet the Arabian sea with Rockpool sunset lounge",
    address: "Vagator Beach, Bardez, Goa 403509",
    nearLocation: "Vagator Beach, Beneath Chapora Fort",
    distanceToLandmarks: [
      { landmark: "Vagator Beach", distance: "0.2 km" },
      { landmark: "Chapora Fort", distance: "0.8 km" },
      { landmark: "Anjuna Flea Market", distance: "3.5 km" }
    ],
    pricePerNight: 22000,
    originalPrice: 27500,
    heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Vibrant luxury resort situated on Vagator Beach overlooking red cliffs and rolling surf, featuring the famous Rockpool lounge and AWAY Spa.",
    amenities: [
      "WET Outdoor Infinity Pool",
      "AWAY Spa Vitality Pools",
      "Rockpool Cliff Lounge",
      "Direct Beach Trail",
      "24/7 FIT Gym",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "w_wonderful_room",
        name: "Wonderful Garden Room",
        price: 22000,
        size: "480 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        perks: ["Balcony with Daybed", "Free Breakfast", "Cocktail Hour Access"]
      }
    ],
    coordinates: { lat: 15.6028, lng: 73.7346 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: true }
  },
  {
    id: "alila-diwa-goa",
    name: "Alila Diwa Goa - A Hyatt Luxury Resort",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Majorda, South Goa",
    state: "Goa",
    country: "India",
    category: "5-Star Eco-Luxury",
    type: "Resort",
    rating: 4.89,
    reviewsCount: 2450,
    badge: "Paddy Field Infinity Pool",
    tagline: "Serene Balinese-inspired contemporary sanctuary amidst emerald Goan paddy fields",
    address: "48/10 Adao Waddo, Majorda, Goa 403713",
    nearLocation: "Majorda Beach hinterland",
    distanceToLandmarks: [
      { landmark: "Majorda Beach", distance: "0.8 km (Complimentary Shuttle)" },
      { landmark: "Colva Beach", distance: "5.0 km" }
    ],
    pricePerNight: 14500,
    originalPrice: 18000,
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Nestled amidst lush green paddy fields leading to the sea, Alila Diwa combines pitched roofs, teakwood pillars, and a tranquil infinity pool.",
    amenities: [
      "Paddy-Facing Infinity Pool",
      "Spa Alila with Ayurvedic Therapies",
      "Vivo Multi-Cuisine Dining",
      "Beach Buggy Service",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "alila_terrace_room",
        name: "Terrace Room with Garden View",
        price: 14500,
        size: "470 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Daybed Balcony", "Free Breakfast", "Spa Credit"]
      }
    ],
    coordinates: { lat: 15.3160, lng: 73.9140 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-postcard-velha-goa",
    name: "The Postcard Velha - Heritage Luxury Estate",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Old Goa",
    state: "Goa",
    country: "India",
    category: "Heritage Boutique Resort",
    type: "Boutique",
    rating: 4.92,
    reviewsCount: 980,
    badge: "Forest Sanctuary Estate",
    tagline: "Secluded 300-acre forest estate in Old Goa with colonial Portuguese architecture",
    address: "Bambolim Hills, Velha, Goa 403108",
    nearLocation: "Old Goa & Bambolim Hills",
    distanceToLandmarks: [
      { landmark: "Basilica of Bom Jesus", distance: "4.5 km" },
      { landmark: "Panaji City Center", distance: "9.0 km" }
    ],
    pricePerNight: 12000,
    originalPrice: 15000,
    heroImage: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1200&auto=format&fit=crop"],
    description: "Nestled atop the hills of Velha, this intimate boutique estate features antique colonial furniture, forest trail walks, and bespoke Goan cuisine.",
    amenities: [
      "Hilltop Swimming Pool",
      "Anytime Breakfast Service",
      "Ayurvedic Consultation",
      "Nature Walking Trails",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "postcard_banyan_room",
        name: "Banyan Suite",
        price: 12000,
        size: "520 sq.ft",
        bed: "Four-Poster King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=800&auto=format&fit=crop",
        perks: ["Forest View Balcony", "Anytime Artisanal Breakfast", "Butler Service"]
      }
    ],
    coordinates: { lat: 15.4720, lng: 73.8820 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "cidade-de-goa-resort",
    name: "Cidade de Goa - Heritage Beach Resort",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Dona Paula, Panaji",
    state: "Goa",
    country: "India",
    category: "5-Star Heritage Resort",
    type: "Resort",
    rating: 4.86,
    reviewsCount: 2190,
    badge: "Charles Correa Architecture",
    tagline: "Vibrant Portuguese village architectural masterpiece on Vainguinim Beach",
    address: "Vainguinim Beach, Dona Paula, Panaji, Goa 403004",
    nearLocation: "Vainguinim Beach, Dona Paula",
    distanceToLandmarks: [
      { landmark: "Dona Paula Viewpoint", distance: "1.8 km" },
      { landmark: "Miramar Beach", distance: "3.5 km" },
      { landmark: "Panaji Church Square", distance: "6.5 km" }
    ],
    pricePerNight: 9800,
    originalPrice: 12500,
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop"],
    description: "Designed by famed architect Charles Correa to recreate a quaint Portuguese hamlet with murals, archways, and direct beach sands.",
    amenities: [
      "Direct Beachfront Access",
      "Two Swimming Pools",
      "Alfama Portuguese Restaurant",
      "Water Sports Desk",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "cidade_sea_view",
        name: "Standard Sea View Room",
        price: 9800,
        size: "380 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        perks: ["Arabian Sea View", "Free Breakfast", "Pool Access"]
      }
    ],
    coordinates: { lat: 15.4520, lng: 73.8180 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "whispering-palms-goa",
    name: "Whispering Palms Beach Resort",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Candolim, North Goa",
    state: "Goa",
    country: "India",
    category: "4-Star Beach Resort",
    type: "Resort",
    rating: 4.82,
    reviewsCount: 1870,
    badge: "Candolim Beach Retreat",
    tagline: "Warm Mediterranean-style beach resort steps from the golden sands of Candolim",
    address: "Sinquerim Beach Road, Candolim, Goa 403515",
    nearLocation: "Candolim Beach Walkway",
    distanceToLandmarks: [
      { landmark: "Candolim Beach", distance: "0.3 km" },
      { landmark: "Aguada Fort", distance: "2.8 km" },
      { landmark: "Calangute Beach", distance: "3.2 km" }
    ],
    pricePerNight: 6500,
    originalPrice: 8500,
    heroImage: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=1200&auto=format&fit=crop"],
    description: "Relaxed tropical haven with landscaped swimming pool, live music evenings, and easy access to Candolim's cafes.",
    amenities: [
      "Large Swimming Pool & Jacuzzi",
      "Breeze Poolside Restaurant",
      "Spa & Salon",
      "Fitness Center",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "whispering_balcony",
        name: "Balcony Room with Pool View",
        price: 6500,
        size: "320 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=800&auto=format&fit=crop",
        perks: ["Pool View Balcony", "Free Breakfast", "Welcome Drink"]
      }
    ],
    coordinates: { lat: 15.5140, lng: 73.7660 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "casa-baga-boutique-goa",
    name: "Casa Baga - Beachside Boutique Hotel",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Baga, North Goa",
    state: "Goa",
    country: "India",
    category: "Boutique Beach Stay",
    type: "Boutique",
    rating: 4.80,
    reviewsCount: 1420,
    badge: "Heart of Baga Action",
    tagline: "Art-filled boutique hideaway nestled quietly off Tito's Lane and Baga Beach",
    address: "Tito's Lane, Baga, Calangute, Goa 403516",
    nearLocation: "Just off Tito's Lane & Baga Beach",
    distanceToLandmarks: [
      { landmark: "Baga Beach", distance: "0.2 km" },
      { landmark: "Calangute Beach", distance: "1.5 km" },
      { landmark: "Anjuna Beach", distance: "4.8 km" }
    ],
    pricePerNight: 3800,
    originalPrice: 4900,
    heroImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop"],
    description: "Quirky, boutique hotel with eccentric Goan art, intimate pool, and rooftop lounge right next to the beach.",
    amenities: [
      "Courtyard Swimming Pool",
      "Rooftop Cafe & Bar",
      "Air Conditioning",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "casa_cozy_room",
        name: "Special Boutique Room",
        price: 3800,
        size: "280 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop",
        perks: ["Pool View", "Free Breakfast", "Fast Wi-Fi"]
      }
    ],
    coordinates: { lat: 15.5560, lng: 73.7530 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "zostel-morjim-goa",
    name: "Zostel Morjim - Beachfront Traveler Stay",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Morjim, North Goa",
    state: "Goa",
    country: "India",
    category: "Beachfront Backpacker & Boutique",
    type: "Boutique",
    rating: 4.87,
    reviewsCount: 2680,
    badge: "Olive Ridley Beach Stay",
    tagline: "Chill traveler hub steps away from the peaceful sands of Morjim turtle beach",
    address: "Vithaldaswada, Morjim, Pernem, Goa 403512",
    nearLocation: "Morjim Beach",
    distanceToLandmarks: [
      { landmark: "Morjim Beach", distance: "0.15 km" },
      { landmark: "Ashwem Beach", distance: "2.5 km" },
      { landmark: "Arambol Beach", distance: "8.0 km" }
    ],
    pricePerNight: 2200,
    originalPrice: 2900,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"],
    description: "Experience North Goa's most serene coastline with fellow travelers, open lawn cafe, live music evenings, and cozy private rooms.",
    amenities: [
      "Beachfront Cafe & Bar",
      "Hammock Garden",
      "Co-Working Desk & High-Speed Wi-Fi",
      "Daily Social Gatherings"
    ],
    roomTypes: [
      {
        id: "zostel_morjim_private",
        name: "Deluxe Private Sea Breeze Room",
        price: 2200,
        size: "240 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        perks: ["Balcony", "Attached Private Bath", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 15.6320, lng: 73.7380 },
    policies: { checkIn: "12:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
