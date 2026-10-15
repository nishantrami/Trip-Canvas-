/**
 * TripCanvas Intelligent Travel Assistant Engine
 * Hybrid Conversational AI with deep local travel intelligence & optional Gemini API integration.
 * Answers destination inquiries, itinerary planning, hotel/dining recommendations,
 * budget calculations, packing lists, app navigation, and general travel knowledge.
 */

import { destinationService } from './destinationService';
import { hotelService } from './hotelService';
import { restaurantService } from './restaurantService';

// Fallback & comprehensive travel knowledge for destinations outside dataset or general questions
const GENERAL_TRAVEL_TIPS = {
  visa: "For international travel, always ensure your passport has at least 6 months validity from your travel date. Many popular destinations like Bali, Dubai, Thailand, and Sri Lanka offer Visa on Arrival or quick e-Visas for Indian passport holders. For Schengen (Europe) or USA/UK, apply at least 4 to 8 weeks in advance.",
  flight_booking: "Pro tips for booking flights: 1) Book domestic flights 3-6 weeks in advance; international 8-12 weeks in advance. 2) Mid-week departures (Tuesday/Wednesday) are often 15-25% cheaper. 3) Use incognito mode to avoid dynamic price increases. 4) Always verify baggage allowances before booking ultra-low-cost fares.",
  currency: "Carrying a zero-forex or low-forex markup travel card (like Niyo, Fi, or Scapia) saves 3.5-5% over standard credit/debit cards. Always keep ₹2,000 - ₹5,000 equivalent in local cash for street stalls, tips, and rural transit.",
  safety: "General solo traveler safety rules: 1) Keep digital copies of your passport and ID in Google Drive/iCloud. 2) Share your live location with a trusted friend/family member. 3) Avoid unregistered taxis at night; use official airport taxi counters or rideshare apps. 4) Purchase comprehensive travel insurance covering medical emergencies and trip cancellations."
};

// Common packing checklists by climate
const PACKING_PRESETS = {
  snow: [
    "Thermal innerwear (top & bottoms - 2 to 3 pairs)",
    "Waterproof insulated down jacket or snow parka",
    "Waterproof snow boots with deep rubber treads",
    "Woolen beanie, fleece neck gaiter, and touch-screen thermal gloves",
    "Polarized UV400 sunglasses (essential for snow glare)",
    "Heavy moisturiser, cold cream, and SPF 50+ sunscreen",
    "Lip balm with SPF & insulated thermos flask for warm water"
  ],
  beach: [
    "Quick-dry UV swimwear & linen shirts / breezy beach dresses",
    "Broad-spectrum water-resistant sunscreen (SPF 50+) & soothing aloe vera gel",
    "Polarized sunglasses & wide-brim sun hat",
    "Waterproof phone pouch & microfiber quick-drying beach towel",
    "Water shoes / flip-flops & reusable insulated water bottle",
    "Light evening cardigan (for breezy coastal nights)"
  ],
  hills: [
    "Layerable fleece jackets and comfortable windcheater",
    "Sturdy hiking shoes or trail sneakers with good grip",
    "Lightweight rain poncho or compact umbrella",
    "Comfortable trekking trousers and moisture-wicking socks",
    "Power bank (batteries drain faster in cold weather)",
    "Basic motion sickness tablets and pain relief spray"
  ],
  heritage_culture: [
    "Modest breathable cotton clothing covering knees and shoulders (for temples/palaces)",
    "Slip-on comfortable walking shoes or sandals (easy to remove at shrine entrances)",
    "Light cotton scarf or stole (useful for covering head in religious sites)",
    "Sun umbrella or wide-brim hat & sunglasses",
    "Hand sanitizer, wet wipes, and small change for temple offerings & locker tokens"
  ]
};

// Destination keyword aliases to resolve common search terms
const DESTINATION_ALIASES = {
  udaipur: ['udaipur', 'lake pichola', 'city of lakes', 'fateh sagar'],
  goa: ['goa', 'panaji', 'calangute', 'baga', 'anjuna', 'palolem', 'north goa', 'south goa'],
  jaipur: ['jaipur', 'pink city', 'amber fort', 'hawa mahal'],
  manali: ['manali', 'solang', 'rohtang', 'atal tunnel', 'kullu'],
  kashmir: ['kashmir', 'srinagar', 'gulmarg', 'pahalgam', 'dal lake', 'sonamarg'],
  kerala: ['kerala', 'munnar', 'alleppey', 'alappuzha', 'kochi', 'cochin', 'wayanad', 'kovalam'],
  mumbai: ['mumbai', 'bombay', 'marine drive', 'gateway of india', 'bandra'],
  delhi: ['delhi', 'new delhi', 'qutub minar', 'chandni chowk', 'connaught place'],
  gujarat: ['gujarat', 'gir', 'ahmedabad', 'rann of kutch', 'statue of unity', 'somnath', 'dwarka'],
  paris: ['paris', 'france', 'eiffel tower', 'louvre', 'seine'],
  tokyo: ['tokyo', 'japan', 'shibuya', 'shinjuku', 'mount fuji', 'kyoto'],
  bali: ['bali', 'indonesia', 'ubud', 'seminyak', 'canggu', 'uluwatu', 'kuta'],
  dubai: ['dubai', 'uae', 'burj khalifa', 'palm jumeirah', 'abu dhabi'],
  swiss_alps: ['swiss alps', 'switzerland', 'zermatt', 'matterhorn', 'interlaken', 'zurich', 'lucerne'],
  new_york: ['new york', 'nyc', 'manhattan', 'brooklyn', 'times square', 'central park'],
  rome: ['rome', 'italy', 'colosseum', 'vatican'],
  london: ['london', 'uk', 'big ben', 'thames', 'england']
};

