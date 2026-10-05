/**
 * Gujarat Destinations Hotels & Stays
 * Covering Ahmedabad, Rann of Kutch, Gir National Park, and Saputara.
 * Price range: ₹2,100 to ₹23,500
 */

export const GUJARAT_HOTELS = [
  // ================= AHMEDABAD HOTELS =================
  {
    id: "hyatt-regency-ahmedabad",
    name: "Hyatt Regency Ahmedabad",
    destinationId: "ahmedabad",
    destinationName: "Ahmedabad",
    city: "Ashram Road, Ahmedabad",
    state: "Gujarat",
    country: "India",
    category: "5-Star Luxury Riverfront",
    type: "Resort",
    rating: 4.92,
    reviewsCount: 3120,
    badge: "Sabarmati Riverfront View",
    tagline: "Contemporary 5-star sanctuary overlooking the picturesque Sabarmati Riverfront",
    address: "17/A, Ashram Rd, Usmanpura, Ahmedabad, Gujarat 380014",
    nearLocation: "Sabarmati Riverfront, Ashram Road",
    distanceToLandmarks: [
      { landmark: "Sabarmati Ashram", distance: "2.1 km" },
      { landmark: "Atal Pedestrian Bridge", distance: "3.2 km" },
      { landmark: "Adalaj Stepwell", distance: "14.0 km" }
    ],
    pricePerNight: 15800,
    originalPrice: 19500,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"],
    description: "Located on Central Ashram Road along the Sabarmati, Hyatt Regency features Italian dining at Tinello, open kitchen Pan-Asian dishes, scenic outdoor pool, and river-facing suites.",
    amenities: [
      "Outdoor Swimming Pool",
      "Tinello Italian Fine Dining",
      "Ariva Spa & 24/7 Fitness Center",
      "River Promenade Access",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "hyatt_river_deluxe",
        name: "Deluxe River View Room",
        price: 15800,
        size: "440 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        perks: ["Sabarmati River View", "Free Breakfast", "Deep Soaking Tub"]
      }
    ],
    coordinates: { lat: 23.0450, lng: 72.5710 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-house-of-mg-ahmedabad",
    name: "The House of MG - Heritage Mansion",
    destinationId: "ahmedabad",
    destinationName: "Ahmedabad",
    city: "Old City, Ahmedabad",
    state: "Gujarat",
    country: "India",
    category: "Heritage Boutique Mansion",
    type: "Haveli",
    rating: 4.90,
    reviewsCount: 2450,
    badge: "1924 Textile Magnate Mansion",
    tagline: "Century-old grand mansion with Agashiye rooftop Gujarati thali and heritage textile gallery",
    address: "Opp. Sidi Saiyyed Mosque, Gheekanta, Lal Darwaja, Ahmedabad 380001",
    nearLocation: "Opposite Sidi Saiyyed Mosque",
    distanceToLandmarks: [
      { landmark: "Sidi Saiyyed Mosque", distance: "0.05 km (Across the Street)" },
      { landmark: "Manek Chowk Night Market", distance: "1.2 km" },
      { landmark: "Sabarmati Riverfront", distance: "0.8 km" }
    ],
    pricePerNight: 11500,
    originalPrice: 14000,
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"],
    description: "Built in 1924, this aristocratic residence showcases ornate plasterwork, antique furniture, Lotus indoor pool, and world-renowned rooftop Gujarati dining at Agashiye.",
    amenities: [
      "Lotus Indoor Plunge Pool",
      "Agashiye Famous Rooftop Thali",
      "Heritage Textile Gallery",
      "Green House Courtyard Cafe",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "house_mg_grand_suite",
        name: "Heritage Grand Room",
        price: 11500,
        size: "460 sq.ft",
        bed: "Antique Rosewood King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard Balcony", "Traditional Gujarati Breakfast", "Handcrafted Cotton Linens"]
      }
    ],
    coordinates: { lat: 23.0280, lng: 72.5810 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "french-haveli-ahmedabad",
    name: "French Haveli - Heritage Pol Stay",
    destinationId: "ahmedabad",
    destinationName: "Ahmedabad",
    city: "Dhal ni Pol, Old Ahmedabad",
    state: "Gujarat",
    country: "India",
    category: "UNESCO Heritage Pol Haveli",
    type: "Haveli",
    rating: 4.84,
    reviewsCount: 1180,
    badge: "Walled City Pol Living",
    tagline: "150-year-old restored carved wooden haveli in UNESCO World Heritage Old Ahmedabad",
    address: "B/h Jain Temple, Dhal ni Pol, Astodia, Ahmedabad, Gujarat 380001",
    nearLocation: "Dhal ni Pol, Khadia",
    distanceToLandmarks: [
      { landmark: "Manek Chowk", distance: "0.6 km" },
      { landmark: "Jama Masjid Ahmedabad", distance: "0.8 km" }
    ],
    pricePerNight: 2800,
    originalPrice: 3800,
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"],
    description: "Experience authentic Pol life with intricately carved Burma teak pillars, central courtyard chowk, peaceful rooftop sit-out, and homemade Gujarati morning snacks.",
    amenities: [
      "Traditional Central Chowk Courtyard",
      "Rooftop Pol Terrace",
      "Authentic Gujarati Breakfast",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "french_haveli_room",
        name: "Standard Heritage Pol Room",
        price: 2800,
        size: "240 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
        perks: ["Carved Wooden Jali", "Free Breakfast", "Pol Walking Tour Access"]
      }
    ],
    coordinates: { lat: 23.0210, lng: 72.5890 },
    policies: { checkIn: "12:00 PM", checkOut: "10:30 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },

  // ================= KUTCH HOTELS =================
  {
    id: "tent-city-dhordo-kutch",
    name: "Tent City Dhordo - White Rann Luxury Resort",
    destinationId: "kutch",
    destinationName: "Rann of Kutch",
    city: "Dhordo, Kutch",
    state: "Gujarat",
    country: "India",
    category: "Luxury Desert Camp",
    type: "Resort",
    rating: 4.91,
    reviewsCount: 2890,
    badge: "Official White Rann Camp",
    tagline: "Luxury AC Swiss cottages on the rim of the Great White Salt Desert with full moon experiences",
    address: "Dhordo Village, Great Rann of Kutch, Bhuj, Gujarat 370510",
    nearLocation: "Dhordo White Desert entrance gate",
    distanceToLandmarks: [
      { landmark: "White Rann Salt Flats", distance: "1.5 km" },
      { landmark: "Kala Dungar (Black Hill)", distance: "45.0 km" },
      { landmark: "Bhuj City", distance: "82.0 km" }
    ],
    pricePerNight: 21500,
    originalPrice: 26000,
    heroImage: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "The crown jewel of Rann Utsav, Tent City Dhordo features luxurious air-conditioned Swiss tents, nightly Kutchi folk music and dance performances, camel cart rides, and all-inclusive Gujarati feasts.",
    amenities: [
      "All Meals Included (Buffet Breakfast, Lunch, Dinner)",
      "Cultural Amphitheatre & Folk Shows",
      "Golf Cart Transfers & Camel Cart Desert Rides",
      "Air Conditioning & Desert Heating",
      "Free Wi-Fi in Lounge"
    ],
    roomTypes: [
      {
        id: "tent_city_premium_ac",
        name: "Premium Air-Conditioned Swiss Tent",
        price: 21500,
        size: "420 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop",
        perks: ["All Meals Included", "Front Verandah", "Desert Shuttle Included"]
      }
    ],
    coordinates: { lat: 23.7910, lng: 69.5120 },
    policies: { checkIn: "12:30 PM", checkOut: "09:30 AM", cancellation: "Free cancellation up to 7 days", petsAllowed: false }
  },
  {
    id: "shaam-e-sarhad-kutch",
    name: "Shaam-e-Sarhad Village Resort",
    destinationId: "kutch",
    destinationName: "Rann of Kutch",
    city: "Hodka Village, Kutch",
    state: "Gujarat",
    country: "India",
    category: "Eco-Heritage Village Resort",
    type: "Boutique",
    rating: 4.88,
    reviewsCount: 1420,
    badge: "Traditional Mirror Bhungas",
    tagline: "Authentic circular mud Bhungas with mirror-work inlay and handcrafted Kutchi hospitality",
    address: "Hodka Village, Banni Grasslands, Kutch, Gujarat 370510",
    nearLocation: "Hodka Artisan Village",
    distanceToLandmarks: [
      { landmark: "White Rann Desert", distance: "18.0 km" },
      { landmark: "Hodka Leather & Textile Workshops", distance: "0.5 km" }
    ],
    pricePerNight: 5400,
    originalPrice: 6800,
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop"],
    description: "Endorsed by the UN Development Programme, Shaam-e-Sarhad is run entirely by local Hodka villagers, featuring traditional mud Bhunga dwellings with intricate Lippan mirror craft and starlit open-air music.",
    amenities: [
      "Open-Air Traditional Dining with Local Artisans",
      "Evening Folk Music Around Bonfire",
      "Craft Village Walking Tours",
      "Breakfast & Dinner Included"
    ],
    roomTypes: [
      {
        id: "hodka_mirror_bhunga",
        name: "Traditional Mirror-Work Mud Bhunga",
        price: 5400,
        size: "340 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
        perks: ["Authentic Lippan Mirror Art", "Breakfast & Dinner Included", "Attached Bathroom"]
      }
    ],
    coordinates: { lat: 23.6740, lng: 69.6720 },
    policies: { checkIn: "01:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },

  // ================= GIR NATIONAL PARK HOTELS =================
  {
    id: "woods-at-sasan-gir",
    name: "Woods at Sasan - Biophilic Jungle Resort",
    destinationId: "gir",
    destinationName: "Gir National Park",
    city: "Sasan Gir",
    state: "Gujarat",
    country: "India",
    category: "5-Star Eco-Jungle Luxury",
    type: "Resort",
    rating: 4.95,
    reviewsCount: 1720,
    badge: "Asia’s First Biophilic Retreat",
    tagline: "8-acre mango orchard eco-retreat on the perimeter of the Asiatic lion sanctuary",
    address: "Sasan-Talala Road, Sasan Gir, Gir Somnath, Gujarat 362135",
    nearLocation: "Sasan Gir Safari Perimeter",
    distanceToLandmarks: [
      { landmark: "Gir Safari Reception (Sinh Sadan)", distance: "3.2 km" },
      { landmark: "Devalia Safari Park", distance: "11.0 km" },
      { landmark: "Somnath Temple", distance: "44.0 km" }
    ],
    pricePerNight: 23500,
    originalPrice: 28000,
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Designed in harmony with nature among ancient mango trees, Woods at Sasan offers bioclimatic architecture, Som holistic wellness spa, forest safari vehicles, and organic Sattvic dining.",
    amenities: [
      "Sunken Orchard Swimming Pool",
      "Som Wellness Spa & Yoga Studio",
      "Swadesh Farm-to-Table Restaurant",
      "Gir Lion Safari Booking Desk",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "woods_studio_villa",
        name: "Woods Studio Orchard Villa",
        price: 23500,
        size: "620 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Garden Sit-Out", "Gourmet Breakfast Included", "Nature Walk with Naturalist"]
      }
    ],
    coordinates: { lat: 21.1410, lng: 70.5780 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-fern-gir-forest-resort",
    name: "The Fern Gir Forest Resort",
    destinationId: "gir",
    destinationName: "Gir National Park",
    city: "Sasan Gir",
    state: "Gujarat",
    country: "India",
    category: "5-Star Riverside Eco-Resort",
    type: "Resort",
    rating: 4.88,
    reviewsCount: 2180,
    badge: "Hiran Riverfront Setting",
    tagline: "Lush riverside cottages and luxury tents on the banks of River Hiran at Gir's doorstep",
    address: "Bhalchel, Haripur Road, Sasan Gir, Gujarat 362135",
    nearLocation: "Hiran Riverbank, Sasan Gir",
    distanceToLandmarks: [
      { landmark: "Sinh Sadan Safari Office", distance: "2.8 km" },
      { landmark: "Kamleshwar Dam", distance: "9.0 km" }
    ],
    pricePerNight: 11200,
    originalPrice: 14500,
    heroImage: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop"],
    description: "Spread over acres of verdant riverbank greenery, offering cozy forest cottages, swimming pool with forest canopy views, and organic farm meals.",
    amenities: [
      "Large Swimming Pool & Sun Loungers",
      "Banyan Tree Riverfront Dining",
      "Sohum Ayurvedic Spa",
      "Safari Naturalist Guided Walks",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "fern_cottage_room",
        name: "Fern River Forest Cottage",
        price: 11200,
        size: "420 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
        perks: ["Riverfront Deck", "Free Breakfast", "Eco Amenities"]
      }
    ],
    coordinates: { lat: 21.1520, lng: 70.5620 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },

  // ================= SAPUTARA HOTELS =================
  {
    id: "aakar-lords-inn-saputara",
    name: "Aakar Lords Inn Saputara",
    destinationId: "saputara",
    destinationName: "Saputara",
    city: "Saputara, Dang",
    state: "Gujarat",
    country: "India",
    category: "3-Star Hilltop Resort",
    type: "Resort",
    rating: 4.82,
    reviewsCount: 1640,
    badge: "Panoramic Dang Hill Views",
    tagline: "Hilltop modern resort overlooking green valleys, ropeway, and Saputara hills",
    address: "Surat-Nashik Highway, Saputara, Dang, Gujarat 394740",
    nearLocation: "Near Sunset Point & Saputara Lake",
    distanceToLandmarks: [
      { landmark: "Saputara Lake", distance: "0.8 km" },
      { landmark: "Sunset Point & Ropeway", distance: "1.2 km" },
      { landmark: "Gira Waterfalls", distance: "48.0 km" }
    ],
    pricePerNight: 7800,
    originalPrice: 9500,
    heroImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop"],
    description: "Gujarat's premier hill station resort featuring valley-view balconies, outdoor pool, Blue Coriander multi-cuisine restaurant, and children's amusement park.",
    amenities: [
      "Hill-Facing Swimming Pool",
      "Blue Coriander Multi-Cuisine Dining",
      "Gymnasium & Games Room",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "lords_valley_deluxe",
        name: "Valley View Deluxe Room",
        price: 7800,
        size: "320 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop",
        perks: ["Valley Balcony", "Free Breakfast", "Swimming Pool Access"]
      }
    ],
    coordinates: { lat: 20.5780, lng: 73.7480 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "savshanti-lake-resort-saputara",
    name: "Savshanti Lake Resort",
    destinationId: "saputara",
    destinationName: "Saputara",
    city: "Saputara Lake, Dang",
    state: "Gujarat",
    country: "India",
    category: "Lakefront Hill Stay",
    type: "Resort",
    rating: 4.80,
    reviewsCount: 1410,
    badge: "Direct Saputara Lakefront",
    tagline: "Charming cottages located directly on the tranquil banks of Saputara Lake",
    address: "Near Boating Club, Saputara Lake, Dang, Gujarat 394740",
    nearLocation: "Saputara Lake Boating Club",
    distanceToLandmarks: [
      { landmark: "Saputara Lake Boating", distance: "0.1 km" },
      { landmark: "Step Garden", distance: "0.6 km" }
    ],
    pricePerNight: 5400,
    originalPrice: 6900,
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"],
    description: "Watch pedal boats glide across the lake from your private veranda, with lush garden lawns, pure vegetarian dining, and direct lake garden access.",
    amenities: [
      "Lakeside Verandas & Lawns",
      "Pure Veg Restaurant (Gujarati & Punjabi)",
      "Children's Play Area",
      "Free Parking & Wi-Fi"
    ],
    roomTypes: [
      {
        id: "savshanti_lake_room",
        name: "Lake Facing Cottage Room",
        price: 5400,
        size: "300 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake View Veranda", "Free Breakfast", "Boating Access"]
      }
    ],
    coordinates: { lat: 20.5810, lng: 73.7510 },
    policies: { checkIn: "12:00 PM", checkOut: "10:30 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "shilpi-hill-resort-saputara",
    name: "Shilpi Hill Resort",
    destinationId: "saputara",
    destinationName: "Saputara",
    city: "Saputara, Dang",
    state: "Gujarat",
    country: "India",
    category: "Budget Hill Resort",
    type: "Resort",
    rating: 4.78,
    reviewsCount: 1120,
    badge: "Budget-Friendly Hill Perch",
    tagline: "Serene garden resort on forest hills with pool and warm hospitality",
    address: "Near Saputara Lake, Dang, Gujarat 394740",
    nearLocation: "Saputara Hill slope",
    distanceToLandmarks: [
      { landmark: "Saputara Museum", distance: "0.5 km" },
      { landmark: "Saputara Lake", distance: "0.9 km" }
    ],
    pricePerNight: 2500,
    originalPrice: 3400,
    heroImage: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1200&auto=format&fit=crop"],
    description: "Surrounded by Dang green forests, Shilpi Hill Resort offers comfortable air-conditioned rooms, swimming pool, indoor games, and home-style meals.",
    amenities: [
      "Swimming Pool",
      "Vegetarian Restaurant",
      "Lawn Sit-out",
      "Free Parking"
    ],
    roomTypes: [
      {
        id: "shilpi_std_room",
        name: "Standard Hill Room",
        price: 2500,
        size: "250 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop",
        perks: ["Hill View", "Air Conditioning", "Free Breakfast"]
      }
    ],
    coordinates: { lat: 20.5750, lng: 73.7460 },
    policies: { checkIn: "12:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
