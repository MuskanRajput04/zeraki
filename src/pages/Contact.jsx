import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Figure from '../art/Art'
import { Whatsapp, Instagram, Bag, Exchange, ChevD, ArrowR, Truck, Ruler, Sparkle } from '../components/Icons'
import { Reveal } from '../store'
import { BRAND, FAQS, EDITORIAL } from '../data/catalog'

const CARDS = [
  {
    Icon: Whatsapp, tone: 'sage', title: 'WhatsApp Us',
    text: 'Fastest way to reach a human. Sizing help, order updates, styling advice.',
    action: BRAND.whatsapp, href: BRAND.whatsappUrl, cta: 'Start a chat',
  },
  {
    Icon: Instagram, tone: 'blush', title: 'Instagram Support',
    text: 'DM us at @zerakijewels — we reply to every message, usually the same day.',
    action: '@zerakijewels', href: BRAND.instagram, cta: 'Message on Instagram',
  },
  {
    Icon: Bag, tone: 'butter', title: 'Order Help',
    text: 'Track a parcel, change an address, or check a delivery date before you buy.',
    action: 'Have your order ID ready', to: '#track', cta: 'Track my order',
  },
  {
    Icon: Exchange, tone: 'lavender', title: 'Returns & Exchanges',
    text: `${BRAND.policy.returnWindow} from delivery. Flat ${BRAND.policy.exchangeFee} exchange fee, defects replaced free.`,
    action: 'No forms, no phone queue', to: '#returns', cta: 'Read the policy',
  },
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="faqs">
      {FAQS.map((f, i) => (
        <li key={f.q} className={`faq ${open === i ? 'is-open' : ''}`}>
          <button type="button" className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{f.q}</span><ChevD size={19} />
          </button>
          <div className="faq__a" hidden={open !== i}><p>{f.a}</p></div>
        </li>
      ))}
    </ul>
  )
}

function Track() {
  const [id, setId] = useState('')
  const [res, setRes] = useState(null)
  return (
    <form className="track" id="track" onSubmit={(e) => { e.preventDefault(); setRes(id.trim().length > 3) }}>
      <p className="field-label">Track your order</p>
      <div className="track__row">
        <input className="field" placeholder="Order ID (e.g. ZK-104829)" value={id} onChange={(e) => setId(e.target.value)}
          aria-label="Order ID" />
        <button type="submit" className="btn">Track</button>
      </div>
      {res === true && (
        <div className="track__res">
          <p><strong>Out for delivery.</strong> Your parcel left the Surat hub and is with the courier.</p>
          <ol className="track__steps">
            {['Order placed', 'Packed', 'Shipped', 'Out for delivery', 'Delivered'].map((s, i) => (
              <li key={s} className={i <= 3 ? 'is-done' : ''}>{s}</li>
            ))}
          </ol>
        </div>
      )}
      {res === false && <p className="track__res track__res--bad">We could not find that order ID. Double-check your confirmation email, or WhatsApp us.</p>}
    </form>
  )
}

