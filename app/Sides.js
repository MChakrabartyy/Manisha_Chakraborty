'use client';
import { useEffect, useState } from 'react';

export default function Sides({ work, person }) {
  const [side, setSide] = useState('a');

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash;
      if (h === '#side-b') setSide('b');
      else if (h === '#side-a') setSide('a');
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const pick = (s) => {
    setSide(s);
    history.replaceState(null, '', s === 'a' ? '#side-a' : '#side-b');
    document.getElementById('sides')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="sides">
      <div className="wrap panel pick-panel">
        <p className="pick-label">Pick a side</p>
        <div className="sides-pick" role="tablist">
          <button role="tab" aria-selected={side === 'a'} className={`record ${side === 'a' ? 'on' : ''}`} onClick={() => pick('a')}>
            <span className="tab-icon a">♡</span>
            <span className="txt"><b>Side A · The Work</b><small>Experience, projects and how I build</small></span>
          </button>
          <button role="tab" aria-selected={side === 'b'} className={`record ${side === 'b' ? 'on' : ''}`} onClick={() => pick('b')}>
            <span className="tab-icon b">✿</span>
            <span className="txt"><b>Side B · The Person</b><small>Who I am when I’m not shipping</small></span>
          </button>
        </div>
      </div>
      <div key={side} className="side-body">{side === 'a' ? work : person}</div>
    </div>
  );
}
