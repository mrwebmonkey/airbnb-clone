const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    coordinates: { latitude: 34.031246, longitude: -118.788193 }
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    coordinates: { latitude: 40.730610, longitude: -73.935242 }
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    coordinates: { latitude: 39.1923, longitude: -106.8245 }
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    coordinates: { latitude: 43.769562, longitude: 11.255814 }
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    coordinates: { latitude: 45.512794, longitude: -122.679565 }
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    coordinates: { latitude: 21.1743, longitude: -86.8466 }
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    coordinates: { latitude: 39.096848, longitude: -120.032349 }
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    coordinates: { latitude: 39.096848, longitude: -120.032349 }
  },
  {
    title: "Desert Dome Escape",
    description:
      "Stay in a modern desert dome with panoramic views of the stars. A one-of-a-kind off-grid experience.",
    image: {
      url: "https://t4.ftcdn.net/jpg/10/62/59/09/240_F_1062590921_Zw56nJxIMiFMa9LKfrrGaEn5oUuJqgDz.jpg",
      filename: "listingimage"
    },
    price: 1300,
    location: "Joshua Tree",
    country: "United States",
    coordinates: { latitude: 33.881866, longitude: -115.900650 }
  },
  {
    title: "Floating Villa in Maldives",
    description:
      "Live above crystal clear waters in this luxurious overwater bungalow. A perfect tropical getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3500,
    location: "Male",
    country: "Maldives",
    coordinates: { latitude: 4.1748, longitude: 73.5089 }
  },
  {
    title: "Icelandic Glass Igloo",
    description:
      "Watch the Northern Lights from your cozy heated glass igloo. A magical Arctic experience.",
    image: {
      url: "https://t3.ftcdn.net/jpg/07/91/44/88/360_F_791448834_KhuhmrhFnyucSh6P16Z7jGCaKxXGN7CI.jpg",
      filename: "listingimage"
    },
    price: 2700,
    location: "Reykjavík",
    country: "Iceland",
    coordinates: { latitude: 64.14583, longitude: -21.94250 }
  },
  {
    title: "Safari Lodge with Wildlife Views",
    description:
      "Sleep to the sound of the wild in this luxury lodge located on a private African game reserve.",
    image: {
      url: "https://t4.ftcdn.net/jpg/11/84/15/55/240_F_1184155573_Lb1WnySt59Upkedk7TN783RjFff7J9FW.jpg",
      filename: "listingimage"
    },
    price: 3100,
    location: "Maasai Mara",
    country: "Kenya",
    coordinates: { latitude: -1.490000, longitude: 35.143890 }
  },
  {
    title: "Tropical Treehouse in Bali",
    description:
      "Nestled in the jungle canopy, this hand-crafted treehouse offers a blend of adventure and tranquility.",
    image: {
      url: "https://t3.ftcdn.net/jpg/13/16/97/86/240_F_1316978656_YmamAKF4QG0RqCMFdHUIbQgAlzk4jvWi.jpg",
      filename: "listingimage"
    },
    price: 3999,
    location: "Ubud",
    country: "Indonesia",
    coordinates: { latitude: -8.5098, longitude: 115.2621 }
  },
];

module.exports = { data: sampleListings };
