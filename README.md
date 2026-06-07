# Awesome Personal Portfolio

![Portfolio Banner](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-ff69b4?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Bun](https://img.shields.io/badge/Bun-1.2-FBF0DF?style=for-the-badge&logo=bun)

A modern, high-performance portfolio website built with **Next.js 16 (App Router)**. Features a sleek dark-themed UI, fluid animations, terminal-style cards, and a well-structured component architecture.

---

## Features

- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion + GSAP for premium feel
- **Terminal-Style Cards** - Unique card design with window controls
- **Spotlight Effects** - Interactive hover effects on cards
- **Categorized Projects** - Dynamic filtering and detailed project pages
- **Secure Contact Form** - Zod validation, rate limiting, honeypot, XSS protection
- **JSON-Driven Content** - Update projects, skills, experience without code changes
- **Vercel Blob Storage** - Project images stored in Vercel Blob, served via secure API proxy
- **Section-Based Architecture** - Components organized by route and section

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Styling** | Tailwind CSS 4.0 |
| **UI Components** | Shadcn UI (Radix UI) |
| **Animations** | Framer Motion, GSAP |
| **State Management** | Zustand |
| **Forms** | React Hook Form |
| **Validation** | Zod |
| **Email** | Nodemailer (SMTP) |
| **Storage** | Vercel Blob Storage |
| **Runtime** | Bun (recommended) |

---

## Project Structure

```
.
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── api/contact/              # Contact API endpoint
│   ├── api/images/[...slug]/     # Vercel Blob image proxy
│   ├── contact/                  # Contact page
│   ├── home/                     # Home page
│   ├── projects/                 # Projects page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── loading.tsx               # Global loading state
│   └── not-found.tsx             # 404 page
│
├── components/                   # React components
│   ├── about/                    # About page components
│   │   ├── experience/           # Timeline components
│   │   ├── shared/               # Shared utilities (SpotlightCard)
│   │   ├── skills/               # Skill visualization
│   │   └── story/                # Story section components
│   │
│   ├── contact/                  # Contact page components
│   │   ├── form/                 # Contact form
│   │   ├── info/                 # Info cards (Availability, Methods, Social)
│   │   └── shared/               # Shared utilities
│   │
│   ├── home/                     # Home page components
│   │   ├── actions/              # Action buttons
│   │   └── hero/                 # Hero content
│   │
│   ├── layout/                   # Layout components
│   │   ├── PortfolioLayout.tsx   # Main layout wrapper
│   │   └── Sidebar.tsx           # Navigation sidebar
│   │
│   ├── projects/                 # Project components
│   └── ui/                       # Shadcn UI components
│
├── data/                         # JSON-driven content
│   ├── projects/                 # Individual project JSONs
│   ├── skills/                   # Skills data
│   ├── experience/               # Experience data
│   ├── projects.ts               # Projects aggregator
│   ├── skills.ts                 # Skills aggregator
│   └── experience.ts             # Experience aggregator
│
├── lib/                          # Utilities
│   ├── mailer.ts                 # Nodemailer config
│   ├── rate-limit.ts             # In-memory rate limiter
│   └── utils.ts                  # General utilities
│
├── schema/                       # Zod schemas
│   └── contactSchema.ts          # Contact form validation
│
└── types/                        # TypeScript interfaces
    ├── contactForm.ts
    ├── projects.ts
    ├── skills.ts
    └── tabs.ts
```

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 20+

### Installation

```bash
git clone https://github.com/Raka-coder/awesome-person-portfolio.git
cd awesome-person-portfolio
bun install
```

### Environment Variables

Create `.env.local` in the root directory, or use `.env.example` as a template:

```env
# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECEIVER=receiver-email@gmail.com

# Optional: Contact email displayed on frontend
NEXT_PUBLIC_CONTACT_EMAIL=your-email@gmail.com

# Vercel Blob Storage (for project images)
BLOB_STORE_ID=your-store-id
BLOB_READ_WRITE_TOKEN=your-token-here

# Optional: Webhook public key for blob storage
BLOB_WEBHOOK_PUBLIC_KEY=your-public-key
BLOB_PREFIX=path-images
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
bun build
bun start
```

---

## Component Architecture

### Section-Based Organization

Components are organized by route and section:

```
components/{route}/{section}/{Component}.tsx
```

**Example:**
```
components/about/story/PhilosophyCard.tsx
components/contact/info/AvailabilityCard.tsx
components/home/hero/HeroContent.tsx
```

### Reusable Patterns

**SpotlightCard** - Interactive card with mouse-following gradient:
```tsx
import SpotlightCard from "@/components/about/shared/SpotlightCard";

<SpotlightCard className="custom-classes">
  {children}
</SpotlightCard>
```

**Terminal Header** - Window-style card header:
```tsx
<div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-secondary/30">
  <div className="flex gap-1.5">
    <div className="w-3 h-3 rounded-full bg-red-500/50" />
    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
  </div>
</div>
```

---

## Security Features

| Feature | Description |
|---------|-------------|
| **Honeypot Field** | Hidden field to trap spam bots |
| **Rate Limiting** | Prevents multiple submissions (in-memory) |
| **XSS Protection** | Server-side HTML sanitization |
| **Zod Validation** | Strict schema validation on all inputs |

> **Note:** Rate limiter is in-memory only. Use Redis/Upstash for production serverless deployments.

---

## Image Storage (Vercel Blob)

Project images are stored in **Vercel Blob Storage** under the `projects-images/` directory and served through a secure API proxy route.

### Architecture

```
Client → /api/images/{filename} → @vercel/blob (private store) → Image stream
```

- **Private store** - Images are not publicly accessible; require `BLOB_READ_WRITE_TOKEN`
- **API proxy** - `app/api/images/[...slug]/route.ts` fetches and streams images
- **Cache headers** - Immutable caching (`max-age=31536000`) for performance
- **No secrets exposed** - Token and Store ID live in `.env.local` only

### File Naming Convention

| Blob Path | API Route | JSON `image` field |
|-----------|-----------|-------------------|
| `projects-images/geometpop.webp` | `/api/images/geometpop.webp` | `/api/images/geometpop.webp` |

---

## Adding New Projects

1. Upload the project image to Vercel Blob Storage under the `projects-images/` directory (e.g. `projects-images/my-project.webp`)

2. Create a new JSON file in `data/projects/`:
   ```json
   {
     "id": 10,
     "name": "Project Name",
     "description": "Description here",
     "longDescription": "Detailed description",
     "categories": ["web", "frontend"],
     "links": [
       { "type": "github", "url": "https://github.com/username/repo", "label": "View Code" },
       { "type": "live", "url": "https://demo-url.com", "label": "Live Demo" }
     ],
     "image": "/api/images/my-project.webp",
     "imageAlt": "Project Name Preview",
     "technologies": ["Next.js", "TypeScript", "Tailwind"],
     "status": "completed",
     "featured": false,
     "createdAt": "2025-01-01"
   }
   ```

3. Import in `data/projects.ts`:
   ```typescript
   import project10 from "./projects/project-10.json";
   ```

---

## Author

**Raka Restu**

- GitHub: [@Raka-coder](https://github.com/Raka-coder)
- LinkedIn: [Raka Restu Saputra](https://linkedin.com/in/raka-restu-saputra)
- Portfolio: [raka-restu.vercel.app](https://raka-restu.vercel.app/)

---

## License

MIT License