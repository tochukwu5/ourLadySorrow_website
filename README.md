# Our Lady of Sorrow — Website (React + Tailwind)

A rebuild of the Society of Our Lady of Sorrow (OLS-OLO) website using React (Vite) and Tailwind CSS.

## Running the project

```bash
npm install
npm run dev        # local development server
npm run build       # production build -> dist/
npm run preview     # preview the production build
```

## Project structure

```
src/
  components/   Navbar, Footer, Logo, PageHero, ScrollToTop
  pages/        Home, About, Projects, Blog, Contact, NotFound
  index.css     Tailwind + shared component classes (.btn-primary, .section-eyebrow, etc.)
public/images/  All site images (see "Replacing images" below)
```

Pages are wired up in `src/App.jsx` using `react-router-dom`. Routes:

- `/` - Home
- `/about` - About (Our Story, Mission & Vision, Vocation Movement, Humble Servers, Testimonials)
- `/projects` - Projects (Conference House land purchase + other planned projects)
- `/blog` - Blog (3 posts)
- `/contact` - Contact (address, phone, email, message form, map)

The old Mission page was folded into `/about` (Mission & Vision section), and the fixed
30th-Anniversary banner, Seal Hour, and Benefactors sections were removed everywhere.

## Replacing images

All images currently live in `public/images/` and are referenced with plain paths like
`/images/lady-of-sorrow.jpg`. To swap in your own photos:

1. Drop the new image into `public/images/` (any filename).
2. Update the `src="/images/your-file.jpg"` reference in the relevant page/component file.

Placeholder areas waiting on real photos from you:
- Humble Servers (About page) - 3 profile cards using `user-icon.jpg` as a placeholder avatar.
- Testimonials (About page) - 4 testimonials using `user-icon.jpg` as a placeholder avatar.
- Logo mark - currently uses the Our Lady of Sorrows devotional image
  (`lady-of-sorrow.jpg`) as a circular mark next to the wordmark in `src/components/Logo.jsx`.

## Colors & fonts

Defined in `tailwind.config.js`:
- `maroon` - primary church color (deep red/burgundy)
- `gold` - accent color
- `parchment` - background cream
- Fonts: Cormorant Garamond (headings) and Lora (body text), loaded via Google Fonts in
  `src/index.css`.

## Future: MERN / admin blog uploads

The Blog page (`src/pages/Blog.jsx`) currently renders a static `posts` array. When ready to add
a backend so an admin can upload blog content:

1. Replace the static `posts` array with a `fetch()`/`axios` call to an Express API
   (e.g. `GET /api/posts`) inside a `useEffect`.
2. Build a small Express + MongoDB API with a `Post` model (title, excerpt, body, image, date).
3. Add an admin-only route/page with a form (and auth) to create/edit/delete posts.

The rest of the site (Home, About, Projects, Contact) can stay static/hand-edited unless you
later want those editable too.
