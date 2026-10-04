'use client';
import { useEffect } from 'react';

// Interaction layer for the whole page.
//  - Stickers drift down with you as you scroll (parallax relative to the viewport centre),
//    turn a little, lean toward the pointer, can be dragged anywhere, and spin when clicked.
//  - Companions ([data-travel]) ride down the page edge with overall scroll progress.
//  - Publishes --hero (0..1 through the first screen) and --page (0..1 through the page) on <html>.
//  - Fades content up into place as it enters the viewport.
const REVEAL = '.reveal, .sec-head, .stat, .card, .feature, .xp li, .model, .resume, .polaroid, .record, .lead-list li, .about-copy, .contact-card';

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

      document.querySelectorAll('[data-travel]').forEach((el) => {
        const span = parseFloat(el.dataset.travel || '0.7');
        el.style.transform = `translateY(${(page * span * vh).toFixed(1)}px) rotate(${(page * 540).toFixed(0)}deg)`;
      });
    };
    const kick = () => { if (!frame) frame = requestAnimationFrame(render); };

    const onPointerMove = (e) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
      kick();
    };

    // drag any sticker; a click without movement makes it spin
    let drag = null;
    const onDown = (e) => {
      const el = e.target.closest('.sticker');
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
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
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
    render();

    return () => {
      window.removeEventListener('scroll', kick);
      window.removeEventListener('resize', kick);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      io.disconnect(); mo.disconnect(); mm.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
