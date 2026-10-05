/**
 * Kerala Dining & Restaurants
 * Backwater seafood decks, Malabar biryani institutions, Fort Kochi art cafes, and Munnar hill spots.
 * Cost for two: ₹500 to ₹2,400
 */

export const KERALA_RESTAURANTS = [
  {
    id: "fort-house-restaurant-kochi",
    name: "Fort House Restaurant",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Fort Kochi",
    state: "Kerala",
    country: "India",
    rating: 4.92,
    reviewsCount: 3650,
    badge: "Waterfront Harbor Deck",
    tagline: "Romantic open-air wooden pier dining directly on the calm waters of Cochin Harbor",
    address: "2/6A, Calvathy Road, Fort Kochi, Kochi, Kerala 682001",
    nearLocation: "Fort Kochi Harbor Waterfront",
    distanceToLandmarks: [
      { landmark: "Chinese Fishing Nets", distance: "0.8 km" },
      { landmark: "Mattancherry Palace", distance: "1.9 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1800,
    heroImage: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Kerala Coastal Seafood", "Traditional Malabari", "Vegetarian Kerala"],
    timing: "12:30 PM - 03:00 PM, 07:00 PM - 10:30 PM",
    description: "Built on a private wooden pier over Cochin Harbor, Fort House offers candlelight dining with ships and traditional fishing boats gliding past, specializing in fresh catch cooked in creamy coconut milk and Kodampuli.",
    specialties: [
      "Karimeen Pollichathu (Pearl spot fish wrapped in banana leaf)",
      "Kerala Tiger Prawn Roast with Fluffy Appams",
      "Alleppey Fish Curry in Mango & Coconut Broth",
      "Vegetable Stew with Fresh Coconut Milk"
    ],
    features: [
      "Direct Over-Water Pier Deck",
      "Romantic Candlelight Seating",
      "Gentle Sea Breeze & Harbor Lights",
      "Ayurvedic Herbal Drinks"
    ],
    seatingAreas: [
      { id: "pier_water_table", name: "Harbor Pier Waterfront Table", fee: 0, note: "Over the water looking across the harbor" }
    ],
    timeSlots: ["01:00 PM", "07:00 PM", "08:30 PM", "09:30 PM"],
    coordinates: { lat: 9.9660, lng: 76.2480 },
    phone: "+91 484 221 7103",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "paragon-restaurant-kochi",
    name: "Paragon Restaurant - Malabar Culinary Icon",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Lulu Mall & MG Road, Kochi",
    state: "Kerala",
    country: "India",
    rating: 4.95,
    reviewsCount: 7850,
    badge: "World’s Top 150 Legendary Restaurants",
    tagline: "Voted by TasteAtlas among the world's most legendary dining spots for authentic Malabar Biryani",
    address: "Aster Medcity Road & Lulu Mall, Edappally, Kochi, Kerala 682024",
    nearLocation: "Edappally, Central Kochi",
    distanceToLandmarks: [
      { landmark: "Lulu Mall Kochi", distance: "0.2 km" },
      { landmark: "Marine Drive Kochi", distance: "8.0 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1100,
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Authentic Malabar Biryani", "Kerala Seafood", "Arabian Grills"],
    timing: "11:00 AM - 11:30 PM",
    description: "Since 1939, Paragon has defined Malabar cuisine. Revered for its fragrant short-grain Khaima rice biryani cooked with tender spiced meat, crispy fried seafood, and layered Malabar parottas.",
    specialties: [
      "World-Famous Malabar Mutton & Chicken Dum Biryani",
      "Kozhi Porichathu (Crispy spiced Kerala fried chicken)",
      "Fish Mango Curry with Malabar Parotta",
      "Elaneer Pudding (Tender coconut pudding)"
    ],
    features: ["Family Friendly", "Quick Efficient Service", "Unrivaled Consistency", "Air Conditioned"],
    seatingAreas: [
      { id: "paragon_hall", name: "Family Dining Room", fee: 0, note: "Comfortable AC hall" }
    ],
    timeSlots: ["12:00 PM", "01:15 PM", "02:15 PM", "07:30 PM", "08:45 PM"],
    coordinates: { lat: 10.0260, lng: 76.3080 },
    phone: "+91 484 401 1100",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "thaff-restaurant-alleppey",
    name: "Thaff Restaurant - Alleppey Backwater Spot",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Alleppey (Alappuzha)",
    state: "Kerala",
    country: "India",
    rating: 4.86,
    reviewsCount: 3410,
    badge: "Alleppey Local Favorite",
    tagline: "Busy town landmark serving the juiciest fish pollichathu and spicy pepper chicken in Alleppey",
    address: "General Hospital Junction, CCSB Road, Alappuzha, Kerala 688001",
    nearLocation: "General Hospital Junction, Near Canal",
    distanceToLandmarks: [
      { landmark: "Alappuzha Beach", distance: "2.1 km" },
      { landmark: "Vembanad Jetty", distance: "1.8 km" }
    ],
    priceRange: "₹",
    costForTwo: 900,
    heroImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Kerala Coastal", "Malabar Seafood", "Arabian Tandoor"],
    timing: "10:30 AM - 11:00 PM",
    description: "The primary culinary pitstop for houseboat travelers in Alleppey, offering piping hot appams with duck roast, pearl spot fish, and freshly squeezed tropical fruit juices.",
    specialties: [
      "Karimeen Fry with Shallots and Curry Leaves",
      "Kuttanadan Duck Roast with Appams",
      "Squid Pepper Fry",
      "Fresh Falooda & Fresh Fruit Juices"
    ],
    features: ["Budget Friendly", "Fresh Daily Catch", "Family AC Seating", "Near Houseboat Ghats"],
    seatingAreas: [
      { id: "ac_floor", name: "First Floor AC Dining", fee: 0, note: "Cool family section" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:30 PM", "08:45 PM"],
    coordinates: { lat: 9.4980, lng: 76.3310 },
    phone: "+91 477 223 8884",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "kashi-art-cafe-fort-kochi",
    name: "Kashi Art Cafe",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Fort Kochi",
    state: "Kerala",
    country: "India",
    rating: 4.88,
    reviewsCount: 4120,
    badge: "Courtyard Art Sanctuary",
    tagline: "Contemporary art gallery cafe with tree-canopied courtyard, artisan coffee, and chocolate cake",
    address: "Burgher St, Fort Nagar, Fort Kochi, Kochi, Kerala 682001",
    nearLocation: "Burgher Street, Fort Kochi Heritage Quarter",
    distanceToLandmarks: [
      { landmark: "St. Francis Church", distance: "0.2 km" },
      { landmark: "Fort Kochi Beach", distance: "0.4 km" }
    ],
    priceRange: "₹",
    costForTwo: 750,
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["European Cafe", "Organic Breakfast", "Artisan Coffee & Bakery"],
    timing: "08:30 AM - 08:30 PM",
    description: "The intellectual beating heart of Fort Kochi, Kashi Art Cafe combines rotating modern art exhibits with a peaceful sun-dappled courtyard, farm-fresh breakfasts, and their legendary warm chocolate cake.",
    specialties: [
      "Famous Warm Chocolate Cake with Ice Cream",
      "Poached Eggs on Fresh Spinach Toast",
      "Homemade Granola with Tropical Fruit & Honey",
      "Cold Drip Coffee with Coconut Milk"
    ],
    features: [
      "Contemporary Art Gallery",
      "Courtyard Canopy Seating",
      "Specialty Filter & Espresso Coffees",
      "Free Wi-Fi"
    ],
    seatingAreas: [
      { id: "courtyard_table", name: "Tree-Canopied Courtyard Table", fee: 0, note: "Under the open sky and ferns" }
    ],
    timeSlots: ["09:00 AM", "11:30 AM", "03:30 PM", "05:30 PM"],
    coordinates: { lat: 9.9650, lng: 76.2425 },
    phone: "+91 484 221 5769",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "rapsy-restaurant-munnar",
    name: "Rapsy Restaurant - Munnar Market",
    destinationId: "kerala",
    destinationName: "Kerala",
    city: "Munnar Town",
    state: "Kerala",
    country: "India",
    rating: 4.83,
    reviewsCount: 3890,
    badge: "Munnar Backpacker Legend",
    tagline: "Famous market diner known for delicious Spanish omelettes, Malabar parottas, and cardamom tea",
    address: "Main Bazar, Near Post Office, Munnar, Kerala 685612",
    nearLocation: "Munnar Main Bazar",
    distanceToLandmarks: [
      { landmark: "Munnar Town Center", distance: "0.1 km" },
      { landmark: "Tea Museum", distance: "1.8 km" }
    ],
    priceRange: "₹",
    costForTwo: 500,
    heroImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Kerala Local", "Breakfast & Omelettes", "Continental"],
    timing: "06:30 AM - 10:30 PM",
    description: "A cherished mountain diner in Munnar town where early morning hikers and travelers fuel up on fluffy Spanish omelettes, hot egg parottas, and steaming aromatic cardamom tea.",
    specialties: [
      "Special Spanish Cheese Omelette",
      "Kerala Beef/Chicken Fry with Flaky Parotta",
      "Fresh Banana & Honey Pancake",
      "Highland Cardamom Milk Tea"
    ],
    features: ["Budget Friendly", "Early Morning Breakfast", "Centrally Located in Bazar", "Hearty Portions"],
    seatingAreas: [
      { id: "bazar_table", name: "Main Cafe Seating", fee: 0, note: "Street view table" }
    ],
    timeSlots: ["07:30 AM", "09:00 AM", "01:00 PM", "07:30 PM"],
    coordinates: { lat: 10.0880, lng: 77.0620 },
    phone: "+91 4865 230 456",
    policies: { reservationDeposit: "Walk-in Friendly", dressCode: "Casual", alcoholServed: false }
  }
];
