'use client';
import { useState } from 'react';

// Flip cards: the trait on the front, a real moment that proves it on the back.
// Hover flips on desktop; tap (or Enter/Space) flips on touch and keyboard.
export default function Traits({ traits }) {
  const [flipped, setFlipped] = useState(() => new Set());
  const toggle = (i) => setFlipped((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  return (
    <div className="traits">
      {traits.map((t, i) => (
        <button type="button" key={t.title} className={`trait ${flipped.has(i) ? 'flipped' : ''}`}
          onClick={() => toggle(i)} aria-pressed={flipped.has(i)} aria-label={`${t.title}. ${t.proof}`}>
          <span className="trait-inner">
            <span className="trait-face front">
              <span className="trait-icon" aria-hidden="true">{t.icon}</span>
              <b>{t.title}</b>
              <small>{t.line}</small>
              <em>flip for proof ↻</em>
            </span>
            <span className="trait-face back">
              <span className="proof-label">the proof</span>
              <span className="proof">{t.proof}</span>
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
