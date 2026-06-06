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
| **Runtime** | Bun (recommended) |

---

## Project Structure

```
.
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── api/contact/              # Contact API endpoint
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

Create `.env.local` in the root directory:

```env
# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECEIVER=receiver-email@gmail.com

# Optional: Contact email displayed on frontend
NEXT_PUBLIC_CONTACT_EMAIL=your-email@gmail.com
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

## Adding New Projects

1. Create a new JSON file in `data/projects/`:
   ```json
   {
     "id": 10,
     "title": "Project Name",
     "description": "Description here",
     "image": "https://example.com/image.png",
     "category": "web",
     "github": "https://github.com/username/repo",
     "demo": "https://demo-url.com",
     "tech": ["Next.js", "TypeScript", "Tailwind"]
   }
   ```

2. Import in `data/projects.ts`:
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