/**
 * Mumbai Dining & Restaurants
 * Butter garlic crab institutions, century-old Irani cafes, and Bandra celebrity seafood bistros.
 * Cost for two: ₹600 to ₹2,600
 */

export const MUMBAI_RESTAURANTS = [
  {
    id: "trishna-seafood-mumbai",
    name: "Trishna - Coastal Seafood Institution",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Fort, South Mumbai",
    state: "Maharashtra",
    country: "India",
    rating: 4.93,
    reviewsCount: 5410,
    badge: "World Famous Butter Garlic Crab",
    tagline: "Global culinary pilgrimage destination in Fort famed for Mumbai's best coastal crab and lobster",
    address: "7, Sai Baba Marg, Kala Ghoda, Fort, Mumbai, Maharashtra 400001",
    nearLocation: "Kala Ghoda Arts Precinct, Fort",
    distanceToLandmarks: [
      { landmark: "Kala Ghoda Art Precinct", distance: "0.2 km" },
      { landmark: "Gateway of India", distance: "1.2 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2400,
    heroImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Mangalorean Coastal", "Fresh Seafood", "North Indian"],
    timing: "12:00 PM - 03:30 PM, 06:30 PM - 12:00 AM",
    description: "Featured in the New York Times and Michelin guides as an indispensable Mumbai culinary experience, Trishna is celebrated for succulent mud crabs cooked in aromatic melted garlic butter with roomali roti.",
    specialties: [
      "Signature Butter Garlic Jumbo Mud Crab",
      "Koliwada Prawns with Mint Chutney",
      "Hyderabadi Fish Tikka",
      "Neer Dosa with Mangalorean Ghee Roast"
    ],
    features: [
      "Acclaimed Heritage Institution",
      "Fresh Crab Weighing Counter",
      "Air-Conditioned Comfort",
      "Full Cocktail Bar"
    ],
    seatingAreas: [
      { id: "main_dining", name: "Main Dining Hall", fee: 0, note: "Comfortable booth and table seating" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:30 PM", "08:45 PM", "09:45 PM"],
    coordinates: { lat: 18.9280, lng: 72.8320 },
    phone: "+91 22 2270 3262",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  },
  {
    id: "britannia-and-co-mumbai",
    name: "Britannia & Co. Restaurant",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Ballard Estate, South Mumbai",
    state: "Maharashtra",
    country: "India",
    rating: 4.88,
    reviewsCount: 4620,
    badge: "Since 1923 Parsi Legend",
    tagline: "Colonial Renaissance mansion serving legendary Berry Pulao and Sali Boti since 1923",
    address: "Wakefield House, 11, Sprott Rd, Ballard Estate, Fort, Mumbai 400001",
    nearLocation: "Ballard Estate Heritage Business District",
    distanceToLandmarks: [
      { landmark: "Chhatrapati Shivaji Maharaj Terminus", distance: "0.8 km" },
      { landmark: "Marine Drive", distance: "2.1 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1100,
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Authentic Parsi", "Irani", "Mughlai"],
    timing: "11:30 AM - 04:00 PM (Lunch Only, Closed Sundays)",
    description: "Stepping into Britannia is stepping back a century into Bombay's golden era. Bentwood chairs from Poland, portrait of Queen Elizabeth, and the Kohinoor family's secret recipe for Iranian barberry rice.",
    specialties: [
      "Mutton Berry Pulao with Imported Iranian Zereshk Berries",
      "Sali Boti (Tender mutton with matchstick potato crisps)",
      "Patra Ni Machhi (Steamed fish in coconut chutney)",
      "Caramel Custard"
    ],
    features: ["1923 Heritage Setting", "Ballard Estate Colonial Street", "Iconic Parsi Hospitality", "Lunch Institution"],
    seatingAreas: [
      { id: "heritage_hall", name: "Classic Dining Room", fee: 0, note: "Under vintage ceiling fans" }
    ],
    timeSlots: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
    coordinates: { lat: 18.9340, lng: 72.8410 },
    phone: "+91 22 2261 5264",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "cafe-mondegar-colaba-mumbai",
    name: "Cafe Mondegar (Mondy's)",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Colaba, Mumbai",
    state: "Maharashtra",
    country: "India",
    rating: 4.86,
    reviewsCount: 6890,
    badge: "Mario Miranda Murals & Jukebox",
    tagline: "India's first cafe with a vintage jukebox and iconic cartoon murals by cartoonist Mario Miranda",
    address: "5A, Metro House, Shahid Bhagat Singh Rd, Colaba, Mumbai 400001",
    nearLocation: "Colaba Causeway entrance, near Regal Cinema",
    distanceToLandmarks: [
      { landmark: "Gateway of India", distance: "0.4 km" },
      { landmark: "Colaba Causeway Market", distance: "0.05 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1200,
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Continental", "Parsi Cafe Snacks", "Italian Pasta", "Beer & Cocktails"],
    timing: "07:30 AM - 11:30 PM",
    description: "Since 1932, 'Mondy's' has been Bombay's bohemian soul. Sip ice-cold draft beer beneath full-wall murals portraying the crazy characters of Bombay life, while classic rock spins on the jukebox.",
    specialties: [
      "Chicken Chilli Cheese Toast",
      "Bacon Wrapped Prawns",
      "Steak with Mushroom Pepper Sauce",
      "Draft Beer Pitchers with Masala Peanuts"
    ],
    features: [
      "Original Mario Miranda Cartoon Murals",
      "Operating Classic Rock Jukebox",
      "Chilled Draught Beer",
      "Historic Colaba Causeway Atmosphere"
    ],
    seatingAreas: [
      { id: "mondegar_booth", name: "Mural Wall Booth", fee: 0, note: "Beside Mario Miranda cartoons" }
    ],
    timeSlots: ["01:00 PM", "04:30 PM", "07:30 PM", "09:30 PM"],
    coordinates: { lat: 18.9245, lng: 72.8315 },
    phone: "+91 22 2202 0591",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "bastian-bandra-mumbai",
    name: "Bastian Bandra",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Bandra West, Mumbai",
    state: "Maharashtra",
    country: "India",
    rating: 4.90,
    reviewsCount: 3820,
    badge: "Bandra Celebrity Hotspot",
    tagline: "Chic contemporary seafood and decadent Sunday brunch favorite in trendy Bandra West",
    address: "Kamal Building, B/1, New Linking Rd, Bandra West, Mumbai 400050",
    nearLocation: "Linking Road, Bandra West",
    distanceToLandmarks: [
      { landmark: "Bandra Bandstand", distance: "2.1 km" },
      { landmark: "Carter Road Promenade", distance: "1.8 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2600,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Modern Seafood", "Pan-Asian", "Gourmet Brunch", "Craft Cocktails"],
    timing: "12:00 PM - 04:30 PM, 07:00 PM - 01:00 AM",
    description: "Mumbai's ultimate celebrity hangout in Bandra, Bastian serves gourmet lobster rolls, crispy soft-shell crabs, decadent cheesecakes, and creative craft cocktails in a stylish bohemian interior.",
    specialties: [
      "Butter Garlic Lobster Roll with Fries",
      "Crispy Korean Fried Chicken Bao",
      "Mud Crab in Black Pepper Sauce",
      "Famous Lotus Biscoff Cheesecake"
    ],
    features: [
      "Celebrity Sighting Atmosphere",
      "Legendary Sunday Brunch",
      "Artisan Mixology Cocktails",
      "Lively Evening DJ Sessions"
    ],
    seatingAreas: [
      { id: "bastian_main_hall", name: "Main Dining Lounge", fee: 0, note: "Vibrant dining area" }
    ],
    timeSlots: ["12:30 PM", "02:00 PM", "08:00 PM", "10:00 PM"],
    coordinates: { lat: 19.0620, lng: 72.8340 },
    phone: "+91 84199 65953",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  },
  {
    id: "kyani-and-co-mumbai",
    name: "Kyani & Co. - Heritage Irani Bakery",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Marine Lines, Mumbai",
    state: "Maharashtra",
    country: "India",
    rating: 4.85,
    reviewsCount: 5950,
    badge: "Since 1904 Irani Chai",
    tagline: "Mumbai's oldest surviving Irani cafe with red check tablecloths, Bun Maska, and Kheema Pav",
    address: "Jermahal Estate, 657, JSS Rd, Marine Lines, Mumbai, Maharashtra 400002",
    nearLocation: "Opposite Metro Cinema, Marine Lines",
    distanceToLandmarks: [
      { landmark: "Marine Drive Queen's Necklace", distance: "0.8 km" },
      { landmark: "Chhatrapati Shivaji Maharaj Terminus", distance: "1.2 km" }
    ],
    priceRange: "₹",
    costForTwo: 600,
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Irani Cafe", "Parsi Bakery", "Breakfast & Chai"],
    timing: "07:00 AM - 08:30 PM",
    description: "Serving Mumbaikars for over 120 years, Kyani's features antique mirrors, wooden wainscoting, marble-topped tables, and signature sweet Irani chai with crusty bun maska dipped into hot tea.",
    specialties: [
      "Bun Maska dipped in Irani Chai",
      "Spicy Mutton Kheema Ghotala with Pav",
      "Chicken Cheese Pattice",
      "Mawa Cake & Cream Rolls"
    ],
    features: [
      "120-Year-Old Irani Cafe Heritage",
      "Traditional Parsi Bakery Display",
      "Incredible Pocket-Friendly Value",
      "Marine Lines Landmark"
    ],
    seatingAreas: [
      { id: "marble_table", name: "Marble-Topped Round Table", fee: 0, note: "Under high colonial ceilings" }
    ],
    timeSlots: ["08:00 AM", "10:30 AM", "01:00 PM", "05:00 PM"],
    coordinates: { lat: 18.9430, lng: 72.8280 },
    phone: "+91 22 2201 1492",
    policies: { reservationDeposit: "Walk-in Friendly", dressCode: "Casual", alcoholServed: false }
  }
];
