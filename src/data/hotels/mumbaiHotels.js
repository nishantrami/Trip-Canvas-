/**
 * Mumbai Hotels & Stays
 * Arabian Sea luxury palaces, Marine Drive oceanfront rooms, Bandra boutique hotels, and South Mumbai heritage stays.
 * Price range: ₹3,200 to ₹29,500
 */

export const MUMBAI_HOTELS = [
  {
    id: "taj-mahal-palace-mumbai",
    name: "The Taj Mahal Palace, Mumbai",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Colaba, Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "5-Star Grand Heritage Palace",
    type: "Palace",
    rating: 4.97,
    reviewsCount: 5120,
    badge: "Icon of Indian Hospitality",
    tagline: "Colonial architectural masterpiece directly facing the Gateway of India and the Arabian Sea",
    address: "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001",
    nearLocation: "Gateway of India, Colaba",
    distanceToLandmarks: [
      { landmark: "Gateway of India", distance: "0.05 km (Direct View)" },
      { landmark: "Colaba Causeway", distance: "0.4 km" },
      { landmark: "Chhatrapati Shivaji Maharaj Terminus", distance: "2.8 km" }
    ],
    pricePerNight: 29500,
    originalPrice: 36000,
    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Built in 1903 by Jamsetji Tata, this legendary landmark combines Moorish, Oriental, and Florentine styles. Host to royalty and global icons, featuring 9 acclaimed restaurants and high tea on the sea promenade.",
    amenities: [
      "Landscaped Outdoor Pool & Terrace",
      "Jiva Spa with Traditional Therapies",
      "Wasabi by Morimoto Japanese Fine Dining",
      "Sea Lounge Harbor High Tea",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "taj_mumbai_tower_sea",
        name: "Superior City View Room",
        price: 29500,
        size: "420 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        perks: ["Colaba Street View", "Gourmet Breakfast Included", "Heritage Walk Access"]
      }
    ],
    coordinates: { lat: 18.9217, lng: 72.8332 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-oberoi-mumbai",
    name: "The Oberoi, Mumbai",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Nariman Point, Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "5-Star Ultra-Modern Luxury",
    type: "Resort",
    rating: 4.95,
    reviewsCount: 3840,
    badge: "Queen’s Necklace Ocean View",
    tagline: "Spectacular floor-to-ceiling Arabian Sea panoramas on Marine Drive's most prestigious corner",
    address: "Nariman Point, Marine Drive, Mumbai, Maharashtra 400021",
    nearLocation: "Nariman Point & Marine Drive Promenade",
    distanceToLandmarks: [
      { landmark: "Marine Drive Promenade", distance: "0.1 km" },
      { landmark: "Wankhede Stadium", distance: "1.8 km" },
      { landmark: "Gateway of India", distance: "2.4 km" }
    ],
    pricePerNight: 26000,
    originalPrice: 32000,
    heroImage: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Located at Nariman Point overlooking the sparkling curve of the Queen's Necklace, The Oberoi boasts a glass-walled atrium, Michelin-grade Italian and Indian dining, and 24-hour personalized butler services.",
    amenities: [
      "Heated Swimming Pool with Ocean Views",
      "Vetri Cucina Italian Fine Dining",
      "Ziya Contemporary Indian by Vineet Bhatia",
      "Oberoi Spa & 24/7 Butler",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "oberoi_deluxe_ocean",
        name: "Deluxe Ocean View Room",
        price: 26000,
        size: "460 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop",
        perks: ["Arabian Sea Floor-to-Ceiling Windows", "Free Breakfast", "Freestanding Soaking Tub"]
      }
    ],
    coordinates: { lat: 18.9270, lng: 72.8210 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "soho-house-mumbai",
    name: "Soho House Mumbai - Beachfront Club",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Juhu, Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "Luxury Bohemian Member Stay",
    type: "Boutique",
    rating: 4.91,
    reviewsCount: 1620,
    badge: "Juhu Beachfront Rooftop",
    tagline: "11-storey townhouse facing the Arabian Sea with rooftop pool, screening room, and Cecconi's dining",
    address: "16, Juhu Tara Rd, Chandrabai Nagar, Juhu, Mumbai, Maharashtra 400049",
    nearLocation: "Juhu Beach coastline",
    distanceToLandmarks: [
      { landmark: "Juhu Beach", distance: "0.1 km (Direct Beachfront)" },
      { landmark: "Prithvi Theatre", distance: "1.2 km" },
      { landmark: "Mumbai Chhatrapati Shivaji Airport", distance: "7.0 km" }
    ],
    pricePerNight: 18500,
    originalPrice: 23000,
    heroImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop"],
    description: "Soho House Mumbai features handcrafted bone-inlay furniture, Rajasthani block-printed fabrics, a breathtaking rooftop pool overlooking Juhu sunset, and Cecconi's modern Italian restaurant.",
    amenities: [
      "Rooftop Infinity Pool Overlooking Arabian Sea",
      "Cecconi’s Italian Restaurant",
      "Cowshed Spa & Steam Rooms",
      "Private Screening Cinema",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "soho_medium_sea",
        name: "Medium Sea View Bedroom",
        price: 18500,
        size: "390 sq.ft",
        bed: "Emperor King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop",
        perks: ["Arabian Sea View Balcony", "Artisan Mini Bar", "Cowshed Products"]
      }
    ],
    coordinates: { lat: 19.0980, lng: 72.8260 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "trident-bkc-mumbai",
    name: "Trident Bandra Kurla, Mumbai",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Bandra Kurla Complex (BKC)",
    state: "Maharashtra",
    country: "India",
    category: "5-Star Business Luxury",
    type: "Resort",
    rating: 4.88,
    reviewsCount: 3100,
    badge: "Heart of BKC Financial Hub",
    tagline: "Contemporary glass-and-stone luxury in the center of Mumbai's corporate district",
    address: "C 56, G Block BKC, Bandra Kurla Complex, Mumbai, Maharashtra 400098",
    nearLocation: "Bandra Kurla Complex (BKC)",
    distanceToLandmarks: [
      { landmark: "Jio World Garden & Drive", distance: "0.8 km" },
      { landmark: "Bandra Bandstand", distance: "6.5 km" },
      { landmark: "Mumbai Airport (BOM)", distance: "8.0 km" }
    ],
    pricePerNight: 13200,
    originalPrice: 16500,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"],
    description: "Centrally positioned in BKC with easy access to both North and South Mumbai, Trident features a striking outdoor infinity lap pool, Maya contemporary Indian cuisine, and Trident Spa.",
    amenities: [
      "Outdoor Heated Lap Pool",
      "Trident Spa & 24-Hour Fitness",
      "Maya Fine Dining Indian",
      "Botticino Italian Dining",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "trident_deluxe_room",
        name: "Deluxe Modern City Room",
        price: 13200,
        size: "380 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
        perks: ["City Skyline View", "Breakfast Included", "Pool Access"]
      }
    ],
    coordinates: { lat: 19.0680, lng: 72.8680 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "abode-bombay-colaba",
    name: "Abode Bombay - Vintage Boutique Hotel",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Colaba, Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "Vintage Heritage Boutique",
    type: "Boutique",
    rating: 4.87,
    reviewsCount: 1490,
    badge: "Colaba Heritage Secret",
    tagline: "Restored 1910 merchant house with vintage art deco tiles, roll-top baths, and cafe",
    address: "First Floor, Lansdowne House, M.B. Marg, Colaba, Mumbai 400001",
    nearLocation: "Behind Regal Cinema, Colaba",
    distanceToLandmarks: [
      { landmark: "Gateway of India", distance: "0.3 km" },
      { landmark: "Colaba Causeway", distance: "0.1 km" }
    ],
    pricePerNight: 7900,
    originalPrice: 9800,
    heroImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop"],
    description: "Mumbai's premier boutique hotel blends heritage Art Deco tilework, reclaimed colonial teak furniture, bespoke organic local breakfasts, and quiet sanctuary steps from Colaba Causeway.",
    amenities: [
      "Artisan Cafe & Library Lounge",
      "Organic Local Mumbai Breakfast",
      "Roll-Top Bathtubs in Select Rooms",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "abode_superior_luxury",
        name: "Superior Heritage Room",
        price: 7900,
        size: "320 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        perks: ["Original 1910 Encaustic Tiles", "Free Artisan Breakfast", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 18.9240, lng: 72.8310 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "residency-hotel-fort-mumbai",
    name: "Residency Hotel Fort",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Fort, South Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "Comfort Heritage Hotel",
    type: "Boutique",
    rating: 4.82,
    reviewsCount: 1840,
    badge: "Heritage Fort District",
    tagline: "Warm boutique stay walking distance from CSMT railway station and colonial architecture",
    address: "26, Rustom Sidhwa Marg, Fort, Mumbai, Maharashtra 400001",
    nearLocation: "Fort Heritage Precinct",
    distanceToLandmarks: [
      { landmark: "Chhatrapati Shivaji Terminus (CSMT)", distance: "0.5 km" },
      { landmark: "Marine Drive", distance: "1.8 km" }
    ],
    pricePerNight: 4800,
    originalPrice: 6200,
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"],
    description: "Located in the historic Fort area surrounded by Victorian Gothic buildings, providing crisp air-conditioned rooms, warm service, and a delightful daily breakfast.",
    amenities: [
      "In-House Dining Room",
      "Air Conditioning",
      "Concierge & Airport Cabs",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "residency_std_room",
        name: "Standard Double Room",
        price: 4800,
        size: "260 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        perks: ["Complimentary Breakfast", "City View", "Free Wi-Fi"]
      }
    ],
    coordinates: { lat: 18.9360, lng: 72.8350 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "zostel-mumbai",
    name: "Zostel Mumbai - Urban Backpacker Stay",
    destinationId: "mumbai",
    destinationName: "Mumbai",
    city: "Andheri East, Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "Urban Traveler Hub",
    type: "Boutique",
    rating: 4.85,
    reviewsCount: 3200,
    badge: "Close to Airport & Metro",
    tagline: "Lively Bollywood-themed social stay with rooftop cafe and co-working spaces",
    address: "Off Military Road, Marol, Andheri East, Mumbai, Maharashtra 400059",
    nearLocation: "Near Marol Naka Metro Station",
    distanceToLandmarks: [
      { landmark: "Mumbai International Airport", distance: "3.2 km" },
      { landmark: "Powai Lake", distance: "4.5 km" }
    ],
    pricePerNight: 3200,
    originalPrice: 4100,
    heroImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop"],
    description: "Filled with colorful Mumbai street-art murals and cinema nostalgia, offering private ensuite AC rooms, lively games terrace, and common cafe.",
    amenities: [
      "Rooftop Cafe & Screening Area",
      "Co-Working Desk & High-Speed Wi-Fi",
      "Common Kitchenette",
      "24/7 Front Desk"
    ],
    roomTypes: [
      {
        id: "zostel_mumbai_private",
        name: "Private Deluxe Ensuite Room",
        price: 3200,
        size: "240 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Bathroom", "Air Conditioning", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 19.1180, lng: 72.8870 },
    policies: { checkIn: "12:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
