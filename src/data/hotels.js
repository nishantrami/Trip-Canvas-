/**
 * Master Curated Hotels & Stays Dataset
 * Comprehensive collection across all 18 destinations with city-wise architecture & photography.
 * Every hotel price is carefully curated between ₹2,000 and ₹30,000.
 */

import { UDAIPUR_HOTELS } from './hotels/udaipurHotels.js';
import { GOA_HOTELS } from './hotels/goaHotels.js';
import { JAIPUR_HOTELS } from './hotels/jaipurHotels.js';
import { MANALI_HOTELS } from './hotels/manaliHotels.js';
import { KASHMIR_HOTELS } from './hotels/kashmirHotels.js';
import { KERALA_HOTELS } from './hotels/keralaHotels.js';
import { MUMBAI_HOTELS } from './hotels/mumbaiHotels.js';
import { DELHI_HOTELS } from './hotels/delhiHotels.js';
import { GUJARAT_HOTELS } from './hotels/gujaratHotels.js';
import { INTERNATIONAL_HOTELS } from './hotels/internationalHotels.js';

export const HOTELS = [
  ...UDAIPUR_HOTELS,
  ...GOA_HOTELS,
  ...JAIPUR_HOTELS,
  ...MANALI_HOTELS,
  ...KASHMIR_HOTELS,
  ...KERALA_HOTELS,
  ...MUMBAI_HOTELS,
  ...DELHI_HOTELS,
  ...GUJARAT_HOTELS,
  ...INTERNATIONAL_HOTELS
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
