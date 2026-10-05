/**
 * Goa Dining & Restaurants
 * Beachfront tavernas, coastal Goan seafood shacks, and tropical garden bistros.
 * Cost for two: ₹650 to ₹2,400
 */

export const GOA_RESTAURANTS = [
  {
    id: "thalassa-greek-taverna-goa",
    name: "Thalassa Greek Taverna",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Siolim, North Goa",
    state: "Goa",
    country: "India",
    rating: 4.93,
    reviewsCount: 4650,
    badge: "Iconic Sunset Taverna",
    tagline: "Waterfront Greek taverna overlooking the Chapora River with fiery sunset views",
    address: "Vaddy, Siolim, Goa 403517",
    nearLocation: "Chapora River Waterfront, Siolim",
    distanceToLandmarks: [
      { landmark: "Vagator Beach", distance: "4.5 km" },
      { landmark: "Chapora Fort", distance: "4.8 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2400,
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Greek Mediterranean", "Grilled Seafood", "Cocktails"],
    timing: "09:00 AM - 01:00 AM",
    description: "Perched along the scenic waterfront of the Chapora River in Siolim, Thalassa captures the spirit of Mykonos with whitewashed decor, Greek dance performances, and sizzling Mediterranean grills.",
    specialties: [
      "Greek Souvlaki Skewers (Chicken & Pork)",
      "Grilled Jumbo Tiger Prawns in Garlic Butter",
      "Spanakopita (Spinach Feta Filo Pastry)",
      "Baklava with Vanilla Bean Gelato"
    ],
    features: [
      "Riverfront Sunset View",
      "Nightly Greek Sirtaki Dance & Fire Shows",
      "Craft Mediterranean Cocktails",
      "Open-Air Waterfront Seating"
    ],
    seatingAreas: [
      { id: "riverfront_table", name: "Waterfront Sunset Deck", fee: 0, note: "Prime view of sunset over the water" },
      { id: "lounge_cabana", name: "Greek Lounge Cabana", fee: 0, note: "Comfortable white sofa seating" }
    ],
    timeSlots: ["01:00 PM", "05:30 PM (Sunset Slot)", "07:30 PM", "09:30 PM"],
    coordinates: { lat: 15.6280, lng: 73.7650 },
    phone: "+91 98500 33537",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Resort Casual", alcoholServed: true }
  },
  {
    id: "the-fishermans-wharf-goa",
    name: "The Fisherman's Wharf",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Cavelossim, South Goa",
    state: "Goa",
    country: "India",
    rating: 4.90,
    reviewsCount: 3890,
    badge: "Sal Riverfront Dining",
    tagline: "Picturesque wooden deck dining overlooking the serene waters of River Sal and fishing trawlers",
    address: "Mobor Beach Road, Near River Sal, Cavelossim, Goa 403731",
    nearLocation: "River Sal & Mobor Beach",
    distanceToLandmarks: [
      { landmark: "Mobor Beach", distance: "0.8 km" },
      { landmark: "Cavelossim Beach", distance: "1.5 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2200,
    heroImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Authentic Goan", "Fresh Seafood", "Portuguese", "North Indian"],
    timing: "12:00 PM - 11:30 PM",
    description: "A celebration of Goan river life, Fisherman's Wharf serves fresh catch directly from local fishing boats, accompanied by live retro music and river breezes.",
    specialties: [
      "Goan Crab Xec Xec (Rich roasted coconut gravy)",
      "Kingfish Peri Peri Masala Fry",
      "Prawn Balchão with Poi Bread",
      "Traditional Bebinca with Ice Cream"
    ],
    features: [
      "River Sal Wooden Jetty Seating",
      "Live Retro English & Goan Music",
      "Fresh Seafood Display Counter",
      "Full Cocktail Bar"
    ],
    seatingAreas: [
      { id: "jetty_table", name: "River Sal Deck Table", fee: 0, note: "Direct river view" },
      { id: "indoor_tiki_hall", name: "Main Thatched Hall", fee: 0, note: "Near live music stage" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:30 PM", "08:30 PM", "09:30 PM"],
    coordinates: { lat: 15.1680, lng: 73.9480 },
    phone: "+91 832 287 1317",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "gunpowder-assagao-goa",
    name: "Gunpowder - Peninsular Kitchen",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Assagao, North Goa",
    state: "Goa",
    country: "India",
    rating: 4.92,
    reviewsCount: 3240,
    badge: "Heritage Courtyard Favorite",
    tagline: "Spicy coastal flavors of South India in a charming 150-year-old Portuguese villa garden",
    address: "No. 6, Anjuna Mapusa Rd, Saunto Vaddo, Assagao, Goa 403507",
    nearLocation: "Assagao village center",
    distanceToLandmarks: [
      { landmark: "Anjuna Beach", distance: "4.0 km" },
      { landmark: "Vagator Beach", distance: "3.8 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1800,
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["South Indian Coastal", "Kerala", "Mangalorean", "Andhra"],
    timing: "12:00 PM - 03:30 PM, 07:00 PM - 11:00 PM (Closed Mondays)",
    description: "Tucked inside an old Portuguese mansion in hip Assagao, Gunpowder delivers unforgettable home-style South Indian coastal recipes like Kerala beef fry, Malabar parottas, and kokum cocktails.",
    specialties: [
      "Kerala Mutton Stew with Fluffy Appams",
      "Pandi Curry (Coorg spicy pork)",
      "Andhra Prawn Masala",
      "Egg Appam with Stew"
    ],
    features: [
      "Open Garden Villa Courtyard",
      "Artisan Craft Cocktails",
      "People Tree Boutique on Premises",
      "Romantic Fairy-Lit Trees"
    ],
    seatingAreas: [
      { id: "courtyard_garden", name: "Garden Veranda Table", fee: 0, note: "Under the mango trees" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:30 PM", "09:00 PM"],
    coordinates: { lat: 15.5890, lng: 73.7780 },
    phone: "+91 832 226 8083",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "brittos-baga-beach-goa",
    name: "Britto's - Beachside Restaurant & Bar",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Baga, North Goa",
    state: "Goa",
    country: "India",
    rating: 4.82,
    reviewsCount: 5210,
    badge: "Baga Beachfront Institution",
    tagline: "Feet-in-the-sand seaside dining since 1965 on North Goa's most lively beach",
    address: "House No. 7/171, Saunta Vaddo, Baga Beach, Calangute, Goa 403516",
    nearLocation: "Northern end of Baga Beach",
    distanceToLandmarks: [
      { landmark: "Baga Beach", distance: "0.01 km (Direct Beach Sand)" },
      { landmark: "Tito's Lane", distance: "0.5 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1400,
    heroImage: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Goan Seafood", "Continental", "Chinese", "Desserts & Bakery"],
    timing: "08:30 AM - 12:00 AM",
    description: "An institution on Baga Beach for nearly six decades, offering fresh lobster, butter garlic calamari, and mouth-watering desserts right where the waves lap the sand.",
    specialties: [
      "Stuffed Crab with Spicy Cheese",
      "Prawn Curry with Steamed Rice",
      "Butter Garlic Squid",
      "Famous Strawberry Tart"
    ],
    features: [
      "Direct Beach Sand Seating",
      "Bakery & Cake Counter",
      "Sunset Beach Cocktails",
      "Live Sports Screenings"
    ],
    seatingAreas: [
      { id: "beach_sand_table", name: "Beach Sand Table", fee: 0, note: "Feet in the sand by the waves" }
    ],
    timeSlots: ["01:00 PM", "05:00 PM", "07:30 PM", "09:00 PM"],
    coordinates: { lat: 15.5580, lng: 73.7510 },
    phone: "+91 832 227 7331",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Beach Casual", alcoholServed: true }
  },
  {
    id: "vinayak-family-restaurant-goa",
    name: "Vinayak Family Restaurant",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Assagao, North Goa",
    state: "Goa",
    country: "India",
    rating: 4.88,
    reviewsCount: 3950,
    badge: "Goa's #1 Local Fish Thali",
    tagline: "Authentic local tavern overlooking paddy fields serving Goa's best value fish thali",
    address: "House No 252, Bouta Waddo, Assagao, Goa 403507",
    nearLocation: "Assagao paddy fields",
    distanceToLandmarks: [
      { landmark: "Vagator Beach", distance: "3.5 km" },
      { landmark: "Mapusa Market", distance: "4.5 km" }
    ],
    priceRange: "₹",
    costForTwo: 650,
    heroImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Authentic Goan Fish Thali", "Local Seafood"],
    timing: "12:30 PM - 03:30 PM, 07:00 PM - 10:30 PM (Closed Thursdays)",
    description: "Beloved by locals, chefs, and in-the-know travelers, Vinayak is the definitive stop for an authentic Goan fish thali with rava-fried kingfish, kismoor, tisriya (clams), and sol kadhi.",
    specialties: [
      "Special Kingfish Fish Thali with Curry & Sol Kadhi",
      "Rava Fried Prawns",
      "Chonak (Sea Bass) Tawa Fry",
      "Tisreo Sukhem (Clam Masala)"
    ],
    features: ["Paddy Field View", "Incredible Value", "Authentic Local Flavor", "Chilled Goan Beer"],
    seatingAreas: [
      { id: "veranda_table", name: "Paddy View Veranda", fee: 0, note: "Cool breeze overlooking green fields" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:30 PM", "08:30 PM"],
    coordinates: { lat: 15.5920, lng: 73.7820 },
    phone: "+91 97640 87784",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: true }
  }
];
