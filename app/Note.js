// A handwritten margin note with a hand-drawn arrow that sketches itself in on reveal.
const ARROWS = {
  'down-left': 'M70 6 C60 30 40 44 12 52 M12 52 L26 40 M12 52 L28 58',
  'down-right': 'M10 6 C20 30 40 44 68 52 M68 52 L54 40 M68 52 L52 58',
  left: 'M74 30 C56 18 34 18 8 30 M8 30 L20 18 M8 30 L22 40',
  right: 'M6 30 C24 18 46 18 72 30 M72 30 L60 18 M72 30 L58 40',
  'up-left': 'M70 54 C60 30 40 16 12 8 M12 8 L28 4 M12 8 L22 22',
};

export default function Note({ children, arrow, className = '', style }) {
  return (
    <span className={`note reveal ${className} ${arrow ? `arrow-${arrow}` : ''}`} style={style} aria-hidden="true">
      {arrow && arrow.startsWith('up') && <Arrow d={ARROWS[arrow]} />}
      {arrow === 'left' && <Arrow d={ARROWS[arrow]} />}
      <span className="note-text">{children}</span>
      {arrow && !arrow.startsWith('up') && arrow !== 'left' && <Arrow d={ARROWS[arrow]} />}
    </span>
  );
}

const Arrow = ({ d }) => (
  <svg className="note-arrow" viewBox="0 0 80 62" fill="none"><path d={d} pathLength="1" /></svg>
);
