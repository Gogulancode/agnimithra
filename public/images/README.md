# Images folder

All site images live here. To swap any image, drop a new file at the **same path with the same filename** — no code change needed. The site references everything by path, not by file content.

## Folder layout

```
public/images/
├── hero/                       Hero slider on Home page (3 images)
│   ├── hero-1.jpg              Slide 1 (default: molten metal pour)
│   ├── hero-2.jpg              Slide 2 (steel & foundry plants)
│   └── hero-3.jpg              Slide 3 (pan-India delivery)
│
├── about/                      About-section imagery
│   ├── about-plant.jpg         Home page About preview (right-side image)
│   └── about-furnace.jpg       About page main image
│
├── backgrounds/                Full-width section backgrounds (overlaid with brand tint)
│   ├── page-hero-bg.jpg        Top banner on About/Products/Industries/Gallery/Contact
│   ├── commitment-bg.jpg       "Our Commitment" section on Home
│   └── brochure-cta-bg.jpg     "Download Brochure" red banner on Home
│
├── products/                   Product cards & detail pages (8 images)
│   ├── refractory-castables.jpg
│   ├── gunning-mass.jpg
│   ├── ramming-mass.jpg
│   ├── fire-bricks.jpg
│   ├── mortars.jpg
│   ├── insulation-materials.jpg
│   ├── industrial-oils.jpg
│   └── industrial-consumables.jpg
│   (filename = product slug + .jpg)
│
├── industries/                 Industry cards on Home + Industries page (6 images)
│   ├── steel.jpg
│   ├── cement.jpg
│   ├── foundry.jpg
│   ├── glass.jpg
│   ├── thermal-power.jpg
│   └── petrochemical.jpg
│
└── gallery/                    Gallery page tiles (8 images)
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    ├── gallery-6.jpg
    ├── gallery-7.jpg
    └── gallery-8.jpg
```

## Recommended specs

| Folder         | Aspect ratio | Min width | Max file size | Notes                                        |
| -------------- | ------------ | --------- | ------------- | -------------------------------------------- |
| `hero/`        | 16:10 or 4:3 | 1600 px   | ~500 KB       | Right side of hero. Shown 600–900 px wide.   |
| `about/`       | 16:10        | 1600 px   | ~500 KB       | Used in card layouts.                        |
| `backgrounds/` | 16:9 or wider| 2000 px   | ~800 KB       | Full-bleed, will be tinted dark navy or red. |
| `products/`    | 1:1 (square) | 900 px    | ~200 KB       | Shown as squares and 4:3 cards.              |
| `industries/`  | 16:10        | 900 px    | ~200 KB       | Card thumbnails, get dark gradient overlay.  |
| `gallery/`     | any (square preferred) | 1000 px | ~300 KB  | Click opens full-size lightbox.              |

All formats: **JPG** preferred for photos, **PNG** for graphics with transparency.

## How the site picks them up

- **Products & industries** → image path comes from arrays in [`src/data/site.js`](../../src/data/site.js)
- **Hero slides** → `heroSlides` array in `site.js`
- **Backgrounds** → `backgrounds` object in `site.js`
- **Gallery** → `gallery` array in `site.js`

To add a NEW product (or industry), add an entry to `src/data/site.js` AND drop the matching image file here.

## Adding new images

1. Drop the file at the right path with the expected filename (e.g. `products/<slug>.jpg`)
2. If filename is different, update the matching `image:` string in `src/data/site.js`
3. That's it — Vite serves anything under `/public` at the URL root, so the path `/images/products/<slug>.jpg` will just work
