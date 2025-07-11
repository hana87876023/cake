export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  images: string[];
  ingredients: string[];
  allergens: string[];
  nutritionInfo?: {
    calories: number;
    fat: number;
    sugar: number;
    protein: number;
  };
  available: boolean;
  featured: boolean;
  sizes?: {
    name: string;
    price: number;
  }[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "クラシックフルーツタルト",
    price: 3200,
    description: "新鮮な季節のフルーツをふんだんに使用した、当店の定番タルトです。サクサクのタルト生地に、なめらかなカスタードクリーム、そして色とりどりのフルーツが美しく飾られています。",
    shortDescription: "季節のフルーツとカスタードの定番タルト",
    category: "フルーツ",
    image: "/images/fruit-tart.jpeg",
    images: [
      "/images/fruit-tart.jpeg",
      "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80"
    ],
    ingredients: ["小麦粉", "バター", "卵", "牛乳", "砂糖", "季節のフルーツ", "バニラ"],
    allergens: ["小麦", "卵", "乳"],
    nutritionInfo: {
      calories: 320,
      fat: 18,
      sugar: 22,
      protein: 5
    },
    available: true,
    featured: true,
    sizes: [
      { name: "ホール (18cm)", price: 3200 },
      { name: "ハーフ", price: 1800 },
      { name: "カット", price: 480 }
    ]
  },
  {
    id: "2",
    name: "チョコレートガナッシュタルト",
    price: 2800,
    description: "濃厚なチョコレートガナッシュを贅沢に使用した大人のタルト。ビターチョコレートとミルクチョコレートのバランスが絶妙で、チョコレート好きにはたまらない一品です。",
    shortDescription: "濃厚チョコレートの贅沢タルト",
    category: "チョコレート",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=80"
    ],
    ingredients: ["小麦粉", "バター", "卵", "チョコレート", "生クリーム", "砂糖"],
    allergens: ["小麦", "卵", "乳"],
    nutritionInfo: {
      calories: 380,
      fat: 24,
      sugar: 28,
      protein: 6
    },
    available: true,
    featured: true,
    sizes: [
      { name: "ホール (18cm)", price: 2800 },
      { name: "ハーフ", price: 1600 },
      { name: "カット", price: 420 }
    ]
  },
  {
    id: "3",
    name: "季節のベリータルト",
    price: 3500,
    description: "ブルーベリー、ラズベリー、ストロベリーなど、季節の新鮮なベリーをたっぷり使用。甘酸っぱいベリーとまろやかなクリームのハーモニーが楽しめます。",
    shortDescription: "新鮮ベリーたっぷりの贅沢タルト",
    category: "フルーツ",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&q=80",
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80"
    ],
    ingredients: ["小麦粉", "バター", "卵", "各種ベリー", "クリームチーズ", "砂糖", "レモン"],
    allergens: ["小麦", "卵", "乳"],
    nutritionInfo: {
      calories: 290,
      fat: 16,
      sugar: 20,
      protein: 4
    },
    available: true,
    featured: false,
    sizes: [
      { name: "ホール (18cm)", price: 3500 },
      { name: "ハーフ", price: 2000 },
      { name: "カット", price: 520 }
    ]
  },
  {
    id: "4",
    name: "抹茶とあずきのタルト",
    price: 3000,
    description: "京都産の上質な抹茶を使用した和風タルト。ほろ苦い抹茶クリームと甘さ控えめの粒あんが絶妙にマッチ。和と洋の融合をお楽しみください。",
    shortDescription: "和洋折衷の上品な抹茶タルト",
    category: "和風",
    image: "/images/matcha-tart.webp",
    images: [
      "/images/matcha-tart.webp",
      "/images/matcha-tart.webp"
    ],
    ingredients: ["小麦粉", "バター", "卵", "抹茶", "あずき", "生クリーム", "砂糖"],
    allergens: ["小麦", "卵", "乳"],
    nutritionInfo: {
      calories: 310,
      fat: 17,
      sugar: 24,
      protein: 5
    },
    available: true,
    featured: true,
    sizes: [
      { name: "ホール (18cm)", price: 3000 },
      { name: "ハーフ", price: 1700 },
      { name: "カット", price: 450 }
    ]
  },
  {
    id: "5",
    name: "レモンタルト",
    price: 2600,
    description: "爽やかなレモンカードを使用した酸味が心地よいタルト。メレンゲの甘さとレモンの酸味が絶妙なバランス。暑い季節にぴったりの一品です。",
    shortDescription: "爽やかな酸味が魅力のレモンタルト",
    category: "フルーツ",
    image: "/images/lemon-tart.jpg",
    images: [
      "/images/lemon-tart.jpg",
      "/images/lemon-tart.jpg"
    ],
    ingredients: ["小麦粉", "バター", "卵", "レモン", "砂糖", "メレンゲ"],
    allergens: ["小麦", "卵", "乳"],
    nutritionInfo: {
      calories: 280,
      fat: 15,
      sugar: 26,
      protein: 4
    },
    available: true,
    featured: false,
    sizes: [
      { name: "ホール (18cm)", price: 2600 },
      { name: "ハーフ", price: 1500 },
      { name: "カット", price: 390 }
    ]
  },
  {
    id: "6",
    name: "キャラメルナッツタルト",
    price: 3100,
    description: "香ばしいナッツとほろ苦いキャラメルの組み合わせ。アーモンド、くるみ、ピーカンナッツを贅沢に使用し、食感も楽しめる大人のタルトです。",
    shortDescription: "香ばしいナッツとキャラメルの絶妙タルト",
    category: "ナッツ",
    image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&q=80",
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80"
    ],
    ingredients: ["小麦粉", "バター", "卵", "各種ナッツ", "キャラメル", "生クリーム", "砂糖"],
    allergens: ["小麦", "卵", "乳", "ナッツ"],
    nutritionInfo: {
      calories: 420,
      fat: 28,
      sugar: 30,
      protein: 8
    },
    available: true,
    featured: false,
    sizes: [
      { name: "ホール (18cm)", price: 3100 },
      { name: "ハーフ", price: 1750 },
      { name: "カット", price: 460 }
    ]
  }
];