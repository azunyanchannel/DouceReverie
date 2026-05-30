"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/currency";
import { localeLabels, localeNames, locales, type getMessages, type Locale } from "@/lib/i18n";
import type { Product } from "@/lib/products";

type Messages = Awaited<ReturnType<typeof getMessages>>;

type StorefrontProps = {
  bestSellerProducts: Product[];
  currentLocale: Locale;
  featuredProducts: Product[];
  messages: Messages;
};

export default function Storefront({
  bestSellerProducts,
  currentLocale,
  featuredProducts,
  messages
}: StorefrontProps) {
  const [cartCount, setCartCount] = useState(2);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, searchOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function quickAdd() {
    setCartCount((count) => count + 1);
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 1400);
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        currentLocale={currentLocale}
        messages={messages}
        onMenuOpen={() => setDrawerOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
        scrolled={scrolled}
      />

      <main id="top">
        <section className="hero" aria-label={messages.hero.aria}>
          <div className="hero-copy">
            <p className="kicker">{messages.hero.kicker}</p>
            <h1>{messages.hero.title}</h1>
            <p>{messages.hero.body}</p>
            <a className="cta" href="#new-in">
              {messages.hero.cta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <Manifesto messages={messages} />

        <section className="section story" id="new-in">
          <div className="story-copy">
            <span className="eyebrow">{messages.story.eyebrow}</span>
            <h2>{messages.story.title}</h2>
            <p>{messages.story.body}</p>
          </div>
          <div className="featured" aria-label={messages.story.productsAria}>
            {featuredProducts.map((product) => (
              <ProductCard
                currentLocale={currentLocale}
                key={product.id}
                messages={messages}
                onQuickAdd={quickAdd}
                product={product}
              />
            ))}
          </div>
          <div className="section-link-row">
            <Link className="more-link" href={`/${currentLocale}/products`}>
              {messages.commerce.viewMore} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="section campaign" aria-label={messages.campaign.aria}>
          <div className="banner">
            <div className="banner-inner">
              <span className="eyebrow">{messages.campaign.eyebrow}</span>
              <h2>{messages.campaign.title}</h2>
              <p>{messages.campaign.body}</p>
              <a className="light-link" href="#best">
                {messages.campaign.cta}
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="best">
          <div className="center-head">
            <span className="eyebrow">{messages.best.eyebrow}</span>
            <h2>{messages.best.title}</h2>
          </div>
          <div className="grid-products" aria-label={messages.best.productsAria}>
            {bestSellerProducts.map((product) => (
              <ProductCard
                currentLocale={currentLocale}
                key={product.id}
                messages={messages}
                onQuickAdd={quickAdd}
                product={product}
              />
            ))}
          </div>
          <div className="section-link-row">
            <Link className="more-link" href={`/${currentLocale}/products`}>
              {messages.commerce.viewMore} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="section journal" aria-label={messages.journal.aria}>
          <div className="journal-head">
            <div>
              <span className="eyebrow">{messages.journal.eyebrow}</span>
              <h2>{messages.journal.title}</h2>
            </div>
            <a className="light-link" style={{ color: "var(--fg)" }} href="#top">
              {messages.journal.follow}
            </a>
          </div>
          <div className="journal-strip">
            {messages.journal.tiles.map((tile) => (
              <a className="journal-tile" href="#top" key={tile}>
                <span>{tile}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <aside className={`drawer ${drawerOpen ? "is-open" : ""}`} aria-hidden={!drawerOpen} id="drawer">
        <button className="shade" type="button" aria-label={messages.nav.menuClose} onClick={() => setDrawerOpen(false)} />
        <div className="drawer-panel">
          <button className="icon-btn" type="button" aria-label={messages.nav.menuClose} onClick={() => setDrawerOpen(false)}>
            ×
          </button>
          <nav aria-label={messages.nav.mainMenu}>
            <a href="#new-in" onClick={() => setDrawerOpen(false)}>New In</a>
            <a href="#best" onClick={() => setDrawerOpen(false)}>Best Seller</a>
            <a href="#top" onClick={() => setDrawerOpen(false)}>Collection</a>
            <a href="#top" onClick={() => setDrawerOpen(false)}>Journal</a>
          </nav>
        </div>
      </aside>

      <section className={`search-overlay ${searchOpen ? "is-open" : ""}`} aria-hidden={!searchOpen}>
        <button className="shade" type="button" aria-label={messages.nav.searchClose} onClick={() => setSearchOpen(false)} />
        <div className="search-box" role="dialog" aria-modal="true" aria-label={messages.search.aria}>
          <div className="search-row">
            <input
              type="search"
              placeholder={messages.search.placeholder}
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <button className="icon-btn" type="button" aria-label={messages.nav.searchClose} onClick={() => setSearchOpen(false)}>
              ×
            </button>
          </div>
          <div className="suggestions" aria-label={messages.search.suggestions}>
            {messages.search.items.map((item) => (
              <button key={item} type="button" onClick={() => setSearchValue(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className={`toast ${toastVisible ? "is-visible" : ""}`} role="status" aria-live="polite">
        {messages.commerce.toast}
      </div>
    </>
  );
}

type HeaderProps = {
  cartCount: number;
  currentLocale: Locale;
  messages: Messages;
  onMenuOpen: () => void;
  onSearchOpen: () => void;
  scrolled: boolean;
};

function Header({ cartCount, currentLocale, messages, onMenuOpen, onSearchOpen, scrolled }: HeaderProps) {
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-left">
        <button className="icon-btn" type="button" aria-label={messages.nav.menuOpen} onClick={onMenuOpen}>
          <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
            <path d="M0 1h18M0 11h18" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
      <Link className="brand" href={`/${currentLocale}`} aria-label="Douce Rêverie home">
        Douce Rêverie
      </Link>
      <div className="nav-right">
        <button className="text-btn" type="button">{messages.nav.account}</button>
        <nav className="locale-switch" aria-label="Language">
          {locales.map((locale) => (
            <Link
              aria-current={locale === currentLocale ? "page" : undefined}
              aria-label={localeNames[locale]}
              className={`locale-link ${locale === currentLocale ? "is-active" : ""}`}
              href={`/${locale}`}
              key={locale}
            >
              {localeLabels[locale]}
            </Link>
          ))}
        </nav>
        <button className="icon-btn" type="button" aria-label={messages.nav.searchOpen} onClick={onSearchOpen}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <circle cx="8" cy="8" r="5.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <path d="m12.2 12.2 4 4" fill="none" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </button>
        <button className="icon-btn bag-btn" type="button" aria-label={messages.nav.bag}>
          <svg width="17" height="18" viewBox="0 0 17 18" aria-hidden="true">
            <path d="M3.2 5.7h10.6l.8 10.4H2.4L3.2 5.7Z" fill="none" stroke="currentColor" strokeWidth="1.25" />
            <path d="M5.8 5.7c0-2 1-3.3 2.7-3.3s2.7 1.3 2.7 3.3" fill="none" stroke="currentColor" strokeWidth="1.25" />
          </svg>
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

function Manifesto({ messages }: { messages: Messages }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="manifesto" aria-label={messages.manifesto.aria}>
      <div className="manifesto-inner">
        <span className="manifesto-label">{messages.manifesto.label}</span>
        <p className="manifesto-lines">
          {messages.manifesto.lines.map((line, index) => (
            <motion.span
              className="manifesto-line"
              initial={reduceMotion ? false : { opacity: 0, y: 30, filter: "blur(8px)" }}
              key={line}
              transition={{ delay: index * 0.115, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ amount: 0.36, margin: "0px 0px -18% 0px" }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            >
              {line}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}

type ProductCardProps = {
  currentLocale: Locale;
  messages: Messages;
  onQuickAdd: () => void;
  product: Product;
};

function ProductCard({ currentLocale, messages, onQuickAdd, product }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const price = product.prices[currentLocale];

  return (
    <article className="product">
      <div className="product-media">
        <div className="product-actions">
          <button className="quick" type="button" onClick={onQuickAdd}>
            {messages.commerce.quickAdd}
          </button>
          <button
            className={`wish ${wishlisted ? "is-active" : ""}`}
            type="button"
            aria-label={messages.commerce.wishlist}
            onClick={() => setWishlisted((value) => !value)}
          >
            {wishlisted ? "♥" : "♡"}
          </button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-title">{product.title[currentLocale]}</span>
        <span className="price">{price === null ? messages.commerce.soldOut : formatCurrency(price, currentLocale)}</span>
        <span className="badge">{product.badge[currentLocale]}</span>
      </div>
    </article>
  );
}
