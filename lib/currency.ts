import type { Locale } from "@/lib/i18n";

export const currencyByLocale: Record<Locale, string> = {
  "zh-CN": "CNY",
  ja: "JPY",
  en: "USD",
  "zh-TW": "TWD"
};

export const numberLocaleByLocale: Record<Locale, string> = {
  "zh-CN": "zh-CN",
  ja: "ja-JP",
  en: "en-US",
  "zh-TW": "zh-TW"
};

export function formatCurrency(amount: number, locale: Locale) {
  const fractionDigits = currencyByLocale[locale] === "JPY" ? 0 : 2;
  const formatted = new Intl.NumberFormat(numberLocaleByLocale[locale], {
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits
  }).format(amount);

  switch (locale) {
    case "zh-CN":
      return `¥${formatted}`;
    case "ja":
      return `￥${formatted}`;
    case "en":
      return `$${formatted}`;
    case "zh-TW":
      return `NT$${formatted}`;
  }
}
