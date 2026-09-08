import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { byId } from './data/catalog'

/* ------------------------------------------------------------------ */
/*  Shop state — wishlist, bag, recently viewed, toasts                */
/* ------------------------------------------------------------------ */

const Ctx = createContext(null)
export const useShop = () => useContext(Ctx)

const read = (k, fallback) => {
  try {
    const v = localStorage.getItem(k)
    return v ? JSON.parse(v) : fallback
  } catch { return fallback }
}
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch { /* private mode */ } }

export function ShopProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => read('zk.wish', []))
  const [bag, setBag] = useState(() => read('zk.bag', []))
  const [viewed, setViewed] = useState(() => read('zk.viewed', []))
  const [user, setUser] = useState(() => read('zk.user', null))
  const [orders, setOrders] = useState(() => read('zk.orders', []))
  const [buyNowLine, setBuyNowLine] = useState(null)
  const [bagOpen, setBagOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef()

  useEffect(() => write('zk.wish', wishlist), [wishlist])
  useEffect(() => write('zk.bag', bag), [bag])
  useEffect(() => write('zk.viewed', viewed), [viewed])
  useEffect(() => write('zk.user', user), [user])
  useEffect(() => write('zk.orders', orders), [orders])

  const notify = useCallback((msg) => {
    clearTimeout(toastTimer.current)
    setToast({ msg, at: Date.now() })
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  const toggleWish = useCallback((id) => {
    setWishlist((w) => {
      const on = w.includes(id)
      notify(on ? 'Removed from wishlist' : 'Saved to wishlist')
      return on ? w.filter((x) => x !== id) : [id, ...w]
    })
  }, [notify])

  const addToBag = useCallback((id, qty = 1, variant = null) => {
    setBag((b) => {
      const key = variant ? `${id}::${variant}` : id
      const hit = b.find((l) => l.key === key)
      const next = hit
        ? b.map((l) => (l.key === key ? { ...l, qty: l.qty + qty } : l))
        : [{ key, id, qty, variant }, ...b]
      return next
    })
    const p = byId(id)
    notify(`${p ? p.name : 'Item'} added to bag`)
    setBagOpen(true)
  }, [notify])

  const setQty = useCallback((key, qty) => {
    setBag((b) => (qty <= 0 ? b.filter((l) => l.key !== key) : b.map((l) => (l.key === key ? { ...l, qty } : l))))
  }, [])

  const removeLine = useCallback((key) => setBag((b) => b.filter((l) => l.key !== key)), [])

  const pushViewed = useCallback((id) => {
    setViewed((v) => [id, ...v.filter((x) => x !== id)].slice(0, 8))
  }, [])

  /* --- account (prototype: nothing leaves the browser) ---------------- */
  const signIn = useCallback((profile) => {
    setUser({ name: profile.name || (profile.email || '').split('@')[0] || 'Zeraki girl', ...profile })
    notify(`Signed in — welcome${profile.name ? `, ${profile.name.split(' ')[0]}` : ''}`)
  }, [notify])
  const signOut = useCallback(() => { setUser(null); notify('Signed out') }, [notify])

  /* --- buy now: one product straight to checkout, bag untouched -------- */
  const buyNow = useCallback((id, qty = 1, variant = null) => {
    setBuyNowLine({ key: `now::${id}`, id, qty, variant })
  }, [])
  const clearBuyNow = useCallback(() => setBuyNowLine(null), [])

  const placeOrder = useCallback((details, items, totals) => {
    const id = `ZK-${String(Date.now()).slice(-6)}`
    const order = { id, at: new Date().toISOString(), details, items, totals }
    setOrders((o) => [order, ...o])
    if (!buyNowLine) setBag([])
    setBuyNowLine(null)
    return order
  }, [buyNowLine])

  const lines = useMemo(
    () => bag.map((l) => ({ ...l, product: byId(l.id) })).filter((l) => l.product),
    [bag]
  )
  const subtotal = useMemo(() => lines.reduce((s, l) => s + l.product.price * l.qty, 0), [lines])
  const saved = useMemo(() => lines.reduce((s, l) => s + (l.product.mrp - l.product.price) * l.qty, 0), [lines])
  const bagCount = useMemo(() => bag.reduce((s, l) => s + l.qty, 0), [bag])

  /* Lines the checkout should charge for: a Buy Now item if one is in
     flight, otherwise whatever is in the bag. */
  const checkoutLines = useMemo(() => {
    if (!buyNowLine) return lines
    const product = byId(buyNowLine.id)
    return product ? [{ ...buyNowLine, product }] : lines
  }, [buyNowLine, lines])

  const value = {
    wishlist, toggleWish, isWished: (id) => wishlist.includes(id),
    bag, lines, subtotal, saved, bagCount, addToBag, setQty, removeLine,
    bagOpen, setBagOpen, searchOpen, setSearchOpen,
    viewed, pushViewed, toast, notify,
    user, signIn, signOut,
    buyNow, buyNowLine, clearBuyNow, checkoutLines,
    orders, placeOrder,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

/* ------------------------------------------------------------------ */
/*  Scroll reveal — one shared IntersectionObserver                    */
/* ------------------------------------------------------------------ */

let observer = null
const getObserver = () => {
  if (observer || typeof IntersectionObserver === 'undefined') return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in')
          observer.unobserve(e.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
  )
  return observer
}

export function useReveal() {
  const ref = useRef(null)
  /**
   * Anything already inside the first viewport is shown before paint — the page
   * must be readable at rest, so a screenshot, a shared link or a reader who
   * never scrolls all get real content rather than an empty frame. Only what
   * starts below the fold animates in.
   */
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = getObserver()
    if (!ob) { el.classList.add('is-in'); return }
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('is-in', 'no-anim')
      return
    }
    ob.observe(el)
    return () => ob.unobserve(el)
  }, [])
  return ref
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} data-d={delay || undefined} {...rest}>
      {children}
    </Tag>
  )
}

/* ------------------------------------------------------------------ */
/*  Utils                                                              */
/* ------------------------------------------------------------------ */

export const inr = (n) => `₹${n.toLocaleString('en-IN')}`

export function useMediaQuery(q) {
  const [m, setM] = useState(() => (typeof window !== 'undefined' ? window.matchMedia(q).matches : false))
  useEffect(() => {
    const mq = window.matchMedia(q)
    const on = (e) => setM(e.matches)
    setM(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [q])
  return m
}

export function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [locked])
}
