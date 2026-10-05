/**
 * Kerala Hotels & Stays
 * Backwater lake resorts, Alleppey floating houseboats, Munnar tea plantation chalets, and coastal beach retreats.
 * Price range: ₹2,300 to ₹26,000
 */

export const KERALA_HOTELS = [
  {
    id: "kumarakom-lake-resort",
    name: "Kumarakom Lake Resort",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Kumarakom, Kottayam",
    state: "Kerala",
    country: "India",
    category: "5-Star Heritage Backwater Resort",
    type: "Resort",
    rating: 4.95,
    reviewsCount: 3120,
    badge: "Prince Charles Favorite Stay",
    tagline: "250-year-old traditional Kerala Tharavadu villas with a 250-meter meandering swimming pool",
    address: "Vayitharamattom, Kumarakom, Kottayam, Kerala 686563",
    nearLocation: "Vembanad Lake Shore",
    distanceToLandmarks: [
      { landmark: "Vembanad Lake", distance: "0.05 km (Direct Water Access)" },
      { landmark: "Kumarakom Bird Sanctuary", distance: "3.5 km" },
      { landmark: "Kottayam Railway Station", distance: "14.0 km" }
    ],
    pricePerNight: 26000,
    originalPrice: 32000,
    heroImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Acclaimed as one of India's top luxury resorts, Kumarakom Lake Resort features authentic 16th-century ancestral homes reconstructed on the banks of Lake Vembanad, with open-air courtyard bathrooms and infinity backwater pools.",
    amenities: [
      "250m Meandering Pool & Infinity Lake Pool",
      "Ayurmana 200-Year-Old Ayurvedic Spa",
      "Ettukettu Multi-Cuisine Dining",
      "Sunset Backwater Cruises",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "kumarakom_meandering_villa",
        name: "Meandering Pool Villa",
        price: 26000,
        size: "560 sq.ft",
        bed: "Teakwood Four-Poster King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop",
        perks: ["Direct Meandering Pool Access", "Open-Roof Rain Shower", "Gourmet Kerala Breakfast"]
      }
    ],
    coordinates: { lat: 9.6175, lng: 76.4270 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-leela-kovalam-resort",
    name: "The Leela Kovalam, A Raviz Hotel",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Kovalam, Thiruvananthapuram",
    state: "Kerala",
    country: "India",
    category: "5-Star Clifftop Beach Resort",
    type: "Resort",
    rating: 4.92,
    reviewsCount: 2780,
    badge: "Clifftop Ocean Panorama",
    tagline: "Perched on a rocky promontory overlooking the sweeping coastline of Kovalam and Arabian Sea",
    address: "Kovalam Beach Road, Thiruvananthapuram, Kerala 695527",
    nearLocation: "Kovalam Cliff, overlooking Lighthouse Beach",
    distanceToLandmarks: [
      { landmark: "Kovalam Beach", distance: "0.2 km" },
      { landmark: "Lighthouse Beach", distance: "1.5 km" },
      { landmark: "Trivandrum Airport", distance: "14.5 km" }
    ],
    pricePerNight: 21500,
    originalPrice: 26500,
    heroImage: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Perched on a cliff edge with two private beaches, The Leela Kovalam delivers dramatic ocean views, clifftop infinity swimming pools, and signature Ayurvedic wellness treatments.",
    amenities: [
      "Clifftop Infinity Pool",
      "The Tides Beachfront Seafood Dining",
      "Ayurvedic Spa & Yoga Pavilion",
      "Private Beach Access",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "leela_kovalam_beach_view",
        name: "Premier Beach View Room",
        price: 21500,
        size: "490 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=800&auto=format&fit=crop",
        perks: ["Arabian Sea Balcony", "Free Breakfast", "Clifftop Lounge Access"]
      }
    ],
    coordinates: { lat: 8.3980, lng: 76.9790 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "spicetree-munnar-resort",
    name: "Spice Tree Munnar - Mountain Retreat & Tea Spa",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Munnar, Idukki",
    state: "Kerala",
    country: "India",
    category: "Boutique Mountain Luxury",
    type: "Resort",
    rating: 4.91,
    reviewsCount: 1450,
    badge: "Cloud Valley & Tea Terraces",
    tagline: "Eco-luxury mountain resort tucked between the Kannan Devan Hills and Bison Valley peaks",
    address: "Muttukad-Periakanal Road, Chinnakanal, Munnar, Kerala 685618",
    nearLocation: "Chinnakanal, near Anayirangal Dam",
    distanceToLandmarks: [
      { landmark: "Tea Museum Munnar", distance: "18.0 km" },
      { landmark: "Anayirangal Dam", distance: "4.5 km" },
      { landmark: "Kolukkumalai Tea Estate", distance: "14.0 km" }
    ],
    pricePerNight: 14800,
    originalPrice: 18500,
    heroImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Nestled in the tranquil valley of Chinnakanal, SpiceTree offers handcrafted wooden spa suites with copper bathtubs, private mountain deck pools, and guided tea plantation walks.",
    amenities: [
      "Solar-Heated Mountain Infinity Pool",
      "The Bliss Mountain Spa",
      "Artisanal Coffee & Tea Tasting",
      "Yoga & Meditation Deck",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "spicetree_classic_spa",
        name: "Classic Mountain Spa Suite",
        price: 14800,
        size: "460 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop",
        perks: ["Valley View Balcony", "Handcrafted Victorian Copper Tub", "Farm Breakfast"]
      }
    ],
    coordinates: { lat: 10.0210, lng: 77.1640 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "brunton-boatyard-kochi",
    name: "Brunton Boatyard - CGH Earth",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Fort Kochi",
    state: "Kerala",
    country: "India",
    category: "Heritage Harbor Hotel",
    type: "Boutique",
    rating: 4.88,
    reviewsCount: 1890,
    badge: "Colonial Harbor Front",
    tagline: "Reconstructed Victorian shipyard on Fort Kochi harbor with Chinese fishing net views",
    address: "1/498, Calvathy Road, Fort Kochi, Kochi, Kerala 682001",
    nearLocation: "Fort Kochi Pier & Harbor",
    distanceToLandmarks: [
      { landmark: "Chinese Fishing Nets", distance: "0.5 km" },
      { landmark: "Jew Town & Synagogue", distance: "2.8 km" },
      { landmark: "St. Francis Church", distance: "0.8 km" }
    ],
    pricePerNight: 12500,
    originalPrice: 15500,
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"],
    description: "Steeped in maritime history, Brunton Boatyard celebrates Portuguese, Dutch, and British merchant heritage with high ceilings, sea breezes, and waterfront seafood dining.",
    amenities: [
      "Harbor-Facing Swimming Pool",
      "History Fine Dining Restaurant",
      "Complimentary Sunset Cruise",
      "Ayurvedic Center",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "brunton_sea_facing",
        name: "Sea Facing Deluxe Room",
        price: 12500,
        size: "420 sq.ft",
        bed: "Teak Four-Poster Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        perks: ["Harbor & Dolphin View", "Free Sunset Cruise", "Breakfast Included"]
      }
    ],
    coordinates: { lat: 9.9680, lng: 76.2420 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "xandari-pearl-marari",
    name: "Xandari Pearl Beach Resort",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Mararikulam, Alleppey",
    state: "Kerala",
    country: "India",
    category: "Eco-Luxury Beachfront",
    type: "Resort",
    rating: 4.87,
    reviewsCount: 1320,
    badge: "Marari Private Plunge Pools",
    tagline: "Curved white villas with private gardens and plunge pools nestled along Marari Beach",
    address: "Beach Road, Arattukulam Junction, Mararikulam, Kerala 688523",
    nearLocation: "Marari Beach coastline",
    distanceToLandmarks: [
      { landmark: "Marari Beach", distance: "0.2 km" },
      { landmark: "Alleppey Backwaters", distance: "14.0 km" }
    ],
    pricePerNight: 8900,
    originalPrice: 11500,
    heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop"],
    description: "Spread over 18 acres of coconut grove by the sea, offering privacy in rustic-modern villas, organic farm dining, and serene coastal tranquility.",
    amenities: [
      "Large Central Swimming Pool",
      "Farm-to-Table Organic Restaurant",
      "Ayurvedic Massages",
      "Bicycle Rentals",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "xandari_garden_villa",
        name: "Green Pearl Garden Villa",
        price: 8900,
        size: "450 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Garden Courtyard", "Open-Air Shower", "Organic Breakfast"]
      }
    ],
    coordinates: { lat: 9.6010, lng: 76.2990 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "rainbow-cruises-houseboat-alleppey",
    name: "Rainbow Cruises Luxury Houseboat",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Alleppey (Alappuzha)",
    state: "Kerala",
    country: "India",
    category: "Luxury Kettuvallam Houseboat",
    type: "Houseboat",
    rating: 4.86,
    reviewsCount: 1750,
    badge: "Gold Star Houseboat",
    tagline: "Eco-friendly thatched bamboo houseboats drifting through coconut-lined canals of Alleppey",
    address: "Punnamada Jetty, Finishing Point Road, Alappuzha, Kerala 688013",
    nearLocation: "Punnamada Lake Jetty",
    distanceToLandmarks: [
      { landmark: "Punnamada Kayal", distance: "0.1 km" },
      { landmark: "Alappuzha Beach & Pier", distance: "4.5 km" }
    ],
    pricePerNight: 7500,
    originalPrice: 9800,
    heroImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop"],
    description: "Cruise the tranquil backwaters aboard a traditional Kettuvallam crafted with jackwood and coir, staffed with an on-board personal chef preparing Karimeen fish and appams.",
    amenities: [
      "All Meals Included (Breakfast, Lunch, Dinner)",
      "Upper Viewing Sundeck",
      "Air-Conditioned Master Bedroom",
      "Personal Chef & Captain",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "rainbow_private_cruiser",
        name: "Private One-Bedroom Deluxe Kettuvallam",
        price: 7500,
        size: "350 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop",
        perks: ["All Meals Included", "Front Bow Sundeck", "Sunset Canal Cruise"]
      }
    ],
    coordinates: { lat: 9.5080, lng: 76.3520 },
    policies: { checkIn: "12:00 PM", checkOut: "09:30 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "blackberry-hills-munnar",
    name: "Blackberry Hills Retreat & Spa",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Munnar, Idukki",
    state: "Kerala",
    country: "India",
    category: "Eco Mountain Resort",
    type: "Chalet",
    rating: 4.84,
    reviewsCount: 1610,
    badge: "Munnar Misty Cottages",
    tagline: "Cozy hillside cottages overlooking rolling tea estates and morning sea of clouds",
    address: "Bison Valley Road, Pothamedu, Munnar, Kerala 685612",
    nearLocation: "Pothamedu Viewpoint",
    distanceToLandmarks: [
      { landmark: "Pothamedu Viewpoint", distance: "0.5 km" },
      { landmark: "Munnar Town", distance: "4.5 km" }
    ],
    pricePerNight: 5800,
    originalPrice: 7500,
    heroImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"],
    description: "Nestled along the slopes of the Western Ghats, Blackberry Hills features stone cottages with wooden balconies, tea garden trails, and Sisal spa.",
    amenities: [
      "Hornbill Multi-Cuisine Restaurant",
      "Sisal Ayurvedic Spa",
      "Guided Plantation Treks",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "blackberry_cloud_cottage",
        name: "Cloud Cottage with Tea Valley Balcony",
        price: 5800,
        size: "340 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop",
        perks: ["Valley View Balcony", "Free Breakfast", "Tea Plantation Walk"]
      }
    ],
    coordinates: { lat: 10.0520, lng: 77.0610 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "zostel-alleppey",
    name: "Zostel Alleppey - Beachside Traveler Stay",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Alleppey (Alappuzha)",
    state: "Kerala",
    country: "India",
    category: "Beachfront Backpacker",
    type: "Boutique",
    rating: 4.85,
    reviewsCount: 2980,
    badge: "Alleppey Beach Vibe",
    tagline: "Colorful tropical traveler lodge steps away from Alleppey Beach and lighthouse",
    address: "Near Old Raheem Residency, Beach Road, Alappuzha, Kerala 688012",
    nearLocation: "Alappuzha Beach",
    distanceToLandmarks: [
      { landmark: "Alappuzha Beach", distance: "0.15 km" },
      { landmark: "Alleppey Lighthouse", distance: "0.4 km" },
      { landmark: "Finishing Point Jetty", distance: "4.0 km" }
    ],
    pricePerNight: 2300,
    originalPrice: 3000,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"],
    description: "A breezy tropical hostel near Alleppey Beach with private AC rooms, courtyard hammocks, kayak tours through village canals, and cozy common areas.",
    amenities: [
      "Courtyard Cafe & Chill Gazebo",
      "Backwater Kayaking Bookings",
      "High-Speed Wi-Fi for Remote Work",
      "Luggage Storage"
    ],
    roomTypes: [
      {
        id: "zostel_alleppey_private",
        name: "Standard Private Sea Breeze Ensuite",
        price: 2300,
        size: "220 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Bathroom", "Air Conditioning", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 9.4920, lng: 76.3210 },
    policies: { checkIn: "12:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
