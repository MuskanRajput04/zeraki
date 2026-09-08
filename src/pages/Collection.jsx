import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import Figure from '../art/Art'
import ProductCard from '../components/ProductCard'
import { Filter, Sort, Close, ChevD, Check, ArrowR } from '../components/Icons'
import { Reveal, useMediaQuery, useLockBody, inr } from '../store'
import {
  PRODUCTS, CATEGORIES, CAT_MAP, COLLECTIONS, MOODS, MOOD_MAP, FILTERS, SORTS, EDITORIAL,
} from '../data/catalog'

const PRICE_BANDS = [
  { key: 'u399', label: 'Under ₹400', test: (p) => p.price < 400 },
  { key: '400-699', label: '₹400 – ₹699', test: (p) => p.price >= 400 && p.price <= 699 },
  { key: '700-999', label: '₹700 – ₹999', test: (p) => p.price >= 700 && p.price <= 999 },
  { key: '1000+', label: '₹1,000 & above', test: (p) => p.price >= 1000 },
]

const SIZES = ['Free Size · Adjustable', '2.4', '2.6', '2.8']

const emptyFilters = () => ({
  Category: [], Occasion: [], Style: [], Colour: [], Plating: [], Price: [], Size: [],
  flags: [],
})

const FLAGS = [
  { key: 'new', label: 'New arrivals', test: (p) => p.badges.includes('new') },
  { key: 'best', label: 'Best sellers', test: (p) => p.badges.includes('bestseller') },
  { key: 'anti', label: 'Anti-tarnish', test: (p) => p.antiTarnish },
  { key: 'bogo', label: 'Buy 1 Get 1', test: (p) => p.bogo },
  { key: 'stock', label: 'In stock only', test: (p) => p.inStock },
]

/* ------------------------------------------------------------------ */
/*  Resolve the route into a base list + page header                   */
/* ------------------------------------------------------------------ */

function useCollectionContext() {
  const { cat, key, mood } = useParams()
  const { pathname } = useLocation()

  if (cat && CAT_MAP[cat]) {
    const c = CAT_MAP[cat]
    return {
      kind: 'category',
      tone: c.tone,
      title: c.name,
      crumb: c.name,
      desc: `${c.blurb} Every Zeraki ${c.name.toLowerCase().replace(/s$/, '')} is 18K gold plated over a hypoallergenic base and finished anti-tarnish, so it keeps its colour through daily wear.`,
      base: PRODUCTS.filter((p) => p.category === cat),
      art: c.image,
    }
  }
  if (key) {
    const col = COLLECTIONS.find((c) => c.key === key)
    if (col) return {
      kind: 'collection', tone: col.tone, title: col.name, crumb: col.name,
      desc: col.desc, base: PRODUCTS.filter(col.filter), art: col.image,
    }
  }
  if (mood) {
    const m = MOOD_MAP[mood]
    if (m) return {
      kind: 'mood', tone: m.tone === 'berry' ? 'blush' : m.tone, title: m.name, crumb: `Mood · ${m.name}`,
      desc: `${m.line} A hand-picked edit for the days you feel ${m.name.toLowerCase()} — styled by our team, worn by our community.`,
      base: PRODUCTS.filter((p) => p.moods.includes(mood)), art: m.image,
    }
  }
  return {
    kind: 'all', tone: 'cream', title: 'Shop All', crumb: 'Shop All',
    desc: 'The full Zeraki wardrobe — mangalsutra, earrings, bangles, rings, necklaces, gold chains and payal. Filter it down to exactly your shade.',
    base: PRODUCTS, art: EDITORIAL.moment, pathname,
  }
}

/* ------------------------------------------------------------------ */
/*  Filter primitives                                                  */
/* ------------------------------------------------------------------ */

