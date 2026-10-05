/**
 * Jaipur Dining & Restaurants
 * Amer Fort palace dining, peacock rooftops, famous Johari Bazar sweets, and Handi meat.
 * Cost for two: ₹600 to ₹2,800
 */

export const JAIPUR_RESTAURANTS = [
  {
    id: "1135-ad-amer-fort-jaipur",
    name: "1135 AD - Amer Fort",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Amer, Jaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.95,
    reviewsCount: 3120,
    badge: "Dine Inside Amer Fort",
    tagline: "Live like royal maharajas inside the 16th-century ramparts of Amer Fort",
    address: "Level 2, Jaleb Chowk, Amer Fort, Jaipur, Rajasthan 302001",
    nearLocation: "Inside Amer Fort, Jaleb Chowk",
    distanceToLandmarks: [
      { landmark: "Amer Fort Palace", distance: "0.05 km (Inside Fort)" },
      { landmark: "Maota Lake", distance: "0.3 km" },
      { landmark: "Hawa Mahal", distance: "9.0 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2800,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Royal Rajputana", "Mughlai", "North Indian Fine Dining"],
    timing: "12:00 PM - 10:30 PM",
    description: "Named after the founding year of the Kachwaha Rajput dynasty, 1135 AD is situated high on Amer Fort. Features pure silver tableware, gold-leaf domed ceilings, and candlelight dining overlooking the Aravalli valleys.",
    specialties: [
      "Thaal-e-Jodha (Royal Vegetarian Tasting Feast)",
      "Thaal-e-Amer (Royal Non-Veg Tasting Feast)",
      "Junglee Maas (Slow simmered spicy mutton)",
      "Badam ka Halwa"
    ],
    features: [
      "Historic 16th-Century Palace Setting",
      "Pure Silver Tableware",
      "Live Classical Sitar & Sarangi",
      "Terrace Overlooking Aravalli Hills"
    ],
    seatingAreas: [
      { id: "sheesh_terrace", name: "Rooftop Fort Rampart Terrace", fee: 0, note: "Views over Maota Lake" },
      { id: "shahi_hall", name: "Shahi Silver Dining Hall", fee: 0, note: "Under the gold leaf ceiling" }
    ],
    timeSlots: ["01:00 PM", "07:00 PM", "08:30 PM", "09:30 PM"],
    coordinates: { lat: 26.9855, lng: 75.8513 },
    phone: "+91 141 253 0798",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  },
  {
    id: "peacock-rooftop-jaipur",
    name: "Peacock Rooftop Restaurant",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Bani Park, Jaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.89,
    reviewsCount: 4210,
    badge: "Bani Park Garden Rooftop",
    tagline: "Eco-friendly rooftop decorated with painted peacocks, fairy lights, and live evening acoustic music",
    address: "Hotel Pearl Palace, 51, Hathroi Fort, Hari Kishan Somani Marg, Ajmer Road, Jaipur 302001",
    nearLocation: "Near Hathroi Fort & Bani Park",
    distanceToLandmarks: [
      { landmark: "Jaipur Junction Railway Station", distance: "1.2 km" },
      { landmark: "City Palace", distance: "3.5 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1200,
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["North Indian", "Rajasthani", "Chinese", "Continental Cafe"],
    timing: "07:30 AM - 11:00 PM",
    description: "Perched atop Hotel Pearl Palace, Peacock Rooftop is one of Jaipur's most beloved traveler cafes. Whimsical painted peacocks, cozy cane armchairs, and delicious North Indian gravies.",
    specialties: [
      "Chicken Lababdar with Garlic Naan",
      "Paneer Tikka Masala",
      "Traditional Laal Maas",
      "Banana Nutella Pancake with Masala Chai"
    ],
    features: [
      "Fairy-Lit Garden Rooftop",
      "Live Sitar & Acoustic Evenings",
      "Breakfast to Dinner Service",
      "Free High-Speed Wi-Fi"
    ],
    seatingAreas: [
      { id: "terrace_table", name: "Garden Rooftop Table", fee: 0, note: "Under open skies" }
    ],
    timeSlots: ["08:30 AM", "01:00 PM", "07:30 PM", "09:00 PM"],
    coordinates: { lat: 26.9180, lng: 75.7950 },
    phone: "+91 141 237 3700",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "lmb-laxmi-mishtan-bhandar-jaipur",
    name: "Laxmi Mishtan Bhandar (LMB)",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Johari Bazar, Old City",
    state: "Rajasthan",
    country: "India",
    rating: 4.86,
    reviewsCount: 6150,
    badge: "Since 1727 in Pink City",
    tagline: "Historic culinary jewel inside Johari Bazar famed for Paneer Ghewar and Royal Rajasthani Thali",
    address: "98-101, Johari Bazar, Pink City, Jaipur, Rajasthan 302003",
    nearLocation: "Johari Bazar, Heart of Old Pink City",
    distanceToLandmarks: [
      { landmark: "Hawa Mahal", distance: "0.5 km" },
      { landmark: "City Palace", distance: "0.8 km" }
    ],
    priceRange: "₹",
    costForTwo: 950,
    heroImage: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Pure Vegetarian Rajasthani", "Royal Thali", "Mithai & Sweets", "Street Snacks"],
    timing: "08:00 AM - 11:00 PM",
    description: "Operating continuously in Johari Bazar since the founding of Jaipur, LMB is renowned worldwide for its authentic Rajasthani vegetarian delicacies, Paneer Ghewar, and Dahi Vada.",
    specialties: [
      "Royal Rajasthani Thali (with 18 regional dishes)",
      "World-Famous Paneer Ghewar",
      "Pyaaz Ki Kachori",
      "Special Dahi Vada"
    ],
    features: [
      "Heritage AC Dining Hall",
      "Famous Sweet Counter",
      "Pure Vegetarian Desi Ghee",
      "Located in Prime Jewelry Bazar"
    ],
    seatingAreas: [
      { id: "thali_ac_hall", name: "Main Dining Hall", fee: 0, note: "AC family dining" }
    ],
    timeSlots: ["12:00 PM", "01:30 PM", "07:30 PM", "08:30 PM"],
    coordinates: { lat: 26.9208, lng: 75.8255 },
    phone: "+91 141 256 5844",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "handi-restaurant-jaipur",
    name: "Handi Restaurant",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "MI Road, Jaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.85,
    reviewsCount: 3820,
    badge: "Jaipur's Best Handi Meat",
    tagline: "Legendary clay pot slow-cooked Handi meat on lively MI Road since 1984",
    address: "Maya Mansion, Opposite GPO, MI Road, Jaipur, Rajasthan 302001",
    nearLocation: "MI Road, Opposite GPO",
    distanceToLandmarks: [
      { landmark: "Raj Mandir Cinema", distance: "0.6 km" },
      { landmark: "Albert Hall Museum", distance: "1.8 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1600,
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Mughlai", "North Indian", "Rajasthani Non-Veg", "Tandoori Kebabs"],
    timing: "12:00 PM - 11:00 PM",
    description: "Handi is synonymous with slow-cooked tandoori mutton and succulent charcoal kebabs. The aroma of coal-fired handis makes this MI Road landmark a must-visit.",
    specialties: [
      "Signature Handi Mutton (Slow-cooked in clay pot)",
      "Rajasthani Laal Maas",
      "Murgh Malai Kebab",
      "Butter Naan & Garlic Kulcha"
    ],
    features: ["Rooftop & AC Indoor Seating", "Live Tandoor Counter", "Full Bar", "Central Location"],
    seatingAreas: [
      { id: "rooftop_handi", name: "Rooftop Open Seating", fee: 0, note: "Breezy city view" }
    ],
    timeSlots: ["01:00 PM", "07:30 PM", "08:30 PM", "09:30 PM"],
    coordinates: { lat: 26.9170, lng: 75.8090 },
    phone: "+91 141 237 2462",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "bar-palladio-jaipur",
    name: "Bar Palladio Jaipur",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Narain Niwas Palace, Jaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.92,
    reviewsCount: 3450,
    badge: "Royal Electric-Blue Sanctuary",
    tagline: "Stunning cobalt blue Italian lounge nestled in the peacock gardens of Narain Niwas Palace",
    address: "Kanota Bagh, Narain Singh Rd, Narayan Singh Circle, Jaipur, Rajasthan 302004",
    nearLocation: "Inside Hotel Narain Niwas Palace",
    distanceToLandmarks: [
      { landmark: "Albert Hall Museum", distance: "1.5 km" },
      { landmark: "City Palace", distance: "3.8 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2400,
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Italian Classic", "Antipasti & Pasta", "Craft Cocktails", "Desserts"],
    timing: "06:00 PM - 11:30 PM",
    description: "Designed by Marie-Anne Oudejans, Bar Palladio is an unforgettable fantasy of orientalist electric-blue frescoes, tented garden pavilions, Italian spritzers, and roaming peacocks.",
    specialties: [
      "Rigatoni alla Vodka",
      "Classic Bruschetta al Pomodoro",
      "Handcrafted Tiramisu",
      "Palladio Spritz Cocktail"
    ],
    features: [
      "Iconic Cobalt Blue Frescoed Rooms",
      "Tented Garden Pavilions with Bonfires",
      "Craft Cocktails & Wine",
      "Peacock Garden Ambiance"
    ],
    seatingAreas: [
      { id: "garden_tent", name: "Garden Tented Pavilion", fee: 0, note: "Outdoor tent table with bonfires" },
      { id: "indoor_blue_hall", name: "Blue Frescoed Salon", fee: 0, note: "Inside the palace salon" }
    ],
    timeSlots: ["06:30 PM", "08:00 PM", "09:30 PM"],
    coordinates: { lat: 26.8990, lng: 75.8190 },
    phone: "+91 141 256 5556",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  },
  {
    id: "rawat-mishtan-bhandar-jaipur",
    name: "Rawat Mishtan Bhandar",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Station Road, Jaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.87,
    reviewsCount: 7890,
    badge: "World Famous Pyaz Kachori",
    tagline: "The definitive destination for flaky steaming onion kachoris and authentic sweets",
    address: "Station Road, Opp. Polo Victory Cinema, Sindhi Camp, Jaipur, Rajasthan 302006",
    nearLocation: "Opposite Polo Victory, Sindhi Camp",
    distanceToLandmarks: [
      { landmark: "Jaipur Railway Station", distance: "0.5 km" },
      { landmark: "Sindhi Camp Bus Stand", distance: "0.2 km" }
    ],
    priceRange: "₹",
    costForTwo: 600,
    heroImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["North Indian Street Food", "Famous Kachoris", "Sweets & Thali"],
    timing: "06:00 AM - 10:30 PM",
    description: "Every day thousands flock to Rawat for its piping hot, fragrant onion kachoris fried in pure ghee, accompanied by mawa kachoris, samosas, and royal thalis.",
    specialties: [
      "Legendary Pyaaz Ki Kachori (Steaming onion kachori)",
      "Mawa Kachori with Sweet Saffron Syrup",
      "Mirchi Vada with Green Chutney",
      "Gulab Jamun & Jalebi"
    ],
    features: ["Famous Kachori Counter", "AC Dining Hall", "Quick Service", "Takeaway Packaging"],
    seatingAreas: [
      { id: "rawat_dining_room", name: "Family AC Restaurant", fee: 0, note: "Full meals and snacks" }
    ],
    timeSlots: ["08:30 AM", "12:30 PM", "04:30 PM", "07:30 PM"],
    coordinates: { lat: 26.9215, lng: 75.7990 },
    phone: "+91 141 236 6736",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  }
];
