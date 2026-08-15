# VELOOP Rewards — Interactive Banners & Cards

A set of 5 interactive, animated banner components built for the VELOOP Rewards platform. Designed to fit the `#161827` dark theme with custom micro-interactions, responsive scaling, and zero clunky dependencies.

---

## 🔗 Links

- **Live Demo:** [Check it out on Vercel](https://veloop-banner-showcase.vercel.app/)
- **Source Code:** [GitHub Repo](https://github.com/ishu7817/veloop-banner-showcase)

---

## 💡 What's Inside

| Component | What it does | Interactions / Details |
|---|---|---|
| **Leaderboard** | Competitive ranking card | Top 3 podium badges (#1, #2, #3), live VE points & tier cards |
| **Watch Ad & Earn** | Video reward card | Animated play trigger with simulated reward state (`+38 VEs`) |
| **Contact Us** | Support & trust card | 24h response badge & direct mailto link |
| **Follow & Earn** | Social community growth | Interactive social channels with live toggle states (`+500 VEs`) |
| **Daily Bonus** | Retention & daily streak | 5-day streak tracker with dynamic claim button (`+25 Gems`) |

---

## 📐 Layout & Dimensions

Every banner fills 100% width of its parent container and respects specific device height ranges:

- **Desktop:** 410px – 450px
- **Tablet:** 380px – 540px
- **Mobile:** 330px – 520px
- **Palette:** Built over `#161827` with deep navy surfaces (`#1E2138`) and subtle gold/blue accents.

---

## 🛠️ Stack

- **React + Vite**
- **Tailwind CSS**
- **Framer Motion** (for smooth hover physics & entry transitions)
- **Lucide React** (plus custom SVG helpers)

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── banners/
│   │   ├── LeaderboardBanner.jsx
│   │   ├── WatchAdBanner.jsx
│   │   ├── ContactBanner.jsx
│   │   ├── FollowEarnBanner.jsx
│   │   └── DailyBonusBanner.jsx
│   └── ui/
│       ├── BannerCard.jsx      # Reusable responsive container
│       └── Icons.jsx           # Clean social SVG icons
├── data/
│   └── Data.js                 # Leaderboard & social configs
├── App.jsx                     # Main page wrapper
└── index.css                   # Tailwind v4 configuration
