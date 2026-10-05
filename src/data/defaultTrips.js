import { DESTINATIONS } from './destinations.js';
import { generateId } from '../utils/helpers.js';

export const SAMPLE_GIR_TRIP = {
  id: "trip_muv1212y_o3ydx",
  title: "Gir National Park Wildlife & Lion Safari Expedition",
  destinationId: "gir",
  destinationName: "Gir National Park",
  destinationCountry: "India",
  destinationState: "Gujarat",
  coverImage: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1600&auto=format&fit=crop",
  startDate: "2026-10-15",
  endDate: "2026-10-18",
  daysCount: 3,
  travelers: 2,
  travelStyle: "Adventure",
  interests: ["Wildlife", "Safari", "Nature Reserve", "Birdwatching", "Photography"],
  selectedHotel: {
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
    badge: "Asia's First Biophilic Retreat",
    tagline: "8-acre mango orchard eco-retreat on the perimeter of the Asiatic lion sanctuary",
    address: "Sasan-Talala Road, Sasan Gir, Gir Somnath, Gujarat 362135",
    nearLocation: "Sasan Gir Safari Perimeter",
    pricePerNight: 23500,
    originalPrice: 28000,
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    amenities: [
      "Sunken Orchard Swimming Pool",
      "Som Wellness Spa & Yoga Studio",
      "Swadesh Farm-to-Table Restaurant",
      "Gir Lion Safari Booking Desk",
      "Free Wi-Fi"
    ]
  },
  selectedRoom: {
    id: "woods_studio_villa",
    name: "Woods Studio Orchard Villa",
    price: 23500,
    size: "620 sq.ft",
    bed: "King Bed",
    maxGuests: 2,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    perks: ["Private Garden Sit-Out", "Gourmet Breakfast Included", "Nature Walk with Naturalist"]
  },
  status: "upcoming",
  budget: {
    total: 85000,
    currency: "INR"
  },
  expenses: [
    {
      id: "exp_hotel_gir_01",
      title: "Woods at Sasan - Biophilic Jungle Resort (3 Nights Stay)",
      category: "hotel",
      amount: 70500,
      date: "2026-10-15"
    },
    {
      id: "exp_safari_gir_02",
      title: "Gir Open Jeep Forest Safari Permit (2 Travelers)",
      category: "activities",
      amount: 5600,
      date: "2026-10-16"
    },
    {
      id: "exp_devalia_gir_03",
      title: "Gir Interpretation Zone (Devalia) Entry",
      category: "activities",
      amount: 700,
      date: "2026-10-15"
    }
  ],
  notes: "Sinh Sadan safari permits confirmed. Carry original Govt photo ID (Aadhaar/Passport). Morning safari pickup at 05:45 AM from Woods at Sasan resort lobby.",
  itinerary: [
    {
      day: 1,
      date: "2026-10-15",
      title: "Arrival & Devaliya Wildlife Interpretation Zone",
      activities: [
        {
          id: "act_gir_1_1",
          time: "02:00 PM",
          title: "Check-in: Woods at Sasan - Biophilic Jungle Resort",
          category: "Stay",
          cost: 0,
          location: "Sasan Gir Safari Perimeter",
          notes: "Woods Studio Orchard Villa reserved. Refresh with fresh welcome kokum juice.",
          completed: false
        },
        {
          id: "act_gir_1_2",
          time: "03:30 PM",
          title: "Gir Interpretation Zone (Devalia)",
          category: "Sightseeing",
          cost: 350,
          location: "Devalia Safari Park, Gir",
          notes: "Fenced wildlife safari providing guaranteed sightings of Asiatic lions, leopards, and spotted deer.",
          completed: false
        },
        {
          id: "act_gir_1_3",
          time: "07:30 PM",
          title: "Kathiyawadi Dinner & Night Jungle Listening Session",
          category: "Culture",
          cost: 0,
          location: "Swadesh Restaurant, Sasan Gir",
          notes: "Authentic Gujarati Kathiyawadi feast followed by bio-acoustics jungle talk with a resident naturalist.",
          completed: false
        }
      ]
    },
    {
      day: 2,
      date: "2026-10-16",
      title: "Deep Teak Forest Open Jeep Safari & Birdwatching",
      activities: [
        {
          id: "act_gir_2_1",
          time: "06:00 AM",
          title: "Open Jeep Forest Safari",
          category: "Adventure",
          cost: 2800,
          location: "Gir National Park Teak Forest",
          notes: "Thrilling 3.5-hour dawn safari tracking prides of Asiatic lions, Indian leopards, and marsh mugger crocodiles.",
          completed: false
        },
        {
          id: "act_gir_2_2",
          time: "11:30 AM",
          title: "Organic Mango Orchard Farm Walks in Talala (Gir Kesar)",
          category: "Nature",
          cost: 0,
          location: "Talala Kesar Orchards",
          notes: "Walk through fertile mango groves and taste fresh Gir Kesar mango preserves and organic farm treats.",
          completed: false
        },
        {
          id: "act_gir_2_3",
          time: "03:30 PM",
          title: "Guided Birdwatching Tour near Kamleshwar Dam",
          category: "Adventure",
          cost: 0,
          location: "Kamleshwar Dam Reservoir",
          notes: "Spot crested serpent eagles, Indian pitta, painted sandgrouse, and marsh crocodiles.",
          completed: false
        },
        {
          id: "act_gir_2_4",
          time: "07:00 PM",
          title: "Maldhari Tribal Settlement Interaction",
          category: "Culture",
          cost: 0,
          location: "Gir Forest Perimeter Ness",
          notes: "Meet the indigenous Maldhari pastoralists who have coexisted with lions inside Gir forest for centuries.",
          completed: false
        }
      ]
    },
    {
      day: 3,
      date: "2026-10-17",
      title: "Hiran River Walk, Wellness & Souvenirs",
      activities: [
        {
          id: "act_gir_3_1",
          time: "06:30 AM",
          title: "Sunrise Nature Walk along Hiran River Perimeter",
          category: "Nature",
          cost: 0,
          location: "Hiran Riverbanks",
          notes: "Gentle morning stroll observing riverine flora and migratory waterfowl in the morning mist.",
          completed: false
        },
        {
          id: "act_gir_3_2",
          time: "10:00 AM",
          title: "Som Holistic Wellness Spa & Orchard Brunch",
          category: "Culture",
          cost: 0,
          location: "Woods at Sasan Orchard Deck",
          notes: "Herbal botanical therapy and seasonal sattvic brunch under ancient mango canopies.",
          completed: false
        },
        {
          id: "act_gir_3_3",
          time: "12:00 PM",
          title: "Check-out & Regional Handicraft Collection",
          category: "Sightseeing",
          cost: 0,
          location: "Sasan Gir Souvenir Hub",
          notes: "Pick up authentic Gir forest honey and handwoven textiles before heading to Rajkot / Junagadh airport.",
          completed: false
        }
      ]
    }
  ],
  createdAt: "2026-10-05T09:20:00.000Z"
};

