import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom'
import Figure from '../art/Art'
import { Check, Shield, Truck, Exchange, ArrowR, Plus, Minus, Close, Whatsapp } from '../components/Icons'
import { useShop, inr, Reveal } from '../store'
import { BRAND } from '../data/catalog'

/* ------------------------------------------------------------------ */
/*  Coupons — prototype rules, all resolved client-side                */
/* ------------------------------------------------------------------ */

const COUPONS = {
  ZERAKI10: { label: '10% off your order', apply: (sub) => Math.round(sub * 0.1) },
  SHADE100: { label: '₹100 off orders over ₹999', apply: (sub) => (sub >= 999 ? 100 : 0), min: 999 },
  FIRSTZK: { label: '₹75 off your first order', apply: () => 75 },
}

const PAYMENTS = [
  { key: 'upi', label: 'UPI', note: 'GPay, PhonePe, Paytm or any UPI app', prepaid: true },
  { key: 'card', label: 'Credit / Debit card', note: 'Visa, Mastercard, RuPay & Amex', prepaid: true },
  { key: 'netbanking', label: 'Net banking', note: 'All major Indian banks', prepaid: true },
  { key: 'cod', label: 'Cash on delivery', note: 'Pay the courier when it arrives', prepaid: false },
]

const STATES = ['Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana',
  'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha',
  'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']

function Field({ id, label, value, onChange, error, span, ...rest }) {
  return (
    <div className={`fld ${span ? 'fld--span' : ''}`}>
      <label className="field-label" htmlFor={id}>{label}</label>
      <input id={id} className={`field ${error ? 'is-bad' : ''}`} value={value}
        onChange={(e) => onChange(e.target.value)} aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined} {...rest} />
      {error && <p className="fld__err" id={`${id}-err`}>{error}</p>}
    </div>
  )
}

/* ================================================================== */
/*  CHECKOUT                                                          */
/* ================================================================== */

