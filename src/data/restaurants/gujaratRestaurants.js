/**
 * Gujarat Dining & Restaurants
 * Covering Ahmedabad, Rann of Kutch, Gir National Park, and Saputara.
 * Cost for two: ₹500 to ₹1,900
 */

export const GUJARAT_RESTAURANTS = [
  // ================= AHMEDABAD RESTAURANTS =================
  {
    id: "agashiye-the-house-of-mg",
    name: "Agashiye - The House of MG",
    destinationId: "ahmedabad",
    destinationName: "Ahmedabad",
    city: "Old City, Ahmedabad",
    state: "Gujarat",
    country: "India",
    rating: 4.94,
    reviewsCount: 6120,
    badge: "World’s Top Gujarati Thali",
    tagline: "Award-winning rooftop terrace dining serving royal Gujarati thalis in brass tableware",
    address: "The House of MG, Opp. Sidi Saiyyed Mosque, Gheekanta, Lal Darwaja, Ahmedabad 380001",
    nearLocation: "Opposite Sidi Saiyyed Mosque, Old City",
    distanceToLandmarks: [
      { landmark: "Sidi Saiyyed Mosque", distance: "0.05 km (Direct View)" },
      { landmark: "Sabarmati Riverfront", distance: "0.8 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1900,
    heroImage: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Royal Gujarati Thali", "Kansya Bronze Dining", "Traditional Sweets"],
    timing: "11:30 AM - 03:30 PM, 07:00 PM - 11:00 PM",
    description: "Meaning 'on the terrace' in Gujarati, Agashiye is spread across two levels of open wooden verandas and courtyards, serving an unforgettable multi-course seasonal Gujarati feast with warm hand-churned buttermilk.",
    specialties: [
      "Agashiye Royal Unlimited Gujarati Thali",
      "Kadhi & Sweet Surati Dal",
      "Ringna No Olo with Bajra Rotla",
      "Warm Rasawala Dhokla & Mohanthal"
    ],
    features: [
      "Rooftop Heritage Terrace",
      "Served in Traditional Kansa (Bronze) Tableware",
      "Open Outdoor Kitchen Display",
      "Pre-Meal Fresh Juice Lounge"
    ],
    seatingAreas: [
      { id: "rooftop_terrace", name: "Rooftop Open Terrace", fee: 0, note: "Under starry Ahmedabad skies" },
      { id: "heritage_veranda", name: "Covered Heritage Veranda", fee: 0, note: "Beside antique wooden pillars" }
    ],
    timeSlots: ["12:00 PM", "01:15 PM", "07:30 PM", "08:45 PM", "10:00 PM"],
    coordinates: { lat: 23.0280, lng: 72.5810 },
    phone: "+91 79 2550 6941",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: false }
  },
  {
    id: "vishalla-ahmedabad",
    name: "Vishalla - Traditional Village Dining",
    destinationId: "ahmedabad",
    destinationName: "Ahmedabad",
    city: "Vasna, Ahmedabad",
    state: "Gujarat",
    country: "India",
    rating: 4.88,
    reviewsCount: 4890,
    badge: "Mud Hut Village Experience",
    tagline: "Eat cross-legged on low cots beneath lantern-lit trees with mud floors and folk musicians",
    address: "Opposite APMC Market, Vasna, Ahmedabad, Gujarat 380055",
    nearLocation: "Vasna & Sabarmati River outskirts",
    distanceToLandmarks: [
      { landmark: "Vechaar Utensils Museum", distance: "0.01 km (On Premises)" },
      { landmark: "Sabarmati Ashram", distance: "8.5 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1400,
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Traditional Kathiyawadi", "Village Thali", "Gujarati Pure Veg"],
    timing: "11:00 AM - 03:00 PM, 07:00 PM - 11:00 PM",
    description: "Conceived by architect Surendra Patel in 1978, Vishalla recreates a rustic Gujarati village. Meals are served on sal tree leaf plates by turbanned servers, with puppet shows and the famous Vechaar museum of historic copper vessels.",
    specialties: [
      "Village Kathiyawadi Thali with Bajra Rotla and White Butter",
      "Sev Tameta Nu Shaak",
      "Khichdi Kadhi with Ghee",
      "Jaggery & Hand-Churned Makhan"
    ],
    features: [
      "Open-Air Lantern-Lit Mud Village",
      "Vechaar Historic Utensils Museum",
      "Live Folk Music & Puppet Shows",
      "Traditional Leaf Plate Dining"
    ],
    seatingAreas: [
      { id: "mud_cot_floor", name: "Traditional Baithak (Floor Cot)", fee: 0, note: "Cross-legged floor cot seating" },
      { id: "tree_table", name: "Tree-Canopy Table", fee: 0, note: "Standard table seating" }
    ],
    timeSlots: ["12:30 PM", "07:30 PM", "08:45 PM"],
    coordinates: { lat: 22.9980, lng: 72.5380 },
    phone: "+91 79 2660 7974",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "gordhan-thal-ahmedabad",
    name: "Gordhan Thal - Grand Gujarati Thali",
    destinationId: "ahmedabad",
    destinationName: "Ahmedabad",
    city: "Bodakdev, SG Highway",
    state: "Gujarat",
    country: "India",
    rating: 4.87,
    reviewsCount: 5210,
    badge: "SG Highway Family Favorite",
    tagline: "Lavish 26-item unlimited royal Gujarati thali served with legendary warmth",
    address: "Saptrang, Ground Floor, SG Highway, Bodakdev, Ahmedabad 380054",
    nearLocation: "SG Highway & Bodakdev",
    distanceToLandmarks: [
      { landmark: "ISKCON Temple Ahmedabad", distance: "1.2 km" },
      { landmark: "Science City", distance: "4.8 km" }
    ],
    priceRange: "₹",
    costForTwo: 850,
    heroImage: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Pure Vegetarian Gujarati", "Rajasthani Thali", "Farsan & Mithai"],
    timing: "11:30 AM - 03:30 PM, 07:00 PM - 10:30 PM",
    description: "A culinary staple on SG Highway, Gordhan Thal offers rapid, welcoming service of traditional farsans, sweet dals, stuffed rotlis, and warm gulab jamuns with unlimited refills.",
    specialties: [
      "Unlimited Grand Gujarati Thali (26 items)",
      "Khandvi & Lilva Kachori",
      "Panchmel Dal with Bati",
      "Basundi & Jalebi with Rabdi"
    ],
    features: ["Unlimited Thali", "Air Conditioned Family Hall", "Valet Parking", "Speedy Hospitality"],
    seatingAreas: [
      { id: "main_thali_hall", name: "AC Family Dining Hall", fee: 0, note: "Thali dining tables" }
    ],
    timeSlots: ["12:00 PM", "01:15 PM", "07:30 PM", "08:30 PM"],
    coordinates: { lat: 23.0380, lng: 72.5080 },
    phone: "+91 79 2687 1222",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: false }
  },

  // ================= KUTCH RESTAURANTS =================
  {
    id: "toran-white-rann-dining-kutch",
    name: "Toran White Rann Dining",
    destinationId: "kutch",
    destinationName: "Rann of Kutch",
    city: "Dhordo, Kutch",
    state: "Gujarat",
    country: "India",
    rating: 4.86,
    reviewsCount: 2340,
    badge: "Desert Rim Feast",
    tagline: "Authentic wood-smoked Kutchi Bajra Rotla and Ringna No Olo on the edge of the White Salt Desert",
    address: "Near White Rann Checkpost, Dhordo Village, Kutch, Gujarat 370510",
    nearLocation: "Dhordo White Desert checkpoint",
    distanceToLandmarks: [
      { landmark: "White Rann Desert", distance: "1.0 km" },
      { landmark: "Dhordo Tent City", distance: "1.2 km" }
    ],
    priceRange: "₹",
    costForTwo: 900,
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Traditional Kutchi", "Kathiyawadi", "Pure Vegetarian"],
    timing: "11:30 AM - 03:30 PM, 06:30 PM - 10:30 PM",
    description: "The primary culinary haven for White Desert travelers, serving piping hot, thick pearl millet rotlas smeared with fresh white butter, roasted brinjal mash, and garlic chutney under Kutchi textiles.",
    specialties: [
      "Kutchi Bajra Rotla with Fresh Makhan & Jaggery",
      "Ringna No Olo (Charcoal smoked spiced eggplant)",
      "Kutchi Kadhi & Moong Khichdi",
      "Kutchi Rabdi with Jalebi"
    ],
    features: ["White Desert View", "Traditional Low Cot Seating", "Pure Desi Ghee", "Folk Music"],
    seatingAreas: [
      { id: "desert_cot", name: "Desert Veranda Table", fee: 0, note: "Under traditional mirror-work canopy" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:00 PM", "08:30 PM"],
    coordinates: { lat: 23.7950, lng: 69.5150 },
    phone: "+91 2832 293 456",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "nilkanth-kathiyawadi-dhaba-kutch",
    name: "Nilkanth Kathiyawadi Dhaba",
    destinationId: "kutch",
    destinationName: "Rann of Kutch",
    city: "Bhuj, Kutch",
    state: "Gujarat",
    country: "India",
    rating: 4.84,
    reviewsCount: 3120,
    badge: "Bhuj Local Favorite",
    tagline: "Rustic highway dhaba famed for spicy Sev Tameta, Lasaniya Bataka, and smoked Chaas",
    address: "Bhuj-Mirzapar Highway, Near RTO Circle, Bhuj, Kutch 370001",
    nearLocation: "Bhuj Highway, RTO Circle",
    distanceToLandmarks: [
      { landmark: "Aina Mahal Bhuj", distance: "3.5 km" },
      { landmark: "Prag Mahal", distance: "3.6 km" }
    ],
    priceRange: "₹",
    costForTwo: 600,
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Spicy Kathiyawadi", "Gujarati Dhaba", "Pure Veg"],
    timing: "11:00 AM - 11:00 PM",
    description: "Famous throughout Kutch for fiery garlic potatoes, Sev Dungri, smoking hot bajra rotlas, and large steel glasses of cold salted cumin buttermilk.",
    specialties: [
      "Lasaniya Bataka (Fiery garlic spiced baby potatoes)",
      "Sev Tameta Nu Shaak",
      "Kaju Gathiya Curry",
      "Masala Smoked Chaas"
    ],
    features: ["Budget Friendly", "Generous Spicing", "Charpai Cot Seating", "Fast Highway Service"],
    seatingAreas: [
      { id: "dhaba_charpai", name: "Traditional Charpai Cot", fee: 0, note: "Open air dhaba cot" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:30 PM", "09:00 PM"],
    coordinates: { lat: 23.2420, lng: 69.6640 },
    phone: "+91 2832 254 789",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: false }
  },

  // ================= GIR NATIONAL PARK RESTAURANTS =================
  {
    id: "swadesh-farm-dining-gir",
    name: "Swadesh Farm Dining - Woods at Sasan",
    destinationId: "gir",
    destinationName: "Gir National Park",
    city: "Sasan Gir",
    state: "Gujarat",
    country: "India",
    rating: 4.93,
    reviewsCount: 1680,
    badge: "Organic Mango Orchard Dining",
    tagline: "Farm-to-table organic regional dining in a tranquil mango grove on the Gir forest edge",
    address: "Woods at Sasan, Sasan-Talala Road, Sasan Gir, Gujarat 362135",
    nearLocation: "Woods at Sasan Resort perimeter",
    distanceToLandmarks: [
      { landmark: "Sinh Sadan Safari Gate", distance: "3.2 km" },
      { landmark: "Hiran River", distance: "1.5 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1800,
    heroImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Farm-to-Table Organic", "Sattvic Gujarati", "Kathiyawadi Regional"],
    timing: "12:30 PM - 03:00 PM, 07:30 PM - 10:30 PM",
    description: "Nestled among ancient mango trees at the edge of the Asiatic lion sanctuary, Swadesh serves organic, slow-cooked regional Kathiyawadi cuisine using ingredients harvested directly from on-site permaculture farms.",
    specialties: [
      "Organic Farm Kathiyawadi Platter",
      "Smoked Baingan Bharta with Wood-Fired Rotlas",
      "Kesar Mango Kheer (Seasonal)",
      "Handmade Herbed Chaas"
    ],
    features: [
      "Mango Grove Outdoor Dining",
      "Permaculture Farm-to-Table Ingredients",
      "Jungle Forest Atmosphere",
      "Sustainable Biophilic Design"
    ],
    seatingAreas: [
      { id: "orchard_deck", name: "Mango Orchard Deck", fee: 0, note: "Under the shade of ancient mango trees" }
    ],
    timeSlots: ["01:00 PM", "07:30 PM", "08:45 PM"],
    coordinates: { lat: 21.1410, lng: 70.5780 },
    phone: "+91 2877 285 555",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "gir-pride-kathiyawadi-dhaba",
    name: "Gir Pride Kathiyawadi Dhaba",
    destinationId: "gir",
    destinationName: "Gir National Park",
    city: "Sasan Gir Village",
    state: "Gujarat",
    country: "India",
    rating: 4.82,
    reviewsCount: 2210,
    badge: "Safari Drivers' Recommendation",
    tagline: "Hearty, authentic Kathiyawadi thali after lion safaris with unlimited ghee and jaggery",
    address: "Near Railway Crossing, Sasan Gir Road, Sasan, Gujarat 362135",
    nearLocation: "Sasan Gir Railway Crossing",
    distanceToLandmarks: [
      { landmark: "Sinh Sadan Safari Complex", distance: "0.8 km" }
    ],
    priceRange: "₹",
    costForTwo: 550,
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Kathiyawadi Thali", "Pure Vegetarian Dhaba"],
    timing: "10:30 AM - 10:30 PM",
    description: "The favorite stop for safari travelers and forest rangers, offering endless hot bajra rotlas straight off the earthen tawa, spicy sev tameta, fresh onion salad, and buttermilk.",
    specialties: [
      "Unlimited Kathiyawadi Thali (with 4 subzis and rotla)",
      "Garlic Lasaniya Gathiya",
      "Moong Dal Khichdi with Pure Ghee",
      "Masala Chaas"
    ],
    features: ["Budget Friendly", "Unlimited Refills", "Quick Post-Safari Meals", "Rustic Village Charm"],
    seatingAreas: [
      { id: "dhaba_benches", name: "Dhaba Bench Table", fee: 0, note: "Casual seating" }
    ],
    timeSlots: ["11:30 AM", "01:00 PM", "07:30 PM", "09:00 PM"],
    coordinates: { lat: 21.1550, lng: 70.5720 },
    phone: "+91 94274 58210",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: false }
  },

  // ================= SAPUTARA RESTAURANTS =================
  {
    id: "blue-coriander-saputara",
    name: "Blue Coriander - Lords Inn",
    destinationId: "saputara",
    destinationName: "Saputara",
    city: "Saputara Hill",
    state: "Gujarat",
    country: "India",
    rating: 4.84,
    reviewsCount: 1820,
    badge: "Panoramic Hilltop Dining",
    tagline: "Fine multi-cuisine dining with picture-windows gazing across green Dang hill valleys",
    address: "Aakar Lords Inn, Surat-Nashik Highway, Saputara, Dang, Gujarat 394740",
    nearLocation: "Near Sunset Point, Saputara",
    distanceToLandmarks: [
      { landmark: "Saputara Lake", distance: "0.8 km" },
      { landmark: "Sunset Point", distance: "1.2 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1200,
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["North Indian", "Gujarati Specialties", "Continental", "Chinese"],
    timing: "07:00 AM - 10:30 PM",
    description: "Perched high on the hills of Saputara, Blue Coriander provides scenic valley dining, fresh mountain air, pure vegetarian delicacies, and lavish breakfast spreads.",
    specialties: [
      "Paneer Tikka Lababdar",
      "Special Gujarati Thali Platter",
      "Sizzling Veg Brownie with Ice Cream",
      "Hot Masala Chai with Pakoras"
    ],
    features: ["Valley Picture Windows", "Multi-Cuisine Buffet", "Pure Vegetarian", "Free Parking"],
    seatingAreas: [
      { id: "valley_window", name: "Valley View Window Table", fee: 0, note: "Panoramic views of Dang hills" }
    ],
    timeSlots: ["08:30 AM", "01:00 PM", "07:30 PM", "08:45 PM"],
    coordinates: { lat: 20.5780, lng: 73.7480 },
    phone: "+91 2631 237 000",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "purohit-gujarati-thali-saputara",
    name: "Purohit Gujarati Thali",
    destinationId: "saputara",
    destinationName: "Saputara",
    city: "Saputara Bazar",
    state: "Gujarat",
    country: "India",
    rating: 4.80,
    reviewsCount: 1650,
    badge: "Budget Lake Thali",
    tagline: "Homely Gujarati thali right near Saputara Lake with steaming phulkas and sweet dal",
    address: "Main Market, Near Boating Club, Saputara, Dang, Gujarat 394740",
    nearLocation: "Near Saputara Lake Boating",
    distanceToLandmarks: [
      { landmark: "Saputara Lake Boating", distance: "0.2 km" }
    ],
    priceRange: "₹",
    costForTwo: 500,
    heroImage: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Pure Vegetarian Gujarati Thali", "Family Dining"],
    timing: "11:00 AM - 03:30 PM, 06:30 PM - 10:30 PM",
    description: "Famous for unpretentious, comforting home-style Gujarati thalis served with freshly puffed rotis, sweet dal, kadhi, and crispy papad after an afternoon boating on the lake.",
    specialties: [
      "Unlimited Gujarati Family Thali",
      "Piping Hot Phulka Rotis",
      "Kadhi Khichdi with Papad",
      "Shrikhand"
    ],
    features: ["Budget Friendly", "Family Dining", "Walking Distance to Lake", "Fast Service"],
    seatingAreas: [
      { id: "market_table", name: "Family Dining Table", fee: 0, note: "Standard table" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:30 PM", "08:30 PM"],
    coordinates: { lat: 20.5820, lng: 73.7520 },
    phone: "+91 2631 237 456",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: false }
  }
];
