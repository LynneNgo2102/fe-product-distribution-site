// lib/data.js
// ─────────────────────────────────────────────
// This is TEMPORARY fake data for building the UI.
// In Phase 7 we replace this with real API calls.
// ─────────────────────────────────────────────

export const brands = [
  { id: 1, name: 'Phoenix Barge'   },
  { id: 2, name: 'China Delight'   },
  { id: 3, name: 'Good Boy Brand'  },
  { id: 4, name: 'Golden Palace'   },
  { id: 5, name: 'Lee Brand'       },
  { id: 6, name: 'Golden Chef'     },
  { id: 7, name: 'Pantai'          },
  { id: 8, name: 'Megachef'        },
];

export const categories = [
  'Sauce & Condiments',
  'Noodles & Pasta',
  'Canned Goods',
  'Snacks',
  'Beverages',
  'Frozen Foods',
  'Spices & Seasoning',
  'Rice & Grains',
];

//no need inStock

export const products = [
   {
    id: 1,
    name: 'Sweet Chili Sauce 700ml',
    brand: 'Pantai',
    category: 'Sauces & Condiments',
    origin: 'Thailand',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80',
    description: 'Classic sweet chili dipping sauce, great for spring rolls and grilled meats.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Rice Vermicelli 400g',
    brand: 'Golden Chef',
    category: 'Noodles & Pasta',
    origin: 'Vietnam',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
    description: 'Fine rice vermicelli noodles, perfect for soups and stir-fry dishes.',
    inStock: true,
  },
  {
    id: 3,
    name: 'Oyster Sauce 600ml',
    brand: 'Lee Brand',
    category: 'Sauces & Condiments',
    origin: 'China',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80',
    description: 'Premium oyster sauce for stir-fry, marinades, and dipping.',
    inStock: true,
  },
  {
    id: 4,
    name: 'Jasmine Rice 10kg',
    brand: 'Golden Palace',
    category: 'Rice & Grains',
    origin: 'Thailand',
    image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80',
    description: 'Premium fragrant jasmine rice, long grain, restaurant quality.',
    inStock: true,
  },
  {
    id: 5,
    name: 'Fish Sauce 700ml',
    brand: 'Megachef',
    category: 'Sauces & Condiments',
    origin: 'Thailand',
    image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?w=400&q=80',
    description: 'Premium fish sauce made from fresh anchovies, rich umami flavor.',
    inStock: false,
  },
  {
    id: 6,
    name: 'Coconut Milk 400ml',
    brand: 'China Delight',
    category: 'Canned Goods',
    origin: 'Thailand',
    image: 'https://images.unsplash.com/photo-1550353175-a3611868086b?w=400&q=80',
    description: 'Rich and creamy coconut milk, ideal for curries and desserts.',
    inStock: true,
  },
];