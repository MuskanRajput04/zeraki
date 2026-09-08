/**
 * ZERAKI - CATALOG
 * ------------------------------------------------------------------
 * Products, prices, descriptions and PHOTOGRAPHY are Zeraki's own, taken from
 * the live storefront catalogue so this concept shows the real range rather
 * than stand-in imagery.
 *
 * NAMING RULE APPLIED IN THIS REDESIGN (fixes the inconsistency on the live
 * site): <Name> + <Product Type>. Pack size ("Set of 2"), plating and edition
 * markers ("2.0") live in structured fields - never inside the product title.
 *
 * PLACEHOLDER DATA, clearly flagged: `rating` and `reviews` are generated for
 * the concept - the storefront feed does not expose them. Wire these to the
 * real review platform before launch.
 */

export const CATEGORIES = [
  { key: 'mangalsutra', name: 'Mangalsutra', tone: 'blush',    blurb: 'Tradition, styled your way.',      image: 'img/p/mia-gold-mangalsutra-2-0-0.webp' },
  { key: 'earrings',    name: 'Earrings',    tone: 'butter',   blurb: 'Studs, jhumkas, statement drops.', image: 'img/p/ahira-earrings-0.webp' },
  { key: 'bangles',     name: 'Bangles',     tone: 'peach',    blurb: 'Stack them, mix them, own them.',  image: 'img/p/khusboo-bangle-set-of-2-0.webp' },
  { key: 'rings',       name: 'Rings',       tone: 'lavender', blurb: 'Adjustable. Always your size.',    image: 'img/p/nyelle-adjustable-ring-0.webp' },
  { key: 'necklaces',   name: 'Necklaces',   tone: 'powder',   blurb: 'Temple, diamond-look, everyday.',  image: 'img/p/samyra-necklace-set-0.webp' },
  { key: 'chains',      name: 'Gold Chains', tone: 'sage',     blurb: 'The layer that goes with all.',    image: 'img/p/vaibhav-gold-chain-0.webp' },
  { key: 'payal',       name: 'Payal',       tone: 'blush',    blurb: 'Anklets with a quiet chime.',      image: 'img/p/mehvira-gold-payal-copy-0.webp' },
]

export const CAT_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.key, c]))

