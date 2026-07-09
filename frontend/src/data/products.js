import drums1 from "../assets/products/drums/drums1.jpg";
import acguitar1 from "../assets/products/guitars/acguitar1.jpg";
import acguitar2 from "../assets/products/guitars/acguitar2.jpg";
import acguitar3 from "../assets/products/guitars/acguitar3.jpg";
import electricgt from "../assets/products/guitars/electricgt.jpg";
import interngt from "../assets/products/guitars/interngt.jpg";

export const categories = [
  "Guitars",
  "Keyboards & Pianos",
  "Drums",
  "Percussion",
  "Pro-Audio",
  "Accessories",
];

export const brands = [
  "Cort",
  "Vault",
  "Fender",
  "Gibson",
  "Ibanez",
  "Epiphone",
  "Takamine",
  "Yamaha",
  "Taylor",
  "PRS",
  "Tama",
  "Focusrite",
  "AKG",
  "Audio-Technica",
  "Behringer",
];

export const products = [
  // 🎸 GUITARS
  {
    id: "acguitar1",
    name: "Yamaha Guitar",
    brand: "Yamaha",
    category: "Guitars",
    price: 8290,
    oldPrice: 9850,
    rating: 4.8,
    image: acguitar1,
    tags: ["Acoustic", "Beginner", "Bestseller"],
    description: "Warm, reliable acoustic guitar for learners.",
  },
  {
    id: "electricgt",
    name: "Fender Guitar",
    brand: "Fender",
    category: "Guitars",
    price: 18990,
    oldPrice: 21990,
    rating: 4.7,
    image: electricgt,
    tags: ["Electric", "Stage Ready"],
    description: "Classic Strat tone for stage and studio.",
  },
  {
    id: "acguitar3",
    name: "Cort AD810 Dreadnought",
    brand: "Cort",
    category: "Guitars",
    price: 10490,
    oldPrice: 11990,
    rating: 4.6,
    image: acguitar3,
    tags: ["Acoustic", "Solid Feel"],
    description: "Balanced dreadnought acoustic guitar.",
  },
  {
    id: "acguitar2",
    name: "Vault Acoustic Guitar",
    brand: "Vault",
    category: "Guitars",
    price: 7490,
    oldPrice: 8990,
    rating: 4.5,
    image: acguitar2,
    tags: ["Acoustic", "Budget"],
    description: "Budget-friendly beginner guitar.",
  },
  {
    id: "interngt",
    name: "Intern Beginner Guitar",
    brand: "Intern",
    category: "Guitars",
    price: 9990,
    oldPrice: 11490,
    rating: 4.6,
    image: interngt,
    tags: ["Beginner", "Acoustic"],
    description: "Perfect starter guitar.",
  },

  // 🎹 KEYS
  {
    id: "yamaha-psr-e373",
    name: "Yamaha PSR-E373 Keyboard",
    brand: "Yamaha",
    category: "Keyboards & Pianos",
    price: 15990,
    oldPrice: 17990,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80",
    tags: ["Keyboard", "Learning"],
    description: "Expressive learning keyboard.",
  },

  {
    id: "digital-piano-88",
    name: "88-Key Digital Piano",
    brand: "Yamaha",
    category: "Keyboards & Pianos",
    price: 45990,
    oldPrice: 51990,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80",
    tags: ["Piano", "Weighted Keys"],
    description: "Full-size digital piano.",
  },

  // 🥁 DRUMS (FIXED)
  {
    id: "drums1",
    name: "Tama Acoustic Drum Kit",
    brand: "Tama",
    category: "Drums",
    price: 62990,
    oldPrice: 69990,
    rating: 4.7,
    image: drums1,
    tags: ["Drums", "Live"],
    description: "Full acoustic drum kit for stage use.",
  },

  // 🪘 PERCUSSION
  {
    id: "cajon-pro",
    name: "Pro Cajon Clap Box",
    brand: "Vault",
    category: "Percussion",
    price: 5490,
    oldPrice: 6990,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?auto=format&fit=crop&w=900&q=80",
    tags: ["Cajon", "Acoustic"],
    description: "Portable cajon for unplugged gigs.",
  },

  // 🎙️ PRO AUDIO
  {
    id: "focusrite-scarlett",
    name: "Focusrite Scarlett 2i2",
    brand: "Focusrite",
    category: "Pro-Audio",
    price: 18990,
    oldPrice: 20990,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
    tags: ["Audio Interface", "Studio"],
    description: "Professional audio interface.",
  },
  {
    id: "akg-condenser",
    name: "AKG Condenser Microphone",
    brand: "AKG",
    category: "Pro-Audio",
    price: 10990,
    oldPrice: 12990,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
    tags: ["Microphone", "Recording"],
    description: "Studio condenser microphone.",
  },
  {
    id: "studio-headphones",
    name: "Audio-Technica Studio Headphones",
    brand: "Audio-Technica",
    category: "Pro-Audio",
    price: 8990,
    oldPrice: 9990,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    tags: ["Headphones", "Monitoring"],
    description: "Studio monitoring headphones.",
  },

  // 🎒 ACCESSORIES
  {
    id: "guitar-gig-bag",
    name: "Heavy Padded Guitar Gig Bag",
    brand: "JK Musicals",
    category: "Accessories",
    price: 1990,
    oldPrice: 2490,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
    tags: ["Bag", "Protection"],
    description: "Protective padded gig bag.",
  },
];