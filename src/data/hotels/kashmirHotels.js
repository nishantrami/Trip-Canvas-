/**
 * Kashmir Hotels & Stays
 * Carved cedarwood houseboats on Dal Lake, Gulmarg ski chalets, and Lidder river resorts in Pahalgam.
 * Price range: ₹2,500 to ₹28,000
 */

export const KASHMIR_HOTELS = [
  {
    id: "the-khyber-resort-gulmarg",
    name: "The Khyber Himalayan Resort & Spa",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Gulmarg",
    state: "Jammu and Kashmir",
    country: "India",
    category: "5-Star Luxury Ski Resort",
    type: "Resort",
    rating: 4.96,
    reviewsCount: 2950,
    badge: "World’s Top Ski Hotel",
    tagline: "Nestled amidst pristine pine forests with panoramic views of the snow-clad Pir Panjal range",
    address: "Hotel Khyber, Gulmarg, Jammu and Kashmir 193403",
    nearLocation: "Walking distance from Gulmarg Gondola",
    distanceToLandmarks: [
      { landmark: "Gulmarg Gondola (Phase 1)", distance: "0.3 km" },
      { landmark: "Gulmarg Golf Course", distance: "1.2 km" },
      { landmark: "Srinagar Airport", distance: "56.0 km" }
    ],
    pricePerNight: 28000,
    originalPrice: 34000,
    heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Spread over 7 acres of coniferous forest in Gulmarg, The Khyber is a cedar-clad luxury ski resort featuring floor-to-ceiling glass windows, heated indoor pools, and authentic Kashmiri wazwan.",
    amenities: [
      "Heated Indoor Glass Swimming Pool",
      "L’Occitane Spa with Pine Views",
      "Cloves Fine Dining Wazwan Restaurant",
      "Ski Storage & Equipment Rental",
      "Chaikash Tea Lounge",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "khyber_premier_pine",
        name: "Premier Pine View Room",
        price: 28000,
        size: "480 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop",
        perks: ["Snow Peak & Pine Views", "Underfloor Heating", "Gourmet Kashmiri Breakfast"]
      }
    ],
    coordinates: { lat: 34.0484, lng: 74.3805 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 7 days", petsAllowed: false }
  },
  {
    id: "sukoon-luxury-houseboat-srinagar",
    name: "Sukoon Luxury Houseboat",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Dal Lake, Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
    category: "Heritage Eco-Luxury Houseboat",
    type: "Houseboat",
    rating: 4.94,
    reviewsCount: 1680,
    badge: "Eco-Luxury on Dal Lake",
    tagline: "Handcrafted fragrant cedarwood houseboat with sundeck overlooking Lotus beds & Shankaracharya Hill",
    address: "Ghat No. 21, Kabutar Khana, Dal Lake, Srinagar, J&K 190001",
    nearLocation: "Dal Lake, Accessible by private shikara",
    distanceToLandmarks: [
      { landmark: "Boulevard Road Ghat", distance: "0.4 km (by shikara)" },
      { landmark: "Mughal Gardens (Nishat Bagh)", distance: "3.2 km" },
      { landmark: "Hazratbal Shrine", distance: "4.5 km" }
    ],
    pricePerNight: 18500,
    originalPrice: 22000,
    heroImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562670652-e5947bddb335?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Sukoon is Kashmir's first eco-certified luxury houseboat. Built with carved deodar wood, it offers bespoke Kashmiri silk furnishings, sunset rooftop kahwa tea, and private shikara lake tours.",
    amenities: [
      "Private Shikara Lake Transfers",
      "Rooftop Viewing Deck with Daybeds",
      "Traditional Kashmiri Kahwa & Wazwan",
      "Underfloor Heating",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "sukoon_heritage_suite",
        name: "Heritage Cedar Suite",
        price: 18500,
        size: "420 sq.ft",
        bed: "Carved Walnut King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake-facing Jharokha", "Complimentary Shikara Sunset Ride", "Breakfast Included"]
      }
    ],
    coordinates: { lat: 34.0920, lng: 74.8450 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "vivanta-dal-view-srinagar",
    name: "Vivanta Dal View Srinagar",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
    category: "5-Star Hilltop Luxury",
    type: "Resort",
    rating: 4.89,
    reviewsCount: 2210,
    badge: "Hilltop Panorama of Dal",
    tagline: "Perched on Kralsangri hill with 180-degree amphitheater views of Dal Lake and Zabarwan range",
    address: "Kralsangri, Brein, Srinagar, Jammu and Kashmir 191121",
    nearLocation: "Kralsangri Hill, East Dal Lake",
    distanceToLandmarks: [
      { landmark: "Dal Lake Boulevard", distance: "2.1 km" },
      { landmark: "Nishat Bagh", distance: "4.0 km" },
      { landmark: "Royal Springs Golf Course", distance: "2.8 km" }
    ],
    pricePerNight: 15800,
    originalPrice: 19500,
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"],
    description: "Architecturally inspired by Kashmiri wood-and-stone craft, this Taj-managed hill resort treats guests to sunrise views over the mist of Dal Lake and Zabarwan mountains.",
    amenities: [
      "Hilltop Infinity Edge Pool",
      "Infinity Tea Lounge with Samovar Kahwa",
      "Jade Dragon Asian & Wazwan Dining",
      "Fitness Center",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "vivanta_deluxe_dal_view",
        name: "Deluxe Dal Lake View Room",
        price: 15800,
        size: "460 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake & Mountain Balcony", "Free Breakfast", "Heated Bathroom"]
      }
    ],
    coordinates: { lat: 34.0880, lng: 74.8780 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "kolahoi-green-resort-pahalgam",
    name: "Kolahoi Green Resort Pahalgam",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Pahalgam",
    state: "Jammu and Kashmir",
    country: "India",
    category: "4-Star Alpine River Resort",
    type: "Resort",
    rating: 4.87,
    reviewsCount: 1590,
    badge: "Lidder River Valley",
    tagline: "Serene alpine retreat bordered by deodar forest and the crystal Lidder River",
    address: "KP Road, Near Golf Course, Pahalgam, J&K 192126",
    nearLocation: "Pahalgam Valley & Lidder Riverbank",
    distanceToLandmarks: [
      { landmark: "Betaab Valley", distance: "6.5 km" },
      { landmark: "Aru Valley", distance: "11.0 km" },
      { landmark: "Pahalgam Golf Course", distance: "1.5 km" }
    ],
    pricePerNight: 9800,
    originalPrice: 12500,
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"],
    description: "Nestled in the lush meadows of Pahalgam, Kolahoi Green provides warm wooden rooms, riverbank views, and easy access to trekking trails in Betaab and Aru valleys.",
    amenities: [
      "Riverview Lawn & Bonfire Pit",
      "Sheed All-Day Multi-Cuisine Dining",
      "Kashmiri Apple Orchard Garden",
      "Central Heating",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "kolahoi_deluxe_valley",
        name: "Deluxe River & Pine View Room",
        price: 9800,
        size: "380 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
        perks: ["Valley View", "Breakfast Included", "Central Heating"]
      }
    ],
    coordinates: { lat: 34.0150, lng: 75.3210 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "rah-bagh-resort-srinagar",
    name: "Rah Bagh Boutique Resort",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
    category: "Boutique Orchard Resort",
    type: "Boutique",
    rating: 4.85,
    reviewsCount: 1120,
    badge: "Walnut Orchard Hideaway",
    tagline: "Picturesque Kashmiri cottage resort set amidst orchards at the foothills of Mahadev Peak",
    address: "Near Dachigam National Park, Harwan, Srinagar, J&K 191202",
    nearLocation: "Harwan, Dachigam Wildlife Sanctuary",
    distanceToLandmarks: [
      { landmark: "Dachigam National Park", distance: "2.5 km" },
      { landmark: "Mughal Garden Shalimar Bagh", distance: "5.0 km" }
    ],
    pricePerNight: 6800,
    originalPrice: 8500,
    heroImage: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1200&auto=format&fit=crop"],
    description: "Inspired by vernacular Kashmiri brick and pinewood architecture, Rah Bagh is an orchard hideaway with heated outdoor swimming pool and mountain trails.",
    amenities: [
      "Outdoor Heated Pool",
      "Dachigam Safari Desk",
      "Orchard Cafe & Barbecue",
      "Mountain Mountain Cycles",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "rah_cottage_room",
        name: "Orchard Deluxe Room",
        price: 6800,
        size: "340 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop",
        perks: ["Apple Tree Garden View", "Free Breakfast", "Underfloor Heating"]
      }
    ],
    coordinates: { lat: 34.1520, lng: 74.9120 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "wangnoo-heritage-houseboats",
    name: "Wangnoo Heritage Houseboats",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Nigeen Lake, Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
    category: "Heritage Houseboat",
    type: "Houseboat",
    rating: 4.83,
    reviewsCount: 1450,
    badge: "Peaceful Nigeen Waters",
    tagline: "Authentic cedar houseboats floating on the tranquil waters of Nigeen Lake",
    address: "Opposite Nigeen Club, Nigeen Lake, Srinagar, J&K 190006",
    nearLocation: "Nigeen Lake, West Bank",
    distanceToLandmarks: [
      { landmark: "Hazratbal Dargah", distance: "1.2 km" },
      { landmark: "Dal Lake", distance: "3.5 km" }
    ],
    pricePerNight: 4200,
    originalPrice: 5600,
    heroImage: "https://images.unsplash.com/photo-1562670652-e5947bddb335?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1562670652-e5947bddb335?q=80&w=1200&auto=format&fit=crop"],
    description: "Enjoy peaceful waters away from crowded boat traffic with carved walnut dining salons, veranda chairs, and morning lotus birdwatching.",
    amenities: [
      "Traditional Kashmiri Dining Room",
      "Shikara Lake Shuttle",
      "Verandah Lake Seating",
      "Room Heating",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "wangnoo_deluxe_lake",
        name: "Heritage Cedarwood Room",
        price: 4200,
        size: "300 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1562670652-e5947bddb335?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake Balcony", "Free Breakfast", "Traditional Kashmiri Rugs"]
      }
    ],
    coordinates: { lat: 34.1160, lng: 74.8290 },
    policies: { checkIn: "12:00 PM", checkOut: "10:30 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "zostel-srinagar",
    name: "Zostel Srinagar - Boulevard Stays",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
    category: "Boutique Backpacker",
    type: "Boutique",
    rating: 4.86,
    reviewsCount: 2890,
    badge: "Close to Dal Lake Ghats",
    tagline: "Vibrant social basecamp with a garden cafe and views of the Zabarwan hills",
    address: "Boulevard Road, Near Ghat No. 1, Dalgate, Srinagar, J&K 190001",
    nearLocation: "Dalgate, Boulevard Road",
    distanceToLandmarks: [
      { landmark: "Dal Lake Ghat No. 1", distance: "0.2 km" },
      { landmark: "Lal Chowk", distance: "2.4 km" }
    ],
    pricePerNight: 2500,
    originalPrice: 3200,
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"],
    description: "Welcoming community hostel offering private ensuite rooms, garden gazebo, travel desk for Gulmarg and Sonamarg day trips, and warm Kashmiri hospitality.",
    amenities: [
      "Garden Cafe & Chill Deck",
      "High-Speed Wi-Fi for Work",
      "Travel & Trekking Desk",
      "Room Heating"
    ],
    roomTypes: [
      {
        id: "zostel_srinagar_private",
        name: "Standard Private Ensuite Room",
        price: 2500,
        size: "220 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Bathroom", "Electric Blanket & Heating", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 34.0810, lng: 74.8320 },
    policies: { checkIn: "12:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