export class TravelAssistantEngine {
  constructor() {
    this.apiKey = localStorage.getItem('tripcanvas_ai_api_key') || '';
    this.provider = localStorage.getItem('tripcanvas_ai_provider') || 'builtin'; // 'builtin' | 'gemini'
  }

  setApiKey(key, provider = 'gemini') {
    this.apiKey = key ? key.trim() : '';
    this.provider = provider;
    if (this.apiKey) {
      localStorage.setItem('tripcanvas_ai_api_key', this.apiKey);
      localStorage.setItem('tripcanvas_ai_provider', this.provider);
    } else {
      localStorage.removeItem('tripcanvas_ai_api_key');
      localStorage.setItem('tripcanvas_ai_provider', 'builtin');
      this.provider = 'builtin';
    }
  }

  getApiKey() {
    return this.apiKey || import.meta.env.VITE_GEMINI_API_KEY || '';
  }

  /**
   * Main entry point to answer user questions
   */
  async processQuery(userInput, conversationHistory = []) {
    const cleanInput = (userInput || '').trim();
    if (!cleanInput) {
      return {
        text: "I didn't quite catch that. Could you ask me about a destination, itinerary, hotel, budget, or travel advice?",
        suggestions: ["Plan 3 days in Kashmir", "Goa budget under ₹20,000", "Top hotels in Udaipur", "Best time to visit Bali"]
      };
    }

    const activeKey = this.getApiKey();

    // If Gemini API is configured and provider is gemini, attempt live LLM request with local groundings
    if (activeKey && this.provider === 'gemini') {
      try {
        const geminiResult = await this.queryGeminiAPI(cleanInput, activeKey, conversationHistory);
        if (geminiResult && geminiResult.text) {
          // Enrich response with local matched cards if any destinations/hotels were referenced
          const matchedDest = this.detectDestination(cleanInput) || this.detectDestination(geminiResult.text);
          if (matchedDest) {
            const enrichedCards = this.buildContextCards(matchedDest, cleanInput);
            geminiResult.cards = { ...geminiResult.cards, ...enrichedCards };
          }
          return geminiResult;
        }
      } catch (err) {
        console.warn('Gemini API call failed, falling back to built-in Intelligent Engine:', err);
      }
    }

    // Default: Built-In High Intelligence Travel Engine (Zero latency, reliable, rich cards)
    return this.generateBuiltInResponse(cleanInput);
  }

  /**
   * Resolve destination from text
   */
  detectDestination(text) {
    const lower = text.toLowerCase();
    const allDestinations = destinationService.getAllDestinations();

    // 1. Direct match on id or name
    for (const dest of allDestinations) {
      if (lower.includes(dest.name.toLowerCase()) || lower.includes(dest.id.toLowerCase())) {
        return dest;
      }
    }

    // 2. Check alias map
    for (const [key, aliases] of Object.entries(DESTINATION_ALIASES)) {
      if (aliases.some(alias => lower.includes(alias))) {
        const found = allDestinations.find(
          d => d.id.toLowerCase() === key || d.name.toLowerCase().includes(key.replace('_', ' '))
        );
        if (found) return found;
      }
    }

    // 3. Match state or country
    for (const dest of allDestinations) {
      if (dest.state && lower.includes(dest.state.toLowerCase())) return dest;
      if (dest.country && lower.includes(dest.country.toLowerCase()) && dest.country.toLowerCase() !== 'india') {
        return dest;
      }
    }

    return null;
  }

  /**
   * Detect intent and entity properties
   */
  parseIntent(text) {
    const lower = text.toLowerCase();

    // Intent patterns
    const isGreeting = /^(hi|hello|hey|greetings|hola|namaste|good\s*(morning|afternoon|evening)|yo\b)/i.test(lower);
    const isAppHelp = /(how\s*(do|to|can)|where\s*(is|are)|website|app|tripcanvas|create\s*trip|my\s*bookings|favorites|wishlist|contact|support|profile|admin)/i.test(lower);
    const isItinerary = /(plan|itinerary|day\s*by\s*day|schedule|things\s*to\s*do|what\s*to\s*do|route|trip\s*for|days\s*in)/i.test(lower);
    const isHotel = /(hotel|stay|resort|villa|room|accommodation|where\s*to\s*stay|hostel|palace|haveli)/i.test(lower);
    const isFood = /(food|restaurant|eat|dining|cafe|dish|cuisine|breakfast|dinner|lunch|veg|thali|delicacy)/i.test(lower);
    const isBudget = /(budget|cost|price|how\s*much|expense|rate|cheap|affordable|rupees|inr|estimate)/i.test(lower);
    const isWeather = /(weather|temperature|climate|rain|monsoon|snow|season|best\s*time|when\s*to\s*visit)/i.test(lower);
    const isPacking = /(pack|packing|clothes|wear|what\s*to\s*bring|essentials|bag|luggage)/i.test(lower);
    const isGeneralTravel = /(visa|passport|flight|currency|safety|solo|tip|airport|train)/i.test(lower);

    // Extract days count if mentioned
    let days = 3;
    const daysMatch = lower.match(/(\d+)\s*(?:-| )?(?:day|days|night|nights)/);
    if (daysMatch && daysMatch[1]) {
      days = Math.min(14, Math.max(1, parseInt(daysMatch[1], 10)));
    } else if (lower.includes('weekend')) {
      days = 2;
    } else if (lower.includes('week')) {
      days = 7;
    }

    // Extract budget number if mentioned
    let budgetNumber = null;
    const budgetMatch = lower.match(/(?:₹|rs\.?|inr)?\s*(\d{1,3}(?:,\d{3})*|\d+)(?:k)?\s*(?:rs|inr|rupees)?/i);
    if (budgetMatch && budgetMatch[1]) {
      let raw = budgetMatch[1].replace(/,/g, '');
      let num = parseInt(raw, 10);
      if (lower.includes(`${budgetMatch[1]}k`)) {
        num *= 1000;
      }
      if (num >= 500 && num <= 1000000) {
        budgetNumber = num;
      }
    }

    // Extract travel style / mood
    let style = 'balanced';
    if (lower.includes('luxury') || lower.includes('5-star') || lower.includes('royal')) style = 'luxury';
    if (lower.includes('budget') || lower.includes('cheap') || lower.includes('backpack')) style = 'budget';
    if (lower.includes('romantic') || lower.includes('honeymoon') || lower.includes('couple')) style = 'romantic';
    if (lower.includes('family') || lower.includes('kids')) style = 'family';
    if (lower.includes('adventure') || lower.includes('trekking')) style = 'adventure';

    return {
      isGreeting,
      isAppHelp,
      isItinerary,
      isHotel,
      isFood,
      isBudget,
      isWeather,
      isPacking,
      isGeneralTravel,
      days,
      budgetNumber,
      style
    };
  }