function FilterGroup({ title, options, selected, onToggle, defaultOpen = true, counts }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`fgroup ${open ? 'is-open' : ''}`}>
      <button type="button" className="fgroup__head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{title}</span>
        {selected.length > 0 && <span className="fgroup__count">{selected.length}</span>}
        <ChevD size={16} />
      </button>
      {open && (
        <ul className="fgroup__list">
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.label
            const id = typeof o === 'string' ? o : o.key
            const on = selected.includes(id)
            const n = counts ? counts[id] : undefined
            return (
              <li key={id}>
                <label className={`fopt ${on ? 'is-on' : ''} ${n === 0 ? 'is-empty' : ''}`}>
                  <input type="checkbox" checked={on} onChange={() => onToggle(id)} />
                  <span className="fopt__box" aria-hidden="true">{on && <Check size={12} sw={2.2} />}</span>
                  <span className="fopt__label">{value}</span>
                  {n !== undefined && <span className="fopt__n">{n}</span>}
                </label>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function FilterPanel({ f, setF, ctx, counts, onClear }) {
  const toggle = (group, value) =>
    setF((prev) => {
      const arr = prev[group]
      return { ...prev, [group]: arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value] }
    })

  return (
    <div className="fpanel">
      <div className="fpanel__top">
        <p className="fpanel__title">Filter</p>
        <button type="button" className="fpanel__clear" onClick={onClear}>Clear all</button>
      </div>

      <FilterGroup title="Highlights" options={FLAGS} selected={f.flags}
        onToggle={(v) => toggle('flags', v)} counts={counts.flags} />

      {ctx.kind !== 'category' && (
        <FilterGroup title="Category" options={FILTERS.Category} selected={f.Category}
          onToggle={(v) => toggle('Category', v)} counts={counts.Category} />
      )}

      <FilterGroup title="Price" options={PRICE_BANDS} selected={f.Price}
        onToggle={(v) => toggle('Price', v)} counts={counts.Price} />

      <FilterGroup title="Occasion" options={FILTERS.Occasion} selected={f.Occasion}
        onToggle={(v) => toggle('Occasion', v)} counts={counts.Occasion} defaultOpen={false} />

      <FilterGroup title="Style" options={FILTERS.Style} selected={f.Style}
        onToggle={(v) => toggle('Style', v)} counts={counts.Style} defaultOpen={false} />

      <FilterGroup title="Colour" options={FILTERS.Colour} selected={f.Colour}
        onToggle={(v) => toggle('Colour', v)} counts={counts.Colour} defaultOpen={false} />

      <FilterGroup title="Plating" options={FILTERS.Plating} selected={f.Plating}
        onToggle={(v) => toggle('Plating', v)} counts={counts.Plating} defaultOpen={false} />

      <FilterGroup title="Size" options={SIZES} selected={f.Size}
        onToggle={(v) => toggle('Size', v)} counts={counts.Size} defaultOpen={false} />
    </div>
  )
}

/* ------------------------------------------------------------------ */

export default function Collection() {
  const ctx = useCollectionContext()
  const [f, setF] = useState(emptyFilters)
  const [sort, setSort] = useState('featured')
  const [sheet, setSheet] = useState(false)
  const isMobile = useMediaQuery('(max-width: 1024px)')
  useLockBody(sheet)

  useEffect(() => { setF(emptyFilters()); setSort('featured'); window.scrollTo(0, 0) }, [ctx.title])

  const matches = (p, skip) => {
    const cat = f.Category.length === 0 || skip === 'Category' || f.Category.includes(CAT_MAP[p.category].name)
    const occ = f.Occasion.length === 0 || skip === 'Occasion' || p.occasion.some((o) => f.Occasion.includes(o))
    const sty = f.Style.length === 0 || skip === 'Style' || f.Style.includes(p.style)
    const col = f.Colour.length === 0 || skip === 'Colour' || f.Colour.includes(p.colour)
    const pla = f.Plating.length === 0 || skip === 'Plating' || f.Plating.includes(p.plating)
    const pri = f.Price.length === 0 || skip === 'Price' || PRICE_BANDS.some((b) => f.Price.includes(b.key) && b.test(p))
    const siz = f.Size.length === 0 || skip === 'Size' ||
      (p.sizes || (p.packSize ? ['2.4', '2.6', '2.8'] : ['Free Size · Adjustable'])).some((s) => f.Size.includes(s))
    const flg = f.flags.length === 0 || skip === 'flags' || f.flags.every((k) => FLAGS.find((x) => x.key === k).test(p))
    return cat && occ && sty && col && pla && pri && siz && flg
  }

  const results = useMemo(() => {
    let out = ctx.base.filter((p) => matches(p))
    const s = [...out]
    switch (sort) {
      case 'new': s.sort((a, b) => (b.badges.includes('new') ? 1 : 0) - (a.badges.includes('new') ? 1 : 0)); break
      case 'price-asc': s.sort((a, b) => a.price - b.price); break
      case 'price-desc': s.sort((a, b) => b.price - a.price); break
      case 'rating': s.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews); break
      case 'discount': s.sort((a, b) => b.discount - a.discount); break
      default: s.sort((a, b) => (b.badges.length - a.badges.length) || b.reviews - a.reviews)
    }
    return s
  }, [ctx.base, f, sort])

  /* live counts so a filter never leads to a dead end */
  const counts = useMemo(() => {
    const c = { Category: {}, Occasion: {}, Style: {}, Colour: {}, Plating: {}, Price: {}, Size: {}, flags: {} }
    FILTERS.Category.forEach((v) => { c.Category[v] = ctx.base.filter((p) => matches(p, 'Category') && CAT_MAP[p.category].name === v).length })
    FILTERS.Occasion.forEach((v) => { c.Occasion[v] = ctx.base.filter((p) => matches(p, 'Occasion') && p.occasion.includes(v)).length })
    FILTERS.Style.forEach((v) => { c.Style[v] = ctx.base.filter((p) => matches(p, 'Style') && p.style === v).length })
    FILTERS.Colour.forEach((v) => { c.Colour[v] = ctx.base.filter((p) => matches(p, 'Colour') && p.colour === v).length })
    FILTERS.Plating.forEach((v) => { c.Plating[v] = ctx.base.filter((p) => matches(p, 'Plating') && p.plating === v).length })
    PRICE_BANDS.forEach((b) => { c.Price[b.key] = ctx.base.filter((p) => matches(p, 'Price') && b.test(p)).length })
    SIZES.forEach((v) => {
      c.Size[v] = ctx.base.filter((p) => matches(p, 'Size') &&
        (p.sizes || (p.packSize ? ['2.4', '2.6', '2.8'] : ['Free Size · Adjustable'])).includes(v)).length
    })
    FLAGS.forEach((fl) => { c.flags[fl.key] = ctx.base.filter((p) => matches(p, 'flags') && fl.test(p)).length })
    return c
  }, [ctx.base, f])

  const activeChips = useMemo(() => {
    const out = []
    Object.entries(f).forEach(([g, arr]) => {
      arr.forEach((v) => {
        const label = g === 'Price' ? PRICE_BANDS.find((b) => b.key === v)?.label
          : g === 'flags' ? FLAGS.find((x) => x.key === v)?.label : v
        out.push({ g, v, label })
      })
    })
    return out
  }, [f])

  const removeChip = ({ g, v }) => setF((p) => ({ ...p, [g]: p[g].filter((x) => x !== v) }))
  const clearAll = () => setF(emptyFilters())

  return (
    <div className="colpage">
      {/* ---------- banner ---------- */}
      <header className={`colhero colhero--${ctx.tone}`}>
        <div className="shell colhero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/shop">Shop</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{ctx.crumb}</span>
          </nav>
          <div className="colhero__grid">
            <div>
              <h1 className="h1 colhero__h">{ctx.title}</h1>
              <p className="lead colhero__desc">{ctx.desc}</p>
              {ctx.kind === 'category' && (
                <div className="colhero__quick">
                  {MOODS.slice(0, 4).map((m) => (
                    <Link key={m.key} to={`/mood/${m.key}`} className="chip">{m.name}</Link>
                  ))}
                </div>
              )}
            </div>
            <div className="colhero__art" aria-hidden="true">
              <Figure src={ctx.art} tone={ctx.tone} ratio="wide" alt="" />
            </div>
          </div>
        </div>
      </header>

      {/* ---------- toolbar ---------- */}
      <div className="coltools">
        <div className="shell coltools__inner">
          <p className="coltools__count">
            <strong>{results.length}</strong> {results.length === 1 ? 'piece' : 'pieces'}
            {activeChips.length > 0 && <span className="faint"> · filtered</span>}
          </p>

          <div className="coltools__right">
            <button type="button" className="coltools__btn coltools__btn--filter" onClick={() => setSheet(true)}>
              <Filter size={17} /> Filter{activeChips.length > 0 && <span className="coltools__dot">{activeChips.length}</span>}
            </button>
            <label className="coltools__sort">
              <Sort size={17} />
              <span className="sr-only">Sort products</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {SORTS.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
              <ChevD size={15} />
            </label>
          </div>
        </div>

        {activeChips.length > 0 && (
          <div className="shell colchips">
            {activeChips.map((c) => (
              <button key={`${c.g}-${c.v}`} type="button" className="colchip" onClick={() => removeChip(c)}>
                {c.label} <Close size={13} />
              </button>
            ))}
            <button type="button" className="colchip colchip--clear" onClick={clearAll}>Clear all</button>
          </div>
        )}
      </div>

      {/* ---------- body ---------- */}
      <div className="shell colbody">
        {!isMobile && (
          <aside className="colside" aria-label="Product filters">
            <FilterPanel f={f} setF={setF} ctx={ctx} counts={counts} onClear={clearAll} />
          </aside>
        )}

        <div className="colmain">
          {results.length === 0 ? (
            <div className="colempty">
              <Figure src={EDITORIAL.heroDetail} tone={ctx.tone} ratio="wide" alt="" />
              <h2 className="h3">No pieces match that combination.</h2>
              <p className="muted">Try loosening a filter — or let us find it for you on WhatsApp.</p>
              <button type="button" className="btn" onClick={clearAll}>Clear filters</button>
            </div>
          ) : (
            <div className="pgrid">
              {results.map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) + 1}><ProductCard product={p} /></Reveal>
              ))}
            </div>
          )}

          {results.length > 0 && (
            <div className="colfoot">
              <p className="muted">Showing all {results.length} pieces</p>
              <Link to="/shop" className="link-u">Browse the full wardrobe <ArrowR size={14} /></Link>
            </div>
          )}
        </div>
      </div>

      {/* ---------- mobile bottom sheet ---------- */}
      <div className={`sheet ${sheet ? 'is-open' : ''}`} aria-hidden={!sheet}>
        <div className="sheet__scrim" onClick={() => setSheet(false)} />
        <div className="sheet__panel" role="dialog" aria-modal="true" aria-label="Filter products">
          <div className="sheet__grab" aria-hidden="true" />
          <div className="sheet__head">
            <p className="h3">Filter</p>
            <button type="button" className="iconbtn" onClick={() => setSheet(false)} aria-label="Close filters"><Close size={22} /></button>
          </div>
          <div className="sheet__scroll">
            <FilterPanel f={f} setF={setF} ctx={ctx} counts={counts} onClear={clearAll} />
          </div>
          <div className="sheet__foot">
            <button type="button" className="btn btn--ghost" onClick={clearAll}>Clear</button>
            <button type="button" className="btn" onClick={() => setSheet(false)}>Show {results.length} results</button>
          </div>
        </div>
      </div>
    </div>
  )
}
