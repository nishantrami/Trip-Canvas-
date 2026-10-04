/**
 * Master Curated Hotels & Stays Dataset
 * Featuring world-class luxury palace hotels, heritage havelis, lakeview boutique stays,
 * with room categories, amenities, live coordinates, and landmark distances.
 */

export const HOTELS = [
  // ================= UDAIPUR HOTELS =================
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
      { landmark: "City Palace", distance: "0.4 km (by royal boat)" },
      { landmark: "Lake Pichola Ghats", distance: "0.2 km" },
      { landmark: "Jagdish Temple", distance: "0.8 km" },
      { landmark: "Maharana Pratap Airport", distance: "24.5 km" }
    ],
    pricePerNight: 42000,
    originalPrice: 49500,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Built between 1743 and 1746 by Maharana Jagat Singh II as a royal summer retreat, Taj Lake Palace floats like a white jewel in the tranquil waters of Lake Pichola. Accessible only by private motorboats, each suite features handcrafted marble, Mewari silk fabrics, and sweeping lake views.",
    amenities: [
      "Private Boat Transfer",
      "Jiva Spa & Heritage Treatments",
      "Rooftop Lake-View Swimming Pool",
      "24/7 Royal Butler Service",
      "Fine Dining Mewari Restaurant (Neel Kamal)",
      "Lakeside Champagne Bar",
      "Complimentary Royal High Tea",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "taj_lake_view_luxury",
        name: "Luxury Lake View Room",
        price: 42000,
        size: "450 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake Pichola view", "Free Breakfast", "Royal Welcome Ceremony"]
      },
      {
        id: "taj_palace_suite",
        name: "Historical Palace Suite",
        price: 68000,
        size: "720 sq.ft",
        bed: "Royal Canopy King Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        perks: ["Direct Jag Mandir view", "Jacuzzi", "Personal Butler", "Airport Luxury Transfer"]
      },
      {
        id: "taj_grand_royal_suite",
        name: "Grand Presidential Suite",
        price: 135000,
        size: "1200 sq.ft",
        bed: "Handcrafted 24k Gold Inlay Bed",
        maxGuests: 4,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Dining Terrace", "Jiva Spa Voucher", "Lake Sunset Cruise Included"]
      }
    ],
    coordinates: { lat: 24.5756, lng: 73.6800 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours prior to arrival",
      petsAllowed: false
    }
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
    badge: "Top 5 Resorts in the World",
    tagline: "Grand domes, sprawling courtyards, and semi-private pool suites",
    address: "Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Udaipur, Rajasthan 313001",
    nearLocation: "Haridas Ji Ki Magri, overlooking Lake Pichola and City Palace",
    distanceToLandmarks: [
      { landmark: "Lake Pichola Bank", distance: "0.1 km" },
      { landmark: "City Palace", distance: "2.1 km (across lake)" },
      { landmark: "Bagore Ki Haveli", distance: "2.3 km" },
      { landmark: "Fateh Sagar Lake", distance: "3.5 km" }
    ],
    pricePerNight: 38500,
    originalPrice: 45000,
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Spread over 50 acres of lush 200-year-old royal hunting grounds, The Oberoi Udaivilas features intricate Mewari arches, golden sun-drenched domes, reflection pools, and peacocks strolling through garden pathways.",
    amenities: [
      "Semi-Private Moat Swimming Pools",
      "Oberoi Signature Ayurvedic Spa",
      "Private Boat Shikara Rides",
      "Suryamahal & Udai Mahal Fine Dining",
      "Yoga & Meditation Sessions at Sunrise",
      "Free Valet & Luxury Car Rentals",
      "Kids Play Area & Activities"
    ],
    roomTypes: [
      {
        id: "oberoi_premier_room",
        name: "Premier Room with Courtyard View",
        price: 38500,
        size: "600 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard & Fountain View", "Free Breakfast", "Welcome Garland"]
      },
      {
        id: "oberoi_premier_pool_access",
        name: "Premier Room with Semi-Private Pool",
        price: 54000,
        size: "600 sq.ft",
        bed: "King Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Direct access to 73m swimming moat", "Lake Pichola view", "Champagne on arrival"]
      },
      {
        id: "oberoi_luxury_suite",
        name: "Luxury Suite with Private Pool",
        price: 110000,
        size: "1150 sq.ft",
        bed: "Super King Bed",
        maxGuests: 4,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Heated Pool", "Dedicated Butler", "Sunset Cocktail Cruise"]
      }
    ],
    coordinates: { lat: 24.5772, lng: 73.6738 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 72 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "the-leela-palace-udaipur",
    name: "The Leela Palace Udaipur",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Ultra Luxury",
    type: "Palace Hotel",
    rating: 4.93,
    reviewsCount: 2980,
    badge: "Spectacular Pichola Lakefront",
    tagline: "Modern palace hospitality overlooking Lake Pichola and Aravalli ranges",
    address: "Lake Pichola, P.O. Box 125, Udaipur, Rajasthan 313001",
    nearLocation: "Banks of Lake Pichola, next to historic old city gates",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.9 km (by ferry)" },
      { landmark: "Ambrai Ghat", distance: "0.6 km" },
      { landmark: "Jagdish Temple", distance: "1.2 km" },
      { landmark: "Sajjangarh Monsoon Palace", distance: "5.8 km" }
    ],
    pricePerNight: 36000,
    originalPrice: 42000,
    heroImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "The Leela Palace Udaipur evokes the grandeur of Rajasthan's royal era. Arrive via a decorated royal boat, walk on rose-petal strewn carpets, and enjoy open-air dining at Sheesh Mahal overlooking illuminated palaces.",
    amenities: [
      "Private Jetty & Royal Boat Arrival",
      "ESPA Luxury Spa with Private Tents",
      "Lakefront Temperature-Controlled Pool",
      "Sheesh Mahal Open-Air Fine Dining",
      "The Library Bar with Rare Single Malts",
      "Folk Music & Cultural Shows Nightly",
      "24-Hour In-Room Dining"
    ],
    roomTypes: [
      {
        id: "leela_grand_heritage_lakeview",
        name: "Grand Heritage Lake View Room",
        price: 36000,
        size: "580 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake Pichola & City Palace view", "Bathtub with view", "Breakfast Included"]
      },
      {
        id: "leela_royal_suite",
        name: "Royal Suite with Balcony",
        price: 62000,
        size: "900 sq.ft",
        bed: "Canopy King Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Balcony overlooking Lake", "ESPA Spa credits", "Daily Fruit & Wine Basket"]
      }
    ],
    coordinates: { lat: 24.5788, lng: 73.6769 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "fateh-garh-udaipur",
    name: "Fateh Garh - Heritage Renaissance Resort",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "4-Star Heritage Luxury",
    type: "Heritage Fortress",
    rating: 4.86,
    reviewsCount: 1640,
    badge: "Best Hilltop Sunset View",
    tagline: "Eco-heritage fortress perched high on the Aravalli hills overlooking Udaipur",
    address: "Sisarma, Udaipur, Rajasthan 313031",
    nearLocation: "Sisarma Hills, 10 minutes drive to Lake Pichola",
    distanceToLandmarks: [
      { landmark: "Lake Pichola", distance: "4.2 km" },
      { landmark: "City Palace", distance: "5.1 km" },
      { landmark: "Monsoon Palace", distance: "6.0 km" },
      { landmark: "Fateh Sagar", distance: "6.8 km" }
    ],
    pricePerNight: 12500,
    originalPrice: 16000,
    heroImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Built using salvaged architectural treasures and antique Rajput stone craft, Fateh Garh offers a breathtaking 360-degree panorama of the Udaipur valley, Lake Pichola, and the Aravallis. Features vintage car rides and heritage walks.",
    amenities: [
      "Twin Hilltop Infinity Pools",
      "Vintage Car Museum & Drives",
      "Sanskriti Wellness Spa",
      "Baradari Fine Dining Terrace",
      "Free High-Speed Wi-Fi",
      "Sunset High Tea with Folk Musicians"
    ],
    roomTypes: [
      {
        id: "fateh_renaissance_room",
        name: "Renaissance Heritage Room",
        price: 12500,
        size: "420 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
        perks: ["Valley view", "Free Breakfast", "Vintage Car Tour"]
      },
      {
        id: "fateh_palace_suite",
        name: "Heritage Fort Suite with Jacuzzi",
        price: 21000,
        size: "680 sq.ft",
        bed: "King Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Panoramic Balcony", "Jacuzzi", "Complimentary Dinner for 2"]
      }
    ],
    coordinates: { lat: 24.5582, lng: 73.6541 },
    policies: {
      checkIn: "01:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 24 hours before check-in",
      petsAllowed: true
    }
  },
  {
    id: "jagat-niwas-palace-udaipur",
    name: "Jagat Niwas Palace Hotel",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Boutique",
    type: "Haveli",
    rating: 4.88,
    reviewsCount: 2210,
    badge: "Iconic Lakefront Jharokha",
    tagline: "17th-century heritage haveli right on the eastern banks of Lake Pichola",
    address: "23-25, Lal Ghat, Behind Jagdish Temple, Udaipur, Rajasthan 313001",
    nearLocation: "Lal Ghat, 200m from Jagdish Temple & City Palace",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.3 km" },
      { landmark: "Jagdish Temple", distance: "0.2 km" },
      { landmark: "Bagore Ki Haveli", distance: "0.2 km" },
      { landmark: "Lake Pichola Boat Stand", distance: "0.4 km" }
    ],
    pricePerNight: 8200,
    originalPrice: 10500,
    heroImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "An authentic 17th-century mansion built in the Mewar architectural style with restored jharokhas (overhanging enclosed balconies) jutting out directly over Lake Pichola. Perfect for travelers seeking romantic rooftop dining and old-city charm.",
    amenities: [
      "Direct Lakefront Jharokha Seating",
      "Rooftop Jharokha Restaurant",
      "Ayurvedic Massage Centre",
      "Walking Distance to All Main Palaces",
      "Free Wi-Fi",
      "Travel & Sightseeing Desk"
    ],
    roomTypes: [
      {
        id: "jagat_standard_haveli",
        name: "Haveli Standard Room",
        price: 8200,
        size: "350 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard view", "Free Breakfast", "Old city ambiance"]
      },
      {
        id: "jagat_pichola_suite",
        name: "Pichola Lake Suite with Jharokha",
        price: 15400,
        size: "520 sq.ft",
        bed: "Traditional Royal Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Direct Jharokha over water", "Lake Palace view", "Free Breakfast & High Tea"]
      }
    ],
    coordinates: { lat: 24.5786, lng: 73.6828 },
    policies: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "radisson-blu-udaipur",
    name: "Radisson Blu Udaipur Palace Resort & Spa",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Resort",
    type: "Resort",
    rating: 4.82,
    reviewsCount: 3100,
    badge: "Fateh Sagar Lakefront",
    tagline: "Grand palace resort on the tranquil banks of Fateh Sagar Lake",
    address: "B-1, Ambamata Scheme - A Rd, Opp. Aravali Hospital, Malla Talai, Udaipur, Rajasthan 313001",
    nearLocation: "Fateh Sagar Lake promenade & Sajjangarh base",
    distanceToLandmarks: [
      { landmark: "Fateh Sagar Lake", distance: "0.1 km" },
      { landmark: "Saheliyon Ki Bari", distance: "2.4 km" },
      { landmark: "City Palace", distance: "3.2 km" },
      { landmark: "Monsoon Palace", distance: "4.5 km" }
    ],
    pricePerNight: 9800,
    originalPrice: 13000,
    heroImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Offering magnificent views of Fateh Sagar Lake, this palatial resort combines contemporary luxury with Mewari architecture. Features a two-tier outdoor pool, extensive gardens, and multi-cuisine rooftop dining.",
    amenities: [
      "Two-Tier Swimming Pool & Jacuzzi",
      "Full Service Spa & Salon",
      "Aravali Lakeview Rooftop Grill",
      "Fitness Centre & Lawn Tennis",
      "Free Parking & Valet",
      "Children's Play Zone"
    ],
    roomTypes: [
      {
        id: "radisson_deluxe_lake",
        name: "Deluxe Lake View Room",
        price: 9800,
        size: "420 sq.ft",
        bed: "King Bed or Twin Beds",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        perks: ["Fateh Sagar lake view", "Free Breakfast", "Wi-Fi"]
      },
      {
        id: "radisson_palace_suite",
        name: "Palace Suite with Private Balcony",
        price: 18500,
        size: "750 sq.ft",
        bed: "King Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        perks: ["Spacious Living Room", "Lake Panorama", "Lounge Access"]
      }
    ],
    coordinates: { lat: 24.5962, lng: 73.6702 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "zostel-lake-pichola-udaipur",
    name: "Zostel Udaipur - Lakefront Private Suites",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Boutique Lakeside",
    type: "Boutique",
    rating: 4.84,
    reviewsCount: 3890,
    badge: "Best Budget Lakefront",
    tagline: "Vibrant lakefront private suites with rooftop cafe facing City Palace",
    address: "Navghat, Lal Ghat, Near Jagdish Temple, Udaipur, Rajasthan 313001",
    nearLocation: "Navghat, 100m from City Palace & Jagdish Temple",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.2 km" },
      { landmark: "Jagdish Temple", distance: "0.1 km" },
      { landmark: "Gangaur Ghat", distance: "0.15 km" },
      { landmark: "Bagore Ki Haveli", distance: "0.2 km" }
    ],
    pricePerNight: 2100,
    originalPrice: 2800,
    heroImage: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Located right on the banks of Lake Pichola at Navghat, Zostel Udaipur offers private heritage deluxe rooms and suites alongside a world-famous rooftop cafe. Travelers enjoy incredible sunset views of the illuminated City Palace and Jagmandir Island without the luxury price tag.",
    amenities: [
      "Panoramic Rooftop Cafe & Lake Views",
      "Private Air-Conditioned Deluxe Suites",
      "Free High-Speed Wi-Fi",
      "Sunset Socials & Walking Tours",
      "24/7 Travel Desk & Car Rentals",
      "Common Lounge with Board Games"
    ],
    roomTypes: [
      {
        id: "zostel_deluxe_private",
        name: "Deluxe Lake View Private Room",
        price: 2100,
        size: "260 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake Pichola view", "Ensuite Bathroom", "Free Wi-Fi"]
      },
      {
        id: "zostel_superior_suite",
        name: "Superior Heritage Lake Balcony Suite",
        price: 3200,
        size: "340 sq.ft",
        bed: "King Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Balcony over Lake", "Free Breakfast", "Welcome Drink"]
      }
    ],
    coordinates: { lat: 24.5778, lng: 73.6835 },
    policies: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      cancellation: "Free cancellation up to 24 hours before check-in",
      petsAllowed: false
    }
  },
  {
    id: "mewar-haveli-udaipur",
    name: "Mewar Haveli - Heritage Lakefront Stay",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Haveli",
    type: "Haveli",
    rating: 4.79,
    reviewsCount: 1950,
    badge: "Heritage Jharokhas on Water",
    tagline: "Traditional Rajput haveli with lake-facing jharokhas at Lal Ghat",
    address: "34-35 Lal Ghat, Lake Pichola, Udaipur, Rajasthan 313001",
    nearLocation: "Lal Ghat, 150m from Jagdish Temple",
    distanceToLandmarks: [
      { landmark: "Lake Pichola Ghats", distance: "0.05 km" },
      { landmark: "City Palace", distance: "0.3 km" },
      { landmark: "Bagore Ki Haveli", distance: "0.15 km" }
    ],
    pricePerNight: 2400,
    originalPrice: 3200,
    heroImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Mewar Haveli is a charming traditional Rajasthani mansion built right on the shores of Lake Pichola. Restored with authentic glasswork, miniature paintings, and carved wooden doors, it offers exceptional value and romantic lake views from every room.",
    amenities: [
      "Rooftop Restaurant with Pichola View",
      "Traditional Rajasthani Architecture",
      "Air Conditioning & Hot Water",
      "Luggage Storage & Taxi Assistance",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "mewar_standard",
        name: "Standard Haveli Room",
        price: 2400,
        size: "240 sq.ft",
        bed: "Double Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard view", "Free Wi-Fi", "Daily Housekeeping"]
      },
      {
        id: "mewar_lakeview",
        name: "Deluxe Lake View Jharokha Room",
        price: 3500,
        size: "320 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        perks: ["Direct Window over Lake", "Free Breakfast", "Tea/Coffee Maker"]
      }
    ],
    coordinates: { lat: 24.5789, lng: 73.6826 },
    policies: {
      checkIn: "11:00 AM",
      checkOut: "10:00 AM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "madri-haveli-udaipur",
    name: "Madri Haveli - 300-Year Restored Boutique",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Boutique",
    type: "Haveli",
    rating: 4.85,
    reviewsCount: 1420,
    badge: "Historic Stone Architecture",
    tagline: "300-year-old royal residence painstakingly restored with boutique luxury",
    address: "70 Ganesh Ghati, Chandpole, Udaipur, Rajasthan 313001",
    nearLocation: "Ganesh Ghati, historic old city quarter near Chandpole",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.5 km" },
      { landmark: "Ambrai Ghat", distance: "0.4 km" },
      { landmark: "Jagdish Temple", distance: "0.3 km" }
    ],
    pricePerNight: 2900,
    originalPrice: 3800,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Madri Haveli belonged to the royal Maharaj of Madri for over three centuries. Restored over 6 years using traditional lime plaster and antique stone, it features 14 boutique rooms with antique furniture, stained glass, and a rooftop terrace with 360-degree views of the old city and lake.",
    amenities: [
      "Rooftop Multi-Cuisine Terrace",
      "Traditional Stone Courtyard",
      "Ayurvedic Massages Available",
      "Doctor on Call",
      "Complimentary Wi-Fi",
      "Guided Walking Tours"
    ],
    roomTypes: [
      {
        id: "madri_deluxe",
        name: "Deluxe Heritage Stone Room",
        price: 2900,
        size: "280 sq.ft",
        bed: "Queen Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        perks: ["Historical Stone Arch", "Free Breakfast", "Wi-Fi"]
      },
      {
        id: "madri_suite",
        name: "Royal Madri Suite",
        price: 4500,
        size: "400 sq.ft",
        bed: "Four Poster King Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Sitting Alcove", "City & Lake View", "Free Breakfast & Tea"]
      }
    ],
    coordinates: { lat: 24.5812, lng: 73.6815 },
    policies: {
      checkIn: "12:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 24 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "hotel-sarovar-udaipur",
    name: "Hotel Sarovar on Lake Pichola",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Lakefront",
    type: "Haveli",
    rating: 4.81,
    reviewsCount: 1680,
    badge: "Rooftop Pool & Lake Views",
    tagline: "Serene lakeside haveli with open-air pool overlooking Lake Pichola",
    address: "Outside Chandpole, Hanuman Ghat, Udaipur, Rajasthan 313001",
    nearLocation: "Hanuman Ghat, opposite Lal Ghat",
    distanceToLandmarks: [
      { landmark: "Ambrai Ghat", distance: "0.2 km" },
      { landmark: "Lake Pichola Bridge", distance: "0.1 km" },
      { landmark: "City Palace", distance: "0.6 km" }
    ],
    pricePerNight: 3400,
    originalPrice: 4500,
    heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Hotel Sarovar is a peaceful heritage hotel located at Hanuman Ghat on the western edge of Lake Pichola. Guests enjoy an open-air rooftop swimming pool, fine multi-cuisine dining, and glorious views of the Old City Ghats.",
    amenities: [
      "Rooftop Swimming Pool",
      "Lake-Facing Shamiana Restaurant",
      "Elevator Facility",
      "Free Parking for Guests",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "sarovar_deluxe",
        name: "Deluxe Lake View Room",
        price: 3400,
        size: "300 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake Pichola view", "Free Breakfast", "Pool Access"]
      }
    ],
    coordinates: { lat: 24.5794, lng: 73.6798 },
    policies: {
      checkIn: "12:00 PM",
      checkOut: "10:30 AM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "kankarwa-haveli-udaipur",
    name: "Kankarwa Haveli",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Mansion",
    type: "Haveli",
    rating: 4.86,
    reviewsCount: 1280,
    badge: "180-Year-Old Noble Residence",
    tagline: "Authentic 180-year-old noble haveli directly on the eastern lakefront",
    address: "26 Lal Ghat, Udaipur, Rajasthan 313001",
    nearLocation: "Lal Ghat, direct water-level terrace",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.25 km" },
      { landmark: "Jagdish Temple", distance: "0.1 km" },
      { landmark: "Gangaur Ghat", distance: "0.1 km" }
    ],
    pricePerNight: 3800,
    originalPrice: 4900,
    heroImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "An authentic urban mansion that has been in the Kankarwa family for generations. Situated directly on the lake edge, its white-washed walls, quiet courtyards, and rooftop breakfast terrace offer an intimate, peaceful respite right in the heart of Lal Ghat.",
    amenities: [
      "Private Lake-Facing Terrace",
      "Homemade Traditional Breakfast",
      "Historical Rajput Furnishings",
      "Library & Book Exchange",
      "Free Wi-Fi"
    ],
    roomTypes: [
      {
        id: "kankarwa_deluxe_lake",
        name: "Deluxe Lake Facing Room",
        price: 3800,
        size: "320 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
        perks: ["Direct Lake Pichola view", "Free Homemade Breakfast"]
      }
    ],
    coordinates: { lat: 24.5784, lng: 73.6829 },
    policies: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "hotel-lake-pichola-udaipur",
    name: "Hotel Lake Pichola",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Lakefront Hotel",
    type: "Haveli",
    rating: 4.83,
    reviewsCount: 2190,
    badge: "Panoramic Island Palace View",
    tagline: "Heritage mansion with Upré rooftop restaurant and direct Pichola panorama",
    address: "Outside Chandpole, Hanuman Ghat, Udaipur, Rajasthan 313001",
    nearLocation: "Hanuman Ghat, Lake Pichola",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.6 km across lake" },
      { landmark: "Bagore Ki Haveli", distance: "0.4 km" }
    ],
    pricePerNight: 4800,
    originalPrice: 6200,
    heroImage: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Built in the early 20th century by Maharana Fateh Singh's royal family, Hotel Lake Pichola sits opposite the City Palace. Known for housing the renowned rooftop restaurant Upré and offering breathtaking sunrises over the old city.",
    amenities: [
      "Rooftop Fine Dining (Upré)",
      "Swimming Pool with Sun Deck",
      "Traditional Mewari Jharokhas",
      "Ayurvedic Spa & Wellness",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "pichola_heritage_deluxe",
        name: "Heritage Lake View Room",
        price: 4800,
        size: "350 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake & City Palace view", "Free Breakfast", "Welcome Drink"]
      }
    ],
    coordinates: { lat: 24.5779, lng: 73.6812 },
    policies: {
      checkIn: "01:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
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
    rating: 4.88,
    reviewsCount: 2750,
    badge: "Iconic White Arch Rooftop Pool",
    tagline: "Romantic white architectural jewel with the best rooftop pool in Udaipur",
    address: "Hanuman Ghat, Outside Chandpole, Udaipur, Rajasthan 313001",
    nearLocation: "Hanuman Ghat, walking distance to Ambrai Ghat",
    distanceToLandmarks: [
      { landmark: "Ambrai Ghat", distance: "0.2 km" },
      { landmark: "City Palace", distance: "0.7 km" },
      { landmark: "Fateh Sagar Lake", distance: "2.1 km" }
    ],
    pricePerNight: 6400,
    originalPrice: 8500,
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Voted India's best romantic boutique hotel by National Geographic Traveler, Udai Kothi combines modern conveniences with Rajput palace ornamentation. The rooftop pool framed by scalloped white arches and underwater lighting is an unforgettable centerpiece.",
    amenities: [
      "Signature White-Arched Rooftop Pool",
      "Candlelit Rooftop Restaurant",
      "Full Ayurvedic Spa & Steam",
      "Courtyard Garden with Fountains",
      "Free High-Speed Wi-Fi",
      "Valet Parking"
    ],
    roomTypes: [
      {
        id: "udai_deluxe",
        name: "Deluxe Heritage Room",
        price: 6400,
        size: "380 sq.ft",
        bed: "Royal Canopy Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard/Pool view", "Free Breakfast", "Spa Discount"]
      },
      {
        id: "udai_suite_pool",
        name: "Udai Grand Lake Suite with Jharokha",
        price: 9800,
        size: "520 sq.ft",
        bed: "King Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake view", "Bathtub", "Free High Tea & Breakfast"]
      }
    ],
    coordinates: { lat: 24.5801, lng: 73.6802 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "amet-haveli-hotel-udaipur",
    name: "Amet Haveli - Heritage Hotel",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Haveli",
    type: "Haveli",
    rating: 4.91,
    reviewsCount: 2430,
    badge: "Historic 1734 Lakefront Haveli",
    tagline: "Water-edge haveli built in 1734, home to famous Ambrai restaurant",
    address: "Outside Chandpole, Ambamata Scheme - A Rd, Hanuman Ghat, Udaipur, Rajasthan 313001",
    nearLocation: "Hanuman Ghat & Ambrai Ghat, right on Lake Pichola water edge",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.2 km across lake (Direct View)" },
      { landmark: "Ambrai Ghat", distance: "0.05 km" },
      { landmark: "Jagdish Temple", distance: "0.8 km" }
    ],
    pricePerNight: 9200,
    originalPrice: 11800,
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Built during the reign of Maharana Jagat Singh II in 1734 by Rawat Pratap Singh of Amet, this historic mansion sits right at the water's edge opposite City Palace. It houses the iconic Ambrai Restaurant with direct lakefront dining.",
    amenities: [
      "Direct Lakefront Access & Private Ghat",
      "Ambrai Restaurant on Premises",
      "Swimming Pool in Heritage Courtyard",
      "Authentic Rajput Antiques & Murals",
      "Free Parking & Valet",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "amet_heritage_lakeview",
        name: "Heritage Lake Facing Room",
        price: 9200,
        size: "420 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        perks: ["Direct City Palace view", "Free Breakfast", "Priority Ambrai Table"]
      }
    ],
    coordinates: { lat: 24.5781, lng: 73.6806 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "trident-udaipur",
    name: "Trident, Udaipur",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Luxury Resort",
    type: "Resort",
    rating: 4.89,
    reviewsCount: 3640,
    badge: "43-Acre Lush Garden Oasis",
    tagline: "Expansive garden resort on Pichola banks with Oberoi signature hospitality",
    address: "Haridas Ji Ki Magri, Mulla Talai, Udaipur, Rajasthan 313001",
    nearLocation: "Haridas Ji Ki Magri, banks of Lake Pichola",
    distanceToLandmarks: [
      { landmark: "Lake Pichola Bank", distance: "0.2 km" },
      { landmark: "City Palace", distance: "2.4 km" },
      { landmark: "Fateh Sagar Lake", distance: "3.2 km" }
    ],
    pricePerNight: 13500,
    originalPrice: 16500,
    heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Spread over 43 acres of lush landscaped gardens on the tranquil banks of Lake Pichola, Trident Udaipur offers renowned Oberoi-managed hospitality, a large outdoor pool, nature walks, and wildlife conservation areas with spotted deer and peacocks.",
    amenities: [
      "Olympic-Sized Outdoor Pool",
      "Trident Kids Club & Activity Center",
      "Aravalli Multi-Cuisine Terrace Restaurant",
      "Amrit Mahal Bar",
      "Morning Yoga & Heritage Nature Walks",
      "Free Wi-Fi & Valet Parking"
    ],
    roomTypes: [
      {
        id: "trident_deluxe_garden",
        name: "Deluxe Garden View Room",
        price: 13500,
        size: "380 sq.ft",
        bed: "King Bed or Twin Beds",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        perks: ["Garden view", "Free Breakfast", "Kids Eat Free"]
      },
      {
        id: "trident_pool_view",
        name: "Deluxe Pool View Room",
        price: 16500,
        size: "380 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Pool & Lake view", "Free Breakfast", "Airport Shuttle"]
      }
    ],
    coordinates: { lat: 24.5760, lng: 73.6720 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "aurika-udaipur-lemon-tree",
    name: "Aurika, Udaipur - Luxury Resort by Lemon Tree",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Hilltop Luxury",
    type: "Resort",
    rating: 4.90,
    reviewsCount: 1870,
    badge: "Spectacular Hilltop Luxury",
    tagline: "Regal palatial resort spread across 5 acres of undulating Aravalli hilltop",
    address: "Kalaharh, Near Sajjangarh Fort, Udaipur, Rajasthan 313001",
    nearLocation: "Sajjangarh Base, 10 mins from Lake Pichola",
    distanceToLandmarks: [
      { landmark: "Monsoon Palace", distance: "2.1 km" },
      { landmark: "Fateh Sagar Lake", distance: "4.5 km" },
      { landmark: "City Palace", distance: "5.2 km" }
    ],
    pricePerNight: 14800,
    originalPrice: 18000,
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Perched atop an Aravalli hilltop, Aurika Udaipur transports guests to the grand Rajput era. Features sweeping valley vistas, stone arches, sprawling banquet courtyards, and an infinity pool that merges with the mountain sunset horizon.",
    amenities: [
      "Hilltop Infinity Pool with Valley View",
      "Ariva Spa & Wellness Center",
      "Mirasa Multi-Cuisine All-Day Dining",
      "Ariva Bar with International Wines",
      "Fitness Center & Games Room",
      "Free High-Speed Wi-Fi"
    ],
    roomTypes: [
      {
        id: "aurika_deluxe",
        name: "Deluxe Valley View Room",
        price: 14800,
        size: "440 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        perks: ["Valley view", "Free Breakfast", "Balcony"]
      }
    ],
    coordinates: { lat: 24.5710, lng: 73.6530 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: true
    }
  },
  {
    id: "chunda-palace-udaipur",
    name: "Chunda Palace",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Heritage Palace",
    type: "Palace",
    rating: 4.87,
    reviewsCount: 1980,
    badge: "Hand-Painted Mewari Frescoes",
    tagline: "Authentic royal residence with hand-painted ceilings and indoor heated pool",
    address: "Haridas Ji Ki Magri, Main Road, Udaipur, Rajasthan 313001",
    nearLocation: "Haridas Ji Ki Magri, overlooking Pichola",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "2.1 km" },
      { landmark: "Lake Pichola", distance: "0.5 km" },
      { landmark: "Fateh Sagar", distance: "3.0 km" }
    ],
    pricePerNight: 15500,
    originalPrice: 19000,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Conceived by the royal house of Mewar's noble descendants, Chunda Palace took 16 years to build. Every ceiling and arch is hand-painted by local artisans using natural pigments. Features both indoor painted swimming pool and rooftop pool.",
    amenities: [
      "Indoor Hand-Painted Heated Pool",
      "Rooftop Pool with Palace View",
      "Royal Cuisine Restaurant (Rang Tarang)",
      "Traditional Puppet & Music Shows",
      "Free Wi-Fi & Valet Parking"
    ],
    roomTypes: [
      {
        id: "chunda_palace_room",
        name: "Palace Room with Hand-Painted Walls",
        price: 15500,
        size: "460 sq.ft",
        bed: "Four Poster King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        perks: ["Royal Fresco ceilings", "Free Breakfast", "Jacuzzi Bath"]
      }
    ],
    coordinates: { lat: 24.5775, lng: 73.6715 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "fateh-prakash-palace-udaipur",
    name: "Fateh Prakash Palace - The Grand Heritage",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Grand Palace",
    type: "Palace",
    rating: 4.94,
    reviewsCount: 2890,
    badge: "Live Inside Royal City Palace",
    tagline: "Stay right inside the City Palace complex facing Lake Pichola",
    address: "The City Palace Complex, Lake Pichola, Udaipur, Rajasthan 313001",
    nearLocation: "Inside City Palace, directly on the waterfront",
    distanceToLandmarks: [
      { landmark: "City Palace Museum", distance: "0.05 km (Inside)" },
      { landmark: "Crystal Gallery", distance: "0.02 km (Inside)" },
      { landmark: "Jagdish Temple", distance: "0.2 km" }
    ],
    pricePerNight: 18500,
    originalPrice: 23000,
    heroImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Built during the reign of Maharana Fateh Singh, this authentic palace is located within the fortified walls of Udaipur's City Palace complex. Guests walk past royal guards, priceless miniature paintings, and the famous Crystal Gallery right at their doorstep.",
    amenities: [
      "Direct Access to City Palace Courtyards",
      "Sunset Terrace Restaurant facing Lake",
      "Panghat Spa & Salon",
      "Exclusive Entry to Crystal Gallery",
      "Private Boat Rides on Lake Pichola",
      "Royal Butler Service"
    ],
    roomTypes: [
      {
        id: "fateh_grand_heritage_room",
        name: "Grand Heritage Lake View Room",
        price: 18500,
        size: "500 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
        perks: ["Lake Pichola view", "Free City Palace Tour", "Royal Breakfast"]
      }
    ],
    coordinates: { lat: 24.5765, lng: 73.6830 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 72 hours prior",
      petsAllowed: false
    }
  },
  {
    id: "shiv-niwas-palace-udaipur",
    name: "Shiv Niwas Palace by HRH Group",
    destinationId: "udaipur",
    destinationName: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "5-Star Grand Palace",
    type: "Palace",
    rating: 4.93,
    reviewsCount: 2680,
    badge: "Maharana's Former Royal Guesthouse",
    tagline: "Crescent palace of the Maharana with an iconic courtyard swimming pool",
    address: "The City Palace Complex, Lake Pichola, Udaipur, Rajasthan 313001",
    nearLocation: "The City Palace Complex, Lake Pichola",
    distanceToLandmarks: [
      { landmark: "City Palace", distance: "0.1 km (Inside complex)" },
      { landmark: "Lake Pichola Ghats", distance: "0.2 km" }
    ],
    pricePerNight: 20000,
    originalPrice: 25000,
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "The crescent-shaped palace built in the early 20th century by Maharana Fateh Singh was exclusively used to host visiting British royalty and heads of state. Its circular marble courtyard pool, featured in the James Bond movie Octopussy, remains one of Rajasthan's most iconic sights.",
    amenities: [
      "Iconic Circular Courtyard Pool",
      "Paantya Royal Mewari Restaurant",
      "The Panera Bar with Antique Chandeliers",
      "Spa & Heritage Wellness",
      "Direct City Palace Access",
      "24-Hour Concierge & Valet"
    ],
    roomTypes: [
      {
        id: "shiv_palace_room",
        name: "Palace Deluxe Room",
        price: 20000,
        size: "520 sq.ft",
        bed: "Royal King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Courtyard/Lake view", "Royal High Tea", "Free Breakfast"]
      },
      {
        id: "shiv_royal_suite",
        name: "Historical Royal Suite",
        price: 35000,
        size: "850 sq.ft",
        bed: "Antique Handcarved Bed",
        maxGuests: 3,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Balcony overlooking Lake Pichola", "Personal Butler", "Welcome Champagne"]
      }
    ],
    coordinates: { lat: 24.5750, lng: 73.6840 },
    policies: {
      checkIn: "02:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours prior",
      petsAllowed: false
    }
  },

  // ================= GOA HOTELS =================
  {
    id: "taj-exotica-goa",
    name: "Taj Exotica Resort & Spa, Goa",
    destinationId: "goa",
    destinationName: "Goa",
    city: "Benaulim, South Goa",
    state: "Goa",
    country: "India",
    category: "5-Star Beach Resort",
    type: "Beachfront Resort",
    rating: 4.92,
    reviewsCount: 2850,
    badge: "Direct Beachfront Access",
    tagline: "56 acres of Mediterranean-style paradise on private Benaulim Beach",
    address: "Calwaddo, Benaulim, Salcete, Goa 403716",
    nearLocation: "Directly on Benaulim Beach, South Goa",
    distanceToLandmarks: [
      { landmark: "Benaulim Beach", distance: "0.0 km" },
      { landmark: "Colva Beach", distance: "3.2 km" },
      { landmark: "Margao Railway Station", distance: "8.5 km" }
    ],
    pricePerNight: 24000,
    originalPrice: 29000,
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Embrace the relaxed Goan susegad vibe at this premier 5-star Mediterranean sanctuary on untouched golden sands with private villas and beachfront lobster dining.",
    amenities: [
      "Private Beach Access",
      "Golf Course & Tennis Courts",
      "Jiva Spa & Wellness",
      "Miguel Arcanjo Fine Dining Seafood",
      "Huge Oceanfront Pool"
    ],
    roomTypes: [
      {
        id: "taj_goa_garden_villa",
        name: "Garden Villa Room",
        price: 24000,
        size: "610 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
        perks: ["Private Verandah", "Free Breakfast", "Beach Walkway"]
      }
    ],
    coordinates: { lat: 15.2532, lng: 73.9168 },
    policies: { checkIn: "03:00 PM", checkOut: "12:00 PM", cancellation: "Free cancellation up to 48 hours", petsAllowed: true }
  },

  // ================= JAIPUR HOTELS =================
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
      { landmark: "City Palace Jaipur", distance: "4.8 km" }
    ],
    pricePerNight: 46000,
    originalPrice: 55000,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Referred to as the 'Jewel of Jaipur', Rambagh Palace exudes lavish Rajput grandeur with ornate marble latticework, peacock-filled gardens, and royal dining.",
    amenities: [
      "Indoor Heated & Outdoor Pools",
      "Suvarna Mahal Royal Dining Room",
      "Polo Bar",
      "Jiva Grande Spa"
    ],
    roomTypes: [
      {
        id: "rambagh_palace_room",
        name: "Palace Room",
        price: 46000,
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

  // ================= MANALI HOTELS =================
  {
    id: "the-span-resort-manali",
    name: "Span Resort & Spa Manali",
    destinationId: "manali",
    destinationName: "Manali",
    city: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "5-Star Mountain Resort",
    type: "Riverside Resort",
    rating: 4.89,
    reviewsCount: 1980,
    badge: "Beas Riverfront Stays",
    tagline: "Riverside luxury sanctuary with pine forest trails and Himalayan vistas",
    address: "Baragarh Estate, Kullu Manali Highway, Katrain, Manali, HP 175129",
    nearLocation: "On the banks of Beas River, Katrain valley",
    distanceToLandmarks: [
      { landmark: "Solang Valley", distance: "18.0 km" },
      { landmark: "Mall Road Manali", distance: "14.0 km" }
    ],
    pricePerNight: 16500,
    originalPrice: 21000,
    heroImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Nestled along the glacial waters of the Beas River surrounded by cedar and pine forest groves with majestic snow-clad Himalayan peaks.",
    amenities: [
      "Beas Riverfront Deck & Trout Fishing",
      "Heated Swimming Pool",
      "L’Occitane Spa",
      "Bonfire & Barbecue Evenings"
    ],
    roomTypes: [
      {
        id: "span_grand_deluxe",
        name: "Grand Deluxe River View Room",
        price: 16500,
        size: "480 sq.ft",
        bed: "King Bed",
        maxGuests: 2,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
        perks: ["River & Mountain view", "Fireplace", "Breakfast Included"]
      }
    ],
    coordinates: { lat: 32.1287, lng: 77.1354 },
    policies: { checkIn: "02:00 PM", checkOut: "11:00 AM", cancellation: "Free cancellation up to 48 hours", petsAllowed: true }
  }
];

export const HOTEL_AMENITY_FILTERS = [
  "Lake View",
  "Swimming Pool",
  "Spa & Wellness",
  "Free Breakfast",
  "Rooftop Dining",
  "Private Balcony",
  "Pet Friendly",
  "Free Wi-Fi"
];