  /**
   * Built-in natural language answer generator
   */
  generateBuiltInResponse(userInput) {
    const destination = this.detectDestination(userInput);
    const intent = this.parseIntent(userInput);

    // 1. App Navigation / Help Queries
    if (intent.isAppHelp && !destination) {
      return this.handleAppHelp(userInput);
    }

    // 2. Greetings
    if (intent.isGreeting && !destination && !intent.isItinerary && !intent.isHotel) {
      return {
        text: `### Hello and welcome to TripCanvas AI! 🧭✨\n\nI am your **personal 24/7 travel concierge & trip planning assistant**. I can help you with:\n\n- 🏔️ **Crafting custom day-by-day itineraries** for any destination\n- 🏨 **Recommending vetted hotels & royal stays** tailored to your budget\n- 🍛 **Discovering authentic regional dining & cafes**\n- 💰 **Calculating estimated trip costs & expense splits**\n- 🎒 **Weather-smart packing checklists & best times to visit**\n- 🚀 **Navigating TripCanvas features** (Trip Planner, Bookings, Wishlist)\n\nWhat dream destination are you planning to explore next?`,
        suggestions: [
          "Plan 3 days in Udaipur",
          "Best time & hotels for Kashmir",
          "Goa beach trip budget under ₹15,000",
          "How do I create a new trip?"
        ]
      };
    }

    // 3. Packing Lists
    if (intent.isPacking) {
      return this.handlePackingQuery(destination, intent);
    }

    // 4. Weather & Best Time to Visit
    if (intent.isWeather && destination) {
      return this.handleWeatherQuery(destination);
    }

    // 5. Itinerary Planning
    if (intent.isItinerary && destination) {
      return this.handleItineraryQuery(destination, intent);
    }

    // 6. Hotel Search & Stays
    if (intent.isHotel && destination) {
      return this.handleHotelQuery(destination, intent);
    }

    // 7. Food & Dining
    if (intent.isFood && destination) {
      return this.handleFoodQuery(destination, intent);
    }

    // 8. Budget Estimation
    if (intent.isBudget && destination) {
      return this.handleBudgetQuery(destination, intent);
    }

    // 9. Destination General Spotlight (user just typed "Udaipur" or "Tell me about Kashmir")
    if (destination) {
      return this.handleDestinationSpotlight(destination, intent);
    }

    // 10. General Travel Tips (visa, flights, currency, safety)
    if (intent.isGeneralTravel) {
      return this.handleGeneralTravelAdvice(userInput, intent);
    }

    // 11. Recommendations based on mood / style (romantic, snow, beach, heritage)
    const moodResponse = this.handleMoodRecommendation(userInput, intent);
    if (moodResponse) {
      return moodResponse;
    }

    // 12. Smart Fallback: Helpful suggestions and general intelligence
    return {
      text: `### Exploring your travel request 🌍\n\nI am ready to help you plan any journey! To give you the most detailed recommendations, could you specify:\n\n1. **Destination**: (e.g., *Kashmir, Udaipur, Kerala, Goa, Manali, Paris, Bali, Dubai, Tokyo, Swiss Alps*)\n2. **Duration**: (e.g., *3 days, 5 days, a weekend getaway*)\n3. **Travel Style or Budget**: (e.g., *Luxury, Budget-friendly, Couple/Honeymoon, Family*)\n\nAlternatively, select one of the popular options below to get started instantly!`,
      suggestions: [
        "Plan 3 days in Kashmir",
        "Best luxury hotels in Udaipur",
        "Kerala 5-day honeymoon itinerary",
        "Goa trip budget under ₹20,000"
      ]
    };
  }

