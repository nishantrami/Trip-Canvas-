/**
 * International Destinations Hotels & Stays
 * Covering Dubai, Bali, Paris, Singapore, London, and Tokyo.
 * All prices strictly calibrated between ₹3,600 and ₹29,800 per night.
 */

export const INTERNATIONAL_HOTELS = [
  // ================= DUBAI HOTELS =================
  {
    id: "atlantis-the-palm-dubai",
    name: "Atlantis, The Palm",
    destinationId: "dubai",
    destinationName: "Dubai",
    city: "Palm Jumeirah, Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    category: "5-Star Icon Ocean Resort",
    type: "Resort",
    rating: 4.96,
    reviewsCount: 6420,
    badge: "World Famous Palm Icon",
    tagline: "Spectacular oceanfront landmark on Palm Jumeirah with private beaches and Aquaventure waterpark",
    address: "Crescent Rd, The Palm Jumeirah, Dubai, United Arab Emirates",
    nearLocation: "The Crescent, Palm Jumeirah",
    distanceToLandmarks: [
      { landmark: "Aquaventure Waterpark", distance: "0.1 km" },
      { landmark: "The Lost Chambers Aquarium", distance: "0.2 km" },
      { landmark: "Dubai Marina", distance: "8.5 km" }
    ],
    pricePerNight: 29800,
    originalPrice: 36000,
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Nestled on the crown of Palm Jumeirah, Atlantis is Dubai's flagship luxury resort featuring world-class dining by Gordon Ramsay and Nobu Matsuhisa, white-sand private beaches, and private ocean balconies.",
    amenities: [
      "Complimentary Aquaventure Waterpark Access",
      "Private White Sand Beaches",
      "Nobu & Bread Street Kitchen Dining",
      "ShuiQi Spa & Fitness",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "atlantis_ocean_king",
        name: "Ocean King Room",
        price: 29800,
        size: "480 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop",
        perks: ["Arabian Sea Balcony", "Waterpark Entry Included", "Gourmet Breakfast"]
      }
    ],
    coordinates: { lat: 25.1304, lng: 55.1172 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "address-downtown-dubai",
    name: "Address Downtown Dubai",
    destinationId: "dubai",
    destinationName: "Dubai",
    city: "Downtown Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    category: "5-Star Downtown Luxury",
    type: "Resort",
    rating: 4.93,
    reviewsCount: 4100,
    badge: "Burj Khalifa Direct View",
    tagline: "Spectacular high-rise luxury overlooking Burj Khalifa and Dubai Fountain",
    address: "Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, UAE",
    nearLocation: "Directly opposite Burj Khalifa & Dubai Mall",
    distanceToLandmarks: [
      { landmark: "Burj Khalifa", distance: "0.3 km" },
      { landmark: "Dubai Mall", distance: "0.2 km (Direct Bridge)" },
      { landmark: "Dubai Opera", distance: "0.8 km" }
    ],
    pricePerNight: 26500,
    originalPrice: 32000,
    heroImage: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1200&auto=format&fit=crop"],
    description: "Soaring 63 storeys over Downtown Dubai, Address Downtown features an infinity pool terrace gazing directly at Burj Khalifa, decadent spa, and direct bridge access to Dubai Mall.",
    amenities: [
      "Tiered Infinity Pool Facing Burj Khalifa",
      "The Restaurant World Gourmet Dining",
      "The Spa at Address Downtown",
      "Direct Bridge Connection to Dubai Mall",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "address_deluxe_fountain",
        name: "Deluxe Fountain View Room",
        price: 26500,
        size: "520 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800&auto=format&fit=crop",
        perks: ["Direct Burj & Fountain View", "Balcony", "Free Breakfast"]
      }
    ],
    coordinates: { lat: 25.1950, lng: 55.2790 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "rove-downtown-dubai",
    name: "Rove Downtown Dubai",
    destinationId: "dubai",
    destinationName: "Dubai",
    city: "Downtown Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    category: "Chic Urban Boutique",
    type: "Boutique",
    rating: 4.88,
    reviewsCount: 4890,
    badge: "Burj View Urban Hub",
    tagline: "Trendy urban lifestyle stay with outdoor pool facing the Burj Khalifa skyline",
    address: "312 Al Mustaqbal St, Zabeel 2, Downtown Dubai, UAE",
    nearLocation: "Walking distance to Dubai Mall",
    distanceToLandmarks: [
      { landmark: "Burj Khalifa", distance: "0.9 km" },
      { landmark: "Dubai Mall", distance: "0.6 km" }
    ],
    pricePerNight: 8900,
    originalPrice: 11500,
    heroImage: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop"],
    description: "Designed for millennial travelers and digital nomads with clean contemporary aesthetics, in-house cinema, 24-hour gym, and outdoor pool with unobstructed Burj Khalifa views.",
    amenities: [
      "Burj Khalifa-View Outdoor Pool",
      "The Daily Neighborhood Restaurant",
      "Reel Boutique Cinema In-House",
      "24/7 Laundromat & Gym",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "rove_burj_view_room",
        name: "Rover Room with Burj View",
        price: 8900,
        size: "280 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop",
        perks: ["Burj View", "High-speed Wi-Fi", "Coffee Machine"]
      }
    ],
    coordinates: { lat: 25.2010, lng: 55.2860 },
    policies: { checkIn: "04:00 PM", checkOut: "02:00 PM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },

  // ================= BALI HOTELS =================
  {
    id: "the-kayon-jungle-resort-bali",
    name: "The Kayon Jungle Resort",
    destinationId: "bali",
    destinationName: "Bali",
    city: "Ubud, Bali",
    state: "Bali",
    country: "Indonesia",
    category: "5-Star Tropical Jungle Luxury",
    type: "Resort",
    rating: 4.97,
    reviewsCount: 3820,
    badge: "Three-Tiered Jungle Pool",
    tagline: "Balinese architectural wonder with three-tiered infinity pool overlooking tropical rainforest",
    address: "Banjar Bresela, Desa Bresela, Payangan, Ubud, Bali 80572",
    nearLocation: "Payangan Jungle Valley, Ubud",
    distanceToLandmarks: [
      { landmark: "Tegallalang Rice Terraces", distance: "4.5 km" },
      { landmark: "Ubud Monkey Forest", distance: "12.0 km" }
    ],
    pricePerNight: 27500,
    originalPrice: 34000,
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Perched above the sacred Oos River in Ubud's rainforest, The Kayon Jungle Resort features iconic multi-layered curved infinity pools, Serapuh wellness pavilion, and bamboo pavilion dining.",
    amenities: [
      "Three-Tiered Jungle Infinity Pools",
      "Serapuh Holistic Spa & Flower Baths",
      "Kepitu Restaurant Overlooking Valley",
      "Daily Morning Yoga & Rice Walks",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "kayon_jungle_suite",
        name: "Kayon Valley Suite with Balcony",
        price: 27500,
        size: "650 sq.ft",
        bed: "Teak Canopy King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
        perks: ["Valley View Balcony", "Terrazzo Flower Tub", "Floating Breakfast Included"]
      }
    ],
    coordinates: { lat: -8.4310, lng: 115.2670 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "alila-seminyak-bali",
    name: "Alila Seminyak, Bali",
    destinationId: "bali",
    destinationName: "Bali",
    city: "Seminyak, Bali",
    state: "Bali",
    country: "Indonesia",
    category: "5-Star Oceanfront Resort",
    type: "Resort",
    rating: 4.91,
    reviewsCount: 2980,
    badge: "Seminyak Sunset Beachfront",
    tagline: "Eco-contemporary beach resort on Seminyak's golden sunset sands with beach bar",
    address: "Jl. Taman Ganesha No. 9, Petitenget, Seminyak, Bali 80361",
    nearLocation: "Petitenget Beach, Seminyak",
    distanceToLandmarks: [
      { landmark: "Seminyak Beach", distance: "0.05 km (Direct Access)" },
      { landmark: "Potato Head Beach Club", distance: "0.3 km" }
    ],
    pricePerNight: 21000,
    originalPrice: 26000,
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop"],
    description: "Modern beach sanctuary adorned with vertical hanging green gardens, five sparkling infinity pools, sunset ocean suites, and holistic treatments at Spa Alila.",
    amenities: [
      "Five Infinity Swimming Pools",
      "Beach Bar with Live Sunset DJ",
      "Seasalt Coastal Dining",
      "Spa Alila",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "alila_deluxe_garden",
        name: "Deluxe Ocean Breeze Studio",
        price: 21000,
        size: "500 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
        perks: ["Daybed Balcony", "Seasalt Breakfast Included", "Direct Beach Walkway"]
      }
    ],
    coordinates: { lat: -8.6820, lng: 115.1530 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "draper-green-villa-canggu",
    name: "Draper Green Villa Canggu",
    destinationId: "bali",
    destinationName: "Bali",
    city: "Canggu, Bali",
    state: "Bali",
    country: "Indonesia",
    category: "Bohemian Surfer Villa",
    type: "Villa",
    rating: 4.86,
    reviewsCount: 1820,
    badge: "Echo Beach Surfer Vibe",
    tagline: "Bamboo architecture villa with pool surrounded by palm trees near Echo Beach",
    address: "Jl. Pantai Batu Mejan, Canggu, Kuta Utara, Badung, Bali 80351",
    nearLocation: "Echo Beach, Canggu",
    distanceToLandmarks: [
      { landmark: "Echo Beach", distance: "0.6 km" },
      { landmark: "Canggu Cafe Strip", distance: "0.4 km" }
    ],
    pricePerNight: 3600,
    originalPrice: 4800,
    heroImage: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop"],
    description: "Relaxed tropical haven in trendy Canggu featuring open-air living pavilions, sun deck pool, surf board racks, and close proximity to artisan cafes and surf breaks.",
    amenities: [
      "Private Plunge Pool & Sun Deck",
      "Open-Air Tropical Bathroom",
      "High-Speed Wi-Fi for Digital Nomads",
      "Scooter Rental Service"
    ],
    roomTypes: [
      {
        id: "canggu_boho_suite",
        name: "Tropical Bamboo Suite",
        price: 3600,
        size: "340 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
        perks: ["Pool Access", "Open Rain Shower", "Free Wi-Fi"]
      }
    ],
    coordinates: { lat: -8.6530, lng: 115.1280 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },

  // ================= PARIS HOTELS =================
  {
    id: "pullman-paris-tour-eiffel",
    name: "Pullman Paris Tour Eiffel",
    destinationId: "paris",
    destinationName: "Paris",
    city: "7th Arrondissement, Paris",
    state: "Île-de-France",
    country: "France",
    category: "4-Star Deluxe Eiffel Hotel",
    type: "Resort",
    rating: 4.90,
    reviewsCount: 4210,
    badge: "Direct Eiffel Tower Balcony",
    tagline: "Steps away from the foot of the Eiffel Tower with jaw-dropping monument views from your private balcony",
    address: "18 Avenue De Suffren, Entrée au 22 Rue Jean Rey, 75015 Paris, France",
    nearLocation: "Champ de Mars & Eiffel Tower",
    distanceToLandmarks: [
      { landmark: "Eiffel Tower", distance: "0.25 km (Direct View)" },
      { landmark: "Champ de Mars", distance: "0.1 km" },
      { landmark: "Seine River Cruise", distance: "0.3 km" }
    ],
    pricePerNight: 24500,
    originalPrice: 30000,
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Located on the Left Bank right beside the Eiffel Tower, Pullman Paris features contemporary Haussmann-inspired rooms, Frame brasserie with an open organic garden, and sparkling night views of the Eiffel Tower.",
    amenities: [
      "Direct Eiffel Tower View Balconies",
      "Frame Organic Californian Brasserie",
      "24-Hour Panoramic Fitness Center",
      "Seine River Promenade",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "pullman_eiffel_balcony",
        name: "Deluxe Eiffel Tower View Room with Balcony",
        price: 24500,
        size: "340 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Balcony Facing Eiffel Tower", "Nespresso Machine", "Free Breakfast"]
      }
    ],
    coordinates: { lat: 48.8550, lng: 2.2930 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: true }
  },
  {
    id: "hotel-dame-des-arts-paris",
    name: "Hôtel Dame des Arts",
    destinationId: "paris",
    destinationName: "Paris",
    city: "Latin Quarter, Paris",
    state: "Île-de-France",
    country: "France",
    category: "Boutique Rooftop Design Hotel",
    type: "Boutique",
    rating: 4.92,
    reviewsCount: 2150,
    badge: "360° Notre-Dame Rooftop",
    tagline: "Artistic Left Bank boutique hotel with rooftop cocktail bar overlooking Notre-Dame and Eiffel Tower",
    address: "4 Rue Danton, 6th Arrondissement, 75006 Paris, France",
    nearLocation: "Latin Quarter & Saint-Michel",
    distanceToLandmarks: [
      { landmark: "Notre-Dame Cathedral", distance: "0.5 km" },
      { landmark: "Luxembourg Gardens", distance: "0.8 km" },
      { landmark: "Louvre Museum", distance: "1.2 km" }
    ],
    pricePerNight: 18900,
    originalPrice: 23500,
    heroImage: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Designed by visionary Raphaël Navot, Dame des Arts showcases natural timber, curved glass, bespoke French perfumes, and a 360-degree rooftop terrace framing the Paris skyline.",
    amenities: [
      "360-Degree Panoramic Rooftop Bar",
      "Mexican-French Fusion Restaurant",
      "Sauna & Fitness Suite",
      "Custom Diptyque Toiletries",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "dame_deluxe_terrace",
        name: "Deluxe Balcony Parisian Room",
        price: 18900,
        size: "300 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
        perks: ["Wrought-Iron Balcony", "Rooftop Priority Booking", "French Breakfast"]
      }
    ],
    coordinates: { lat: 48.8525, lng: 2.3425 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },

  // ================= SINGAPORE HOTELS =================
  {
    id: "marina-bay-sands-singapore",
    name: "Marina Bay Sands Singapore",
    destinationId: "singapore",
    destinationName: "Singapore",
    city: "Marina Bay, Singapore",
    state: "Central Region",
    country: "Singapore",
    category: "5-Star Global Landmark",
    type: "Resort",
    rating: 4.96,
    reviewsCount: 7850,
    badge: "World’s Top Infinity Pool",
    tagline: "World-famous rooftop infinity pool perched 57 levels above Singapore's illuminated skyline",
    address: "10 Bayfront Ave, Marina Bay, Singapore 018956",
    nearLocation: "Marina Bay Sands Waterfront",
    distanceToLandmarks: [
      { landmark: "Gardens by the Bay", distance: "0.2 km" },
      { landmark: "ArtScience Museum", distance: "0.1 km" },
      { landmark: "Singapore Flyer", distance: "0.8 km" }
    ],
    pricePerNight: 29500,
    originalPrice: 36000,
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "An architectural icon designed by Moshe Safdie, Marina Bay Sands features the world's largest rooftop infinity pool on the Sands SkyPark, 20 celebrity chef restaurants, and sweeping views of Gardens by the Bay.",
    amenities: [
      "Exclusive Sands SkyPark Infinity Pool (57th Floor)",
      "Banyan Tree Luxury Spa",
      "Celebrity Chef Restaurants (Spago, Waku Ghin)",
      "The Shoppes Luxury Mall Direct Access",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "mbs_deluxe_gardens",
        name: "Deluxe Room with Gardens by the Bay View",
        price: 29500,
        size: "420 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=800&auto=format&fit=crop",
        perks: ["SkyPark Infinity Pool Key", "Gardens View Balcony", "Free Breakfast"]
      }
    ],
    coordinates: { lat: 1.2838, lng: 103.8591 },
    policies: { checkIn: "03:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-clan-hotel-singapore",
    name: "The Clan Hotel Singapore",
    destinationId: "singapore",
    destinationName: "Singapore",
    city: "Telok Ayer, Chinatown",
    state: "Central Region",
    country: "Singapore",
    category: "Modern Heritage Luxury",
    type: "Boutique",
    rating: 4.90,
    reviewsCount: 2650,
    badge: "Sky Pool on 30th Floor",
    tagline: "Honoring Chinese pioneer clan history with modern luxury and 30th-floor rooftop pool",
    address: "10 Cross St, Singapore 048417",
    nearLocation: "Telok Ayer MRT & Chinatown",
    distanceToLandmarks: [
      { landmark: "Chinatown Heritage Center", distance: "0.4 km" },
      { landmark: "Marina Bay", distance: "1.1 km" }
    ],
    pricePerNight: 12800,
    originalPrice: 16000,
    heroImage: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=1200&auto=format&fit=crop"],
    description: "Located where early merchants forged Singapore's identity, featuring custom tea master welcomes, high-floor cantilevered sky pool, and Qin restaurant.",
    amenities: [
      "Level 30 Sky Pool & Jacuzzi",
      "Qin Restaurant & Bar",
      "Brew Master Tea Ceremony",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "clan_deluxe_room",
        name: "Deluxe City View Room",
        price: 12800,
        size: "340 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=800&auto=format&fit=crop",
        perks: ["Skyline City View", "Artisanal Tea Kit", "Breakfast Included"]
      }
    ],
    coordinates: { lat: 1.2820, lng: 103.8480 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },

  // ================= LONDON HOTELS =================
  {
    id: "the-savoy-london",
    name: "The Savoy London",
    destinationId: "london",
    destinationName: "London",
    city: "Westminster, London",
    state: "Greater London",
    country: "United Kingdom",
    category: "5-Star Edwardian Heritage",
    type: "Palace",
    rating: 4.96,
    reviewsCount: 5210,
    badge: "The Strand & River Thames",
    tagline: "Britain's most storied luxury hotel overlooking the River Thames with world-famous American Bar",
    address: "Strand, London WC2R 0EZ, United Kingdom",
    nearLocation: "The Strand & Covent Garden",
    distanceToLandmarks: [
      { landmark: "Covent Garden", distance: "0.3 km" },
      { landmark: "Trafalgar Square", distance: "0.6 km" },
      { landmark: "London Eye", distance: "0.9 km" }
    ],
    pricePerNight: 29500,
    originalPrice: 37000,
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Opened in 1889, The Savoy has welcomed Winston Churchill, Marilyn Monroe, and Claude Monet. Overlooking the River Thames, it offers Art Deco luxury, Gordon Ramsay's Savoy Grill, and the legendary American Bar.",
    amenities: [
      "Private Swimming Pool & Spa",
      "The American Bar (World's Best Bar winner)",
      "Savoy Grill by Gordon Ramsay",
      "River Thames Promenade",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "savoy_superior_queen",
        name: "Superior Edwardian Queen Room",
        price: 29500,
        size: "380 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800&auto=format&fit=crop",
        perks: ["Edwardian Decor", "Marble Bathroom", "English Breakfast Included"]
      }
    ],
    coordinates: { lat: 51.5100, lng: -0.1205 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: true }
  },
  {
    id: "the-hoxton-shoreditch-london",
    name: "The Hoxton, Shoreditch",
    destinationId: "london",
    destinationName: "London",
    city: "Shoreditch, East London",
    state: "Greater London",
    country: "United Kingdom",
    category: "Hip Urban Townhouse",
    type: "Boutique",
    rating: 4.88,
    reviewsCount: 3410,
    badge: "East London Cool",
    tagline: "Exposed brick, crackling fireplace lobby, and rooftop dining in artsy Shoreditch",
    address: "81 Great Eastern St, Hackney, London EC2A 3HU, UK",
    nearLocation: "Old Street & Shoreditch High St",
    distanceToLandmarks: [
      { landmark: "Old Street Roundabout", distance: "0.2 km" },
      { landmark: "Tower of London", distance: "2.1 km" }
    ],
    pricePerNight: 8200,
    originalPrice: 10500,
    heroImage: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1200&auto=format&fit=crop"],
    description: "The original Hoxton combines industrial brick decor, Roberts digital radios, lively open lobby lounge with daily DJs and cocktails, and bespoke breakfast bags.",
    amenities: [
      "Open Fireplace Lobby Lounge & Cafe",
      "Maya Rooftop Restaurant",
      "High-Speed Wi-Fi for Co-Working",
      "Free Daily Light Breakfast Bag"
    ],
    roomTypes: [
      {
        id: "hoxton_cosy_room",
        name: "Cosy Brick Bedroom",
        price: 8200,
        size: "260 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800&auto=format&fit=crop",
        perks: ["Exposed Brickwork", "Free Breakfast Bag", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 51.5255, lng: -0.0825 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 24 hours", petsAllowed: true }
  },

  // ================= TOKYO HOTELS =================
  {
    id: "hoshinoya-tokyo",
    name: "Hoshinoya Tokyo - Modern Luxury Ryokan",
    destinationId: "tokyo",
    destinationName: "Tokyo",
    city: "Otemachi, Tokyo",
    state: "Kanto",
    country: "Japan",
    category: "5-Star Contemporary Ryokan",
    type: "Boutique",
    rating: 4.97,
    reviewsCount: 3120,
    badge: "17-Storey High-Rise Ryokan",
    tagline: "Traditional Japanese inn culture reimagined in a soaring tower with top-floor natural hot spring onsen",
    address: "1-9-1 Otemachi, Chiyoda-ku, Tokyo 100-0004, Japan",
    nearLocation: "Otemachi, beside Imperial Palace",
    distanceToLandmarks: [
      { landmark: "Tokyo Imperial Palace", distance: "0.4 km" },
      { landmark: "Tokyo Station", distance: "0.8 km" },
      { landmark: "Ginza Shopping District", distance: "2.1 km" }
    ],
    pricePerNight: 29000,
    originalPrice: 36000,
    heroImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Guests slip off their shoes onto fragrant soft tatami matting upon entering this 17-storey sanctuary. Features indoor and outdoor natural hot spring baths piped from 1,500m below Tokyo.",
    amenities: [
      "Top-Floor Natural Geothermal Onsen",
      "Ochanoma Traditional Tea Lounges",
      "Nippon Cuisine Kaiseki Fine Dining",
      "Japanese Morning Tea Ceremony",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "hoshinoya_kiku_room",
        name: "Kiku Executive Tatami Chamber",
        price: 29000,
        size: "830 sq.ft",
        bed: "Futon-Style Plush King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
        perks: ["Tatami Living Space", "Traditional Onsen Access", "Japanese Breakfast"]
      }
    ],
    coordinates: { lat: 35.6880, lng: 139.7640 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 7 days", petsAllowed: false }
  },
  {
    id: "cerulean-tower-shibuya-tokyo",
    name: "Cerulean Tower Tokyu Hotel",
    destinationId: "tokyo",
    destinationName: "Tokyo",
    city: "Shibuya, Tokyo",
    state: "Kanto",
    country: "Japan",
    category: "5-Star Skyscraper Luxury",
    type: "Resort",
    rating: 4.90,
    reviewsCount: 3650,
    badge: "Shibuya Crossing Skyline",
    tagline: "Panoramic floor-to-ceiling skyline views of Mt. Fuji and Shibuya from floors 19 to 37",
    address: "26-1 Sakuragaokacho, Shibuya City, Tokyo 150-8512, Japan",
    nearLocation: "Shibuya Station (5 min walk)",
    distanceToLandmarks: [
      { landmark: "Shibuya Crossing & Hachiko", distance: "0.5 km" },
      { landmark: "Meiji Shrine", distance: "1.8 km" }
    ],
    pricePerNight: 24500,
    originalPrice: 30000,
    heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"],
    description: "Rising high above vibrant Shibuya, all guest rooms offer dramatic views over Tokyo's city lights with heated indoor pool, Noh theatre, and sky lounge bar.",
    amenities: [
      "Heated Indoor Pool & Sauna",
      "Bellovisto 40th Floor Sky Lounge",
      "Kanze Noh Japanese Theater",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "cerulean_skyline_king",
        name: "Tower Deluxe High-Floor King",
        price: 24500,
        size: "400 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
        perks: ["Panoramic Shibuya View", "Free Breakfast", "Pool & Gym Access"]
      }
    ],
    coordinates: { lat: 35.6560, lng: 139.6990 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "sequence-miyashita-park-tokyo",
    name: "Sequence MIYASHITA PARK",
    destinationId: "tokyo",
    destinationName: "Tokyo",
    city: "Shibuya, Tokyo",
    state: "Kanto",
    country: "Japan",
    category: "Chic Rooftop Park Hotel",
    type: "Boutique",
    rating: 4.86,
    reviewsCount: 2890,
    badge: "Miyashita Rooftop Park",
    tagline: "Ultra-stylish minimalist hotel directly linked to Shibuya's Miyashita Rooftop Park and skate park",
    address: "6-20-10 Jingumae, Shibuya City, Tokyo 150-0001, Japan",
    nearLocation: "Miyashita Park, Shibuya / Harajuku",
    distanceToLandmarks: [
      { landmark: "Miyashita Park", distance: "0.05 km (Direct Access)" },
      { landmark: "Shibuya Scramble Crossing", distance: "0.4 km" },
      { landmark: "Cat Street Harajuku", distance: "0.3 km" }
    ],
    pricePerNight: 6800,
    originalPrice: 8900,
    heroImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop"],
    description: "Located within the green rooftop park complex of Miyashita Park, offering floor-to-ceiling windows looking over train lines and Shibuya skyline, smart check-in, and specialty coffee cafe.",
    amenities: [
      "Direct Rooftop Park Access",
      "Dongxi Restaurant & Saxe Blue Cafe",
      "Large Public Bath & Steam Sauna",
      "Self Check-in & Smart Key",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "sequence_park_view",
        name: "Medium Park View Double Room",
        price: 6800,
        size: "280 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
        perks: ["Park View", "Public Bath Access", "Free Wi-Fi"]
      }
    ],
    coordinates: { lat: 35.6620, lng: 139.7020 },
    policies: { checkIn: "05:00 PM", checkOut: "02:00 PM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
