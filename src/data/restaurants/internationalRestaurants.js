/**
 * International Destinations Dining & Restaurants
 * Covering Dubai, Bali, Paris, Singapore, London, and Tokyo.
 * All prices strictly calibrated between ₹850 and ₹2,900 for two.
 */

export const INTERNATIONAL_RESTAURANTS = [
  // ================= DUBAI RESTAURANTS =================
  {
    id: "al-ustad-special-kabab-dubai",
    name: "Al Ustad Special Kabab",
    destinationId: "dubai",
    destinationName: "Dubai",
    city: "Bur Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    rating: 4.93,
    reviewsCount: 7120,
    badge: "Since 1978 Dubai Legend",
    tagline: "Historic Old Dubai culinary pilgrimage spot famed for melt-in-mouth yogurt-marinated kebabs",
    address: "Near Al Fahidi Metro Station, Al Mankhool Rd, Bur Dubai, Dubai, UAE",
    nearLocation: "Al Fahidi Heritage District, Bur Dubai",
    distanceToLandmarks: [
      { landmark: "Al Fahidi Historical Neighborhood", distance: "0.4 km" },
      { landmark: "Dubai Museum", distance: "0.6 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1400,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Authentic Iranian", "Middle Eastern Grills", "Kebabs & Saffron Rice"],
    timing: "11:00 AM - 01:00 AM",
    description: "Visited by royalty and celebrities for nearly 50 years, Al Ustad's walls are lined with thousands of currency notes and photos. The star is tender mutton and chicken kebabs marinated for hours in creamy labneh and Persian spices.",
    specialties: [
      "Special Khas Mutton Kebab with Butter Saffron Rice",
      "Chicken Joujeh Kebab in Yogurt Marination",
      "Fresh Persian Flatbread with Mint & Feta",
      "Persian Black Tea with Saffron Rock Candy"
    ],
    features: ["Iconic Wall Currency Decor", "Late Night Dining", "Speedy Welcoming Service", "Central Heritage Location"],
    seatingAreas: [
      { id: "main_kebab_hall", name: "Heritage Dining Room", fee: 0, note: "Surrounded by historic photo walls" }
    ],
    timeSlots: ["01:00 PM", "07:30 PM", "09:00 PM", "11:00 PM"],
    coordinates: { lat: 25.2570, lng: 55.2970 },
    phone: "+971 4 397 1933",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "arabian-tea-house-dubai",
    name: "Arabian Tea House Cafe",
    destinationId: "dubai",
    destinationName: "Dubai",
    city: "Al Fahidi Historical District",
    state: "Dubai",
    country: "United Arab Emirates",
    rating: 4.90,
    reviewsCount: 5890,
    badge: "Old Dubai Courtyard Sanctuary",
    tagline: "Turquoise benches, white rattan chairs, and flowering bougainvillea in historic wind-tower quarter",
    address: "Bastakiya, Opposite Musalla Post Office, Al Fahidi St, Bur Dubai, Dubai, UAE",
    nearLocation: "Al Fahidi Historical Neighborhood (Bastakiya)",
    distanceToLandmarks: [
      { landmark: "Dubai Creek", distance: "0.3 km" },
      { landmark: "Al Fahidi Fort", distance: "0.2 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1800,
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Emirati Heritage Cuisine", "Middle Eastern Breakfast", "Specialty Teas"],
    timing: "07:00 AM - 11:00 PM",
    description: "Step into Old Dubai's past under the shade of an ancient leafy tree. Enjoy traditional Emirati breakfast trays with Balaleet, fresh warm bread, grilled halloumi, and fresh mint lemonade.",
    specialties: [
      "Traditional Emirati Breakfast Tray (Eggs, balaleet, beans, cheese)",
      "Machboos Deyay (Emirati spiced fragrant chicken rice)",
      "Arabic Mint Lemonade",
      "Special Karak & Moroccan Mint Tea"
    ],
    features: [
      "Historic Wind-Tower Courtyard",
      "Bougainvillea Canopy Seating",
      "Over 100 Varieties of Tea",
      "Near Dubai Creek Abra Boats"
    ],
    seatingAreas: [
      { id: "courtyard_tree", name: "Tree-Canopy Courtyard Table", fee: 0, note: "Under the central tree" }
    ],
    timeSlots: ["09:00 AM", "01:00 PM", "05:00 PM", "07:30 PM"],
    coordinates: { lat: 25.2630, lng: 55.3000 },
    phone: "+971 4 353 5071",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  },

  // ================= BALI RESTAURANTS =================
  {
    id: "bebek-bengil-ubud-bali",
    name: "Bebek Bengil (Dirty Duck Diner)",
    destinationId: "bali",
    destinationName: "Bali",
    city: "Ubud, Bali",
    state: "Bali",
    country: "Indonesia",
    category: "Balinese Heritage Dining",
    rating: 4.88,
    reviewsCount: 5210,
    badge: "Since 1990 Ubud Institution",
    tagline: "The birthplace of famous Balinese crispy duck served in private thatched pavilions among emerald rice fields",
    address: "Jl. Hanoman, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
    nearLocation: "Hanoman Street, near Ubud Monkey Forest",
    distanceToLandmarks: [
      { landmark: "Ubud Monkey Forest", distance: "0.5 km" },
      { landmark: "Ubud Royal Palace", distance: "1.2 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1800,
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Authentic Balinese", "Crispy Duck Specialty", "Indonesian"],
    timing: "10:00 AM - 10:30 PM",
    description: "Set on five acres of landscaped ponds, lotus gardens, and functioning rice paddies, Bebek Bengil is world-famous for its crispy duck marinated in Indonesian spices and steamed before being deep fried to golden perfection.",
    specialties: [
      "Bebek Bengil Crispy Half Duck with Balinese Sambals",
      "Nasi Campur Bali (Mixed rice platter)",
      "Sate Lilit (Minced fish satay on lemongrass skewers)",
      "Fresh Coconut Water & Tropical Gelato"
    ],
    features: [
      "Private Thatched Gazebos (Bale) in Rice Fields",
      "Lotus Pond Walkways",
      "Authentic Balinese Spice Pastes",
      "Cocktails & Bintang Beer"
    ],
    seatingAreas: [
      { id: "ricefield_bale", name: "Rice Field Thatched Bale", fee: 0, note: "Private wooden gazebo over water" }
    ],
    timeSlots: ["12:30 PM", "02:00 PM", "06:30 PM", "08:00 PM"],
    coordinates: { lat: -8.5180, lng: 115.2630 },
    phone: "+62 361 975489",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "la-lucciola-seminyak-bali",
    name: "La Lucciola",
    destinationId: "bali",
    destinationName: "Bali",
    city: "Seminyak, Bali",
    state: "Bali",
    country: "Indonesia",
    rating: 4.92,
    reviewsCount: 4120,
    badge: "Iconic Beachfront Thatch",
    tagline: "Two-level open-air thatched pavilion sitting right on the golden sunset sands of Seminyak Beach",
    address: "Pantai Petitenget, Jalan Kayu Aya, Kerobokan, Seminyak, Bali 80361",
    nearLocation: "Petitenget Beach, beside Petitenget Temple",
    distanceToLandmarks: [
      { landmark: "Petitenget Beach", distance: "0.01 km (Direct Beachfront)" },
      { landmark: "Seminyak Square", distance: "0.8 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2600,
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Modern Italian", "Mediterranean Seafood", "Cocktails & Brunch"],
    timing: "09:00 AM - 11:00 PM",
    description: "Known affectionately as 'La Loo', this open-sided bamboo and thatch pavilion looks out over rolling waves and palm lawns, serving handmade pastas, fresh seafood grills, and sunset Bellinis.",
    specialties: [
      "Linguini with Spiced Prawns and Calamari",
      "Crispy Skin Coral Trout with Salsa Verde",
      "Wood-Baked Fig Tart with Mascarpone",
      "Passionfruit Bellini Cocktail"
    ],
    features: [
      "Unobstructed Sunset Ocean Panoramas",
      "Open Ocean Breeze Atmosphere",
      "Famous Beachfront Sunday Brunch",
      "Wine Cellar Selection"
    ],
    seatingAreas: [
      { id: "beachfront_deck", name: "Upper Beachfront Deck", fee: 0, note: "Unmatched sunset ocean view" }
    ],
    timeSlots: ["12:30 PM", "05:30 PM (Sunset)", "07:30 PM", "09:00 PM"],
    coordinates: { lat: -8.6860, lng: 115.1520 },
    phone: "+62 361 730838",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Resort Casual", alcoholServed: true }
  },

  // ================= PARIS RESTAURANTS =================
  {
    id: "le-bouillon-chartier-paris",
    name: "Le Bouillon Chartier - Historic Brasserie",
    destinationId: "paris",
    destinationName: "Paris",
    city: "9th Arrondissement, Paris",
    state: "Île-de-France",
    country: "France",
    rating: 4.88,
    reviewsCount: 9450,
    badge: "1896 Belle Époque Monument",
    tagline: "Centuries of Parisian tradition with waiters writing bills directly on the paper tablecloth",
    address: "7 Rue du Faubourg Montmartre, 75009 Paris, France",
    nearLocation: "Grands Boulevards & Opéra",
    distanceToLandmarks: [
      { landmark: "Opéra Garnier", distance: "0.9 km" },
      { landmark: "Louvre Museum", distance: "1.4 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 2100,
    heroImage: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Traditional French Brasserie", "Classic Parisian Comfort"],
    timing: "11:30 AM - 12:00 AM (Non-stop service)",
    description: "Classified as a historic monument, Chartier was founded in 1896 to offer generous, authentic French meals at accessible prices. Glazed glass ceilings, brass luggage racks, and bustling black-and-white waistcoat waiters.",
    specialties: [
      "Escargots de Bourgogne (Garlic herb butter snails)",
      "Confit de Canard (Crispy duck leg with roasted potatoes)",
      "Steak Frites with Pepper Sauce",
      "Classic French Mousse au Chocolat"
    ],
    features: [
      "1896 Belle Époque Architecture",
      "Waiters Writing Bills on Paper Tablecloth",
      "Non-Stop All-Day Service",
      "Unrivaled Historic Parisian Value"
    ],
    seatingAreas: [
      { id: "main_brasserie", name: "Belle Époque Main Hall", fee: 0, note: "Under the high glass ceiling" }
    ],
    timeSlots: ["12:00 PM", "01:30 PM", "07:00 PM", "08:30 PM", "10:00 PM"],
    coordinates: { lat: 48.8715, lng: 2.3425 },
    phone: "+33 1 47 70 86 29",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "cafe-de-flore-paris",
    name: "Café de Flore",
    destinationId: "paris",
    destinationName: "Paris",
    city: "Saint-Germain-des-Prés, Paris",
    state: "Île-de-France",
    country: "France",
    rating: 4.89,
    reviewsCount: 8120,
    badge: "Since 1887 Literary Sanctuary",
    tagline: "Iconic Saint-Germain pavement terrace once frequented by Jean-Paul Sartre, Simone de Beauvoir & Picasso",
    address: "172 Boulevard Saint-Germain, 75006 Paris, France",
    nearLocation: "Boulevard Saint-Germain & Rue Saint-Benoît",
    distanceToLandmarks: [
      { landmark: "Saint-Germain Church", distance: "0.1 km" },
      { landmark: "Louvre Museum", distance: "0.9 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2400,
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Parisian Cafe", "French Bistro", "Wine & Patisserie"],
    timing: "07:30 AM - 01:30 AM",
    description: "The intellectual soul of Paris for over a century, Café de Flore's red mahogany booths and heated street terrace offer the ultimate people-watching, thick hot chocolate, and classic croque monsieur.",
    specialties: [
      "Famous Chocolat Chaud Spécial Flore (Thick hot chocolate in porcelain jug)",
      "Classic Croque Monsieur on Sourdough with Gruyère",
      "French Onion Soup Gratinée",
      "Fresh Tarte Tatin with Crème Fraîche"
    ],
    features: [
      "Iconic Saint-Germain Heated Terrace",
      "Celebrity & Literary History",
      "Red Mahogany & Art Deco Mirrors",
      "Open Early Morning till 1:30 AM"
    ],
    seatingAreas: [
      { id: "street_terrace", name: "Boulevard Street Terrace", fee: 0, note: "People-watching on Saint-Germain" }
    ],
    timeSlots: ["09:00 AM", "01:00 PM", "04:30 PM", "07:30 PM"],
    coordinates: { lat: 48.8540, lng: 2.3325 },
    phone: "+33 1 45 48 55 26",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Smart Casual", alcoholServed: true }
  },

  // ================= SINGAPORE RESTAURANTS =================
  {
    id: "jumbo-seafood-riverside-singapore",
    name: "Jumbo Seafood - Riverside Point",
    destinationId: "singapore",
    destinationName: "Singapore",
    city: "Clarke Quay, Singapore",
    state: "Central Region",
    country: "Singapore",
    rating: 4.93,
    reviewsCount: 8920,
    badge: "Award-Winning Chili Crab",
    tagline: "Singapore's definitive destination for fiery, sweet, egg-ribboned Singapore Chili Crab along the river",
    address: "30 Merchant Rd, #01-01/02 Riverside Point, Singapore 058282",
    nearLocation: "Clarke Quay Waterfront, Singapore River",
    distanceToLandmarks: [
      { landmark: "Clarke Quay Promenade", distance: "0.1 km" },
      { landmark: "Marina Bay Sands", distance: "1.8 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2800,
    heroImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Singapore Seafood", "Chili Crab Specialty", "Cantonese"],
    timing: "11:30 AM - 11:00 PM",
    description: "Located beside the flowing Singapore River at Clarke Quay, Jumbo Seafood has defined the Lion City's national dish since 1987. Live mud crabs wok-fried in rich chili tomato gravy, served with fried golden mantou buns.",
    specialties: [
      "Award-Winning Singapore Chili Mud Crab",
      "Golden Deep-Fried Mantou Buns (for dipping)",
      "Signature Black Pepper Crab",
      "Crispy Baby Squid in Sweet Honey Glaze"
    ],
    features: [
      "Singapore River Outdoor Promenade Tables",
      "Live Seafood Aquarium Tanks",
      "Iconic Jumbo Crab Bibs",
      "Air-Conditioned Riverfront Dining"
    ],
    seatingAreas: [
      { id: "riverfront_table", name: "River Promenade Table", fee: 0, note: "Right on Singapore River walkway" }
    ],
    timeSlots: ["12:00 PM", "01:30 PM", "06:30 PM", "08:15 PM", "09:30 PM"],
    coordinates: { lat: 1.2885, lng: 103.8440 },
    phone: "+65 6532 3435",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  },
  {
    id: "lau-pa-sat-satay-singapore",
    name: "Lau Pa Sat - Satay Street",
    destinationId: "singapore",
    destinationName: "Singapore",
    city: "Downtown Financial District",
    state: "Central Region",
    country: "Singapore",
    rating: 4.88,
    reviewsCount: 11200,
    badge: "Open-Air Charcoal Satay Stalls",
    tagline: "Boon Tat Street shuts down every evening for smoke-kissed charcoal satay under towering skyscrapers",
    address: "18 Raffles Quay, Lau Pa Sat Festival Market, Singapore 048582",
    nearLocation: "Raffles Place & Marina Bay Financial Centre",
    distanceToLandmarks: [
      { landmark: "Marina Bay Sands", distance: "1.0 km" },
      { landmark: "Telok Ayer MRT", distance: "0.2 km" }
    ],
    priceRange: "₹",
    costForTwo: 950,
    heroImage: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Singapore Hawker Street Food", "Charcoal Satay", "Local Drinks"],
    timing: "07:00 PM - 02:00 AM (Satay Street)",
    description: "Every evening at 7 PM, Boon Tat Street transforms into an open-air pedestrian barbecue haven. Charcoal grills flare as skewers of chicken, beef, mutton, and tiger prawns are flipped and served with warm spiced peanut sauce.",
    specialties: [
      "Mixed Charcoal Satay Platter (Chicken, beef & mutton skewers)",
      "BBQ Tiger Prawn Skewers",
      "Chunky Peanut Dip with Pineapple Puree",
      "Sugar Cane Juice with Lemon"
    ],
    features: [
      "1894 Victorian Cast-Iron Market Monument",
      "Open-Air Street Barbecue Atmosphere",
      "Late Night Dining till 2 AM",
      "Surrounded by Lit Skyscrapers"
    ],
    seatingAreas: [
      { id: "satay_street_table", name: "Open-Air Street Table", fee: 0, note: "Under the city lights" }
    ],
    timeSlots: ["07:30 PM", "08:30 PM", "10:00 PM", "11:30 PM"],
    coordinates: { lat: 1.2805, lng: 103.8505 },
    phone: "+65 6220 2138",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: true }
  },

  // ================= LONDON RESTAURANTS =================
  {
    id: "dishoom-covent-garden-london",
    name: "Dishoom Covent Garden",
    destinationId: "london",
    destinationName: "London",
    city: "Covent Garden, London",
    state: "Greater London",
    country: "United Kingdom",
    rating: 4.94,
    reviewsCount: 9850,
    badge: "Bombay Cafe in London",
    tagline: "Tribute to the old Irani cafes of Bombay with retro ceiling fans and world-famous Black Daal",
    address: "12 Upper St Martin's Ln, Covent Garden, London WC2H 9FB, UK",
    nearLocation: "Covent Garden & Leicester Square",
    distanceToLandmarks: [
      { landmark: "Covent Garden Market", distance: "0.3 km" },
      { landmark: "Leicester Square", distance: "0.2 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 2200,
    heroImage: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Bombay Irani Cafe", "Indian Street Food", "Cocktails & Breakfast"],
    timing: "08:00 AM - 11:00 PM",
    description: "London's most adored Indian dining experience, Dishoom recreates the lost romance of colonial Bombay's Irani cafes. Sepia family portraits, bentwood chairs, house black daal simmered for 24 hours, and bacon naan rolls.",
    specialties: [
      "Dishoom House Black Daal (Simmered for 24 hours)",
      "Famous Bacon & Egg Naan Roll with Cream Cheese",
      "Chicken Ruby Curry with Garlic Naan",
      "Chai & Viceroy's Old Fashioned Cocktail"
    ],
    features: [
      "Authentic Bombay Irani Decor",
      "Permit Room Cocktail Bar",
      "Famous Breakfast Naan Service",
      "Prime West End Theater Location"
    ],
    seatingAreas: [
      { id: "permit_room", name: "Main Cafe Dining Room", fee: 0, note: "Vintage cafe booth" }
    ],
    timeSlots: ["09:00 AM", "01:00 PM", "06:30 PM", "08:30 PM"],
    coordinates: { lat: 51.5125, lng: -0.1265 },
    phone: "+44 20 7420 9320",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  },
  {
    id: "rules-restaurant-london",
    name: "Rules Restaurant - Since 1798",
    destinationId: "london",
    destinationName: "London",
    city: "Covent Garden, London",
    state: "Greater London",
    country: "United Kingdom",
    rating: 4.92,
    reviewsCount: 4620,
    badge: "London’s Oldest Restaurant",
    tagline: "Serving traditional British roasts, game, and pies in Covent Garden since 1798",
    address: "34 Maiden Ln, Covent Garden, London WC2E 7LB, UK",
    nearLocation: "Maiden Lane, Covent Garden",
    distanceToLandmarks: [
      { landmark: "Covent Garden Piazza", distance: "0.2 km" },
      { landmark: "Trafalgar Square", distance: "0.4 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2900,
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Traditional British", "Game & Roasts", "Historic Cocktails"],
    timing: "12:00 PM - 11:00 PM",
    description: "Established in 1798, Rules is officially London's oldest restaurant. Patronized by Charles Dickens, H.G. Wells, and Laurence Olivier, it serves roast rib of beef, Yorkshire puddings, and winter game in velvet booths.",
    specialties: [
      "Rib of Aberdeenshire Beef with Yorkshire Pudding",
      "Steak & Kidney Pudding with Rich Gravy",
      "Roast Grouse with Bread Sauce (Seasonal)",
      "Traditional Sticky Toffee Pudding"
    ],
    features: [
      "225 Years of Unbroken London History",
      "Edwardian Antiques & Oil Paintings",
      "Upstairs Classic Cocktail Bar",
      "Red Velvet Heritage Booths"
    ],
    seatingAreas: [
      { id: "dickens_booth", name: "Dickens Heritage Booth", fee: 0, note: "Historical corner booth" }
    ],
    timeSlots: ["12:30 PM", "02:00 PM", "07:00 PM", "08:45 PM"],
    coordinates: { lat: 51.5110, lng: -0.1235 },
    phone: "+44 20 7836 5314",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  },

  // ================= TOKYO RESTAURANTS =================
  {
    id: "ichiran-ramen-shibuya-tokyo",
    name: "Ichiran Ramen Shibuya",
    destinationId: "tokyo",
    destinationName: "Tokyo",
    city: "Shibuya, Tokyo",
    state: "Kanto",
    country: "Japan",
    rating: 4.91,
    reviewsCount: 12500,
    badge: "World’s Top Tonkotsu Ramen",
    tagline: "Solo flavor concentration booths serving customizable rich pork bone broth ramen",
    address: "1-22-7 Jinnan, Iwamoto Building B1F, Shibuya City, Tokyo 150-0041, Japan",
    nearLocation: "Shibuya Crossing (3 min walk)",
    distanceToLandmarks: [
      { landmark: "Shibuya Crossing", distance: "0.2 km" },
      { landmark: "Hachiko Statue", distance: "0.3 km" }
    ],
    priceRange: "₹",
    costForTwo: 1200,
    heroImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Authentic Tonkotsu Ramen", "Japanese Noodles"],
    timing: "Open 24 Hours",
    description: "Famed worldwide for its 'Flavor Concentration Booths' where diners focus entirely on their bowl without distractions. Customize noodle firmness, garlic intensity, broth richness, and Ichiran's secret red spicy sauce.",
    specialties: [
      "Classic Natural Tonkotsu Ramen with Chashu Pork",
      "Soft-Boiled Seasoned Salt Egg (Onsen Tamago)",
      "Kaedama (Extra noodle refill)",
      "Matcha Almond Pudding"
    ],
    features: [
      "Individual Flavor Concentration Booths",
      "Vending Machine Ordering System",
      "Open 24/7 in Central Shibuya",
      "Customizable Broth & Noodle Texture"
    ],
    seatingAreas: [
      { id: "solo_booth", name: "Solo Concentration Booth", fee: 0, note: "Individual ramen cubicle" }
    ],
    timeSlots: ["12:00 PM", "02:00 PM", "07:00 PM", "09:30 PM", "11:30 PM"],
    coordinates: { lat: 35.6610, lng: 139.7005 },
    phone: "+81 3 3463 3501",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: true }
  },
  {
    id: "gonpachi-nishi-azabu-tokyo",
    name: "Gonpachi Nishi-Azabu (The 'Kill Bill' Restaurant)",
    destinationId: "tokyo",
    destinationName: "Tokyo",
    city: "Roppongi / Nishi-Azabu, Tokyo",
    state: "Kanto",
    country: "Japan",
    rating: 4.89,
    reviewsCount: 6850,
    badge: "Iconic Cinema Atmosphere",
    tagline: "The famous two-storey wooden izakaya that inspired Quentin Tarantino's Kill Bill fight scene",
    address: "1-13-11 Nishi-Azabu, Minato City, Tokyo 106-0031, Japan",
    nearLocation: "Nishi-Azabu intersection, near Roppongi Hills",
    distanceToLandmarks: [
      { landmark: "Roppongi Hills", distance: "0.8 km" },
      { landmark: "Mori Art Museum", distance: "0.9 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2800,
    heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Japanese Izakaya", "Charcoal Robatayaki", "Handmade Soba", "Sake"],
    timing: "11:30 AM - 03:30 AM",
    description: "Famous as the venue where President Bush was hosted by Prime Minister Koizumi, and the visual inspiration for Kill Bill. Featuring a central open-grill pit, hand-milled buckwheat soba noodles, and bubbling tempura.",
    specialties: [
      "Handmade Buckwheat Soba with Tempura",
      "Kurobuta Pork Belly Skewers with Yuzu Kosho",
      "Charcoal-Grilled Wagyu Beef Skewers",
      "Sake Flight Tasting Platter"
    ],
    features: [
      "Dramatic Two-Tiered Timber Izakaya Design",
      "Open Charcoal Robata Grill Center",
      "Extensive Japanese Sake & Whisky Collection",
      "Open Late Night until 3:30 AM"
    ],
    seatingAreas: [
      { id: "mezzanine_table", name: "Upper Mezzanine Balcony Table", fee: 0, note: "Looking down onto the open grill" },
      { id: "robata_counter", name: "Charcoal Robata Counter", fee: 0, note: "Watching chefs at work" }
    ],
    timeSlots: ["01:00 PM", "06:30 PM", "08:15 PM", "10:00 PM"],
    coordinates: { lat: 35.6600, lng: 139.7240 },
    phone: "+81 3 5771 0170",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  }
];