  /**
   * Handle Destination Spotlight
   */
  handleDestinationSpotlight(dest, intent) {
    const hotels = hotelService.getHotelsByDestination(dest.id).slice(0, 3);
    const restaurants = restaurantService.getRestaurantsByDestination(dest.id).slice(0, 3);
    const attractions = dest.attractions ? dest.attractions.slice(0, 4) : [];

    let text = `### 📍 Discover ${dest.name}, ${dest.state ? dest.state + ', ' : ''}${dest.country}\n\n`;
    text += `> *"${dest.tagline || 'A world-class destination awaits you.'}"*\n\n`;
    text += `${dest.description}\n\n`;

    text += `#### 🌟 Essential Travel Facts:\n`;
    text += `- **🌤️ Best Time to Visit:** ${dest.bestTime || 'Year-round'}\n`;
    text += `- **⏱️ Ideal Duration:** ${dest.idealDuration || '3 - 4 Days'}\n`;
    text += `- **💰 Estimated Daily Budget:** ₹${(dest.averageBudget || 4500).toLocaleString('en-IN')} / person\n`;
    if (dest.weatherProfile) {
      text += `- **🌡️ Current Climate:** ${dest.weatherProfile.temp}°C, ${dest.weatherProfile.condition} (Feels like ${dest.weatherProfile.feelsLike}°C)\n`;
    }

    if (attractions.length > 0) {
      text += `\n#### 🏛️ Top Must-Visit Attractions:\n`;
      attractions.forEach(att => {
        text += `- **${att.name}** (${att.placeType || att.category || 'Sightseeing'}) — *${att.duration || '2-3 hrs'}* ${att.entryFee ? `(Entry: ₹${att.entryFee})` : '(Free entry)'}\n`;
      });
    }

    text += `\nWould you like me to craft a **custom ${dest.idealDuration || '3-day'} itinerary**, show you the **best hotel stays**, or estimate the **complete trip budget**?`;

    return {
      text,
      cards: {
        destination: dest,
        hotels: hotels.length > 0 ? hotels : null,
        restaurants: restaurants.length > 0 ? restaurants : null
      },
      suggestions: [
        `Plan a 3-day itinerary for ${dest.name}`,
        `Best hotels in ${dest.name}`,
        `What to eat in ${dest.name}`,
        `Total budget for ${dest.name}`
      ],
      action: {
        type: 'OPEN_TRIP_PLANNER',
        label: `Plan Trip to ${dest.name}`,
        destinationId: dest.id
      }
    };
  }

  /**
   * Handle Itinerary Generation
   */
  handleItineraryQuery(dest, intent) {
    const days = intent.days || 3;
    const attractions = dest.attractions || [];
    const hotels = hotelService.getHotelsByDestination(dest.id).slice(0, 2);
    const restaurants = restaurantService.getRestaurantsByDestination(dest.id).slice(0, 3);

    const itineraryDays = [];

    for (let i = 1; i <= Math.min(days, 5); i++) {
      const att1 = attractions[(i - 1) * 2 % attractions.length] || { name: 'Iconic Heritage Quarter Walk', duration: '2.5 Hours' };
      const att2 = attractions[((i - 1) * 2 + 1) % attractions.length] || { name: 'Sunset Viewpoint & Cultural Market', duration: '2 Hours' };
      const rest = restaurants[i % (restaurants.length || 1)] || { name: 'Local Authentic Dining' };

      itineraryDays.push({
        day: i,
        title: `Day ${i}: ${i === 1 ? 'Arrival & Historic Landmarks' : i === 2 ? 'Cultural Wonders & Local Immersion' : i === 3 ? 'Hidden Gems & Scenic Vistas' : 'Relaxation & Local Souvenirs'}`,
        morning: `Start at 9:00 AM with a visit to **${att1.name}**. Explore its architecture and viewpoints (${att1.duration || '2.5 hrs'}).`,
        afternoon: `Enjoy authentic lunch at **${rest.name}**. Head over to **${att2.name}** for sightseeing and photography.`,
        evening: `Catch the golden hour sunset. Stroll through the local bazaar for handicrafts, and savor traditional dinner by the scenic promenade.`,
        estimatedCost: Math.round((dest.averageBudget || 4500) * 1.1)
      });
    }

    let text = `### 🗺️ Curated ${days}-Day Itinerary for ${dest.name}\n\n`;
    text += `Here is your optimized day-by-day travel plan designed for a **${intent.style}** experience:\n\n`;

    itineraryDays.forEach(d => {
      text += `#### 🗓️ ${d.title}\n`;
      text += `- **🌅 Morning:** ${d.morning}\n`;
      text += `- **☀️ Afternoon:** ${d.afternoon}\n`;
      text += `- **🌙 Evening:** ${d.evening}\n`;
      text += `- **💵 Day Budget:** ~₹${d.estimatedCost.toLocaleString('en-IN')}\n\n`;
    });

    const totalEst = itineraryDays.reduce((acc, curr) => acc + curr.estimatedCost, 0) + ((hotels[0]?.pricePerNight || 3500) * days);

    text += `> 💡 **Total Estimated Trip Cost (Stay + Activities + Food):** ~₹${totalEst.toLocaleString('en-IN')} for 1 person.\n\n`;
    text += `Ready to customize and book? You can load this itinerary directly into the **TripCanvas Trip Planner**!`;

    return {
      text,
      cards: {
        destination: dest,
        itinerary: {
          destinationName: dest.name,
          daysCount: days,
          days: itineraryDays,
          totalCost: totalEst
        },
        hotels: hotels
      },
      suggestions: [
        `Show top hotels in ${dest.name}`,
        `What should I pack for ${dest.name}?`,
        `Famous street food in ${dest.name}`,
        `Budget for 2 people in ${dest.name}`
      ],
      action: {
        type: 'OPEN_TRIP_PLANNER',
        label: `Load into Trip Planner`,
        destinationId: dest.id
      }
    };
  }

