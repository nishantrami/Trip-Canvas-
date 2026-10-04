# ✈️ TripCanvas — Discover. Plan. Travel.

<div align="center">

![TripCanvas Banner](https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop)

**A modern, cinematic travel discovery & intelligent trip planning platform.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Application Pages](#-application-pages) • [Project Structure](#-project-structure) • [Author](#-author)

</div>

---

## 📖 Overview

**TripCanvas** is an intuitive, all-in-one web application designed for travelers who want to explore extraordinary destinations, curate bespoke day-by-day itineraries, manage accommodations and dining reservations, and keep trips within budget.

Built with **React 19**, **Vite**, and **Framer Motion**, TripCanvas pairs high-performance client-side rendering with fluid animations, rich interactive maps, and responsive glassmorphism-inspired design.

---

## 🌟 Features

### 🗺️ Curated Destination Explorer
- Deep-dive into handpicked destinations across multiple travel categories (Historical, Beach, Mountain, Cultural, Wildlife).
- High-definition photography galleries, climate indicators, best seasons to visit, and recommended trip lengths.
- Real-time search and category filtering with debounced instant results.

### 📅 Intelligent Itinerary & Trip Planner
- Create personalized trips with custom dates, traveler counts, and style tiers (Budget, Moderate, Luxury).
- Day-by-day interactive timeline to sequence morning, afternoon, and evening activities.
- Add, adjust, or remove attractions with computed travel times and entry fees.

### 🏨 Stays & Hotel Reservations
- Browse handpicked stays from heritage palaces to beachfront boutique villas.
- Filter by price, rating, and amenities (WiFi, Pool, Spa, Breakfast).
- Integrated booking modal with instant confirmation and party size tracking.

### 🍽️ Culinary & Dining Reservations
- Discover top culinary spots and local dining gems.
- Table reservation system with custom guest counts, timeslots, and special dietary requests.

### 📍 Interactive Leaflet Maps
- Embedded geographic maps with custom pins for attractions, hotels, and restaurants.
- Coordinate-based visualization with smooth pan and zoom controls.

### 💰 Smart Budget Calculation
- Dynamic budget estimator breaking down costs across accommodations, dining, sightseeing, and transit.
- Real-time calculations updated as you add or remove itinerary items.

### ⛅ Weather Insights
- Destination weather profiles detailing temperature, weather condition, humidity, and wind speeds.

### 👤 Profile, Bookings & Favorites
- Personal travel dashboard to review active bookings, upcoming itineraries, and saved wishlists.
- Persistent state management using LocalStorage so your planned trips and favorites remain intact across sessions.
- Interactive celebration feedback with confetti animations upon confirming bookings.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Core Framework** | [React 19](https://react.dev/) |
| **Bundler & Tooling** | [Vite 8](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [Canvas Confetti](https://github.com/catdad/canvas-confetti) |
| **Maps & Geospatial** | [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Styling** | Custom Vanilla CSS Design System (CSS Variables, Flexbox, CSS Grid) |
| **Linter** | [Oxlint](https://oxc.rs/) |

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version `18.0.0` or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/nishantrami/Trip-Canvas-.git
cd Trip-Canvas-
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Launch the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

### 4. Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
Trip-Canvas-/
├── public/                 # Static assets (favicons, SVG icons)
├── src/
│   ├── animations/         # Framer Motion animation variants & transitions
│   ├── assets/             # Images, logos, and vector graphics
│   ├── components/         # Reusable UI component modules
│   │   ├── budget/         # Budget breakdown & calculation cards
│   │   ├── common/         # Modals, Drawers, Skeletons, Error & Empty states
│   │   ├── destination/    # Destination & attraction cards, grids, modals
│   │   ├── hotel/          # Hotel listing cards & booking modals
│   │   ├── layout/         # Navigation bar, Footer, Quick search
│   │   ├── map/            # Leaflet map container & custom markers
│   │   ├── restaurant/     # Restaurant cards & table reservation modals
│   │   ├── trip/           # Trip cards, itinerary timeline, activity modal
│   │   └── weather/        # Weather metrics card & widgets
│   ├── context/            # React Context providers (Auth, Trip, Booking, Favorite, Toast)
│   ├── data/               # Curated datasets (destinations, hotels, restaurants)
│   ├── hooks/              # Custom React hooks (useWeather, useLocalStorage, useDebounce, etc.)
│   ├── pages/              # Application views & page routes
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── DestinationDetails.jsx
│   │   ├── Hotels.jsx
│   │   ├── Restaurants.jsx
│   │   ├── Bookings.jsx
│   │   ├── CreateTrip.jsx
│   │   ├── MyTrips.jsx
│   │   ├── TripDetails.jsx
│   │   ├── Favorites.jsx
│   │   ├── Profile.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── NotFound.jsx
│   ├── routes/             # AppRoutes config & ProtectedRoute guard
│   ├── services/           # Data services (destination, hotel, restaurant, weather, map)
│   ├── utils/              # Calculation helpers, currency formatters, date formatters
│   ├── App.jsx             # Root application component with Context Providers
│   ├── index.css           # Global design system, CSS tokens, and styles
│   └── main.jsx            # Application entry point
├── .gitignore              # Git ignore rules
├── index.html              # HTML shell & font imports
├── package.json            # Project manifest & dependencies
└── vite.config.js          # Vite configuration
```

---

## 🧭 Application Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero banner, trending destinations, curated collections, quick search |
| `/explore` | **Explore** | Full catalog with category filters, search bar, and destination cards |
| `/explore/:destinationId` | **Destination Details** | In-depth guide, attractions, weather stats, hotels, restaurants, interactive map |
| `/hotels` | **Hotels** | Hotel search, amenity filters, pricing tiers, and room booking modal |
| `/restaurants` | **Restaurants** | Culinary guide, cuisine filters, ratings, and table reservations |
| `/create-trip` | **Create Trip** | Step-by-step trip generator (destination, dates, travelers, budget) |
| `/my-trips` | **My Trips** | Overview of all saved and active trip itineraries |
| `/my-trips/:tripId` | **Trip Details** | Day-by-day itinerary view, timeline, activity manager, budget summary |
| `/my-bookings` | **My Bookings** | Central management hub for confirmed hotel and dining reservations |
| `/favorites` | **Favorites** | Bookmarked destinations, stays, and places to visit |
| `/profile` | **Profile** | User profile, travel preferences, and account management |
| `/login` / `/register` | **Auth** | Sign in and registration pages |

---

## 📜 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts Vite dev server with hot module replacement (HMR) |
| `npm run build` | Compiles optimized production bundle into `/dist` |
| `npm run preview` | Locally serves the production build |
| `npm run lint` | Runs Oxlint to check code quality and lint rules |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Nishant Rami**

- GitHub: [@nishantrami](https://github.com/nishantrami)
- Repository: [Trip-Canvas-](https://github.com/nishantrami/Trip-Canvas-)

<div align="center">
  <sub>Built with ❤️ by Nishant Rami for passionate travelers everywhere.</sub>
</div>
