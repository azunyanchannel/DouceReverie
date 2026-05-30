import Link from "next/link";
import { notFound } from "next/navigation";
import { formatCurrency } from "@/lib/currency";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { allProducts } from "@/lib/products";

type ProductsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const currentLocale = locale as Locale;
  const messages = await getMessages(currentLocale);

  return (
    <main className="catalog-page">
      <header className="catalog-header">
        <Link className="catalog-brand" href={`/${currentLocale}`}>
          Douce Rêverie
        </Link>
        <Link className="back-link" href={`/${currentLocale}`}>
          <span aria-hidden="true">←</span> {messages.catalog.back}
        </Link>
      </header>

      <section className="catalog-hero" aria-labelledby="catalog-title">
        <span className="eyebrow">{messages.catalog.eyebrow}</span>
        <h1 id="catalog-title">{messages.catalog.title}</h1>
        <p>{messages.catalog.body}</p>
      </section>

      <section className="catalog-list" aria-label={messages.catalog.aria}>
        {allProducts.map((product) => {
          const price = product.prices[currentLocale];

          return (
            <article className="product" key={product.id}>
              <div className="product-media" />
              <div className="product-info">
                <span className="product-title">{product.title[currentLocale]}</span>
                <span className="price">
                  {price === null ? messages.commerce.soldOut : formatCurrency(price, currentLocale)}
                </span>
                <span className="badge">{product.badge[currentLocale]}</span>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
