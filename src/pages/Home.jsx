import React from 'react'
import { Link } from 'react-router-dom'
import Figure, { Ornament } from '../art/Art'
import ProductCard from '../components/ProductCard'
import OfferBanner from '../components/OfferBanner'
import { useRail, RailNav } from '../components/Rail'
import { ArrowR, Sparkle, Exchange, Truck, Shield, Stars, Instagram } from '../components/Icons'
import { Reveal, inr } from '../store'
import {
  CATEGORIES, MOODS, CELEBRITIES, CELEB_ROSTER, REVIEWS, BRAND, EDITORIAL, IG_POSTS,
  newArrivals, bestSellers, byCategory,
} from '../data/catalog'

/* ================================================================== */
/*  HERO                                                              */
/* ================================================================== */

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="hero__wash" aria-hidden="true" />
      <div className="shell hero__inner">
        <div className="hero__copy">
          <Reveal as="p" className="eyebrow hero__eyebrow">Autumn / Winter · New Season</Reveal>
          <Reveal as="h1" className="display hero__h" id="hero-h" delay={1}>
            Every Shade<br />of You,<br />
            <span className="italic-accent hero__accent">Styled in Zeraki.</span>
          </Reveal>
          <Reveal as="p" className="lead hero__lead" delay={2}>
            Jewellery for every mood, every moment and every version of you.
          </Reveal>
          <Reveal className="hero__ctas" delay={3}>
            <Link to="/collection/new" className="btn btn--lg">Shop New Arrivals</Link>
            <Link to="/shop" className="btn btn--ghost btn--lg">Explore Collections</Link>
          </Reveal>
          <Reveal className="hero__strip" delay={4}>
            <span>18K gold plated</span><i /><span>Anti-tarnish</span><i /><span>Free shipping</span>
          </Reveal>
        </div>

        <div className="hero__art">
          <Reveal className="hero__figA" delay={1}>
            <Figure src={EDITORIAL.heroMain} tone="blush" ratio="tall" priority
              alt="Zeraki campaign portrait — a woman wearing a gold-plated Zeraki mangalsutra" />
          </Reveal>
          <Reveal className="hero__figB" delay={3}>
            <Figure src={EDITORIAL.heroDetail} tone="butter" ratio="square" priority
              alt="Close-up of a Zeraki karimani chain mangalsutra" />
          </Reveal>
          <Reveal className="hero__figC" delay={4}>
            <Figure src={EDITORIAL.heroMacro} tone="lavender" ratio="square"
              alt="Macro detail of a Zeraki mangalsutra pendant" />
          </Reveal>
          <div className="hero__blob hero__blob--1" aria-hidden="true" />
          <div className="hero__blob hero__blob--2" aria-hidden="true" />
          <Reveal className="hero__pill" delay={5}>
            <Stars value={5} size={12} />
            <span><strong>4.8</strong> average across 9,00,000+ orders</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  BRAND MARQUEE — one moving band, the page's only kinetic element  */
/* ================================================================== */

const MARQUEE = [
  'Every shade of her', '18K gold plated', 'Anti-tarnish', 'Free shipping across India',
  'Buy 1 Get 1 on selected styles', 'Designed in Surat', 'Cash on delivery',
]

function Marquee() {
  const run = [...MARQUEE, ...MARQUEE]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {run.map((t, i) => (
          <span className="marquee__item" key={i}>{t}<i /></span>
        ))}
      </div>
    </div>
  )
}

/* ================================================================== */
/*  CATEGORIES                                                        */
/* ================================================================== */

