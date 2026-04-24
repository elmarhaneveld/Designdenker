This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Adding Project Photos

Project photos are read from `src/data/content.json` and served from the `public` folder.

1. Create a folder structure like:

```bash
public/projects/polestar/
public/projects/tomtom/
```

2. Put your image files in those folders, for example:

```bash
public/projects/polestar/cover.jpg
public/projects/polestar/gallery-01.jpg
public/projects/polestar/gallery-02.jpg
public/projects/polestar/gallery-03.jpg
```

3. `src/data/content.json` already includes paths for all projects. Use this file naming pattern in each folder:

- `cover.jpg` (first image, also used for project card + project sheet hero)
- `gallery-01.jpg`
- `gallery-02.jpg`
- `gallery-03.jpg` (only needed for projects with 4 images)

4. Export image assets with these sizes:

- **`cover.jpg` or any image with `"span": "full"`**: `2520x1080` px (aspect ratio `21:9`)
- **regular gallery image (`"span"` omitted or `"half"`)**: `1600x1200` px (aspect ratio `4:3`)
- **format**: JPG, quality around `80-85`, keep each file ideally below `500 KB` (up to `900 KB` for detailed hero images)

5. Current project folders expected by `content.json`:

- `public/projects/polestar/`
- `public/projects/tomtom/`
- `public/projects/air-france-klm/`
- `public/projects/eon-drive/`
- `public/projects/centraal-beheer/`
- `public/projects/vrank/`
- `public/projects/makuuchi/`
- `public/projects/createnew/`

6. Paths in `src/data/content.json` must start with `/`:

```json
{
  "title": "Polestar",
  "images": [
    { "src": "/projects/polestar/cover.jpg", "caption": "Component library overview", "span": "full" },
    { "src": "/projects/polestar/components.jpg", "caption": "Component documentation" },
    { "src": "/projects/polestar/tokens.jpg", "caption": "Token architecture" }
  ]
}
```

How it appears on the site:
- Project cards use the first non-empty `images[].src` as the card cover.
- Project sheet hero uses the first non-empty `images[].src`.
- Gallery tiles use each `images[].src`.
- If a `src` is empty, the existing placeholder is shown.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
