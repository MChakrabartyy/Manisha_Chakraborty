'use client';
import { useEffect, useState } from 'react';

// Motion switch: stills the drifting stickers and scroll effects for anyone who wants a calm page.
export default function ThemeToggle() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const m = document.documentElement.dataset.motion;
    setOn(m ? m === 'on' : !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  const flip = () => {
    const next = on ? 'off' : 'on';
    document.documentElement.dataset.motion = next;
    try { localStorage.setItem('motion', next); } catch (e) {}
    setOn(!on);
  };
  return (
    <button className="theme-btn" onClick={flip} aria-label={on ? 'Pause animations' : 'Play animations'}>
      {on ? 'Motion on' : 'Motion off'}
    </button>
  );
}
