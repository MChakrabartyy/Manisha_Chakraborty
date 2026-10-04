'use client';
import { useRef, useState } from 'react';

// A little video polaroid: plays muted on loop, tap to hear me.
export default function HelloVideo({ src, poster, caption }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) { v.currentTime = 0; v.play(); }
    setMuted(v.muted);
  };
  return (
    <figure className="polaroid video-polaroid" style={{ '--tilt': '2deg' }}>
      <div className="ph">
        <video ref={ref} src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" />
        <button type="button" className="sound" onClick={toggle} aria-label={muted ? 'Play with sound' : 'Mute'}>
          {muted ? '🔇 tap for sound' : '🔊 sound on'}
        </button>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
