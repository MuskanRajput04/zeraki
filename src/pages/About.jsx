import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Figure, { Ornament } from '../art/Art'
import { ArrowR, Sparkle, Shield, Exchange, Truck } from '../components/Icons'
import { Reveal } from '../store'
import { BRAND, MOODS, EDITORIAL } from '../data/catalog'

const TIMELINE = [
  { year: '2023', title: 'A workshop in Surat', text: 'Harshit Bhandari and Mustafa Bedawala start Zeraki with one belief: fashion jewellery in India was either cheap or precious, with almost nothing in between.' },
  { year: '2024', title: 'Anti-tarnish, non-negotiable', text: 'We rebuild the plating process around a hypoallergenic base and an anti-tarnish seal, so a ₹399 ring can survive an Indian summer.' },
  { year: '2025', title: 'The mangalsutra, rewritten', text: 'Shorter chains, lighter pendants, silhouettes that work with a shirt collar. It becomes the category we are known for.' },
  { year: '2026', title: 'Every Shade of Her', text: `${BRAND.stats[0].value} orders later, we stop describing ourselves as a jewellery catalogue and start designing for moods instead of occasions.` },
]

const VALUES = [
  { Icon: Sparkle, title: 'Designed, not sourced', text: 'Every silhouette starts as a sketch in our own studio. We do not resell a catalogue somebody else drew.' },
  { Icon: Shield, title: 'Skin-safe by default', text: 'Nickel-free, lead-free, hypoallergenic bases. If it cannot be worn every day, it does not ship.' },
  { Icon: Exchange, title: 'Honest after-sales', text: `${BRAND.policy.returnWindow} to exchange, defects replaced free within ${BRAND.policy.defectWindow}, and a real person on WhatsApp.` },
  { Icon: Truck, title: 'All of India, no fine print', text: 'Free shipping to every serviceable pincode — metros, Tier-2, Tier-3, the same promise.' },
]

const JOURNAL = [
  { tone: 'blush', tag: 'Styling', title: 'How to layer three chains without tangling any of them' },
  { tone: 'butter', tag: 'Care', title: 'The five-second habit that doubles the life of gold plating' },
  { tone: 'powder', tag: 'Culture', title: 'The modern mangalsutra: tradition that finally fits a work wardrobe' },
]

