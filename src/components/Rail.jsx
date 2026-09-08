import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowL, ArrowR } from './Icons'

/**
 * Horizontal scroll rail with arrow controls that disable at the ends.
 * Native scroll + snap on touch — no carousel library, no layout shift.
 */
export default function Rail({ children, label, className = '' }) {
  const ref = useRef(null)
  const [state, setState] = useState({ start: true, end: false })

  const measure = useCallback(() => {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setState({ start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4 })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    measure()
    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  const nudge = (dir) => {
    const el = ref.current
    if (!el) return
    const first = el.firstElementChild
    const step = first ? first.getBoundingClientRect().width + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step * (window.innerWidth > 1100 ? 2 : 1), behavior: 'smooth' })
  }

  return (
    <div className={`rail-wrap ${className}`}>
      <div className="rail" ref={ref} role="region" aria-label={label} tabIndex={0}>
        {children}
      </div>
      <RailNav onPrev={() => nudge(-1)} onNext={() => nudge(1)} state={state} label={label} />
    </div>
  )
}

export function RailNav({ onPrev, onNext, state, label }) {
  return (
    <div className="rail-nav rail-nav--floating">
      <button type="button" className="rail-btn" onClick={onPrev} disabled={state.start} aria-label={`Scroll ${label} left`}>
        <ArrowL size={17} />
      </button>
      <button type="button" className="rail-btn" onClick={onNext} disabled={state.end} aria-label={`Scroll ${label} right`}>
        <ArrowR size={17} />
      </button>
    </div>
  )
}

/** Rail with the arrows rendered into a section header instead of floating. */
export function useRail() {
  const ref = useRef(null)
  const [state, setState] = useState({ start: true, end: false })

  const measure = useCallback(() => {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setState({ start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4 })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    measure()
    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  const nudge = (dir) => {
    const el = ref.current
    if (!el) return
    const first = el.firstElementChild
    const step = first ? first.getBoundingClientRect().width + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step * (window.innerWidth > 1100 ? 2 : 1), behavior: 'smooth' })
  }

  return { ref, state, prev: () => nudge(-1), next: () => nudge(1) }
}
