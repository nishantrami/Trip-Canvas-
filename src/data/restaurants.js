/**
 * Master Curated Restaurants & Dining Dataset
 * Comprehensive dining across all 18 destinations with authentic regional cuisines.
 * Cost for two is calibrated strictly between ₹500 and ₹2,900.
 */

import { UDAIPUR_RESTAURANTS } from './restaurants/udaipurRestaurants.js';
import { GOA_RESTAURANTS } from './restaurants/goaRestaurants.js';
import { JAIPUR_RESTAURANTS } from './restaurants/jaipurRestaurants.js';
import { MANALI_RESTAURANTS } from './restaurants/manaliRestaurants.js';
import { KASHMIR_RESTAURANTS } from './restaurants/kashmirRestaurants.js';
import { KERALA_RESTAURANTS } from './restaurants/keralaRestaurants.js';
import { MUMBAI_RESTAURANTS } from './restaurants/mumbaiRestaurants.js';
import { DELHI_RESTAURANTS } from './restaurants/delhiRestaurants.js';
import { GUJARAT_RESTAURANTS } from './restaurants/gujaratRestaurants.js';
import { INTERNATIONAL_RESTAURANTS } from './restaurants/internationalRestaurants.js';

export const RESTAURANTS = [
  ...UDAIPUR_RESTAURANTS,
  ...GOA_RESTAURANTS,
  ...JAIPUR_RESTAURANTS,
  ...MANALI_RESTAURANTS,
  ...KASHMIR_RESTAURANTS,
  ...KERALA_RESTAURANTS,
  ...MUMBAI_RESTAURANTS,
  ...DELHI_RESTAURANTS,
  ...GUJARAT_RESTAURANTS,
  ...INTERNATIONAL_RESTAURANTS
];

export const RESTAURANT_CUISINE_FILTERS = [
  "Rajasthani",
  "Seafood",
  "North Indian",
  "South Indian",
  "Mughlai",
  "Gujarati Thali",
  "Italian & Cafe",
  "Continental",
  "Asian & Japanese",
  "Pure Vegetarian"
];