export const generateFallbackTrip = (tripId) => {
  const lower = (tripId || '').toLowerCase();
  const matchedDest =
    DESTINATIONS.find((d) => lower.includes(d.id.toLowerCase())) ||
    DESTINATIONS.find((d) => d.id === 'gir') ||
    DESTINATIONS[0];

  const daysCount = 3;
  const startDate = "2026-10-15";
  const endDate = "2026-10-18";

  const itinerary = [];
  for (let i = 0; i < daysCount; i++) {
    const dayAtts = (matchedDest.attractions || []).slice(i * 2, i * 2 + 2);
    const acts = dayAtts.map((att, idx) => ({
      id: generateId('act'),
      time: idx === 0 ? "10:00 AM" : "03:30 PM",
      title: att.name,
      category: att.category || "Sightseeing",
      cost: att.entryFee || 0,
      location: att.name,
      notes: att.description || "",
      completed: false
    }));

    if (acts.length === 0 && matchedDest.activities && matchedDest.activities.length > 0) {
      acts.push({
        id: generateId('act'),
        time: "10:00 AM",
        title: matchedDest.activities[i % matchedDest.activities.length],
        category: "Adventure",
        cost: 0,
        location: matchedDest.name,
        notes: `Exploring ${matchedDest.name}`,
        completed: false
      });
    }

    itinerary.push({
      day: i + 1,
      date: `2026-10-${15 + i}`,
      title: i === 0 ? "Arrival & Highlights" : `Day ${i + 1} Discoveries`,
      activities: acts
    });
  }

  return {
    id: tripId,
    title: `${matchedDest.name} Journey`,
    destinationId: matchedDest.id,
    destinationName: matchedDest.name,
    destinationCountry: matchedDest.country || "India",
    destinationState: matchedDest.state || "",
    coverImage: matchedDest.heroImage,
    startDate,
    endDate,
    daysCount,
    travelers: 2,
    travelStyle: "Adventure",
    interests: matchedDest.tags || ["Exploration"],
    selectedHotel: null,
    selectedRoom: null,
    status: "upcoming",
    budget: {
      total: (matchedDest.averageBudget || 4500) * daysCount * 2,
      currency: "INR"
    },
    expenses: [],
    notes: `Trip to ${matchedDest.name}`,
    itinerary,
    createdAt: new Date().toISOString()
  };
};
