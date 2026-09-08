/**
 * ZERAKI — FIGURE
 * ------------------------------------------------------------------
 * Every image slot on the site goes through this one component, so art
 * direction stays consistent: fixed aspect ratios, cover-fit, lazy loading
 * below the fold, a tinted placeholder while the file decodes, and a shared
 * hover-zoom hook for parent components.
 *
 * All photography is Zeraki's own, taken from the live storefront catalogue
 * and pre-cropped to the ratios below, so nothing is letterboxed or squashed.
 *
 *     <Figure src={p.image} alt={p.name} ratio="product" tone="blush" />
 */

import React, { useState } from 'react'

const RATIOS = {
  square: '1 / 1',
  portrait: '3 / 4',
  tall: '4 / 5',
  product: '4 / 5',
  wide: '16 / 10',
  cinema: '16 / 7',
  cover: 'auto',
}

export default function Figure({
  src,
  alt = '',
  ratio = 'product',
  tone = 'cream',
  className = '',
  style,
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false)
  const ar = RATIOS[ratio] || ratio

  return (
    <div
      className={`fig fig--${tone} ${loaded ? 'is-loaded' : ''} ${className}`}
      style={{ '--ar': ar, ...style }}
    >
      {src && (
        <img
          className="fig__img"
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      )}
    </div>
  )
}

/** Typographic divider — a hairline rule, no illustration. */
export function Ornament({ className = '' }) {
  return (
    <span className={`orn ${className}`} aria-hidden="true">
      <i /><b /><i />
    </span>
  )
}