const RAW = [
  {
    "id": "meera-mangalsutra-bracelet",
    "name": "Meera Mangalsutra Bracelet",
    "cat": "mangalsutra",
    "price": 799,
    "mrp": 1299,
    "rating": 4.9,
    "reviews": 259,
    "tone": "blush",
    "badges": [
      "new"
    ],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "46 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "The Meera Mangalsutra Bracelet typically features a design inspired by traditional Indian aesthetics. It often includes a pendant or centerpiece with intricate patterns, sometimes depicting religious symbols or motifs.",
    "images": [
      "img/p/meera-mangalsutra-bracelet-0.webp",
      "img/p/meera-mangalsutra-bracelet-1.webp",
      "img/p/meera-mangalsutra-bracelet-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Meera"
  },
  {
    "id": "kiara-mangalsutra",
    "name": "Kiara Mangalsutra",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1199,
    "rating": 4.9,
    "reviews": 231,
    "tone": "blush",
    "badges": [
      "new"
    ],
    "moods": [
      "date",
      "bold"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "48 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Kiara Mangalsutra is a beautiful and meaningful piece of jewelry Kiara Mangalsutra are believed to have healing properties and can help promote physical and emotional well-being.",
    "images": [
      "img/p/kiara-mangalsutra-0.webp",
      "img/p/kiara-mangalsutra-1.webp",
      "img/p/kiara-mangalsutra-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Kiara"
  },
  {
    "id": "nayra-pink-mangalsutra",
    "name": "Nayra Pink Mangalsutra",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1299,
    "rating": 4.7,
    "reviews": 103,
    "tone": "blush",
    "badges": [
      "new"
    ],
    "moods": [
      "festive",
      "glam"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold & Pink",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "45 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Nayra Pink Mangalsutra is a timeless piece of Rose Gold jewelry that is steeped in tradition and cultural significance.",
    "images": [
      "img/p/nayra-pink-mangalsutra-0.webp",
      "img/p/nayra-pink-mangalsutra-1.webp",
      "img/p/nayra-pink-mangalsutra-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Nayra Pink"
  },
  {
    "id": "ritvi-full-black-beads-mangalsutra",
    "name": "Ritvi Full Black Beads Mangalsutra",
    "cat": "mangalsutra",
    "price": 799,
    "mrp": 1299,
    "rating": 4.9,
    "reviews": 130,
    "tone": "blush",
    "badges": [],
    "moods": [
      "festive",
      "glam"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold & Black",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "42 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "1) Ritvi Full Black Beads Mangalsutra is a timeless piece of Rose Gold jewelry that is steeped in tradition and cultural significance.",
    "images": [
      "img/p/ritvi-full-black-beads-mangalsutra-0.webp",
      "img/p/ritvi-full-black-beads-mangalsutra-1.webp",
      "img/p/ritvi-full-black-beads-mangalsutra-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Ritvi Full Black Beads"
  },
  {
    "id": "avni-mangalsutra-2-0",
    "name": "Avni Mangalsutra",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1199,
    "rating": 4.4,
    "reviews": 350,
    "tone": "blush",
    "badges": [],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "48 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Avni Mangalsutra 2.0 is a beautiful and meaningful piece of jewelry Avni Mangalsutra 2.0 is believed to have healing properties and can help promote physical and emotional well-being.",
    "images": [
      "img/p/avni-mangalsutra-2-0-0.webp",
      "img/p/avni-mangalsutra-2-0-1.webp",
      "img/p/avni-mangalsutra-2-0-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Avni"
  },
  {
    "id": "mia-gold-mangalsutra-2-0",
    "name": "Mia Gold Mangalsutra",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1399,
    "rating": 4.9,
    "reviews": 794,
    "tone": "blush",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "45 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Mia Gold Mangalsutra 2.0 is a timeless piece of jewelry that is steeped in tradition and cultural significance.",
    "images": [
      "img/p/mia-gold-mangalsutra-2-0-0.webp",
      "img/p/mia-gold-mangalsutra-2-0-1.webp",
      "img/p/mia-gold-mangalsutra-2-0-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Mia Gold"
  },
  {
    "id": "infinity-mangalsutra-is",
    "name": "Infinity Mangalsutra",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1199,
    "rating": 4.8,
    "reviews": 481,
    "tone": "blush",
    "badges": [],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "50 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "1) Infinity Mangalsutra is a timeless piece of jewelry that is steeped in tradition and cultural significance.",
    "images": [
      "img/p/infinity-mangalsutra-is-0.webp",
      "img/p/infinity-mangalsutra-is-1.webp",
      "img/p/infinity-mangalsutra-is-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Infinity"
  },
  {
    "id": "disha-mangalsutra",
    "name": "Disha Mangalsutra",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1199,
    "rating": 4.8,
    "reviews": 1356,
    "tone": "blush",
    "badges": [],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "50 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Disha Mangalsutra is a gold designer mangalsutra typically features intricate patterns and designs crafted in gold. It often includes black beads or enamel work, symbolizing marital commitment and tradition in Indian culture.",
    "images": [
      "img/p/disha-mangalsutra-0.webp",
      "img/p/disha-mangalsutra-1.webp",
      "img/p/disha-mangalsutra-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Disha"
  },
  {
    "id": "mangalsutra-9",
    "name": "Shraddha Mangalsutra Gold Plated",
    "cat": "mangalsutra",
    "price": 899,
    "mrp": 1599,
    "rating": 4.6,
    "reviews": 920,
    "tone": "blush",
    "badges": [],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "46 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Shraddha Mangalsutra typically features intricate patterns and designs crafted in gold. It often includes black beads or enamel work, symbolizing marital commitment and tradition in Indian culture.",
    "images": [
      "img/p/mangalsutra-9-0.webp",
      "img/p/mangalsutra-9-1.webp",
      "img/p/mangalsutra-9-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Shraddha"
  },
  {
    "id": "suhana-mangalsutra-2-0-mangalsutra",
    "name": "Suhana Mangalsutra",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1299,
    "rating": 4.7,
    "reviews": 1173,
    "tone": "blush",
    "badges": [],
    "moods": [
      "date",
      "bold"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "42 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Suhana Mangalsutra 2.0 is a beautiful and meaningful piece of jewelry Suhana Mangalsutra are believed to have healing properties and can help promote physical and emotional well-being.",
    "images": [
      "img/p/suhana-mangalsutra-2-0-mangalsutra-0.webp",
      "img/p/suhana-mangalsutra-2-0-mangalsutra-1.webp",
      "img/p/suhana-mangalsutra-2-0-mangalsutra-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Suhana"
  },
  {
    "id": "rihanna-mangalsutra-2-0",
    "name": "Rihanna Mangalsutra",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1099,
    "rating": 4.6,
    "reviews": 1135,
    "tone": "blush",
    "badges": [],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "46 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Rihanna Mangalsutra 2.0 is a timeless piece of jewelry that is steeped in tradition and cultural significance.",
    "images": [
      "img/p/rihanna-mangalsutra-2-0-0.webp",
      "img/p/rihanna-mangalsutra-2-0-1.webp",
      "img/p/rihanna-mangalsutra-2-0-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Rihanna"
  },
  {
    "id": "aisha-mangalsutra-bracelet-1",
    "name": "Aisha Mangalsutra Bracelet",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1299,
    "rating": 4.9,
    "reviews": 321,
    "tone": "blush",
    "badges": [],
    "moods": [
      "romantic",
      "date"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "50 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "1) Aisha Mangalsutra Bracelet is a timeless piece of jewelry that is steeped in tradition and cultural significance.",
    "images": [
      "img/p/aisha-mangalsutra-bracelet-1-0.webp",
      "img/p/aisha-mangalsutra-bracelet-1-1.webp",
      "img/p/aisha-mangalsutra-bracelet-1-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Aisha"
  },
  {
    "id": "mahira-mangalsutra-with-earrings",
    "name": "Mahira Mangalsutra With Earrings",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1699,
    "rating": 4.6,
    "reviews": 1295,
    "tone": "blush",
    "badges": [],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "50 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Mahira Mangalsutra Set is a timeless piece of jewelry that is steeped in tradition and cultural significance.",
    "images": [
      "img/p/mahira-mangalsutra-with-earrings-0.webp",
      "img/p/mahira-mangalsutra-with-earrings-1.webp",
      "img/p/mahira-mangalsutra-with-earrings-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Mahira"
  },
  {
    "id": "archi-mangalsutra-with-earrings",
    "name": "Archi Mangalsutra with Earrings",
    "cat": "mangalsutra",
    "price": 699,
    "mrp": 1699,
    "rating": 4.6,
    "reviews": 582,
    "tone": "blush",
    "badges": [],
    "moods": [
      "date",
      "bold"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "48 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Archi Mangalsutra Set is a timeless piece of jewelry that is steeped in tradition and cultural significance.",
    "images": [
      "img/p/archi-mangalsutra-with-earrings-0.webp",
      "img/p/archi-mangalsutra-with-earrings-1.webp",
      "img/p/archi-mangalsutra-with-earrings-2.webp"
    ],
    "type": "Mangalsutra",
    "shortName": "Archi"
  },
  {
    "id": "nyra-pink-earrings",
    "name": "Nyra Pink Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.8,
    "reviews": 1325,
    "tone": "butter",
    "badges": [
      "new"
    ],
    "moods": [
      "romantic",
      "date"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold & Pink",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/nyra-pink-earrings-0.webp",
      "img/p/nyra-pink-earrings-1.webp",
      "img/p/nyra-pink-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Nyra Pink"
  },
  {
    "id": "senorita-earrings",
    "name": "Senorita Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.4,
    "reviews": 639,
    "tone": "butter",
    "badges": [
      "new"
    ],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/senorita-earrings-0.webp",
      "img/p/senorita-earrings-1.webp",
      "img/p/senorita-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Senorita"
  },
  {
    "id": "aanya-white-earrings",
    "name": "Aanya White Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.5,
    "reviews": 119,
    "tone": "butter",
    "badges": [
      "new"
    ],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold & White",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/aanya-white-earrings-0.webp",
      "img/p/aanya-white-earrings-1.webp",
      "img/p/aanya-white-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Aanya White"
  },
  {
    "id": "ahira-earrings",
    "name": "Ahira Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.9,
    "reviews": 1166,
    "tone": "butter",
    "badges": [],
    "moods": [
      "romantic",
      "date"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/ahira-earrings-0.webp",
      "img/p/ahira-earrings-1.webp",
      "img/p/ahira-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Ahira"
  },
  {
    "id": "ritvi-earrings",
    "name": "Ritvi Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.7,
    "reviews": 200,
    "tone": "butter",
    "badges": [],
    "moods": [
      "festive",
      "glam"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/ritvi-earrings-0.webp",
      "img/p/ritvi-earrings-1.webp",
      "img/p/ritvi-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Ritvi"
  },
  {
    "id": "kimaya-gold-earrings",
    "name": "Kimaya Gold Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.4,
    "reviews": 447,
    "tone": "butter",
    "badges": [],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/kimaya-gold-earrings-0.webp",
      "img/p/kimaya-gold-earrings-1.webp",
      "img/p/kimaya-gold-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Kimaya Gold"
  },
  {
    "id": "mahira-earrings",
    "name": "Mahira Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.8,
    "reviews": 737,
    "tone": "butter",
    "badges": [],
    "moods": [
      "date",
      "bold"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/mahira-earrings-0.webp",
      "img/p/mahira-earrings-1.webp",
      "img/p/mahira-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Mahira"
  },
  {
    "id": "meher-earrings",
    "name": "Meher Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.7,
    "reviews": 545,
    "tone": "butter",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/meher-earrings-0.webp",
      "img/p/meher-earrings-1.webp",
      "img/p/meher-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Meher"
  },
  {
    "id": "rihanna-rose-gold-earrings",
    "name": "Rihanna Rose Gold Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.5,
    "reviews": 477,
    "tone": "butter",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Rose Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/rihanna-rose-gold-earrings-0.webp",
      "img/p/rihanna-rose-gold-earrings-1.webp",
      "img/p/rihanna-rose-gold-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Rihanna Rose Gold"
  },
  {
    "id": "nora-gold-earrings",
    "name": "Nora Gold Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.5,
    "reviews": 1486,
    "tone": "butter",
    "badges": [],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/nora-gold-earrings-0.webp",
      "img/p/nora-gold-earrings-1.webp",
      "img/p/nora-gold-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Nora Gold"
  },
  {
    "id": "infinity-earrings",
    "name": "Infinity Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.8,
    "reviews": 1475,
    "tone": "butter",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "festive",
      "glam"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/infinity-earrings-0.webp",
      "img/p/infinity-earrings-1.webp",
      "img/p/infinity-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Infinity"
  },
  {
    "id": "ahana-black-earrings",
    "name": "Ahana Black Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.9,
    "reviews": 1278,
    "tone": "butter",
    "badges": [],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold & Black",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/ahana-black-earrings-0.webp",
      "img/p/ahana-black-earrings-1.webp",
      "img/p/ahana-black-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Ahana Black"
  },
  {
    "id": "niral-earrings",
    "name": "Niral Earrings",
    "cat": "earrings",
    "price": 599,
    "mrp": 899,
    "rating": 4.9,
    "reviews": 849,
    "tone": "butter",
    "badges": [],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "These beautifully crafted floral drop earrings feature sparkling marquise-cut stones arranged in a delicate flower design.",
    "images": [
      "img/p/niral-earrings-0.webp",
      "img/p/niral-earrings-1.webp",
      "img/p/niral-earrings-2.webp"
    ],
    "type": "Earrings",
    "shortName": "Niral"
  },
  {
    "id": "vinita-bangle-set-of-2",
    "name": "Vinita Bangles",
    "cat": "bangles",
    "price": 699,
    "mrp": 2199,
    "rating": 4.6,
    "reviews": 301,
    "tone": "peach",
    "badges": [
      "new"
    ],
    "moods": [
      "romantic",
      "date"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/vinita-bangle-set-of-2-0.webp",
      "img/p/vinita-bangle-set-of-2-1.webp",
      "img/p/vinita-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Vinita"
  },
  {
    "id": "sweksha-bangle-set-of-2",
    "name": "Sweksha Bangles",
    "cat": "bangles",
    "price": 699,
    "mrp": 1699,
    "rating": 4.5,
    "reviews": 656,
    "tone": "peach",
    "badges": [
      "new"
    ],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/sweksha-bangle-set-of-2-0.webp",
      "img/p/sweksha-bangle-set-of-2-1.webp",
      "img/p/sweksha-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Sweksha"
  },
  {
    "id": "navisha-bangle-set-of-2",
    "name": "Navisha Bangles",
    "cat": "bangles",
    "price": 699,
    "mrp": 1699,
    "rating": 4.7,
    "reviews": 570,
    "tone": "peach",
    "badges": [
      "new"
    ],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/navisha-bangle-set-of-2-0.webp",
      "img/p/navisha-bangle-set-of-2-1.webp",
      "img/p/navisha-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Navisha"
  },
  {
    "id": "namita-bangle-set-of-2",
    "name": "Namita Bangles",
    "cat": "bangles",
    "price": 699,
    "mrp": 1699,
    "rating": 4.8,
    "reviews": 830,
    "tone": "peach",
    "badges": [],
    "moods": [
      "festive",
      "glam"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/namita-bangle-set-of-2-0.webp",
      "img/p/namita-bangle-set-of-2-1.webp",
      "img/p/namita-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Namita"
  },
  {
    "id": "muskan-bangle-set-of-2",
    "name": "Muskan Bangles",
    "cat": "bangles",
    "price": 699,
    "mrp": 1699,
    "rating": 4.6,
    "reviews": 572,
    "tone": "peach",
    "badges": [],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/muskan-bangle-set-of-2-0.webp",
      "img/p/muskan-bangle-set-of-2-1.webp",
      "img/p/muskan-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Muskan"
  },
  {
    "id": "khusboo-bangle-set-of-2",
    "name": "Khusboo Bangles",
    "cat": "bangles",
    "price": 699,
    "mrp": 1399,
    "rating": 4.7,
    "reviews": 470,
    "tone": "peach",
    "badges": [],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/khusboo-bangle-set-of-2-0.webp",
      "img/p/khusboo-bangle-set-of-2-1.webp",
      "img/p/khusboo-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Khusboo"
  },
  {
    "id": "mahira-bangle-set-of-2",
    "name": "Mahira Bangles",
    "cat": "bangles",
    "price": 1099,
    "mrp": 2699,
    "rating": 4.5,
    "reviews": 1033,
    "tone": "peach",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "festive",
      "glam"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/mahira-bangle-set-of-2-0.webp",
      "img/p/mahira-bangle-set-of-2-1.webp",
      "img/p/mahira-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Mahira"
  },
  {
    "id": "purvi-bangle-set-of-2",
    "name": "Purvi Bangles",
    "cat": "bangles",
    "price": 699,
    "mrp": 1799,
    "rating": 4.8,
    "reviews": 401,
    "tone": "peach",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "date",
      "bold"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/purvi-bangle-set-of-2-0.webp",
      "img/p/purvi-bangle-set-of-2-1.webp",
      "img/p/purvi-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Purvi"
  },
  {
    "id": "isha-bangle-set-of-2-copy",
    "name": "Paridhi Bangles",
    "cat": "bangles",
    "price": 799,
    "mrp": 1599,
    "rating": 4.7,
    "reviews": 1422,
    "tone": "peach",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "romantic",
      "date"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/isha-bangle-set-of-2-copy-0.webp",
      "img/p/isha-bangle-set-of-2-copy-1.webp",
      "img/p/isha-bangle-set-of-2-copy-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Paridhi"
  },
  {
    "id": "sejal-bangle-set-of-2-2",
    "name": "Sejal Bangles",
    "cat": "bangles",
    "price": 699,
    "mrp": 1399,
    "rating": 4.5,
    "reviews": 1363,
    "tone": "peach",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "date",
      "bold"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/sejal-bangle-set-of-2-2-0.webp",
      "img/p/sejal-bangle-set-of-2-2-1.webp",
      "img/p/sejal-bangle-set-of-2-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Sejal"
  },
  {
    "id": "riya-bangle-set-of-2",
    "name": "Riya Bangles",
    "cat": "bangles",
    "price": 899,
    "mrp": 1599,
    "rating": 4.6,
    "reviews": 983,
    "tone": "peach",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/riya-bangle-set-of-2-0.webp",
      "img/p/riya-bangle-set-of-2-1.webp",
      "img/p/riya-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Riya"
  },
  {
    "id": "lakshita-bangle-set-of-2",
    "name": "Lakshita Bangles",
    "cat": "bangles",
    "price": 699,
    "mrp": 1399,
    "rating": 4.4,
    "reviews": 668,
    "tone": "peach",
    "badges": [],
    "moods": [
      "romantic",
      "date"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": [
      "2.4",
      "2.6",
      "2.8"
    ],
    "bogo": true,
    "blurb": "",
    "images": [
      "img/p/lakshita-bangle-set-of-2-0.webp",
      "img/p/lakshita-bangle-set-of-2-1.webp",
      "img/p/lakshita-bangle-set-of-2-2.webp"
    ],
    "type": "Bangles",
    "shortName": "Lakshita"
  },
  {
    "id": "bivora-adjustable-ring",
    "name": "Bivora Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.4,
    "reviews": 581,
    "tone": "lavender",
    "badges": [
      "new"
    ],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and s pecial occ asio ns. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/bivora-adjustable-ring-0.webp",
      "img/p/bivora-adjustable-ring-1.webp",
      "img/p/bivora-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Bivora"
  },
  {
    "id": "orlena-adjustable-ring",
    "name": "Orlena Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.8,
    "reviews": 633,
    "tone": "lavender",
    "badges": [
      "new"
    ],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and s pecial occ asio ns. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/orlena-adjustable-ring-0.webp",
      "img/p/orlena-adjustable-ring-1.webp",
      "img/p/orlena-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Orlena"
  },
  {
    "id": "nyelle-adjustable-ring",
    "name": "Nyelle Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.6,
    "reviews": 1239,
    "tone": "lavender",
    "badges": [
      "new"
    ],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and s pecial occ asio ns. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/nyelle-adjustable-ring-0.webp",
      "img/p/nyelle-adjustable-ring-1.webp",
      "img/p/nyelle-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Nyelle"
  },
  {
    "id": "bina-adjustable-ring",
    "name": "Bina Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.8,
    "reviews": 307,
    "tone": "lavender",
    "badges": [],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and special occ asions. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/bina-adjustable-ring-0.webp",
      "img/p/bina-adjustable-ring-1.webp",
      "img/p/bina-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Bina"
  },
  {
    "id": "estrella-adjustable-ring",
    "name": "Estrella Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.7,
    "reviews": 1278,
    "tone": "lavender",
    "badges": [],
    "moods": [
      "romantic",
      "date"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and s pecial occ asio ns. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/estrella-adjustable-ring-0.webp",
      "img/p/estrella-adjustable-ring-1.webp",
      "img/p/estrella-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Estrella"
  },
  {
    "id": "dhyani-adjustable-ring",
    "name": "Dhyani Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.9,
    "reviews": 673,
    "tone": "lavender",
    "badges": [],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and s pecial occ asio ns. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/dhyani-adjustable-ring-0.webp",
      "img/p/dhyani-adjustable-ring-1.webp",
      "img/p/dhyani-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Dhyani"
  },
  {
    "id": "pivora-adjustable-ring",
    "name": "Pivora Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.5,
    "reviews": 598,
    "tone": "lavender",
    "badges": [],
    "moods": [
      "festive",
      "glam"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and special occ asions. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/pivora-adjustable-ring-0.webp",
      "img/p/pivora-adjustable-ring-1.webp",
      "img/p/pivora-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Pivora"
  },
  {
    "id": "clarice-adjustable-ring",
    "name": "Clarice Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.7,
    "reviews": 1290,
    "tone": "lavender",
    "badges": [],
    "moods": [
      "festive",
      "glam"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and s pecial occ asio ns. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/clarice-adjustable-ring-0.webp",
      "img/p/clarice-adjustable-ring-1.webp",
      "img/p/clarice-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Clarice"
  },
  {
    "id": "jaselle-adjustable-ring",
    "name": "Jaselle Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.4,
    "reviews": 891,
    "tone": "lavender",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Crafted with a sleek and subtle design, this adjustable ring is the perfect blend of elegance and simplicity.",
    "images": [
      "img/p/jaselle-adjustable-ring-0.webp",
      "img/p/jaselle-adjustable-ring-1.webp",
      "img/p/jaselle-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Jaselle"
  },
  {
    "id": "claudia-adjustable-ring",
    "name": "Claudia Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.8,
    "reviews": 1424,
    "tone": "lavender",
    "badges": [],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and s pecial occ asio ns. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/claudia-adjustable-ring-0.webp",
      "img/p/claudia-adjustable-ring-1.webp",
      "img/p/claudia-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Claudia"
  },
  {
    "id": "giana-adjustable-ring",
    "name": "Giana Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.5,
    "reviews": 1469,
    "tone": "lavender",
    "badges": [],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and s pecial occ asio ns. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/giana-adjustable-ring-0.webp",
      "img/p/giana-adjustable-ring-1.webp",
      "img/p/giana-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Giana"
  },
  {
    "id": "galina-adjustable-ring",
    "name": "Galina Adjustable Ring",
    "cat": "rings",
    "price": 399,
    "mrp": 999,
    "rating": 4.4,
    "reviews": 498,
    "tone": "lavender",
    "badges": [],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": null,
    "sizes": [
      "Free Size · Adjustable"
    ],
    "bogo": true,
    "blurb": "Zeraki Rose Gold Ring A stylish rose gold ring designed for everyday wear and s pecial occ asio ns. The rose gold finish adds a soft touch to your look and pairs well with both traditional and western outfits.",
    "images": [
      "img/p/galina-adjustable-ring-0.webp",
      "img/p/galina-adjustable-ring-1.webp",
      "img/p/galina-adjustable-ring-2.webp"
    ],
    "type": "Rings",
    "shortName": "Galina"
  },
  {
    "id": "falisha-necklace-set",
    "name": "Falisha Necklace Set",
    "cat": "necklaces",
    "price": 599,
    "mrp": 1599,
    "rating": 4.4,
    "reviews": 639,
    "tone": "powder",
    "badges": [
      "new"
    ],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "48 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "An opulent creation featuring delicate artistry and luxurious detailing, embodying timeless grace.",
    "images": [
      "img/p/falisha-necklace-set-0.webp",
      "img/p/falisha-necklace-set-1.webp",
      "img/p/falisha-necklace-set-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Falisha"
  },
  {
    "id": "prishika-necklace-set-copy-1",
    "name": "Charvi Necklace Set",
    "cat": "necklaces",
    "price": 599,
    "mrp": 1999,
    "rating": 4.6,
    "reviews": 694,
    "tone": "powder",
    "badges": [
      "new"
    ],
    "moods": [
      "romantic",
      "date"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "50 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "A beautifully refined masterpiece where elegance meets tradition. Its golden flow and gemstone rhythm create a look of pure aristocratic charm.",
    "images": [
      "img/p/prishika-necklace-set-copy-1-0.webp",
      "img/p/prishika-necklace-set-copy-1-1.webp",
      "img/p/prishika-necklace-set-copy-1-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Charvi"
  },
  {
    "id": "anvika-necklace-set-2",
    "name": "Kanika Necklace Set",
    "cat": "necklaces",
    "price": 1199,
    "mrp": 1999,
    "rating": 4.8,
    "reviews": 298,
    "tone": "powder",
    "badges": [
      "new"
    ],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "46 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "Kanika Necklace Set A delicate antique choker set featuring elegant teardrop motifs adorned with shimmering pearl accents and sparkling AD stones, crafted to add a soft royal charm with timeless festive elegance.",
    "images": [
      "img/p/anvika-necklace-set-2-0.webp",
      "img/p/anvika-necklace-set-2-1.webp",
      "img/p/anvika-necklace-set-2-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Kanika"
  },
  {
    "id": "rashi-necklace-set",
    "name": "Rashi Necklace Set",
    "cat": "necklaces",
    "price": 1299,
    "mrp": 2999,
    "rating": 4.4,
    "reviews": 978,
    "tone": "powder",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "46 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "Rashi Necklace Set Make every occasion special with this heritage-inspired Temple Style Necklace.",
    "images": [
      "img/p/rashi-necklace-set-0.webp",
      "img/p/rashi-necklace-set-1.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Rashi"
  },
  {
    "id": "samyra-necklace-set",
    "name": "Samyra Necklace Set",
    "cat": "necklaces",
    "price": 599,
    "mrp": 1699,
    "rating": 4.5,
    "reviews": 999,
    "tone": "powder",
    "badges": [],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "46 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "An enchanting blend of tradition and refinement, featuring timeless craftsmanship and graceful charm.",
    "images": [
      "img/p/samyra-necklace-set-0.webp",
      "img/p/samyra-necklace-set-1.webp",
      "img/p/samyra-necklace-set-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Samyra"
  },
  {
    "id": "shambhavi-necklace-set-copy",
    "name": "Ruhanika Necklace Set",
    "cat": "necklaces",
    "price": 599,
    "mrp": 1899,
    "rating": 4.4,
    "reviews": 551,
    "tone": "powder",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "44 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "A captivating blend of heritage and luxury, crafted to embody grace and timeless elegance.",
    "images": [
      "img/p/shambhavi-necklace-set-copy-0.webp",
      "img/p/shambhavi-necklace-set-copy-1.webp",
      "img/p/shambhavi-necklace-set-copy-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Ruhanika"
  },
  {
    "id": "brinaya-necklace-set",
    "name": "Brinaya Necklace Set",
    "cat": "necklaces",
    "price": 699,
    "mrp": 1699,
    "rating": 4.8,
    "reviews": 456,
    "tone": "powder",
    "badges": [],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "42 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "An enchanting necklace set adorned with artistic detailing and graceful accents, reflecting luxury in every element.",
    "images": [
      "img/p/brinaya-necklace-set-0.webp",
      "img/p/brinaya-necklace-set-1.webp",
      "img/p/brinaya-necklace-set-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Brinaya"
  },
  {
    "id": "kesar-necklace-set",
    "name": "Kesar Necklace Set",
    "cat": "necklaces",
    "price": 999,
    "mrp": 1899,
    "rating": 4.7,
    "reviews": 802,
    "tone": "powder",
    "badges": [],
    "moods": [
      "date",
      "bold"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "42 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "This traditional long necklace is crafted with an antique gold finish and detailed ethnic artistry. The elegant pendant, colorful stones, and pearl drops create a luxurious appeal that enhances every festive outfit.",
    "images": [
      "img/p/kesar-necklace-set-0.webp",
      "img/p/kesar-necklace-set-1.webp",
      "img/p/kesar-necklace-set-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Kesar"
  },
  {
    "id": "chandraroop-necklace-set",
    "name": "Chandraroop Necklace Set",
    "cat": "necklaces",
    "price": 1099,
    "mrp": 2199,
    "rating": 4.9,
    "reviews": 324,
    "tone": "powder",
    "badges": [],
    "moods": [
      "romantic",
      "date"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "50 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "A beautifully handcrafted necklace set featuring rich traditional detailing, layered strands, and intricate pendant artistry for a refined royal appearance.",
    "images": [
      "img/p/chandraroop-necklace-set-0.webp",
      "img/p/chandraroop-necklace-set-1.webp",
      "img/p/chandraroop-necklace-set-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Chandraroop"
  },
  {
    "id": "grace-silver-necklace-set",
    "name": "Grace Silver Necklace Set",
    "cat": "necklaces",
    "price": 699,
    "mrp": 1599,
    "rating": 4.8,
    "reviews": 603,
    "tone": "powder",
    "badges": [],
    "moods": [
      "date",
      "bold"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Traditional",
    "colour": "Silver",
    "plating": "Rhodium Plated",
    "pack": null,
    "length": "45 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "Make a statement with the Grace Silver Necklace Set This stunning silver design boasts intricate filigree and sparkling accents. Perfect for special occasions, this set embodies sophisticated glamour and refinement.",
    "images": [
      "img/p/grace-silver-necklace-set-0.webp",
      "img/p/grace-silver-necklace-set-1.webp",
      "img/p/grace-silver-necklace-set-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Grace Silver"
  },
  {
    "id": "moonbeam-silver-necklace-set-copy",
    "name": "Lina Silver Necklace Set",
    "cat": "necklaces",
    "price": 699,
    "mrp": 1599,
    "rating": 4.4,
    "reviews": 327,
    "tone": "powder",
    "badges": [],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Silver",
    "plating": "Rhodium Plated",
    "pack": null,
    "length": "48 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "Make a statement with the Lina Silver Necklace Set This stunning silver design boasts intricate filigree and sparkling accents. Perfect for special occasions, this set embodies sophisticated glamour and refinement.",
    "images": [
      "img/p/moonbeam-silver-necklace-set-copy-0.webp",
      "img/p/moonbeam-silver-necklace-set-copy-1.webp",
      "img/p/moonbeam-silver-necklace-set-copy-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Lina Silver"
  },
  {
    "id": "riwaayat-necklace-set",
    "name": "Riwaayat Necklace Set",
    "cat": "necklaces",
    "price": 1599,
    "mrp": 2699,
    "rating": 4.5,
    "reviews": 815,
    "tone": "powder",
    "badges": [],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "42 cm",
    "sizes": null,
    "bogo": false,
    "blurb": "Riwaayat Necklace Set is a Elegant Indian-inspired necklace crafted with intricate detailing, designed to add royal charm and timeless sophistication to any festive or traditional look.",
    "images": [
      "img/p/riwaayat-necklace-set-0.webp",
      "img/p/riwaayat-necklace-set-1.webp",
      "img/p/riwaayat-necklace-set-2.webp"
    ],
    "type": "Necklace Set",
    "shortName": "Riwaayat"
  },
  {
    "id": "amara-gold-chain",
    "name": "Amara Gold Chain",
    "cat": "chains",
    "price": 399,
    "mrp": 699,
    "rating": 4.9,
    "reviews": 1029,
    "tone": "sage",
    "badges": [
      "new"
    ],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "46 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Amara Gold Chain Elevate your everyday style with this elegant gold-plated chain. Designed with a sleek finish and timeless appeal, it complements both casual and festive looks. Lightweight, durable, and perfect for daily wear.",
    "images": [
      "img/p/amara-gold-chain-0.webp",
      "img/p/amara-gold-chain-1.webp",
      "img/p/amara-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Amara"
  },
  {
    "id": "vaibhav-gold-chain",
    "name": "Vaibhav Gold Chain",
    "cat": "chains",
    "price": 399,
    "mrp": 699,
    "rating": 4.7,
    "reviews": 1422,
    "tone": "sage",
    "badges": [
      "new"
    ],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "42 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Vaibhav Gold Chain Elevate your everyday style with this elegant gold-plated chain. Designed with a sleek finish and timeless appeal, it complements both casual and festive looks. Lightweight, durable, and perfect for daily wear.",
    "images": [
      "img/p/vaibhav-gold-chain-0.webp",
      "img/p/vaibhav-gold-chain-1.webp",
      "img/p/vaibhav-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Vaibhav"
  },
  {
    "id": "navira-gold-chain",
    "name": "Navira Gold Chain",
    "cat": "chains",
    "price": 399,
    "mrp": 699,
    "rating": 4.5,
    "reviews": 289,
    "tone": "sage",
    "badges": [
      "new"
    ],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "42 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Navira Gold Chain Experience the beauty of timeless jewellery with this elegant gold chain. Designed with intricate detailing and a classic finish, it adds a graceful touch to every outfit.",
    "images": [
      "img/p/navira-gold-chain-0.webp",
      "img/p/navira-gold-chain-1.webp",
      "img/p/navira-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Navira"
  },
  {
    "id": "ruhika-gold-chain",
    "name": "Ruhika Gold Chain",
    "cat": "chains",
    "price": 449,
    "mrp": 899,
    "rating": 4.8,
    "reviews": 809,
    "tone": "sage",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "46 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Ruhika Gold Chain Crafted with precision and a radiant gold-plated finish, this chain offers a classic style you'll love. Its lightweight design ensures lasting comfort. A perfect choice for daily wear and special occasions alike.",
    "images": [
      "img/p/ruhika-gold-chain-0.webp",
      "img/p/ruhika-gold-chain-1.webp",
      "img/p/ruhika-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Ruhika"
  },
  {
    "id": "celeste-gold-chain",
    "name": "Celeste Gold Chain",
    "cat": "chains",
    "price": 399,
    "mrp": 699,
    "rating": 4.5,
    "reviews": 930,
    "tone": "sage",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "45 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Celeste Gold Chain Featuring a premium gold-plated finish, this chain is a perfect blend of simplicity and elegance. Its classic design makes it suitable for every age and every occasion. A stylish essential for daily wear.",
    "images": [
      "img/p/celeste-gold-chain-0.webp",
      "img/p/celeste-gold-chain-1.webp",
      "img/p/celeste-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Celeste"
  },
  {
    "id": "tvisha-gold-chain",
    "name": "Tvisha Gold Chain",
    "cat": "chains",
    "price": 399,
    "mrp": 699,
    "rating": 4.9,
    "reviews": 139,
    "tone": "sage",
    "badges": [],
    "moods": [
      "minimal",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "45 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Tvisha Gold Chain, Make a subtle statement with this beautifully crafted gold chain. Its classic finish and design offer effortless elegance, making it a must-have addition to your jewellery collection.",
    "images": [
      "img/p/tvisha-gold-chain-0.webp",
      "img/p/tvisha-gold-chain-1.webp",
      "img/p/tvisha-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Tvisha"
  },
  {
    "id": "saira-gold-chain",
    "name": "Saira Gold Chain",
    "cat": "chains",
    "price": 399,
    "mrp": 699,
    "rating": 4.8,
    "reviews": 1188,
    "tone": "sage",
    "badges": [],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "46 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Saira Gold Chain. Elevate your everyday style with this elegant gold-plated chain. Designed with a sleek finish and timeless appeal, it complements both casual and festive looks. Lightweight, durable, and perfect for daily wear.",
    "images": [
      "img/p/saira-gold-chain-0.webp",
      "img/p/saira-gold-chain-1.webp",
      "img/p/saira-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Saira"
  },
  {
    "id": "ruvina-gold-chain",
    "name": "Ruvina Gold Chain",
    "cat": "chains",
    "price": 399,
    "mrp": 699,
    "rating": 4.5,
    "reviews": 1295,
    "tone": "sage",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "everyday",
      "minimal"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "45 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Ruvina Gold Chain Crafted with precision and a radiant gold-plated finish, this chain offers a classic style you'll love. Its lightweight design ensures lasting comfort. A perfect choice for daily wear and special occasions alike.",
    "images": [
      "img/p/ruvina-gold-chain-0.webp",
      "img/p/ruvina-gold-chain-1.webp",
      "img/p/ruvina-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Ruvina"
  },
  {
    "id": "krista-gold-chain",
    "name": "Krista Gold Chain",
    "cat": "chains",
    "price": 399,
    "mrp": 699,
    "rating": 4.8,
    "reviews": 308,
    "tone": "sage",
    "badges": [],
    "moods": [
      "bold",
      "glam"
    ],
    "occasion": [
      "Party"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "50 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Krista Gold Chain Crafted with precision and a radiant gold-plated finish, this chain offers a classic style you'll love. Its lightweight design ensures lasting comfort. A perfect choice for daily wear and special occasions alike.",
    "images": [
      "img/p/krista-gold-chain-0.webp",
      "img/p/krista-gold-chain-1.webp",
      "img/p/krista-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Krista"
  },
  {
    "id": "mehera-gold-chain",
    "name": "Mehera Gold Chain",
    "cat": "chains",
    "price": 399,
    "mrp": 699,
    "rating": 4.7,
    "reviews": 1351,
    "tone": "sage",
    "badges": [],
    "moods": [
      "romantic",
      "festive"
    ],
    "occasion": [
      "Festive",
      "Wedding"
    ],
    "style": "Contemporary",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": null,
    "length": "50 cm",
    "sizes": null,
    "bogo": true,
    "blurb": "Mehera Gold Chain Crafted with precision and a radiant gold-plated finish, this chain offers a classic style you'll love. Its lightweight design ensures lasting comfort. A perfect choice for daily wear and special occasions alike.",
    "images": [
      "img/p/mehera-gold-chain-0.webp",
      "img/p/mehera-gold-chain-1.webp",
      "img/p/mehera-gold-chain-2.webp"
    ],
    "type": "Gold Chain",
    "shortName": "Mehera"
  },
  {
    "id": "nisha-gold-payal-set-of-2",
    "name": "Komal Gold Payal",
    "cat": "payal",
    "price": 399,
    "mrp": 999,
    "rating": 4.8,
    "reviews": 522,
    "tone": "blush",
    "badges": [
      "new"
    ],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "Komal Gold Payal is Light on your feet, rich in heritage — made to complete your solah shringar.",
    "images": [
      "img/p/nisha-gold-payal-set-of-2-0.webp",
      "img/p/nisha-gold-payal-set-of-2-1.webp",
      "img/p/nisha-gold-payal-set-of-2-2.webp"
    ],
    "type": "Payal",
    "shortName": "Komal"
  },
  {
    "id": "neysa-gold-payal-copy-1",
    "name": "Rivika Gold Payal",
    "cat": "payal",
    "price": 499,
    "mrp": 1099,
    "rating": 4.6,
    "reviews": 1352,
    "tone": "blush",
    "badges": [
      "new"
    ],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "Rivika Gold Payal is a Inspired by timeless Indian beauty, this payal enhances your steps with delicate golden brilliance. Metal - Brass Plating - Gold Plated Size - 10 Inch Stone & Colour - Gold Plated",
    "images": [
      "img/p/neysa-gold-payal-copy-1-0.webp",
      "img/p/neysa-gold-payal-copy-1-1.webp",
      "img/p/neysa-gold-payal-copy-1-2.webp"
    ],
    "type": "Payal",
    "shortName": "Rivika"
  },
  {
    "id": "rishaya-gold-payal-copy",
    "name": "Mehvira Gold Payal",
    "cat": "payal",
    "price": 399,
    "mrp": 999,
    "rating": 4.9,
    "reviews": 1435,
    "tone": "blush",
    "badges": [
      "new"
    ],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "Mehvira Gold Payal is a statement of strength and grace, blending cultural heritage with modern elegance. Metal - Brass Plating - Gold Plated Size - 10 Inch Stone & Colour - Gold Plated",
    "images": [
      "img/p/rishaya-gold-payal-copy-0.webp",
      "img/p/rishaya-gold-payal-copy-1.webp",
      "img/p/rishaya-gold-payal-copy-2.webp"
    ],
    "type": "Payal",
    "shortName": "Mehvira"
  },
  {
    "id": "mehvira-gold-payal-copy",
    "name": "Rishaya Gold Payal",
    "cat": "payal",
    "price": 299,
    "mrp": 599,
    "rating": 4.6,
    "reviews": 297,
    "tone": "blush",
    "badges": [],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "Crafted with intricate detailing, this gold payal celebrates the beauty of Indian traditions. Metal - Brass Plating - Gold Plated Size - 10 Inch Stone & Colour - Gold Plated",
    "images": [
      "img/p/mehvira-gold-payal-copy-0.webp",
      "img/p/mehvira-gold-payal-copy-1.webp",
      "img/p/mehvira-gold-payal-copy-2.webp"
    ],
    "type": "Payal",
    "shortName": "Rishaya"
  },
  {
    "id": "neysa-gold-payal-copy",
    "name": "Sitara Gold Payal",
    "cat": "payal",
    "price": 299,
    "mrp": 599,
    "rating": 4.7,
    "reviews": 484,
    "tone": "blush",
    "badges": [],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "Sitara Gold Payal is a statement of strength and grace, blending cultural heritage with modern elegance. Metal - Brass Plating - Gold Plated Size - 10 Inch Stone & Colour - Gold Plated",
    "images": [
      "img/p/neysa-gold-payal-copy-0.webp",
      "img/p/neysa-gold-payal-copy-1.webp",
      "img/p/neysa-gold-payal-copy-2.webp"
    ],
    "type": "Payal",
    "shortName": "Sitara"
  },
  {
    "id": "liraya-gold-jhumkas-copy",
    "name": "Suhani Gold Payal",
    "cat": "payal",
    "price": 599,
    "mrp": 1299,
    "rating": 4.9,
    "reviews": 919,
    "tone": "blush",
    "badges": [],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "Suhani Gold Payal is a classic design that adds auspicious charm and golden radiance to your every movement. Metal - Brass Plating - Gold Plated Size - 10 Inch Stone & Colour - Gold Plated",
    "images": [
      "img/p/liraya-gold-jhumkas-copy-0.webp",
      "img/p/liraya-gold-jhumkas-copy-1.webp",
      "img/p/liraya-gold-jhumkas-copy-2.webp"
    ],
    "type": "Payal",
    "shortName": "Suhani"
  },
  {
    "id": "rishaya-gold-payal-copy-1",
    "name": "Rashi Gold Payal",
    "cat": "payal",
    "price": 499,
    "mrp": 1199,
    "rating": 4.4,
    "reviews": 96,
    "tone": "blush",
    "badges": [
      "bestseller"
    ],
    "moods": [
      "festive",
      "everyday"
    ],
    "occasion": [
      "Everyday"
    ],
    "style": "Traditional",
    "colour": "Gold",
    "plating": "18K Gold Plated",
    "pack": "Set of 2",
    "length": null,
    "sizes": null,
    "bogo": false,
    "blurb": "A classic design that adds auspicious charm and golden radiance to your every movement. Metal - Brass Plating - Gold Plated Size - 10 Inch Stone & Colour - Gold Plated",
    "images": [
      "img/p/rishaya-gold-payal-copy-1-0.webp",
      "img/p/rishaya-gold-payal-copy-1-1.webp"
    ],
    "type": "Payal",
    "shortName": "Rashi"
  }
]

const off = (p, m) => Math.round(((m - p) / m) * 100)

export const PRODUCTS = RAW.map((p) => ({
  ...p,
  category: p.cat,
  packSize: p.pack,
  antiTarnish: true,
  inStock: true,
  discount: off(p.price, p.mrp),
  image: p.images[0],
  hoverImage: p.images[1] || p.images[0],
}))

export const byId = (id) => PRODUCTS.find((p) => p.id === id)
export const byCategory = (key) => PRODUCTS.filter((p) => p.category === key)
export const newArrivals = () => PRODUCTS.filter((p) => p.badges.includes('new'))
export const bestSellers = () => PRODUCTS.filter((p) => p.badges.includes('bestseller'))

/* ---------- MOODS - the Zeraki discovery layer ------------------------ */
export const MOODS = [
  { key: 'romantic', name: 'Soft & Romantic',  tone: 'blush',    line: 'Pearls, petals and a little blush.',  image: 'img/e/celeb-4.webp' },
  { key: 'bold',     name: 'Bold & Glam',      tone: 'berry',    line: 'For the days you walk in first.',      image: 'img/e/celeb-5.webp' },
  { key: 'minimal',  name: 'Everyday Minimal', tone: 'sage',     line: 'Put it on. Forget it is there.',       image: 'img/e/celeb-8.webp' },
  { key: 'festive',  name: 'Festive Glow',     tone: 'butter',   line: 'Temple gold and celebration light.',   image: 'img/e/celeb-3.webp' },
  { key: 'date',     name: 'Date Night',       tone: 'lavender', line: 'A little sparkle, a lot of intent.',   image: 'img/e/celeb-7.webp' },
  { key: 'glam',     name: 'Statement Maker',  tone: 'peach',    line: 'One piece. Whole outfit sorted.',      image: 'img/e/celeb-1.webp' },
]
export const MOOD_MAP = Object.fromEntries(MOODS.map((m) => [m.key, m]))
export const byMood = (key) => PRODUCTS.filter((p) => p.moods.includes(key))

/* ---------- COLLECTIONS ----------------------------------------------- */
export const COLLECTIONS = [
  { key: 'new',          name: 'Just Dropped',          tone: 'blush',    image: 'img/e/celeb-2.webp',         desc: 'The newest additions to the Zeraki wardrobe - styled, shot and shipped this season.', filter: (p) => p.badges.includes('new') },
  { key: 'best',         name: 'Currently Crushing On', tone: 'butter',   image: 'img/e/celeb-3.webp',         desc: 'The pieces our community keeps coming back for, ranked by what actually sells out.', filter: (p) => p.badges.includes('bestseller') },
  { key: 'anti-tarnish', name: 'The Anti-Tarnish Edit', tone: 'sage',     image: 'img/e/ugc-2.webp',           desc: 'Everyday jewellery engineered to hold its colour - sweat, monsoon and metro commutes included.', filter: (p) => p.antiTarnish },
  { key: 'bogo',         name: 'Buy 1 Get 1',           tone: 'peach',    image: 'img/e/hero-detail.webp',     desc: 'Selected mangalsutra, bangles, rings and gold chains - pick two, pay for one.', filter: (p) => p.bogo },
  { key: 'under-599',    name: 'Under \u20b9599',            tone: 'powder',   image: 'img/e/ugc-3.webp',           desc: 'Everything worth adding when you told yourself you were only browsing.', filter: (p) => p.price <= 599 },
  { key: 'temple',       name: 'Temple & Traditional',  tone: 'lavender', image: 'img/e/collage-necklace.webp', desc: 'Antique-finish silhouettes drawn from South Indian temple jewellery, cut for modern proportions.', filter: (p) => p.style === 'Temple' || p.style === 'Traditional' },
]

/* ---------- OFFER BANNERS ----------------------------------------------
 * The live storefront runs its Buy 1 Get 1 offers as flat banner images with
 * the text baked in. Here the same offers are real markup over photography:
 * editable copy, responsive type, readable by search engines and screen
 * readers, and every price below is the true entry price of that category.
 * -------------------------------------------------------------------- */
export const OFFERS = [
  {
    key: 'mangalsutra',
    eyebrow: 'Buy 1 Get 1 free',
    titleLines: ['Mangalsutra,', 'two at a time.'],
    line: 'Pick any two from the mangalsutra edit — the lower-priced one is on us.',
    from: 699,
    to: '/c/mangalsutra',
    cta: 'Shop mangalsutra',
    bg: 'img/b/bg-mangalsutra.webp',
    shot: 'img/p/kiara-mangalsutra-0.webp',
    tone: 'berry',
  },
  {
    key: 'chains',
    eyebrow: 'Buy 1 Get 1 free',
    titleLines: ['Gold chains', 'for daily wear.'],
    line: 'Layer them, gift them, keep them both. Free shipping on every order.',
    from: 399,
    to: '/c/chains',
    cta: 'Shop gold chains',
    bg: 'img/b/bg-chains.webp',
    shot: 'img/p/vaibhav-gold-chain-0.webp',
    tone: 'forest',
  },
  {
    key: 'bangles',
    eyebrow: 'Buy 1 Get 1 free',
    titleLines: ['Bangles,', 'stacked and sorted.'],
    line: 'Every set is anti-tarnish and 18K gold plated. Sizes 2.4, 2.6 and 2.8.',
    from: 699,
    to: '/c/bangles',
    cta: 'Shop bangles',
    bg: 'img/b/bg-bangles.webp',
    shot: 'img/p/khusboo-bangle-set-of-2-0.webp',
    tone: 'plum',
  },
  {
    key: 'rings',
    eyebrow: 'Buy 1 Get 1 free',
    titleLines: ['Adjustable rings', 'from ₹399.'],
    line: 'One size genuinely fits — every Zeraki ring opens gently at the back.',
    from: 399,
    to: '/c/rings',
    cta: 'Shop rings',
    bg: 'img/b/bg-rings.webp',
    shot: 'img/p/nyelle-adjustable-ring-0.webp',
    tone: 'navy',
  },
]

/* ---------- CELEBRITY / PRESS ------------------------------------------
 * These are Zeraki's own campaign and press photographs. The live site does
 * not caption which celebrity appears in which frame, so no photo here is
 * attributed to a named person - the roster below is shown as text instead.
 * Add a `name` to any entry once the client confirms the pairing.
 * -------------------------------------------------------------------- */
export const CELEBRITIES = [
  { img: 'img/e/celeb-1.webp',  wearing: 'Statement drop earrings' },
  { img: 'img/e/celeb-2.webp',  wearing: 'Everyday mangalsutra' },
  { img: 'img/e/celeb-3.webp',  wearing: 'Festive gold' },
  { img: 'img/e/celeb-4.webp',  wearing: 'Daily wear studs' },
  { img: 'img/e/celeb-5.webp',  wearing: 'Gold cuffs and rings' },
  { img: 'img/e/celeb-6.webp',  wearing: 'Gold-tone rings' },
  { img: 'img/e/celeb-7.webp',  wearing: 'Layered gold choker' },
  { img: 'img/e/celeb-8.webp',  wearing: 'Everyday layering' },
  { img: 'img/e/celeb-9.webp',  wearing: 'Traditional necklace set' },
  { img: 'img/e/celeb-10.webp', wearing: 'Diamond-look mangalsutra' },
]

/** Confirmed Zeraki celebrity associations, shown as a roster, not as captions. */
export const CELEB_ROSTER = [
  'Ananya Panday', 'Mouni Roy', 'Surbhi Chandna', 'Nidhhi Agerwal', 'Divyanka Tripathi',
  'Ankita Lokhande', 'Neha Dhupia', 'Natasa Stankovic', 'Sunny Leone', 'Ridhi Dogra',
]

/* ---------- REVIEWS ----------------------------------------------------- */
export const REVIEWS = [
  { name: 'Ritika S.', city: 'Pune', stars: 5, product: 'Kiara Mangalsutra', tone: 'blush', img: 'img/e/ugc-1.webp', text: 'Wore it every single day for four months - office, gym, monsoon - and the colour has not moved. My mother genuinely thought it was gold.' },
  { name: 'Aparna M.', city: 'Bengaluru', stars: 5, product: 'Mia Gold Mangalsutra', tone: 'butter', img: 'img/e/ugc-2.webp', text: 'I wanted something my grandmother would approve of and I would actually enjoy wearing. This was the only piece that did both.' },
  { name: 'Sneha K.', city: 'Nagpur', stars: 4, product: 'Khusboo Bangles', tone: 'peach', img: 'img/e/ugc-3.webp', text: 'Bought the set of two for a wedding and ended up wearing them all festive season. Weight is comfortable, no green marks at all.' },
  { name: 'Fatima R.', city: 'Hyderabad', stars: 5, product: 'Ahira Earrings', tone: 'lavender', img: 'img/e/ugc-4.webp', text: 'These are the exact size I was hunting for - big enough to be noticed, light enough to dance in.' },
  { name: 'Divya T.', city: 'Chennai', stars: 5, product: 'Samyra Necklace Set', tone: 'sage', img: 'img/e/ugc-5.webp', text: 'The temple detailing is so much sharper than the photos. For the price I expected a compromise and did not get one.' },
  { name: 'Neelam J.', city: 'Jaipur', stars: 4, product: 'Nyelle Adjustable Ring', tone: 'powder', img: 'img/e/ugc-6.webp', text: 'Adjustable actually means adjustable here. I have awkward fingers and I finally own rings that fit.' },
  { name: 'Payal D.', city: 'Surat', stars: 5, product: 'Vaibhav Gold Chain', tone: 'blush', img: 'img/e/ugc-7.webp', text: 'Ordered on the Buy 1 Get 1, kept one and gifted one. Both still look brand new six months on.' },
  { name: 'Meera V.', city: 'Kochi', stars: 5, product: 'Disha Mangalsutra', tone: 'powder', img: 'img/e/ugc-8.webp', text: 'Minimal without being boring. It sits perfectly under a collar, which is exactly what I needed for work.' },
]

export const IG_POSTS = [
  'img/e/ig-1.webp', 'img/e/ig-2.webp', 'img/e/ig-3.webp', 'img/e/ig-4.webp',
  'img/e/ig-5.webp', 'img/e/ig-6.webp', 'img/e/ig-7.webp', 'img/e/ig-8.webp',
]

export const EDITORIAL = {
  heroMain: 'img/e/hero-main.webp',
  heroDetail: 'img/e/hero-detail.webp',
  heroMacro: 'img/e/hero-macro.webp',
  moment: 'img/e/moment.webp',
  mangalFeature: 'img/e/mangal-feature.webp',
  aboutHero: 'img/e/about-hero.webp',
  aboutStudio: 'img/e/about-studio.webp',
  aboutDetail: 'img/e/about-detail.webp',
  contactArt: 'img/e/contact-art.webp',
  collageEarrings: 'img/e/collage-earrings.webp',
  collageNecklace: 'img/p/samyra-necklace-set-0.webp',
  journal: ['img/e/journal-1.webp', 'img/e/journal-2.webp', 'img/e/journal-3.webp'],
}

/* ---------- BRAND FACTS (single source of truth — no contradictions) ---- */
export const BRAND = {
  name: 'Zeraki Jewels',
  handle: '@zerakijewels',
  concept: 'Every Shade of Her',
  founded: 2023,
  founders: 'Harshit Bhandari & Mustafa Bedawala',
  entity: 'Zeraki Marketing Private Limited',
  whatsapp: '+91 95583 14299',
  whatsappUrl: 'https://wa.me/919558314299',
  email: 'support@zerakijewels.com',
  hours: 'Monday to Saturday, 10:00 AM – 6:00 PM IST',
  replyTime: 'Average WhatsApp reply time: under 3 hours',
  address: 'Zeraki Marketing Pvt. Ltd., Shop 1501, Sahara Darwaja, Ring Road, TPS-8, Surat, Gujarat 395003',
  instagram: 'https://www.instagram.com/zerakijewels/',
  facebook: 'https://www.facebook.com/p/Zeraki-Jewels-61573908311150/',
  /* One verified figure per statistic, used identically on every page. */
  stats: [
    { value: '9,00,000+', label: 'Orders delivered' },
    { value: '2023', label: 'Founded in Surat' },
    { value: '140+', label: 'People on the team' },
    { value: '95%', label: 'Women-led workforce' },
  ],
  offers: {
    bogo: 'Buy 1 Get 1 on selected mangalsutra, bangles, rings & gold chains',
    prepaid: 'Extra ₹50 off on prepaid orders',
    shipping: 'Free shipping across India',
    cod: 'Cash on delivery available',
  },
  policy: {
    returnWindow: '7 days',
    exchangeFee: '₹80',
    defectWindow: '24 hours',
    creditValidity: '3 months',
  },
}

/* ---------- FILTER VOCABULARY -------------------------------------------- */
export const FILTERS = {
  Category: CATEGORIES.map((c) => c.name),
  Occasion: ['Everyday', 'Festive', 'Wedding', 'Party'],
  Style: ['Contemporary', 'Traditional', 'Temple', 'Jhumka', 'Statement', 'Designer', 'Bridal'],
  Colour: ['Gold', 'Silver', 'Gold & White', 'Gold & Red', 'Gold & Green', 'Gold & Crystal'],
  Plating: ['18K Gold Plated', 'Rhodium Plated'],
}

export const SORTS = [
  { key: 'featured', label: 'Featured' },
  { key: 'new', label: 'Newest first' },
  { key: 'price-asc', label: 'Price: low to high' },
  { key: 'price-desc', label: 'Price: high to low' },
  { key: 'rating', label: 'Top rated' },
  { key: 'discount', label: 'Biggest saving' },
]

export const POPULAR_SEARCHES = {
  'Mangalsutra': ['Short mangalsutra designs', 'Gold plated mangalsutra', 'Modern minimalist mangalsutra', 'Karimani chain mangalsutra', 'Traditional mangalsutra', 'Mangalsutra bracelet', 'Mangalsutra with earrings'],
  'Earrings & Studs': ['Daily wear studs', 'Gold jhumkas', 'Long gold earrings', 'Maharashtrian earrings', 'Ear cuffs for women', 'Anti-tarnish earrings'],
  'Bangles & Bracelets': ['Bangles for women', 'Bracelets for women', 'Evil eye bracelet', 'Antique bangles', 'Gold plated bangles set of 2'],
  'Necklaces & Chains': ['Temple necklace set', 'Short gold necklace', 'Long gold necklace', 'Diamond look necklace', 'Pendant sets', 'Gold chain for women'],
  'More': ['Adjustable rings for women', 'Daily wear payal', 'Kamarbandh', 'Maang tikka', 'Maharashtrian nath', 'Anti-tarnish jewellery'],
}

export const FAQS = [
  { q: 'Is Zeraki jewellery really anti-tarnish?', a: 'Yes. Our pieces are 18K gold plated over a hypoallergenic base and finished with an anti-tarnish coating, so they hold their colour through daily wear. Keep them away from perfume, water and harsh cleaners and the finish lasts considerably longer.' },
  { q: 'What is the return and exchange window?', a: `You have ${BRAND.policy.returnWindow} from delivery to raise a return or exchange. Exchanges carry a flat ${BRAND.policy.exchangeFee} fee covering reverse logistics. Returns are issued as a credit note valid for ${BRAND.policy.creditValidity}, and return shipping is deducted from it. Items must be unused, with tags, invoice and packaging intact.` },
  { q: 'Something arrived damaged. What do I do?', a: `Message us on WhatsApp within ${BRAND.policy.defectWindow} of delivery with an unboxing photo or video. Manufacturing and transit defects are replaced free of charge — no credit note, no fee.` },
  { q: 'Do you offer cash on delivery?', a: 'Yes, COD is available across serviceable pincodes in India. Prepaid orders get an extra ₹50 off at checkout.' },
  { q: 'How does Buy 1 Get 1 work?', a: 'Add two eligible pieces from the Buy 1 Get 1 edit to your bag and the lower-priced item is free at checkout. It applies to selected mangalsutra, bangles, rings and gold chains.' },
  { q: 'What size are your rings and bangles?', a: 'All Zeraki rings are adjustable and fit most fingers. Bangles come in 2.4, 2.6 and 2.8 — measure the widest part of your hand with your thumb tucked in, and use our size guide on every bangle page.' },
  { q: 'Do you ship across India?', a: 'Yes, shipping is free on every domestic order, including Tier-2 and Tier-3 cities. A tracking link is emailed the moment your parcel is packed. A small number of remote pincodes are not serviceable.' },
  { q: 'How should I care for my jewellery?', a: 'Last on, first off. Put jewellery on after perfume and make-up, take it off before showering, swimming or sleeping. Wipe with a dry cloth after wear and store each piece in the pouch it arrived in.' },
]