  /**
   * Handle Hotel Queries
   */
  handleHotelQuery(dest, intent) {
    let hotels = hotelService.getHotelsByDestination(dest.id);

    if (intent.style === 'luxury') {
      hotels = hotels.filter(h => h.category?.toLowerCase().includes('luxury') || h.pricePerNight > 10000 || h.rating >= 4.8);
    } else if (intent.style === 'budget') {
      hotels = hotels.filter(h => h.pricePerNight < 6000);
    }

    if (hotels.length === 0) {
      hotels = hotelService.getHotelsByDestination(dest.id);
    }

    const topHotels = hotels.slice(0, 4);

    let text = `### 🏨 Best Recommended Stays in ${dest.name}\n\n`;
    text += `Here are the top-rated accommodations in **${dest.name}** matching your preferences:\n\n`;

    topHotels.forEach((h, idx) => {
      text += `**${idx + 1}. ${h.name}** ⭐ ${h.rating} (${h.reviewsCount || 100}+ reviews)\n`;
      text += `- **Price:** ₹${h.pricePerNight.toLocaleString('en-IN')} / night\n`;
      text += `- **Category:** ${h.category || h.type || 'Boutique Hotel'}\n`;
      text += `- **Location:** ${h.address || h.nearLocation || dest.name}\n`;
      if (h.amenities && h.amenities.length > 0) {
        text += `- **Top Amenities:** ${h.amenities.slice(0, 4).join(', ')}\n`;
      }
      text += `\n`;
    });

    text += `💡 *Tip: Prices may vary during peak tourist season. Booking at least 2 weeks in advance is recommended.*`;

    return {
      text,
      cards: {
        destination: dest,
        hotels: topHotels
      },
      suggestions: [
        `Plan a trip to ${dest.name}`,
        `Restaurants near these hotels`,
        `How much will 3 nights cost in ${dest.name}?`,
        `Explore all hotels in ${dest.name}`
      ],
      action: {
        type: 'NAVIGATE',
        label: `View All Hotels in ${dest.name}`,
        url: `/hotels?destination=${dest.id}`
      }
    };
  }

  /**
   * Handle Food & Dining Queries
   */
  handleFoodQuery(dest, intent) {
    const restaurants = restaurantService.getRestaurantsByDestination(dest.id);
    const topRestaurants = restaurants.slice(0, 4);

    let text = `### 🍽️ Culinary Guide & Top Restaurants in ${dest.name}\n\n`;
    text += `${dest.name} offers a phenomenal culinary heritage. Here are the top dining destinations you cannot miss:\n\n`;

    topRestaurants.forEach((r, idx) => {
      text += `**${idx + 1}. ${r.name}** ⭐ ${r.rating}\n`;
      text += `- **Cuisine:** ${r.cuisines ? r.cuisines.join(', ') : 'Regional Specialties'}\n`;
      text += `- **Cost for Two:** ₹${r.costForTwo.toLocaleString('en-IN')}\n`;
      text += `- **Specialties:** ${r.specialties ? r.specialties.slice(0, 3).join(', ') : 'Signature Chef Creations'}\n`;
      text += `- **Location:** ${r.nearLocation || r.address || dest.name}\n\n`;
    });

    text += `> 🍛 **Must-Try Local Delicacies:** `;
    if (dest.id === 'udaipur' || dest.id === 'jaipur') {
      text += `Dal Baati Churma, Gatte ki Sabzi, Laal Maas, Ker Sangri, and Mawa Kachori.\n`;
    } else if (dest.id === 'kashmir') {
      text += `Traditional Wazwan, Rogan Josh, Gushtaba, Yakhni, and warm Kashmiri Kahwa with saffron & crushed almonds.\n`;
    } else if (dest.id === 'kerala') {
      text += `Kerala Sadya on banana leaf, Appam with stew, Malabar Fish Curry, and Karimeen Pollichathu.\n`;
    } else if (dest.id === 'goa') {
      text += `Goan Fish Curry Rice, Prawn Balchão, Pork/Chicken Vindaloo, Bebinca, and fresh feni.\n`;
    } else if (dest.id === 'mumbai') {
      text += `Vada Pav, Pav Bhaji, Bombay Duck fry, Bun Maska & Irani Chai.\n`;
    } else if (dest.id === 'paris') {
      text += `Buttery Croissants, Duck Confit, Escargots, Boeuf Bourguignon, and fresh Macarons.\n`;
    } else if (dest.id === 'tokyo') {
      text += `Authentic Tonkotsu Ramen, Edomae Sushi, Crispy Tempura, Wagyu beef skewers, and Matcha parfait.\n`;
    } else {
      text += `Local street food delicacies, chef signature curries, and regional sweets.\n`;
    }

    return {
      text,
      cards: {
        destination: dest,
        restaurants: topRestaurants
      },
      suggestions: [
        `Best hotels near these dining spots`,
        `Plan a 3-day itinerary for ${dest.name}`,
        `Budget for food in ${dest.name}`
      ],
      action: {
        type: 'NAVIGATE',
        label: `Explore Restaurants in ${dest.name}`,
        url: `/restaurants?destination=${dest.id}`
      }
    };
  }