const POLICY_BLOCKS = [
  {
    id: 'shipping', Icon: Truck, title: 'Shipping',
    body: 'Free shipping on every domestic order, with no minimum. We ship pan-India through reputed couriers, including Tier-2 and Tier-3 cities. A tracking link is emailed the moment your parcel is packed. A small number of remote pincodes are not serviceable — the pincode checker on every product page tells you before you pay.',
  },
  {
    id: 'returns', Icon: Exchange, title: 'Returns & Exchanges',
    body: `You have ${BRAND.policy.returnWindow} from delivery to raise a return or exchange. Exchanges carry a flat ${BRAND.policy.exchangeFee} fee covering reverse logistics. Returns are issued as a credit note valid for ${BRAND.policy.creditValidity}; return shipping is deducted from it. Items must be unused with tags, invoice and packaging intact. Manufacturing or transit defects reported within ${BRAND.policy.defectWindow} of delivery are replaced free of charge.`,
  },
  {
    id: 'sizing', Icon: Ruler, title: 'Sizing',
    body: 'All Zeraki rings are adjustable and fit roughly US 5 to US 9. Bangles come in 2.4, 2.6 and 2.8 — measure the widest part of your hand with your thumb tucked into your palm. Every bangle and ring page carries the full size chart, and we will happily size it with you over WhatsApp.',
  },
  {
    id: 'care', Icon: Sparkle, title: 'Jewellery Care',
    body: 'Last on, first off. Put jewellery on after perfume and make-up, take it off before showering, swimming or sleeping. Wipe with a dry, soft cloth after wear and store each piece in the pouch it arrived in. Our anti-tarnish finish is built for daily wear — these habits simply make it last much longer.',
  },
]

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="contact">
      <header className="cthero">
        <div className="shell cthero__inner">
          <Reveal>
            <span className="eyebrow eyebrow--berry">Help & support</span>
            <h1 className="display cthero__h">We are right here.</h1>
            <p className="lead">
              A real person in Surat answers every message. {BRAND.hours}.
            </p>
            <p className="cthero__reply">{BRAND.replyTime}</p>
          </Reveal>
          <Reveal className="cthero__art" delay={2}>
            <Figure src={EDITORIAL.contactArt} tone="blush" ratio="wide" alt="Zeraki jewellery flat-lay" />
          </Reveal>
        </div>
      </header>

      <section className="section--sm" aria-labelledby="ways-h">
        <div className="shell">
          <h2 className="sr-only" id="ways-h">Ways to reach us</h2>
          <div className="ctcards">
            {CARDS.map((c, i) => {
              const Inner = (
                <>
                  <span className="ctcard__icon"><c.Icon size={24} sw={1.2} /></span>
                  <h3 className="h3">{c.title}</h3>
                  <p className="muted">{c.text}</p>
                  <p className="ctcard__action">{c.action}</p>
                  <span className="link-u">{c.cta} <ArrowR size={14} /></span>
                </>
              )
              return (
                <Reveal key={c.title} delay={(i % 4) + 1}>
                  {c.href ? (
                    <a className={`ctcard ctcard--${c.tone}`} href={c.href} target="_blank" rel="noreferrer noopener">{Inner}</a>
                  ) : (
                    <a className={`ctcard ctcard--${c.tone}`} href={c.to}>{Inner}</a>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section--sm" aria-labelledby="track-h">
        <div className="shell ctsplit">
          <Reveal>
            <h2 className="h2" id="track-h">Where is my order?</h2>
            <p className="lead">Enter your order ID and we will show you exactly where your parcel is.</p>
            <Track />
          </Reveal>
          <Reveal className="cthours" delay={1}>
            <h3 className="h3">Support hours</h3>
            <ul className="cthours__list">
              <li><span>Monday – Saturday</span><span>10:00 AM – 6:00 PM IST</span></li>
              <li><span>Sunday</span><span>Closed</span></li>
              <li><span>WhatsApp</span><span>Replies within ~3 hours</span></li>
            </ul>
            <a className="btn btn--block" href={BRAND.whatsappUrl} target="_blank" rel="noreferrer noopener">
              <Whatsapp size={17} /> WhatsApp {BRAND.whatsapp}
            </a>
            <a className="link-u cthours__mail" href={`mailto:${BRAND.email}`}>{BRAND.email} <ArrowR size={13} /></a>
            <p className="cthours__addr">{BRAND.address}</p>
          </Reveal>
        </div>
      </section>

      <section className="section--sm ctpolicies" aria-labelledby="pol-h">
        <div className="shell">
          <Reveal className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">The details</span>
              <h2 className="h2" id="pol-h">Policies, in plain language</h2>
            </div>
          </Reveal>
          <div className="ctpol__grid">
            {POLICY_BLOCKS.map(({ id, Icon, title, body }, i) => (
              <Reveal key={id} className="ctpol" id={id} delay={(i % 2) + 1}>
                <span className="ctpol__icon"><Icon size={22} sw={1.2} /></span>
                <h3 className="h3">{title}</h3>
                <p className="muted">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section--sm" id="faqs" aria-labelledby="faq-h">
        <div className="shell shell--narrow">
          <Reveal className="sec-head sec-head--center">
            <div className="sec-head__text">
              <span className="eyebrow">FAQs</span>
              <h2 className="h2" id="faq-h">Questions we get a lot</h2>
            </div>
          </Reveal>
          <Faq />
          <div className="ctfoot">
            <p className="muted">Still stuck?</p>
            <a className="btn" href={BRAND.whatsappUrl} target="_blank" rel="noreferrer noopener">Message us on WhatsApp</a>
            <Link to="/shop" className="link-u">Or keep browsing <ArrowR size={14} /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
