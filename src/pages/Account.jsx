import React, { useEffect, useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import Figure from '../art/Art'
import { ArrowR, Check, Whatsapp, Bag, Heart, Truck } from '../components/Icons'
import { useShop, inr } from '../store'
import { EDITORIAL, BRAND } from '../data/catalog'

/* ------------------------------------------------------------------ */
/*  Shared shell — editorial image on one side, form on the other      */
/* ------------------------------------------------------------------ */

function AuthShell({ image, kicker, title, lede, children, foot }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="auth">
      <div className="auth__art" aria-hidden="true">
        <Figure src={image} tone="blush" ratio="cover" alt="" priority />
        <div className="auth__artcopy">
          <span className="auth__artmark">ZERAKI</span>
          <p className="italic-accent">Every shade of her, in one wardrobe.</p>
        </div>
      </div>

      <div className="auth__panel">
        <div className="auth__form">
          <span className="eyebrow eyebrow--berry">{kicker}</span>
          <h1 className="h1 auth__h">{title}</h1>
          {lede && <p className="lead auth__lede">{lede}</p>}
          {children}
          {foot}
          <p className="auth__demo">
            Prototype — nothing is submitted anywhere and no details leave this browser.
          </p>
        </div>
      </div>
    </div>
  )
}

function Field({ id, label, type = 'text', value, onChange, autoComplete, placeholder, error, ...rest }) {
  return (
    <div className="fld">
      <label className="field-label" htmlFor={id}>{label}</label>
      <input
        id={id} className={`field ${error ? 'is-bad' : ''}`} type={type} value={value}
        onChange={(e) => onChange(e.target.value)} autoComplete={autoComplete}
        placeholder={placeholder} aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined} {...rest}
      />
      {error && <p className="fld__err" id={`${id}-err`}>{error}</p>}
    </div>
  )
}

function PasswordField({ id, label, value, onChange, autoComplete, error, hint }) {
  const [show, setShow] = useState(false)
  return (
    <div className="fld">
      <label className="field-label" htmlFor={id}>{label}</label>
      <div className="fld__pw">
        <input
          id={id} className={`field ${error ? 'is-bad' : ''}`} type={show ? 'text' : 'password'}
          value={value} onChange={(e) => onChange(e.target.value)} autoComplete={autoComplete}
          aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined}
        />
        <button type="button" className="fld__toggle" onClick={() => setShow(!show)} aria-pressed={show}>
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      {hint && !error && <p className="fld__hint">{hint}</p>}
      {error && <p className="fld__err" id={`${id}-err`}>{error}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sign in                                                            */
/* ------------------------------------------------------------------ */

export function SignIn() {
  const { user, signIn } = useShop()
  const nav = useNavigate()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [remember, setRemember] = useState(true)
  const [err, setErr] = useState({})

  if (user) return <Navigate to="/account" replace />

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!id.trim()) next.id = 'Enter your email or mobile number.'
    if (pw.length < 4) next.pw = 'Password must be at least 4 characters.'
    setErr(next)
    if (Object.keys(next).length) return
    signIn({ email: id.includes('@') ? id : '', mobile: id.includes('@') ? '' : id, remember })
    nav('/account')
  }

  return (
    <AuthShell
      image={EDITORIAL.aboutHero}
      kicker="Welcome back"
      title="Sign in to Zeraki"
      lede="Your wishlist, your orders and your saved addresses — all where you left them."
      foot={
        <p className="auth__alt">
          New here? <Link to="/signup" className="link-u">Create an account <ArrowR size={13} /></Link>
        </p>
      }
    >
      <form className="auth__fields" onSubmit={submit} noValidate>
        <Field id="si-id" label="Email or mobile number" value={id} onChange={setId}
          autoComplete="username" placeholder="you@email.com or 98765 43210" error={err.id} />

        <PasswordField id="si-pw" label="Password" value={pw} onChange={setPw}
          autoComplete="current-password" error={err.pw} />

        <div className="auth__row">
          <label className="chk">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <span className="chk__box" aria-hidden="true">{remember && <Check size={12} sw={2.4} />}</span>
            Remember me
          </label>
          <Link to="/forgot" className="auth__link">Forgot password?</Link>
        </div>

        <button type="submit" className="btn btn--block btn--lg">Sign in</button>

        <div className="auth__or"><span>or continue with</span></div>
        <div className="auth__social">
          <button type="button" className="btn btn--ghost" onClick={() => { signIn({ name: 'Zeraki Girl', email: 'hello@example.com' }); nav('/account') }}>Google</button>
          <button type="button" className="btn btn--ghost" onClick={() => { signIn({ name: 'Zeraki Girl', email: 'hello@example.com' }); nav('/account') }}>
            <Whatsapp size={16} /> WhatsApp OTP
          </button>
        </div>
      </form>
    </AuthShell>
  )
}