  /**
   * Handle Budget Breakdown Queries
   */
  handleBudgetQuery(dest, intent) {
    const days = intent.days || 3;
    const hotelRate = (dest.averageBudget || 4500) * 0.9;
    const mealsDaily = 1200;
    const transitDaily = 800;
    const activitiesDaily = 700;
    const bufferDaily = 500;

    const totalDaily = hotelRate + mealsDaily + transitDaily + activitiesDaily + bufferDaily;
    const totalTrip = Math.round(totalDaily * days);

    let text = `### 💰 Estimated Trip Budget: ${dest.name} (${days} Days)\n\n`;
    text += `Here is a realistic, itemized cost estimate for **1 traveler** for a **${days}-day trip** to **${dest.name}**:\n\n`;

    text += `| Expense Category | Daily Estimate | Total (${days} Days) |\n`;
    text += `| :--- | :--- | :--- |\n`;
    text += `| 🏨 **Hotel & Accommodation** | ₹${Math.round(hotelRate).toLocaleString('en-IN')} | ₹${Math.round(hotelRate * days).toLocaleString('en-IN')} |\n`;
    text += `| 🍛 **Meals & Fine Dining** | ₹${mealsDaily.toLocaleString('en-IN')} | ₹${(mealsDaily * days).toLocaleString('en-IN')} |\n`;
    text += `| 🚕 **Local Transport & Cabs** | ₹${transitDaily.toLocaleString('en-IN')} | ₹${(transitDaily * days).toLocaleString('en-IN')} |\n`;
    text += `| 🎟️ **Sightseeing & Entry Passes** | ₹${activitiesDaily.toLocaleString('en-IN')} | ₹${(activitiesDaily * days).toLocaleString('en-IN')} |\n`;
    text += `| 🛍️ **Shopping & Buffer Fund** | ₹${bufferDaily.toLocaleString('en-IN')} | ₹${(bufferDaily * days).toLocaleString('en-IN')} |\n`;
    text += `| **TOTAL ESTIMATED COST** | **₹${Math.round(totalDaily).toLocaleString('en-IN')}** | **₹${totalTrip.toLocaleString('en-IN')}** |\n\n`;

    text += `> 💡 **For Couples (2 Travelers):** Expect around **₹${Math.round(totalTrip * 1.65).toLocaleString('en-IN')}** because hotel rooms are shared!\n\n`;
    text += `Want to lock in your numbers? Use the **TripCanvas Budget-First Planner** to allocate expenses dynamically.`;

    return {
      text,
      cards: {
        destination: dest,
        budget: {
          destinationName: dest.name,
          days,
          categories: {
            hotel: Math.round(hotelRate * days),
            food: mealsDaily * days,
            transport: transitDaily * days,
            activities: activitiesDaily * days,
            other: bufferDaily * days
          },
          total: totalTrip
        }
      },
      suggestions: [
        `Plan a ${days}-day trip to ${dest.name}`,
        `Find budget hotels under ₹4,000 in ${dest.name}`,
        `What to pack for ${dest.name}`
      ],
      action: {
        type: 'OPEN_TRIP_PLANNER',
        label: `Start Planning with ₹${totalTrip.toLocaleString('en-IN')} Budget`,
        destinationId: dest.id
      }
    };
  }

  /**
   * Handle Weather & Best Season Queries
   */
  handleWeatherQuery(dest) {
    const wp = dest.weatherProfile || { temp: 24, condition: 'Pleasant', humidity: '50%', wind: '10 km/h', feelsLike: 24 };

    let text = `### 🌤️ Weather & Climate Guide: ${dest.name}\n\n`;
    text += `- **Current Average Temperature:** ${wp.temp}°C (Feels like ${wp.feelsLike}°C)\n`;
    text += `- **Sky Conditions:** ${wp.condition}\n`;
    text += `- **Humidity & Wind:** ${wp.humidity || '45%'}, ${wp.wind || '12 km/h'}\n`;
    text += `- **🏆 Peak Season / Best Time to Visit:** **${dest.bestTime || 'October to March'}**\n\n`;

    text += `#### 🗓️ Season Breakdown:\n`;
    text += `- **Autumn & Winter (Oct - Feb):** Ideal pleasant weather, great for sightseeing and outdoor explorations.\n`;
    text += `- **Summer (Mar - Jun):** Warm during the afternoon; mornings and late evenings remain great for activities.\n`;
    text += `- **Monsoon (Jul - Sep):** Lush green landscapes, fewer tourists, and discounted hotel rates.\n\n`;
    text += `Would you like me to generate a weather-tailored packing checklist for ${dest.name}?`;

    return {
      text,
      cards: {
        destination: dest
      },
      suggestions: [
        `What to pack for ${dest.name}`,
        `Plan a 3-day itinerary for ${dest.name}`,
        `Top hotels in ${dest.name}`
      ]
    };
  }

