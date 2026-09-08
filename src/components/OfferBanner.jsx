import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Figure from '../art/Art'
import { ArrowR, ArrowL, Truck, Shield } from './Icons'
import { OFFERS } from '../data/catalog'
import { inr } from '../store'

const DURATION = 6500

/**
 * Homepage offer banner.
 *
 * The live storefront uses flat JPEGs with the sale text baked in — they can't
 * reflow, can't be read by search engines, and need a designer for every price
 * change. This is the same idea built properly: photography as the ground, real
 * type on top, one slide at a time.
 *
 * Autoplay pauses on hover, on keyboard focus, when the tab is hidden, and is
 * off entirely for anyone who prefers reduced motion.
 */
export default function OfferBanner() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)
  const n = OFFERS.length

  const go = useCallback((next) => setI(((next % n) + n) % n), [n])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || paused) return
    timer.current = setTimeout(() => setI((v) => (v + 1) % n), DURATION)
    return () => clearTimeout(timer.current)
  }, [i, paused, n])

  useEffect(() => {
    const onVis = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1) }
  }

  return (
    <section
      className="offer"
      aria-labelledby="offer-h"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKey}
    >
      <h2 className="sr-only" id="offer-h">Current offers</h2>

      <div className="offer__stage" style={{ transform: `translateX(-${i * 100}%)` }}>
        {OFFERS.map((o, idx) => (
          <article
            key={o.key}
            className={`offer__slide offer__slide--${o.tone} ${idx === i ? 'is-on' : ''}`}
            aria-hidden={idx !== i}
            inert={idx !== i ? '' : undefined}
          >
            <div className="offer__bg" aria-hidden="true">
              <Figure src={o.bg} ratio="cover" tone="berry" priority={idx === 0} />
            </div>

            <div className="shell offer__inner">
              <div className="offer__copy">
                <span className="offer__eyebrow">{o.eyebrow}</span>
                <p className="offer__title">
                  {o.titleLines.map((l) => <span key={l}>{l}</span>)}
                </p>
                <p className="offer__line">{o.line}</p>
                <p className="offer__from">
                  <span>Starting at</span> <strong>{inr(o.from)}</strong>
                </p>
                <div className="offer__ctas">
                  <Link to={o.to} className="btn btn--light btn--lg" tabIndex={idx === i ? 0 : -1}>
                    {o.cta}
                  </Link>
                  <Link to="/collection/bogo" className="btn btn--outline-light btn--lg" tabIndex={idx === i ? 0 : -1}>
                    All B1G1 styles
                  </Link>
                </div>
                <ul className="offer__perks">
                  <li><Truck size={15} /> Free shipping</li>
                  <li><Shield size={15} /> COD available</li>
                </ul>
              </div>

              <div className="offer__shot" aria-hidden="true">
                <Figure src={o.shot} ratio="portrait" tone="cream" priority={idx === 0} />
                <span className="offer__badge"><b>B1G1</b><i>free</i></span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="offer__ui shell">
        <button type="button" className="offer__arrow" onClick={() => go(i - 1)} aria-label="Previous offer">
          <ArrowL size={17} />
        </button>
        <ol className="offer__dots">
          {OFFERS.map((o, idx) => (
            <li key={o.key}>
              <button
                type="button"
                className={idx === i ? 'is-on' : ''}
                onClick={() => go(idx)}
                aria-label={`Offer ${idx + 1} of ${n}: ${o.cta}`}
                aria-current={idx === i}
              >
                <span style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? 'paused' : 'running' }} />
              </button>
            </li>
          ))}
        </ol>
        <button type="button" className="offer__arrow" onClick={() => go(i + 1)} aria-label="Next offer">
          <ArrowR size={17} />
        </button>
      </div>
    </section>
  )
}
