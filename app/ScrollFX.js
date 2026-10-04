'use client';
import { useEffect } from 'react';

// Interaction layer for the whole page.
//  - Stickers drift down with you as you scroll (parallax relative to the viewport centre),
//    turn a little, lean toward the pointer, can be dragged anywhere, and spin when clicked.
//  - Travellers start exactly where their motif is painted in the background illustration,
//    pop out as you begin to scroll, and then come along with you, wandering at the screen edges.
//  - Publishes --hero (0..1 through the first screen) and --page (0..1 through the page) on <html>.
//  - Fades content up into place as it enters the viewport, and counts numbers up.
//  - Cards tilt toward the pointer; clicking empty space pops a little heart.
const REVEAL = '.reveal, .sec-head, .stat, .card, .feature, .xp li, .model, .resume, .polaroid, .record, .lead-list li, .about-copy, .contact-card, .report, .tool-group';

function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  const fmt = (v) => v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
  if (motionOff()) { el.textContent = fmt(target); return; }
  const t0 = performance.now(), dur = 1400;
  const step = (now) => {
    const k = Math.min(1, (now - t0) / dur);
    el.textContent = fmt(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const motionOff = () =>
  document.documentElement.dataset.motion === 'off' ||
  (!document.documentElement.dataset.motion && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

export default function ScrollFX() {
  useEffect(() => {
    const root = document.documentElement;
    const state = new WeakMap();
    let mx = 0, my = 0, frame = 0;

    const st = (el) => {
      let s = state.get(el);
      if (!s) { s = { dx: 0, dy: 0 }; state.set(el, s); }
      return s;
    };

    const render = () => {
      frame = 0;
      const vh = window.innerHeight;
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - vh);
      const still = motionOff();
      const page = still ? 0 : Math.min(1, y / max);
      root.style.setProperty('--hero', `${still ? 0 : Math.min(1, y / vh)}`);
      root.style.setProperty('--page', `${page}`);

      placeTravelers(y, vh, still);

      document.querySelectorAll('.sticker').forEach((el) => {
        const s = st(el);
        let ty = 0, tx = 0, rot = 0;
        if (!still) {
          const speed = parseFloat(el.dataset.speed || '0.3');
          const depth = parseFloat(el.dataset.depth || '1');
          const spin = parseFloat(el.dataset.spin || '0.04');
          // where the sticker sits relative to the middle of the screen, ignoring our own offset
          const r = el.parentElement.getBoundingClientRect();
          const base = r.top + el.offsetTop + el.offsetHeight / 2;
          const off = base - vh / 2;
          ty = -off * speed;
          rot = -off * spin;
          tx = mx * 14 * depth;
          ty += my * 10 * depth;
        }
        el.style.transform = `translate(${(tx + s.dx).toFixed(1)}px, ${(ty + s.dy).toFixed(1)}px) rotate(${rot.toFixed(1)}deg)`;
      });

    };
    const kick = () => { if (!frame) frame = requestAnimationFrame(render); };

    // where a point of the illustration currently sits on screen (object-fit: cover + object-position + zoom)
    const bgImg = document.querySelector('.bg img');
    if (bgImg && !bgImg.complete) bgImg.addEventListener('load', kick, { once: true });
    // ease-out: they leap off the painting quickly, then glide into place
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const placeTravelers = (y, vh, still) => {
      const vw = window.innerWidth;
      const mobile = vw <= 720;
      let map = null;
      if (bgImg && bgImg.naturalWidth) {
        const r = bgImg.getBoundingClientRect();
        const iw = bgImg.naturalWidth, ih = bgImg.naturalHeight;
        const s = Math.max(r.width / iw, r.height / ih);
        const dw = iw * s, dh = ih * s;
        const [px, py] = getComputedStyle(bgImg).objectPosition.split(' ').map((v) => parseFloat(v) / 100);
        map = { x: r.left + (r.width - dw) * px, y: r.top + (r.height - dh) * py, w: dw, h: dh };
      }
      // fully out of the painting after ~70% of the first screen
      const t = still ? 1 : Math.min(1, y / (vh * 0.7));
      const e = ease(t);
      document.querySelectorAll('.traveler').forEach((el) => {
        const s = st(el);
        const d = el.dataset;
        const base = el.offsetWidth || 50;
        const phase = parseFloat(d.phase || '0');
        // destination at the screen edge, wandering gently as you keep scrolling
        let ex = (parseFloat(d.dx) / 100) * vw;
        let ey = (parseFloat(d.dy) / 100) * vh;
        if (mobile) ex = ex < vw / 2 ? 22 : vw - 22;
        if (!still) {
          ey += Math.sin(y / 520 + phase) * vh * 0.05;
          ex += Math.cos(y / 760 + phase) * (mobile ? 4 : 18);
        }
        let x = ex, yy = ey, size = mobile ? base * 0.62 : base;
        if (map && t < 1) {
          const sx = map.x + parseFloat(d.ix) * map.w;
          const sy = map.y + parseFloat(d.iy) * map.h;
          const s0 = parseFloat(d.iw) * map.w;
          x = sx + (ex - sx) * e;
          yy = sy + (ey - sy) * e;
          size = s0 + (size - s0) * e;
        }
        // the "pop": invisible while it is still part of the painting, then a little bounce as it lifts off
        const opacity = still ? 1 : Math.min(1, Math.max(0, (t - 0.01) / 0.06));
        const pop = still ? 1 : 1 + 0.16 * Math.sin(Math.PI * Math.min(1, t / 0.25));
        const rot = parseFloat(d.rot || '0') + (still ? 0 : (y / 40) * (phase % 2 > 1 ? 1 : -1) * e);
        const k = (size / base) * pop;
        el.style.opacity = opacity.toFixed(3);
        el.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
        el.style.transform = `translate(${(x - base / 2 + s.dx).toFixed(1)}px, ${(yy - base / 2 + s.dy).toFixed(1)}px) scale(${k.toFixed(3)}) rotate(${rot.toFixed(1)}deg)`;
      });
    };

    const onPointerMove = (e) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
      kick();
      const card = !motionOff() && e.target.closest?.('.tilt');
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--ry', `${(((e.clientX - r.left) / r.width) - 0.5) * 7}deg`);
        card.style.setProperty('--rx', `${(0.5 - ((e.clientY - r.top) / r.height)) * 7}deg`);
      }
    };
    const onLeaveCard = (e) => {
      const card = e.target.closest?.('.tilt');
      if (card && !card.contains(e.relatedTarget)) { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); }
    };

    // click anywhere that isn't a control and a tiny heart floats up
    const BITS = ['♥', '✦', '♡', '★'];
    let nBits = 0;
    const onClick = (e) => {
      if (motionOff() || e.target.closest('a, button, input, textarea, .sticker, .traveler, .record')) return;
      const b = document.createElement('span');
      b.className = 'pop-bit';
      b.textContent = BITS[nBits++ % BITS.length];
      b.style.left = `${e.clientX}px`; b.style.top = `${e.clientY}px`;
      b.style.setProperty('--drift', `${(Math.random() - 0.5) * 60}px`);
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 1100);
    };

    // drag any sticker; a click without movement makes it spin
    let drag = null;
    const onDown = (e) => {
      const el = e.target.closest('.sticker, .traveler');
      if (!el) return;
      e.preventDefault();
      const s = st(el);
      drag = { el, s, x: e.clientX, y: e.clientY, dx: s.dx, dy: s.dy, moved: false };
      el.classList.add('dragging');
      el.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e) => {
      if (!drag) return;
      const ddx = e.clientX - drag.x, ddy = e.clientY - drag.y;
      if (Math.abs(ddx) + Math.abs(ddy) > 4) drag.moved = true;
      drag.s.dx = drag.dx + ddx; drag.s.dy = drag.dy + ddy;
      kick();
    };
    const onUp = () => {
      if (!drag) return;
      const { el, moved } = drag;
      el.classList.remove('dragging');
      if (!moved) { el.classList.remove('boing'); void el.offsetWidth; el.classList.add('boing'); }
      drag = null;
    };

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) {
        e.target.classList.add('in'); io.unobserve(e.target);
        e.target.querySelectorAll('[data-count]').forEach(countUp);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    const tag = () => {
      document.querySelectorAll(REVEAL).forEach((el, i) => {
        if (el.dataset.reveal) return;
        el.dataset.reveal = '1';
        el.style.setProperty('--i', `${i % 4}`);
        io.observe(el);
      });
      kick();
    };
    tag();
    const mo = new MutationObserver(tag);
    mo.observe(document.querySelector('main') || document.body, { childList: true, subtree: true });
    const mm = new MutationObserver(kick);
    mm.observe(root, { attributes: true, attributeFilter: ['data-motion'] });
    root.classList.add('fx');

    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    document.addEventListener('pointerout', onLeaveCard);
    document.addEventListener('click', onClick);
    render();

    return () => {
      window.removeEventListener('scroll', kick);
      window.removeEventListener('resize', kick);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      document.removeEventListener('pointerout', onLeaveCard);
      document.removeEventListener('click', onClick);
      io.disconnect(); mo.disconnect(); mm.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
