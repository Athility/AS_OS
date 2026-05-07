<div align="center">

# 🪐 AS_OS

### A Minimal, Grid-Based Personal Operating System & Portfolio Build

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38B2AC?logo=tailwindcss&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF4081?logo=framer&logoColor=white&style=flat-square)](https://framer.com/motion)

**AS_OS** is a Personal Operating System — an ultra-premium, frameless, and grid-based interactive portfolio engineered for **Atharva Shinde** (an FY AI&DS Engineering Student at SAKEC). Inspired by high-end aesthetic modular terminals, the site features kinetic physics-based motion, a custom spring cursor, a retro CRT-styled power-on boot sequence, and a real-time responsive audio engine.

[Live Demo](http://localhost:5173/) · [Core Features](#-core-features) · [Technology Stack](#-technology-stack) · [Getting Started](#-getting-started)

</div>

---

## 🎨 Design Philosophy & Aesthetics

The interface is built around **grid-based glassmorphism** and a curated dark-mode color scheme (`#050505` obsidian background paired with `#fafafa` crisp elements):

- **Premium Frameless Environment:** Default browser scrollbars are globally hidden to give the layout an application/operating-system feel while preserving kinetic mouse-wheel scrolling.
- **Micro-Animations:** Fluid transitions and responsive spring behaviors make every card, link, and button feel alive and tactile.
- **Contrast & Hierarchy:** Clean monospaced label badges coupled with modern font sizes for excellent structural hierarchy.

---

## 🚀 Core Features

| Feature | Description |
| :--- | :--- |
| ⚡ **CRT Power-On Boot** | A vintage-styled power-on CRT boot sequence animation that sets a tactile initial load. |
| 🪐 **Custom Physics Cursor** | A smooth, interactive trailing custom cursor that dynamically scales and locks perfectly when hovering over links. |
| 🌊 **Audio Player & Waveform** | A customized, real-time reactive audio waveform player that updates with standard play/pause toggles. |
| 🎯 **Vibrant About Cards** | Features specialized card structures highlighting interests (PC Gaming, Cubing, Sketching, and Pop Culture) which zoom and smoothly transition from **grayscale to full vibrance** on hover. |
| 🖥️ **Tech Stack Grid** | A beautifully rendered grid categorized by proficiency with custom-themed iconography mapped specifically to each keyword. |
| 📬 **Direct Contact Interface** | Clean form controls and a secure action hook to instantly download your professional PDF resume (`Atharva_Shinde_CV.pdf`). |

---

## 🛠️ Technology Stack

Every technology and skill mapped on the site is represented with bespoke, custom icon mappings for high visual interest:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                   AS_OS                                      │
├─────────────────┬─────────────────┬─────────────────┬────────────────────────┤
│   PROGRAMMING   │    WEB BUILD    │     AI & ML     │       TOOLS / IDE      │
├─────────────────┼─────────────────┼─────────────────┼────────────────────────┤
│ • Python (💻)   │ • HTML (Code)   │ • Pandas (📊)   │ • AutoCAD (🧭)         │
│ • C/C++ (⚙️)     │ • CSS (Layers)  │ • NumPy (🏁)    │ • Blender (📦)         │
│ • Java (☕)      │ • React (⚛️)     │ • Seaborn (📈)  │ • Canva (🎨)           │
│                 │ • Node.js (🖥️)   │ • Scikit (🧠)   │ • VS Code (📝)         │
│                 │ • Tailwind (💨) │ • Jupyter (📖)  │ • Antigravity (🪐)     │
└─────────────────┴─────────────────┴─────────────────┴────────────────────────┘
```

---

## 📦 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### 1. Installation
Clone the repository and install the project dependencies:
```bash
git clone https://github.com/Athility/AS_OS.git
cd AS_OS
npm install
```

### 2. Run Locally (Development)
Spin up the hot-reloading development server:
```bash
npm run dev
```
The application will launch on **[http://localhost:5173/](http://localhost:5173/)**!

### 3. Production Build
Compile and bundle the optimized static client files:
```bash
npm run build
```
The output will be compiled directly inside the `dist/` directory, ready to deploy to any static host (such as Netlify, Vercel, or GitHub Pages).

---

<div align="center">

Built with 🪐 and extreme precision.

© 2026 // **AS_OS** // **Atharva Shinde**

</div>
