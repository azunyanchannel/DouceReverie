export const locales = ["zh-CN", "ja", "en", "zh-TW"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-CN";

export const localeLabels: Record<Locale, string> = {
  "zh-CN": "简",
  ja: "JP",
  en: "EN",
  "zh-TW": "繁"
};

export const localeNames: Record<Locale, string> = {
  "zh-CN": "简体中文",
  ja: "日本語",
  en: "English",
  "zh-TW": "繁體中文"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function getMessages(locale: Locale) {
  switch (locale) {
    case "zh-CN":
      return (await import("@/messages/zh-CN.json")).default;
    case "ja":
      return (await import("@/messages/ja.json")).default;
    case "en":
      return (await import("@/messages/en.json")).default;
    case "zh-TW":
      return (await import("@/messages/zh-TW.json")).default;
  }
}
