/**
 * Manali Dining & Restaurants
 * Riverside cafes along Manalsu river, legendary Himalayan trout, Tibetan momos, and apple cider lounges.
 * Cost for two: ₹850 to ₹1,800
 */

export const MANALI_RESTAURANTS = [
  {
    id: "cafe-1947-old-manali",
    name: "Cafe 1947",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Old Manali",
    state: "Himachal Pradesh",
    country: "India",
    rating: 4.91,
    reviewsCount: 3820,
    badge: "Riverside Bridge Cafe",
    tagline: "Manali's original vintage music cafe right over the rushing glacial waters of Manalsu River",
    address: "Old Manali, Near Nehru Kund Bridge, Manali, Himachal Pradesh 175131",
    nearLocation: "Manalsu Riverbank, Old Manali entrance",
    distanceToLandmarks: [
      { landmark: "Manu Temple", distance: "0.8 km" },
      { landmark: "Mall Road Manali", distance: "2.1 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1400,
    heroImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Italian Wood-Fired Pizza", "Pasta", "Trout Specialty", "Continental Cafe"],
    timing: "12:00 PM - 11:30 PM",
    description: "Beloved by road-trippers and music lovers, Cafe 1947 perches on the riverbank where guests sip hot cocoa or local beer while listening to rushing river waters and live acoustic guitar.",
    specialties: [
      "Pan-Fried Himalayan Rainbow Trout in Lemon Butter",
      "Wood-Fired UFO Margherita Pizza",
      "Creamy Pesto Tagliatelle",
      "Belgian Hot Chocolate"
    ],
    features: [
      "Direct Riverbank Boulder Seating",
      "Live Acoustic Folk & Rock Evenings",
      "Italian Wood-Fired Oven",
      "Cozy Fireplace in Winter"
    ],
    seatingAreas: [
      { id: "river_deck", name: "Glacial Riverbank Deck", fee: 0, note: "Right next to gushing water" },
      { id: "loft_indoor", name: "Cozy Wooden Loft", fee: 0, note: "Near the fireplace" }
    ],
    timeSlots: ["01:00 PM", "04:30 PM", "07:30 PM", "09:00 PM"],
    coordinates: { lat: 32.2530, lng: 77.1720 },
    phone: "+91 94184 61947",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "the-johnsons-cafe-manali",
    name: "The Johnson's Cafe & Bar",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Circuit House Road, Manali",
    state: "Himachal Pradesh",
    country: "India",
    rating: 4.89,
    reviewsCount: 3410,
    badge: "World Famous Trout",
    tagline: "Apple orchard stone lodge celebrated since 1997 for legendary Himalayan trout in 10 preparations",
    address: "Circuit House Road, Siyal, Manali, Himachal Pradesh 175131",
    nearLocation: "Near Circuit House, between Mall Road & Old Manali",
    distanceToLandmarks: [
      { landmark: "Hadimba Temple", distance: "0.8 km" },
      { landmark: "Mall Road", distance: "0.9 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1800,
    heroImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Continental", "Himalayan Trout Specialty", "Italian", "Bar & Grill"],
    timing: "09:00 AM - 11:00 PM",
    description: "Surrounded by blooming gardens and apple trees, Johnson's Cafe is famed for the freshest Beas River rainbow trout, wood-fired pizzas, outdoor lawn bonfires, and mulled wine.",
    specialties: [
      "Johnson's Signature Grilled Trout with Almond Butter",
      "Wood-Fired Woodcutter Pizza",
      "Pan-Seared Lamb Chops",
      "Warm Apple Crumble with Vanilla Ice Cream"
    ],
    features: [
      "Manicured Lawn & Garden Dining",
      "Evening Fireplace & Lawn Bonfires",
      "Mulled Wine & Cocktail Bar",
      "Pet Friendly"
    ],
    seatingAreas: [
      { id: "lawn_bonfire", name: "Apple Garden Lawn Table", fee: 0, note: "Under alpine trees" }
    ],
    timeSlots: ["01:00 PM", "07:00 PM", "08:30 PM", "09:30 PM"],
    coordinates: { lat: 24.5820, lng: 77.1790 },
    phone: "+91 98160 73023",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "chopsticks-restaurant-manali",
    name: "Chopsticks Restaurant",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Mall Road, Manali",
    state: "Himachal Pradesh",
    country: "India",
    rating: 4.87,
    reviewsCount: 4620,
    badge: "Mall Road Tibetan Legend",
    tagline: "Hearty steaming Tibetan momos, spicy thukpa, and craft fruit beer since decades on Mall Road",
    address: "Model Town, Mall Road, Manali, Himachal Pradesh 175131",
    nearLocation: "Mall Road Main Promenade",
    distanceToLandmarks: [
      { landmark: "Mall Road", distance: "0.01 km" },
      { landmark: "Tibetan Monastery", distance: "0.2 km" }
    ],
    priceRange: "₹",
    costForTwo: 850,
    heroImage: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Tibetan", "Chinese", "Himalayan", "Japanese"],
    timing: "10:30 AM - 10:30 PM",
    description: "The quintessential Mall Road dining experience, Chopsticks serves soul-warming bowls of Himalayan noodle soup, juicy handmade momos, and crispy spring rolls to chilly travelers.",
    specialties: [
      "Steamed Mutton & Veg Tingmo Momos",
      "Special Gyathuk (Spicy Tibetan noodle soup)",
      "Shapta (Sliced mutton stir fry with capsicum)",
      "Himachali Apple Cider & Beer"
    ],
    features: ["Warm Wooden Interiors", "Mall Road Promenade View", "Fast Service", "Budget Friendly"],
    seatingAreas: [
      { id: "mall_window", name: "Mall Road Window Table", fee: 0, note: "Overlooking the vibrant street" }
    ],
    timeSlots: ["12:30 PM", "02:00 PM", "07:30 PM", "08:45 PM"],
    coordinates: { lat: 32.2420, lng: 77.1890 },
    phone: "+91 1902 252 639",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "the-lazy-dog-manali",
    name: "The Lazy Dog Lounge",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Old Manali",
    state: "Himachal Pradesh",
    country: "India",
    rating: 4.86,
    reviewsCount: 2950,
    badge: "Riverside Chill Lounge",
    tagline: "Laid-back riverside wooden deck with craft beers, burgers, and bean bags along the stream",
    address: "Manu Temple Road, Old Manali, Himachal Pradesh 175131",
    nearLocation: "Manalsu Riverbank, Manu Temple Road",
    distanceToLandmarks: [
      { landmark: "Manu Temple", distance: "0.5 km" },
      { landmark: "Hadimba Temple", distance: "1.2 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1600,
    heroImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Continental", "Gourmet Burgers", "Korean & Asian", "Craft Cocktails"],
    timing: "11:00 AM - 11:30 PM",
    description: "Relax on riverbank sun decks on comfortable wooden loungers with views of deodar-covered hills. Famous for grilled trout, juicy burgers, and chilled mountain cocktails.",
    specialties: [
      "Lazy Dog Signature Beef/Lamb Burger",
      "Korean Kimchi Fried Rice with Pork",
      "Wood-Smoked River Trout",
      "Craft Apple Cider on Tap"
    ],
    features: [
      "Outdoor River Wooden Deck",
      "Live Bands & Weekend Acoustics",
      "Craft Cocktails & Local Beers",
      "Board Games & Cozy Book Corner"
    ],
    seatingAreas: [
      { id: "river_deck_lounge", name: "Riverside Sun Deck", fee: 0, note: "Beside the rushing stream" }
    ],
    timeSlots: ["01:00 PM", "04:00 PM", "07:30 PM", "09:00 PM"],
    coordinates: { lat: 32.2550, lng: 77.1700 },
    phone: "+91 98059 90059",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: true }
  }
];