export default function Checkout() {
  const { checkoutLines, buyNowLine, setQty, removeLine, placeOrder, user } = useShop()
  const nav = useNavigate()

  const [f, setF] = useState(() => ({
    name: user?.name || '', email: user?.email || '', mobile: user?.mobile || '',
    house: '', street: '', city: '', state: '', pin: '',
  }))
  const [pay, setPay] = useState('upi')
  const [code, setCode] = useState('')
  const [coupon, setCoupon] = useState(null)
  const [couponMsg, setCouponMsg] = useState('')
  const [err, setErr] = useState({})
  const [placing, setPlacing] = useState(false)

  const set = (k) => (v) => setF((prev) => ({ ...prev, [k]: v }))

  useEffect(() => { window.scrollTo(0, 0) }, [])
  /* NOTE: the Buy Now line is deliberately NOT cleared when this page
     unmounts — under StrictMode the cleanup fires immediately after mount and
     would empty the checkout the moment it opened. It is cleared when an order
     is placed, and whenever the bag or drawer routes here instead. */

  const totals = useMemo(() => {
    const subtotal = checkoutLines.reduce((s, l) => s + l.product.price * l.qty, 0)
    const mrp = checkoutLines.reduce((s, l) => s + l.product.mrp * l.qty, 0)
    const prepaid = PAYMENTS.find((p) => p.key === pay)?.prepaid ? 50 : 0
    const couponOff = coupon ? Math.min(COUPONS[coupon].apply(subtotal), subtotal) : 0
    const total = Math.max(subtotal - prepaid - couponOff, 0)
    return { subtotal, mrp, saved: mrp - subtotal, prepaid, couponOff, shipping: 0, total }
  }, [checkoutLines, pay, coupon])

  if (checkoutLines.length === 0) {
    return (
      <div className="shell section" style={{ textAlign: 'center' }}>
        <p className="eyebrow">Checkout</p>
        <h1 className="h1" style={{ margin: '.75rem 0 1rem' }}>There is nothing to check out yet.</h1>
        <p className="lead" style={{ marginInline: 'auto' }}>Add a piece to your bag and it will show up here.</p>
        <p style={{ marginTop: '2rem' }}><Link to="/shop" className="btn">Shop all jewellery</Link></p>
      </div>
    )
  }

  const applyCoupon = (e) => {
    e.preventDefault()
    const key = code.trim().toUpperCase()
    if (!key) return
    if (!COUPONS[key]) { setCoupon(null); setCouponMsg(`“${key}” is not a valid code.`); return }
    if (COUPONS[key].apply(totals.subtotal) === 0) {
      setCoupon(null); setCouponMsg(`This code needs a subtotal of ${inr(COUPONS[key].min || 0)}.`); return
    }
    setCoupon(key); setCouponMsg('')
  }

  const submit = (e) => {
    e.preventDefault()
    const n = {}
    if (f.name.trim().length < 2) n.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) n.email = 'Enter a valid email.'
    if (!/^[0-9]{10}$/.test(f.mobile.replace(/\D/g, ''))) n.mobile = 'Enter a 10-digit mobile number.'
    if (!f.house.trim()) n.house = 'Required.'
    if (!f.street.trim()) n.street = 'Required.'
    if (!f.city.trim()) n.city = 'Required.'
    if (!f.state) n.state = 'Select a state.'
    if (!/^[0-9]{6}$/.test(f.pin)) n.pin = 'Enter a 6-digit pincode.'
    setErr(n)
    if (Object.keys(n).length) {
      const first = document.querySelector('.field.is-bad')
      if (first) first.scrollIntoView({ block: 'center', behavior: 'smooth' })
      return
    }
    setPlacing(true)
    const items = checkoutLines.map((l) => ({
      key: l.key, id: l.product.id, name: l.product.name, qty: l.qty,
      price: l.product.price, image: l.product.image, variant: l.variant || l.product.packSize || null,
    }))
    const order = placeOrder({ ...f, payment: PAYMENTS.find((p) => p.key === pay).label, coupon }, items, totals)
    setTimeout(() => nav(`/order/${order.id}`), 350)
  }

  return (
    <div className="checkout">
      <header className="ckhead">
        <div className="shell ckhead__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/cart">Bag</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Checkout</span>
          </nav>
          <h1 className="h1 ckhead__h">Checkout</h1>
          <p className="ckhead__secure"><Shield size={16} /> Secure checkout · 256-bit encrypted</p>
        </div>
      </header>

      <form className="shell ck__grid" onSubmit={submit} noValidate>
        {/* ---------------- left ---------------- */}
        <div className="ck__main">
          <section className="ckcard" aria-labelledby="ck-cust">
            <div className="ckcard__head">
              <span className="ckcard__step">1</span>
              <h2 className="h3" id="ck-cust">Customer information</h2>
            </div>
            <div className="ck__fields">
              <Field id="ck-name" label="Full name" value={f.name} onChange={set('name')}
                autoComplete="name" placeholder="Ritika Sharma" error={err.name} span />
              <Field id="ck-email" label="Email" type="email" value={f.email} onChange={set('email')}
                autoComplete="email" placeholder="you@email.com" error={err.email} />
              <Field id="ck-mobile" label="Mobile number" type="tel" value={f.mobile}
                onChange={(v) => set('mobile')(v.replace(/[^\d ]/g, ''))} autoComplete="tel"
                inputMode="numeric" maxLength={12} placeholder="98765 43210" error={err.mobile} />
            </div>
            {!user && (
              <p className="ck__note">
                Have an account? <Link to="/signin" className="link-u">Sign in <ArrowR size={12} /></Link> to fill this in automatically.
              </p>
            )}
          </section>

          <section className="ckcard" aria-labelledby="ck-addr">
            <div className="ckcard__head">
              <span className="ckcard__step">2</span>
              <h2 className="h3" id="ck-addr">Delivery address</h2>
            </div>
            <div className="ck__fields">
              <Field id="ck-house" label="House / flat number" value={f.house} onChange={set('house')}
                autoComplete="address-line1" placeholder="B-1502, Surana Residency" error={err.house} />
              <Field id="ck-street" label="Street / area" value={f.street} onChange={set('street')}
                autoComplete="address-line2" placeholder="Ring Road, TPS-8" error={err.street} />
              <Field id="ck-city" label="City" value={f.city} onChange={set('city')}
                autoComplete="address-level2" placeholder="Surat" error={err.city} />
              <div className="fld">
                <label className="field-label" htmlFor="ck-state">State</label>
                <div className="fld__select">
                  <select id="ck-state" className={`field ${err.state ? 'is-bad' : ''}`} value={f.state}
                    onChange={(e) => set('state')(e.target.value)} autoComplete="address-level1">
                    <option value="">Select a state</option>
                    {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                {err.state && <p className="fld__err">{err.state}</p>}
              </div>
              <Field id="ck-pin" label="Pincode" value={f.pin}
                onChange={(v) => set('pin')(v.replace(/\D/g, ''))} autoComplete="postal-code"
                inputMode="numeric" maxLength={6} placeholder="395003" error={err.pin} />
            </div>
            <p className="ck__note"><Truck size={15} /> Free shipping to every serviceable pincode in India.</p>
          </section>

          <section className="ckcard" aria-labelledby="ck-pay">
            <div className="ckcard__head">
              <span className="ckcard__step">3</span>
              <h2 className="h3" id="ck-pay">Payment method</h2>
            </div>
            <ul className="paylist">
              {PAYMENTS.map((p) => (
                <li key={p.key}>
                  <label className={`payopt ${pay === p.key ? 'is-on' : ''}`}>
                    <input type="radio" name="payment" value={p.key}
                      checked={pay === p.key} onChange={() => setPay(p.key)} />
                    <span className="payopt__dot" aria-hidden="true" />
                    <span className="payopt__body">
                      <span className="payopt__label">{p.label}</span>
                      <span className="payopt__note">{p.note}</span>
                    </span>
                    {p.prepaid && <span className="payopt__save">₹50 off</span>}
                  </label>
                </li>
              ))}
            </ul>
            <p className="ck__note ck__note--pay">
              <Shield size={15} /> Card and UPI details are entered on the payment provider&rsquo;s own secure
              page — Zeraki never sees or stores them.
            </p>
          </section>
        </div>

        {/* ---------------- right ---------------- */}
        <aside className="ck__aside" aria-labelledby="ck-sum">
          <div className="cksum">
            <h2 className="h3" id="ck-sum">Order summary</h2>

            <ul className="cksum__items">
              {checkoutLines.map((l) => (
                <li key={l.key} className="cksum__item">
                  <span className="cksum__img">
                    <Figure src={l.product.image} tone={l.product.tone} ratio="square" alt={l.product.name} />
                    <span className="cksum__qty">{l.qty}</span>
                  </span>
                  <span className="cksum__body">
                    <span className="cksum__name">{l.product.name}</span>
                    {(l.variant || l.product.packSize) && (
                      <span className="cksum__variant">{l.variant || l.product.packSize}</span>
                    )}
                    {!buyNowLine && (
                      <span className="cksum__controls">
                        <span className="qty qty--sm">
                          <button type="button" onClick={() => setQty(l.key, l.qty - 1)} aria-label="Decrease quantity"><Minus size={13} /></button>
                          <span aria-live="polite">{l.qty}</span>
                          <button type="button" onClick={() => setQty(l.key, l.qty + 1)} aria-label="Increase quantity"><Plus size={13} /></button>
                        </span>
                        <button type="button" className="cksum__x" onClick={() => removeLine(l.key)} aria-label={`Remove ${l.product.name}`}>
                          <Close size={13} />
                        </button>
                      </span>
                    )}
                  </span>
                  <span className="cksum__price">{inr(l.product.price * l.qty)}</span>
                </li>
              ))}
            </ul>

            <div className="cksum__coupon">
              <label className="field-label" htmlFor="ck-coupon">Apply coupon</label>
              <div className="cksum__couponrow">
                <input id="ck-coupon" className="field" value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="ZERAKI10" />
                <button type="button" className="btn btn--ghost btn--sm" onClick={applyCoupon}>Apply</button>
              </div>
              {coupon && (
                <p className="cksum__couponok">
                  <Check size={14} /> <strong>{coupon}</strong> applied — {COUPONS[coupon].label}
                  <button type="button" onClick={() => { setCoupon(null); setCode('') }}>Remove</button>
                </p>
              )}
              {couponMsg && <p className="cksum__couponbad">{couponMsg}</p>}
              {!coupon && !couponMsg && <p className="cksum__couponhint">Try ZERAKI10, SHADE100 or FIRSTZK</p>}
            </div>

            <dl className="sumlist">
              <div><dt>Subtotal</dt><dd>{inr(totals.subtotal)}</dd></div>
              {totals.saved > 0 && <div><dt>Product discount</dt><dd className="sumlist__save">− {inr(totals.saved)}</dd></div>}
              {totals.couponOff > 0 && <div><dt>Coupon ({coupon})</dt><dd className="sumlist__save">− {inr(totals.couponOff)}</dd></div>}
              {totals.prepaid > 0 && <div><dt>Prepaid discount</dt><dd className="sumlist__save">− {inr(totals.prepaid)}</dd></div>}
              <div><dt>Shipping</dt><dd className="sumlist__free">Free</dd></div>
            </dl>

            <div className="sumtotal">
              <span>To pay</span>
              <strong>{inr(totals.total)}</strong>
            </div>
            <p className="cksum__tax">Inclusive of all taxes.</p>

            <button type="submit" className="btn btn--block btn--lg" disabled={placing}>
              {placing ? 'Placing your order…' : `Place order · ${inr(totals.total)}`}
            </button>

            <ul className="cksum__trust">
              <li><Shield size={15} /> Secure checkout</li>
              <li><Exchange size={15} /> {BRAND.policy.returnWindow} exchange</li>
              <li><Truck size={15} /> Free shipping</li>
            </ul>
            <p className="cksum__demo">Prototype checkout — no payment is taken and no data leaves this browser.</p>
          </div>
        </aside>
      </form>
    </div>
  )
}

