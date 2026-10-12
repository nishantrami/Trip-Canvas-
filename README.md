# ✈️ TripCanvas — Discover. Plan. Experience.

<div align="center">

![TripCanvas Banner](https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop)

**An ultra-modern, cinematic travel discovery, luxury stay booking & intelligent trip planning platform.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Oxlint](https://img.shields.io/badge/Oxlint-1.81-blue?style=for-the-badge)](https://oxc.rs/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Features](#-features) • [Admin Control Center & Secret Key](#-admin-control-center--secret-access) • [Contact & Concierge](#-contact--concierge-desk) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Application Pages](#-application-pages) • [Project Structure](#-project-structure) • [Author](#-author)

</div>

---

## 📖 Overview

**TripCanvas** is an intuitive, all-in-one editorial travel platform designed for modern explorers, roadtrippers, and wanderers. It provides high-performance client-side rendering with fluid micro-animations, interactive Leaflet maps, dynamic hotel and fine-dining reservations, itinerary sequencing, budget calculation, and a protected administrative control center.

Built with **React 19**, **Vite 8**, and **Framer Motion**, TripCanvas pairs state-of-the-art UI/UX design with persistent LocalStorage data stores, client-side authentication, and responsive layout architecture across mobile, tablet, and desktop viewports.

---

## 🌟 Features

### 🗺️ Curated Destination Explorer
- **Handpicked Heritage & Luxury Destinations**: Deep dive into premier locations including Udaipur, Goa, Jaipur, Manali, Kashmir, Kerala, Mumbai, Delhi NCR, Rann of Kutch, Gir, Bali, Paris, Tokyo, and Dubai.
- **Multidimensional Filters**: Filter by trip style (Heritage & Culture, Beaches & Coastal, Mountain Escapes, Wildlife Safaris, Luxury Urban).
- **Rich Media & Climate Indicators**: High-definition photo galleries, best travel months, average temperatures, and recommended duration.

### 🏨 Stays & Luxury Hotel Reservations
- Browse handpicked accommodations ranging from floating palaces in Lake Pichola to snow-bound Himalayan chalets.
- Price filtering (₹2,000 to ₹30,000+), star ratings, and amenities (Infinity Pool, Spa, Lake View, Free Breakfast).
- Interactive booking modal with guest counts, check-in dates, and instantaneous pass generation.

### 🍽️ Culinary Guides & Table Reservations
- Curated dining spots from royal Rajasthani thalis to seaside European cafes.
- Real-time table booking modal specifying party size, date, meal timeslots, and special dietary requests.

### 📅 Intelligent Itinerary & Trip Planner
- Step-by-step trip builder customized by destination, traveling group size, budget tier, and travel style.
- Day-by-day interactive timeline sequencing morning, afternoon, and evening activities.
- Dynamic budget estimator updating accommodation, dining, and sightseeing costs in real-time.

### 📍 Interactive Geospatial Maps
- Leaflet map integration with customized pins for attractions, hotels, and dining venues.
- Interactive coordinates, fluid zoom controls, and popover previews.

### 📞 24/7 Concierge & Contact Center (`/contact`)
- **Direct Concierge Hotlines**: 24/7 telephone desk and direct WhatsApp mobile link.
- **Categorized Inquiry Dispatch**: Stays & Palaces, Table Reservations, Custom Itinerary Planning, Partnerships, and Technical Support.
- **Instant Client-Side Ticket Generation**: Auto-generates unique inquiry tracking codes (e.g., `TC-CON-84920`) with confetti celebration and localStorage persistence.
- **Physical Experience Lounges**: Directory of experience centers across New Delhi, Mumbai, and Jaipur.
- **Interactive FAQ Accordion**: Expandable answers to common traveler questions.

---

## 🔐 Admin Control Center & Secret Access

TripCanvas includes a built-in **Administrator Control Center** (`/admin`) for managing destinations, auditing platform activities, tracking inventory, and toggling system settings.

### 🗝️ Secret Access Shortcut
The administration panel is protected by a global secret keyboard shortcut listener and a gated security modal:
- **Keyboard Shortcut**: Press <kbd>Ctrl</kbd> + <kbd>A</kbd> (or <kbd>Cmd</kbd> + <kbd>A</kbd> on macOS, alternate <kbd>Ctrl</kbd> + <kbd>N</kbd>) anywhere on the website.
- **Direct Route**: Navigate directly to `http://localhost:5173/admin`. If not authenticated, the secure authentication modal will prompt for the secret key.

### 🔑 Secret Keys & Master Passcodes
To unlock the Admin Control Center, use any of the authorized master passcodes:

| Master Key / Passcode | Description |
|---|---|
| **`admin123`** | **Default Primary Passcode** (Recommended) |
| **`tripadmin`** | Secondary Admin Passcode |
| **`tripcanvas2025`** | Annual Master Key |
| **`admin`** | Development Quick Key |

### 🛡️ Admin Capabilities
1. **Live Destination Management**:
   - Add new custom destinations with title, state, tagline, highlights, best season, imagery, and budget category.
   - Edit existing destinations in real-time.
   - Delete/hide destinations with instant state synchronization.
2. **Platform Configuration Toggles**:
   - Site name & branding parameters.
   - Currency toggling (INR, USD, EUR).
   - Maintenance Mode switch.
   - Booking engine enable/disable switch.
3. **Audit Log Inspection**:
   - Real-time timestamped event logging tracking administrative logins, updates, and configuration adjustments.
4. **Quick Unlock**:
   - One-click passcode pre-fill directly in the gateway modal for rapid demo access.

---

## 📞 Contact & Concierge Desk

The `/contact` route offers full-spectrum customer support and traveler concierge services:
- **Live Channels**:
  - Concierge Hotline: `+91 (800) 123-8747` (One-click copy)
  - Dedicated Email: `concierge@tripcanvas.travel` (One-click copy)
  - WhatsApp Line: `+91 98200 45678` (Direct chat link)
- **Interactive Form**:
  - Live client-side input validation.
  - Priority selector (Standard, Priority, Urgent - Currently Traveling).
  - Confetti particle burst and reference ticket voucher on submission.
- **Physical Heritage Lounges**:
  - New Delhi Flagship (Connaught Place, Barakhamba Road)
  - Mumbai Waterfront Lounge (Nariman Point & Colaba)
  - Jaipur Royal Experience Desk (C-Scheme, Civil Lines)

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Core Framework** | [React 19](https://react.dev/) | Component architecture, hooks, and React 19 concurrent features |
| **Bundler & Tooling** | [Vite 8](https://vitejs.dev/) | Ultra-fast HMR and optimized production bundling |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) | Declarative client-side routing with guarded route wrappers |
| **Animations** | [Framer Motion 13](https://www.framer.com/motion/) | Route transitions, slideouts, layout animations, spring effects |
| **Celebration FX** | [Canvas Confetti](https://github.com/catdad/canvas-confetti) | Milestone celebrations on bookings and contact submissions |
| **Maps & Geospatial** | [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/) | OpenStreetMap interactive tile maps and custom markers |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, crisp iconography across all pages |
| **Styling** | Vanilla CSS Design System | Custom CSS variables, flexbox, CSS grid, glassmorphism |
| **Linter** | [Oxlint](https://oxc.rs/) | Rust-powered high-speed JavaScript/JSX linting |

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version `18.0.0` or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or [pnpm](https://pnpm.io/)
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

Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

---

## 🧭 Application Pages

| Route | Page Name | Access | Key Features |
|---|---|---|---|
| `/` | **Home** | Public | Editorial hero carousel, trending destinations, seasonal collections, quick search |
| `/explore` | **Explore** | Public | Comprehensive destination catalog, category filter pills, keyword search |
| `/explore/:destinationId` | **Destination Details** | Public | Destination guide, top attractions, hotel recommendations, food spots, map view |
| `/hotels` | **Hotels & Stays** | Public | Luxury hotels, Havelis, price/amenities filtering, instant booking modal |
| `/restaurants` | **Restaurants & Dining** | Public | Curated restaurants, cuisine filters, ambiance ratings, table booking modal |
| `/contact` | **Contact & Concierge** | Public | 24/7 channels, inquiry submission with ticket ID, physical lounges, FAQs |
| `/create-trip` | **Create Trip Wizard** | Protected | Step-by-step custom trip builder, date ranges, traveler count, budget estimator |
| `/my-trips` | **My Trips** | Public | Overview cards of all planned and saved journeys |
| `/my-trips/:tripId` | **Trip Details** | Public | Day-by-day itinerary timeline, activity sequencing, cost breakdown |
| `/my-bookings` | **My Bookings** | Public | Management dashboard for hotel stays and restaurant reservations |
| `/favorites` | **Favorites / Wishlist** | Protected | Saved destinations and bookmarked stays |
| `/profile` | **User Profile** | Protected | User settings, travel preferences, account details |
| `/login` | **Sign In** | Public | User authentication with persistent session state |
| `/register` | **Create Account** | Public | Account registration form with validation |
| `/admin` | **Admin Dashboard** | Protected (Secret) | Destination CRUD, inventory overview, configuration toggles, audit logs |

---

## 📁 Project Structure

```text
Trip-Canvas-/
├── public/                     # Static assets (favicons, SVG badges, logos)
├── src/
│   ├── animations/             # Framer Motion animation variants & transitions
│   │   └── motionVariants.js
│   ├── assets/                 # Brand graphics and images
│   ├── components/             # Reusable UI component modules
│   │   ├── admin/              # Admin shortcut listener, access modal & tabs
│   │   │   ├── AdminAccessModal.jsx
│   │   │   ├── AdminProtectedRoute.jsx
│   │   │   └── AdminShortcutListener.jsx
│   │   ├── budget/             # Budget breakdown & calculation cards
│   │   ├── common/             # Modals, Drawers, Skeletons, Error states
│   │   ├── destination/        # Destination & attraction cards, grids, modals
│   │   ├── hotel/              # Hotel listing cards & booking modals
│   │   ├── layout/             # Navigation bar, Footer, Quick search modal
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── QuickSearchModal.jsx
│   │   ├── map/                # Leaflet map container & custom pins
│   │   ├── restaurant/         # Restaurant cards & table reservation modal
│   │   ├── trip/               # Trip cards, itinerary timeline, activity modal
│   │   └── weather/            # Weather metrics card & widgets
│   ├── context/                # React Context Providers
│   │   ├── AdminContext.jsx    # Admin state, master passcodes, destination overrides, audit logs
│   │   ├── AuthContext.jsx     # User authentication & profile state
│   │   ├── BookingContext.jsx  # Hotel & restaurant reservations state
│   │   ├── FavoriteContext.jsx # Wishlist state
│   │   ├── ToastContext.jsx    # Global notification toast system
│   │   └── TripContext.jsx     # Itinerary & trip builder state
│   ├── data/                   # Curated datasets (destinations, hotels, restaurants)
│   ├── hooks/                  # Custom React hooks (useLocalStorage, useDebounce, etc.)
│   ├── pages/                  # Top-level page views
│   │   ├── Admin/              # Admin control center views & modals
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── AdminDashboard.css
│   │   ├── Bookings.jsx        # User reservations dashboard
│   │   ├── Contact.jsx         # 24/7 Concierge, inquiry form & FAQs
│   │   ├── Contact.css         # Contact page stylesheet
│   │   ├── CreateTrip.jsx      # Multi-step trip planning wizard
│   │   ├── DestinationDetails.jsx
│   │   ├── Explore.jsx
│   │   ├── Favorites.jsx
│   │   ├── Home.jsx
│   │   ├── Hotels.jsx
│   │   ├── Login.jsx
│   │   ├── MyTrips.jsx
│   │   ├── NotFound.jsx
│   │   ├── Profile.jsx
│   │   ├── Register.jsx
│   │   ├── Restaurants.jsx
│   │   └── TripDetails.jsx
│   ├── routes/                 # Routing configuration
│   │   └── AppRoutes.jsx
│   ├── services/               # Data services (destination, hotel, restaurant, weather)
│   ├── utils/                  # Currency formatters, date formatters, calculation helpers
│   ├── App.css
│   ├── App.jsx                 # App root with layout, listeners & providers
│   ├── index.css               # Global design tokens, typography & styles
│   └── main.jsx                # Application DOM entry point
├── .gitignore
├── index.html                  # HTML5 shell & font imports
├── package.json
└── vite.config.js              # Vite configuration
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Launches local Vite development server with HMR on `http://localhost:5173` |
| `npm run build` | Compiles optimized production bundle into `/dist` |
| `npm run preview` | Serves the production build locally for verification |
| `npm run lint` | Runs Oxlint across all JavaScript and JSX source files |

---

## 🤝 Contributing

Contributions, suggestions, and pull requests are warmly welcomed!

1. **Fork the Repository**
2. **Create your Feature Branch**:
   ```bash
   git checkout -b feature/NewFeature
   ```
3. **Commit your Changes**:
   ```bash
   git commit -m 'feat: Add NewFeature'
   ```
4. **Push to the Branch**:
   ```bash
   git push origin feature/NewFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Nishant Rami**

- GitHub: [@nishantrami](https://github.com/nishantrami)
- Project Repository: [Trip-Canvas-](https://github.com/nishantrami/Trip-Canvas-)

<div align="center">
  <sub>Built with ❤️ by Nishant Rami for passionate travelers everywhere.</sub>
</div>
