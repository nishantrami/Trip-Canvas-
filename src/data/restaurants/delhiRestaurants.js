/**
 * Delhi NCR Dining & Restaurants
 * Historic Mughal kebabs, Pandara Road butter chicken legends, and artisan museum cafes.
 * Cost for two: ₹600 to ₹2,600
 */

export const DELHI_RESTAURANTS = [
  {
    id: "karims-jama-masjid-delhi",
    name: "Karim's - Historic Mughal Kitchens",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Jama Masjid, Old Delhi",
    state: "Delhi",
    country: "India",
    rating: 4.91,
    reviewsCount: 8950,
    badge: "Since 1913 Mughal Royal Cooks",
    tagline: "Founded by royal chefs of the last Mughal Emperor Bahadur Shah Zafar beside Jama Masjid",
    address: "16, Gali Kababian, Jama Masjid, Old Delhi 110006",
    nearLocation: "Gali Kababian, opposite Jama Masjid Gate No. 1",
    distanceToLandmarks: [
      { landmark: "Jama Masjid", distance: "0.1 km (Across Gate 1)" },
      { landmark: "Red Fort", distance: "0.8 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1200,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Authentic Mughlai", "Tandoori Kebabs", "Nihari & Biryani"],
    timing: "09:00 AM - 12:00 AM",
    description: "Since 1913, Haji Karimuddin's humble alley eatery has been hailed worldwide as the ultimate shrine of Mughlai cuisine. Fragrant charcoal smoke, tandoori ovens, and recipes preserved directly from the royal Mughal court.",
    specialties: [
      "Mutton Burra Kebab (Charcoal charred spiced ribs)",
      "Traditional Morning Mutton Nihari with Khamiri Roti",
      "Chicken Jahangiri",
      "Mutton Dum Biryani with Burani Raita"
    ],
    features: [
      "Centuries-Old Mughal Heritage",
      "Live Charcoal Tandoor Grills",
      "Jama Masjid Atmosphere",
      "Multi-Section AC Dining"
    ],
    seatingAreas: [
      { id: "karim_hall", name: "Heritage Dining Room", fee: 0, note: "Family AC seating" }
    ],
    timeSlots: ["01:00 PM", "07:30 PM", "08:45 PM", "10:00 PM"],
    coordinates: { lat: 28.6508, lng: 77.2335 },
    phone: "+91 11 2326 9880",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "gulati-restaurant-delhi",
    name: "Gulati Restaurant - Pandara Road",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Pandara Road, Central Delhi",
    state: "Delhi",
    country: "India",
    rating: 4.93,
    reviewsCount: 7120,
    badge: "Delhi's #1 Butter Chicken",
    tagline: "Pandara Market's legendary crown jewel celebrated for velvety Butter Chicken and Dal Makhani",
    address: "6, Pandara Rd, Market, India Gate, New Delhi, Delhi 110003",
    nearLocation: "Pandara Road Market, near India Gate",
    distanceToLandmarks: [
      { landmark: "India Gate", distance: "0.8 km" },
      { landmark: "Khan Market", distance: "1.2 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1800,
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["North Indian", "Mughlai", "Tandoori Specialties", "Biryani"],
    timing: "12:00 PM - 12:00 AM",
    description: "For over 60 years, Gulati on Pandara Road has drawn prime ministers, diplomats, and food lovers for its rich, slow-simmered black Dal Makhani and legendary sweet-and-tangy butter chicken with butter garlic naan.",
    specialties: [
      "Famous Murgh Makhani (Butter Chicken)",
      "Slow-Cooked Dal Gulati (Signature Dal Makhani)",
      "Kakori & Galouti Kebabs that melt in mouth",
      "Kandhari Naan & Garlic Kulcha"
    ],
    features: [
      "Late Night Dining till Midnight",
      "Near India Gate Promenade",
      "Famous Daily Lunch Buffet",
      "Impeccable Family Service"
    ],
    seatingAreas: [
      { id: "gulati_hall", name: "Main Family AC Dining Room", fee: 0, note: "Comfortable dining booths" }
    ],
    timeSlots: ["01:00 PM", "07:30 PM", "08:45 PM", "10:00 PM"],
    coordinates: { lat: 28.6080, lng: 77.2340 },
    phone: "+91 11 2338 8836",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "cafe-lota-delhi",
    name: "Cafe Lota - National Crafts Museum",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Pragati Maidan, New Delhi",
    state: "Delhi",
    country: "India",
    rating: 4.89,
    reviewsCount: 4120,
    badge: "Crafts Museum Garden Cafe",
    tagline: "Artisan open-air museum cafe celebrating indigenous regional recipes from across India",
    address: "National Crafts Museum, Bhairon Marg, Pragati Maidan, New Delhi 110001",
    nearLocation: "Inside National Crafts Museum, near Purana Qila",
    distanceToLandmarks: [
      { landmark: "Purana Qila (Old Fort)", distance: "0.5 km" },
      { landmark: "India Gate", distance: "1.8 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1500,
    heroImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Modern Regional Indian", "Cafe & Breakfast", "Artisan Coffee"],
    timing: "08:00 AM - 09:30 PM (Closed Mondays)",
    description: "Tucked inside the serene courtyards of the National Crafts Museum, Cafe Lota presents thoughtful contemporary interpretations of lesser-known Indian regional recipes, from Bihari litti chokha to Kumaoni raita.",
    specialties: [
      "Palak Patta Chaat (Crispy spinach fritters with chutneys)",
      "Bihari Litti Chokha with Desi Ghee",
      "Amritsari Fish & Chips with Tartar Chutney",
      "Apple Cinnamon Jalebi with Rabdi"
    ],
    features: [
      "Tranquil Thatched Canopy Courtyard",
      "Direct Crafts Museum Access",
      "Handcrafted Clay Pottery Tableware",
      "Specialty Filter Coffee & Kombucha"
    ],
    seatingAreas: [
      { id: "courtyard_booth", name: "Museum Garden Table", fee: 0, note: "Under open bamboo thatch" }
    ],
    timeSlots: ["09:00 AM", "01:00 PM", "04:30 PM", "07:30 PM"],
    coordinates: { lat: 28.6130, lng: 77.2410 },
    phone: "+91 78389 08786",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "saravana-bhavan-delhi",
    name: "Saravana Bhavan - Connaught Place",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Connaught Place, New Delhi",
    state: "Delhi",
    country: "India",
    rating: 4.87,
    reviewsCount: 8210,
    badge: "CP's Favorite South Indian",
    tagline: "Always-buzzing Janpath landmark serving golden Ghee Roast Dosas and filter coffee",
    address: "P-13, Outer Circle, Connaught Place, New Delhi 110001",
    nearLocation: "Janpath & Connaught Place Outer Circle",
    distanceToLandmarks: [
      { landmark: "Connaught Place Central Park", distance: "0.2 km" },
      { landmark: "Janpath Market", distance: "0.3 km" }
    ],
    priceRange: "₹",
    costForTwo: 600,
    heroImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Pure Vegetarian South Indian", "Dosai & Idli", "Thali"],
    timing: "08:00 AM - 11:00 PM",
    description: "The gold standard for South Indian vegetarian comfort food in Delhi. Crispy paper-thin ghee dosas, piping hot sambar, creamy coconut chutneys, and frothy tumbler filter coffee.",
    specialties: [
      "Special Ghee Roast Masala Dosa",
      "Mini Ghee Idlis in Sambar Bowl",
      "Rava Onion Masala Dosa",
      "Authentic Kumbakonam Degree Filter Coffee"
    ],
    features: ["Pure Vegetarian", "Fast Service", "Budget Friendly", "Family AC Seating"],
    seatingAreas: [
      { id: "cp_ac_hall", name: "Main Dining Hall", fee: 0, note: "Standard table seating" }
    ],
    timeSlots: ["09:00 AM", "01:00 PM", "05:00 PM", "08:00 PM"],
    coordinates: { lat: 28.6310, lng: 77.2185 },
    phone: "+91 11 2331 7755",
    policies: { reservationDeposit: "Walk-in Priority", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "lakhori-haveli-dharampura-delhi",
    name: "Lakhori - Haveli Dharampura",
    destinationId: "delhi",
    destinationName: "Delhi",
    city: "Chandni Chowk, Old Delhi",
    state: "Delhi",
    country: "India",
    rating: 4.92,
    reviewsCount: 2890,
    badge: "Mughal Haveli Courtyard",
    tagline: "Fine Mughlai culinary experience inside a restored 19th-century UNESCO heritage haveli",
    address: "2293, Gali Guliyan, Dharampura, Chandni Chowk, New Delhi 110006",
    nearLocation: "Chandni Chowk, walking distance from Jama Masjid",
    distanceToLandmarks: [
      { landmark: "Jama Masjid", distance: "0.2 km" },
      { landmark: "Red Fort", distance: "0.9 km" }
    ],
    priceRange: "₹₹₹",
    costForTwo: 2600,
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Mughlai Fine Dining", "Old Delhi Street Fusion", "North Indian"],
    timing: "12:00 PM - 03:30 PM, 07:00 PM - 10:30 PM",
    description: "Dine on historic Lakhori bricks under carved sandstone archways with live Kathak dancing, classical sitar, and royal recipes from Shahjahanabad.",
    specialties: [
      "Lakhori Special Murgh Durbari",
      "Gilafi Mutton Seekh Kebab",
      "Dharampura Paneer Pasanda",
      "Shahi Tukda with Rabdi & Silver Foil"
    ],
    features: [
      "UNESCO Heritage Haveli Chowk",
      "Live Classical Kathak Performances",
      "Rooftop Kite Flying & Jama Masjid Views",
      "Romantic Candlelight Seating"
    ],
    seatingAreas: [
      { id: "central_chowk", name: "Haveli Central Chowk", fee: 0, note: "Beside the performance stage" }
    ],
    timeSlots: ["01:00 PM", "07:30 PM", "09:00 PM"],
    coordinates: { lat: 28.6505, lng: 77.2340 },
    phone: "+91 11 4909 1450",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Smart Casual", alcoholServed: true }
  }
];
