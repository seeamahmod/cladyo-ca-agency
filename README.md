# Cladyo — CA Agency Website

A responsive marketing website for **Cladyo**, a chartered accountancy firm. Built with **React** and **Vite** from the *Cladyo – CA Agency Website* Figma design. It reproduces the design's 1200px, 1440px and 1920px layouts and adds tablet and mobile layouts.

---

## About Cladyo

Cladyo is a chartered accountancy and financial advisory firm that helps businesses — from startups to established enterprises — make confident financial decisions. Its team of certified public accountants combines expert insight with modern technology to deliver:

- **Tax Planning & Compliance** — reduce tax liabilities and stay compliant across individual, corporate and payroll taxes.
- **Audit & Assurance** — accurate, compliant financial reporting.
- **Financial Consulting & Planning** — clear plans for long-term growth.
- **Business Advisory & Valuations** — guidance for buying, selling or restructuring a business.

Cladyo is built around integrity, transparency and a client-centric approach, and is headquartered in San Francisco, CA, serving the Bay Area and beyond.

> The company details on the site come from the design file and serve as website content.

## About the project

A single-page landing site with these sections:

| Section | Highlights |
|---|---|
| Header | Transparent over the hero, sticky with a teal background on scroll, full-screen menu on mobile |
| Hero | Full-bleed photo, headline, two calls to action, customer avatars |
| Areas We Serve | Four service cards |
| Our Mission | Two-column story with **animated count-up stats** that replay each time the section scrolls into view |
| Expert Solutions | Three service cards with "learn more" links |
| Our Values | Image band with a floating content card |
| Our Team | Swipe/drag carousel; cards flip on hover to show a testimonial |
| Our Commitment | Image plus four credential cards |
| Reviews | Trustpilot-style review carousel |
| FAQ | Animated accordion |
| Client Stories | Case-study cards |
| Contact | Contact details and a consultation form |
| Footer | Newsletter sign-up, links and a large brand watermark |

**Tech stack**

- [React 19](https://react.dev) and [Vite](https://vite.dev)
- Plain CSS with design tokens (CSS custom properties), no CSS framework
- Icons from the [Nucleo](https://nucleoapp.com) library, stored as local React components in `src/components/icons/`
- Fonts: [Host Grotesk](https://fonts.google.com/specimen/Host+Grotesk) and [Geist](https://fonts.google.com/specimen/Geist) from Google Fonts

**Responsive breakpoints**

| Width | Layout |
|---|---|
| 1680px and up | Matches the 1920 design frame |
| 1300–1679px | Matches the 1440 design frame |
| 1200–1299px | Matches the 1200 design frame |
| 768–1199px | Tablet: stacked sections, two-column grids |
| Below 768px | Mobile: single column, swipeable carousels |

**Folder structure**

```
cladyo-ca-agency/
├── index.html              # Page shell, fonts, meta tags
├── public/                 # Favicon
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Assembles the page sections
    ├── index.css           # All styles, tokens and breakpoints
    ├── assets/img/         # Photos, logos and design assets
    ├── components/
    │   ├── icons/          # Nucleo icon components
    │   ├── ui.jsx          # Shared pieces: buttons, headings, eyebrow labels
    │   ├── Carousel.jsx    # Drag/swipe horizontal carousel
    │   └── CountUp.jsx     # Scroll-triggered number animation
    └── sections/           # One file per page section
```

---

## Getting started

### Requirements

- **Node.js 20.19 or newer** (the LTS version is recommended), which includes npm
- **Git** (optional; only needed to clone the repository)

### Windows

1. **Install Node.js**
   Download the LTS installer from [nodejs.org](https://nodejs.org) and run it with the default options. Or, in PowerShell:
   ```powershell
   winget install OpenJS.NodeJS.LTS
   ```
2. **Install Git** (optional) from [git-scm.com](https://git-scm.com/download/win), or:
   ```powershell
   winget install Git.Git
   ```
3. **Open a new PowerShell or Command Prompt window** and confirm the installs:
   ```powershell
   node -v
   npm -v
   ```
4. **Download the code**, either
   - with Git:
     ```powershell
     git clone https://github.com/seeamahmod/cladyo-ca-agency.git
     cd cladyo-ca-agency
     ```
   - or without Git: on the GitHub page click **Code → Download ZIP**, right-click the file and choose **Extract All**, then open a terminal in the extracted folder.
5. **Install dependencies**
   ```powershell
   npm install
   ```
6. **Start the development server**
   ```powershell
   npm run dev
   ```
7. Open **http://localhost:5173** in your browser. Press `Ctrl + C` in the terminal to stop the server.

> If PowerShell blocks `npm` with a "running scripts is disabled" message, run the commands from **Command Prompt** instead, or run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once in PowerShell.

### macOS

1. **Install Node.js**
   Download the LTS installer (`.pkg`) from [nodejs.org](https://nodejs.org) and run it. Or, with [Homebrew](https://brew.sh):
   ```bash
   brew install node
   ```
2. **Install Git** (optional). macOS offers to install it the first time you run `git`, or:
   ```bash
   brew install git
   ```
3. **Open Terminal** and confirm the installs:
   ```bash
   node -v
   npm -v
   ```
4. **Download the code**, either
   - with Git:
     ```bash
     git clone https://github.com/seeamahmod/cladyo-ca-agency.git
     cd cladyo-ca-agency
     ```
   - or without Git: on the GitHub page click **Code → Download ZIP**, double-click the file to unzip it, then in Terminal `cd` into the unzipped folder.
5. **Install dependencies**
   ```bash
   npm install
   ```
6. **Start the development server**
   ```bash
   npm run dev
   ```
7. Open **http://localhost:5173** in your browser. Press `Control + C` in Terminal to stop the server.

### Available scripts

These work the same on Windows and macOS:

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with hot reload at http://localhost:5173 |
| `npm run build` | Builds an optimized production version into the `dist/` folder |
| `npm run preview` | Serves the production build locally to check it |
| `npm run lint` | Checks the code with oxlint |

### Deploying

Run `npm run build` and upload the contents of the `dist/` folder to any static host, such as Netlify, Vercel, GitHub Pages or Cloudflare Pages.

---

## Notes

- `src/assets/img/team-4.jpg` is about 10MB. Compress it before deploying to production.
- The FAQ answers after the first question are placeholder copy. Replace them with your final text.
- The contact and newsletter forms are front-end only and are not connected to a backend yet.