/* ------------------------------------------------------------------ */
/*  Sign up                                                            */
/* ------------------------------------------------------------------ */

export function SignUp() {
  const { user, signIn } = useShop()
  const nav = useNavigate()
  const [f, setF] = useState({ name: '', email: '', mobile: '', pw: '', pw2: '' })
  const [err, setErr] = useState({})
  const set = (k) => (v) => setF((prev) => ({ ...prev, [k]: v }))

  if (user) return <Navigate to="/account" replace />

  const submit = (e) => {
    e.preventDefault()
    const n = {}
    if (f.name.trim().length < 2) n.name = 'Tell us your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) n.email = 'Enter a valid email address.'
    if (!/^[0-9]{10}$/.test(f.mobile.replace(/\D/g, ''))) n.mobile = 'Enter a 10-digit mobile number.'
    if (f.pw.length < 6) n.pw = 'Use at least 6 characters.'
    if (f.pw2 !== f.pw) n.pw2 = 'Passwords do not match.'
    setErr(n)
    if (Object.keys(n).length) return
    signIn({ name: f.name.trim(), email: f.email.trim(), mobile: f.mobile })
    nav('/account')
  }

  return (
    <AuthShell
      image={EDITORIAL.moment}
      kicker="Join the list"
      title="Create your account"
      lede="Early access to new drops, faster checkout and your wishlist saved across devices."
      foot={
        <p className="auth__alt">
          Already have an account? <Link to="/signin" className="link-u">Sign in <ArrowR size={13} /></Link>
        </p>
      }
    >
      <form className="auth__fields" onSubmit={submit} noValidate>
        <Field id="su-name" label="Full name" value={f.name} onChange={set('name')}
          autoComplete="name" placeholder="Ritika Sharma" error={err.name} />
        <Field id="su-email" label="Email address" type="email" value={f.email} onChange={set('email')}
          autoComplete="email" placeholder="you@email.com" error={err.email} />
        <Field id="su-mobile" label="Mobile number" type="tel" value={f.mobile}
          onChange={(v) => set('mobile')(v.replace(/[^\d ]/g, ''))}
          autoComplete="tel" placeholder="98765 43210" inputMode="numeric" maxLength={12} error={err.mobile} />
        <div className="auth__pair">
          <PasswordField id="su-pw" label="Password" value={f.pw} onChange={set('pw')}
            autoComplete="new-password" hint="At least 6 characters." error={err.pw} />
          <PasswordField id="su-pw2" label="Confirm password" value={f.pw2} onChange={set('pw2')}
            autoComplete="new-password" error={err.pw2} />
        </div>

        <button type="submit" className="btn btn--block btn--lg">Create account</button>
        <p className="auth__fine">
          By creating an account you agree to our <Link to="/contact">terms</Link> and{' '}
          <Link to="/contact">privacy policy</Link>.
        </p>
      </form>
    </AuthShell>
  )
}

/* ------------------------------------------------------------------ */
/*  Forgot password                                                    */
/* ------------------------------------------------------------------ */

