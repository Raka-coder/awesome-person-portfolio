# 🚀 Awesome Personal Portfolio

![Portfolio Banner](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-ff69b4?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)

A modern, high-performance portfolio website built with **Next.js 15 (App Router)**. This project features a sleek dark-themed UI, fluid animations, and a well-structured data management system.

---

## ✨ Features

- 📱 **Fully Responsive:** Optimized for mobile, tablet, and desktop.
- 🎭 **Smooth Animations:** Powered by Framer Motion and GSAP for a premium feel.
- 🗂️ **Categorized Projects:** Dynamic project filtering and detailed project pages.
- 🛡️ **Secure Contact Form:** Features Zod validation, Rate Limiting, Sanitization, and Honeypot protection.
- 🏷️ **Shields.io Integration:** Skills are displayed using high-quality for-the-badge icons.
- 🏗️ **JSON-Driven Content:** Easily update projects, experience, and skills without touching the code.

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4.0
- **UI Components:** Shadcn UI (Radix UI)
- **Animations:** Framer Motion, GSAP
- **State Management:** Zustand

### Form Handling & Validation

- **Forms:** React Hook Form
- **Validation:** Zod

### Backend & Infrastructure

- **API:** Next.js Server Actions & Route Handlers
- **Email:** Nodemailer (SMTP)
- **Runtime:** Bun / Node.js

---

## 📂 Project Structure

```bash
.
├── app/                  # Next.js App Router (Pages & APIs)
├── components/           # Reusable UI components
├── data/                 # JSON-based content (Projects, Skills, Experience)
├── hooks/                # Custom React hooks
├── lib/                  # Utilities (Mailer, Rate-limiter, etc.)
├── public/               # Static assets
├── schema/               # Zod validation schemas
└── types/                # TypeScript interfaces
```

---

## 🚀 Getting Started

### 1. Prerequisites

- [Bun](https://bun.sh/) (Recommended) or Node.js 20+

### 2. Installation

```bash
git clone https://github.com/Raka-coder/awesome-person-portfolio.git
cd awesome-person-portfolio
bun install # or npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECEIVER=receiver-email@gmail.com
```

### 4. Development

```bash
bun dev # or npm run dev
```

---

## 🛡️ Security Features

We take security seriously. The following measures are implemented:

- ✅ **Honeypot Field:** To prevent automated spam bots.
- ✅ **Rate Limiting:** Prevents brute-force/multiple submissions from the same IP.
- ✅ **Server-side Sanitization:** Escapes HTML to prevent XSS.
- ✅ **Strict Zod Validation:** Ensures only valid data reaches the server.

---

## 👤 Author

**Raka Restu**

- GitHub: [@Raka-coder](https://github.com/Raka-coder)
- Portfolio: [raka-restu.vercel.app](https://raka-restu.vercel.app/)

---

## 📄 License

This project is licensed under the MIT License.
