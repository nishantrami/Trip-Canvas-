/**
 * Kashmir Dining & Restaurants
 * Royal Kashmiri wazwan feasts, Jhelum riverfront tea rooms, and Dal Lake Boulevard dining.
 * Cost for two: ₹650 to ₹1,800
 */

export const KASHMIR_RESTAURANTS = [
  {
    id: "ahdoos-restaurant-srinagar",
    name: "Ahdoos - Heritage Kashmiri Wazwan",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Residency Road, Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
    rating: 4.93,
    reviewsCount: 5120,
    badge: "Since 1918 Culinary Legend",
    tagline: "Srinagar's oldest culinary institution on the banks of River Jhelum serving royal Wazwan",
    address: "Residency Road, Regal Chowk, Munshi Bagh, Srinagar, J&K 190001",
    nearLocation: "Residency Road & Jhelum Riverfront",
    distanceToLandmarks: [
      { landmark: "Lal Chowk", distance: "0.8 km" },
      { landmark: "Dal Lake Boulevard", distance: "1.8 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1800,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
    ],
    cuisines: ["Traditional Kashmiri Wazwan", "Mughlai", "North Indian", "Bakery"],
    timing: "12:00 PM - 10:30 PM",
    description: "Established in 1918 during the British Raj as Srinagar's first bakery, Ahdoos is revered worldwide as the definitive authority on Kashmiri Wazwan prepared by hereditary master chefs (Wazas).",
    specialties: [
      "Ahdoos Special Wazwan Trami (Rista, Gushtaba, Rogan Josh, Tabak Maaz)",
      "Mutton Rogan Josh in Kashmiri Saffron Gravy",
      "Mutton Rista (Hand-pounded meatballs in fennel gravy)",
      "Gushtaba (Meatballs in rich cardamom yogurt broth)"
    ],
    features: [
      "Historic Heritage Setting",
      "Jhelum River View Seating",
      "Famous Ground-Floor Bakery (Walnut Fudge & Bakarkhani)",
      "Traditional Copper Tableware"
    ],
    seatingAreas: [
      { id: "jhelum_view_hall", name: "River Jhelum View Hall", fee: 0, note: "Views over the historic riverbank" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:30 PM", "08:45 PM"],
    coordinates: { lat: 34.0720, lng: 74.8190 },
    phone: "+91 194 247 2593",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "mughal-darbar-srinagar",
    name: "Mughal Darbar",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Residency Road, Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
    rating: 4.88,
    reviewsCount: 4210,
    badge: "Wazwan Feast Specialists",
    tagline: "A bustling culinary landmark celebrated for traditional Wazwan served in engraved copper traemis",
    address: "Residency Rd, Regal Chowk, Press Colony, Srinagar, J&K 190001",
    nearLocation: "Regal Chowk, Residency Road",
    distanceToLandmarks: [
      { landmark: "Lal Chowk", distance: "0.6 km" },
      { landmark: "Dal Gate", distance: "1.5 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1400,
    heroImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Authentic Kashmiri Wazwan", "Mughlai", "Biryani"],
    timing: "11:30 AM - 10:30 PM",
    description: "Renowned among generations of visitors and locals alike, Mughal Darbar serves authentic multi-course Kashmiri wedding feasts on four-person copper platters (Traemi) covered with sarposh.",
    specialties: [
      "Mini Wazwan Platter for Two",
      "Crispy Tabak Maaz (Fried lamb ribs in ghee)",
      "Chicken Kanti Kebab",
      "Kashmiri Saffron Biryani"
    ],
    features: ["Family AC Dining Hall", "Generous Portions", "Artisan Copper Service", "Fast Service"],
    seatingAreas: [
      { id: "family_hall", name: "Main Dining Hall", fee: 0, note: "Family AC seating" }
    ],
    timeSlots: ["12:30 PM", "01:30 PM", "07:30 PM", "08:30 PM"],
    coordinates: { lat: 34.0715, lng: 74.8180 },
    phone: "+91 194 247 5218",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "stream-restaurant-dal-lake",
    name: "Stream Restaurant - Dal Lake Boulevard",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "Boulevard Road, Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
    rating: 4.87,
    reviewsCount: 2980,
    badge: "Direct Dal Lake Promenade",
    tagline: "Fine multi-cuisine dining with views of Dal Lake shikaras gliding past the windows",
    address: "Boulevard Road, Opposite Ghat No. 2, Dalgate, Srinagar, J&K 190001",
    nearLocation: "Directly opposite Ghat No. 2, Dal Lake",
    distanceToLandmarks: [
      { landmark: "Dal Lake Ghat No. 2", distance: "0.05 km (Across the Road)" },
      { landmark: "Shankaracharya Hill", distance: "2.1 km" }
    ],
    priceRange: "₹₹",
    costForTwo: 1600,
    heroImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Kashmiri Specialties", "North Indian", "Continental", "Chinese"],
    timing: "12:00 PM - 11:00 PM",
    description: "Located on the picturesque Boulevard promenade, Stream combines warm Kashmiri pinewood interiors with large picture windows overlooking Dal Lake and the Zabarwan mountains.",
    specialties: [
      "Stream Special Mutton Kanti",
      "Kashmiri Butter Chicken",
      "Crispy Lotus Stem Fry (Nadru Monje)",
      "Kashmiri Kahwa with Almond Slivers"
    ],
    features: ["Dal Lake Window Views", "Cozy Heated AC Environment", "Family Friendly", "Free Parking"],
    seatingAreas: [
      { id: "lake_window_table", name: "Dal Lakefront Window Table", fee: 0, note: "Prime view of the lake and shikaras" }
    ],
    timeSlots: ["01:00 PM", "07:30 PM", "08:45 PM"],
    coordinates: { lat: 34.0815, lng: 74.8340 },
    phone: "+91 194 250 0123",
    policies: { reservationDeposit: "Zero advance fee", dressCode: "Casual", alcoholServed: false }
  },
  {
    id: "chai-jaai-tea-room-srinagar",
    name: "Chai Jaai Tea Room",
    destinationId: "kashmir",
    destinationName: "Kashmir",
    city: "The Bund, Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
    rating: 4.90,
    reviewsCount: 3120,
    badge: "Kashmiri Tea Room on The Bund",
    tagline: "Cotswolds-meets-Kashmir tea house serving pink Noon Chai, Samovar Kahwa, and fresh breads",
    address: "Mahatta & Co., Dhanjibhoy Building, The Bund, Residency Rd, Srinagar 190001",
    nearLocation: "The Bund, Jhelum River Promenade",
    distanceToLandmarks: [
      { landmark: "The Bund Promenade", distance: "0.01 km" },
      { landmark: "Lal Chowk", distance: "0.7 km" }
    ],
    priceRange: "₹",
    costForTwo: 650,
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"],
    cuisines: ["Kashmiri Tea & Bakery", "Artisan Cafe", "Traditional Breakfast"],
    timing: "09:30 AM - 09:30 PM",
    description: "Inspired by English tearooms and ancient Kashmiri tea culture, Chai Jaai is located on the historic Bund. Copper samovars, chintz upholstery, Kashmiri papier-mache, and warm noon chai with fresh lavasa bread.",
    specialties: [
      "Traditional Saffron Kahwa with Crushed Almonds",
      "Sheer Chai (Pink salty noon chai with Telvor bread)",
      "Kashmiri Harissa (Seasonal breakfast specialty)",
      "Walnut Tart & Apple Cinnamon Scones"
    ],
    features: [
      "Riverfront Jhelum Bund Location",
      "Traditional Copper Samovars",
      "Historic Photo Gallery (Mahatta Studio)",
      "Free High-Speed Wi-Fi"
    ],
    seatingAreas: [
      { id: "bund_window", name: "The Bund Window Seat", fee: 0, note: "Riverfront promenade view" }
    ],
    timeSlots: ["10:00 AM", "01:00 PM", "04:30 PM", "06:30 PM"],
    coordinates: { lat: 34.0728, lng: 74.8210 },
    phone: "+91 194 245 5005",
    policies: { reservationDeposit: "Walk-in & Reserved", dressCode: "Casual", alcoholServed: false }
  }
];
