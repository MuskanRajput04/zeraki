import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Figure from '../art/Art'
import { Search, User, Heart, Bag, Menu, Close, ChevD, ArrowR } from './Icons'
import { useShop, useLockBody } from '../store'
import { CATEGORIES, COLLECTIONS, MOODS, EDITORIAL } from '../data/catalog'

/* ------------------------------------------------------------------ */
/*  Announcement bar — exactly ONE message on screen at a time.        */
/* ------------------------------------------------------------------ */

const ANNOUNCEMENTS = [
  { text: 'Buy 1 Get 1 on selected styles', cta: 'Explore now', to: '/collection/bogo' },
  { text: 'Free shipping across India · COD available', cta: 'Shop all', to: '/shop' },
  { text: 'Extra ₹50 off on prepaid orders', cta: 'Shop new in', to: '/collection/new' },
]

function Announce() {
  const [i, setI] = useState(0)
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setInterval(() => {
      setShow(false)
      setTimeout(() => { setI((n) => (n + 1) % ANNOUNCEMENTS.length); setShow(true) }, 420)
    }, 6200)
    return () => clearInterval(t)
  }, [])
  const a = ANNOUNCEMENTS[i]
  return (
    <div className="announce">
      <p className={`announce__msg ${show ? 'is-in' : ''}`} aria-live="polite">
        {a.text}
        <span className="announce__dot" aria-hidden="true">•</span>
        <Link to={a.to} className="announce__cta">{a.cta}</Link>
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Nav model                                                          */
/* ------------------------------------------------------------------ */

const sub = {
  mangalsutra: ['Short mangalsutra', 'Modern minimalist', 'Traditional', 'Karimani chain', 'Mangalsutra bracelet', 'Mangalsutra with earrings'],
  earrings: ['Daily wear studs', 'Jhumkas', 'Long earrings', 'Ear cuffs', 'Maharashtrian earrings', 'Maang tikka & nath'],
  bangles: ['Bangles set of 2', 'Bangles set of 4', 'Bracelets', 'Evil eye bracelet', 'Antique bangles', 'Kada'],
  rings: ['Adjustable rings', 'Stackable rings', 'Statement rings', 'Couple rings', 'Cocktail rings', 'Everyday bands'],
  necklaces: ['Temple necklace sets', 'Short necklaces', 'Long necklaces', 'Pendant sets', 'Diamond-look sets', 'Gold chains'],
}

const NAV = [
  { label: 'New In', to: '/collection/new' },
  { label: 'Mangalsutra', to: '/c/mangalsutra', mega: 'mangalsutra' },
  { label: 'Earrings', to: '/c/earrings', mega: 'earrings' },
  { label: 'Bangles', to: '/c/bangles', mega: 'bangles' },
  { label: 'Rings', to: '/c/rings', mega: 'rings' },
  { label: 'Necklaces', to: '/c/necklaces', mega: 'necklaces' },
  { label: 'Collections', to: '/shop', mega: 'collections' },
  { label: 'Shop All', to: '/shop' },
]

/* ------------------------------------------------------------------ */

function MegaPanel({ id, onClose }) {
  if (id === 'collections') {
    return (
      <div className="mega mega--collections">
        <div className="mega__inner shell">
          <div className="mega__col">
            <p className="mega__title">Edits</p>
            <ul className="mega__links">
              {COLLECTIONS.map((c) => (
                <li key={c.key}><Link to={`/collection/${c.key}`} onClick={onClose}>{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="mega__col">
            <p className="mega__title">Shop by mood</p>
            <ul className="mega__links">
              {MOODS.map((m) => (
                <li key={m.key}><Link to={`/mood/${m.key}`} onClick={onClose}>{m.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="mega__cards mega__cards--2">
            <Link to="/collection/new" className="mega__card" onClick={onClose}>
              <Figure src={EDITORIAL.heroMain} tone="blush" ratio="tall" alt="Model wearing new-season Zeraki jewellery" />
              <span className="mega__cardlabel">Just Dropped <ArrowR size={15} /></span>
            </Link>
            <Link to="/collection/best" className="mega__card" onClick={onClose}>
              <Figure src={EDITORIAL.mangalFeature} tone="butter" ratio="tall" alt="Model wearing a Zeraki bestselling mangalsutra" />
              <span className="mega__cardlabel">Currently Crushing On <ArrowR size={15} /></span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const cat = CATEGORIES.find((c) => c.key === id)
  const links = sub[id] || []
  return (
    <div className="mega">
      <div className="mega__inner shell">
        <div className="mega__col">
          <p className="mega__title">Shop {cat.name}</p>
          <ul className="mega__links">
            {links.map((l) => <li key={l}><Link to={`/c/${id}`} onClick={onClose}>{l}</Link></li>)}
          </ul>
          <Link to={`/c/${id}`} className="link-u mega__all" onClick={onClose}>
            All {cat.name} <ArrowR size={14} />
          </Link>
        </div>
        <div className="mega__col">
          <p className="mega__title">By price</p>
          <ul className="mega__links">
            <li><Link to="/collection/under-599" onClick={onClose}>Under ₹599</Link></li>
            <li><Link to={`/c/${id}`} onClick={onClose}>₹599 – ₹999</Link></li>
            <li><Link to={`/c/${id}`} onClick={onClose}>₹999 & above</Link></li>
          </ul>
          <p className="mega__title mega__title--mt">Featured</p>
          <ul className="mega__links">
            <li><Link to="/collection/bogo" onClick={onClose}>Buy 1 Get 1</Link></li>
            <li><Link to="/collection/anti-tarnish" onClick={onClose}>Anti-tarnish edit</Link></li>
          </ul>
        </div>
        <div className="mega__cards">
          <Link to={`/c/${id}`} className="mega__card" onClick={onClose}>
            <Figure src={cat.image} tone={cat.tone} ratio="tall" alt={`Zeraki ${cat.name.toLowerCase()} collection`} />
            <span className="mega__cardlabel">{cat.name} <ArrowR size={15} /></span>
          </Link>
          <Link to="/collection/new" className="mega__card" onClick={onClose}>
            <Figure src={EDITORIAL.moment} tone="blush" ratio="tall" alt={`Model styled in Zeraki ${cat.name.toLowerCase()}`} />
            <span className="mega__cardlabel">New this week <ArrowR size={15} /></span>
          </Link>
          <div className="mega__note" style={{ background: `var(--${cat.tone === 'lavender' ? 'lav' : cat.tone}-wash, var(--cream))` }}>
            <p className="mega__noteHead">{cat.blurb}</p>
            <p className="mega__noteBody">18K gold plated · anti-tarnish · free shipping</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(null)      // mega key
  const [mobile, setMobile] = useState(false)
  const [mobileCat, setMobileCat] = useState(null)
  const { bagCount, wishlist, setBagOpen, setSearchOpen, user } = useShop()
  const loc = useLocation()
  const closeTimer = useRef()
  const barRef = useRef(null)

  useLockBody(mobile)

  useEffect(() => { setMobile(false); setOpen(null) }, [loc.pathname])

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  /**
   * Publish the header's real height as --sticky-top so every other sticky
   * element (filter bar, filter sidebar, product gallery, order summary) pins
   * exactly under it. Hard-coding the offset left a gap that page content
   * scrolled through once the header compacted.
   */
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const publish = () => {
      const h = Math.round(el.getBoundingClientRect().bottom)
      document.documentElement.style.setProperty('--sticky-top', `${h}px`)
    }
    publish()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(publish) : null
    if (ro) ro.observe(el)
    window.addEventListener('resize', publish)
    const t = setInterval(publish, 500)   // covers the compact-height transition
    return () => { if (ro) ro.disconnect(); window.removeEventListener('resize', publish); clearInterval(t) }
  }, [])

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') { setOpen(null); setMobile(false) } }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])

  const enter = (k) => { clearTimeout(closeTimer.current); setOpen(k) }
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(null), 160) }

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header ref={barRef} className={`hdr ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <Announce />

        <div className="hdr__bar">
          <div className="hdr__inner shell">
            <button type="button" className="hdr__burger" onClick={() => setMobile(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>

            <Link to="/" className="logo" aria-label="Zeraki Jewels — home">
              <span className="logo__mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none"><path d="M16 2.5l4.4 9.1 9.1 4.4-9.1 4.4-4.4 9.1-4.4-9.1L2.5 16l9.1-4.4z" stroke="currentColor" strokeWidth="1.3" /><circle cx="16" cy="16" r="2.6" fill="currentColor" /></svg>
              </span>
              <span className="logo__type">
                <span className="logo__word">ZERAKI</span>
                <span className="logo__sub">Every Shade of Her</span>
              </span>
            </Link>

            <nav className="hdr__nav" aria-label="Primary">
              <ul>
                {NAV.map((n) => (
                  <li key={n.label}
                    onMouseEnter={() => (n.mega ? enter(n.mega) : setOpen(null))}
                    onMouseLeave={n.mega ? leave : undefined}>
                    <NavLink to={n.to} className={({ isActive }) => `hdr__navlink ${isActive ? 'is-active' : ''} ${open === n.mega ? 'is-hot' : ''}`}>
                      {n.label}
                      {n.mega && <ChevD size={13} className="hdr__chev" />}
                    </NavLink>
                    {n.mega && open === n.mega && (
                      <div className="hdr__megawrap" onMouseEnter={() => enter(n.mega)} onMouseLeave={leave}>
                        <MegaPanel id={n.mega} onClose={() => setOpen(null)} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hdr__actions">
              <button type="button" className="iconbtn" onClick={() => setSearchOpen(true)} aria-label="Search">
                <Search size={19} />
              </button>
              <Link to={user ? '/account' : '/signin'} className="iconbtn iconbtn--hide-sm"
                aria-label={user ? 'Your account' : 'Sign in'}>
                <User size={19} />
                {user && <span className="iconbtn__dot" aria-hidden="true" />}
              </Link>
              <Link to="/wishlist" className="iconbtn" aria-label={`Wishlist, ${wishlist.length} items`}>
                <Heart size={19} />
                {wishlist.length > 0 && <span className="iconbtn__count">{wishlist.length}</span>}
              </Link>
              <button type="button" className="iconbtn" onClick={() => setBagOpen(true)} aria-label={`Bag, ${bagCount} items`}>
                <Bag size={19} />
                {bagCount > 0 && <span className="iconbtn__count">{bagCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && <div className="mega__scrim" onMouseEnter={() => setOpen(null)} />}

      {/* ---------------- mobile drawer ---------------- */}
      <div className={`mdrawer ${mobile ? 'is-open' : ''}`} aria-hidden={!mobile}>
        <div className="mdrawer__scrim" onClick={() => setMobile(false)} />
        <div className="mdrawer__panel" role="dialog" aria-label="Menu" aria-modal="true">
          <div className="mdrawer__top">
            <span className="logo__word logo__word--sm">ZERAKI</span>
            <button type="button" className="iconbtn" onClick={() => setMobile(false)} aria-label="Close menu"><Close size={22} /></button>
          </div>

          <div className="mdrawer__scroll">
            <Link to="/collection/new" className="mdrawer__hero">
              <Figure src={EDITORIAL.heroMain} tone="blush" ratio="wide" alt="New season Zeraki jewellery" />
              <span>New In — shop the drop <ArrowR size={16} /></span>
            </Link>

            <ul className="mdrawer__nav">
              {CATEGORIES.map((c) => (
                <li key={c.key} className={mobileCat === c.key ? 'is-open' : ''}>
                  <button type="button" className="mdrawer__row" onClick={() => setMobileCat(mobileCat === c.key ? null : c.key)}
                    aria-expanded={mobileCat === c.key}>
                    {c.name} <ChevD size={17} />
                  </button>
                  {mobileCat === c.key && (
                    <ul className="mdrawer__sub">
                      <li><Link to={`/c/${c.key}`}>All {c.name}</Link></li>
                      {(sub[c.key] || []).slice(0, 4).map((s) => (
                        <li key={s}><Link to={`/c/${c.key}`}>{s}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li><Link to="/shop" className="mdrawer__row">Shop All</Link></li>
              <li><Link to="/about" className="mdrawer__row">Our Story</Link></li>
              <li><Link to="/contact" className="mdrawer__row">Contact & Help</Link></li>
            </ul>

            <div className="mdrawer__moods">
              <p className="eyebrow">Shop by mood</p>
              <div className="mdrawer__moodgrid">
                {MOODS.map((m) => (
                  <Link key={m.key} to={`/mood/${m.key}`} className={`moodchip moodchip--${m.tone}`}>{m.name}</Link>
                ))}
              </div>
            </div>

            <div className="mdrawer__foot">
              <Link to={user ? '/account' : '/signin'} className="btn btn--block">
                {user ? 'Your account' : 'Sign in / Create account'}
              </Link>
              <a className="btn btn--ghost btn--block mdrawer__wa" href="https://wa.me/919558314299" target="_blank" rel="noreferrer noopener">WhatsApp us</a>
              <p className="faint" style={{ fontSize: 'var(--fs-xs)', marginTop: '.85rem' }}>Mon–Sat, 10 AM – 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
