import { Product } from "@/contexts/ProductsContext";

// Mock products data for when API is unavailable
const MOCK_PRODUCTS: Product[] = [
  // TOPS
  {
    id: "1",
    name: "Performance Running Tee",
    price: "49.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    description: "Lightweight, breathable running tee designed for maximum performance.",
  },
  {
    id: "2",
    name: "Sport Hoodie Elite",
    price: "89.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
    description: "Premium fleece hoodie with moisture-wicking technology.",
  },
  {
    id: "3",
    name: "Compression Sports Bra",
    price: "44.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&q=80",
    description: "High-support sports bra for intense training sessions.",
  },
  {
    id: "4",
    name: "Performance Tank Top",
    price: "39.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=500&q=80",
    description: "Sleeveless tank with mesh panels for maximum breathability.",
  },
  {
    id: "5",
    name: "DriFit Tech Shirt",
    price: "54.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80",
    description: "Advanced moisture-wicking fabric keeps you cool and dry.",
  },
  {
    id: "6",
    name: "Long Sleeve Training Top",
    price: "64.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
    description: "Versatile long sleeve top for all-weather training.",
  },
  {
    id: "7",
    name: "Race Day Jersey",
    price: "74.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&q=80",
    description: "Aerodynamic jersey designed for race day performance.",
  },
  {
    id: "8",
    name: "Thermal Base Layer",
    price: "59.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500&q=80",
    description: "Lightweight thermal layer for cold weather training.",
  },
  {
    id: "9",
    name: "Muscle Fit Tee",
    price: "44.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&q=80",
    description: "Form-fitting tee that accentuates your physique.",
  },
  {
    id: "10",
    name: "Mesh Training Shirt",
    price: "49.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80",
    description: "Strategic mesh placement for optimal ventilation.",
  },
  {
    id: "11",
    name: "Crop Top Performance",
    price: "42.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&q=80",
    description: "Trendy crop top with performance fabrics.",
  },
  {
    id: "12",
    name: "Polo Sport Shirt",
    price: "59.99",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&q=80",
    description: "Classic polo with modern performance technology.",
  },

  // BOTTOMS
  {
    id: "13",
    name: "Flex Yoga Leggings",
    price: "69.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    description: "Four-way stretch leggings that move with you through every pose.",
  },
  {
    id: "14",
    name: "Training Shorts Pro",
    price: "54.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80",
    description: "Quick-dry shorts with built-in compression liner.",
  },
  {
    id: "15",
    name: "Compression Tights",
    price: "79.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
    description: "Full-length compression tights for muscle support.",
  },
  {
    id: "16",
    name: "Track Pants Elite",
    price: "69.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80",
    description: "Comfortable track pants with zippered pockets.",
  },
  {
    id: "17",
    name: "Running Shorts 5in",
    price: "49.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80",
    description: "Lightweight 5-inch inseam running shorts.",
  },
  {
    id: "18",
    name: "Yoga Capris",
    price: "59.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=500&q=80",
    description: "Mid-length capris perfect for yoga and studio classes.",
  },
  {
    id: "19",
    name: "Basketball Shorts",
    price: "57.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80",
    description: "Roomy shorts with superior mobility for court sports.",
  },
  {
    id: "20",
    name: "Flex Joggers",
    price: "64.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80",
    description: "Athletic joggers that transition from gym to street.",
  },
  {
    id: "21",
    name: "Skirt Tennis Pro",
    price: "52.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    description: "Performance tennis skirt with built-in shorts.",
  },
  {
    id: "22",
    name: "Bike Shorts",
    price: "47.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&q=80",
    description: "Form-fitting bike shorts for cycling and gym.",
  },
  {
    id: "23",
    name: "Sweatpants Classic",
    price: "54.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?w=500&q=80",
    description: "Classic sweatpants with modern performance fabric.",
  },
  {
    id: "24",
    name: "Leggings High Waist",
    price: "62.99",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
    description: "High-waisted leggings with tummy control.",
  },

  // FOOTWEAR
  {
    id: "25",
    name: "Cross-Training Shoes",
    price: "129.99",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
    description: "Versatile training shoes for all types of workouts.",
  },
  {
    id: "26",
    name: "Running Shoes Air",
    price: "149.99",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    description: "Cushioned running shoes with responsive air technology.",
  },
  {
    id: "27",
    name: "Weightlifting Shoes",
    price: "159.99",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
    description: "Stable platform for heavy lifting sessions.",
  },
  {
    id: "28",
    name: "Walking Sneakers",
    price: "99.99",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
    description: "Comfortable walking shoes for all-day wear.",
  },
  {
    id: "29",
    name: "Trail Running Shoes",
    price: "139.99",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&q=80",
    description: "Rugged outsole for off-road terrain.",
  },
  {
    id: "30",
    name: "Basketball High Tops",
    price: "149.99",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=500&q=80",
    description: "High-top basketball shoes with ankle support.",
  },
  {
    id: "31",
    name: "Tennis Court Shoes",
    price: "119.99",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80",
    description: "Non-marking sole with superior court grip.",
  },
  {
    id: "32",
    name: "Boxing Shoes",
    price: "109.99",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&q=80",
    description: "Lightweight boxing shoes for ring movement.",
  },

  // OUTERWEAR
  {
    id: "33",
    name: "Track Jacket Windbreaker",
    price: "79.99",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    description: "Lightweight wind-resistant jacket for outdoor training.",
  },
  {
    id: "34",
    name: "Performance Vest",
    price: "69.99",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
    description: "Sleeveless vest for cool weather activities.",
  },
  {
    id: "35",
    name: "Rain Jacket Pro",
    price: "99.99",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    description: "Waterproof jacket with breathable membrane.",
  },
  {
    id: "36",
    name: "Fleece Pullover",
    price: "74.99",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80",
    description: "Cozy fleece pullover for warm-ups and cool-downs.",
  },
  {
    id: "37",
    name: "Soft Shell Jacket",
    price: "119.99",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
    description: "Versatile soft shell for variable conditions.",
  },
  {
    id: "38",
    name: "Parka Winter",
    price: "179.99",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&q=80",
    description: "Insulated parka for extreme cold weather training.",
  },
  {
    id: "39",
    name: "Running Shell",
    price: "94.99",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    description: "Ultra-light shell for running in light rain.",
  },

  // ACCESSORIES
  {
    id: "40",
    name: "Sports Headband",
    price: "14.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=500&q=80",
    description: "Moisture-wicking headband for intense workouts.",
  },
  {
    id: "41",
    name: "Training Gloves",
    price: "29.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80",
    description: "Grip-enhancing gloves for weight training.",
  },
  {
    id: "42",
    name: "Foam Roller",
    price: "24.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&q=80",
    description: "High-density foam roller for muscle recovery.",
  },
  {
    id: "43",
    name: "Water Bottle Insulated",
    price: "19.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    description: "Insulated bottle keeps drinks cold for hours.",
  },
  {
    id: "44",
    name: "Gym Bag Duffel",
    price: "54.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    description: "Spacious duffel bag with separate shoe compartment.",
  },
  {
    id: "45",
    name: "Resistance Bands Set",
    price: "34.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&q=80",
    description: "Set of 5 resistance bands for strength training.",
  },
  {
    id: "46",
    name: "Fitness Tracker",
    price: "149.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
    description: "Advanced fitness tracker with heart rate monitoring.",
  },
  {
    id: "47",
    name: "Yoga Mat Premium",
    price: "44.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
    description: "Extra-thick yoga mat with non-slip surface.",
  },
  {
    id: "48",
    name: "Jump Rope Speed",
    price: "16.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
    description: "Adjustable speed rope for cardio training.",
  },
  {
    id: "49",
    name: "Weightlifting Belt",
    price: "39.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&q=80",
    description: "Leather lifting belt for back support.",
  },
  {
    id: "50",
    name: "Running Socks 3-Pack",
    price: "19.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80",
    description: "Blister-resistant running socks in 3 colors.",
  },
];

export const fetchProductsServer = async (): Promise<Product[]> => {
  const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // If no API URL configured, return mock data
  if (!apiBaseURL) {
    console.log("No API URL configured, using mock data");
    return MOCK_PRODUCTS;
  }

  try {
    const response = await fetch(`${apiBaseURL}/products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`API returned ${response.status}, using mock data`);
      return MOCK_PRODUCTS;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products, using mock data:", error);
    return MOCK_PRODUCTS;
  }
};