/* ================================================================== */
/*  ORDER CONFIRMATION                                                */
/* ================================================================== */

export function OrderDone() {
  const { id } = useParams()
  const { orders } = useShop()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const order = orders.find((o) => o.id === id)

  if (!order) return <Navigate to="/shop" replace />

  const eta = new Date(order.at)
  eta.setDate(eta.getDate() + 4)

  return (
    <div className="done">
      <div className="done__hero">
        <div className="shell done__heroInner">
          <span className="done__tick"><Check size={30} sw={2} /></span>
          <span className="eyebrow eyebrow--berry">Order confirmed</span>
          <h1 className="display done__h">Thank you{order.details.name ? `, ${order.details.name.split(' ')[0]}` : ''}.</h1>
          <p className="lead">
            Order <strong>{order.id}</strong> is confirmed. A confirmation is on its way to{' '}
            <strong>{order.details.email}</strong>, and you will get a tracking link the moment it is packed.
          </p>
          <div className="done__ctas">
            <Link to="/contact#track" className="btn">Track this order</Link>
            <Link to="/shop" className="btn btn--ghost">Continue shopping</Link>
          </div>
        </div>
      </div>

      <div className="shell done__grid">
        <section className="ckcard" aria-labelledby="done-items">
          <h2 className="h3" id="done-items">What you ordered</h2>
          <ul className="cksum__items">
            {order.items.map((it) => (
              <li key={it.key} className="cksum__item">
                <span className="cksum__img">
                  <Figure src={it.image} tone="cream" ratio="square" alt={it.name} />
                  <span className="cksum__qty">{it.qty}</span>
                </span>
                <span className="cksum__body">
                  <span className="cksum__name">{it.name}</span>
                  {it.variant && <span className="cksum__variant">{it.variant}</span>}
                </span>
                <span className="cksum__price">{inr(it.price * it.qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="sumlist">
            <div><dt>Subtotal</dt><dd>{inr(order.totals.subtotal)}</dd></div>
            {order.totals.couponOff > 0 && <div><dt>Coupon</dt><dd className="sumlist__save">− {inr(order.totals.couponOff)}</dd></div>}
            {order.totals.prepaid > 0 && <div><dt>Prepaid discount</dt><dd className="sumlist__save">− {inr(order.totals.prepaid)}</dd></div>}
            <div><dt>Shipping</dt><dd className="sumlist__free">Free</dd></div>
          </dl>
          <div className="sumtotal"><span>Total</span><strong>{inr(order.totals.total)}</strong></div>
        </section>

        <aside className="ckcard" aria-labelledby="done-ship">
          <h2 className="h3" id="done-ship">Delivery</h2>
          <p className="done__eta">
            <Truck size={17} /> Expected by{' '}
            <strong>{eta.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</strong>
          </p>
          <address className="done__addr">
            {order.details.name}<br />
            {order.details.house}, {order.details.street}<br />
            {order.details.city}, {order.details.state} {order.details.pin}<br />
            {order.details.mobile}
          </address>
          <p className="done__pay"><Shield size={15} /> Paying by {order.details.payment}</p>
          <ol className="track__steps done__steps">
            {['Order placed', 'Packed', 'Shipped', 'Out for delivery', 'Delivered'].map((s, i) => (
              <li key={s} className={i === 0 ? 'is-done' : ''}>{s}</li>
            ))}
          </ol>
          <a className="btn btn--ghost btn--block" href={BRAND.whatsappUrl} target="_blank" rel="noreferrer noopener">
            <Whatsapp size={16} /> Questions? WhatsApp us
          </a>
        </aside>
      </div>
    </div>
  )
}
