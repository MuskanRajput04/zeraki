import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Figure from '../art/Art'
import ProductCard from '../components/ProductCard'
import { Plus, Minus, Close, ArrowR, Truck, Shield, Exchange, Check } from '../components/Icons'
import { useShop, inr, Reveal } from '../store'
import { bestSellers, BRAND } from '../data/catalog'

export default function Cart() {
  const { lines, subtotal, saved, setQty, removeLine, clearBuyNow } = useShop()
  const nav = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const goCheckout = () => { clearBuyNow(); nav('/checkout') }

  return (
    <div className="cartpage">
      <header className="colhero colhero--cream">
        <div className="shell colhero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Bag</span>
          </nav>
          <h1 className="h1 colhero__h">Your Bag</h1>
          <p className="lead colhero__desc">
            {lines.length > 0
              ? `${lines.length} ${lines.length === 1 ? 'piece' : 'pieces'} ready to go. Free shipping is already included.`
              : 'Nothing in the bag yet — your next favourite is one scroll away.'}
          </p>
        </div>
      </header>

      {lines.length === 0 ? (
        <div className="shell section--sm">
          <div className="colempty">
            <h2 className="h3">Your bag is empty.</h2>
            <p className="muted">Start with what everyone else is loving.</p>
            <Link to="/collection/best" className="btn">Shop bestsellers</Link>
          </div>
          <h2 className="h2 cart__more">Currently crushing on</h2>
          <div className="pgrid">
            {bestSellers().slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      ) : (
        <div className="shell cart__grid">
          <section aria-labelledby="cart-items-h">
            <h2 className="sr-only" id="cart-items-h">Items in your bag</h2>
            <ul className="cart__list">
              {lines.map((l) => (
                <li key={l.key} className="cline">
                  <Link to={`/product/${l.product.id}`} className="cline__img">
                    <Figure src={l.product.image} tone={l.product.tone} ratio="square" alt={l.product.name} />
                  </Link>
                  <div className="cline__body">
                    <Link to={`/product/${l.product.id}`} className="cline__name">{l.product.name}</Link>
                    <p className="cline__meta">
                      {l.variant || l.product.packSize || l.product.plating}
                      {l.product.length ? ` · ${l.product.length}` : ''}
                    </p>
                    <p className="cline__price">
                      {inr(l.product.price)}
                      <span className="cline__was">{inr(l.product.mrp)}</span>
                      <span className="cline__off">{l.product.discount}% off</span>
                    </p>
                    <div className="cline__controls">
                      <div className="qty">
                        <button type="button" onClick={() => setQty(l.key, l.qty - 1)} aria-label={`Decrease quantity of ${l.product.name}`}><Minus size={15} /></button>
                        <span aria-live="polite">{l.qty}</span>
                        <button type="button" onClick={() => setQty(l.key, l.qty + 1)} aria-label={`Increase quantity of ${l.product.name}`}><Plus size={15} /></button>
                      </div>
                      <button type="button" className="cline__remove" onClick={() => removeLine(l.key)}>
                        <Close size={14} /> Remove
                      </button>
                    </div>
                  </div>
                  <p className="cline__total">{inr(l.product.price * l.qty)}</p>
                </li>
              ))}
            </ul>

            <Link to="/shop" className="link-u cart__cont">Continue shopping <ArrowR size={14} /></Link>
          </section>

          <aside className="cart__summary" aria-labelledby="cart-sum-h">
            <h2 className="h3" id="cart-sum-h">Order summary</h2>
            <dl className="sumlist">
              <div><dt>Subtotal</dt><dd>{inr(subtotal)}</dd></div>
              <div><dt>You save</dt><dd className="sumlist__save">− {inr(saved)}</dd></div>
              <div><dt>Shipping</dt><dd className="sumlist__free">Free</dd></div>
            </dl>
            <div className="sumtotal">
              <span>Total</span>
              <strong>{inr(subtotal)}</strong>
            </div>
            <p className="cart__tax">Inclusive of all taxes. Pay online at checkout for an extra ₹50 off.</p>

            <button type="button" className="btn btn--block btn--lg" onClick={goCheckout}>
              Proceed to checkout
            </button>

            <ul className="cart__trust">
              <li><Truck size={16} /> Free shipping across India</li>
              <li><Shield size={16} /> Secure payments · COD available</li>
              <li><Exchange size={16} /> {BRAND.policy.returnWindow} easy exchange</li>
            </ul>
          </aside>
        </div>
      )}
    </div>
  )
}
