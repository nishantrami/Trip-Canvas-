/**
 * Udaipur Hotels & Stays
 * Curated floating palaces, heritage havelis, lakeview boutique hotels, and budget stays.
 * Price range: ₹2,100 to ₹29,500
 */

export const UDAIPUR_HOTELS = [
  {
    id: "taj-lake-palace-udaipur",
    name: "Taj Lake Palace",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Luxury Heritage",
    type: "Palace",
    rating: 4.95,
    reviewsCount: 3420,
    badge: "World's Most Romantic Hotel",
    tagline: "18th-century floating marble palace in the middle of Lake Pichola",
    address: "P.O. Box No. 5, Lake Pichola, Udaipur, Rajasthan 313001",
    nearLocation: "In the center of Lake Pichola (Boat access from Rameshwar Ghat)",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.4 km (by boat)" },
      { landmark: "Lake Pichola Ghats", distance: "0.2 km" },
      { landmark: "Jagdish Temple", distance: "0.8 km" },
      { landmark: "Maharana Pratap Airport", distance: "24.5 km" }
    ],
    pricePerNight: 28500,
    originalPrice: 34000,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Built between 1743 and 1746 by Maharana Jagat Singh II as a royal summer retreat, Taj Lake Palace floats like a white jewel in the tranquil waters of Lake Pichola. Accessible only by private motorboats, each suite features handcrafted marble, Mewari silk fabrics, and sweeping lake views.",
    amenities: [
      "Private Boat Transfer",
      "Jiva Spa & Heritage Treatments",
      "Rooftop Lake-View Swimming Pool",
      "24/7 Royal Butler Service",
      "Fine Dining Mewari Restaurant",
      "Complimentary Royal High Tea",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "taj_lake_view_luxury",
        name: "Luxury Lake View Room",
        price: 28500,
        size: "450 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake Pichola view", "Free Breakfast", "Royal Welcome Ceremony"]
      }
    ],
    coordinates: { lat: 24.5756, lng: 73.6800 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-oberoi-udaivilas",
    name: "The Oberoi Udaivilas",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Luxury Resort",
    type: "Resort",
    rating: 4.98,
    reviewsCount: 4120,
    badge: "Asia's Premier Resort",
    tagline: "Royal Mewari palace courtyards, reflection pools, and 50 acres of wildlife sanctuary",
    address: "Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Udaipur, Rajasthan 313001",
    nearLocation: "Western shore of Lake Pichola, overlooking City Palace",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "1.2 km (by boat across Pichola)" },
      { landmark: "Bagore Ki Haveli", distance: "2.1 km" },
      { landmark: "Fateh Sagar Lake", distance: "3.5 km" }
    ],
    pricePerNight: 29500,
    originalPrice: 35000,
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Spread over 50 acres on the banks of Lake Pichola, The Oberoi Udaivilas stands on the 200-year-old hunting grounds of the Maharana of Mewar. Intricate domes, hand-painted frescoes, and semi-private moat swimming pools.",
    amenities: [
      "Semi-Private Moat Pools",
      "Oberoi Spa with Ayurvedic Therapies",
      "Lakeside Suryamahal Dining",
      "Private Boat Excursions",
      "Peacock Gardens & Peepal Tree Deck",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "oberoi_premier_courtyard",
        name: "Premier Courtyard View Room",
        price: 29500,
        size: "600 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        perks: ["Walled Courtyard Garden", "Victorian Free-standing Bathtub", "Gourmet Breakfast"]
      }
    ],
    coordinates: { lat: 24.5786, lng: 73.6718 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "the-leela-palace-udaipur",
    name: "The Leela Palace Udaipur",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Ultra-Luxury",
    type: "Palace",
    rating: 4.96,
    reviewsCount: 2980,
    badge: "World’s Top Luxury Stays",
    tagline: "Spectacular contemporary palace with panoramic views of Pichola & Aravallis",
    address: "Lake Pichola, P.O. Box No. 125, Udaipur, Rajasthan 313001",
    nearLocation: "Lake Pichola West Bank",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.9 km (by boat)" },
      { landmark: "Jag Mandir Island", distance: "1.0 km" }
    ],
    pricePerNight: 27000,
    originalPrice: 32000,
    heroImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Nestled along Lake Pichola, The Leela Palace Udaipur evokes the grandeur of Rajasthan’s princely era with modern opulent comforts.",
    amenities: [
      "Sheesh Mahal Open-Air Fine Dining",
      "Outer Lakeview Heated Pool",
      "ESPA Holistic Spa Tents",
      "Private Jharokha Balconies",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "leela_grand_heritage",
        name: "Grand Heritage Lake View Room",
        price: 27000,
        size: "580 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        perks: ["Direct Pichola View", "Free Breakfast", "Evening Cultural Performance"]
      }
    ],
    coordinates: { lat: 24.5802, lng: 73.6765 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "shiv-niwas-palace-udaipur",
    name: "Shiv Niwas Palace by HRH Group",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Grand Palace",
    type: "Palace",
    rating: 4.91,
    reviewsCount: 2210,
    badge: "Authentic Royal Abode",
    tagline: "Crescent-shaped royal palace inside the Maharana's City Palace complex",
    address: "The City Palace Complex, Udaipur, Rajasthan 313001",
    nearLocation: "Inside City Palace Complex",
    distanceToLandmarks: [
      { landmark: "City Palace Museum", distance: "0.1 km" },
      { landmark: "Lake Pichola Ghats", distance: "0.3 km" }
    ],
    pricePerNight: 19500,
    originalPrice: 24000,
    heroImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"],
    description: "Former royal guesthouse converted into a luxury palace hotel, hosting world dignitaries with original antique furniture and royal portraits.",
    amenities: ["Palace Courtyard Pool", "The Pool Deck Multi-Cuisine Dining", "Panghat Spa", "Free Wi-Fi"],
    roomTypes: [
      {
        id: "shiv_palace_room",
        name: "Palace Room",
        price: 19500,
        size: "480 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        perks: ["Royal Courtyard View", "Free Breakfast", "City Palace VIP Access"]
      }
    ],
    coordinates: { lat: 24.5744, lng: 73.6842 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "aurika-udaipur-lemon-tree",
    name: "Aurika, Udaipur - Luxury Resort",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Hilltop Resort",
    type: "Resort",
    rating: 4.90,
    reviewsCount: 1680,
    badge: "Hilltop Palace Retreat",
    tagline: "Spread over 12 acres of undulating Aravalli hilltop near Sajjangarh Fort",
    address: "Kala Rohi, Rani Rd, Near Sajjangarh Fort, Udaipur, Rajasthan 313001",
    nearLocation: "Sajjangarh Fort Foothills",
    distanceToLandmarks: [
      { landmark: "Monsoon Palace", distance: "2.1 km" },
      { landmark: "Fateh Sagar Lake", distance: "4.8 km" }
    ],
    pricePerNight: 14800,
    originalPrice: 18500,
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"],
    description: "Perched atop the rolling Aravalli Hills, Aurika combines opulent Mewari architecture with majestic hilltop panoramas.",
    amenities: ["Panoramic Hilltop Pool", "Ariva Spa & Wellness", "Mirasa All-Day Dining", "Pet Friendly", "Free Wi-Fi"],
    roomTypes: [
      {
        id: "aurika_deluxe_valley",
        name: "Deluxe Valley View Room",
        price: 14800,
        size: "420 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        perks: ["Valley Balcony", "Free Breakfast", "Mountain Sunset View"]
      }
    ],
    coordinates: { lat: 24.5880, lng: 73.6450 },
    policies: { checkIn: "02:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: true }
  },
  {
    id: "jagat-niwas-palace-udaipur",
    name: "Jagat Niwas Palace Hotel",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Boutique Haveli",
    type: "Haveli",
    rating: 4.88,
    reviewsCount: 2340,
    badge: "Lakeside Jharokha Views",
    tagline: "Early 17th-century haveli situated right on the eastern banks of Lake Pichola",
    address: "23-25, Lal Ghat, Behind Jagdish Temple, Udaipur, Rajasthan 313001",
    nearLocation: "Lal Ghat, Lake Pichola",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.2 km" },
      { landmark: "Jagdish Temple", distance: "0.1 km" }
    ],
    pricePerNight: 8200,
    originalPrice: 10500,
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"],
    description: "Romantic heritage haveli with authentic jharokhas projecting over the waters of Lake Pichola.",
    amenities: ["Rooftop Lakeview Restaurant", "Private Jharokha Seating", "Ayurvedic Massages", "Free Wi-Fi"],
    roomTypes: [
      {
        id: "jagat_standard_room",
        name: "Haveli Standard Room",
        price: 8200,
        size: "320 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard View", "Free Breakfast", "Heritage Carved Wood Bed"]
      }
    ],
    coordinates: { lat: 24.5778, lng: 73.6828 },
    policies: { checkIn: "01:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: false }
  },
  {
    id: "udai-kothi-udaipur",
    name: "Udai Kothi - Boutique Heritage Hotel",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Boutique",
    type: "Boutique",
    rating: 4.85,
    reviewsCount: 1910,
    badge: "Iconic Rooftop Pool",
    tagline: "Voted India's best rooftop pool hotel with Mewari white arches on Lake Pichola West Bank",
    address: "O/S Chand Pole, Hanuman Ghat, Udaipur, Rajasthan 313001",
    nearLocation: "Hanuman Ghat, Lake Pichola",
    distanceToLandmarks: [
      { landmark: "Ambrai Ghat", distance: "0.3 km" },
      { landmark: "Bagore Ki Haveli", distance: "0.6 km" }
    ],
    pricePerNight: 6400,
    originalPrice: 8500,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"],
    description: "Charming boutique hotel with striking white Rajput facade, courtyards, and scenic rooftop pool.",
    amenities: ["Rooftop Glass Pool", "Lakeside Terrace Dining", "Spa Services", "Free Wi-Fi"],
    roomTypes: [
      {
        id: "udai_deluxe",
        name: "Deluxe Heritage Room",
        price: 6400,
        size: "340 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        perks: ["Rooftop Pool Access", "Free Breakfast"]
      }
    ],
    coordinates: { lat: 24.5808, lng: 73.6806 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "mewar-haveli-udaipur",
    name: "Mewar Haveli - Heritage Lakefront Stay",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Budget Heritage Haveli",
    type: "Haveli",
    rating: 4.82,
    reviewsCount: 1640,
    badge: "Best Budget Lake View",
    tagline: "Traditional family-run haveli with lake-facing jharokhas at pocket-friendly rates",
    address: "34-35, Lal Ghat, Udaipur, Rajasthan 313001",
    nearLocation: "Lal Ghat Steps",
    distanceToLandmarks: [
      { landmark: "Jagdish Temple", distance: "0.15 km" },
      { landmark: "City Palace", distance: "0.3 km" }
    ],
    pricePerNight: 2400,
    originalPrice: 3200,
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"],
    description: "Cozy Rajasthani haveli right on the Lal Ghat waterfront with rooftop dining overlooking the lake.",
    amenities: ["Rooftop Lake View Restaurant", "Travel Desk", "Air Conditioning", "Free Wi-Fi"],
    roomTypes: [
      {
        id: "mewar_standard",
        name: "Standard Haveli Room",
        price: 2400,
        size: "260 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake-facing Jharokha", "Free Wi-Fi"]
      }
    ],
    coordinates: { lat: 24.5781, lng: 73.6830 },
    policies: { checkIn: "12:00 PM", checkOut: "10:30 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  },
  {
    id: "zostel-lake-pichola-udaipur",
    name: "Zostel Udaipur - Lakefront Suites",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Boutique Backpacker",
    type: "Boutique",
    rating: 4.88,
    reviewsCount: 3120,
    badge: "Top Rated Social Stay",
    tagline: "Vibrant lakeside backpacker haven with sunset rooftop cafe overlooking Pichola",
    address: "Navghat, Chandpole Road, Udaipur, Rajasthan 313001",
    nearLocation: "Navghat, Chandpole",
    distanceToLandmarks: [
      { landmark: "Lake Pichola Ghats", distance: "0.1 km" },
      { landmark: "City Palace", distance: "0.5 km" }
    ],
    pricePerNight: 2100,
    originalPrice: 2800,
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"],
    description: "Udaipur's most loved social hub with bright lake-view private rooms, common lounge, and rooftop gatherings.",
    amenities: ["Rooftop Lake Cafe", "Common Game Room", "High-Speed Wi-Fi", "Locker & Luggage Storage"],
    roomTypes: [
      {
        id: "zostel_private_lake",
        name: "Deluxe Lake View Private Room",
        price: 2100,
        size: "240 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake Pichola View", "Attached Bathroom", "High-speed Wi-Fi"]
      }
    ],
    coordinates: { lat: 24.5804, lng: 73.6812 },
    policies: { checkIn: "12:00 PM", checkOut: "10:00 AM", cancellation: "Free cancellation up to 24 hours", petsAllowed: false }
  }
];
