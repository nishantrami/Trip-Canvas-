/**
 * Jaipur Hotels & Stays
 * Royal Rajputana palaces, restored heritage havelis, luxury forts, and colorful Pink City stays.
 * Price range: ₹2,400 to ₹28,500
 */

export const JAIPUR_HOTELS = [
  {
    id: "rambagh-palace-jaipur",
    name: "Rambagh Palace, Jaipur",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Royal Palace",
    type: "Palace",
    rating: 4.97,
    reviewsCount: 3890,
    badge: "The Jewel of Jaipur",
    tagline: "Former residence of the Maharaja of Jaipur with 47 acres of landscaped gardens",
    address: "Bhawani Singh Rd, Rambagh, Jaipur, Rajasthan 302005",
    nearLocation: "Near Central Jaipur & Birla Temple",
    distanceToLandmarks: [
      { landmark: "Hawa Mahal", distance: "4.5 km" },
      { landmark: "City Palace Jaipur", distance: "4.8 km" },
      { landmark: "Albert Hall Museum", distance: "2.6 km" }
    ],
    pricePerNight: 28500,
    originalPrice: 34500,
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Referred to as the 'Jewel of Jaipur', Rambagh Palace exudes lavish Rajput grandeur with ornate marble latticework, peacock-filled gardens, and royal dining.",
    amenities: [
      "Indoor Heated & Outdoor Pools",
      "Suvarna Mahal Royal Dining Room",
      "Polo Bar",
      "Jiva Grande Spa",
      "Heritage Walks & Peacock Gardens",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "rambagh_palace_room",
        name: "Palace Room",
        price: 28500,
        size: "550 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        perks: ["Garden View", "Maharaja Welcome", "Breakfast Included"]
      }
    ],
    coordinates: { lat: 26.8981, lng: 75.8078 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-oberoi-rajvilas-jaipur",
    name: "The Oberoi Rajvilas",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Ultra-Luxury",
    type: "Resort",
    rating: 4.96,
    reviewsCount: 3150,
    badge: "32-Acre Oasis Fort",
    tagline: "Regal fort-style resort with sunken marble baths and private reflection pools",
    address: "Babaji Ka Modh, Goner Rd, Jaipur, Rajasthan 302031",
    nearLocation: "Goner Road, East Jaipur",
    distanceToLandmarks: [
      { landmark: "Sisodia Rani Garden", distance: "4.0 km" },
      { landmark: "Hawa Mahal", distance: "9.5 km" }
    ],
    pricePerNight: 27000,
    originalPrice: 33000,
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Built around an 18th-century Shiva temple amidst flowering trees and decorative pools, Rajvilas evokes the royal lifestyle of the Rajputs with bespoke luxury.",
    amenities: [
      "Lotus Pond Swimming Pool",
      "Oberoi Spa in an 18th Century Haveli",
      "Surya Mahal Fine Dining",
      "Elephant Safari Experience",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "rajvilas_premier_room",
        name: "Premier Garden Room",
        price: 27000,
        size: "590 sq.ft",
        bed: "Four-Poster King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop",
        perks: ["Sunken Marble Bathtub", "Private Garden View", "Gourmet Breakfast"]
      }
    ],
    coordinates: { lat: 26.8640, lng: 75.8820 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "itc-rajputana-jaipur",
    name: "ITC Rajputana, A Luxury Collection Hotel",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Luxury Heritage",
    type: "Palace",
    rating: 4.88,
    reviewsCount: 2650,
    badge: "Red-Brick Royal Architecture",
    tagline: "Inspired by the royal havelis of Rajasthan with stepwells, long corridors, and courtyards",
    address: "Palace Road, Gopalbari, Jaipur, Rajasthan 302006",
    nearLocation: "Near Jaipur Railway Station & MI Road",
    distanceToLandmarks: [
      { landmark: "Jaipur Junction", distance: "0.5 km" },
      { landmark: "City Palace", distance: "3.8 km" }
    ],
    pricePerNight: 14500,
    originalPrice: 17500,
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"],
    description: "Evoking traditional Rajasthani royalty, ITC Rajputana features a striking courtyard pool, Peshawri fine dining, and Kaya Kalp spa.",
    amenities: [
      "Courtyard Swimming Pool",
      "Peshawri Specialty Northwest Frontier Dining",
      "Kaya Kalp Royal Spa",
      "Lobby Sheesh Mahal Lounge",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "itc_rajputana_executive",
        name: "Executive Club Room",
        price: 14500,
        size: "420 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard View", "Complimentary Breakfast", "Luxury Bath Amenities"]
      }
    ],
    coordinates: { lat: 26.9205, lng: 75.7925 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "samode-haveli-jaipur",
    name: "Samode Haveli - 175-Year Restored Mansion",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Old Pink City, Jaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Boutique Haveli",
    type: "Haveli",
    rating: 4.91,
    reviewsCount: 1980,
    badge: "Walled City Authentic Jewel",
    tagline: "Intimate heritage oasis with elephant ramps, frescoed dining rooms, and tranquil pool",
    address: "Near Jorawar Singh Gate, Gangapole, Jaipur, Rajasthan 302002",
    nearLocation: "Inside the Walled City, Gangapole",
    distanceToLandmarks: [
      { landmark: "Hawa Mahal", distance: "1.8 km" },
      { landmark: "City Palace", distance: "1.9 km" },
      { landmark: "Amer Fort", distance: "7.0 km" }
    ],
    pricePerNight: 11500,
    originalPrice: 14000,
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"],
    description: "Built over 175 years ago as the city residence of the rulers of Samode, this boutique sanctuary features courtyards, hand-painted floral murals, and a mosaic pool.",
    amenities: [
      "Courtyard Swimming Pool & Jacuzzi",
      "Hand-Painted Dining Room",
      "Ayurvedic Spa & Steam",
      "Peacock Garden Deck",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "samode_deluxe_haveli",
        name: "Deluxe Haveli Room",
        price: 11500,
        size: "380 sq.ft",
        bed: "Antique Rajput King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard Access", "Free Breakfast", "Traditional Rajasthani Decor"]
      }
    ],
    coordinates: { lat: 26.9380, lng: 75.8340 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "alsisar-haveli-jaipur",
    name: "Alsisar Haveli - Heritage Boutique Stay",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Haveli",
    type: "Haveli",
    rating: 4.86,
    reviewsCount: 1670,
    badge: "Classic Rajput Architecture",
    tagline: "Restored noble haveli with sunken swimming pool, jharokha alcoves, and lush lawns",
    address: "Sansar Chandra Rd, Jayanti Market, New Colony, Jaipur, Rajasthan 302001",
    nearLocation: "MI Road & Central Jaipur",
    distanceToLandmarks: [
      { landmark: "Hawa Mahal", distance: "2.4 km" },
      { landmark: "City Palace", distance: "2.5 km" }
    ],
    pricePerNight: 7500,
    originalPrice: 9500,
    heroImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop"],
    description: "An authentic noble family residence rebuilt in 1892, with carved stonework, arches, and a tranquil courtyard garden away from the bustle.",
    amenities: [
      "Sunken Swimming Pool",
      "Traditional Rajasthani Dining Room",
      "Roof Terrace",
      "Reading Lounge",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "alsisar_heritage_room",
        name: "Heritage Standard Room",
        price: 7500,
        size: "340 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        perks: ["Jharokha Seating", "Free Breakfast", "Courtyard Views"]
      }
    ],
    coordinates: { lat: 26.9240, lng: 75.8080 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "umaid-bhawan-heritage-jaipur",
    name: "Umaid Bhawan Heritage House Hotel",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Bani Park, Jaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Boutique",
    type: "Haveli",
    rating: 4.84,
    reviewsCount: 2110,
    badge: "Bani Park Heritage Favorite",
    tagline: "Vibrant frescoed walls, carved balconies, and rooftop restaurant with puppet shows",
    address: "D1-2A, Behari Marg, Behind Collectorate, Bani Park, Jaipur, Rajasthan 302016",
    nearLocation: "Bani Park, Central Jaipur",
    distanceToLandmarks: [
      { landmark: "Jaipur Railway Station", distance: "1.2 km" },
      { landmark: "City Palace", distance: "3.5 km" }
    ],
    pricePerNight: 4200,
    originalPrice: 5500,
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop"],
    description: "Famous for its intricate hand-painted murals and Rajasthani hospitality, with outdoor swimming pool and daily folk performances.",
    amenities: [
      "Courtyard Swimming Pool",
      "Rooftop Restaurant & Folk Dance",
      "Travel Assistance",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "umaid_royal_deluxe",
        name: "Royal Deluxe Room",
        price: 4200,
        size: "300 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
        perks: ["Frescoed Ceiling", "Free Breakfast", "Private Balcony"]
      }
    ],
    coordinates: { lat: 26.9290, lng: 75.7930 },
    policies: { checkIn: "12:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "zostel-jaipur",
    name: "Zostel Jaipur - Traveler Stays",
    destinationId: "jaipur",
    destinationName: "Jaipur",
    city: "Old City, Jaipur",
    state: "Rajasthan",
    country: "India",
    category: "Boutique Backpacker",
    type: "Boutique",
    rating: 4.86,
    reviewsCount: 3450,
    badge: "Close to Hawa Mahal",
    tagline: "Colorful artsy hostel with rooftop hangout space right near the Pink City gates",
    address: "First Floor, 85, Kishanpole Bazar Rd, Jaipur, Rajasthan 302001",
    nearLocation: "Kishanpole Bazar, Inside Pink City",
    distanceToLandmarks: [
      { landmark: "Hawa Mahal", distance: "0.8 km" },
      { landmark: "City Palace", distance: "0.7 km" },
      { landmark: "Jantar Mantar", distance: "0.9 km" }
    ],
    pricePerNight: 2400,
    originalPrice: 3100,
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"],
    description: "Located within the ancient Pink City, Zostel offers cozy air-conditioned private rooms, colorful common rooms, and guided walking bazaar tours.",
    amenities: [
      "Rooftop Cafe & Chill Zone",
      "Common Lounge with Board Games",
      "High-Speed Wi-Fi",
      "Luggage Storage & Lockers"
    ],
    roomTypes: [
      {
        id: "zostel_jaipur_private",
        name: "Standard Private Ensuite Room",
        price: 2400,
        size: "220 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        perks: ["Attached Bathroom", "Air Conditioning", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 26.9210, lng: 75.8210 },
    policies: { checkIn: "12:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
