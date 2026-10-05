/**
 * Udaipur Dining & Restaurants
 * Lakefront rooftop dining, heritage havelis, and royal Mewari thali spots.
 * Cost for two: ₹550 to ₹2,800
 */

export const UDAIPUR_RESTAURANTS = [
  {
    id: "ambrai-restaurant-udaipur",
    name: "Ambrai - Amet Haveli",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.94,
    reviewsCount: 4820,
    badge: "Best Lake Pichola Sunset View",
    tagline: "Water-level lakeside dining overlooking City Palace and Jagdish Temple",
    address: "Amet Haveli, Outside Chandpole, Udaipur, Rajasthan 313001",
    nearLocation: "Hanuman Ghat / Ambrai Ghat, right opposite City Palace",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.2 km across lake (Direct View)" },
      { landmark: "Ambrai Ghat", distance: "0.05 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2400,
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Authentic Rajasthani", "North Indian", "Mughlai", "Mewari Specialty"],
    timing: "12:30 PM - 03:30 PM, 06:30 PM - 10:30 PM",
    description: "Ambrai is universally celebrated as Udaipur's most scenic dining location. Situated on the western bank of Lake Pichola at Amet Haveli, tables sit right at the water's edge offering an unobstructed view of City Palace and Taj Lake Palace.",
    specialties: [
      "Mewari Mutton Laal Maas (Smoked red chili gravy)",
      "Govind Gatta Curry",
      "Paneer Lababdar",
      "Jungli Maas with Roomali Roti"
    ],
    features: [
      "Water-Level Lakefront Deck",
      "Illuminated Palace Night View",
      "Romantic Candlelight Seating",
      "Full Bar & Cocktails"
    ],
    seatingAreas: [
      { id: "lakefront_water_edge", name: "Lakeside Water-Edge Table", fee: 0, note: "Prime view of City Palace across water" },
      { id: "amet_heritage_courtyard", name: "Heritage Haveli Courtyard", fee: 0, note: "Spacious candlelit garden seating" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "06:30 PM (Sunset Slot)", "07:30 PM", "08:30 PM"],
    coordinates: { lat: 24.5781, lng: 73.6806 },
    phone: "+91 294 243 1085",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  },
  {
    id: "upre-by-1559-ad-udaipur",
    name: "Upré by 1559 AD",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.91,
    reviewsCount: 3950,
    badge: "Top Rooftop Dining",
    tagline: "Panoramic open-air cabanas with birds-eye views of Pichola & Ghats",
    address: "Roof Top Hotel Lake Pichola, Outside Chandpole, Udaipur, Rajasthan 313001",
    nearLocation: "Roof Top of Hotel Lake Pichola, Hanuman Ghat",
    distanceToLandmarks: [
      { landmark: "Lake Pichola", distance: "0.1 km" },
      { landmark: "Bagore Ki Haveli", distance: "0.5 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2800,
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Mewari Royal Dining", "North Indian", "Continental", "Grilled Kebabs"],
    timing: "12:30 PM - 03:00 PM, 06:30 PM - 11:00 PM",
    description: "Perched high above Lake Pichola, Upré features private open-air cabanas draped in white curtains with panoramic vistas of the ghats and City Palace.",
    specialties: [
      "Khad Murgh (Traditional pit-cooked chicken)",
      "Smoked Rajasthani Safed Maas",
      "Dal Baati Churma Platter",
      "Kebab Tasting Platter"
    ],
    features: [
      "Private Rooftop Cabanas",
      "Nightly Ghat Illumination",
      "Fine Wine Selection",
      "Live Instrumental Music"
    ],
    seatingAreas: [
      { id: "lakeview_cabana", name: "Royal Lakeview Cabana", fee: 0, note: "Private curtained cabana table" },
      { id: "open_sky_terrace", name: "Open Sky Star Terrace", fee: 0, note: "Uncovered rooftop table" }
    ],
    timeSlots: ["12:30 PM", "06:30 PM", "07:30 PM", "08:30 PM", "09:30 PM"],
    coordinates: { lat: 24.5775, lng: 73.6812 },
    phone: "+91 294 243 0045",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  },
  {
    id: "sheesh-mahal-udaipur",
    name: "Sheesh Mahal - Open-Air Palace Dining",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.95,
    reviewsCount: 2890,
    badge: "Two-Level Lake Palace Terrace",
    tagline: "Fine-dining open-air terrace looking upon illuminated Lake Pichola palaces",
    address: "The Leela Palace, Lake Pichola, Udaipur, Rajasthan 313001",
    nearLocation: "The Leela Palace Lake Promenade",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.9 km (across lake)" },
      { landmark: "Lake Pichola", distance: "0.05 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2900,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Royal Indian Cuisine", "Mughlai", "Awadhi", "Mewari"],
    timing: "07:00 PM - 11:00 PM",
    description: "Two-tiered open-air fine dining restaurant bathed in warm candlelight and lanterns, serving authentic royal recipes passed down through royal cooks.",
    specialties: [
      "Royal Laal Maas with Mathania Chillies",
      "Dum Pukht Biryani",
      "Murg Malai Tikka",
      "Paan Kulfi with Rose Petal Rabdi"
    ],
    features: [
      "Candlelit Open-Air Terrace",
      "Palace Service & Hospitality",
      "Panoramic Pichola Reflections",
      "Sommelier Wine Pairings"
    ],
    seatingAreas: [
      { id: "lower_terrace_water", name: "Lower Water-Level Terrace", fee: 0, note: "Intimate table right by the water" },
      { id: "upper_canopy_deck", name: "Upper Royal Canopy Table", fee: 0, note: "Elevated lake panoramic view" }
    ],
    timeSlots: ["07:00 PM", "08:15 PM", "09:30 PM"],
    coordinates: { lat: 24.5802, lng: 73.6765 },
    phone: "+91 294 670 1234",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual / Formal", alcoholServed: true }
  },
  {
    id: "tribute-restaurant-udaipur",
    name: "Tribute Restaurant & Lake Cafe",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Fateh Sagar, Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.88,
    reviewsCount: 3120,
    badge: "Fateh Sagar Lakefront",
    tagline: "Waterfront culinary retreat dedicated to Maharana Pratap's legendary steed Chetak",
    address: "Fateh Sagar Spillway, Ambamata, Udaipur, Rajasthan 313001",
    nearLocation: "Fateh Sagar Lake Spillway",
    distanceToLandmarks: [
      { landmark: "Fateh Sagar Lake", distance: "0.1 km" },
      { landmark: "Saheliyon Ki Bari", distance: "2.4 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1600,
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["North Indian", "Rajasthani", "Continental", "Seafood"],
    timing: "11:30 AM - 11:00 PM",
    description: "Serene waterfront restaurant overlooking the feeding grounds of water birds on Lake Fateh Sagar, surrounded by blooming bougainvillea.",
    specialties: [
      "Fateh Sagar Grilled Fish",
      "Khad Khargosh (Game style meat)",
      "Paneer Pasanda",
      "Crispy Cheese Corn Roll"
    ],
    features: ["Lakeside Open Deck", "Bird Watching", "Cocktails & Mocktails", "Free Parking"],
    seatingAreas: [
      { id: "deck_seating", name: "Outdoor Lake Deck", fee: 0, note: "Beside the lake waters" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:00 PM", "08:30 PM"],
    coordinates: { lat: 24.5950, lng: 73.6730 },
    phone: "+91 294 243 0089",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "traditional-khana-udaipur",
    name: "Traditional Khana - Royal Thali",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Panchwati, Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.89,
    reviewsCount: 2750,
    badge: "Unlimited Royal Rajasthani Thali",
    tagline: "Authentic Rajput & Marwari culinary feast served in bronze tableware",
    address: "48D - Block, Near Sukhadia Circle, Panchwati, Udaipur, Rajasthan 313001",
    nearLocation: "Near Sukhadia Circle",
    distanceToLandmarks: [
      { landmark: "Sukhadia Circle Fountain", distance: "0.4 km" },
      { landmark: "Saheliyon Ki Bari", distance: "1.2 km" }
    ],
    priceRange: "₹",
    costForTwo: 900,
    heroImage: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Pure Vegetarian Rajasthani", "Marwari Thali", "Gujarati Thali"],
    timing: "11:30 AM - 03:30 PM, 07:00 PM - 10:30 PM",
    description: "Famous for genuine Mewari hospitality and lavish 24-item royal vegetarian thalis served on kansya (bronze) plates with pure desi ghee.",
    specialties: [
      "Royal Unlimited Rajasthani Thali",
      "Panchmel Dal Baati Churma",
      "Ker Sangri with Bajra Roti",
      "Malpua with Rabdi"
    ],
    features: ["Unlimited Servings", "Pure Desi Ghee Prep", "Traditional Hospitality", "Family AC Seating"],
    seatingAreas: [
      { id: "ac_dining_hall", name: "Main Royal AC Hall", fee: 0, note: "Comfortable thali dining" }
    ],
    timeSlots: ["12:00 PM", "01:00 PM", "02:00 PM", "07:30 PM", "08:30 PM"],
    coordinates: { lat: 24.6020, lng: 73.6910 },
    phone: "+91 294 242 0456",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "natraj-dining-hall-udaipur",
    name: "Natraj Dining Hall & Restaurant",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Bapu Bazar, Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.88,
    reviewsCount: 5410,
    badge: "Udaipur's #1 Value Thali",
    tagline: "Generations-old local institution serving unlimited royal thali under ₹300 per person",
    address: "Near Railway Station, New Bapu Bazar, Udaipur, Rajasthan 313001",
    nearLocation: "New Bapu Bazar & Railway Station",
    distanceToLandmarks: [
      { landmark: "Udaipur City Railway Station", distance: "0.8 km" },
      { landmark: "City Palace", distance: "1.9 km" }
    ],
    priceRange: "₹",
    costForTwo: 550,
    heroImage: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Unlimited Rajasthani Thali", "Gujarati Thali"],
    timing: "11:00 AM - 03:30 PM, 06:30 PM - 10:30 PM",
    description: "For over 40 years, Natraj has been the gold standard for authentic unlimited Rajasthani-Gujarati thalis in Udaipur. Lightning-fast service and delicious freshly cooked rotis.",
    specialties: [
      "Unlimited Grand Rajasthani Thali (22 items)",
      "Rajasthani Gatta Curry",
      "Kadhi & Khichdi",
      "Fresh Jalebis with Rabdi"
    ],
    features: ["Unlimited Thali", "Budget Friendly", "Pure Vegetarian", "Clean AC Environment"],
    seatingAreas: [
      { id: "hall_table", name: "Standard Dining Table", fee: 0, note: "Thali dining room" }
    ],
    timeSlots: ["12:00 PM", "01:00 PM", "07:00 PM", "08:00 PM"],
    coordinates: { lat: 24.5820, lng: 73.6980 },
    phone: "+91 294 241 4456",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "jheels-ginger-coffee-udaipur",
    name: "Jheel's Ginger Coffee Bar & Bakery",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Gangaur Ghat, Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.86,
    reviewsCount: 3820,
    badge: "Lakeside Breakfast & Coffee",
    tagline: "Water-edge cafe tables at Gangaur Ghat with wood-fired pizzas and artisan coffees",
    address: "56, Gangaur Ghat Marg, Old City, Udaipur, Rajasthan 313001",
    nearLocation: "Gangaur Ghat steps",
    distanceToLandmarks: [
      { landmark: "Gangaur Ghat", distance: "0.05 km (Direct Water Steps)" },
      { landmark: "Bagore Ki Haveli", distance: "0.1 km" }
    ],
    priceRange: "₹",
    costForTwo: 650,
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Artisan Cafe", "Italian Pizza", "Bakery & Desserts", "Breakfast"],
    timing: "08:00 AM - 10:30 PM",
    description: "Perched right over the rippling water at Gangaur Ghat, Jheel's is Udaipur's favorite morning stop for artisan ginger honey coffee, wood-fired pizzas, and fresh cheesecakes.",
    specialties: [
      "Signature Cinnamon Honey Cold Brew",
      "Thin Crust Wood-Fired Margherita Pizza",
      "Nutella Banana Pancakes",
      "Blueberry Cheesecake"
    ],
    features: ["Lakeside Water Seats", "Artisan Bakery", "High-Speed Wi-Fi", "Sunset Views"],
    seatingAreas: [
      { id: "lake_veranda", name: "Lakeside Water-Edge Counter", fee: 0, note: "Pichola water view" }
    ],
    timeSlots: ["09:00 AM", "11:00 AM", "04:30 PM", "06:30 PM"],
    coordinates: { lat: 24.5795, lng: 73.6828 },
    phone: "+91 294 242 1234",
    policies: { reservationDeposit: "Walk-in & Reservation", dressCode: "Casual", alcoholServed: false }
  }
];
