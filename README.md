# manisha-chakraborty

Personal portfolio for Manisha (Brishti) Chakraborty. Next.js App Router, plain CSS, deployed on Vercel.

```bash
npm install
npm run dev
```

## Where things live

- `app/page.js` – all page content (projects, experience, community, photo slots).
- `app/globals.css` – the whole look: palette, panels, sticker and scroll styles.
- `app/Stickers.js` – the painted sticker doodles (hearts, stars, strawberries, soot sprites, shells…).
- `app/ScrollFX.js` – the interaction layer: stickers drift with scroll, follow the pointer, can be dragged and spin on click; content fades up as it appears.
- `app/Sides.js` – the Side A (work) / Side B (person) switch.
- `public/manisha-illustration.webp` – the background illustration. Replace the file to change it.
- `public/resume/` – resume PDFs. Swap a PDF there to update the download.

## Adding photos to Side B

Put images in `public/photos/` and set each `src` in the `photos` list at the top of `app/page.js` (e.g. `'/photos/me.jpg'`).
