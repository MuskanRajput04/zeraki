import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Figure from '../art/Art'
import ProductCard from '../components/ProductCard'
import { Reveal, useShop } from '../store'
import { byId, bestSellers, EDITORIAL } from '../data/catalog'

export default function Wishlist() {
  const { wishlist } = useShop()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const items = wishlist.map(byId).filter(Boolean)

  return (
    <div className="wish-page">
      <header className="colhero colhero--blush">
        <div className="shell colhero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Wishlist</span>
          </nav>
          <h1 className="h1 colhero__h">Your Wishlist</h1>
          <p className="lead colhero__desc">
            {items.length > 0
              ? `${items.length} ${items.length === 1 ? 'piece' : 'pieces'} saved. They stay here until you are ready.`
              : 'Nothing saved yet — tap the heart on any piece and it will wait for you here.'}
          </p>
        </div>
      </header>

      <div className="shell section--sm">
        {items.length > 0 ? (
          <div className="pgrid">
            {items.map((p, i) => <Reveal key={p.id} delay={(i % 4) + 1}><ProductCard product={p} /></Reveal>)}
          </div>
        ) : (
          <div className="colempty">
            <Figure src={EDITORIAL.heroDetail} tone="blush" ratio="wide" alt="" />
            <h2 className="h3">Your wishlist is empty.</h2>
            <p className="muted">Start with what everyone else is loving.</p>
            <Link to="/collection/best" className="btn">Shop bestsellers</Link>
          </div>
        )}
      </div>

      {items.length === 0 && (
        <section className="section--sm">
          <div className="shell">
            <h2 className="h3" style={{ marginBottom: '1.5rem' }}>Currently crushing on</h2>
            <div className="pgrid">
              {bestSellers().slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
