/**
 * Master Curated Restaurants & Dining Dataset
 * Featuring iconic lakefront rooftop dining, heritage palace restaurants,
 * royal thali venues, and authentic cuisine spots with reservation slots, seating options, and menus.
 */

export const RESTAURANTS = [
  // ================= UDAIPUR RESTAURANTS =================
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
    address: "Amet Haveli, Ambamata Scheme - A Rd, Outside Chandpole, Udaipur, Rajasthan 313001",
    nearLocation: "Hanuman Ghat / Ambrai Ghat, right opposite City Palace",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.2 km across lake (Direct View)" },
      { landmark: "Ambrai Ghat", distance: "0.05 km" },
      { landmark: "Jagdish Temple", distance: "0.8 km" },
      { landmark: "Lake Pichola Boat Stand", distance: "0.9 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2400,
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Authentic Rajasthani", "North Indian", "Mughlai", "Mewari Specialty"],
    timing: "12:30 PM - 03:30 PM, 06:30 PM - 10:30 PM",
    description: "Ambrai is universally celebrated as Udaipur's most scenic dining location. Situated on the western bank of Lake Pichola at Amet Haveli, tables sit right at the water's edge offering an unobstructed fairy-tale view of City Palace and Taj Lake Palace shimmering in golden light.",
    specialties: [
      "Mewari Mutton Laal Maas (Smoked red chili gravy)",
      "Govind Gatta Curry",
      "Paneer Lababdar",
      "Jungli Maas with Roomali Roti",
      "Ambrai Special Kulfi"
    ],
    features: [
      "Water-Level Lakefront Deck",
      "Illuminated Palace Night View",
      "Romantic Candlelight Seating",
      "Full Bar & Signature Cocktails",
      "Live Instrumental Sitar at Sunset",
      "Valet Parking"
    ],
    seatingAreas: [
      { id: "lakefront_water_edge", name: "Lakeside Water-Edge Table", fee: 0, note: "Prime view of City Palace across water" },
      { id: "amet_heritage_courtyard", name: "Heritage Haveli Courtyard", fee: 0, note: "Spacious candlelit garden seating" },
      { id: "elevated_pavilion", name: "Elevated Rajput Pavilion", fee: 500, note: "Private raised canopy table" }
    ],
    timeSlots: [
      "12:30 PM", "01:30 PM", "02:30 PM",
      "06:30 PM (Sunset Slot)", "07:30 PM", "08:30 PM", "09:30 PM"
    ],
    coordinates: { lat: 24.5781, lng: 73.6806 },
    phone: "+91 294 243 1085",
    policies: {
      reservationDeposit: "Zero advance fee (Table held for 15 mins)",
      dressCode: "Smart Casual",
      alcoholServed: true
    }
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
    badge: "Top Rooftop Dining in India",
    tagline: "Panoramic open-air cabanas with birds-eye views of Pichola & Ghats",
    address: "Roof Top Hotel Lake Pichola, Outside Chandpole, Udaipur, Rajasthan 313001",
    nearLocation: "Roof Top of Hotel Lake Pichola, Hanuman Ghat",
    distanceToLandmarks: [
      { landmark: "Lake Pichola", distance: "0.1 km" },
      { landmark: "Bagore Ki Haveli", distance: "0.5 km" },
      { landmark: "City Palace", distance: "0.7 km" },
      { landmark: "Gangaur Ghat", distance: "0.6 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2800,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["North Indian", "Rajasthani Royal Cuisine", "Continental", "Cocktails"],
    timing: "06:30 PM - 11:00 PM",
    description: "Perched on the terrace of Hotel Lake Pichola, Upré offers informal open-sky luxury with plush private cabanas, lantern illumination, gentle lake breezes, and stellar Rajasthani culinary craftsmanship.",
    specialties: [
      "Rajasthani Dahi Baingan",
      "Handi Ghost (Slow cooked claypot mutton)",
      "Smoked Murgh Tikka Mirza Hasnu",
      "Dal Makhani Upré Special",
      "Kesar Phirni"
    ],
    features: [
      "Open-Sky Private Cabanas",
      "Rooftop City Palace Panorama",
      "Curated Wine & Craft Cocktail List",
      "Ambient Jazz & Folk Lounge Music",
      "Romantic Anniversary Setup"
    ],
    seatingAreas: [
      { id: "private_lakeview_cabana", name: "Private Lakeview Cabana", fee: 0, note: "Curtained romantic cabana overlooking lake" },
      { id: "rooftop_open_deck", name: "Rooftop Open Sky Deck", fee: 0, note: "Starry sky and cool breeze" }
    ],
    timeSlots: [
      "06:30 PM", "07:30 PM", "08:30 PM", "09:30 PM", "10:15 PM"
    ],
    coordinates: { lat: 24.5779, lng: 73.6812 },
    phone: "+91 91161 31559",
    policies: {
      reservationDeposit: "Complimentary reservation",
      dressCode: "Smart Casual",
      alcoholServed: true
    }
  },
  {
    id: "jagmandir-island-restaurant",
    name: "The Darikhana at Jagmandir Island Palace",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.96,
    reviewsCount: 2750,
    badge: "Exclusive Royal Island Dining",
    tagline: "Dine on a historic island palace in the middle of Lake Pichola",
    address: "Jagmandir Island, Lake Pichola, Udaipur, Rajasthan 313001",
    nearLocation: "Jagmandir Island (Accessible by boat jetty at City Palace)",
    distanceToLandmarks: [
      { landmark: "City Palace Jetty", distance: "1.2 km (Boat cruise)" },
      { landmark: "Taj Lake Palace", distance: "0.7 km across water" }
    ],
    priceRange: "₹₹₹₹",
    costForTwo: 4500,
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Royal Mewari", "Continental Haute Cuisine", "Fine Mughal"],
    timing: "10:00 AM - 10:30 PM",
    description: "The Darikhana is an exclusive colonnaded restaurant situated inside the 17th-century Jagmandir Island Palace. Guests take a scenic boat cruise across Lake Pichola to reach the palace island for an imperial feast under marble chhatris.",
    specialties: [
      "Royal Rajputana Thali",
      "Safed Maas (White cashew cardamom gravy)",
      "Charcoal Grilled Jumbo Prawns",
      "Gulab Jamun infused with Pistachio Liqueur"
    ],
    features: [
      "Boat Cruise Transfer Included with Dining",
      "Historical 17th-Century Island Setting",
      "Marble Courtyards & Sculpted Elephants",
      "World-Class Wine Cellar",
      "Live Royal Sitar Recital"
    ],
    seatingAreas: [
      { id: "colonnade_marble_terrace", name: "Marble Island Terrace", fee: 0, note: "Direct lakefront view with gentle waves" },
      { id: "royal_canopy_chhatri", name: "Royal Stone Chhatri Table", fee: 1000, note: "Under majestic carved Mewari pavilion" }
    ],
    timeSlots: [
      "12:30 PM", "01:30 PM", "06:30 PM", "07:30 PM", "08:45 PM"
    ],
    coordinates: { lat: 24.5678, lng: 73.6749 },
    phone: "+91 294 242 4186",
    policies: {
      reservationDeposit: "Includes boat access voucher",
      dressCode: "Elegant / Formal Casual",
      alcoholServed: true
    }
  },
  {
    id: "tribute-restaurant-udaipur",
    name: "Tribute Restaurant & Lake Cafe",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.87,
    reviewsCount: 2640,
    badge: "Fateh Sagar Lakeside Oasis",
    tagline: "Tribute to Chetak, Maharana Pratap's legendary horse, on Fateh Sagar bank",
    address: "89-B, Ambamata Temple Rd, Behind Monika Colony, Rang Sagar, Udaipur, Rajasthan 313001",
    nearLocation: "Fateh Sagar & Rang Sagar Lakefront",
    distanceToLandmarks: [
      { landmark: "Fateh Sagar Promenade", distance: "0.4 km" },
      { landmark: "Ambamata Temple", distance: "0.2 km" },
      { landmark: "Saheliyon Ki Bari", distance: "1.8 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1600,
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["North Indian", "Rajasthani", "Tandoori", "Continental"],
    timing: "11:30 AM - 11:00 PM",
    description: "Set right on the edge of Rang Sagar lake, Tribute is an equestrian-themed lakefront dining sanctuary paying homage to Chetak. Offering bird-watching views of migratory flamingos and pelicans during winter months.",
    specialties: [
      "Ker Sangri with Bajre Ki Roti",
      "Mutton Rogan Josh",
      "Stuffed Dum Aloo Banarasi",
      "Tandoori Fish Tikka",
      "Baked Gulab Jamun"
    ],
    features: [
      "Lakeside Bird Watching Views",
      "Garden & Waterfront Gazebos",
      "Family Friendly & Cozy Ambience",
      "Craft Mocktails & Coffee"
    ],
    seatingAreas: [
      { id: "waterfront_deck", name: "Waterfront Wooden Deck", fee: 0, note: "Lake breeze and bird watching" },
      { id: "aircon_heritage_lounge", name: "Heritage Indoor Dining Room", fee: 0, note: "Equestrian artifacts and AC comfort" }
    ],
    timeSlots: [
      "12:00 PM", "01:00 PM", "02:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
    ],
    coordinates: { lat: 24.5886, lng: 73.6765 },
    phone: "+91 294 243 2869",
    policies: {
      reservationDeposit: "Free booking",
      dressCode: "Casual",
      alcoholServed: true
    }
  },
  {
    id: "traditional-khana-udaipur",
    name: "Traditional Khana - Pure Veg Royal Thali",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.89,
    reviewsCount: 3120,
    badge: "Best Unlimited Rajasthani Thali",
    tagline: "Authentic unlimited 24-item royal Mewari & Marwari heritage thali",
    address: "Panchwati, Near Sukhadia Circle, Udaipur, Rajasthan 313001",
    nearLocation: "Near Sukhadia Circle & Saheliyon Ki Bari",
    distanceToLandmarks: [
      { landmark: "Sukhadia Circle", distance: "0.3 km" },
      { landmark: "Saheliyon Ki Bari", distance: "0.6 km" },
      { landmark: "Fateh Sagar Lake", distance: "1.2 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 900,
    heroImage: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Pure Vegetarian Rajasthani", "Mewari Thali", "Gujarati Specialties"],
    timing: "11:30 AM - 04:00 PM, 07:00 PM - 10:30 PM",
    description: "For the quintessential Rajasthani thali feast, Traditional Khana serves royal hospitality on traditional bronze and silver kansa platters with over 24 freshly made culinary delights with endless pure ghee.",
    specialties: [
      "Signature Dal Baati Churma (3 varieties of Churma)",
      "Gatte Ki Kadhi",
      "Pitor Ki Sabzi",
      "Kaju Draksh Khichdi",
      "Hot Malpua with Rabdi"
    ],
    features: [
      "100% Pure Vegetarian",
      "Unlimited Thali Refills with Warm Royal Hospitality",
      "Traditional Seating & High Tables",
      "Hygienic & Air Conditioned"
    ],
    seatingAreas: [
      { id: "thali_ac_hall", name: "Main Royal Dining Hall", fee: 0, note: "Air-conditioned family seating" },
      { id: "baithak_traditional", name: "Traditional Bajot Baithak Floor Seating", fee: 0, note: "Authentic cross-legged floor dining" }
    ],
    timeSlots: [
      "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
      "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
    ],
    coordinates: { lat: 24.6001, lng: 73.6934 },
    phone: "+91 97841 84444",
    policies: {
      reservationDeposit: "No booking charges",
      dressCode: "Casual",
      alcoholServed: false
    }
  },
  {
    id: "natraj-dining-hall-udaipur",
    name: "Natraj Dining Hall & Restaurant",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.88,
    reviewsCount: 6420,
    badge: "Iconic 60-Year Unlimited Thali",
    tagline: "Legendary unlimited thali loved by generations of food lovers since 1963",
    address: "New Bapu Bazar, Near City Railway Station, Udaipur, Rajasthan 313001",
    nearLocation: "Bapu Bazar & Railway Station, City Centre",
    distanceToLandmarks: [
      { landmark: "City Railway Station", distance: "0.5 km" },
      { landmark: "Bapu Bazar", distance: "0.1 km" },
      { landmark: "City Palace", distance: "2.1 km" }
    ],
    priceRange: "₹",
    costForTwo: 550,
    heroImage: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Authentic Rajasthani Thali", "Gujarati Thali", "Pure Vegetarian"],
    timing: "11:00 AM - 03:30 PM, 06:30 PM - 10:30 PM",
    description: "An institution in Udaipur dining since 1963, Natraj is revered for serving some of the freshest, most delicious unlimited Rajasthani and Gujarati thalis in northern India. Pure ghee rotis, piping hot Dal Baati Churma, sweet Gujarati kadhi, and warm Gulab Jamuns.",
    specialties: [
      "Unlimited Royal Rajasthani Thali (22 items)",
      "Traditional Dal Baati with Pure Desi Ghee",
      "Gujarati Sweet & Sour Kadhi",
      "Kaju Gatte Ki Sabzi",
      "Fresh Kesari Shrikhand"
    ],
    features: [
      "100% Pure Vegetarian",
      "Endless Unlimited Refills",
      "Super Fast Royal Service",
      "Family Friendly & Air Conditioned"
    ],
    seatingAreas: [
      { id: "main_thali_hall", name: "Main Air-Conditioned Thali Hall", fee: 0, note: "Bustling, welcoming family seating" }
    ],
    timeSlots: [
      "11:30 AM", "12:30 PM", "01:30 PM", "02:30 PM", "07:00 PM", "08:00 PM", "09:00 PM"
    ],
    coordinates: { lat: 24.5820, lng: 73.6980 },
    phone: "+91 294 241 4268",
    policies: {
      reservationDeposit: "Zero advance fee",
      dressCode: "Casual",
      alcoholServed: false
    }
  },
  {
    id: "jheels-ginger-coffee-udaipur",
    name: "Jheel's Ginger Coffee Bar & Bakery",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.92,
    reviewsCount: 5120,
    badge: "Water-Level Lakefront Cafe",
    tagline: "Sip artisan coffee with your feet nearly touching Lake Pichola's ripples",
    address: "56, Gangaur Ghat Marg, Opposite Bagore Ki Haveli, Udaipur, Rajasthan 313001",
    nearLocation: "Gangaur Ghat, direct water steps on Lake Pichola",
    distanceToLandmarks: [
      { landmark: "Gangaur Ghat", distance: "0.02 km (Direct Access)" },
      { landmark: "Bagore Ki Haveli", distance: "0.05 km" },
      { landmark: "City Palace", distance: "0.4 km" }
    ],
    priceRange: "₹",
    costForTwo: 650,
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Artisan Coffee", "Italian Woodfired Pizza", "Bakery & Desserts", "Breakfast"],
    timing: "08:00 AM - 10:30 PM",
    description: "Nestled right at the steps of Gangaur Ghat, Jheel's is Udaipur's most beloved waterfront cafe. Watch morning boaters and evening sunsets over Lake Pichola while savoring freshly roasted espresso, hot apple pies, wood-fired thin crust pizzas, and fresh croissants.",
    specialties: [
      "Signature Cinnamon Honey Cold Brew",
      "Woodfired Four-Cheese Lake Pizza",
      "Warm Nutella Brownie with Gelato",
      "Fresh Spinach & Corn Grilled Panini",
      "Banana Caramel French Toast"
    ],
    features: [
      "Lakeside Water-Edge Terrace",
      "Fresh In-House Artisan Bakery",
      "Spectacular Sunset Photo Point",
      "High-Speed Wi-Fi for Digital Nomads"
    ],
    seatingAreas: [
      { id: "waterfront_steps", name: "Waterfront Edge Low Seating", fee: 0, note: "Touching the water steps of Gangaur Ghat" },
      { id: "rooftop_cafe", name: "Upper Lakeview Terrace", fee: 0, note: "Elevated view of Taj Lake Palace" }
    ],
    timeSlots: [
      "08:30 AM", "10:30 AM", "12:30 PM", "03:30 PM", "05:30 PM (Sunset Slot)", "07:30 PM", "09:00 PM"
    ],
    coordinates: { lat: 24.5800, lng: 73.6820 },
    phone: "+91 94600 66669",
    policies: {
      reservationDeposit: "No fee",
      dressCode: "Casual",
      alcoholServed: false
    }
  },
  {
    id: "sun-and-moon-rooftop-udaipur",
    name: "Sun & Moon Rooftop Restaurant",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.81,
    reviewsCount: 2180,
    badge: "360° Lake & City Sunset",
    tagline: "Affordable rooftop dining with 360-degree views of City Palace and Lake Pichola",
    address: "Lal Ghat, Behind Jagdish Temple, Udaipur, Rajasthan 313001",
    nearLocation: "Lal Ghat, 100m from Jagdish Temple",
    distanceToLandmarks: [
      { landmark: "Jagdish Temple", distance: "0.1 km" },
      { landmark: "City Palace", distance: "0.3 km" },
      { landmark: "Lake Pichola", distance: "0.05 km" }
    ],
    priceRange: "₹",
    costForTwo: 750,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Rajasthani", "North Indian", "Continental", "Chinese"],
    timing: "10:00 AM - 11:00 PM",
    description: "Perched high on a traditional heritage rooftop in Lal Ghat, Sun & Moon offers unbelievable panoramic views across Lake Pichola, the City Palace, and Monsoon Palace at everyday budget prices. Popular for sunset drinks, thalis, and hearty sizzlers.",
    specialties: [
      "Mewari Dal Fry with Jeera Rice",
      "Paneer Tikka Butter Masala",
      "Cheese Garlic Naan with Gravy",
      "Vegetable Sizzler with Fries",
      "Special Masala Chai"
    ],
    features: [
      "Open-Sky 360-Degree Rooftop",
      "Illuminated Night City View",
      "Chill Music & Fairy Lights",
      "Pocket-Friendly Menu"
    ],
    seatingAreas: [
      { id: "top_deck_sun_moon", name: "Top Deck Sunset Tables", fee: 0, note: "Unobstructed view of City Palace" }
    ],
    timeSlots: [
      "12:00 PM", "01:30 PM", "05:30 PM", "07:00 PM", "08:30 PM", "10:00 PM"
    ],
    coordinates: { lat: 24.5790, lng: 73.6830 },
    phone: "+91 98292 21188",
    policies: {
      reservationDeposit: "No charges",
      dressCode: "Casual",
      alcoholServed: true
    }
  },
  {
    id: "millets-of-mewar-udaipur",
    name: "Millets of Mewar (Health & Royal Fusion)",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.89,
    reviewsCount: 3410,
    badge: "Pioneer of Organic Mewari Cuisine",
    tagline: "Wholesome millet rotis, cold-pressed oils, and royal herbal recipes",
    address: "Outside Chandpole, Hanuman Ghat, Udaipur, Rajasthan 313001",
    nearLocation: "Hanuman Ghat, near Foot Bridge",
    distanceToLandmarks: [
      { landmark: "Ambrai Ghat", distance: "0.2 km" },
      { landmark: "City Palace", distance: "0.7 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 850,
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Rajasthani Millet Specialties", "Organic & Healthy", "Vegan & Gluten-Free"],
    timing: "10:30 AM - 10:30 PM",
    description: "Udaipur's first dedicated healthy, organic and royal millet dining concept. Celebrating nutritious ancient grains like bajra, jowar, and ragi combined with traditional Mewari cooking methods and fresh farm-to-table vegetables.",
    specialties: [
      "Mewari Bajra Khichdi with Jaggery & White Butter",
      "Gluten-Free Dal Baati (Millet Baatis)",
      "Organic Jowar Roti with Ker Sangri",
      "Vegan Tofu & Spinach Tikka",
      "Fresh Beetroot Ginger Detox Cooler"
    ],
    features: [
      "Healthy & Organic Ingredients",
      "Vegan & Gluten-Free Friendly",
      "Eco-Friendly Decor & Clay Tableware",
      "Lake Breeze Courtyard"
    ],
    seatingAreas: [
      { id: "eco_courtyard", name: "Eco Courtyard", fee: 0, note: "Peaceful garden seating" }
    ],
    timeSlots: [
      "12:00 PM", "01:30 PM", "07:00 PM", "08:30 PM", "09:45 PM"
    ],
    coordinates: { lat: 24.5805, lng: 73.6795 },
    phone: "+91 80039 94093",
    policies: {
      reservationDeposit: "Free booking",
      dressCode: "Casual",
      alcoholServed: false
    }
  },
  {
    id: "charcoal-by-carlson-udaipur",
    name: "Charcoal by Carlson - Coal Grilled Rooftop",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.86,
    reviewsCount: 2840,
    badge: "Best Open Charcoal Grills",
    tagline: "Tender tandoori kebabs and smoky grills on a breezy Lal Ghat terrace",
    address: "12, Lal Ghat, Behind Jagdish Temple, Udaipur, Rajasthan 313001",
    nearLocation: "Lal Ghat, Lake Pichola",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.3 km" },
      { landmark: "Jagdish Temple", distance: "0.15 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1350,
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Coal Grilled BBQ", "Tandoori Specialties", "Rajasthani Skewers", "Cocktails"],
    timing: "05:30 PM - 11:00 PM",
    description: "Famous for authentic coal-fired skewers, slow-smoked tikkas, and sunset cocktails, Charcoal by Carlson sits on an open terrace with uninterrupted views of Lake Pichola. Watch the pitmasters grill live on burning coal skewers under starry skies.",
    specialties: [
      "Smoked Rajasthani Lamb Seekh Kebab",
      "Coal Grilled Bhatti Ka Murgh",
      "Stuffed Malai Soya Chaap",
      "Dal Charcoal Slow Simmered",
      "Grilled Pineapple with Cinnamon Honey"
    ],
    features: [
      "Live Open-Fire Charcoal Barbecue",
      "Rooftop Sunset Lounge",
      "Beer & Wine Bar",
      "Acoustic Evening Vibe"
    ],
    seatingAreas: [
      { id: "grill_deck", name: "Rooftop Grill Deck", fee: 0, note: "Front-row seats to live coal grills & lake" }
    ],
    timeSlots: [
      "06:00 PM", "07:15 PM", "08:30 PM", "09:45 PM", "10:30 PM"
    ],
    coordinates: { lat: 24.5788, lng: 73.6828 },
    phone: "+91 96024 44445",
    policies: {
      reservationDeposit: "Free booking",
      dressCode: "Smart Casual",
      alcoholServed: true
    }
  },
  {
    id: "khamma-ghani-restaurant-udaipur",
    name: "Khamma Ghani Restaurant",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.90,
    reviewsCount: 4210,
    badge: "Over-Water Floating Gazebos",
    tagline: "Private over-water gazebos on Rang Sagar with live folk instrumentals",
    address: "No. 53, Near Hotel Natural Lake View, Rang Sagar, Udaipur, Rajasthan 313001",
    nearLocation: "Rang Sagar Lakefront, 5 mins from Fateh Sagar",
    distanceToLandmarks: [
      { landmark: "Fateh Sagar Lake", distance: "0.8 km" },
      { landmark: "City Palace", distance: "2.5 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1500,
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Rajasthani Royal", "Mughlai", "Continental", "Barbeque"],
    timing: "11:00 AM - 11:00 PM",
    description: "Perched gracefully over the tranquil waters of Rang Sagar, Khamma Ghani offers open-air wooden gazebos surrounded by gentle ripples. Celebrated for rich Mewari mutton curries, succulent tandoori fish, and soulful live flute recitals at dusk.",
    specialties: [
      "Mewari Jungli Maas (Slow-cooked game meat)",
      "Murgh Malai Tikka with Mint Chutney",
      "Paneer Pasanda in Rich Cashew Gravy",
      "Chilli Garlic Butter Naan",
      "Matka Kulfi with Rose Syrup"
    ],
    features: [
      "Over-Water Private Gazebos",
      "Romantic Lantern & Candlelight Ambiance",
      "Live Sitar & Flute Evenings",
      "Full Service Bar"
    ],
    seatingAreas: [
      { id: "overwater_gazebo", name: "Over-Water Lake Gazebo", fee: 0, note: "Tables sitting directly over water" },
      { id: "garden_lawn", name: "Lakeside Garden Lawn", fee: 0, note: "Spacious open lawn for families" }
    ],
    timeSlots: [
      "12:30 PM", "02:00 PM", "06:30 PM", "07:45 PM", "09:00 PM", "10:15 PM"
    ],
    coordinates: { lat: 24.5875, lng: 73.6750 },
    phone: "+91 294 243 4343",
    policies: {
      reservationDeposit: "Zero advance fee",
      dressCode: "Casual",
      alcoholServed: true
    }
  },
  {
    id: "1559-ad-heritage-restaurant-udaipur",
    name: "1559 AD Heritage Restaurant",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.88,
    reviewsCount: 3670,
    badge: "Colonial Garden Dining",
    tagline: "Dine under candlelit banyan trees in a 16th-century colonial heritage villa",
    address: "Near PP Singhal Tower, Fateh Sagar Lake Rd, Udaipur, Rajasthan 313001",
    nearLocation: "Fateh Sagar Lake Road, near Saheliyon Ki Bari",
    distanceToLandmarks: [
      { landmark: "Fateh Sagar Lake", distance: "0.3 km" },
      { landmark: "Saheliyon Ki Bari", distance: "0.5 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 1800,
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Royal Rajputana", "Awadhi", "Continental", "Cocktails"],
    timing: "11:30 AM - 11:00 PM",
    description: "Named after the founding year of Udaipur by Maharana Udai Singh II, 1559 AD is housed in an elegant 16th-century heritage villa. Featuring lush garden dining under sprawling neem and banyan trees, an antique lounge bar, and candlelit live piano recitals.",
    specialties: [
      "Dhungar Maas (Smoked Rajasthani mutton)",
      "Methi Malai Murg",
      "Kofta-e-Chaman in Saffron Gravy",
      "Classic Rosemary Roast Chicken",
      "Royal Shahi Tukda with Rabdi"
    ],
    features: [
      "Heritage Colonial Garden Setting",
      "Live Grand Piano & Folk Music",
      "Signature Single Malt Collection",
      "Valet Parking"
    ],
    seatingAreas: [
      { id: "banyan_garden", name: "Candlelit Garden Lawn", fee: 0, note: "Under illuminated trees" },
      { id: "heritage_indoor_villa", name: "Colonial Dining Room", fee: 0, note: "Antique chandeliers and piano" }
    ],
    timeSlots: [
      "12:30 PM", "01:45 PM", "07:00 PM", "08:15 PM", "09:30 PM"
    ],
    coordinates: { lat: 24.5930, lng: 73.6780 },
    phone: "+91 294 243 5559",
    policies: {
      reservationDeposit: "Zero advance charge",
      dressCode: "Smart Casual",
      alcoholServed: true
    }
  },
  {
    id: "ozaa-rooftop-lake-pichola",
    name: "Ozaa - Mediterranean Rooftop at Lake Pichola",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.87,
    reviewsCount: 1950,
    badge: "Chic Mediterranean Rooftop",
    tagline: "Grilled mezze, woodfired flatbreads, and sundowners overlooking City Palace",
    address: "Outside Chandpole, Hanuman Ghat, Udaipur, Rajasthan 313001",
    nearLocation: "Hanuman Ghat, Lake Pichola",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.6 km across lake" },
      { landmark: "Ambrai Ghat", distance: "0.2 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2200,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Mediterranean", "Levantine Grills", "Craft Cocktails", "European"],
    timing: "06:00 PM - 11:30 PM",
    description: "An oasis of Mediterranean charm perched atop Lake Pichola. Ozaa pairs Aegean-inspired white decor and olive tones with vibrant grilled seafood, wood-fired flatbreads, hummus platters, and mixologist-crafted botanical cocktails.",
    specialties: [
      "Grilled Harissa Tiger Prawns",
      "Truffle Mushroom Pide Flatbread",
      "Lamb Kofta with Mint Labneh",
      "Classic Mezze Platter with Fresh Pita",
      "Pistachio Baklava with Fig Ice Cream"
    ],
    features: [
      "Sunset Cocktail Lounge",
      "Woodfired Oven On Display",
      "Curated International Wine Menu",
      "Panoramic Lake & Palace View"
    ],
    seatingAreas: [
      { id: "sunset_deck", name: "Front Lakeview Deck", fee: 0, note: "Sunset vista facing City Palace" }
    ],
    timeSlots: [
      "06:00 PM", "07:30 PM", "09:00 PM", "10:15 PM"
    ],
    coordinates: { lat: 24.5780, lng: 73.6810 },
    phone: "+91 98280 88812",
    policies: {
      reservationDeposit: "Complimentary reservation",
      dressCode: "Smart Casual",
      alcoholServed: true
    }
  },
  {
    id: "sheesh-mahal-leela-palace-udaipur",
    name: "Sheesh Mahal at The Leela Palace",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.97,
    reviewsCount: 2950,
    badge: "Ultra-Luxury Open-Air Palace Dining",
    tagline: "Two-level open-air royal dining under the stars directly facing illuminated palaces",
    address: "The Leela Palace, Lake Pichola, P.O. Box 125, Udaipur, Rajasthan 313001",
    nearLocation: "The Leela Palace, Lake Pichola (Access via royal boat)",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.8 km across lake (Direct View)" },
      { landmark: "Jagmandir Island", distance: "1.0 km" }
    ],
    priceRange: "₹₹₹₹",
    costForTwo: 5500,
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Royal Mewari Fine Dining", "Indian Haute Cuisine", "Signature Degustation"],
    timing: "07:00 PM - 11:00 PM",
    description: "Sheesh Mahal is one of the world's most glamorous open-air restaurants. Arrive via private royal boat to The Leela Palace and dine on a two-level terrace adorned with crystal lanterns and gentle lake breezes, enjoying authentic royal recipes once prepared in the Maharana's royal kitchens.",
    specialties: [
      "Sheesh Mahal Royal Shahi Thaal",
      "Mewari Safed Maas (Lamb in white almond gravy)",
      "Slow-Braised Nalli Nihari",
      "Lobster Panchmel in Saffron Coconut Curry",
      "Gold Leaf Kulfi with Saffron Honey"
    ],
    features: [
      "Scenic Lake Boat Transfer Included",
      "Crystal Chandelier & Candlelight Terrace",
      "Panoramic View of Illuminated Old City",
      "Sommelier-Curated Grand Cru Wine Pairing",
      "Live Instrumental Sitar Recital"
    ],
    seatingAreas: [
      { id: "upper_mirror_terrace", name: "Upper Open-Sky Terrace", fee: 0, note: "Unmatched panoramic view of City Palace" },
      { id: "private_canopy_booth", name: "Royal Silk Canopy Booth", fee: 1500, note: "Curtained romantic royal pavilion" }
    ],
    timeSlots: [
      "07:00 PM", "08:15 PM", "09:30 PM", "10:15 PM"
    ],
    coordinates: { lat: 24.5788, lng: 73.6769 },
    phone: "+91 294 670 1234",
    policies: {
      reservationDeposit: "Includes boat access voucher",
      dressCode: "Elegant / Formal",
      alcoholServed: true
    }
  },
  {
    id: "neel-kamal-taj-lake-palace-udaipur",
    name: "Neel Kamal at Taj Lake Palace",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.98,
    reviewsCount: 3120,
    badge: "Authentic Maharana Palace Recipes",
    tagline: "Ancient royal Mewari recipes cooked over traditional wood-fire inside Lake Palace",
    address: "Taj Lake Palace, Lake Pichola, Udaipur, Rajasthan 313001",
    nearLocation: "Inside Taj Lake Palace, center of Lake Pichola",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.4 km across water" },
      { landmark: "Jagmandir Island", distance: "0.6 km" }
    ],
    priceRange: "₹₹₹₹",
    costForTwo: 5200,
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Heritage Royal Mewari", "Indian Imperial Cuisine"],
    timing: "12:30 PM - 03:00 PM, 07:00 PM - 11:00 PM",
    description: "Located within the floating marble Taj Lake Palace, Neel Kamal is named after the blue lotus. It recreates the regal banquets of the royal House of Mewar with live wood-fire cooking, handcrafted cutlery, and classical sitar music.",
    specialties: [
      "Maharana Mewari Degustation Thali",
      "Authentic Lal Maas (Woodfire slow cooked)",
      "Murgh Tikka Mirza Hasnu",
      "Subz Panchmel Mewari",
      "Silver Leaf Rabdi with Baked Jamun"
    ],
    features: [
      "Private Motorboat Crossing from Rameshwar Ghat",
      "Live Classical Sitar & Sarangi Music",
      "Wood-Fire Open Kitchen Show",
      "Lilly Pond Courtyard Views"
    ],
    seatingAreas: [
      { id: "lily_pond_table", name: "Lily Pond Royal Table", fee: 0, note: "Facing inner palace marble courtyard" },
      { id: "window_lake_alcove", name: "Lake-Facing Marble Alcove", fee: 1000, note: "Water-level window directly over Pichola" }
    ],
    timeSlots: [
      "12:30 PM", "01:45 PM", "07:00 PM", "08:30 PM", "10:00 PM"
    ],
    coordinates: { lat: 24.5756, lng: 73.6800 },
    phone: "+91 294 246 0101",
    policies: {
      reservationDeposit: "Requires guest confirmation voucher",
      dressCode: "Smart Casual / Formal",
      alcoholServed: true
    }
  },

  // ================= GOA RESTAURANTS =================
  {
    id: "thalassa-goa",
    name: "Thalassa Greek Taverna",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Siolim, North Goa",
    state: "Goa",
    country: "India",
    rating: 4.90,
    reviewsCount: 5200,
    badge: "Iconic Goa Sunset Dining",
    tagline: "Greek Mediterranean cliffside taverna with live fire shows and sunset beats",
    address: "Plot No. 301, 1, Vaddy, Siolim, Goa 403517",
    nearLocation: "Siolim Waterfront, North Goa",
    distanceToLandmarks: [
      { landmark: "Vagator Beach", distance: "4.5 km" },
      { landmark: "Anjuna Beach", distance: "6.0 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2600,
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Greek", "Mediterranean", "Seafood", "Cocktails"],
    timing: "09:00 AM - 01:00 AM",
    description: "Thalassa offers pure Mediterranean elegance over Siolim's waters with white drapery, fresh seafood platters, souvlaki, sirtaki dance, and mesmerizing sunset views.",
    specialties: [
      "Fresh Grilled Red Snapper in Lemon Garlic",
      "Chicken Gyros with Tzatziki",
      "Spanakopita",
      "Watermelon Feta Salad"
    ],
    features: ["Sunset Waterfront Views", "Fire Shows & Live Dance", "Full Bar & DJs"],
    seatingAreas: [
      { id: "thalassa_sunset_deck", name: "Front Sunset Deck", fee: 0, note: "Prime riverfront sunset table" }
    ],
    timeSlots: ["01:00 PM", "05:30 PM (Sunset)", "08:00 PM", "10:00 PM"],
    coordinates: { lat: 15.6234, lng: 73.7654 },
    phone: "+91 98500 33537",
    policies: { reservationDeposit: "Free booking", dressCode: "Resort Chic", alcoholServed: true }
  },

  // ================= JAIPUR RESTAURANTS =================
  {
    id: "1135-ad-amer-jaipur",
    name: "1135 AD - Amer Fort",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    rating: 4.93,
    reviewsCount: 3100,
    badge: "Amer Fort Royal Fine Dining",
    tagline: "Dine inside the historic ramparts of Amer Fort like Rajput royalty",
    address: "Amer Fort, Amer, Jaipur, Rajasthan 302001",
    nearLocation: "Inside Amer Fort Complex",
    distanceToLandmarks: [
      { landmark: "Amer Fort Courtyard", distance: "0.1 km" },
      { landmark: "Jaigarh Fort", distance: "1.5 km" }
    ],
    priceRange: "₹₹₹₹",
    costForTwo: 3800,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Royal Rajputana", "Mughlai", "Awadhi"],
    timing: "12:00 PM - 10:30 PM",
    description: "Named after the founding year of the Kachwaha clan in Amer, this opulent restaurant is adorned with 24-karat gold leaf work, silver chairs, and crystal chandeliers within the fort's ancient battlements.",
    specialties: ["Lal Maas Amer Style", "Murgh Badam Pasanda", "Thaal 1135 AD Royal Platter"],
    features: ["Ancient Fort Setting", "Gold Leaf Murals & Silver Dining", "Live Sitar Performance"],
    seatingAreas: [
      { id: "diwan_e_khas", name: "Sheesh Mahal Inner Chamber", fee: 0, note: "Intricate mirror work room" }
    ],
    timeSlots: ["01:00 PM", "07:00 PM", "08:30 PM", "09:45 PM"],
    coordinates: { lat: 26.9855, lng: 75.8513 },
    phone: "+91 141 253 0798",
    policies: { reservationDeposit: "Free booking", dressCode: "Smart Casual", alcoholServed: true }
  }
];

export const RESTAURANT_CUISINE_FILTERS = [
  "Authentic Rajasthani",
  "North Indian",
  "Rooftop Dining",
  "Lakefront View",
  "Pure Vegetarian",
  "Royal Thali",
  "Seafood",
  "Continental"
];
