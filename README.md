# Emma Fergen — Portfolio

Personal portfolio and resume site built with Next.js, React, and Tailwind CSS.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
  components/    # UI components (Hero, Navbar, WorkCard, etc.)
  layout.tsx     # Root layout with theme provider and navigation
  page.tsx       # Main page composing all sections
lib/
  data.ts        # All portfolio content (work history, skills, bio)
public/
  avatar.jpg     # Profile photo
```

## Customization

All content (work items, skills, bio, social links) lives in `lib/data.ts`. Update that file to change what appears on the site.

## Build

```bash
npm run build
```
