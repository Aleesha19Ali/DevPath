# Dev Path — My Developer Learning Journey

**Dev Path** is a modern, responsive developer learning portfolio built to present technical skills, learning roadmaps, explored software technologies, and practical projects.

---

## 🚀 Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide Icons
- **Design & Theme**: Premium Dark Theme with Deep Navy background (`#0b0f19`), Purple & Electric Blue Gradients, Cyan Highlights, Glassmorphism, and Inter/JetBrains Mono typography
- **Data Architecture**: Decoupled, modular JSON-style data layer (`src/data/portfolioData.js`) for easy customization
- **Deployment**: Firebase Hosting ready (`firebase.json` SPA configuration targeting `dist/`)

---

## 🛠️ Local Development & Running

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Steps to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Production Build Verification**:
   ```bash
   npm run build
   ```
   This will output production-optimized HTML, CSS, and JS static assets into the `dist/` directory.

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🔥 Firebase Hosting Deployment Guide

The repository includes preconfigured `firebase.json` and `.firebaserc` files targeting Single Page Application (SPA) output in `dist/`.

### Deployment Steps:

1. **Install Firebase CLI** (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. **Authenticate with Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize or Connect Project**:
   ```bash
   firebase init hosting
   ```
   * Select an existing Firebase project or create a new one.
   * Specify `dist` as the public directory.
   * Configure as a single-page app (rewrite all URLs to `/index.html`) -> Select `Yes`.
   * Automatic builds and deploys with GitHub -> Select `No` (or configure if desired).

4. **Build and Deploy**:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

5. Once deployment completes, Firebase CLI will output your live URL (e.g., `https://dev-path-portfolio.web.app`).

---

## 📝 Customizing Portfolio Data

All customizable project metrics, contact placeholders, roadmap stages, and technology cards are decoupled from UI components. To update content:

1. Open `src/data/portfolioData.js`.
2. Edit placeholder details:
   - **Personal Info**: `aboutMeData.personalPlaceholders`
   - **Contact Details**: `contactData.placeholders` (email, github, linkedin)
   - **Technologies & Progress**: `technologies` array
   - **Roadmap Stages**: `learningPathStages` array
   - **Projects**: `projects` array

---

## 🎨 Features Built

- **Sticky Glassmorphic Navigation Bar**: Responsive mobile hamburger menu, active section highlighting, keyboard navigation.
- **Hero Section**: Main heading, status pill badge, interactive tabbed code editor mockup preview.
- **Learning Statistics**: Dynamic metric cards showing tech counts and current focus.
- **Learning Path Stages**: 6-stage structured timeline (Web Fundamentals, Frontend, Backend, DB & Auth, AI Tools, Projects) with status indicators.
- **Advanced Technology Cards & Explorer**: Interactive search and dual filters (category & status) across 12 technologies (HTML5, CSS3, JS, Tailwind, React, Node, Express, MongoDB, Supabase, Firebase, Google Antigravity, Google Jules).
- **Tech Detail Modal**: Expandable modal dialog with ESC key support, backdrop click close, and body scroll locking.
- **Projects Showcase**: Highlights the Expense Tracker project (clearly separating implemented & tested features from planned features).
- **Learning Progress Dashboard**: Domain percentage progress indicators, active focus card, and recently explored topics log.
- **Contact Section & Footer**: Interactive copy-email button, placeholders for GitHub & LinkedIn, and dynamic copyright year.
