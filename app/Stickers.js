// Painted-sticker doodles that echo the motifs in the illustration.
// Colours are deliberately muted so they sit with the artwork instead of shouting over it.
const svg = (viewBox, children) => (
  <svg className="sticker-svg" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">{children}</svg>
);
const OUT = '#fffaf3';

export const Heart = ({ color = '#d77a9c', line = '#a8456c' }) => svg('0 0 100 92', <>
  <path d="M50 88 C20 66 4 50 4 30 C4 14 16 4 30 4 C40 4 46 10 50 18 C54 10 60 4 70 4 C84 4 96 14 96 30 C96 50 80 66 50 88Z" fill={color} stroke={OUT} strokeWidth="6" strokeLinejoin="round" />
  <path d="M50 72 C30 57 19 46 19 33 C19 24 25 18 32 18 C40 18 45 24 50 31 C55 24 60 18 68 18 C75 18 81 24 81 33 C81 46 70 57 50 72Z" fill="none" stroke={line} strokeWidth="3.5" opacity=".8" />
</>);

export const Star = ({ points = 5, color = '#e8c15a' }) => {
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? 46 : points === 4 ? 13 : 20;
    const a = (Math.PI / points) * i - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`);
  }
  return svg('0 0 100 100', <polygon points={pts.join(' ')} fill={color} stroke="#3a2f2a" strokeWidth="3" strokeLinejoin="round" />);
};

export const Strawberry = () => svg('0 0 100 110', <>
  <path d="M50 104 C26 92 12 70 14 50 C16 34 30 28 50 30 C70 28 84 34 86 50 C88 70 74 92 50 104Z" fill="#bf3f4c" stroke={OUT} strokeWidth="6" strokeLinejoin="round" />
  {[[38, 44], [54, 42], [66, 52], [44, 58], [58, 64], [34, 66], [50, 76], [62, 78]].map(([x, y]) => <ellipse key={`${x}${y}`} cx={x} cy={y} rx="2" ry="3.2" fill="#f2d79a" />)}
  <path d="M50 34 L36 18 L48 24 L50 8 L54 24 L66 16 L58 32 L74 30 L56 38 Z" fill="#5f8f55" stroke={OUT} strokeWidth="4" strokeLinejoin="round" />
</>);

export const Soot = () => {
  const spikes = [];
  for (let i = 0; i < 28; i++) {
    const a = (Math.PI * 2 * i) / 28, b = a + Math.PI / 28;
    spikes.push(`${(50 + 40 * Math.cos(a)).toFixed(1)},${(50 + 40 * Math.sin(a)).toFixed(1)}`);
    spikes.push(`${(50 + 31 * Math.cos(b)).toFixed(1)},${(50 + 31 * Math.sin(b)).toFixed(1)}`);
  }
  return svg('0 0 100 100', <>
    <polygon points={spikes.join(' ')} fill="#3b3537" stroke={OUT} strokeWidth="3" strokeLinejoin="round" />
    <circle cx="38" cy="47" r="10" fill="#fff" /><circle cx="62" cy="47" r="10" fill="#fff" />
    <circle cx="40" cy="49" r="5" fill="#141012" /><circle cx="60" cy="49" r="5" fill="#141012" />
  </>);
};

export const Shell = () => svg('0 0 100 100', <>
  <path d="M50 6 C78 6 96 26 94 52 C92 78 72 94 48 94 C22 94 6 76 6 52 C6 26 24 6 50 6Z" fill="#c9c2df" stroke={OUT} strokeWidth="5" />
  <path d="M52 50 C52 46 46 44 44 48 C41 54 48 60 55 57 C63 53 62 41 54 37 C43 31 32 41 33 52 C35 66 50 72 62 67 C76 60 78 41 68 30 C58 19 38 19 27 31" fill="none" stroke="#8b82ad" strokeWidth="4" strokeLinecap="round" />
</>);

export const Starfish = () => {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 46 : 17;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push([50 + r * Math.cos(a), 52 + r * Math.sin(a)]);
  }
  const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ') + 'Z';
  return svg('0 0 100 100', <>
    <path d={d} fill="#efcfae" stroke={OUT} strokeWidth="7" strokeLinejoin="round" />
    {pts.filter((_, i) => i % 2 === 0).map(([x, y], i) => <circle key={i} cx={(50 + (x - 50) * 0.55).toFixed(1)} cy={(52 + (y - 52) * 0.55).toFixed(1)} r="2.4" fill="#d59f78" />)}
  </>);
};

export const Lily = () => svg('0 0 100 110', <>
  <path d="M50 100 C50 84 52 70 50 58" stroke="#6f9a66" strokeWidth="4" fill="none" />
  {[-62, -22, 22, 62, 180].map((a) => (
    <path key={a} d="M50 58 C40 44 40 22 50 6 C60 22 60 44 50 58Z" fill="#cf7598" stroke={OUT} strokeWidth="3" transform={`rotate(${a} 50 58)`} />
  ))}
  {[-30, 0, 30].map((a) => <line key={a} x1="50" y1="58" x2="50" y2="34" stroke="#8a3b5c" strokeWidth="2" transform={`rotate(${a} 50 58)`} />)}
  <circle cx="50" cy="58" r="5" fill="#e6c36a" />
</>);

export const Leaf = () => svg('0 0 100 100', <>
  <path d="M20 90 C30 60 50 40 86 14" stroke="#5e8a5a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
  {[[34, 66, -30], [48, 50, -50], [62, 36, -35], [44, 70, 40], [58, 54, 30], [72, 40, 25]].map(([x, y, r], i) => (
    <ellipse key={i} cx={x} cy={y} rx="7" ry="15" fill="#8fb487" stroke={OUT} strokeWidth="2.5" transform={`rotate(${r} ${x} ${y})`} />
  ))}
</>);

const ART = { heart: Heart, star: Star, strawberry: Strawberry, soot: Soot, shell: Shell, starfish: Starfish, lily: Lily, leaf: Leaf };

// A movable sticker. ScrollFX drives its position from scroll, pointer and drag.
export function Sticker({ type, props, size = 64, style, speed = 0.3, depth = 1, spin = 0.04 }) {
  const Art = ART[type];
  return (
    <span className="sticker" data-speed={speed} data-depth={depth} data-spin={spin} style={{ width: size, ...style }} title="Drag me ♡">
      <span className="sticker-in"><Art {...props} /></span>
    </span>
  );
}

// Just the artwork, for elements that position themselves (the travelling motifs).
Sticker.Art = function StickerArt({ type, props }) {
  const Art = ART[type];
  return <Art {...props} />;
};
