/**
 * TripCanvas Destinations Data
 * Master curated destination dataset with cinematic photography, realistic coordinates,
 * detailed attractions, culinary highlights, weather metrics, and estimated budgets.
 */

export const DESTINATIONS = [
  {
    id: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    country: "India",
    category: "Historical",
    tags: ["Culture", "Lakes", "Romance", "Palaces", "Heritage"],
    rating: 4.9,
    reviewsCount: 1840,
    tagline: "The City of Lakes & Royal Rajputana Romance",
    description: "Nestled amidst the ancient Aravalli Hills and surrounded by sparkling azure lakes, Udaipur is a jewel of royal heritage. With majestic marble palaces, historic ghats, romantic boat cruises, and vibrant handicraft bazaars, it captures the soul of imperial Rajasthan.",
    heroImage: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588097281266-310cead47b7c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "October to March",
    idealDuration: "3 - 4 Days",
    averageBudget: 4500, // Per person / day (₹)
    budgetTier: "Moderate", // Budget, Moderate, Luxury
    coordinates: { lat: 24.5854, lng: 73.7125 },
    weatherProfile: {
      temp: 28,
      condition: "Sunny & Pleasant",
      humidity: "42%",
      wind: "11 km/h",
      feelsLike: 27
    },
    attractions: [
      {
        id: "city-palace-udaipur",
        name: "City Palace",
        placeType: "Palace & Heritage",
        category: "Sightseeing",
        duration: "3 Hours",
        entryFee: 300,
        timeSlot: "09:30 AM",
        image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=600&auto=format&fit=crop",
        description: "A monumental palace complex combining Rajasthani and Mughal architectural styles on the eastern banks of Lake Pichola.",
        coordinates: { lat: 24.5764, lng: 73.6835 },
        nearbyHotels: [
          {
            id: "fateh-prakash-palace-udaipur",
            name: "Fateh Prakash Palace - The Grand Heritage",
            distance: "0.05 km",
            walkTime: "1 min walk (Inside Complex)",
            rating: 4.94,
            pricePerNight: 18500,
            badge: "Live Inside Royal Palace",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop",
            address: "The City Palace Complex, Lake Pichola"
          },
          {
            id: "shiv-niwas-palace-udaipur",
            name: "Shiv Niwas Palace by HRH Group",
            distance: "0.1 km",
            walkTime: "2 min walk (Inside Complex)",
            rating: 4.93,
            pricePerNight: 20000,
            badge: "Royal Guesthouse",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop",
            address: "The City Palace Complex, Lake Pichola"
          },
          {
            id: "taj-lake-palace-udaipur",
            name: "Taj Lake Palace",
            distance: "0.4 km",
            walkTime: "3 min royal boat transfer",
            rating: 4.95,
            pricePerNight: 42000,
            badge: "World's Most Romantic Hotel",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
            address: "Center of Lake Pichola (Boat access from Rameshwar Ghat)"
          },
          {
            id: "jagat-niwas-palace-udaipur",
            name: "Jagat Niwas Palace Hotel",
            distance: "0.3 km",
            walkTime: "4 min walk",
            rating: 4.88,
            pricePerNight: 8200,
            badge: "Iconic Lakefront Jharokha",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop",
            address: "23-25, Lal Ghat, Behind Jagdish Temple"
          }
        ],
        nearbyRestaurants: [
          {
            id: "sun-and-moon-rooftop-udaipur",
            name: "Sun & Moon Rooftop Restaurant",
            distance: "0.25 km",
            walkTime: "3 min walk",
            rating: 4.81,
            costForTwo: 750,
            cuisine: "Rajasthani & Continental",
            specialty: "Mewari Dal Fry with Jeera Rice",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
            address: "Lal Ghat, Behind Jagdish Temple"
          },
          {
            id: "charcoal-by-carlson-udaipur",
            name: "Charcoal by Carlson - Coal Grilled Rooftop",
            distance: "0.3 km",
            walkTime: "4 min walk",
            rating: 4.86,
            costForTwo: 1350,
            cuisine: "Coal Grilled BBQ & Tandoori",
            specialty: "Smoked Rajasthani Lamb Seekh Kebab",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
            address: "12, Lal Ghat, Behind Jagdish Temple"
          },
          {
            id: "jheels-ginger-coffee-udaipur",
            name: "Jheel's Ginger Coffee Bar & Bakery",
            distance: "0.4 km",
            walkTime: "5 min walk",
            rating: 4.92,
            costForTwo: 650,
            cuisine: "Artisan Coffee & Woodfired Pizza",
            specialty: "Woodfired Four-Cheese Lake Pizza",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
            address: "56, Gangaur Ghat Marg, Lake Pichola"
          },
          {
            id: "ambrai-restaurant-udaipur",
            name: "Ambrai - Amet Haveli",
            distance: "0.5 km",
            walkTime: "6 min walk across footbridge",
            rating: 4.94,
            costForTwo: 2400,
            cuisine: "Authentic Rajasthani & Mewari",
            specialty: "Mewari Mutton Laal Maas",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
            address: "Amet Haveli, Outside Chandpole"
          }
        ]
      },
      {
        id: "lake-pichola",
        name: "Lake Pichola Boat Cruise",
        placeType: "Lake & Waterfront",
        category: "Leisure",
        duration: "2 Hours",
        entryFee: 500,
        timeSlot: "04:30 PM",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop",
        description: "Glide past Jag Mandir and Taj Lake Palace during sunset for breathtaking golden reflections on royal waters.",
        coordinates: { lat: 24.5723, lng: 73.6766 },
        nearbyHotels: [
          {
            id: "taj-lake-palace-udaipur",
            name: "Taj Lake Palace",
            distance: "0.2 km",
            walkTime: "Center of Lake Pichola (Boat Access)",
            rating: 4.95,
            pricePerNight: 42000,
            badge: "Floating Palace",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
            address: "P.O. Box No. 5, Lake Pichola"
          },
          {
            id: "the-leela-palace-udaipur",
            name: "The Leela Palace Udaipur",
            distance: "0.6 km",
            walkTime: "Lakefront Jetty Access",
            rating: 4.93,
            pricePerNight: 36000,
            badge: "Ultra Luxury Lakefront",
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600&auto=format&fit=crop",
            address: "Lake Pichola, P.O. Box 125"
          },
          {
            id: "the-oberoi-udaivilas",
            name: "The Oberoi Udaivilas",
            distance: "0.8 km",
            walkTime: "Lake Pichola Western Bank",
            rating: 4.98,
            pricePerNight: 38500,
            badge: "Top 5 Resort in World",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
            address: "Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri"
          },
          {
            id: "zostel-lake-pichola-udaipur",
            name: "Zostel Udaipur - Lakefront Private Suites",
            distance: "0.3 km",
            walkTime: "4 min walk to jetty",
            rating: 4.84,
            pricePerNight: 2100,
            badge: "Best Budget Lakefront",
            image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600&auto=format&fit=crop",
            address: "Navghat, Lal Ghat, Lake Pichola"
          }
        ],
        nearbyRestaurants: [
          {
            id: "neel-kamal-taj-lake-palace-udaipur",
            name: "Neel Kamal at Taj Lake Palace",
            distance: "0.2 km",
            walkTime: "Boat transfer to Taj Lake Palace",
            rating: 4.98,
            costForTwo: 5200,
            cuisine: "Heritage Royal Mewari",
            specialty: "Maharana Mewari Degustation Thali",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
            address: "Inside Taj Lake Palace, Lake Pichola"
          },
          {
            id: "jagmandir-island-restaurant",
            name: "The Darikhana at Jagmandir Island Palace",
            distance: "0.5 km",
            walkTime: "Island boat cruise from jetty",
            rating: 4.96,
            costForTwo: 4500,
            cuisine: "Royal Mewari Haute Cuisine",
            specialty: "Royal Rajputana Thali",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
            address: "Jagmandir Island, Lake Pichola"
          },
          {
            id: "sheesh-mahal-leela-palace-udaipur",
            name: "Sheesh Mahal at The Leela Palace",
            distance: "0.6 km",
            walkTime: "Waterfront ferry to Leela Palace",
            rating: 4.97,
            costForTwo: 5500,
            cuisine: "Royal Mewari Fine Dining",
            specialty: "Sheesh Mahal Royal Shahi Thaal",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
            address: "The Leela Palace, Lake Pichola"
          },
          {
            id: "ambrai-restaurant-udaipur",
            name: "Ambrai - Amet Haveli",
            distance: "0.6 km",
            walkTime: "Water-edge dining deck",
            rating: 4.94,
            costForTwo: 2400,
            cuisine: "Authentic Rajasthani & Mewari",
            specialty: "Govind Gatta Curry",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
            address: "Amet Haveli, Outside Chandpole"
          }
        ]
      },
      {
        id: "jagdish-temple",
        name: "Jagdish Temple",
        placeType: "Historic Temple & Religious Heritage",
        category: "Cultural",
        duration: "1 Hour",
        entryFee: 0,
        timeSlot: "08:00 AM",
        image: "https://images.unsplash.com/photo-1588097281266-310cead47b7c?q=80&w=600&auto=format&fit=crop",
        description: "A 1651 AD Hindu temple dedicated to Lord Vishnu featuring intricate hand-carved stone pillars and spiritual aartis.",
        coordinates: { lat: 24.5795, lng: 73.6841 },
        nearbyHotels: [
          {
            id: "jagat-niwas-palace-udaipur",
            name: "Jagat Niwas Palace Hotel",
            distance: "0.15 km",
            walkTime: "2 min walk",
            rating: 4.88,
            pricePerNight: 8200,
            badge: "Heritage Haveli",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop",
            address: "23-25, Lal Ghat, Behind Jagdish Temple"
          },
          {
            id: "kankarwa-haveli-udaipur",
            name: "Kankarwa Haveli",
            distance: "0.1 km",
            walkTime: "1 min walk",
            rating: 4.86,
            pricePerNight: 3800,
            badge: "180-Yr Noble Haveli",
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600&auto=format&fit=crop",
            address: "26 Lal Ghat, Near Jagdish Temple"
          },
          {
            id: "mewar-haveli-udaipur",
            name: "Mewar Haveli - Heritage Lakefront Stay",
            distance: "0.15 km",
            walkTime: "2 min walk",
            rating: 4.79,
            pricePerNight: 2400,
            badge: "Traditional Rajput Haveli",
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop",
            address: "34-35 Lal Ghat, Lake Pichola"
          },
          {
            id: "madri-haveli-udaipur",
            name: "Madri Haveli - 300-Year Restored Boutique",
            distance: "0.3 km",
            walkTime: "4 min walk",
            rating: 4.85,
            pricePerNight: 2900,
            badge: "Historic Stone Craft",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
            address: "70 Ganesh Ghati, Chandpole"
          }
        ],
        nearbyRestaurants: [
          {
            id: "sun-and-moon-rooftop-udaipur",
            name: "Sun & Moon Rooftop Restaurant",
            distance: "0.1 km",
            walkTime: "1 min walk",
            rating: 4.81,
            costForTwo: 750,
            cuisine: "Rajasthani & Continental",
            specialty: "Paneer Tikka Butter Masala",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
            address: "Lal Ghat, Behind Jagdish Temple"
          },
          {
            id: "charcoal-by-carlson-udaipur",
            name: "Charcoal by Carlson",
            distance: "0.15 km",
            walkTime: "2 min walk",
            rating: 4.86,
            costForTwo: 1350,
            cuisine: "Coal Grilled BBQ",
            specialty: "Coal Grilled Bhatti Ka Murgh",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
            address: "12, Lal Ghat, Behind Jagdish Temple"
          },
          {
            id: "jheels-ginger-coffee-udaipur",
            name: "Jheel's Ginger Coffee Bar & Bakery",
            distance: "0.2 km",
            walkTime: "3 min walk",
            rating: 4.92,
            costForTwo: 650,
            cuisine: "Cafe & Artisan Bakery",
            specialty: "Signature Cinnamon Honey Cold Brew",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
            address: "56, Gangaur Ghat Marg"
          },
          {
            id: "natraj-dining-hall-udaipur",
            name: "Natraj Dining Hall & Restaurant",
            distance: "1.9 km",
            walkTime: "7 min auto-rickshaw",
            rating: 4.88,
            costForTwo: 550,
            cuisine: "Authentic Unlimited Thali",
            specialty: "Unlimited Royal Rajasthani Thali (22 items)",
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop",
            address: "New Bapu Bazar, Near City Railway Station"
          }
        ]
      },
      {
        id: "monsoon-palace",
        name: "Sajjangarh (Monsoon Palace)",
        placeType: "Hilltop Fortress & Sunset Vista",
        category: "Sightseeing",
        duration: "2.5 Hours",
        entryFee: 150,
        timeSlot: "05:00 PM",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop",
        description: "Hilltop fortress overlooking the entire city and surrounding wildlife sanctuary with iconic golden sunsets over the Aravallis.",
        coordinates: { lat: 24.5936, lng: 73.6385 },
        nearbyHotels: [
          {
            id: "aurika-udaipur-lemon-tree",
            name: "Aurika, Udaipur - Luxury Resort by Lemon Tree",
            distance: "2.1 km",
            walkTime: "5 min drive",
            rating: 4.90,
            pricePerNight: 14800,
            badge: "Hilltop Luxury Resort",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
            address: "Kalaharh, Near Sajjangarh Fort Base"
          },
          {
            id: "fateh-garh-udaipur",
            name: "Fateh Garh - Heritage Renaissance Resort",
            distance: "4.5 km",
            walkTime: "10 min drive",
            rating: 4.86,
            pricePerNight: 12500,
            badge: "Aravalli Perch & Vintage Cars",
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop",
            address: "Sisarma Hills, 10 min drive"
          },
          {
            id: "radisson-blu-udaipur",
            name: "Radisson Blu Udaipur Palace Resort & Spa",
            distance: "4.5 km",
            walkTime: "11 min drive",
            rating: 4.82,
            pricePerNight: 9800,
            badge: "Fateh Sagar Waterfront",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600&auto=format&fit=crop",
            address: "B-1, Ambamata Scheme - A Rd, Malla Talai"
          }
        ],
        nearbyRestaurants: [
          {
            id: "tribute-restaurant-udaipur",
            name: "Tribute Restaurant & Lake Cafe",
            distance: "3.8 km",
            walkTime: "9 min drive",
            rating: 4.87,
            costForTwo: 1600,
            cuisine: "North Indian & Rajasthani",
            specialty: "Ker Sangri with Bajre Ki Roti",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
            address: "89-B, Ambamata Temple Rd, Rang Sagar"
          },
          {
            id: "1559-ad-heritage-restaurant-udaipur",
            name: "1559 AD Heritage Restaurant",
            distance: "4.2 km",
            walkTime: "10 min drive",
            rating: 4.88,
            costForTwo: 1800,
            cuisine: "Colonial Garden Dining",
            specialty: "Dhungar Maas (Smoked Rajasthani Mutton)",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
            address: "Near PP Singhal Tower, Fateh Sagar Lake Rd"
          },
          {
            id: "khamma-ghani-restaurant-udaipur",
            name: "Khamma Ghani Restaurant",
            distance: "4.0 km",
            walkTime: "10 min drive",
            rating: 4.90,
            costForTwo: 1500,
            cuisine: "Rajasthani Royal & Barbeque",
            specialty: "Mewari Jungli Maas in Floating Gazebo",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
            address: "No. 53, Rang Sagar Lakefront"
          }
        ]
      },
      {
        id: "fateh-sagar",
        name: "Fateh Sagar Lake & Nehru Park",
        placeType: "Lakeside Promenade & Leisure",
        category: "Leisure",
        duration: "2 Hours",
        entryFee: 120,
        timeSlot: "06:30 PM",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=600&auto=format&fit=crop",
        description: "A picturesque lake with a vibrant promenade packed with street food, tranquil boat rides, and Nehru Park island.",
        coordinates: { lat: 24.6025, lng: 73.6744 },
        nearbyHotels: [
          {
            id: "radisson-blu-udaipur",
            name: "Radisson Blu Udaipur Palace Resort & Spa",
            distance: "0.2 km",
            walkTime: "3 min walk",
            rating: 4.82,
            pricePerNight: 9800,
            badge: "Fateh Sagar Lakefront",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600&auto=format&fit=crop",
            address: "B-1, Ambamata Scheme - A Rd, Opp. Aravali Hospital"
          },
          {
            id: "udai-kothi-udaipur",
            name: "Udai Kothi - Boutique Heritage Hotel",
            distance: "2.1 km",
            walkTime: "6 min drive",
            rating: 4.88,
            pricePerNight: 6400,
            badge: "Iconic White Arch Pool",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop",
            address: "Hanuman Ghat, Outside Chandpole"
          },
          {
            id: "the-oberoi-udaivilas",
            name: "The Oberoi Udaivilas",
            distance: "3.5 km",
            walkTime: "8 min drive",
            rating: 4.98,
            pricePerNight: 38500,
            badge: "Grand Rajputana Resort",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
            address: "Haridas Ji Ki Magri, Mulla Talai"
          },
          {
            id: "trident-udaipur",
            name: "Trident, Udaipur",
            distance: "3.2 km",
            walkTime: "7 min drive",
            rating: 4.89,
            pricePerNight: 13500,
            badge: "43-Acre Lush Garden Oasis",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
            address: "Haridas Ji Ki Magri, Mulla Talai"
          }
        ],
        nearbyRestaurants: [
          {
            id: "1559-ad-heritage-restaurant-udaipur",
            name: "1559 AD Heritage Restaurant",
            distance: "0.3 km",
            walkTime: "4 min walk",
            rating: 4.88,
            costForTwo: 1800,
            cuisine: "Colonial Garden Dining",
            specialty: "Kofta-e-Chaman in Saffron Gravy",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
            address: "Fateh Sagar Lake Rd, near Saheliyon Ki Bari"
          },
          {
            id: "tribute-restaurant-udaipur",
            name: "Tribute Restaurant & Lake Cafe",
            distance: "0.4 km",
            walkTime: "5 min walk",
            rating: 4.87,
            costForTwo: 1600,
            cuisine: "Fateh Sagar Lakeside Oasis",
            specialty: "Stuffed Dum Aloo Banarasi",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
            address: "89-B, Ambamata Temple Rd, Rang Sagar"
          },
          {
            id: "khamma-ghani-restaurant-udaipur",
            name: "Khamma Ghani Restaurant",
            distance: "0.8 km",
            walkTime: "9 min walk",
            rating: 4.90,
            costForTwo: 1500,
            cuisine: "Floating Gazebo Dining",
            specialty: "Murgh Malai Tikka with Mint Chutney",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
            address: "No. 53, Rang Sagar Lakefront"
          },
          {
            id: "traditional-khana-udaipur",
            name: "Traditional Khana - Pure Veg Royal Thali",
            distance: "1.2 km",
            walkTime: "4 min drive",
            rating: 4.89,
            costForTwo: 900,
            cuisine: "Unlimited Rajasthani Thali",
            specialty: "Hot Malpua with Rabdi",
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop",
            address: "Panchwati, Near Sukhadia Circle"
          }
        ]
      },
      {
        id: "bagore-ki-haveli",
        name: "Bagore Ki Haveli",
        placeType: "Heritage Haveli & Folk Culture",
        category: "Cultural",
        duration: "2 Hours",
        entryFee: 100,
        timeSlot: "06:30 PM (Dharohar Folk Show)",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop",
        description: "18th-century noble haveli on Gangaur Ghat with 138 rooms, royal costumes, and the world-renowned evening Rajasthani Dharohar folk and puppet dance performance.",
        coordinates: { lat: 24.5798, lng: 73.6818 },
        nearbyHotels: [
          {
            id: "jagat-niwas-palace-udaipur",
            name: "Jagat Niwas Palace Hotel",
            distance: "0.2 km",
            walkTime: "3 min walk",
            rating: 4.88,
            pricePerNight: 8200,
            badge: "Lakefront Jharokhas",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop",
            address: "23-25, Lal Ghat, Behind Jagdish Temple"
          },
          {
            id: "zostel-lake-pichola-udaipur",
            name: "Zostel Udaipur - Lakefront Private Suites",
            distance: "0.2 km",
            walkTime: "3 min walk",
            rating: 4.84,
            pricePerNight: 2100,
            badge: "Lakeside Rooftop",
            image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600&auto=format&fit=crop",
            address: "Navghat, Lal Ghat, Lake Pichola"
          },
          {
            id: "mewar-haveli-udaipur",
            name: "Mewar Haveli - Heritage Lakefront Stay",
            distance: "0.15 km",
            walkTime: "2 min walk",
            rating: 4.79,
            pricePerNight: 2400,
            badge: "Traditional Rajput Haveli",
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600&auto=format&fit=crop",
            address: "34-35 Lal Ghat, Lake Pichola"
          },
          {
            id: "hotel-lake-pichola-udaipur",
            name: "Hotel Lake Pichola",
            distance: "0.4 km",
            walkTime: "5 min walk",
            rating: 4.83,
            pricePerNight: 4800,
            badge: "Scenic Pichola Panorama",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
            address: "Outside Chandpole, Hanuman Ghat"
          }
        ],
        nearbyRestaurants: [
          {
            id: "jheels-ginger-coffee-udaipur",
            name: "Jheel's Ginger Coffee Bar & Bakery",
            distance: "0.05 km",
            walkTime: "1 min walk (Directly Opposite)",
            rating: 4.92,
            costForTwo: 650,
            cuisine: "Artisan Coffee & Desserts",
            specialty: "Warm Nutella Brownie with Gelato",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
            address: "56, Gangaur Ghat Marg, Opposite Bagore Ki Haveli"
          },
          {
            id: "upre-by-1559-ad-udaipur",
            name: "Upré by 1559 AD",
            distance: "0.5 km",
            walkTime: "6 min walk",
            rating: 4.91,
            costForTwo: 2800,
            cuisine: "Rooftop Open Cabanas",
            specialty: "Rajasthani Dahi Baingan & Handi Ghost",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
            address: "Roof Top Hotel Lake Pichola, Hanuman Ghat"
          },
          {
            id: "sun-and-moon-rooftop-udaipur",
            name: "Sun & Moon Rooftop Restaurant",
            distance: "0.2 km",
            walkTime: "3 min walk",
            rating: 4.81,
            costForTwo: 750,
            cuisine: "Rooftop Lake View",
            specialty: "Cheese Garlic Naan with Gravy",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
            address: "Lal Ghat, Behind Jagdish Temple"
          },
          {
            id: "ambrai-restaurant-udaipur",
            name: "Ambrai - Amet Haveli",
            distance: "0.4 km",
            walkTime: "5 min walk / ferry",
            rating: 4.94,
            costForTwo: 2400,
            cuisine: "Fine Rajasthani & Mewari",
            specialty: "Jungli Maas with Roomali Roti",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
            address: "Amet Haveli, Outside Chandpole"
          }
        ]
      },
      {
        id: "saheliyon-ki-bari",
        name: "Saheliyon Ki Bari",
        placeType: "Royal Gardens & Marble Fountains",
        category: "Nature",
        duration: "1.5 Hours",
        entryFee: 50,
        timeSlot: "10:30 AM",
        image: "https://images.unsplash.com/photo-1588097281266-310cead47b7c?q=80&w=600&auto=format&fit=crop",
        description: "Historic royal garden built in 1710 by Maharana Sangram Singh II for the queen and her 48 maidens, showcasing carved marble pavilions, rain fountains, and lush lotus pools.",
        coordinates: { lat: 24.6063, lng: 73.6865 },
        nearbyHotels: [
          {
            id: "radisson-blu-udaipur",
            name: "Radisson Blu Udaipur Palace Resort & Spa",
            distance: "2.4 km",
            walkTime: "6 min drive",
            rating: 4.82,
            pricePerNight: 9800,
            badge: "Fateh Sagar Waterfront",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600&auto=format&fit=crop",
            address: "B-1, Ambamata Scheme - A Rd, Malla Talai"
          },
          {
            id: "chunda-palace-udaipur",
            name: "Chunda Palace",
            distance: "3.0 km",
            walkTime: "8 min drive",
            rating: 4.87,
            pricePerNight: 15500,
            badge: "Hand-Painted Royal Murals",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
            address: "Haridas Ji Ki Magri, Main Road"
          },
          {
            id: "trident-udaipur",
            name: "Trident, Udaipur",
            distance: "3.8 km",
            walkTime: "9 min drive",
            rating: 4.89,
            pricePerNight: 13500,
            badge: "Lush 43-Acre Oasis",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
            address: "Haridas Ji Ki Magri, Mulla Talai"
          }
        ],
        nearbyRestaurants: [
          {
            id: "traditional-khana-udaipur",
            name: "Traditional Khana - Pure Veg Royal Thali",
            distance: "0.6 km",
            walkTime: "6 min walk",
            rating: 4.89,
            costForTwo: 900,
            cuisine: "Unlimited Rajasthani & Marwari",
            specialty: "Signature Dal Baati Churma (3 Churmas)",
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop",
            address: "Panchwati, Near Sukhadia Circle"
          },
          {
            id: "1559-ad-heritage-restaurant-udaipur",
            name: "1559 AD Heritage Restaurant",
            distance: "0.5 km",
            walkTime: "6 min walk",
            rating: 4.88,
            costForTwo: 1800,
            cuisine: "Colonial Garden Villa",
            specialty: "Methi Malai Murg & Rose Roasts",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
            address: "Fateh Sagar Lake Rd, near Saheliyon Ki Bari"
          },
          {
            id: "tribute-restaurant-udaipur",
            name: "Tribute Restaurant & Lake Cafe",
            distance: "1.8 km",
            walkTime: "5 min drive",
            rating: 4.87,
            costForTwo: 1600,
            cuisine: "Lakeside Dining",
            specialty: "Mutton Rogan Josh",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
            address: "89-B, Ambamata Temple Rd, Rang Sagar"
          }
        ]
      },
      {
        id: "jagmandir-island-palace",
        name: "Jagmandir Island Palace",
        placeType: "Island Palace & Royal Architecture",
        category: "Sightseeing",
        duration: "2.5 Hours",
        entryFee: 450,
        timeSlot: "03:00 PM",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop",
        description: "Also known as the 'Lake Garden Palace', this 17th-century island sanctuary inspired Emperor Shah Jahan's design for the Taj Mahal. Adorned with life-sized marble elephants and regal courtyards.",
        coordinates: { lat: 24.5678, lng: 73.6749 },
        nearbyHotels: [
          {
            id: "taj-lake-palace-udaipur",
            name: "Taj Lake Palace",
            distance: "0.7 km across water",
            walkTime: "5 min boat transfer",
            rating: 4.95,
            pricePerNight: 42000,
            badge: "Floating Royal Marble Palace",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
            address: "Lake Pichola Center"
          },
          {
            id: "the-leela-palace-udaipur",
            name: "The Leela Palace Udaipur",
            distance: "1.2 km",
            walkTime: "7 min boat transfer",
            rating: 4.93,
            pricePerNight: 36000,
            badge: "Lakefront Grandeur",
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600&auto=format&fit=crop",
            address: "Lake Pichola, P.O. Box 125"
          },
          {
            id: "the-oberoi-udaivilas",
            name: "The Oberoi Udaivilas",
            distance: "1.5 km",
            walkTime: "8 min boat transfer",
            rating: 4.98,
            pricePerNight: 38500,
            badge: "Semi-Private Moat Pool",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
            address: "Haridas Ji Ki Magri, Lake Pichola"
          },
          {
            id: "fateh-prakash-palace-udaipur",
            name: "Fateh Prakash Palace - The Grand Heritage",
            distance: "1.0 km (Jetty)",
            walkTime: "6 min boat transfer",
            rating: 4.94,
            pricePerNight: 18500,
            badge: "City Palace Waterfront",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop",
            address: "The City Palace Complex"
          }
        ],
        nearbyRestaurants: [
          {
            id: "jagmandir-island-restaurant",
            name: "The Darikhana at Jagmandir Island Palace",
            distance: "0.0 km",
            walkTime: "Located Inside Jagmandir",
            rating: 4.96,
            costForTwo: 4500,
            cuisine: "Royal Mewari Haute Cuisine",
            specialty: "Safed Maas & Grilled Jumbo Prawns",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
            address: "Jagmandir Island, Lake Pichola"
          },
          {
            id: "neel-kamal-taj-lake-palace-udaipur",
            name: "Neel Kamal at Taj Lake Palace",
            distance: "0.6 km",
            walkTime: "5 min boat transfer",
            rating: 4.98,
            costForTwo: 5200,
            cuisine: "Authentic Palace Dining",
            specialty: "Woodfire Slow Cooked Lal Maas",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
            address: "Inside Taj Lake Palace"
          },
          {
            id: "sheesh-mahal-leela-palace-udaipur",
            name: "Sheesh Mahal at The Leela Palace",
            distance: "1.0 km",
            walkTime: "7 min boat transfer",
            rating: 4.97,
            costForTwo: 5500,
            cuisine: "Two-Level Palace Dining",
            specialty: "Slow-Braised Nalli Nihari",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
            address: "The Leela Palace, Lake Pichola"
          }
        ]
      },
      {
        id: "ambrai-ghat",
        name: "Ambrai Ghat & Gangaur Ghat",
        placeType: "Historic Waterfront Ghats & Sunset Point",
        category: "Leisure",
        duration: "1.5 Hours",
        entryFee: 0,
        timeSlot: "05:30 PM (Sunset)",
        image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=600&auto=format&fit=crop",
        description: "Also known as Manjhi Ghat, Ambrai Ghat sits right at the water's edge opposite City Palace. A peaceful place for sunset contemplation, temple bells, and photography of illuminated palaces.",
        coordinates: { lat: 24.5781, lng: 73.6806 },
        nearbyHotels: [
          {
            id: "amet-haveli-hotel-udaipur",
            name: "Amet Haveli - Heritage Hotel",
            distance: "0.05 km",
            walkTime: "1 min walk (Directly on Ghat)",
            rating: 4.91,
            pricePerNight: 9200,
            badge: "1734 Lakefront Haveli",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
            address: "Outside Chandpole, Hanuman Ghat"
          },
          {
            id: "hotel-sarovar-udaipur",
            name: "Hotel Sarovar on Lake Pichola",
            distance: "0.2 km",
            walkTime: "2 min walk",
            rating: 4.81,
            pricePerNight: 3400,
            badge: "Rooftop Pool & Lake Views",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
            address: "Hanuman Ghat, Outside Chandpole"
          },
          {
            id: "udai-kothi-udaipur",
            name: "Udai Kothi - Boutique Heritage Hotel",
            distance: "0.2 km",
            walkTime: "3 min walk",
            rating: 4.88,
            pricePerNight: 6400,
            badge: "White Arch Centerpiece",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop",
            address: "Hanuman Ghat, Outside Chandpole"
          },
          {
            id: "the-leela-palace-udaipur",
            name: "The Leela Palace Udaipur",
            distance: "0.6 km",
            walkTime: "7 min walk",
            rating: 4.93,
            pricePerNight: 36000,
            badge: "5-Star Ultra Luxury",
            image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600&auto=format&fit=crop",
            address: "Lake Pichola, P.O. Box 125"
          }
        ],
        nearbyRestaurants: [
          {
            id: "ambrai-restaurant-udaipur",
            name: "Ambrai - Amet Haveli",
            distance: "0.05 km",
            walkTime: "1 min walk (Directly on Ghat)",
            rating: 4.94,
            costForTwo: 2400,
            cuisine: "Authentic Rajasthani & Mewari",
            specialty: "Mewari Mutton Laal Maas & Kulfi",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
            address: "Amet Haveli, Outside Chandpole"
          },
          {
            id: "ozaa-rooftop-lake-pichola",
            name: "Ozaa - Mediterranean Rooftop at Lake Pichola",
            distance: "0.2 km",
            walkTime: "3 min walk",
            rating: 4.87,
            costForTwo: 2200,
            cuisine: "Mediterranean & Cocktails",
            specialty: "Grilled Harissa Tiger Prawns",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
            address: "Outside Chandpole, Hanuman Ghat"
          },
          {
            id: "upre-by-1559-ad-udaipur",
            name: "Upré by 1559 AD",
            distance: "0.25 km",
            walkTime: "3 min walk",
            rating: 4.91,
            costForTwo: 2800,
            cuisine: "Rooftop Open Cabanas",
            specialty: "Rajasthani Dahi Baingan",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
            address: "Roof Top Hotel Lake Pichola, Hanuman Ghat"
          },
          {
            id: "millets-of-mewar-udaipur",
            name: "Millets of Mewar (Health & Royal Fusion)",
            distance: "0.2 km",
            walkTime: "3 min walk",
            rating: 4.89,
            costForTwo: 850,
            cuisine: "Organic Mewari & Healthy",
            specialty: "Gluten-Free Millet Dal Baati",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
            address: "Outside Chandpole, Hanuman Ghat"
          }
        ]
      },
      {
        id: "karni-mata-ropeway",
        name: "Mansapurna Karni Mata Ropeway & Viewpoint",
        placeType: "Scenic Cable Car & Panoramic Viewpoint",
        category: "Adventure",
        duration: "1.5 Hours",
        entryFee: 120,
        timeSlot: "05:00 PM",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop",
        description: "Modern cable car linking Doodh Talai to the hilltop temple of Karni Mata on Machla Magra hill, offering unmatched panoramic aerial views of Lake Pichola, City Palace, Sajjangarh, and the entire city.",
        coordinates: { lat: 24.5694, lng: 73.6854 },
        nearbyHotels: [
          {
            id: "shiv-niwas-palace-udaipur",
            name: "Shiv Niwas Palace by HRH Group",
            distance: "0.6 km",
            walkTime: "7 min walk",
            rating: 4.93,
            pricePerNight: 20000,
            badge: "City Palace Complex",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=600&auto=format&fit=crop",
            address: "The City Palace Complex, Lake Pichola"
          },
          {
            id: "fateh-prakash-palace-udaipur",
            name: "Fateh Prakash Palace - The Grand Heritage",
            distance: "0.7 km",
            walkTime: "8 min walk",
            rating: 4.94,
            pricePerNight: 18500,
            badge: "Inside Royal Palace",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop",
            address: "The City Palace Complex"
          },
          {
            id: "zostel-lake-pichola-udaipur",
            name: "Zostel Udaipur - Lakefront Private Suites",
            distance: "1.0 km",
            walkTime: "12 min walk",
            rating: 4.84,
            pricePerNight: 2100,
            badge: "Lakefront Balconies",
            image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=600&auto=format&fit=crop",
            address: "Navghat, Lal Ghat"
          }
        ],
        nearbyRestaurants: [
          {
            id: "sun-and-moon-rooftop-udaipur",
            name: "Sun & Moon Rooftop Restaurant",
            distance: "0.9 km",
            walkTime: "10 min walk",
            rating: 4.81,
            costForTwo: 750,
            cuisine: "360° Lake & City Views",
            specialty: "Vegetable Sizzler with Fries",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
            address: "Lal Ghat, Behind Jagdish Temple"
          },
          {
            id: "charcoal-by-carlson-udaipur",
            name: "Charcoal by Carlson",
            distance: "1.0 km",
            walkTime: "12 min walk",
            rating: 4.86,
            costForTwo: 1350,
            cuisine: "Open Charcoal Grills",
            specialty: "Smoked Rajasthani Lamb Seekh",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
            address: "12, Lal Ghat, Behind Jagdish Temple"
          },
          {
            id: "natraj-dining-hall-udaipur",
            name: "Natraj Dining Hall & Restaurant",
            distance: "1.8 km",
            walkTime: "6 min drive",
            rating: 4.88,
            costForTwo: 550,
            cuisine: "Unlimited Rajasthani Thali",
            specialty: "Pure Desi Ghee Dal Baati Churma",
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop",
            address: "New Bapu Bazar, Near City Railway Station"
          }
        ]
      },
      {
        id: "shilpgram-craft-village",
        name: "Shilpgram Rural Arts & Crafts Village",
        placeType: "Rural Crafts & Cultural Heritage Village",
        category: "Cultural",
        duration: "3 Hours",
        entryFee: 80,
        timeSlot: "11:00 AM",
        image: "https://images.unsplash.com/photo-1588097281266-310cead47b7c?q=80&w=600&auto=format&fit=crop",
        description: "Sprawling open-air ethnographic museum with 26 authentic traditional village huts from Rajasthan, Gujarat, and Goa, showcasing master potters, camel leather workers, weavers, and daily folk music.",
        coordinates: { lat: 24.6190, lng: 73.6558 },
        nearbyHotels: [
          {
            id: "radisson-blu-udaipur",
            name: "Radisson Blu Udaipur Palace Resort & Spa",
            distance: "3.2 km",
            walkTime: "7 min drive",
            rating: 4.82,
            pricePerNight: 9800,
            badge: "Fateh Sagar Lakefront",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600&auto=format&fit=crop",
            address: "B-1, Ambamata Scheme - A Rd"
          },
          {
            id: "chunda-palace-udaipur",
            name: "Chunda Palace",
            distance: "4.5 km",
            walkTime: "10 min drive",
            rating: 4.87,
            pricePerNight: 15500,
            badge: "Hand-Painted Royal Murals",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
            address: "Haridas Ji Ki Magri"
          },
          {
            id: "the-oberoi-udaivilas",
            name: "The Oberoi Udaivilas",
            distance: "4.8 km",
            walkTime: "11 min drive",
            rating: 4.98,
            pricePerNight: 38500,
            badge: "Royal Wildlife Grounds",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
            address: "Haridas Ji Ki Magri, Mulla Talai"
          }
        ],
        nearbyRestaurants: [
          {
            id: "1559-ad-heritage-restaurant-udaipur",
            name: "1559 AD Heritage Restaurant",
            distance: "3.1 km",
            walkTime: "7 min drive",
            rating: 4.88,
            costForTwo: 1800,
            cuisine: "Colonial Garden Villa",
            specialty: "Royal Shahi Tukda with Rabdi",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
            address: "Fateh Sagar Lake Rd"
          },
          {
            id: "traditional-khana-udaipur",
            name: "Traditional Khana - Pure Veg Royal Thali",
            distance: "3.5 km",
            walkTime: "8 min drive",
            rating: 4.89,
            costForTwo: 900,
            cuisine: "Authentic Unlimited Thali",
            specialty: "Gatte Ki Kadhi & Pitor Ki Sabzi",
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop",
            address: "Panchwati, Near Sukhadia Circle"
          },
          {
            id: "tribute-restaurant-udaipur",
            name: "Tribute Restaurant & Lake Cafe",
            distance: "3.4 km",
            walkTime: "8 min drive",
            rating: 4.87,
            costForTwo: 1600,
            cuisine: "Lakefront Gazebos",
            specialty: "Tandoori Fish Tikka",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
            address: "89-B, Ambamata Temple Rd"
          }
        ]
      },
      {
        id: "bhartiya-lok-kala-mandal",
        name: "Bhartiya Lok Kala Mandal (Folk Museum)",
        placeType: "Folk Art, Puppetry & Cultural Museum",
        category: "Cultural",
        duration: "1.5 Hours",
        entryFee: 70,
        timeSlot: "12:00 PM",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=600&auto=format&fit=crop",
        description: "Premier cultural institution dedicated to the preservation of tribal art, masks, turbans, folk instruments, and traditional Rajasthani Kathputli string puppetry shows.",
        coordinates: { lat: 24.5985, lng: 73.6965 },
        nearbyHotels: [
          {
            id: "radisson-blu-udaipur",
            name: "Radisson Blu Udaipur Palace Resort & Spa",
            distance: "2.8 km",
            walkTime: "7 min drive",
            rating: 4.82,
            pricePerNight: 9800,
            badge: "Fateh Sagar View",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600&auto=format&fit=crop",
            address: "B-1, Ambamata Scheme - A Rd"
          },
          {
            id: "jagat-niwas-palace-udaipur",
            name: "Jagat Niwas Palace Hotel",
            distance: "2.2 km",
            walkTime: "7 min drive",
            rating: 4.88,
            pricePerNight: 8200,
            badge: "Lakeside Haveli",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop",
            address: "23-25, Lal Ghat"
          },
          {
            id: "hotel-sarovar-udaipur",
            name: "Hotel Sarovar on Lake Pichola",
            distance: "2.5 km",
            walkTime: "8 min drive",
            rating: 4.81,
            pricePerNight: 3400,
            badge: "Heritage Lakefront",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop",
            address: "Hanuman Ghat, Outside Chandpole"
          }
        ],
        nearbyRestaurants: [
          {
            id: "traditional-khana-udaipur",
            name: "Traditional Khana - Pure Veg Royal Thali",
            distance: "0.4 km",
            walkTime: "4 min walk",
            rating: 4.89,
            costForTwo: 900,
            cuisine: "Unlimited 24-Item Royal Thali",
            specialty: "Desi Ghee Dal Baati Churma",
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop",
            address: "Panchwati, Near Sukhadia Circle"
          },
          {
            id: "natraj-dining-hall-udaipur",
            name: "Natraj Dining Hall & Restaurant",
            distance: "1.5 km",
            walkTime: "5 min drive",
            rating: 4.88,
            costForTwo: 550,
            cuisine: "Historic Unlimited Thali",
            specialty: "Gujarati Sweet & Sour Kadhi",
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop",
            address: "New Bapu Bazar, Near City Railway Station"
          },
          {
            id: "1559-ad-heritage-restaurant-udaipur",
            name: "1559 AD Heritage Restaurant",
            distance: "1.2 km",
            walkTime: "4 min drive",
            rating: 4.88,
            costForTwo: 1800,
            cuisine: "Banyan Tree Garden Dining",
            specialty: "Classic Rosemary Roast Chicken",
            image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
            address: "Fateh Sagar Lake Rd"
          }
        ]
      }
    ],
    activities: [
      "Vintage Car Museum Tour",
      "Traditional Rajasthani Puppet & Folk Dance at Bagore Ki Haveli",
      "Rooftop Lakeside Dinner overlooking lighted palaces",
      "Handmade Leather Journal & Miniature Painting Shopping at Hathi Pol"
    ],
    localFood: ["Dal Baati Churma", "Laal Maas", "Gatte Ki Sabzi", "Kachori & Jalebi at Jagdish Chowk", "Mawa Kachori"],
    travelTips: [
      "Book Bagore Ki Haveli folk show tickets at 5 PM sharp as seats sell out quickly.",
      "Explore the old city alleys on foot or hire an electric rickshaw.",
      "Sunset boat rides from Rameshwar Ghat offer the most striking photographs."
    ]
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    country: "India",
    category: "Beach",
    tags: ["Beach", "Nightlife", "Portuguese Heritage", "Seafood", "Relaxation"],
    rating: 4.8,
    reviewsCount: 2310,
    tagline: "Golden Sands, Azure Waters & Bohemian Soul",
    description: "India's coastal paradise blends sun-drenched Arabian Sea beaches, Portuguese colonial cathedrals, fragrant spice plantations, and pulsating beach clubs with laid-back susegad culture.",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "November to March",
    idealDuration: "4 - 5 Days",
    averageBudget: 5000,
    budgetTier: "Moderate",
    coordinates: { lat: 15.2993, lng: 74.124 },
    weatherProfile: {
      temp: 31,
      condition: "Tropical Warmth",
      humidity: "65%",
      wind: "14 km/h",
      feelsLike: 33
    },
    attractions: [
      {
        id: "palolem-beach",
        name: "Palolem Beach & Butterfly Island",
        category: "Beach",
        duration: "4 Hours",
        entryFee: 0,
        timeSlot: "10:00 AM",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop",
        description: "Crescent-shaped white sand cove bordered by lush coconut groves and calm swimming waters.",
        coordinates: { lat: 15.0100, lng: 74.0232 }
      },
      {
        id: "basilica-bom-jesus",
        name: "Basilica of Bom Jesus",
        category: "Cultural",
        duration: "1.5 Hours",
        entryFee: 50,
        timeSlot: "02:00 PM",
        image: "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=600&auto=format&fit=crop",
        description: "UNESCO World Heritage Baroque church holding the mortal remains of St. Francis Xavier.",
        coordinates: { lat: 15.5009, lng: 73.9116 }
      },
      {
        id: "chapora-fort",
        name: "Chapora Fort & Vagator Sunset",
        category: "Sightseeing",
        duration: "2 Hours",
        entryFee: 0,
        timeSlot: "05:30 PM",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop",
        description: "Historic red laterite cliffside fort famous for panoramic views of the Arabian shoreline.",
        coordinates: { lat: 15.6059, lng: 73.7364 }
      }
    ],
    activities: [
      "Scuba Diving & Snorkeling at Grande Island",
      "Scooter ride through Old Portuguese Latin Quarter (Fontainhas)",
      "Sunset dolphin spotting cruise along Mandovi River",
      "Anjuna Flea Market shopping & live music"
    ],
    localFood: ["Goan Fish Curry Rice", "Pork Vindaloo", "Bebinca", "Prawn Balchão", "Feni Cocktail"],
    travelTips: [
      "Rent a two-wheeler for effortless navigation across North and South Goa.",
      "Visit South Goa for serene tranquil beaches, North Goa for cafes and nightlife."
    ]
  },
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    country: "India",
    category: "Mountains",
    tags: ["Mountains", "Snow", "Adventure", "Pine Forests", "Trekking"],
    rating: 4.85,
    reviewsCount: 1690,
    tagline: "Snow-Capped Peaks & Alpine Serenity in the Himalayas",
    description: "Perched high in the Beas River Valley, Manali is India's premier mountain playground. From skiing in Solang Valley and crossing the Rohtang Pass to soaking in natural hot springs and exploring ancient cedar groves, it's an alpine wonderland.",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "October to June",
    idealDuration: "4 - 5 Days",
    averageBudget: 3800,
    budgetTier: "Moderate",
    coordinates: { lat: 32.2432, lng: 77.1892 },
    weatherProfile: {
      temp: 14,
      condition: "Crisp Alpine Air",
      humidity: "48%",
      wind: "8 km/h",
      feelsLike: 13
    },
    attractions: [
      {
        id: "solang-valley",
        name: "Solang Valley Adventure Hub",
        category: "Adventure",
        duration: "4 Hours",
        entryFee: 500,
        timeSlot: "10:00 AM",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop",
        description: "Premier valley for paragliding, zorbing, quad biking, and winter skiing.",
        coordinates: { lat: 32.3166, lng: 77.1583 }
      },
      {
        id: "hadimba-temple",
        name: "Hadimba Devi Temple",
        category: "Cultural",
        duration: "1.5 Hours",
        entryFee: 20,
        timeSlot: "08:30 AM",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=600&auto=format&fit=crop",
        description: "Historic 1553 wooden pagoda temple nestled inside towering Dhungri deodar forests.",
        coordinates: { lat: 32.2483, lng: 77.1806 }
      },
      {
        id: "atal-tunnel-sissu",
        name: "Atal Tunnel & Sissu Waterfall",
        category: "Sightseeing",
        duration: "5 Hours",
        entryFee: 0,
        timeSlot: "09:00 AM",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
        description: "Drive through the world's longest high-altitude highway tunnel into breathtaking Lahaul valley.",
        coordinates: { lat: 32.4824, lng: 77.1186 }
      }
    ],
    activities: [
      "Tandem Paragliding over Solang valley",
      "River Rafting in the Beas River rapids",
      "Old Manali cafe hopping and riverside chill sessions",
      "Jogini Waterfall pine forest hike"
    ],
    localFood: ["Himachali Siddu with Ghee", "Kullu Trout Fish", "Tudkiya Bhath", "Thukpa & Momos", "Apple Crumble Cake"],
    travelTips: [
      "Carry layered thermal clothing even in summer months for high passes.",
      "Check Rohtang Pass permit status at least 2 days ahead."
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
    category: "Luxury",
    tags: ["Skyscrapers", "Luxury", "Desert", "Shopping", "Futuristic"],
    rating: 4.92,
    reviewsCount: 3420,
    tagline: "The City of Gold, Superlatives & Futuristic Glamour",
    description: "Rising dramatically from Arabian sands, Dubai is a beacon of modern architectural marvels, ultra-luxury shopping, desert safari dune bashing, and world-first experiences.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "November to April",
    idealDuration: "4 - 6 Days",
    averageBudget: 14000,
    budgetTier: "Luxury",
    coordinates: { lat: 25.2048, lng: 55.2708 },
    weatherProfile: {
      temp: 26,
      condition: "Clear & Sunny",
      humidity: "50%",
      wind: "16 km/h",
      feelsLike: 26
    },
    attractions: [
      {
        id: "burj-khalifa",
        name: "Burj Khalifa At the Top (Level 124/148)",
        category: "Sightseeing",
        duration: "2.5 Hours",
        entryFee: 3800,
        timeSlot: "04:30 PM",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop",
        description: "Observation deck of the world's tallest building with 360-degree views across the desert and coastline.",
        coordinates: { lat: 25.1972, lng: 55.2744 }
      },
      {
        id: "desert-safari",
        name: "Desert Safari & Bedouin BBQ Camp",
        category: "Adventure",
        duration: "6 Hours",
        entryFee: 3000,
        timeSlot: "03:00 PM",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=600&auto=format&fit=crop",
        description: "Red dune bashing, camel rides, sandboarding, and traditional Tanoura dance dinner under the stars.",
        coordinates: { lat: 24.8607, lng: 55.7000 }
      },
      {
        id: "museum-of-the-future",
        name: "Museum of the Future",
        category: "Sightseeing",
        duration: "3 Hours",
        entryFee: 3300,
        timeSlot: "11:00 AM",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=600&auto=format&fit=crop",
        description: "An architectural icon showcasing immersive exhibits into the future of humanity and space exploration.",
        coordinates: { lat: 25.2253, lng: 55.2818 }
      }
    ],
    activities: [
      "Dubai Marina Luxury Yacht Cruise",
      "Skydiving over Palm Jumeirah",
      "Stroll through Dubai Miracle Garden floral paradise",
      "Traditional Abra ride across Dubai Creek and Gold Souk"
    ],
    localFood: ["Al Machboos", "Shawarma Platter", "Luqaimat with Date Syrup", "Shish Tawook", "Camel Milk Ice Cream"],
    travelTips: [
      "Book Burj Khalifa sunset slot 2-3 weeks in advance.",
      "Use the Dubai Metro - clean, ultra-fast, and connected directly to top attractions."
    ]
  },
  {
    id: "bali",
    name: "Bali",
    state: "Bali",
    country: "Indonesia",
    category: "Nature",
    tags: ["Tropical", "Temples", "Surfing", "Rice Terraces", "Wellness"],
    rating: 4.88,
    reviewsCount: 2950,
    tagline: "Island of the Gods, Emerald Terraces & Spiritual Energy",
    description: "From the cliffside temples of Uluwatu to the lush terraced hills of Ubud and world-renowned surf breaks, Bali is an enchanting island sanctuary of art, wellness, and tropical bliss.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "April to October",
    idealDuration: "6 - 8 Days",
    averageBudget: 6000,
    budgetTier: "Moderate",
    coordinates: { lat: -8.3405, lng: 115.092 },
    weatherProfile: {
      temp: 29,
      condition: "Tropical Breeze",
      humidity: "75%",
      wind: "12 km/h",
      feelsLike: 31
    },
    attractions: [
      {
        id: "tegalalang-rice-terrace",
        name: "Tegalalang Rice Terraces & Jungle Swing",
        category: "Nature",
        duration: "3 Hours",
        entryFee: 350,
        timeSlot: "08:00 AM",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=600&auto=format&fit=crop",
        description: "Cascading emerald green rice paddies sculpted into the hillside using ancient Subak irrigation.",
        coordinates: { lat: -8.4333, lng: 115.2819 }
      },
      {
        id: "uluwatu-temple",
        name: "Uluwatu Temple & Kecak Fire Dance",
        category: "Cultural",
        duration: "2.5 Hours",
        entryFee: 800,
        timeSlot: "05:00 PM",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop",
        description: "Ancient sea temple perched atop a sheer 70-meter cliff above raging ocean surf.",
        coordinates: { lat: -8.8291, lng: 115.0849 }
      }
    ],
    activities: [
      "Sunrise Trek up Mount Batur Active Volcano",
      "Traditional Balinese Massage and Flower Bath",
      "Surfing lessons at Canggu or Seminyak beach",
      "Snorkeling with Manta Rays at Nusa Penida"
    ],
    localFood: ["Nasi Goreng Special", "Babi Guling", "Ayam Betutu", "Sate Lilit", "Fresh Dragonfruit Smoothie Bowls"],
    travelTips: [
      "Always wear a sarong (provided at entrance) when visiting sacred Hindu temples.",
      "Download Grab or Gojek for cheap island rides and food deliveries."
    ]
  },
  {
    id: "paris",
    name: "Paris",
    state: "Île-de-France",
    country: "France",
    category: "City",
    tags: ["Romantic", "Art", "Cuisine", "Architecture", "Fashion"],
    rating: 4.87,
    reviewsCount: 4120,
    tagline: "The City of Light, Haute Couture & World-Class Art",
    description: "Paris stands unmatched in romance, timeless beauty, and artistic brilliance. Stroll along the Seine, gaze up at the Eiffel Tower, admire masterpieces in the Louvre, and savor delicate pastries in bohemian sidewalk cafés.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520939817895-060bdef4df1b?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "April to October",
    idealDuration: "4 - 6 Days",
    averageBudget: 15000,
    budgetTier: "Luxury",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    weatherProfile: {
      temp: 18,
      condition: "Mild & Charming",
      humidity: "55%",
      wind: "10 km/h",
      feelsLike: 18
    },
    attractions: [
      {
        id: "eiffel-tower",
        name: "Eiffel Tower & Champ de Mars",
        category: "Sightseeing",
        duration: "2.5 Hours",
        entryFee: 2600,
        timeSlot: "07:30 PM",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop",
        description: "The global icon of France, illuminated every hour after dusk with 20,000 sparkling lights.",
        coordinates: { lat: 48.8584, lng: 2.2945 }
      },
      {
        id: "louvre-museum",
        name: "The Louvre Museum",
        category: "Cultural",
        duration: "4 Hours",
        entryFee: 1900,
        timeSlot: "09:30 AM",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop",
        description: "World's largest art museum holding Mona Lisa, Venus de Milo, and over 35,000 treasures.",
        coordinates: { lat: 48.8606, lng: 2.3376 }
      }
    ],
    activities: [
      "Seine River Sunset Dinner Cruise",
      "Montmartre bohemian art walk and Sacré-Cœur basilica",
      "Macaron masterclass in Saint-Germain",
      "Palace of Versailles royal gardens day trip"
    ],
    localFood: ["Fresh Butter Croissants", "Duck Confit", "French Onion Soup", "Crème Brûlée", "Artisanal Fromage & Baguette"],
    travelTips: [
      "Book Louvre and Eiffel Tower time-slots online 30 days in advance.",
      "Get a Navigo Easy pass for seamless Metro & RER train rides."
    ]
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    country: "India",
    category: "Historical",
    tags: ["Pink City", "Forts", "Textiles", "Royalty", "History"],
    rating: 4.86,
    reviewsCount: 2150,
    tagline: "The Pink City of Forts, Jewelers & Maharaja Legends",
    description: "Capital of Rajasthan, Jaipur mesmerizes with its terracotta-pink facades, towering sandstone battlements of Amer Fort, the astronomical wizardry of Jantar Mantar, and bustling bazaars overflowing with jewels and block-printed silks.",
    heroImage: "https://images.unsplash.com/photo-1603288967396-d3c2e6f47761?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1603288967396-d3c2e6f47761?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "October to March",
    idealDuration: "3 - 4 Days",
    averageBudget: 4200,
    budgetTier: "Moderate",
    coordinates: { lat: 26.9124, lng: 75.7873 },
    weatherProfile: {
      temp: 29,
      condition: "Clear Skies",
      humidity: "38%",
      wind: "10 km/h",
      feelsLike: 28
    },
    attractions: [
      {
        id: "hawa-mahal",
        name: "Hawa Mahal (Palace of Winds)",
        category: "Historical",
        duration: "1.5 Hours",
        entryFee: 200,
        timeSlot: "08:30 AM",
        image: "https://images.unsplash.com/photo-1603288967396-d3c2e6f47761?q=80&w=600&auto=format&fit=crop",
        description: "Five-story pink sandstone palace with 953 honeycomb windows designed for royal women to observe street festivities.",
        coordinates: { lat: 26.9239, lng: 75.8267 }
      },
      {
        id: "amer-fort",
        name: "Amer Fort & Sheesh Mahal",
        category: "Historical",
        duration: "3.5 Hours",
        entryFee: 500,
        timeSlot: "10:30 AM",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format&fit=crop",
        description: "Opulent fortress perched atop Cheel ka Teela with breathtaking mirror mosaics in the Hall of Mirrors.",
        coordinates: { lat: 26.9855, lng: 75.8513 }
      }
    ],
    activities: [
      "Hot air balloon flight at dawn over Amer Fort",
      "Johari Bazaar authentic gemstone & jewelry shopping",
      "Traditional blue pottery workshop",
      "Nahargarh Fort sunset view overlooking the illuminated city"
    ],
    localFood: ["Pyaz Kachori at Rawat Mishtan Bhandar", "Ghevar", "Lal Maas", "Ker Sangri", "Mirchi Vada"],
    travelTips: [
      "Buy the composite monument pass for significant savings across 8 major sights.",
      "Visit Hawa Mahal early in the morning for the best exterior sunlight photography."
    ]
  },
  {
    id: "kashmir",
    name: "Kashmir",
    state: "Jammu and Kashmir",
    country: "India",
    category: "Mountains",
    tags: ["Paradise on Earth", "Snow", "Houseboats", "Valleys", "Tulips"],
    rating: 4.95,
    reviewsCount: 2780,
    tagline: "Heaven on Earth: Meadows, Houseboats & Saffron Valleys",
    description: "Framed by snow-laden Himalayan giants and pine-blanketed hills, the Kashmir Valley is home to shimmering Dal Lake shikaras, blossoming Mughal gardens, world-famous ski slopes in Gulmarg, and the pristine meadows of Pahalgam.",
    heroImage: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "Year-Round (March-May for Flowers, Dec-Feb for Snow)",
    idealDuration: "5 - 7 Days",
    averageBudget: 5500,
    budgetTier: "Moderate",
    coordinates: { lat: 34.0837, lng: 74.7973 },
    weatherProfile: {
      temp: 16,
      condition: "Crisp & Pristine",
      humidity: "52%",
      wind: "6 km/h",
      feelsLike: 16
    },
    attractions: [
      {
        id: "dal-lake-shikara",
        name: "Dal Lake Shikara & Floating Market",
        category: "Leisure",
        duration: "2.5 Hours",
        entryFee: 700,
        timeSlot: "06:00 AM",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=600&auto=format&fit=crop",
        description: "Serene wooden boat ride on calm waters amidst blooming lotus flowers and morning vegetable traders.",
        coordinates: { lat: 34.1130, lng: 74.8700 }
      },
      {
        id: "gulmarg-gondola",
        name: "Gulmarg Gondola Ride (Phase 1 & 2)",
        category: "Adventure",
        duration: "4 Hours",
        entryFee: 1850,
        timeSlot: "09:30 AM",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop",
        description: "World's second-highest cable car taking visitors to Apharwat Peak at 13,780 feet.",
        coordinates: { lat: 34.0484, lng: 74.3805 }
      }
    ],
    activities: [
      "Overnight stay on a handcrafted cedar houseboat",
      "Pahalgam Betaab Valley horse riding",
      "Saffron farm tour in Pampore",
      "Pashmina shawl and walnut wood carving shopping"
    ],
    localFood: ["Wazwan Banquet (Rogan Josh, Rista, Gushtaba)", "Kahwa Tea with Saffron & Almonds", "Modur Pulao", "Kashmiri Naan"],
    travelTips: [
      "Pre-book Gulmarg Gondola Phase 2 tickets weeks ahead via the official J&K portal.",
      "Experience early morning sunrise on Dal Lake for ethereal misty reflections."
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    state: "Kerala",
    country: "India",
    category: "Nature",
    tags: ["God's Own Country", "Backwaters", "Ayurveda", "Tea Gardens", "Beaches"],
    rating: 4.91,
    reviewsCount: 3100,
    tagline: "God's Own Country: Backwaters, Tea Hills & Ayurvedic Bliss",
    description: "A tropical oasis fringed with palm trees, Kerala enchants with tranquil houseboats floating down Alleppey backwaters, misty rolling tea plantations of Munnar, Kathakali dance performances, and rejuvenating Ayurvedic wellness.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "September to March",
    idealDuration: "5 - 7 Days",
    averageBudget: 4800,
    budgetTier: "Moderate",
    coordinates: { lat: 9.9312, lng: 76.2673 },
    weatherProfile: {
      temp: 30,
      condition: "Warm & Lush",
      humidity: "78%",
      wind: "11 km/h",
      feelsLike: 33
    },
    attractions: [
      {
        id: "alleppey-houseboat",
        name: "Alleppey Backwaters Houseboat Cruise",
        category: "Leisure",
        duration: "Full Day / Overnight",
        entryFee: 7500,
        timeSlot: "11:30 AM",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop",
        description: "Cruise in a traditional thatched Kettuvallam through lagoons, paddy fields, and canal villages.",
        coordinates: { lat: 9.4981, lng: 76.3388 }
      },
      {
        id: "munnar-tea-gardens",
        name: "Munnar Rolling Tea Plantations",
        category: "Nature",
        duration: "3 Hours",
        entryFee: 150,
        timeSlot: "09:00 AM",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&auto=format&fit=crop",
        description: "Endless emerald slopes where Ceylon tea leaves are hand-plucked amidst the mist.",
        coordinates: { lat: 10.0889, lng: 77.0595 }
      }
    ],
    activities: [
      "Authentic Abhyanga Ayurvedic herbal body massage",
      "Witness traditional Kathakali & Kalaripayattu martial arts in Kochi",
      "Periyar Wildlife Sanctuary bamboo rafting",
      "Watch Chinese fishing nets at sunset in Fort Kochi"
    ],
    localFood: ["Appam with Vegetable / Chicken Stew", "Kerala Karimeen Pollichathu", "Malabar Parotta & Beef Fry", "Sadya on Banana Leaf", "Puttu and Kadala Curry"],
    travelTips: [
      "Combine 2 nights in Munnar with 1 night on an Alleppey houseboat for the best experience.",
      "Taste fresh coconut water and local banana chips fried in pure coconut oil."
    ]
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    category: "Historical",
    tags: ["UNESCO World Heritage City", "Gandhi", "Street Food", "Textiles", "Architecture"],
    rating: 4.82,
    reviewsCount: 1420,
    tagline: "India's First UNESCO Heritage City & Cultural Capital of Gujarat",
    description: "A dynamic metropolis steeped in 600 years of living history. From the peaceful Sabarmati Ashram of Mahatma Gandhi and intricate pols of the old walled city to the nighttime food frenzy at Manek Chowk, Ahmedabad is vibrant and unforgettable.",
    heroImage: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "October to March",
    idealDuration: "2 - 3 Days",
    averageBudget: 3200,
    budgetTier: "Budget",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    weatherProfile: {
      temp: 30,
      condition: "Warm & Clear",
      humidity: "40%",
      wind: "12 km/h",
      feelsLike: 29
    },
    attractions: [
      {
        id: "sabarmati-ashram",
        name: "Sabarmati Ashram (Gandhi Smarak)",
        category: "Historical",
        duration: "2 Hours",
        entryFee: 0,
        timeSlot: "09:00 AM",
        image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?q=80&w=600&auto=format&fit=crop",
        description: "The serene headquarters where Mahatma Gandhi led the historic Salt March and shaped India's freedom struggle.",
        coordinates: { lat: 23.0605, lng: 72.5804 }
      },
      {
        id: "adalaj-stepwell",
        name: "Adalaj Stepwell (Rudabai Vav)",
        category: "Historical",
        duration: "1.5 Hours",
        entryFee: 50,
        timeSlot: "11:30 AM",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=600&auto=format&fit=crop",
        description: "An architectural wonder of Indo-Islamic stone carvings descending five subterranean stories.",
        coordinates: { lat: 23.1667, lng: 72.5800 }
      },
      {
        id: "atal-bridge",
        name: "Atal Pedestrian Bridge & Sabarmati Riverfront",
        category: "Sightseeing",
        duration: "2 Hours",
        entryFee: 30,
        timeSlot: "06:30 PM",
        image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?q=80&w=600&auto=format&fit=crop",
        description: "Striking kite-inspired pedestrian footbridge over the illuminated Sabarmati riverfront promenade.",
        coordinates: { lat: 23.0298, lng: 72.5786 }
      }
    ],
    activities: [
      "Heritage Walking Tour through the ancient pols & secret passages",
      "Late-night street food extravaganza at Manek Chowk jewelry square",
      "Calico Museum of Textiles guided exploration",
      "Kite flying festival (Uttarayan) celebration along the river"
    ],
    localFood: ["Authentic Gujarati Thali (Agashiye)", "Khaman & Dhokla", "Fafda & Jalebi at Chandravilas", "Gwalior Dosa & Chocolate Sandwich at Manek Chowk", "Handvo"],
    travelTips: [
      "Book the morning Old City Heritage Walk organized by Ahmedabad Municipal Corporation.",
      "Visit Manek Chowk after 9:30 PM when jewelry shops transform into bustling food stalls."
    ]
  },
  {
    id: "kutch",
    name: "Rann of Kutch",
    state: "Gujarat",
    country: "India",
    category: "Adventure",
    tags: ["White Desert", "Rann Utsav", "Salt Flats", "Handicrafts", "Full Moon"],
    rating: 4.89,
    reviewsCount: 1530,
    tagline: "The Endless White Salt Desert & Kaleidoscope of Folk Art",
    description: "The Great Rann of Kutch is one of the world's largest salt deserts. During the annual Rann Utsav, the stark white landscape comes alive with tent cities, Kutchi music, camel safaris, and glowing moonlit horizons.",
    heroImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588097281266-310cead47b7c?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "November to February (Rann Utsav Season)",
    idealDuration: "3 - 4 Days",
    averageBudget: 5200,
    budgetTier: "Moderate",
    coordinates: { lat: 23.8340, lng: 69.8370 },
    weatherProfile: {
      temp: 24,
      condition: "Cool Desert Breezes",
      humidity: "35%",
      wind: "14 km/h",
      feelsLike: 23
    },
    attractions: [
      {
        id: "white-rann-dhordo",
        name: "White Desert at Dhordo",
        category: "Sightseeing",
        duration: "3 Hours",
        entryFee: 100,
        timeSlot: "05:00 PM",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
        description: "Glistening crystalline salt flats that gleam silver under the full moon and sunset glow.",
        coordinates: { lat: 23.7844, lng: 69.5167 }
      },
      {
        id: "kalo-dungar",
        name: "Kalo Dungar (Black Hill)",
        category: "Sightseeing",
        duration: "2.5 Hours",
        entryFee: 50,
        timeSlot: "11:00 AM",
        image: "https://images.unsplash.com/photo-1588097281266-310cead47b7c?q=80&w=600&auto=format&fit=crop",
        description: "Highest point in Kutch offering panoramic vistas of the Indo-Pak border and Dattatreya Temple.",
        coordinates: { lat: 23.9538, lng: 69.7891 }
      }
    ],
    activities: [
      "Camel cart ride into the deep salt desert at sunset",
      "Artisan village hopping (Nirona Rogan Art, Bhujodi Weaving, Hodka mud mirrors)",
      "Star gazing under crystal-clear desert night skies",
      "ATV rides and paramotoring over the white salt plain"
    ],
    localFood: ["Kutchi Dabeli", "Bajra no Rotlo with Ringna no Olo", "Gulab Pak", "Mawa Sweets", "Chhundo and Pickles"],
    travelTips: [
      "Plan your trip around the Full Moon night for an otherworldly glowing salt plain experience.",
      "Obtain the mandatory Rann permit online at the Gujarat Tourism / Kutch portal."
    ]
  },
  {
    id: "gir",
    name: "Gir National Park",
    state: "Gujarat",
    country: "India",
    category: "Nature",
    tags: ["Asiatic Lions", "Wildlife", "Safari", "Nature Reserve", "Birdwatching"],
    rating: 4.84,
    reviewsCount: 1250,
    tagline: "The Last Sanctuary of the Majestic Asiatic Lion",
    description: "Gir National Park is the only place on Earth where you can see the Asiatic Lion roaming wild in its natural teak forest habitat. With leopards, marsh crocodiles, and over 300 bird species, it is a premier wildlife reserve.",
    heroImage: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "December to April",
    idealDuration: "2 - 3 Days",
    averageBudget: 4500,
    budgetTier: "Moderate",
    coordinates: { lat: 21.1243, lng: 70.8242 },
    weatherProfile: {
      temp: 27,
      condition: "Dry Forest Climate",
      humidity: "44%",
      wind: "9 km/h",
      feelsLike: 27
    },
    attractions: [
      {
        id: "gir-lion-safari",
        name: "Open Jeep Forest Safari",
        category: "Adventure",
        duration: "3.5 Hours",
        entryFee: 2800,
        timeSlot: "06:00 AM",
        image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=600&auto=format&fit=crop",
        description: "Thrilling early morning safari through rugged deciduous forest tracking prides of Asiatic lions.",
        coordinates: { lat: 21.1243, lng: 70.8242 }
      },
      {
        id: "devaliya-safari-park",
        name: "Gir Interpretation Zone (Devalia)",
        category: "Sightseeing",
        duration: "1.5 Hours",
        entryFee: 350,
        timeSlot: "03:30 PM",
        image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600&auto=format&fit=crop",
        description: "Fenced wildlife safari providing guaranteed sightings of lions, leopards, and spotted deer.",
        coordinates: { lat: 21.1610, lng: 70.6200 }
      }
    ],
    activities: [
      "Guided birdwatching tour near Kamleshwar Dam",
      "Maldhari tribal settlement interaction",
      "Organic mango orchard farm walks in Talala (Gir Kesar)",
      "Night jungle listening session at eco-resorts"
    ],
    localFood: ["Kathiyawadi Thali", "Sev Tameta Nu Shaak", "Gir Kesar Mango Pulp", "Garlic Chutney & Bhakri", "Chaash"],
    travelTips: [
      "Safari permits must be booked on the official Gadhada portal at least 60-90 days in advance.",
      "Morning 6:00 AM safari slots offer the highest probability of active lion sightings."
    ]
  },
  {
    id: "saputara",
    name: "Saputara",
    state: "Gujarat",
    country: "India",
    category: "Mountains",
    tags: ["Hill Station", "Waterfalls", "Sahyadri", "Lake Boating", "Tribal Culture"],
    rating: 4.74,
    reviewsCount: 980,
    tagline: "Gujarat's Sole Picturesque Hill Retreat in the Sahyadris",
    description: "Perched at an altitude of 1,000 meters in the verdant Dang forest, Saputara is a tranquil hill station blessed with cascading monsoon waterfalls, misty ropeway rides, scenic lake boating, and rich tribal heritage.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "July to February (Monsoon & Winter)",
    idealDuration: "2 - 3 Days",
    averageBudget: 2800,
    budgetTier: "Budget",
    coordinates: { lat: 20.5756, lng: 73.7483 },
    weatherProfile: {
      temp: 22,
      condition: "Pleasant & Breezy",
      humidity: "62%",
      wind: "8 km/h",
      feelsLike: 22
    },
    attractions: [
      {
        id: "saputara-lake",
        name: "Saputara Lake & Boating Club",
        category: "Leisure",
        duration: "2 Hours",
        entryFee: 100,
        timeSlot: "10:00 AM",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
        description: "Picturesque hill lake surrounded by landscaped gardens, paddle boats, and walking trails.",
        coordinates: { lat: 20.5780, lng: 73.7450 }
      },
      {
        id: "gira-waterfalls",
        name: "Gira Waterfalls (Waghai)",
        category: "Nature",
        duration: "2.5 Hours",
        entryFee: 30,
        timeSlot: "02:00 PM",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=600&auto=format&fit=crop",
        description: "Spectacular 30-meter natural waterfall crashing into the Ambika River during and after monsoons.",
        coordinates: { lat: 20.7630, lng: 73.5780 }
      }
    ],
    activities: [
      "Ropeway cable car ride to Sunset Point",
      "Tribal Museum and Warli painting collection",
      "Governor's Hill sunset viewpoint hike",
      "Visit Step Garden and Rose Garden"
    ],
    localFood: ["Dangi Bamboo Pickles", "Nagli Rotla (Ragi Flatbread)", "Local Wild Honey", "Hot Sweet Corn", "Masala Chai"],
    travelTips: [
      "Visit right after the monsoons (August to November) for lush emerald valleys and full waterfalls.",
      "Try hand-crafted bamboo showpieces and tribal masks made by local Dang artisans."
    ]
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    country: "India",
    category: "City",
    tags: ["Max City", "Bollywood", "Coastal", "Nightlife", "Colonial"],
    rating: 4.85,
    reviewsCount: 3800,
    tagline: "The City of Dreams, Marine Drive & Infinite Energy",
    description: "India's commercial powerhouse and artistic heartbeat. Mumbai is a captivating kaleidoscope of Victorian Gothic architecture, Bollywood studios, coastal sunsets on Marine Drive, and legendary street food stalls.",
    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "October to March",
    idealDuration: "3 - 4 Days",
    averageBudget: 5500,
    budgetTier: "Moderate",
    coordinates: { lat: 18.9220, lng: 72.8347 },
    weatherProfile: {
      temp: 29,
      condition: "Coastal Warmth",
      humidity: "68%",
      wind: "14 km/h",
      feelsLike: 31
    },
    attractions: [
      {
        id: "gateway-of-india",
        name: "Gateway of India & Colaba",
        category: "Historical",
        duration: "2 Hours",
        entryFee: 0,
        timeSlot: "09:00 AM",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600&auto=format&fit=crop",
        description: "Monumental 1924 basalt arch overlooking Mumbai Harbour opposite the grand Taj Mahal Palace Hotel.",
        coordinates: { lat: 18.9220, lng: 72.8347 }
      },
      {
        id: "marine-drive",
        name: "Marine Drive (Queen's Necklace)",
        category: "Leisure",
        duration: "2 Hours",
        entryFee: 0,
        timeSlot: "06:00 PM",
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=600&auto=format&fit=crop",
        description: "Sweeping 3.6-kilometer seaside promenade illuminated with sparkling arc lights after dark.",
        coordinates: { lat: 18.9438, lng: 72.8232 }
      }
    ],
    activities: [
      "Ferry ride to ancient rock-cut Elephanta Caves",
      "Colaba Causeway shopping and Leopold Cafe beer",
      "Sunset stroll and Mumbai street food at Chowpatty Beach",
      "Bandra art murals and heritage church exploration"
    ],
    localFood: ["Vada Pav at Ashok Vada Pav", "Pav Bhaji at Sardar Refreshments", "Bombay Duck Fry", "Bun Maska & Irani Chai", "Kebab rolls at Bademiya"],
    travelTips: [
      "Ride the Mumbai local train during non-peak hours (11 AM - 4 PM) for an iconic experience.",
      "Take a heritage walk through Fort and Kala Ghoda art district."
    ]
  },
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    country: "India",
    category: "Historical",
    tags: ["Capital", "Monuments", "Food Capital", "Heritage", "Bazaars"],
    rating: 4.83,
    reviewsCount: 3600,
    tagline: "India's Epic Capital of Empires, Monuments & Flavors",
    description: "A city that spans millennia of history. From the colossal Red Fort and Humayun's Tomb to the grand boulevards of Lutyens' Delhi and narrow culinary alleys of Chandni Chowk, Delhi is a feast for all senses.",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592635196078-9ffc0f5f73d8?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "October to March",
    idealDuration: "3 - 5 Days",
    averageBudget: 4200,
    budgetTier: "Moderate",
    coordinates: { lat: 28.6139, lng: 77.2090 },
    weatherProfile: {
      temp: 24,
      condition: "Sunny & Pleasant",
      humidity: "42%",
      wind: "11 km/h",
      feelsLike: 24
    },
    attractions: [
      {
        id: "qutub-minar",
        name: "Qutub Minar Complex",
        category: "Historical",
        duration: "2 Hours",
        entryFee: 50,
        timeSlot: "10:00 AM",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=600&auto=format&fit=crop",
        description: "73-meter UNESCO World Heritage minaret built in 1193 adorned with intricate Quranic inscriptions.",
        coordinates: { lat: 28.5245, lng: 77.1855 }
      },
      {
        id: "humayun-tomb",
        name: "Humayun's Tomb",
        category: "Historical",
        duration: "2 Hours",
        entryFee: 50,
        timeSlot: "03:30 PM",
        image: "https://images.unsplash.com/photo-1592635196078-9ffc0f5f73d8?q=80&w=600&auto=format&fit=crop",
        description: "Splendid Persian-style red sandstone garden tomb that inspired the Taj Mahal.",
        coordinates: { lat: 28.5933, lng: 77.2507 }
      }
    ],
    activities: [
      "Old Delhi Rickshaw Food Tour in Paranthe Wali Gali",
      "Evening qawwali music at Hazrat Nizamuddin Dargah",
      "Shopping at Dilli Haat open-air craft bazaar",
      "Stroll past India Gate and Kartavya Path at night"
    ],
    localFood: ["Butter Chicken at Moti Mahal", "Chole Bhature at Sita Ram Diwan Chand", "Old Delhi Kebabs at Karim's", "Stuffed Paranthas", "Kulfi Falooda"],
    travelTips: [
      "The Delhi Metro is the cleanest, fastest, and most convenient way to avoid traffic.",
      "Most government monuments are closed on Mondays."
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    state: "Singapore",
    country: "Singapore",
    category: "Luxury",
    tags: ["Garden City", "Futuristic", "Hawker Food", "Clean", "Attractions"],
    rating: 4.93,
    reviewsCount: 3950,
    tagline: "The Futuristic Garden City of Supertrees & Michelin Hawkers",
    description: "A dazzling global metropolis where lush nature meets cutting-edge innovation. Experience the otherworldly Supertree Grove at Gardens by the Bay, dine at Michelin-starred hawker centers, and marvel at Marina Bay Sands.",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "Year-Round (November-January festive)",
    idealDuration: "4 - 5 Days",
    averageBudget: 13500,
    budgetTier: "Luxury",
    coordinates: { lat: 1.3521, lng: 103.8198 },
    weatherProfile: {
      temp: 29,
      condition: "Tropical Warmth",
      humidity: "80%",
      wind: "10 km/h",
      feelsLike: 32
    },
    attractions: [
      {
        id: "gardens-by-the-bay",
        name: "Gardens by the Bay & Cloud Forest",
        category: "Sightseeing",
        duration: "3.5 Hours",
        entryFee: 3200,
        timeSlot: "03:00 PM",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&auto=format&fit=crop",
        description: "101-hectare futuristic botanical park featuring giant solar-powered vertical Supertrees and indoor waterfall dome.",
        coordinates: { lat: 1.2816, lng: 103.8636 }
      },
      {
        id: "marina-bay-skypark",
        name: "Marina Bay Sands SkyPark Observation Deck",
        category: "Sightseeing",
        duration: "2 Hours",
        entryFee: 2600,
        timeSlot: "06:30 PM",
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=600&auto=format&fit=crop",
        description: "Iconic rooftop cantilever 57 levels in the sky overlooking the Singapore skyline and harbor.",
        coordinates: { lat: 1.2834, lng: 103.8607 }
      }
    ],
    activities: [
      "Universal Studios Singapore thrill rides on Sentosa Island",
      "Night Safari wildlife tram ride",
      "Hawker feast at Lau Pa Sat and Maxwell Food Centre",
      "Jewel Changi Airport Rain Vortex viewing"
    ],
    localFood: ["Hainanese Chicken Rice", "Chilli Crab with Fried Mantou", "Laksa Noodle Soup", "Kaya Toast with Soft Boiled Eggs", "Satay Skewers"],
    travelTips: [
      "Tap any contactless credit/debit card directly at MRT subway gantries without buying cards.",
      "Stay hydrated and carry an umbrella for brief afternoon tropical showers."
    ]
  },
  {
    id: "london",
    name: "London",
    state: "Greater London",
    country: "United Kingdom",
    category: "City",
    tags: ["Royal", "Museums", "History", "Theatre", "Architecture"],
    rating: 4.88,
    reviewsCount: 4200,
    tagline: "The Historic Capital of Royals, West End & Iconic Bridges",
    description: "A timeless world city rich in historical drama and modern culture. From the ancient Tower of London and Big Ben to world-class free museums, buzzing West End musicals, and leafy Royal Parks.",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "May to September",
    idealDuration: "5 - 7 Days",
    averageBudget: 16000,
    budgetTier: "Luxury",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    weatherProfile: {
      temp: 17,
      condition: "Cool & Breezy",
      humidity: "60%",
      wind: "15 km/h",
      feelsLike: 16
    },
    attractions: [
      {
        id: "tower-bridge",
        name: "Tower Bridge & Tower of London",
        category: "Historical",
        duration: "3 Hours",
        entryFee: 3200,
        timeSlot: "10:00 AM",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop",
        description: "Victorian bascule bridge spanning the Thames next to the historic fortress holding the Crown Jewels.",
        coordinates: { lat: 51.5055, lng: -0.0754 }
      },
      {
        id: "british-museum",
        name: "The British Museum",
        category: "Cultural",
        duration: "3.5 Hours",
        entryFee: 0,
        timeSlot: "01:30 PM",
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=600&auto=format&fit=crop",
        description: "Home to the Rosetta Stone, Egyptian mummies, and two million years of human history (Free Entry).",
        coordinates: { lat: 51.5194, lng: -0.1270 }
      }
    ],
    activities: [
      "Catch an award-winning musical in London's West End",
      "Stroll through Borough Market artisanal food stalls",
      "Hop on the London Eye for skyline views",
      "Afternoon tea at Fortnum & Mason or The Ritz"
    ],
    localFood: ["Traditional Fish & Chips with Mushy Peas", "Sunday Roast with Yorkshire Pudding", "Full English Breakfast", "Shepherd's Pie", "Warm Scones with Clotted Cream"],
    travelTips: [
      "Most major national museums (British Museum, Natural History, V&A) are completely free to enter.",
      "Use contactless bank cards on the Tube for automated daily fare capping."
    ]
  },
  {
    id: "tokyo",
    name: "Tokyo",
    state: "Tokyo Prefecture",
    country: "Japan",
    category: "City",
    tags: ["Neon", "Anime", "Culinary Capital", "Temples", "Hyper-Modern"],
    rating: 4.96,
    reviewsCount: 4500,
    tagline: "The Hyper-Modern Metropolis of Neon, Ancient Shrines & Ramen",
    description: "An intoxicating blend of ultramodern neon skyscrapers and serene centuries-old Shinto shrines. Tokyo boasts the world's most Michelin stars, the bustling Shibuya crossing, tranquil Senso-ji temple, and cutting-edge digital art.",
    heroImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
    ],
    bestTime: "March to May (Cherry Blossoms) & Sept to Nov",
    idealDuration: "6 - 8 Days",
    averageBudget: 12000,
    budgetTier: "Luxury",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    weatherProfile: {
      temp: 19,
      condition: "Crisp & Pleasant",
      humidity: "48%",
      wind: "8 km/h",
      feelsLike: 19
    },
    attractions: [
      {
        id: "senso-ji-temple",
        name: "Sensō-ji Temple & Nakamise Dori",
        category: "Cultural",
        duration: "2.5 Hours",
        entryFee: 0,
        timeSlot: "08:30 AM",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600&auto=format&fit=crop",
        description: "Tokyo's oldest Buddhist temple founded in 645 AD featuring the iconic giant red Kaminarimon lantern.",
        coordinates: { lat: 35.7148, lng: 139.7967 }
      },
      {
        id: "shibuya-crossing",
        name: "Shibuya Crossing & Shibuya Sky",
        category: "Sightseeing",
        duration: "2 Hours",
        entryFee: 1800,
        timeSlot: "05:30 PM",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=600&auto=format&fit=crop",
        description: "The world's busiest pedestrian crossing with mesmerizing rooftop open-air 360-degree views.",
        coordinates: { lat: 35.6595, lng: 139.7004 }
      }
    ],
    activities: [
      "TeamLab Planets immersive digital art museum",
      "Tsukiji Outer Market fresh sushi breakfast",
      "Akihabara gaming and anime district exploration",
      "Day trip to Mount Fuji and Lake Kawaguchiko"
    ],
    localFood: ["Tonkotsu Ramen (Ichiran)", "Fresh Omakase Sushi", "Crispy Wagyu Katsu Sando", "Yakitori Skewers in Omoide Yokocho", "Matcha Parfait"],
    travelTips: [
      "Get a digital Suica / Pasmo card in your Apple/Google Wallet for effortless subway and 7-Eleven tapping.",
      "Tipping is not customary in Japan and is politely declined."
    ]
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Destinations", icon: "Compass", count: DESTINATIONS.length },
  { id: "Historical", name: "Historical & Heritage", icon: "Landmark", count: DESTINATIONS.filter(d => d.category === "Historical").length },
  { id: "Beach", name: "Beach & Coastal", icon: "Palmtree", count: DESTINATIONS.filter(d => d.category === "Beach").length },
  { id: "Mountains", name: "Mountains & Alpine", icon: "Mountain", count: DESTINATIONS.filter(d => d.category === "Mountains").length },
  { id: "Nature", name: "Nature & Wildlife", icon: "Trees", count: DESTINATIONS.filter(d => d.category === "Nature").length },
  { id: "Luxury", name: "Luxury & Glamour", icon: "Sparkles", count: DESTINATIONS.filter(d => d.category === "Luxury").length },
  { id: "City", name: "City & Cosmopolitan", icon: "Building2", count: DESTINATIONS.filter(d => d.category === "City").length },
  { id: "Adventure", name: "Adventure & Desert", icon: "Flame", count: DESTINATIONS.filter(d => d.category === "Adventure").length }
];

export const TRAVEL_STYLES = [
  "Solo",
  "Couple",
  "Family",
  "Friends",
  "Adventure",
  "Luxury",
  "Backpacker"
];

export const INTEREST_TAGS = [
  "Culture",
  "Food & Dining",
  "History & Forts",
  "Nature & Lakes",
  "Photography",
  "Shopping & Souvenirs",
  "Adventure & Trekking",
  "Nightlife & Cafes",
  "Wellness & Spas"
];

export const INSPIRATIONS = [
  {
    id: "insp-1",
    title: "Weekend Escapes",
    subtitle: "Quick 2-3 day getaways for spontaneous wanderers",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
    destinations: ["Udaipur", "Goa", "Saputara", "Jaipur"],
    filterCategory: "Historical"
  },
  {
    id: "insp-2",
    title: "Mountain Getaways",
    subtitle: "Alpine air, snow-capped peaks and serene valleys",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    destinations: ["Manali", "Kashmir", "Saputara"],
    filterCategory: "Mountains"
  },
  {
    id: "insp-3",
    title: "Sun, Surf & Coastal Soul",
    subtitle: "Golden hour sands and tropical seafood feasts",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    destinations: ["Goa", "Kerala", "Bali"],
    filterCategory: "Beach"
  },
  {
    id: "insp-4",
    title: "Imperial Heritage & Forts",
    subtitle: "Palaces, royal legends, and UNESCO treasures",
    image: "https://images.unsplash.com/photo-1603288967396-d3c2e6f47761?q=80&w=800&auto=format&fit=crop",
    destinations: ["Jaipur", "Udaipur", "Ahmedabad", "Delhi"],
    filterCategory: "Historical"
  },
  {
    id: "insp-5",
    title: "Futuristic Megacities",
    subtitle: "Skyline wonders, haute cuisine and neon energy",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    destinations: ["Dubai", "Singapore", "Tokyo", "London", "Paris"],
    filterCategory: "Luxury"
  }
];

export const TRAVEL_STATS = [
  { label: "Curated Destinations", value: "500+", suffix: "" },
  { label: "Trips Planned", value: "18.4K", suffix: "" },
  { label: "Itinerary Activities Saved", value: "95K+", suffix: "" },
  { label: "Average Traveler Rating", value: "4.9", suffix: "/ 5.0" }
];
