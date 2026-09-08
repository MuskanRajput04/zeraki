import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Figure from '../art/Art'
import { Close, Search as SearchIcon, Plus, Minus, ArrowR, Truck, Check } from './Icons'
import { useShop, useLockBody, inr } from '../store'
import { PRODUCTS, CATEGORIES, BRAND, EDITORIAL } from '../data/catalog'

/* ------------------------------------------------------------------ */
/*  Bag drawer                                                         */
/* ------------------------------------------------------------------ */

const FREE_SHIP_AT = 0 // free shipping on every order

export function BagDrawer() {
  const { bagOpen, setBagOpen, lines, subtotal, saved, setQty, removeLine, clearBuyNow } = useShop()
  const nav = useNavigate()
  useLockBody(bagOpen)

  const go = (to) => { clearBuyNow(); setBagOpen(false); nav(to) }

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setBagOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [setBagOpen])

  return (
    <div className={`drawer ${bagOpen ? 'is-open' : ''}`} aria-hidden={!bagOpen}>
      <div className="drawer__scrim" onClick={() => setBagOpen(false)} />
      <aside className="drawer__panel" role="dialog" aria-modal="true" aria-label="Shopping bag">
        <header className="drawer__head">
          <h2 className="h3">Your Bag <span className="faint">({lines.length})</span></h2>
          <button type="button" className="iconbtn" onClick={() => setBagOpen(false)} aria-label="Close bag"><Close size={22} /></button>
        </header>

        <p className="drawer__ship"><Truck size={16} /> Free shipping on every order in India</p>

        {lines.length === 0 ? (
          <div className="drawer__empty">
            <Figure src={EDITORIAL.heroDetail} tone="blush" ratio="wide" alt="" />
            <p className="h3">Nothing here yet.</p>
            <p className="muted">Your next favourite is one scroll away.</p>
            <Link to="/collection/new" className="btn" onClick={() => setBagOpen(false)}>Shop new arrivals</Link>
          </div>
        ) : (
          <>
            <ul className="drawer__lines">
              {lines.map((l) => (
                <li key={l.key} className="bline">
                  <Link to={`/product/${l.product.id}`} onClick={() => setBagOpen(false)} className="bline__img">
                    <Figure src={l.product.image} tone={l.product.tone} ratio="square" alt={l.product.name} />
                  </Link>
                  <div className="bline__body">
                    <Link to={`/product/${l.product.id}`} onClick={() => setBagOpen(false)} className="bline__name">{l.product.name}</Link>
                    {(l.variant || l.product.packSize) && (
                      <p className="bline__variant">{l.variant || l.product.packSize}</p>
                    )}
                    <p className="bline__price">{inr(l.product.price)} <span className="bline__was">{inr(l.product.mrp)}</span></p>
                    <div className="qty qty--sm">
                      <button type="button" onClick={() => setQty(l.key, l.qty - 1)} aria-label="Decrease quantity"><Minus size={14} /></button>
                      <span aria-live="polite">{l.qty}</span>
                      <button type="button" onClick={() => setQty(l.key, l.qty + 1)} aria-label="Increase quantity"><Plus size={14} /></button>
                    </div>
                  </div>
                  <button type="button" className="bline__x" onClick={() => removeLine(l.key)} aria-label={`Remove ${l.product.name}`}>
                    <Close size={16} />
                  </button>
                </li>
              ))}
            </ul>

            <footer className="drawer__foot">
              {saved > 0 && <p className="drawer__saved"><Check size={15} /> You are saving {inr(saved)}</p>}
              <div className="drawer__total">
                <span>Subtotal</span>
                <strong>{inr(subtotal)}</strong>
              </div>
              <p className="drawer__note">Taxes included. Prepaid orders get an extra ₹50 off at checkout.</p>
              <button type="button" className="btn btn--block btn--lg" onClick={() => go('/checkout')}>
                Proceed to checkout
              </button>
              <button type="button" className="btn btn--ghost btn--block drawer__viewbag" onClick={() => go('/cart')}>
                View full bag
              </button>
              <button type="button" className="link-u drawer__cont" onClick={() => setBagOpen(false)}>Continue shopping</button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Search overlay                                                     */
/* ------------------------------------------------------------------ */

const TRENDING = ['Short mangalsutra', 'Daily wear studs', 'Adjustable rings', 'Temple necklace set', 'Anti-tarnish', 'Buy 1 Get 1']

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useShop()
  const [q, setQ] = useState('')
  const inputRef = useRef(null)
  useLockBody(searchOpen)

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 80)
    else setQ('')
  }, [searchOpen])

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setSearchOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [setSearchOpen])

  const results = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (s.length < 2) return []
    return PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(s) ||
      p.type.toLowerCase().includes(s) ||
      p.category.includes(s) ||
      p.style.toLowerCase().includes(s)
    ).slice(0, 8)
  }, [q])

  return (
    <div className={`searchov ${searchOpen ? 'is-open' : ''}`} aria-hidden={!searchOpen}>
      <div className="searchov__scrim" onClick={() => setSearchOpen(false)} />
      <div className="searchov__panel" role="dialog" aria-modal="true" aria-label="Search">
        <div className="shell searchov__inner">
          <div className="searchov__bar">
            <SearchIcon size={22} />
            <input
              ref={inputRef}
              className="searchov__input"
              type="search"
              placeholder="Search mangalsutra, earrings, rings…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search products"
            />
            <button type="button" className="iconbtn" onClick={() => setSearchOpen(false)} aria-label="Close search"><Close size={22} /></button>
          </div>

          {results.length > 0 ? (
            <div className="searchov__results">
              {results.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="sres" onClick={() => setSearchOpen(false)}>
                  <span className="sres__img"><Figure src={p.image} tone={p.tone} ratio="square" alt="" /></span>
                  <span className="sres__body">
                    <span className="sres__name">{p.name}</span>
                    <span className="sres__meta">{inr(p.price)} <s>{inr(p.mrp)}</s></span>
                  </span>
                  <ArrowR size={16} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="searchov__idle">
              <div>
                <p className="eyebrow">Trending searches</p>
                <div className="searchov__chips">
                  {TRENDING.map((t) => (
                    <button key={t} type="button" className="chip" onClick={() => setQ(t.split(' ')[0])}>{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Categories</p>
                <div className="searchov__chips">
                  {CATEGORIES.map((c) => (
                    <Link key={c.key} to={`/c/${c.key}`} className="chip" onClick={() => setSearchOpen(false)}>{c.name}</Link>
                  ))}
                </div>
              </div>
              {q.length >= 2 && <p className="muted">No matches for “{q}”. Try a category, or <a className="link-u" href={BRAND.whatsappUrl} target="_blank" rel="noreferrer noopener">ask us on WhatsApp</a>.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Toast                                                              */
/* ------------------------------------------------------------------ */

export function Toast() {
  const { toast } = useShop()
  return (
    <div className={`toast ${toast ? 'is-on' : ''}`} role="status" aria-live="polite">
      {toast && <><Check size={16} /> {toast.msg}</>}
    </div>
  )
}
