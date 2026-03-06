# Testing My Skills

A workspace containing multiple Next.js projects and examples, including a standalone Next.js app and a monorepo setup.

## 📁 Project Structure

This workspace contains two main projects:

### 1. **my first fail** - Standalone Next.js Application
A Next.js project with TypeScript, styling, and UI components.

**Location:** `./my first fail/`

**Key Features:**
- Next.js with TypeScript
- ESLint configuration
- PostCSS and Tailwind CSS support
- ShadCN/UI components
- Component library structure

**Tech Stack:**
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### 2. **next-monorepo** - Monorepo with Turborepo
A scalable monorepo setup using Turborepo for managing multiple packages and applications.

**Location:** `./next-monorepo/`

**Structure:**
- **apps/web** - Main web application (Next.js)
- **packages/eslint-config** - Shared ESLint configurations
- **packages/typescript-config** - Shared TypeScript configurations
- **packages/ui** - Shared UI component library

**Tech Stack:**
- Turborepo
- pnpm workspaces
- Next.js
- React
- TypeScript
- shadcn/ui

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended for monorepo)

### Installation

#### For "my first fail" project:
```bash
cd "my first fail"
npm install
# or
pnpm install
```

#### For "next-monorepo" project:
```bash
cd next-monorepo
pnpm install
```

---

## 📖 Development

### "my first fail" project:
```bash
cd "my first fail"
npm run dev
# Development server runs on http://localhost:3000
```

### "next-monorepo" project:
```bash
cd next-monorepo
pnpm dev
# Runs all packages simultaneously with Turborepo
```

---

## 🛠 Available Commands

### "my first fail":
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### "next-monorepo":
- `pnpm dev` - Start development for all apps/packages
- `pnpm build` - Build all apps/packages
- `pnpm lint` - Lint all packages
- `pnpm test` - Run tests (if configured)

---

## 📦 Shared Packages (Monorepo Only)

### eslint-config
Shared ESLint configurations for consistency across packages.
- `base.js` - Base configuration
- `next.js` - Next.js specific
- `react-internal.js` - React internal

### typescript-config
Shared TypeScript configurations.
- `base.json` - Base configuration
- `nextjs.json` - Next.js specific
- `react-library.json` - React library setup

### ui
Shared UI component library built with React and shadcn/ui.

---

## 📝 Notes

- Both projects use ShadCN/UI for component libraries
- The monorepo uses Turborepo for efficient builds and dependency management
- Shared configurations ensure consistency across the workspace

---

## 📄 License

This repository is for personal skill testing and development.
