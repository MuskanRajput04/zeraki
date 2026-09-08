import React from 'react'

/* Minimal 1.4px line icon set — one visual language across the site. */
const I = ({ children, size = 20, sw = 1.4, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true" focusable="false" {...rest}>
    {children}
  </svg>
)

export const Search = (p) => <I {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></I>
export const User = (p) => <I {...p}><circle cx="12" cy="8" r="4" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></I>
export const Heart = ({ filled, ...p }) => (
  <I {...p}><path d="M12 20.5 4.2 12.9a4.7 4.7 0 0 1 6.6-6.7l1.2 1.2 1.2-1.2a4.7 4.7 0 0 1 6.6 6.7z"
    fill={filled ? 'currentColor' : 'none'} /></I>
)
export const Bag = (p) => <I {...p}><path d="M5 8h14l-1 12H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></I>
export const Menu = (p) => <I {...p}><path d="M3 6h18M3 12h18M3 18h18" /></I>
export const Close = (p) => <I {...p}><path d="M5 5l14 14M19 5 5 19" /></I>
export const ArrowR = (p) => <I {...p}><path d="M4 12h15M13 6l6 6-6 6" /></I>
export const ArrowL = (p) => <I {...p}><path d="M20 12H5M11 18l-6-6 6-6" /></I>
export const ChevD = (p) => <I {...p}><path d="m6 9 6 6 6-6" /></I>
export const ChevR = (p) => <I {...p}><path d="m9 6 6 6-6 6" /></I>
export const Plus = (p) => <I {...p}><path d="M12 5v14M5 12h14" /></I>
export const Minus = (p) => <I {...p}><path d="M5 12h14" /></I>
export const Check = (p) => <I {...p}><path d="m4 12.5 5 5L20 6.5" /></I>
export const Filter = (p) => <I {...p}><path d="M3 6h18M6 12h12M10 18h4" /></I>
export const Sort = (p) => <I {...p}><path d="M7 4v16M7 20l-3-3M17 20V4M17 4l3 3" /></I>
export const Grid = (p) => <I {...p}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></I>
export const Zoom = (p) => <I {...p}><circle cx="11" cy="11" r="7" /><path d="M11 8v6M8 11h6M20 20l-3.5-3.5" /></I>

/* Value-prop icons — drawn, not borrowed */
export const Sparkle = (p) => <I {...p}><path d="M12 3c1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8 5-1 7-3 8-8z" /></I>
export const Exchange = (p) => <I {...p}><path d="M4 9h13l-3-3M20 15H7l3 3" /></I>
export const Truck = (p) => <I {...p}><path d="M2 7h11v9H2z" /><path d="M13 10h4l3 3v3h-7z" /><circle cx="6" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></I>
export const Shield = (p) => <I {...p}><path d="M12 3l7 3v6c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6z" /><path d="m9 12 2 2 4-4" /></I>
export const Whatsapp = (p) => <I {...p}><path d="M4 20l1.3-3.9A7.7 7.7 0 1 1 8.4 19z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.5 0 1-.5 1-1l-1.3-.8-1 .8a5 5 0 0 1-2.2-2.2l.8-1L11 9.5c0-.5-.5-1-1-1s-1 .5-1 1z" /></I>
export const Instagram = (p) => <I {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></I>
export const Facebook = (p) => <I {...p}><path d="M14.5 8.5h2.5M14.5 21V8.5a3 3 0 0 1 3-3h1" /><path d="M11 12h6" /></I>
export const Pin = (p) => <I {...p}><path d="M12 3a7 7 0 0 0-3 13.3" /><path d="M12 3a7 7 0 0 1 1 13.9" /><path d="M11 21c1-3 1.5-5 2-8" /></I>
export const Pincode = (p) => <I {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></I>
export const Ruler = (p) => <I {...p}><rect x="2" y="8" width="20" height="8" rx="1" /><path d="M7 8v3M12 8v4M17 8v3" /></I>

export function Stars({ value = 5, size = 13, className = '' }) {
  const full = Math.round(value)
  return (
    <span className={`stars ${className}`} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20"
          fill={i <= full ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.2">
          <path d="M10 1.6l2.5 5.3 5.7.8-4.1 4 1 5.7-5.1-2.8-5.1 2.8 1-5.7-4.1-4 5.7-.8z" />
        </svg>
      ))}
    </span>
  )
}

export default I