export function Forgot() {
  const [id, setId] = useState('')
  const [sent, setSent] = useState(false)
  const [err, setErr] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!id.trim()) { setErr('Enter the email or mobile you signed up with.'); return }
    setErr('')
    setSent(true)
  }

  return (
    <AuthShell
      image={EDITORIAL.mangalFeature}
      kicker="Account help"
      title="Reset your password"
      lede={sent ? undefined : 'Enter the email or mobile number on your account and we will send you a reset link.'}
      foot={
        <p className="auth__alt">
          Remembered it? <Link to="/signin" className="link-u">Back to sign in <ArrowR size={13} /></Link>
        </p>
      }
    >
      {sent ? (
        <div className="auth__done">
          <span className="auth__doneIcon"><Check size={22} /></span>
          <h2 className="h3">Check your inbox</h2>
          <p className="muted">
            If an account exists for <strong>{id}</strong>, a reset link is on its way. The link expires in 30 minutes.
          </p>
          <button type="button" className="link-u" onClick={() => setSent(false)}>Use a different email</button>
          <p className="muted auth__help">
            Still stuck? <a href={BRAND.whatsappUrl} target="_blank" rel="noreferrer noopener">WhatsApp us</a> — {BRAND.hours}.
          </p>
        </div>
      ) : (
        <form className="auth__fields" onSubmit={submit} noValidate>
          <Field id="fp-id" label="Email or mobile number" value={id} onChange={setId}
            autoComplete="username" placeholder="you@email.com" error={err} />
          <button type="submit" className="btn btn--block btn--lg">Send reset link</button>
        </form>
      )}
    </AuthShell>
  )
}

/* ------------------------------------------------------------------ */
/*  Account home                                                       */
/* ------------------------------------------------------------------ */

export function AccountHome() {
  const { user, signOut, orders, wishlist } = useShop()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  if (!user) return <Navigate to="/signin" replace />

  return (
    <div className="acct">
      <header className="colhero colhero--blush">
        <div className="shell colhero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Account</span>
          </nav>
          <h1 className="h1 colhero__h">Hi{user.name ? `, ${user.name.split(' ')[0]}` : ' there'}.</h1>
          <p className="lead colhero__desc">Your orders, your saved pieces and your details — all in one place.</p>
        </div>
      </header>

      <div className="shell section--sm">
        <div className="acct__grid">
          <Link to="/wishlist" className="acct__tile acct__tile--blush">
            <Heart size={22} />
            <span className="acct__tileN">{wishlist.length}</span>
            <span className="acct__tileL">Saved pieces</span>
          </Link>
          <div className="acct__tile acct__tile--butter">
            <Bag size={22} />
            <span className="acct__tileN">{orders.length}</span>
            <span className="acct__tileL">Orders placed</span>
          </div>
          <Link to="/contact#track" className="acct__tile acct__tile--sage">
            <Truck size={22} />
            <span className="acct__tileL acct__tileL--solo">Track an order</span>
          </Link>
          <div className="acct__tile acct__tile--powder">
            <span className="acct__tileL acct__tileL--solo">{user.email || user.mobile || 'Signed in'}</span>
            <button type="button" className="link-u" onClick={signOut}>Sign out</button>
          </div>
        </div>

        <h2 className="h2 acct__h">Your orders</h2>
        {orders.length === 0 ? (
          <div className="acct__empty">
            <p className="muted">No orders yet — the good part is still ahead of you.</p>
            <Link to="/collection/new" className="btn">Shop new arrivals</Link>
          </div>
        ) : (
          <ul className="acct__orders">
            {orders.map((o) => (
              <li key={o.id} className="acct__order">
                <div className="acct__orderTop">
                  <span className="acct__orderId">{o.id}</span>
                  <span className="faint">{new Date(o.at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span className="tag tag--tarnish">Confirmed</span>
                  <strong>{inr(o.totals.total)}</strong>
                </div>
                <div className="acct__orderItems">
                  {o.items.map((it) => (
                    <span key={it.key} className="acct__orderItem">
                      <Figure src={it.image} tone="cream" ratio="square" alt={it.name} />
                    </span>
                  ))}
                </div>
                <Link to={`/order/${o.id}`} className="link-u">View order <ArrowR size={13} /></Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
