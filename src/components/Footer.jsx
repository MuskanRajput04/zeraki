import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Ornament } from '../art/Art'
import { Instagram, Facebook, Pin, Whatsapp, ChevD, ArrowR, Shield } from './Icons'
import { BRAND, POPULAR_SEARCHES } from '../data/catalog'
import { Reveal } from '../store'

const COLS = [
  {
    title: 'Shop',
    links: [
      ['New Arrivals', '/collection/new'],
      ['Best Sellers', '/collection/best'],
      ['Mangalsutra', '/c/mangalsutra'],
      ['Earrings', '/c/earrings'],
      ['Bangles', '/c/bangles'],
      ['Rings', '/c/rings'],
      ['Necklaces', '/c/necklaces'],
      ['Gold Chains', '/c/chains'],
    ],
  },
  {
    title: 'Help',
    links: [
      ['Contact Us', '/contact'],
      ['Shipping', '/contact#shipping'],
      ['Returns & Exchanges', '/contact#returns'],
      ['FAQs', '/contact#faqs'],
      ['Track Order', '/contact#track'],
      ['Size Guide', '/contact#sizing'],
    ],
  },
  {
    title: 'About',
    links: [
      ['Our Story', '/about'],
      ['Why Zeraki', '/about#why'],
      ['Jewellery Care', '/contact#care'],
      ['Blogs', '/about#journal'],
    ],
  },
]

function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setDone(true)
  }
  return (
    <section className="news" aria-labelledby="news-h">
      <div className="shell news__inner">
        <Reveal className="news__copy">
          <p className="eyebrow eyebrow--berry">The list</p>
          <h2 className="h2" id="news-h">Join the Zeraki Girls</h2>
          <p className="lead">New drops, styling inspiration and special surprises — straight to your inbox.</p>
        </Reveal>

        <Reveal className="news__formwrap" delay={1}>
          {done ? (
            <div className="news__done">
              <p className="h3">You are on the list.</p>
              <p className="muted">Look out for our next drop — and a little welcome surprise.</p>
            </div>
          ) : (
            <form className="news__form" onSubmit={submit}>
              <label className="sr-only" htmlFor="news-email">Email address</label>
              <input
                id="news-email" className="field" type="email" required
                placeholder="you@email.com" value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn" type="submit">Join the list</button>
            </form>
          )}
          <p className="news__fine">No spam, ever. Unsubscribe in one tap.</p>
        </Reveal>

        <div className="news__deco" aria-hidden="true">
          <Ornament className="news__orn" />
        </div>
      </div>
    </section>
  )
}

function PopularSearches() {
  const [open, setOpen] = useState(false)
  return (
    <div className="popsearch">
      <button type="button" className="popsearch__toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="popsearch-body">
        <span>Popular searches</span>
        <ChevD size={17} className={open ? 'is-flip' : ''} />
      </button>
      <div id="popsearch-body" className="popsearch__body" hidden={!open}>
        <div className="popsearch__grid">
          {Object.entries(POPULAR_SEARCHES).map(([group, items]) => (
            <div key={group}>
              <p className="popsearch__group">{group}</p>
              <ul>
                {items.map((i) => <li key={i}><Link to="/shop">{i}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <>
      <Newsletter />
      <footer className="ftr">
        <div className="shell">
          <div className="ftr__top">
            <div className="ftr__brand">
              <Link to="/" className="logo logo--footer">
                <span className="logo__mark" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none"><path d="M16 2.5l4.4 9.1 9.1 4.4-9.1 4.4-4.4 9.1-4.4-9.1L2.5 16l9.1-4.4z" stroke="currentColor" strokeWidth="1.3" /><circle cx="16" cy="16" r="2.6" fill="currentColor" /></svg>
                </span>
                <span className="logo__type">
                  <span className="logo__word">ZERAKI</span>
                  <span className="logo__sub">Every Shade of Her</span>
                </span>
              </Link>
              <p className="ftr__pitch">
                Fashion jewellery designed in Surat for the woman who refuses to be one thing.
                18K gold plated, anti-tarnish, and made to be worn every single day.
              </p>
              <div className="ftr__social">
                <a href={BRAND.instagram} target="_blank" rel="noreferrer noopener" aria-label="Zeraki Jewels on Instagram"><Instagram size={19} /></a>
                <a href={BRAND.facebook} target="_blank" rel="noreferrer noopener" aria-label="Zeraki Jewels on Facebook"><Facebook size={19} /></a>
                <a href={BRAND.instagram} target="_blank" rel="noreferrer noopener" aria-label="Zeraki Jewels on Pinterest"><Pin size={19} /></a>
              </div>
            </div>

            {COLS.map((c) => (
              <nav key={c.title} className="ftr__col" aria-label={c.title}>
                <p className="ftr__coltitle">{c.title}</p>
                <ul>
                  {c.links.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}
                </ul>
              </nav>
            ))}

            <div className="ftr__col ftr__col--support">
              <p className="ftr__coltitle">Talk to us</p>
              <a className="ftr__wa" href={BRAND.whatsappUrl} target="_blank" rel="noreferrer noopener">
                <Whatsapp size={18} /> {BRAND.whatsapp}
              </a>
              <p className="ftr__hours">{BRAND.hours}</p>
              <p className="ftr__hours faint">{BRAND.replyTime}</p>
              <a className="link-u ftr__mail" href={`mailto:${BRAND.email}`}>{BRAND.email} <ArrowR size={14} /></a>
            </div>
          </div>

          <PopularSearches />

          <div className="ftr__pay">
            <p className="ftr__paytitle"><Shield size={16} /> Secure payments</p>
            <ul className="ftr__paylist" aria-label="Accepted payment methods">
              {['UPI', 'Visa', 'Mastercard', 'RuPay', 'Net Banking', 'Cash on Delivery'].map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="ftr__legal">
            <p>© {new Date().getFullYear()} {BRAND.entity}. All rights reserved.</p>
            <ul>
              <li><Link to="/contact#returns">Returns & Exchanges</Link></li>
              <li><Link to="/contact#shipping">Shipping Policy</Link></li>
              <li><Link to="/contact">Privacy</Link></li>
              <li><Link to="/contact">Terms</Link></li>
            </ul>
          </div>
          <p className="ftr__addr">{BRAND.address}</p>
        </div>
      </footer>
    </>
  )
}