  /**
   * Handle Packing Queries
   */
  handlePackingQuery(dest, intent) {
    let category = 'heritage_culture';
    let destName = dest ? dest.name : 'your destination';

    if (dest) {
      const lowerCat = (dest.category || '').toLowerCase();
      const lowerName = dest.name.toLowerCase();
      if (lowerCat.includes('snow') || lowerName.includes('kashmir') || lowerName.includes('manali') || lowerName.includes('swiss')) {
        category = 'snow';
      } else if (lowerCat.includes('beach') || lowerName.includes('goa') || lowerName.includes('bali')) {
        category = 'beach';
      } else if (lowerCat.includes('mountain') || lowerCat.includes('hills') || lowerName.includes('kerala')) {
        category = 'hills';
      }
    }

    const items = PACKING_PRESETS[category] || PACKING_PRESETS.heritage_culture;

    let text = `### 🎒 Essential Packing Checklist for ${destName}\n\n`;
    text += `Based on the climate and terrain of **${destName}**, here is your smart checklist:\n\n`;

    items.forEach(item => {
      text += `- [ ] ${item}\n`;
    });

    text += `\n#### 📄 Essential Travel Documents:\n`;
    text += `- [ ] Government photo ID (Aadhaar / Driving License / Passport)\n`;
    text += `- [ ] Hotel booking confirmations & e-Tickets (keep offline PDF copies)\n`;
    text += `- [ ] Medical insurance cards & prescription medicines\n`;
    text += `- [ ] Portable 10,000mAh+ power bank with fast-charging cables\n\n`;
    text += `*Ready to pack? You can also check off your items directly inside your Trip Details checklist in TripCanvas!*`;

    return {
      text,
      cards: dest ? { destination: dest } : null,
      suggestions: [
        dest ? `Plan a trip to ${dest.name}` : "Plan a trip to Kashmir",
        dest ? `Weather in ${dest.name}` : "Best hotels in Goa",
        "How do I create a new trip?"
      ]
    };
  }

  /**
   * Handle Mood / Category based recommendations
   */
  handleMoodRecommendation(userInput, intent) {
    const lower = userInput.toLowerCase();
    const all = destinationService.getAllDestinations();

    let matched = [];
    let title = '';

    if (lower.includes('romantic') || lower.includes('honeymoon') || lower.includes('couple')) {
      title = 'Romantic & Honeymoon Escapes';
      matched = all.filter(d => d.tags?.some(t => /romance|honeymoon|lakes/i.test(t)) || /udaipur|kashmir|kerala|paris|bali/i.test(d.id));
    } else if (lower.includes('snow') || lower.includes('winter') || lower.includes('ski')) {
      title = 'Snow & Winter Wonderland Destinations';
      matched = all.filter(d => /kashmir|manali|swiss/i.test(d.id));
    } else if (lower.includes('beach') || lower.includes('coastal') || lower.includes('ocean')) {
      title = 'Sun-Kissed Beach Getaways';
      matched = all.filter(d => /goa|bali|kerala/i.test(d.id));
    } else if (lower.includes('budget') || lower.includes('cheap') || lower.includes('affordable')) {
      title = 'Best Value & Budget-Friendly Destinations';
      matched = all.filter(d => (d.averageBudget && d.averageBudget <= 4000) || d.budgetTier === 'Budget');
    } else if (lower.includes('adventure') || lower.includes('wildlife') || lower.includes('safari')) {
      title = 'Wildlife & Adventure Expeditions';
      matched = all.filter(d => d.tags?.some(t => /wildlife|safari|adventure|trekking/i.test(t)) || /gir|manali/i.test(d.id));
    }

    if (matched.length > 0) {
      const top3 = matched.slice(0, 3);
      let text = `### 🌟 Handpicked ${title}\n\n`;
      text += `Here are our top recommended travel destinations tailored for your getaway:\n\n`;

      top3.forEach((d, idx) => {
        text += `**${idx + 1}. ${d.name}** (${d.state ? d.state + ', ' : ''}${d.country})\n`;
        text += `- **Tagline:** *"${d.tagline}"*\n`;
        text += `- **Best Time:** ${d.bestTime}\n`;
        text += `- **Budget:** ~₹${(d.averageBudget || 4500).toLocaleString('en-IN')} / person / day\n\n`;
      });

      text += `Select any destination below to craft an itinerary or view luxury stays!`;

      return {
        text,
        cards: {
          destinations: top3
        },
        suggestions: top3.map(d => `Plan 3 days in ${d.name}`)
      };
    }

    return null;
  }

  /**
   * Handle General Travel Advice (visa, currency, solo safety, flights)
   */
  handleGeneralTravelAdvice(userInput, intent) {
    const lower = userInput.toLowerCase();
    let adviceKey = 'safety';

    if (lower.includes('visa') || lower.includes('passport')) adviceKey = 'visa';
    else if (lower.includes('flight') || lower.includes('airline') || lower.includes('ticket')) adviceKey = 'flight_booking';
    else if (lower.includes('currency') || lower.includes('forex') || lower.includes('atm') || lower.includes('money')) adviceKey = 'currency';

    return {
      text: `### ✈️ Travel Expert Advisory\n\n${GENERAL_TRAVEL_TIPS[adviceKey]}\n\nHave questions about a specific country or city? Let me know which destination you have in mind!`,
      suggestions: [
        "Plan a trip to Dubai",
        "Best time to visit Bali",
        "What to pack for Swiss Alps",
        "How do I create a new trip?"
      ]
    };
  }

