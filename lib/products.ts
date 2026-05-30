import type { Locale } from "@/lib/i18n";

type LocalizedValue = Record<Locale, string>;

export type Product = {
  id: string;
  title: LocalizedValue;
  badge: LocalizedValue;
  prices: Record<Locale, number | null>;
};

export const featuredProducts: Product[] = [
  {
    id: "lace-morning-slip",
    title: {
      "zh-CN": "晨光蕾丝吊带裙",
      ja: "Lace Morning Slip Dress",
      en: "Lace Morning Slip Dress",
      "zh-TW": "晨光蕾絲吊帶裙"
    },
    badge: {
      "zh-CN": "等待复刻补货",
      ja: "Archive restock requested",
      en: "Archive restock requested",
      "zh-TW": "等待復刻補貨"
    },
    prices: {
      "zh-CN": null,
      ja: null,
      en: null,
      "zh-TW": null
    }
  },
  {
    id: "ivory-lounge-blouse",
    title: {
      "zh-CN": "象牙白休闲衬衫",
      ja: "Ivory Lounge Blouse",
      en: "Ivory Lounge Blouse",
      "zh-TW": "象牙白休閒襯衫"
    },
    badge: {
      "zh-CN": "新入荷",
      ja: "New in",
      en: "New in",
      "zh-TW": "新入荷"
    },
    prices: {
      "zh-CN": 1380,
      ja: 28800,
      en: 188,
      "zh-TW": 5880
    }
  }
];

export const bestSellerProducts: Product[] = [
  {
    id: "soft-sofa-knit-set",
    title: {
      "zh-CN": "软绵沙发针织套装",
      ja: "Soft Sofa Knit Set",
      en: "Soft Sofa Knit Set",
      "zh-TW": "軟綿沙發針織套裝"
    },
    badge: {
      "zh-CN": "开放再订购",
      ja: "Re-order open",
      en: "Re-order open",
      "zh-TW": "開放再訂購"
    },
    prices: {
      "zh-CN": 1780,
      ja: 36800,
      en: 246,
      "zh-TW": 7680
    }
  },
  {
    id: "blush-ribbon-cardigan",
    title: {
      "zh-CN": "淡粉蝴蝶结开衫",
      ja: "Blush Ribbon Cardigan",
      en: "Blush Ribbon Cardigan",
      "zh-TW": "淡粉蝴蝶結開衫"
    },
    badge: {
      "zh-CN": "本周 12% off",
      ja: "12% off this week",
      en: "12% off this week",
      "zh-TW": "本週 12% off"
    },
    prices: {
      "zh-CN": 960,
      ja: 19800,
      en: 132,
      "zh-TW": 4180
    }
  },
  {
    id: "luminous-day-skirt",
    title: {
      "zh-CN": "白昼梦长裙",
      ja: "Luminous Day Skirt",
      en: "Luminous Day Skirt",
      "zh-TW": "白晝夢長裙"
    },
    badge: {
      "zh-CN": "人气商品",
      ja: "Best seller",
      en: "Best seller",
      "zh-TW": "人氣商品"
    },
    prices: {
      "zh-CN": 1180,
      ja: 24800,
      en: 164,
      "zh-TW": 5280
    }
  }
];

export const moreProducts: Product[] = [
  {
    id: "petal-collar-cardigan",
    title: {
      "zh-CN": "花瓣领针织开衫",
      ja: "Petal Collar Cardigan",
      en: "Petal Collar Cardigan",
      "zh-TW": "花瓣領針織開衫"
    },
    badge: {
      "zh-CN": "少量现货",
      ja: "Limited stock",
      en: "Limited stock",
      "zh-TW": "少量現貨"
    },
    prices: {
      "zh-CN": 1080,
      ja: 22800,
      en: 152,
      "zh-TW": 4680
    }
  },
  {
    id: "rose-tea-camisole",
    title: {
      "zh-CN": "玫瑰茶吊带上衣",
      ja: "Rose Tea Camisole",
      en: "Rose Tea Camisole",
      "zh-TW": "玫瑰茶吊帶上衣"
    },
    badge: {
      "zh-CN": "春季限定",
      ja: "Spring limited",
      en: "Spring limited",
      "zh-TW": "春季限定"
    },
    prices: {
      "zh-CN": 720,
      ja: 15800,
      en: 104,
      "zh-TW": 3180
    }
  },
  {
    id: "misty-lace-trousers",
    title: {
      "zh-CN": "雾白蕾丝长裤",
      ja: "Misty Lace Trousers",
      en: "Misty Lace Trousers",
      "zh-TW": "霧白蕾絲長褲"
    },
    badge: {
      "zh-CN": "新色追加",
      ja: "New color added",
      en: "New color added",
      "zh-TW": "新色追加"
    },
    prices: {
      "zh-CN": 1280,
      ja: 26800,
      en: 178,
      "zh-TW": 5580
    }
  },
  {
    id: "sunday-ribbon-dress",
    title: {
      "zh-CN": "周日蝴蝶结连衣裙",
      ja: "Sunday Ribbon Dress",
      en: "Sunday Ribbon Dress",
      "zh-TW": "週日蝴蝶結連衣裙"
    },
    badge: {
      "zh-CN": "预约商品",
      ja: "Pre-order",
      en: "Pre-order",
      "zh-TW": "預約商品"
    },
    prices: {
      "zh-CN": 1680,
      ja: 34800,
      en: 238,
      "zh-TW": 7280
    }
  },
  {
    id: "milk-satin-bow-skirt",
    title: {
      "zh-CN": "牛奶缎面蝴蝶结半裙",
      ja: "Milk Satin Bow Skirt",
      en: "Milk Satin Bow Skirt",
      "zh-TW": "牛奶緞面蝴蝶結半裙"
    },
    badge: {
      "zh-CN": "搭配推荐",
      ja: "Styling pick",
      en: "Styling pick",
      "zh-TW": "搭配推薦"
    },
    prices: {
      "zh-CN": 980,
      ja: 20800,
      en: 138,
      "zh-TW": 4280
    }
  },
  {
    id: "cloud-room-knit-vest",
    title: {
      "zh-CN": "云朵房间针织背心",
      ja: "Cloud Room Knit Vest",
      en: "Cloud Room Knit Vest",
      "zh-TW": "雲朵房間針織背心"
    },
    badge: {
      "zh-CN": "人气补货",
      ja: "Restocked favorite",
      en: "Restocked favorite",
      "zh-TW": "人氣補貨"
    },
    prices: {
      "zh-CN": 860,
      ja: 18800,
      en: 124,
      "zh-TW": 3780
    }
  }
];

export const allProducts: Product[] = [
  ...featuredProducts,
  ...bestSellerProducts,
  ...moreProducts
];
