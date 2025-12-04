# RECYCLEON TECHNOLOGIES - Complete Code Export

## Project Overview
Next.js 13 biotech water treatment website with Supabase backend, featuring a modern dark theme design with blue/slate color palette.

## Tech Stack
- **Framework**: Next.js 13.5.1
- **UI**: React 18.2, Tailwind CSS, shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Fonts**: Inter (sans), JetBrains Mono (mono)

---

## Table of Contents
1. [Configuration Files](#configuration-files)
2. [App Files](#app-files)
3. [Components](#components)
4. [Sections](#sections)
5. [Library Files](#library-files)
6. [Database Migration](#database-migration)
7. [Setup Instructions](#setup-instructions)

---

## Configuration Files

### `.env`
```env
NEXT_PUBLIC_SUPABASE_URL=https://tbkhfsmizldtcrasazhc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRia2hmc21pemxkdGNyYXNhemhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1Mzc1MzEsImV4cCI6MjA3OTExMzUzMX0.pBW2NBbZdqoS_r4YQqRy_ufPtBjzbTXAJee5StQ6Z9o
```

### `package.json`
```json
{
  "name": "nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@next/swc-wasm-nodejs": "13.5.1",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.2",
    "@supabase/supabase-js": "^2.58.0",
    "@types/node": "20.6.2",
    "@types/react": "18.2.22",
    "@types/react-dom": "18.2.7",
    "autoprefixer": "10.4.15",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "eslint": "8.49.0",
    "eslint-config-next": "13.5.1",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.446.0",
    "next": "13.5.1",
    "next-themes": "^0.3.0",
    "postcss": "8.4.30",
    "react": "18.2.0",
    "react-day-picker": "^8.10.1",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss": "3.3.3",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "5.2.2",
    "vaul": "^0.9.9",
    "zod": "^3.23.8"
  }
}
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        wider: '0.05em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        deepWater: {
          50: '#92A3CB',
          100: '#6F7595',
          200: '#525A77',
          300: '#353F56',
          400: '#1A2436',
        },
        mistySlate: {
          50: '#B4BED8',
          100: '#8C96B4',
          200: '#6A708A',
          300: '#444B63',
          400: '#2A3147',
        },
        hybrid: {
          50: '#B4BED8',
          100: '#8C96B4',
          200: '#6A708A',
          300: '#353F56',
          400: '#1A2436',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDelay: {
        '700': '700ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
```

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
```

### `postcss.config.js`
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### `.eslintrc.json`
```json
{
  "extends": "next/core-web-vitals"
}
```

### `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

---

## App Files

### `app/layout.tsx`
```typescript
import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Recycleon Technologies - Nature\'s Architects',
  description: 'Swiss Biotech precision water treatment and purification solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
```

### `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 18% 12%;
    --foreground: 0 0% 98%;
    --card: 220 15% 16%;
    --card-foreground: 0 0% 98%;
    --popover: 220 15% 16%;
    --popover-foreground: 0 0% 98%;
    --primary: 215 25% 72%;
    --primary-foreground: 220 18% 12%;
    --secondary: 217 19% 27%;
    --secondary-foreground: 0 0% 98%;
    --muted: 217 19% 27%;
    --muted-foreground: 215 15% 65%;
    --accent: 215 25% 72%;
    --accent-foreground: 220 18% 12%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 217 15% 25%;
    --input: 217 15% 25%;
    --ring: 215 25% 72%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-[#1A2436] text-foreground;
  }
  html {
    scroll-behavior: smooth;
  }
}
```

### `app/page.tsx`
```typescript
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { GridOverlay } from '@/components/GridOverlay';
import { Preloader } from '@/components/Preloader';
import { Footer } from '@/components/Footer';
import { OurScience } from '@/components/sections/OurScience';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { Projects } from '@/components/sections/Projects';
import { OurPartners } from '@/components/sections/OurPartners';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { Resources } from '@/components/sections/Resources';
import { GetInTouch } from '@/components/sections/GetInTouch';

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="relative">
        <GridOverlay />
        <Navbar />
        <Hero />
        <OurScience />
        <WhatWeDo />
        <Projects />
        <OurPartners />
        <WhyChoose />
        <Resources />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
}
```

---

## Components

### `components/Navbar.tsx`
```typescript
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1A2436]/80 backdrop-blur-xl border-b border-[#444B63]/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6F7595] to-[#8C96B4] flex items-center justify-center">
              <span className="text-[#1A2436] font-bold text-lg tracking-tighter">
                RT
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="uppercase tracking-wider text-xs font-mono border-[#8C96B4]/30 hover:bg-[#8C96B4]/10 hover:border-[#8C96B4] transition-all"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
}
```

### `components/Hero.tsx`
```typescript
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, FlaskConical } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-[#B4BED8] leading-[0.9]">
              NATURE&apos;S
              <br />
              ARCHITECTS.
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="uppercase tracking-wider text-xs font-mono bg-[#8C96B4] hover:bg-[#B4BED8] text-[#1A2436] transition-all group"
              >
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="uppercase tracking-wider text-xs font-mono border-[#8C96B4]/30 hover:bg-[#8C96B4]/10 hover:border-[#8C96B4] transition-all group"
              >
                <FlaskConical className="mr-2 h-4 w-4" />
                Explore Projects
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-radial from-[#6F7595]/40 via-[#6A708A]/30 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-[10%] bg-gradient-radial from-[#8C96B4]/50 via-[#525A77]/40 to-transparent rounded-full blur-2xl animate-pulse [animation-delay:700ms]" />
                <div className="absolute inset-[20%] bg-gradient-radial from-[#B4BED8]/60 via-[#8C96B4]/30 to-transparent rounded-full blur-xl animate-pulse [animation-delay:1000ms]" />
                <div className="absolute inset-[30%] bg-gradient-radial from-[#92A3CB]/70 to-transparent rounded-full blur-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6A708A]/30 to-transparent" />
    </section>
  );
}
```

### `components/Footer.tsx`
```typescript
import Link from 'next/link';

export function Footer() {
  const footerLinks = [
    {
      title: 'COMPANY',
      links: [
        { label: 'Services', href: '/services' },
        { label: 'Projects', href: '/projects' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'SERVICES',
      links: [
        { label: 'Treatment', href: '/services/treatment' },
        { label: 'Monitoring', href: '/services/monitoring' },
        { label: 'Design', href: '/services/design' },
        { label: 'Maintenance', href: '/services/maintenance' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Resources', href: '/resources' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
      ],
    },
    {
      title: 'LEGAL',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Sitemap', href: '/sitemap' },
        { label: 'Support', href: '/support' },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#444B63]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-20">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-[#B4BED8]">
            BACALT
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C96B4] mb-6">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6A708A] hover:text-[#B4BED8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#444B63]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#6A708A] font-mono">
              © 2025 RECYCLEON TECHNOLOGIES. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A708A] hover:text-[#B4BED8] transition-colors text-xs font-mono uppercase tracking-wider"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A708A] hover:text-[#B4BED8] transition-colors text-xs font-mono uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A708A] hover:text-[#B4BED8] transition-colors text-xs font-mono uppercase tracking-wider"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### `components/Preloader.tsx`
```typescript
'use client';

import { useEffect, useState } from 'react';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#1A2436] flex items-center justify-center transition-opacity duration-500">
      <div className="relative">
        <div className="robot-container">
          <div className="robot-head">
            <div className="robot-antenna" />
            <div className="robot-eyes">
              <div className="robot-eye left" />
              <div className="robot-eye right" />
            </div>
          </div>
          <div className="robot-body">
            <div className="robot-panel" />
          </div>
          <div className="robot-arms">
            <div className="robot-arm left" />
            <div className="robot-arm right" />
          </div>
        </div>

        <p className="mt-8 text-center text-[#B4BED8] uppercase tracking-wider text-xs font-mono animate-pulse">
          INITIALIZING SYSTEM
        </p>
      </div>

      <style jsx>{`
        .robot-container {
          width: 120px;
          height: 140px;
          position: relative;
          animation: robotFloat 2s ease-in-out infinite;
        }

        @keyframes robotFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .robot-head {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #8C96B4 0%, #6A708A 100%);
          border-radius: 12px;
          position: relative;
          margin: 0 auto 10px;
          box-shadow: 0 4px 20px rgba(140, 150, 180, 0.3);
        }

        .robot-antenna {
          width: 3px;
          height: 15px;
          background: #6A708A;
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .robot-antenna::after {
          content: '';
          width: 8px;
          height: 8px;
          background: #92A3CB;
          border-radius: 50%;
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          animation: antennaBlink 1s ease-in-out infinite;
        }

        @keyframes antennaBlink {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px #92A3CB; }
          50% { opacity: 0.3; box-shadow: 0 0 5px #92A3CB; }
        }

        .robot-eyes {
          display: flex;
          justify-content: space-around;
          padding: 20px 12px 0;
        }

        .robot-eye {
          width: 12px;
          height: 12px;
          background: #1A2436;
          border-radius: 50%;
          animation: eyeBlink 3s ease-in-out infinite;
        }

        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        .robot-body {
          width: 80px;
          height: 50px;
          background: linear-gradient(135deg, #6F7595 0%, #525A77 100%);
          border-radius: 8px;
          margin: 0 auto;
          position: relative;
          box-shadow: 0 4px 20px rgba(111, 117, 149, 0.3);
        }

        .robot-panel {
          width: 40px;
          height: 25px;
          background: #444B63;
          border-radius: 4px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .robot-panel::before,
        .robot-panel::after {
          content: '';
          width: 8px;
          height: 2px;
          background: #92A3CB;
          position: absolute;
          left: 8px;
          animation: panelLight 1.5s ease-in-out infinite;
        }

        .robot-panel::before {
          top: 8px;
        }

        .robot-panel::after {
          top: 15px;
          animation-delay: 0.3s;
        }

        @keyframes panelLight {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; box-shadow: 0 0 8px #92A3CB; }
        }

        .robot-arms {
          display: flex;
          justify-content: space-between;
          width: 120px;
          position: absolute;
          top: 70px;
          left: 0;
        }

        .robot-arm {
          width: 15px;
          height: 40px;
          background: linear-gradient(180deg, #6A708A 0%, #525A77 100%);
          border-radius: 8px;
          animation: armWave 1.5s ease-in-out infinite;
        }

        .robot-arm.left {
          transform-origin: top center;
        }

        .robot-arm.right {
          transform-origin: top center;
          animation-delay: 0.75s;
        }

        @keyframes armWave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
      `}</style>
    </div>
  );
}
```

### `components/GridOverlay.tsx`
```typescript
'use client';

import { useState, useEffect } from 'react';

export function GridOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'g' && e.ctrlKey) {
        e.preventDefault();
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="max-w-[1440px] mx-auto h-full px-4 md:px-8">
        <div className="grid grid-cols-12 gap-4 h-full opacity-[0.05]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-l border-r border-[#B4BED8] h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
```

### `components/FilterCard.tsx`
```typescript
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FilterCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badges: string[];
}

export function FilterCard({ icon: Icon, title, description, badges }: FilterCardProps) {
  return (
    <div className="group relative bg-[#2A3147]/40 backdrop-blur-sm border border-[#444B63]/30 rounded-2xl p-8 hover:border-[#8C96B4]/50 transition-all duration-300 hover:bg-[#2A3147]/60">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8C96B4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

      <div className="relative">
        <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#6F7595] to-[#525A77] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-[#1A2436]" />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#B4BED8] mb-4">
          {title}
        </h3>

        <p className="text-[#8C96B4] leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className="uppercase tracking-wider text-[10px] font-mono border-[#6A708A]/40 text-[#8C96B4] hover:border-[#8C96B4] hover:bg-[#8C96B4]/10 transition-all"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## Sections

### `components/sections/OurScience.tsx`
```typescript
import { FilterCard } from '@/components/FilterCard';
import { Droplets, Microscope, Activity } from 'lucide-react';

export function OurScience() {
  const filters = [
    {
      icon: Droplets,
      title: 'Biomimetic Filters',
      description:
        'Inspired by natural filtration systems found in aquatic ecosystems. Our proprietary membrane technology mimics biological processes to achieve unprecedented purification efficiency.',
      badges: ['Bio-inspired', 'Self-cleaning', 'Energy efficient'],
    },
    {
      icon: Microscope,
      title: 'Molecular Precision',
      description:
        'Advanced nanofiltration capable of removing contaminants at the molecular level. Targets specific pollutants while preserving essential minerals and beneficial compounds.',
      badges: ['Nano-scale', 'Selective', 'Mineral retention'],
    },
    {
      icon: Activity,
      title: 'Real-time Analysis',
      description:
        'Integrated sensor networks provide continuous monitoring of water quality parameters. AI-powered analytics predict maintenance needs and optimize treatment protocols.',
      badges: ['IoT sensors', 'Predictive AI', 'Cloud monitoring'],
    },
  ];

  return (
    <section className="relative py-32 border-t border-[#444B63]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[#B4BED8] mb-6">
            OUR SCIENCE
          </h2>
          <p className="text-lg text-[#8C96B4] max-w-3xl">
            Advanced filtration technology rooted in biomimicry and precision engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filters.map((filter, index) => (
            <FilterCard
              key={index}
              icon={filter.icon}
              title={filter.title}
              description={filter.description}
              badges={filter.badges}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/sections/WhatWeDo.tsx`
```typescript
'use client';

import { Beaker, Radar, PenTool, Wrench } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ServiceItem({ icon: Icon, title, description }: ServiceItemProps) {
  return (
    <div className="group relative">
      <div className="flex gap-6 items-start">
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6F7595] to-[#525A77] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <Icon className="w-10 h-10 text-[#1A2436] transition-transform duration-500 group-hover:scale-110" />
          </div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8C96B4] to-[#6A708A] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        </div>

        <div className="flex-1 pt-2">
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-[#B4BED8] mb-3 group-hover:text-[#92A3CB] transition-colors">
            {title}
          </h3>
          <p className="text-[#8C96B4] leading-relaxed group-hover:text-[#B4BED8] transition-colors">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#444B63]/0 to-transparent group-hover:via-[#8C96B4]/50 transition-all duration-500" />
    </div>
  );
}

export function WhatWeDo() {
  const services = [
    {
      icon: Beaker,
      title: 'Treatment',
      description:
        'Comprehensive water and wastewater treatment solutions using our biomimetic filtration systems. From industrial-scale operations to specialized applications.',
    },
    {
      icon: Radar,
      title: 'Monitoring',
      description:
        'Real-time water quality monitoring with IoT sensor networks. Advanced analytics and predictive maintenance powered by machine learning algorithms.',
    },
    {
      icon: PenTool,
      title: 'Design',
      description:
        'Custom treatment system design tailored to your specific needs. Our engineering team combines scientific expertise with practical implementation experience.',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description:
        'Ongoing system maintenance and optimization services. Proactive monitoring ensures maximum efficiency and extends equipment lifecycle.',
    },
  ];

  return (
    <section className="relative py-32 border-t border-[#444B63]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[#B4BED8] mb-6">
            WHAT WE DO
          </h2>
          <p className="text-lg text-[#8C96B4] max-w-3xl">
            End-to-end water treatment solutions, from design to maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-16">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `components/sections/Projects.tsx`
```typescript
'use client';

import { useEffect, useState } from 'react';
import { supabase, Project } from '@/lib/supabase';
import { MapPin, Calendar, Gauge } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-[#2A3147]/40 backdrop-blur-sm border border-[#444B63]/30 rounded-2xl overflow-hidden hover:border-[#8C96B4]/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8C96B4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {project.image_url && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2436] to-transparent opacity-60" />

          <div className="absolute top-4 right-4">
            <Badge className="bg-[#6F7595]/90 backdrop-blur-sm text-white border-none uppercase tracking-wider text-xs font-mono">
              {project.category}
            </Badge>
          </div>
        </div>
      )}

      <div className="relative p-6">
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-[#B4BED8] mb-3 group-hover:text-[#92A3CB] transition-colors">
          {project.title}
        </h3>

        <p className="text-[#8C96B4] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-[#6A708A]">
            <MapPin className="w-4 h-4" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#6A708A]">
            <Calendar className="w-4 h-4" />
            <span>Completed {project.completion_year}</span>
          </div>
          {project.capacity && (
            <div className="flex items-center gap-2 text-xs text-[#6A708A]">
              <Gauge className="w-4 h-4" />
              <span>{project.capacity}</span>
            </div>
          )}
        </div>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="uppercase tracking-wider text-[10px] font-mono border-[#6A708A]/40 text-[#8C96B4] hover:border-[#8C96B4] hover:bg-[#8C96B4]/10 transition-all"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Industrial', 'Municipal', 'Research', 'Agricultural'];

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('completion_year', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
      setFilteredProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative py-32 border-t border-[#444B63]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[#B4BED8] mb-6">
            PROJECTS
          </h2>
          <p className="text-lg text-[#8C96B4] max-w-3xl">
            Real-world implementations of our water treatment technology across diverse industries.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#6F7595] text-white shadow-lg shadow-[#6F7595]/30'
                  : 'bg-[#2A3147]/40 text-[#8C96B4] border border-[#444B63]/30 hover:border-[#8C96B4]/50 hover:bg-[#2A3147]/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-4 border-[#6A708A] border-t-[#B4BED8] rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#8C96B4]">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
```

### `components/sections/WhyChoose.tsx`
```typescript
export function WhyChoose() {
  return (
    <section className="relative py-32 border-t border-[#444B63]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[#B4BED8]">
          WHY CHOOSE RECYCLEON
        </h2>
      </div>
    </section>
  );
}
```

### `components/sections/OurPartners.tsx`
```typescript
export function OurPartners() {
  return (
    <section className="relative py-32 border-t border-[#444B63]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[#B4BED8]">
          OUR PARTNERS
        </h2>
      </div>
    </section>
  );
}
```

### `components/sections/Resources.tsx`
```typescript
export function Resources() {
  return (
    <section className="relative py-32 border-t border-[#444B63]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[#B4BED8]">
          RESOURCES
        </h2>
      </div>
    </section>
  );
}
```

### `components/sections/GetInTouch.tsx`
```typescript
export function GetInTouch() {
  return (
    <section className="relative py-32 border-t border-[#444B63]/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-[#B4BED8]">
          GET IN TOUCH
        </h2>
      </div>
    </section>
  );
}
```

---

## Library Files

### `lib/supabase.ts`
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  completion_year: number;
  image_url: string | null;
  capacity: string | null;
  tags: string[];
  created_at: string;
  updated_at: string;
}
```

### `lib/utils.ts`
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Database Migration

### `supabase/migrations/20251119075324_create_projects_table.sql`
```sql
/*
  # Create Projects Table

  ## Overview
  This migration creates the projects table for the RECYCLEON water treatment portfolio.
  Projects showcase different water treatment implementations across various industries.

  ## New Tables

  ### `projects`
  Stores project information for the portfolio section.

  - `id` (uuid, primary key) - Unique identifier for each project
  - `title` (text, required) - Project name/title
  - `description` (text, required) - Detailed project description
  - `category` (text, required) - Project category/type (Industrial, Municipal, Research, Agricultural)
  - `location` (text, required) - Geographic location of the project
  - `completion_year` (integer, required) - Year the project was completed
  - `image_url` (text, optional) - URL to project image from Pexels
  - `capacity` (text, optional) - Treatment capacity (e.g., "50,000 L/day")
  - `tags` (text[], optional) - Array of technology/feature tags
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Record update timestamp

  ## Security

  - Enable RLS on `projects` table
  - Add policy for public read access (projects are publicly viewable on the website)
  - Add policy for authenticated users to insert/update/delete (for admin management)

  ## Indexes

  - Index on `category` for efficient filtering
  - Index on `completion_year` for sorting

  ## Important Notes

  1. Projects are publicly readable but only authenticated users can modify
  2. Categories are: 'Industrial', 'Municipal', 'Research', 'Agricultural'
  3. Tags array supports multiple technology identifiers per project
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  location text NOT NULL,
  completion_year integer NOT NULL,
  image_url text,
  capacity text,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS projects_category_idx ON projects(category);
CREATE INDEX IF NOT EXISTS projects_completion_year_idx ON projects(completion_year DESC);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access (anyone can view projects)
CREATE POLICY "Projects are publicly readable"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Allow authenticated users to insert projects
CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to update projects
CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow authenticated users to delete projects
CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

-- Add comment to table
COMMENT ON TABLE projects IS 'Water treatment project portfolio showcasing RECYCLEON implementations';
```

---

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory with the Supabase credentials provided above.

### 3. Database Setup
The migration has already been applied to the Supabase database. The `projects` table is ready to use.

### 4. shadcn/ui Components
All shadcn/ui components are already installed. The complete list includes:
- accordion, alert-dialog, alert, aspect-ratio, avatar
- badge, breadcrumb, button, calendar, card, carousel, chart
- checkbox, collapsible, command, context-menu
- dialog, drawer, dropdown-menu
- form, hover-card
- input, input-otp
- label, menubar, navigation-menu
- pagination, popover, progress
- radio-group, resizable, scroll-area, select, separator, sheet
- skeleton, slider, sonner, switch
- table, tabs, textarea, toast, toaster
- toggle, toggle-group, tooltip

### 5. Run Development Server
```bash
npm run dev
```

### 6. Build for Production
```bash
npm run build
```

---

## Font Requirements (TODO)

The following custom fonts need to be implemented:
1. **Headings**: Awesome Lathusca (not on Google Fonts - need alternative or custom font files)
2. **Subheadings**: The Seasons (not on Google Fonts - need alternative or custom font files)
3. **Body**: Cante (not on Google Fonts - need alternative or custom font files)
4. **Footer**: Copperplate Gothic 29 BC (not on Google Fonts - use Balthazar as alternative)

**Recommended Google Fonts Alternatives:**
- Headings: Playfair Display or Cinzel
- Subheadings: Cormorant Garamond
- Body: Lora or Merriweather
- Footer: Balthazar

---

## Sections That Need Content (TODO)

The following sections are placeholder stubs and need full implementation:

1. **WhyChoose** (`components/sections/WhyChoose.tsx`)
   - Add reasons to choose Recycleon
   - Statistics/achievements
   - Comparison features

2. **OurPartners** (`components/sections/OurPartners.tsx`)
   - Partner logos
   - Client testimonials
   - Partnership details

3. **Resources** (`components/sections/Resources.tsx`)
   - Blog posts
   - Case studies
   - Whitepapers
   - Downloads

4. **GetInTouch** (`components/sections/GetInTouch.tsx`)
   - Contact form
   - Office locations
   - Email/phone information

---

## Project Structure
```
project/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── GetInTouch.tsx
│   │   ├── OurPartners.tsx
│   │   ├── OurScience.tsx
│   │   ├── Projects.tsx
│   │   ├── Resources.tsx
│   │   ├── WhatWeDo.tsx
│   │   └── WhyChoose.tsx
│   ├── ui/ (40+ shadcn components)
│   ├── FilterCard.tsx
│   ├── Footer.tsx
│   ├── GridOverlay.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── Preloader.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   ├── supabase.ts
│   └── utils.ts
├── supabase/
│   └── migrations/
│       └── 20251119075324_create_projects_table.sql
├── .env
├── components.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Key Features

1. **Animated Preloader**: Robot animation with floating effect
2. **Grid Overlay**: Press Ctrl+G to toggle design grid
3. **Responsive Design**: Mobile-first approach with breakpoints
4. **Dark Theme**: Blue/slate color palette (#1A2436, #8C96B4, #B4BED8)
5. **Supabase Integration**: Projects loaded from database with filtering
6. **Smooth Animations**: Hover effects, transitions, and micro-interactions

---

## Color Palette

### Primary Colors
- Deep Water 400: `#1A2436` (Background)
- Misty Slate 50: `#B4BED8` (Headings)
- Misty Slate 100: `#8C96B4` (Primary actions)
- Misty Slate 200: `#6A708A` (Muted text)

### Accent Colors
- Deep Water 100: `#6F7595`
- Deep Water 200: `#525A77`
- Misty Slate 300: `#444B63`
- Misty Slate 400: `#2A3147`

---

## Notes for Gemini 3.0

- The project is fully functional with all dependencies installed
- Database migration is complete and ready
- Four sections need full content implementation (marked as TODO)
- Custom fonts need to be addressed (either purchase licenses or use Google Fonts alternatives)
- All UI components from shadcn/ui are available for use
- The design follows a modern, minimalist aesthetic with careful attention to animations

---

**Generated**: November 19, 2025
**Project**: RECYCLEON Technologies Website
**Framework**: Next.js 13.5.1
**Database**: Supabase (PostgreSQL)
