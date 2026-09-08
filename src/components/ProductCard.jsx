import React from 'react'
import { Link } from 'react-router-dom'
import Figure from '../art/Art'
import { Heart, Stars, Plus } from './Icons'
import { useShop, inr } from '../store'

/* Badge priority — a card never shows more than TWO. */
const BADGE_ORDER = ['new', 'bestseller', 'bogo']
const BADGE_META = {
  new: { label: 'New', cls: 'tag--new' },
  bestseller: { label: 'Bestseller', cls: 'tag--best' },
  bogo: { label: 'B1G1', cls: 'tag--bogo' },
}

/**
 * Badges earn their place. Anti-tarnish is true of the whole range, so it is
 * communicated in the filters, the PDP and its own edit — not stamped on every
 * card, where it would stop meaning anything. Never more than two.
 */
function badgesFor(p) {
  const all = [...p.badges]
  if (p.bogo) all.push('bogo')
  return BADGE_ORDER.filter((b) => all.includes(b)).slice(0, 2)
}

export default function ProductCard({ product: p, size = 'md', showQuickAdd = true, priority = false }) {
  const { isWished, toggleWish, addToBag } = useShop()
  const wished = isWished(p.id)
  const badges = badgesFor(p)
  const hasHover = p.hoverImage && p.hoverImage !== p.image

  return (
    <article className={`pcard pcard--${size}`}>
      <div className="pcard__media">
        <Link to={`/product/${p.id}`} className="pcard__link" aria-label={p.name}>
          <span className="pcard__img pcard__img--a">
            <Figure
              src={p.image}
              tone={p.tone}
              ratio="product"
              priority={priority}
              alt={`${p.name} — ${p.plating} ${p.type.toLowerCase()} by Zeraki Jewels`}
            />
          </span>
          {hasHover && (
            <span className="pcard__img pcard__img--b" aria-hidden="true">
              <Figure src={p.hoverImage} tone={p.tone} ratio="product" />
            </span>
          )}
        </Link>

        {badges.length > 0 && (
          <div className="pcard__badges">
            {badges.map((b) => (
              <span key={b} className={`tag ${BADGE_META[b].cls}`}>{BADGE_META[b].label}</span>
            ))}
          </div>
        )}

        <button
          type="button"
          className={`wish ${wished ? 'is-on' : ''}`}
          onClick={() => toggleWish(p.id)}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${p.name} from wishlist` : `Save ${p.name} to wishlist`}
        >
          <Heart size={17} filled={wished} />
        </button>

        {showQuickAdd && (
          <div className="pcard__quick">
            <button type="button" className="btn btn--light btn--sm" onClick={() => addToBag(p.id)}>
              <Plus size={14} /> Quick Add
            </button>
          </div>
        )}

        {!p.inStock && <span className="pcard__oos">Sold out</span>}
      </div>

      <div className="pcard__body">
        <h3 className="pcard__name">
          <Link to={`/product/${p.id}`}>{p.name}</Link>
        </h3>

        <div className="pcard__meta">
          <span className="pcard__rating">
            <Stars value={p.rating} size={11} />
            <span className="pcard__rnum">{p.rating.toFixed(1)}</span>
            <span className="pcard__rcount">({p.reviews.toLocaleString('en-IN')})</span>
          </span>
          {p.packSize && <span className="pcard__pack">{p.packSize}</span>}
        </div>

        <div className="pcard__price">
          <span className="pcard__now">{inr(p.price)}</span>
          <span className="pcard__was">{inr(p.mrp)}</span>
          <span className="pcard__off">{p.discount}% off</span>
        </div>
      </div>
    </article>
  )
}
