import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import Figure from '../art/Art'
import ProductCard from '../components/ProductCard'
import { useRail, RailNav } from '../components/Rail'
import {
  Heart, Stars, Plus, Minus, ChevD, Truck, Shield, Exchange, Zoom,
  Pincode, Ruler, Check, ArrowR, Whatsapp,
} from '../components/Icons'
import { useShop, Reveal, inr, useMediaQuery } from '../store'
import { PRODUCTS, byId, CAT_MAP, BRAND, REVIEWS, EDITORIAL } from '../data/catalog'

/* ------------------------------------------------------------------ */
/*  Gallery — product / macro / model / alternate angle                */
/* ------------------------------------------------------------------ */

/** Gallery = every photograph the piece actually has, labelled for navigation. */
const VIEW_LABELS = ['Product', 'Detail', 'On model', 'Angle']
const VIEWS = (p) =>
  p.images.map((src, i) => ({
    key: `v${i}`,
    label: VIEW_LABELS[i] || `View ${i + 1}`,
    src,
    alt: i === 0 ? `${p.name} — full view` : `${p.name} — view ${i + 1}`,
  }))

/* Readable, stable SKU: ZK-<3 letters of the name><4 digits>. */
function sku(p) {
  const letters = p.shortName.replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase().padEnd(3, 'X')
  let h = 0
  for (let i = 0; i < p.id.length; i++) h = (h * 33 + p.id.charCodeAt(i)) % 10000
  return `ZK-${letters}${String(h).padStart(4, '0')}`
}

