# 💖 Our Story — Anniversary Timeline

A beautifully crafted, interactive anniversary website that takes you on a cinematic journey through the milestones of a relationship — from the very first connection to dreams of the future.

🌐 **Live Demo:** [prince902226062-code.github.io/Anniversary](https://prince902226062-code.github.io/Anniversary/)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Private Login** | Password-protected entry — only accessible to the two people it's made for |
| 🎬 **Cinematic Scroll** | Smooth, section-by-section storytelling with scroll-based navigation |
| 💫 **Framer Motion Animations** | Fluid entrance animations, floating hearts, parallax effects, and micro-interactions |
| 🎵 **Background Music** | Auto-playing romantic background music with a toggleable player |
| 📸 **Photo Gallery** | A curated gallery of memories with hover effects |
| 📞 **Proposal Section** | Includes an embedded audio recording of the special moment |
| 🔮 **Future Dreams** | A heartfelt closing section with hopes and promises |
| 📱 **Fully Responsive** | Looks stunning on desktop, tablet, and mobile |
| 🌙 **Dark Aesthetic** | Premium dark-mode design with pink & purple accent glows |

---

## 🗂️ Sections

1. **Login Page** — Glassmorphic login card with phone + password authentication
2. **Hero** — "Our Story" intro with floating hearts and a *Start Journey* CTA
3. **First Connection** — How it all began
4. **Kondhana Caves** — A memorable adventure together
5. **First Bond** — The moment the friendship deepened
6. **Proposal** — The big question, complete with a call recording
7. **Sports 2026** — A shared experience
8. **Gallery** — Photo memories
9. **Today** — Where the journey stands now
10. **Future** — Promises and dreams yet to come

---

## 🛠️ Tech Stack

- **React 19** — UI framework
- **Vite 8** — Lightning-fast dev server & bundler
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Declarative animations
- **Lucide React** — Beautiful icon set
- **Google Fonts** — Poppins & Playfair Display typography
- **GitHub Pages** — Hosting via `gh-pages`

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/prince902226062-code/Anniversary.git
cd Anniversary

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The `deploy` script will build the project and push the `dist` folder to the `gh-pages` branch automatically.

---

## 📁 Project Structure

```
Anniversary/
├── public/
│   ├── music.mp3                # Background music
│   ├── call-recording.mp3       # Proposal call recording
│   ├── *.jpg                    # Photos & memories
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx        # Private authentication gate
│   │   ├── Hero.jsx             # Landing hero section
│   │   ├── FirstConnection.jsx  # Story chapter
│   │   ├── KondhanaCaves.jsx    # Story chapter
│   │   ├── FirstBond.jsx        # Story chapter
│   │   ├── Proposal.jsx         # Story chapter + audio
│   │   ├── Sports2026.jsx       # Story chapter
│   │   ├── Gallery.jsx          # Photo gallery
│   │   ├── Today.jsx            # Current chapter
│   │   ├── Future.jsx           # Closing section
│   │   ├── MusicPlayer.jsx      # Floating music toggle
│   │   ├── LoadingScreen.jsx    # Initial loading animation
│   │   └── NextButton.jsx       # Reusable navigation button
│   ├── App.jsx                  # Root component & routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 💡 Customization

Want to make your own version? Here's what to change:

1. **Photos** — Replace images in `public/` with your own
2. **Music** — Swap `public/music.mp3` with your song
3. **Story Content** — Edit each component in `src/components/` to tell your story
4. **Login Credentials** — Update the `USERS` array in `LoginPage.jsx`
5. **Colors** — The pink/purple palette is defined via Tailwind classes throughout the components

---

## 📄 License

This project is private and made with love 💗

---

<p align="center">
  Made with ❤️ for a very special someone
</p>