export default function About() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="about">
      {/* ---------- hero ---------- */}
      <header className="abhero">
        <div className="shell abhero__inner">
          <Reveal className="abhero__copy">
            <span className="eyebrow eyebrow--berry">Our story</span>
            <h1 className="display abhero__h">
              Jewellery Made for{' '}
              <span className="italic-accent">Every Version of Her.</span>
            </h1>
            <p className="lead">
              Zeraki began in {BRAND.founded} in Surat, with a simple frustration: a woman should not have to
              choose between jewellery she can afford and jewellery she actually wants to wear twice.
            </p>
          </Reveal>
          <Reveal className="abhero__art" delay={2}>
            <Figure src={EDITORIAL.aboutHero} tone="blush" ratio="tall" priority alt="Zeraki brand portrait" />
            <div className="abhero__art2">
              <Figure src={EDITORIAL.aboutDetail} tone="butter" ratio="square" alt="Zeraki jewellery detail" />
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------- stats ---------- */}
      <section className="abstats" aria-label="Zeraki in numbers">
        <div className="shell abstats__grid">
          {BRAND.stats.map((s, i) => (
            <Reveal key={s.label} className="abstat" delay={i + 1}>
              <span className="abstat__v">{s.value}</span>
              <span className="abstat__l">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- philosophy ---------- */}
      <section className="section abphil" aria-labelledby="phil-h">
        <div className="shell abphil__grid">
          <Reveal className="abphil__media">
            <Figure src={EDITORIAL.aboutStudio} tone="peach" ratio="cover" alt="Zeraki design studio editorial" />
          </Reveal>
          <Reveal className="abphil__copy" delay={1}>
            <Ornament className="abphil__orn" />
            <span className="eyebrow">Design philosophy</span>
            <h2 className="h1" id="phil-h">We design for<br />moods, not<br />occasions.</h2>
            <p className="lead">
              Most jewellery brands organise the world by event — bridal, festive, party.
              We think women organise it differently. You do not wake up and think
              &ldquo;today is a party&rdquo;; you wake up feeling soft, or sharp, or like being seen.
            </p>
            <p className="lead">
              So Zeraki is built around six shades, and every piece we draw has to belong
              to at least one of them honestly. If it does not, we do not make it.
            </p>
            <div className="abphil__moods">
              {MOODS.map((m) => (
                <Link key={m.key} to={`/mood/${m.key}`} className={`moodchip moodchip--${m.tone}`}>{m.name}</Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- timeline ---------- */}
      <section className="section abtime" aria-labelledby="time-h">
        <div className="shell">
          <Reveal className="sec-head sec-head--center">
            <div className="sec-head__text">
              <span className="eyebrow">The road so far</span>
              <h2 className="h2" id="time-h">Four Years, One Idea</h2>
            </div>
          </Reveal>
          <ol className="tline">
            {TIMELINE.map((t, i) => (
              <Reveal as="li" key={t.year} className="tline__item" delay={(i % 4) + 1}>
                <span className="tline__year">{t.year}</span>
                <span className="tline__dot" aria-hidden="true" />
                <div className="tline__body">
                  <h3 className="h3">{t.title}</h3>
                  <p className="muted">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section className="section abvals" id="why" aria-labelledby="vals-h">
        <div className="shell">
          <Reveal className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Why Zeraki</span>
              <h2 className="h2" id="vals-h">What we refuse to compromise</h2>
            </div>
          </Reveal>
          <div className="abvals__grid">
            {VALUES.map(({ Icon, title, text }, i) => (
              <Reveal key={title} className="abval" delay={(i % 4) + 1}>
                <span className="abval__icon"><Icon size={26} sw={1.1} /></span>
                <h3 className="h3">{title}</h3>
                <p className="muted">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- team ---------- */}
      <section className="section abteam" aria-labelledby="team-h">
        <div className="shell abteam__grid">
          <Reveal className="abteam__copy">
            <span className="eyebrow">The people</span>
            <h2 className="h2" id="team-h">Built by {BRAND.stats[2].value} people,<br />{BRAND.stats[3].value} of them women.</h2>
            <p className="lead">
              Design, quality control, packing, photography and customer care all sit under one roof in Surat.
              The person who answers your WhatsApp works twenty metres from the person who finished your mangalsutra.
            </p>
            <p className="muted">Founded by {BRAND.founders}.</p>
            <Link to="/contact" className="btn btn--ghost">Talk to the team</Link>
          </Reveal>
          <div className="abteam__art">
            {[EDITORIAL.moment, EDITORIAL.collageEarrings, EDITORIAL.mangalFeature, EDITORIAL.collageNecklace].map((src, i) => (
              <Reveal key={src} delay={i + 1}>
                <Figure src={src} tone={['blush', 'sage', 'butter', 'lavender'][i]} ratio="portrait" alt="Zeraki campaign photography" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- journal ---------- */}
      <section className="section abjournal" id="journal" aria-labelledby="jrn-h">
        <div className="shell">
          <Reveal className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">The journal</span>
              <h2 className="h2" id="jrn-h">Notes on wearing it well</h2>
            </div>
            <Link to="/contact" className="link-u">Read the journal <ArrowR size={14} /></Link>
          </Reveal>
          <div className="abjournal__grid">
            {JOURNAL.map((j, i) => (
              <Reveal key={j.title} delay={i + 1}>
                <article className="jcard">
                  <Figure src={EDITORIAL.journal[i % EDITORIAL.journal.length]} tone={j.tone} ratio="wide" alt="" />
                  <p className="jcard__tag">{j.tag}</p>
                  <h3 className="h3 jcard__title">{j.title}</h3>
                  <span className="link-u">Read <ArrowR size={13} /></span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- closing ---------- */}
      <section className="abclose">
        <div className="shell abclose__inner">
          <Reveal>
            <Ornament className="abclose__orn" />
            <h2 className="h1 abclose__h">Which shade are you today?</h2>
            <div className="abclose__ctas">
              <Link to="/shop" className="btn btn--light btn--lg">Shop all jewellery</Link>
              <Link to="/collection/new" className="btn btn--outline-light btn--lg">See what is new</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