function Gallery({ p }) {
  const views = useMemo(() => VIEWS(p), [p.id])
  const [i, setI] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const stageRef = useRef(null)

  useEffect(() => { setI(0); setZoom(false) }, [p.id])

  const move = (e) => {
    const r = stageRef.current.getBoundingClientRect()
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
  }

  const v = views[i]
  return (
    <div className="gal">
      <div className="gal__thumbs" role="tablist" aria-label="Product images">
        {views.map((t, n) => (
          <button key={t.key} role="tab" aria-selected={n === i} className={`gal__thumb ${n === i ? 'is-on' : ''}`}
            onClick={() => setI(n)} aria-label={`${t.label} view`}>
            <Figure src={t.src} tone={p.tone} ratio="square" alt="" />
            <span className="gal__thumblabel">{t.label}</span>
          </button>
        ))}
      </div>

      <div className="gal__stagewrap">
        <div
          ref={stageRef}
          className={`gal__stage ${zoom ? 'is-zoom' : ''}`}
          onMouseMove={zoom ? move : undefined}
          onMouseLeave={() => setZoom(false)}
          onClick={() => setZoom((z) => !z)}
          style={zoom ? { '--zx': `${pos.x}%`, '--zy': `${pos.y}%` } : undefined}
          role="img" aria-label={v.alt}
        >
          <Figure src={v.src} tone={p.tone} ratio="tall" priority alt="" />
        </div>
        <button type="button" className="gal__zoombtn" onClick={() => setZoom((z) => !z)} aria-pressed={zoom}>
          <Zoom size={16} /> {zoom ? 'Exit zoom' : 'Tap to zoom'}
        </button>

        <div className="gal__dots" aria-hidden="true">
          {views.map((t, n) => (
            <button key={t.key} className={n === i ? 'is-on' : ''} onClick={() => setI(n)} tabIndex={-1} aria-label={t.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Accordion                                                          */
/* ------------------------------------------------------------------ */

function Acc({ title, children, open: initial = false }) {
  const [open, setOpen] = useState(initial)
  return (
    <div className={`acc ${open ? 'is-open' : ''}`}>
      <button type="button" className="acc__head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{title}</span><ChevD size={18} />
      </button>
      <div className="acc__body" hidden={!open}>{children}</div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Pincode checker                                                    */
/* ------------------------------------------------------------------ */

function PinCheck() {
  const [pin, setPin] = useState('')
  const [res, setRes] = useState(null)
  const check = (e) => {
    e.preventDefault()
    if (!/^\d{6}$/.test(pin)) { setRes({ ok: false, msg: 'Enter a valid 6-digit pincode.' }); return }
    const days = 3 + (Number(pin[5]) % 3)
    const d = new Date(); d.setDate(d.getDate() + days)
    setRes({
      ok: true,
      msg: `Delivers by ${d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}`,
      sub: 'Free shipping · Cash on delivery available',
    })
  }
  return (
    <form className="pincheck" onSubmit={check}>
      <label className="pincheck__label" htmlFor="pin"><Pincode size={16} /> Check delivery date</label>
      <div className="pincheck__row">
        <input id="pin" className="field" inputMode="numeric" maxLength={6} placeholder="Enter pincode"
          value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))} />
        <button type="submit" className="btn btn--ghost btn--sm">Check</button>
      </div>
      {res && (
        <p className={`pincheck__res ${res.ok ? 'is-ok' : 'is-bad'}`}>
          {res.ok && <Check size={15} />} {res.msg}
          {res.sub && <span className="pincheck__sub">{res.sub}</span>}
        </p>
      )}
    </form>
  )
}

/* ------------------------------------------------------------------ */
/*  Size guide                                                         */
/* ------------------------------------------------------------------ */

function SizeGuide({ onClose, category }) {
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Size guide">
      <div className="modal__scrim" onClick={onClose} />
      <div className="modal__panel">
        <h2 className="h3">Size guide</h2>
        {category === 'bangles' ? (
          <>
            <p className="muted">Tuck your thumb into your palm and measure the widest part of your hand.</p>
            <table className="sizetable">
              <thead><tr><th>Size</th><th>Hand circumference</th><th>Inner diameter</th></tr></thead>
              <tbody>
                <tr><td>2.4</td><td>17.0 – 18.0 cm</td><td>5.7 cm</td></tr>
                <tr><td>2.6</td><td>18.1 – 19.5 cm</td><td>6.1 cm</td></tr>
                <tr><td>2.8</td><td>19.6 – 21.0 cm</td><td>6.5 cm</td></tr>
              </tbody>
            </table>
          </>
        ) : (
          <>
            <p className="muted">Every Zeraki ring is adjustable — the band opens gently at the back and fits roughly US 5 to US 9.</p>
            <table className="sizetable">
              <thead><tr><th>Fits</th><th>Finger circumference</th></tr></thead>
              <tbody>
                <tr><td>US 5 – 6</td><td>49 – 52 mm</td></tr>
                <tr><td>US 7 – 8</td><td>53 – 57 mm</td></tr>
                <tr><td>US 9</td><td>58 – 60 mm</td></tr>
              </tbody>
            </table>
          </>
        )}
        <p className="faint" style={{ fontSize: 'var(--fs-sm)' }}>
          Still unsure? Message us on WhatsApp and we will size it with you.
        </p>
        <button type="button" className="btn btn--block" onClick={onClose}>Got it</button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

export default function Product() {
  const { id } = useParams()
  const p = byId(id)
  const { addToBag, isWished, toggleWish, pushViewed, viewed, buyNow } = useShop()
  const nav = useNavigate()
  const [qty, setQty] = useState(1)
  const [variant, setVariant] = useState(null)
  const [guide, setGuide] = useState(false)
  const isMobile = useMediaQuery('(max-width: 860px)')
  const alsoRail = useRail()
  const lookRail = useRail()

  useEffect(() => { window.scrollTo(0, 0); setQty(1) }, [id])
  useEffect(() => {
    if (!p) return
    setVariant(p.sizes ? p.sizes[0] : null)
    pushViewed(p.id)
  }, [p?.id])

  if (!p) return <Navigate to="/shop" replace />

  const cat = CAT_MAP[p.category]
  const wished = isWished(p.id)
  const saving = p.mrp - p.price

  const also = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 8)
  const look = PRODUCTS.filter((x) => x.category !== p.category && x.moods.some((m) => p.moods.includes(m))).slice(0, 4)
  const recent = viewed.map(byId).filter((x) => x && x.id !== p.id).slice(0, 5)
  const prodReviews = REVIEWS.slice(0, 3)

  return (
    <div className="pdp">
      <div className="shell">
        <nav className="crumbs crumbs--pdp" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span aria-hidden="true">/</span>
          <Link to="/shop">Shop</Link><span aria-hidden="true">/</span>
          <Link to={`/c/${p.category}`}>{cat.name}</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{p.name}</span>
        </nav>
      </div>

      <div className="shell pdp__top">
        <Gallery p={p} />

        <div className="pdp__info">
          <p className="pdp__cat">{cat.name}</p>
          <h1 className="h2 pdp__title">{p.name}</h1>

          <a className="pdp__rating" href="#reviews">
            <Stars value={p.rating} size={14} />
            <strong>{p.rating.toFixed(1)}</strong>
            <span className="faint">({p.reviews.toLocaleString('en-IN')} reviews)</span>
          </a>

          <div className="pdp__pricing">
            <span className="pdp__now">{inr(p.price)}</span>
            <span className="pdp__was">{inr(p.mrp)}</span>
            <span className="pdp__off">{p.discount}% off</span>
          </div>
          <p className="pdp__tax">Inclusive of all taxes · You save {inr(saving)}</p>

          {p.bogo && (
            <div className="offercard">
              <span className="tag tag--bogo">Buy 1 Get 1</span>
              <p>Add any two eligible pieces — the lower-priced one is free at checkout.</p>
              <Link to="/collection/bogo" className="link-u">See eligible styles <ArrowR size={13} /></Link>
            </div>
          )}

          <p className="pdp__prepaid">Pay online and save an extra ₹50 · final {inr(Math.max(p.price - 50, 0))}</p>

          {p.blurb && <p className="pdp__blurb">{p.blurb}</p>}

          {p.sizes && (
            <div className="pdp__variants">
              <div className="pdp__variantHead">
                <span className="field-label" style={{ margin: 0 }}>{p.category === 'bangles' ? 'Size' : 'Fit'}</span>
                <button type="button" className="pdp__guide" onClick={() => setGuide(true)}>
                  <Ruler size={15} /> Size guide
                </button>
              </div>
              <div className="pdp__variantRow">
                {p.sizes.map((s) => (
                  <button key={s} type="button" className={`chip ${variant === s ? 'is-on' : ''}`} onClick={() => setVariant(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {p.packSize && <p className="pdp__pack"><Check size={15} /> Sold as a {p.packSize.toLowerCase()}</p>}

          <div className="pdp__buyrow">
            <div className="qty">
              <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity"><Minus size={15} /></button>
              <span aria-live="polite">{qty}</span>
              <button type="button" onClick={() => setQty(qty + 1)} aria-label="Increase quantity"><Plus size={15} /></button>
            </div>
            <button type="button" className="btn btn--lg pdp__add" onClick={() => addToBag(p.id, qty, variant)}>
              Add to bag
            </button>
            <button type="button" className={`pdp__wish ${wished ? 'is-on' : ''}`} onClick={() => toggleWish(p.id)}
              aria-pressed={wished} aria-label={wished ? 'Remove from wishlist' : 'Save to wishlist'}>
              <Heart size={20} filled={wished} />
            </button>
          </div>
          <button type="button" className="btn btn--ghost btn--block btn--lg"
            onClick={() => { buyNow(p.id, qty, variant); nav('/checkout') }}>
            Buy it now
          </button>

          <ul className="pdp__trust">
            <li><Truck size={17} /> Free shipping</li>
            <li><Shield size={17} /> COD available</li>
            <li><Exchange size={17} /> {BRAND.policy.returnWindow} easy exchange</li>
          </ul>

          <PinCheck />

          <div className="pdp__acc">
            <Acc title="Product details" open>
              <ul className="speclist">
                <li><span>Category</span><span>{cat.name}</span></li>
                <li><span>Style</span><span>{p.style}</span></li>
                <li><span>Colour</span><span>{p.colour}</span></li>
                {p.length && <li><span>Length</span><span>{p.length}</span></li>}
                {p.packSize && <li><span>Pack</span><span>{p.packSize}</span></li>}
                <li><span>Occasion</span><span>{p.occasion.join(', ')}</span></li>
                <li><span>SKU</span><span>{sku(p)}</span></li>
              </ul>
            </Acc>
            <Acc title="Material & finish">
              <p>{p.plating} over a hypoallergenic, nickel-free base alloy, sealed with an anti-tarnish coating.
                Lead-free and skin-safe — designed for daily wear rather than the jewellery box.</p>
            </Acc>
            <Acc title="Dimensions">
              <p>{p.length ? `Length ${p.length}. ` : ''}Weights are kept deliberately light so the piece
                sits comfortably through a full day. Exact dimensions may vary by up to 2mm as each piece is hand-finished.</p>
            </Acc>
            <Acc title="Jewellery care">
              <p><strong>Last on, first off.</strong> Put your jewellery on after perfume and make-up, and take it off before
                showering, swimming or sleeping. Wipe with a dry, soft cloth after wear and store each piece in the pouch it arrived in.</p>
            </Acc>
            <Acc title="Shipping">
              <p>Free shipping on every order across India, including Tier-2 and Tier-3 cities. A tracking link is emailed
                the moment your parcel is packed. A small number of remote pincodes are not serviceable.</p>
            </Acc>
            <Acc title="Returns & exchanges">
              <p>{BRAND.policy.returnWindow} from delivery to raise a return or exchange. Exchanges carry a flat {BRAND.policy.exchangeFee} fee
                covering reverse logistics. Returns are issued as a credit note valid {BRAND.policy.creditValidity}. Items must be unused,
                with tags, invoice and packaging intact. Manufacturing or transit defects reported within {BRAND.policy.defectWindow} are replaced free.</p>
            </Acc>
          </div>

          <a className="pdp__help" href={BRAND.whatsappUrl} target="_blank" rel="noreferrer noopener">
            <Whatsapp size={18} /> Questions? WhatsApp us — {BRAND.hours}
          </a>
        </div>
      </div>

      {/* ---------------- complete the look ---------------- */}
      {look.length > 0 && (
        <section className="section--sm ctl" aria-labelledby="ctl-h">
          <div className="shell">
            <Reveal className="sec-head">
              <div className="sec-head__text">
                <span className="eyebrow">Styled together</span>
                <h2 className="h2" id="ctl-h">Complete the Look</h2>
                <p className="sec-head__sub">Our stylists pair {p.shortName} with these.</p>
              </div>
              <RailNav onPrev={lookRail.prev} onNext={lookRail.next} state={lookRail.state} label="Complete the look" />
            </Reveal>
            <div className="rail" ref={lookRail.ref} role="region" aria-label="Complete the look" tabIndex={0}>
              {look.map((x) => <div className="rail__cell" key={x.id}><ProductCard product={x} /></div>)}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- reviews ---------------- */}
      <section className="section--sm pdpreviews" id="reviews" aria-labelledby="rev-h">
        <div className="shell">
          <Reveal className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">Reviews</span>
              <h2 className="h2" id="rev-h">What buyers say</h2>
            </div>
          </Reveal>

          <div className="pdprev__grid">
            <div className="pdprev__summary">
              <p className="pdprev__score">{p.rating.toFixed(1)}</p>
              <Stars value={p.rating} size={18} />
              <p className="muted">{p.reviews.toLocaleString('en-IN')} verified reviews</p>
              <ul className="pdprev__bars">
                {[5, 4, 3, 2, 1].map((s, i) => {
                  const pct = [78, 16, 4, 1, 1][i]
                  return (
                    <li key={s}>
                      <span>{s}★</span>
                      <span className="pdprev__bar"><i style={{ width: `${pct}%` }} /></span>
                      <span className="faint">{pct}%</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <ul className="pdprev__list">
              {prodReviews.map((r) => (
                <li key={r.name} className="pdprev__item">
                  <div className="pdprev__head">
                    <Stars value={r.stars} size={13} />
                    <span className="pdprev__name">{r.name}</span>
                    <span className="faint">{r.city}</span>
                    <span className="pdprev__verified"><Check size={12} /> Verified</span>
                  </div>
                  <p>{r.text}</p>
                </li>
              ))}
              <li className="pdprev__photos">
                <p className="field-label">Customer photos</p>
                <div className="pdprev__photorow">
                  {REVIEWS.slice(0, 4).map((r) => (
                    <Figure key={r.img} src={r.img} tone={r.tone} ratio="square" alt={`Customer photo from ${r.name}`} />
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- you may also like ---------------- */}
      <section className="section--sm" aria-labelledby="also-h">
        <div className="shell">
          <Reveal className="sec-head">
            <div className="sec-head__text">
              <span className="eyebrow">More like this</span>
              <h2 className="h2" id="also-h">You May Also Like</h2>
            </div>
            <RailNav onPrev={alsoRail.prev} onNext={alsoRail.next} state={alsoRail.state} label="You may also like" />
          </Reveal>
          <div className="rail" ref={alsoRail.ref} role="region" aria-label="You may also like" tabIndex={0}>
            {also.map((x) => <div className="rail__cell" key={x.id}><ProductCard product={x} /></div>)}
          </div>
        </div>
      </section>

      {/* ---------------- recently viewed ---------------- */}
      {recent.length > 0 && (
        <section className="section--sm recent" aria-labelledby="recent-h">
          <div className="shell">
            <h2 className="h3 recent__h" id="recent-h">Recently viewed</h2>
            <div className="rail">
              {recent.map((x) => (
                <Link key={x.id} to={`/product/${x.id}`} className="rvcard">
                  <Figure src={x.image} tone={x.tone} ratio="square" alt={x.name} />
                  <span className="rvcard__name">{x.shortName}</span>
                  <span className="rvcard__price">{inr(x.price)}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- mobile sticky bar ---------------- */}
      {isMobile && (
        <div className="stickybuy">
          <div className="stickybuy__price">
            <span className="stickybuy__now">{inr(p.price)}</span>
            <span className="stickybuy__was">{inr(p.mrp)}</span>
          </div>
          <button type="button" className="btn stickybuy__btn" onClick={() => addToBag(p.id, qty, variant)}>
            Add to bag
          </button>
          <button type="button" className="btn btn--ghost stickybuy__now"
            onClick={() => { buyNow(p.id, qty, variant); nav('/checkout') }}>
            Buy now
          </button>
        </div>
      )}

      {guide && <SizeGuide onClose={() => setGuide(false)} category={p.category} />}
    </div>
  )
}