  /**
   * Handle App Navigation & Features
   */
  handleAppHelp(userInput) {
    const lower = userInput.toLowerCase();

    if (lower.includes('create') || lower.includes('plan')) {
      return {
        text: `### 🚀 How to Create a New Trip in TripCanvas\n\nTripCanvas uses a modern **Budget-First Itinerary Builder**:\n\n1. Click the **"Plan Trip"** button in the top navbar (or visit [/create-trip](/create-trip)).\n2. **Step 1:** Select your travel destination from our curated list.\n3. **Step 2:** Choose your check-in and check-out dates.\n4. **Step 3:** Enter your total travel budget; our engine computes smart allocations for hotels, food, and activities.\n5. **Step 4:** Choose verified hotels that fit your budget allowance.\n6. **Step 5:** Review your generated day-by-day itinerary and click **"Generate Trip Plan"**!\n\nYour trip will be saved to **My Trips** where you can customize activities, track expenses, and check off packing lists.`,
        suggestions: ["Open Trip Planner", "View My Trips", "Explore Destinations"],
        action: {
          type: 'NAVIGATE',
          label: 'Go to Trip Planner',
          url: '/create-trip'
        }
      };
    }

    if (lower.includes('booking')) {
      return {
        text: `### 📋 Managing Your Bookings\n\nYou can view and manage all your confirmed hotel reservations, tour tickets, and travel packages in the **My Bookings** dashboard.\n\n- Navigate to [/my-bookings](/my-bookings) via the top navigation bar.\n- View voucher numbers, dates, room types, and check-in times.\n- Easily cancel or download booking passes.`,
        suggestions: ["Go to My Bookings", "Explore Hotels", "Create a Trip"],
        action: {
          type: 'NAVIGATE',
          label: 'View My Bookings',
          url: '/my-bookings'
        }
      };
    }

    if (lower.includes('favorite') || lower.includes('wishlist')) {
      return {
        text: `### ❤️ Saved Wishlist & Favorites\n\n- Whenever you see a heart icon on any destination or hotel card, tap it to add it to your wishlist.\n- Access all your saved favorites anytime by clicking the heart icon in the navigation bar or visiting [/favorites](/favorites).`,
        suggestions: ["View Favorites", "Explore Destinations", "Hotels"],
        action: {
          type: 'NAVIGATE',
          label: 'Go to Favorites',
          url: '/favorites'
        }
      };
    }

    if (lower.includes('contact') || lower.includes('support')) {
      return {
        text: `### 📞 Customer Support & Assistance\n\nOur team is here to assist you 24/7:\n\n- **Email:** support@tripcanvas.io\n- **Toll-Free Phone:** +1 (800) TRIP-CANVAS (874-7226)\n- **Live Contact Form:** Head over to our [Contact Page](/contact) to send inquiries directly to our concierge specialists.`,
        suggestions: ["Visit Contact Page", "Plan a Trip", "Search Hotels"],
        action: {
          type: 'NAVIGATE',
          label: 'Visit Contact Page',
          url: '/contact'
        }
      };
    }

    return {
      text: `### 🧭 Welcome to TripCanvas Help Center\n\nHere is how to make the most of TripCanvas:\n\n- **Explore (`/explore`):** Browse 18+ world-class destinations with photo galleries, ratings, and weather.\n- **Hotels (`/hotels`):** Filter luxury resorts, heritage havelis, and budget stays with transparent pricing.\n- **Restaurants (`/restaurants`):** Discover authentic dining spots and local street food.\n- **Plan Trip (`/create-trip`):** Build an end-to-end trip itinerary with smart budget allocations.\n- **My Bookings (`/my-bookings`):** Access your hotel vouchers & itinerary passes.\n\nWhat can I assist you with right now?`,
      suggestions: ["Plan a new trip", "View top hotels", "Find romantic destinations"]
    };
  }

  /**
   * Helper to build context cards for detected destinations
   */
  buildContextCards(dest, query) {
    const cards = {};
    const lower = query.toLowerCase();

    cards.destination = dest;

    if (lower.includes('hotel') || lower.includes('stay') || lower.includes('resort')) {
      const hotels = hotelService.getHotelsByDestination(dest.id).slice(0, 3);
      if (hotels.length > 0) cards.hotels = hotels;
    }

    if (lower.includes('food') || lower.includes('restaurant') || lower.includes('eat')) {
      const rest = restaurantService.getRestaurantsByDestination(dest.id).slice(0, 3);
      if (rest.length > 0) cards.restaurants = rest;
    }

    return cards;
  }

  /**
   * Query Google Gemini API (if user provides an API key)
   */
  async queryGeminiAPI(userInput, apiKey, conversationHistory = []) {
    const systemPrompt = `You are the TripCanvas AI Travel Assistant, an elite, friendly, and knowledgeable travel concierge.
You help users plan trips, recommend hotels, restaurants, sightseeing, packing lists, and budgets.
Be concise, enthusiastic, and provide structured markdown formatting (use bullet points, bold highlights, emojis).
When recommending prices or currency, use Indian Rupees (₹) unless the user specifies otherwise.
TripCanvas has destinations in India (Udaipur, Kashmir, Kerala, Goa, Manali, Jaipur, Mumbai, Delhi, Gujarat, Gir) and International (Paris, Tokyo, Bali, Dubai, Swiss Alps, New York, Rome, London).
Always encourage users to use TripCanvas features (Plan Trip at /create-trip, Explore at /explore, Hotels at /hotels, Bookings at /my-bookings).`;

    const contents = [];

    // Add recent context (last 4 messages)
    const recent = conversationHistory.slice(-4);
    for (const msg of recent) {
      contents.push({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    }

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: `${systemPrompt}\n\nUser Question: ${userInput}` }]
    });

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidate) {
      throw new Error('No response text received from Gemini API');
    }

    return {
      text: candidate,
      suggestions: [
        "Plan this in Trip Planner",
        "Show nearby hotels",
        "Estimate total trip budget",
        "What should I pack?"
      ]
    };
  }
}

export const travelAssistantEngine = new TravelAssistantEngine();
