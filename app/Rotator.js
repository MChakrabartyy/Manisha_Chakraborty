'use client';
import { useEffect, useState } from 'react';

// Cycles through a few true things, typed out one at a time.
export default function Rotator({ items }) {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(items[0]);
  const [phase, setPhase] = useState('hold');

  useEffect(() => {
    const still = document.documentElement.dataset.motion === 'off' ||
      (!document.documentElement.dataset.motion && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    let t;
    const word = items[i];
    if (phase === 'hold') t = setTimeout(() => setPhase(still ? 'swap' : 'erase'), 2600);
    else if (phase === 'swap') { setI((i + 1) % items.length); setShown(items[(i + 1) % items.length]); setPhase('hold'); }
    else if (phase === 'erase') {
      if (shown.length) t = setTimeout(() => setShown(shown.slice(0, -1)), 22);
      else { setI((i + 1) % items.length); setPhase('type'); }
    } else if (phase === 'type') {
      if (shown.length < word.length) t = setTimeout(() => setShown(word.slice(0, shown.length + 1)), 38);
      else setPhase('hold');
    }
    return () => clearTimeout(t);
  }, [phase, shown, i, items]);

  return (
    <span className="rotator" aria-live="polite">
      <span className="rotator-text">{shown}</span><span className="caret" aria-hidden="true" />
    </span>
  );
}
