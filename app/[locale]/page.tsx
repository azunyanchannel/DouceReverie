import { notFound } from "next/navigation";
import Storefront from "@/components/Storefront";
import { bestSellerProducts, featuredProducts } from "@/lib/products";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const currentLocale = locale as Locale;
  const messages = await getMessages(currentLocale);

  return (
    <Storefront
      bestSellerProducts={bestSellerProducts}
      currentLocale={currentLocale}
      featuredProducts={featuredProducts}
      messages={messages}
    />
  );
}