function Categories() {
  return (
    <section className="section cats" aria-labelledby="cats-h">
      <div className="shell">
        <Reveal className="sec-head sec-head--center">
          <div className="sec-head__text">
            <span className="eyebrow">Shop by category</span>
            <h2 className="h2" id="cats-h">Find Your Favourite</h2>
            <p className="sec-head__sub">A little sparkle for every side of you.</p>
          </div>
        </Reveal>

        <div className="cats__grid">
          {CATEGORIES.slice(0, 6).map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) + 1}>
              <Link to={`/c/${c.key}`} className={`catcard catcard--${c.tone}`}>
                <span className="catcard__media">
                  <Figure src={c.image} tone={c.tone} ratio="portrait" alt={`Shop Zeraki ${c.name}`} />
                  <span className="catcard__scrim" aria-hidden="true" />
                  <span className="catcard__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="catcard__overlay">
                    <span className="catcard__name">{c.name}</span>
                    <span className="catcard__go"><ArrowR size={15} /></span>
                  </span>
                </span>
                <span className="catcard__blurb">{c.blurb}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  PRODUCT RAIL SECTION                                              */
/* ================================================================== */

function ProductRail({ id, eyebrow, title, sub, items, to, toLabel = 'View all', tone }) {
  const rail = useRail()
  return (
    <section className={`section prail ${tone ? `prail--${tone}` : ''}`} aria-labelledby={`${id}-h`}>
      <div className="shell">
        <Reveal className="sec-head">
          <div className="sec-head__text">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h2" id={`${id}-h`}>{title}</h2>
            <p className="sec-head__sub">{sub}</p>
          </div>
          <div className="prail__tools">
            <Link to={to} className="link-u">{toLabel} <ArrowR size={14} /></Link>
            <RailNav onPrev={rail.prev} onNext={rail.next} state={rail.state} label={title} />
          </div>
        </Reveal>
      </div>

      <div className="shell">
        <div className="rail" ref={rail.ref} role="region" aria-label={title} tabIndex={0}>
          {items.map((p) => (
            <div className="rail__cell" key={p.id}><ProductCard product={p} /></div>
          ))}
          <div className="rail__cell rail__cell--end">
            <Link to={to} className="railend">
              <span className="railend__inner">
                <span className="h3">{toLabel}</span>
                <span className="railend__go"><ArrowR size={18} /></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  EDITORIAL BRAND MOMENT                                            */
/* ================================================================== */

function BrandMoment() {
  return (
    <section className="moment" aria-labelledby="moment-h">
      <div className="moment__grid">
        <Reveal className="moment__media">
          <Figure src={EDITORIAL.moment} tone="peach" ratio="cover"
            alt="Zeraki editorial — a woman in a red saree styled with gold jewellery" />
        </Reveal>
        <div className="moment__panel">
          <Reveal className="moment__copy">
            <Ornament className="moment__orn" />
            <span className="eyebrow eyebrow--berry">The Zeraki idea</span>
            <h2 className="h1" id="moment-h">Your Mood.<br />Your Colour.<br />Your Zeraki.</h2>
            <p className="moment__quote italic-accent">
              “Soft today. Bold tomorrow. Jewellery should move with every version of you.”
            </p>
            <p className="lead">
              We do not believe a woman has one style. She has a Tuesday style, a wedding style,
              a first-date style and a Sunday-morning style. Zeraki is built for all of them —
              designed in Surat, plated in 18K gold, finished anti-tarnish so it keeps up.
            </p>
            <Link to="/about" className="btn">Discover your style</Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  MOODS                                                             */
/* ================================================================== */

function Moods() {
  return (
    <section className="section moods" aria-labelledby="moods-h">
      <div className="shell">
        <Reveal className="sec-head sec-head--center">
          <div className="sec-head__text">
            <span className="eyebrow">Shop by mood</span>
            <h2 className="h2" id="moods-h">What&rsquo;s Your Mood Today?</h2>
            <p className="sec-head__sub">Six shades. Pick the one you woke up as.</p>
          </div>
        </Reveal>

        <div className="moods__grid">
          {MOODS.map((m, i) => (
            <Reveal key={m.key} delay={(i % 3) + 1}>
              <Link to={`/mood/${m.key}`} className={`moodcard moodcard--${m.tone}`}>
                <span className="moodcard__media">
                  <Figure src={m.image} tone={m.tone} ratio="tall" alt={`${m.name} jewellery edit`} />
                </span>
                <span className="moodcard__scrim" aria-hidden="true" />
                <span className="moodcard__body">
                  <span className="moodcard__no">{String(i + 1).padStart(2, '0')}</span>
                  <span className="moodcard__name">{m.name}</span>
                  <span className="moodcard__line">{m.line}</span>
                  <span className="moodcard__go">Shop the mood <ArrowR size={15} /></span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  MANGALSUTRA FEATURE                                               */
/* ================================================================== */

function MangalsutraFeature() {
  const picks = byCategory('mangalsutra').slice(0, 3)
  return (
    <section className="mfeat" aria-labelledby="mfeat-h">
      <div className="shell mfeat__inner">
        <div className="mfeat__left">
          <Reveal>
            <span className="eyebrow eyebrow--berry">The Mangalsutra edit</span>
            <h2 className="h1 mfeat__h" id="mfeat-h">Tradition,<br />Styled Your Way.</h2>
            <p className="lead">
              Timeless meaning. Modern silhouettes. Meet mangalsutras made for the woman of today —
              short enough for a shirt collar, considered enough for your mother-in-law.
            </p>
            <Link to="/c/mangalsutra" className="btn">Shop mangalsutra</Link>
          </Reveal>

          <Reveal className="mfeat__picks" delay={2}>
            {picks.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="mpick">
                <span className="mpick__img">
                  <Figure src={p.image} tone={p.tone} ratio="square" alt={p.name} />
                </span>
                <span className="mpick__body">
                  <span className="mpick__name">{p.shortName}</span>
                  <span className="mpick__price">{inr(p.price)}</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>

        <Reveal className="mfeat__right" delay={1}>
          <Figure src={EDITORIAL.mangalFeature} tone="blush" ratio="tall"
            alt="A woman wearing a Zeraki mangalsutra with contemporary styling" />
          <span className="mfeat__caption">18K gold plated · anti-tarnish · daily wear</span>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  EDITORIAL CATEGORY COLLAGE                                        */
/* ================================================================== */

function Collage() {
  const cat = (k) => CATEGORIES.find((c) => c.key === k)
  return (
    <section className="section collage" aria-labelledby="collage-h">
      <div className="shell">
        <Reveal className="sec-head">
          <div className="sec-head__text">
            <span className="eyebrow">The look book</span>
            <h2 className="h2" id="collage-h">Four Ways to Wear It</h2>
            <p className="sec-head__sub">Earrings, bangles, rings, necklaces — shot the way you actually style them.</p>
          </div>
          <Link to="/shop" className="link-u">Shop everything <ArrowR size={14} /></Link>
        </Reveal>

        <div className="collage__grid">
          <Reveal className="cg cg--a">
            <Link to="/c/earrings">
              <Figure src={EDITORIAL.collageEarrings} tone="butter" ratio="cover"
                alt="Editorial portrait wearing Zeraki statement earrings" />
              <span className="cg__label"><em>01</em> Earrings <ArrowR size={15} /></span>
            </Link>
          </Reveal>

          <Reveal className="cg cg--b" delay={1}>
            <Link to="/c/bangles">
              <Figure src={cat('bangles').image} tone="peach" ratio="cover" alt="Zeraki gold-plated bangles" />
              <span className="cg__label"><em>02</em> Bangles <ArrowR size={15} /></span>
            </Link>
          </Reveal>

          <Reveal className="cg cg--c" delay={2}>
            <div className="cg__block">
              <p className="italic-accent cg__quote">“One shade is never enough.”</p>
              <p className="cg__blocksub">Mix metals, stack rings, layer chains. There are no rules, only outfits.</p>
              <Link to="/shop" className="link-u">Start styling <ArrowR size={14} /></Link>
            </div>
          </Reveal>

          <Reveal className="cg cg--d" delay={1}>
            <Link to="/c/rings">
              <Figure src={cat('rings').image} tone="lavender" ratio="cover" alt="Zeraki adjustable rings" />
              <span className="cg__label"><em>03</em> Rings <ArrowR size={15} /></span>
            </Link>
          </Reveal>

          <Reveal className="cg cg--e" delay={2}>
            <Link to="/c/necklaces">
              <Figure src={EDITORIAL.collageNecklace} tone="powder" ratio="cover"
                alt="Model wearing a Zeraki necklace set" />
              <span className="cg__label"><em>04</em> Necklaces <ArrowR size={15} /></span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  CELEBRITIES                                                       */
/* ================================================================== */

function Spotlight() {
  const rail = useRail()
  return (
    <section className="section spot" aria-labelledby="spot-h">
      <div className="shell">
        <Reveal className="sec-head">
          <div className="sec-head__text">
            <span className="eyebrow eyebrow--berry">In the spotlight</span>
            <h2 className="h2" id="spot-h">Spotted in Zeraki</h2>
            <p className="sec-head__sub">The pieces our favourite women reach for on and off camera.</p>
          </div>
          <RailNav onPrev={rail.prev} onNext={rail.next} state={rail.state} label="Celebrities" />
        </Reveal>
      </div>

      <div className="shell">
        <div className="rail spot__rail" ref={rail.ref} role="region" aria-label="Celebrities wearing Zeraki" tabIndex={0}>
          {CELEBRITIES.map((c, i) => (
            <figure className="celeb" key={c.img}>
              <div className="celeb__media">
                <Figure src={c.img} tone="blush" ratio="tall" alt={`Zeraki campaign — ${c.wearing.toLowerCase()}`} />
              </div>
              <figcaption className="celeb__cap">
                <span className="celeb__no">{String(i + 1).padStart(2, '0')}</span>
                <span className="celeb__name">{c.wearing}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="shell">
        <Reveal className="spot__roster">
          <span className="spot__rosterLabel">Worn by</span>
          <p>{CELEB_ROSTER.join(' · ')}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  WHY ZERAKI                                                        */
/* ================================================================== */

const WHY = [
  { Icon: Sparkle, title: 'Trend-Led Designs', text: 'New styles every month, drawn from what women are actually wearing right now.' },
  { Icon: Exchange, title: 'Easy Exchanges', text: `${BRAND.policy.returnWindow} to change your mind, with a flat ${BRAND.policy.exchangeFee} exchange fee.` },
  { Icon: Truck, title: 'Free Shipping', text: 'On every order across India, including Tier-2 and Tier-3 cities.' },
  { Icon: Shield, title: 'Secure Payments & COD', text: 'UPI, cards, net banking or cash on delivery. Extra ₹50 off when you prepay.' },
]

function Why() {
  return (
    <section className="section--sm why" id="why" aria-labelledby="why-h">
      <div className="shell">
        <h2 className="sr-only" id="why-h">Why shop with Zeraki</h2>
        <div className="why__grid">
          {WHY.map(({ Icon, title, text }, i) => (
            <Reveal key={title} className="why__item" delay={i + 1}>
              <span className="why__icon"><Icon size={26} sw={1.1} /></span>
              <div>
                <h3 className="why__title">{title}</h3>
                <p className="why__text">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SOCIAL PROOF                                                      */
/* ================================================================== */

function Community() {
  return (
    <section className="section community" aria-labelledby="comm-h">
      <div className="shell">
        <Reveal className="sec-head sec-head--center">
          <div className="sec-head__text">
            <span className="eyebrow">Reviews</span>
            <h2 className="h2" id="comm-h">Loved by the Zeraki Community</h2>
            <p className="sec-head__sub">
              4.8 average rating across {BRAND.stats[0].value} orders delivered.
            </p>
          </div>
        </Reveal>

        <div className="community__masonry">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} className={`rev rev--${r.tone}`} delay={(i % 4) + 1}>
              <div className="rev__head">
                <Stars value={r.stars} size={13} />
                <span className="rev__verified">Verified buyer</span>
              </div>
              <p className="rev__text">{r.text}</p>
              {i % 4 === 1 && (
                <div className="rev__ugc">
                  <Figure src={r.img} tone={r.tone} ratio="wide" alt={`Customer photo from ${r.name}`} />
                </div>
              )}
              <div className="rev__foot">
                <span className="rev__name">{r.name}</span>
                <span className="rev__city">{r.city}</span>
                <span className="rev__prod">{r.product}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  INSTAGRAM                                                         */
/* ================================================================== */

function InstagramGrid() {
  return (
    <section className="section insta" aria-labelledby="insta-h">
      <div className="shell">
        <Reveal className="sec-head sec-head--center">
          <div className="sec-head__text">
            <span className="eyebrow">Community</span>
            <h2 className="h2" id="insta-h">{BRAND.handle}</h2>
            <p className="sec-head__sub">Wear it. Style it. Make it yours.</p>
          </div>
        </Reveal>

        <div className="insta__grid">
          {IG_POSTS.map((src, i) => (
            <a key={src} className="igtile" href={BRAND.instagram} target="_blank" rel="noreferrer noopener"
              aria-label={`Zeraki on Instagram — look ${i + 1}`}>
              <Figure src={src} tone="blush" ratio="square" alt="" />
              <span className="igtile__ov"><Instagram size={22} /></span>
            </a>
          ))}
        </div>

        <Reveal className="insta__cta">
          <a className="btn btn--ghost" href={BRAND.instagram} target="_blank" rel="noreferrer noopener">
            <Instagram size={16} /> Follow {BRAND.handle}
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================== */

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <OfferBanner />
      <Categories />
      <ProductRail
        id="new" eyebrow="New arrivals" title="Just Dropped"
        sub="Fresh styles, new obsessions." items={newArrivals().slice(0, 10)}
        to="/collection/new" toLabel="Shop new in"
      />
      <BrandMoment />
      <Moods />
      <ProductRail
        id="best" eyebrow="Best sellers" title="Currently Crushing On"
        sub="The pieces our community keeps coming back for." items={bestSellers().slice(0, 10)}
        to="/collection/best" toLabel="Shop bestsellers" tone="cream"
      />
      <MangalsutraFeature />
      <Collage />
      <Spotlight />
      <Why />
      <Community />
      <InstagramGrid />
    </>
  )
}
