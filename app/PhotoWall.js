'use client';
import { useEffect, useState } from 'react';

// Polaroid wall; click (or press Enter on) a photo to see it big. Esc or click outside to close.
export default function PhotoWall({ photos }) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % photos.length);
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, photos.length]);

  return (
    <>
      <div className="polaroids">
        {photos.map((ph, i) => (
          <figure className="polaroid" key={ph.src} style={{ '--tilt': `${ph.tilt}deg` }}>
            <button type="button" className="ph" onClick={() => setOpen(i)} aria-label={`Open photo: ${ph.caption}`}>
              <img src={ph.src} alt={ph.caption} loading="lazy" style={{ objectPosition: ph.pos || '50% 40%' }} />
            </button>
            <figcaption>{ph.caption}</figcaption>
          </figure>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={photos[open].caption} onClick={() => setOpen(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={photos[open].src} alt={photos[open].caption} />
            <figcaption>{photos[open].caption}</figcaption>
            <button type="button" className="lb-close" onClick={() => setOpen(null)} aria-label="Close">×</button>
            <button type="button" className="lb-prev" onClick={() => setOpen((open - 1 + photos.length) % photos.length)} aria-label="Previous photo">‹</button>
            <button type="button" className="lb-next" onClick={() => setOpen((open + 1) % photos.length)} aria-label="Next photo">›</button>
          </figure>
        </div>
      )}
    </>
  );
}
