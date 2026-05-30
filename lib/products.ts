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
