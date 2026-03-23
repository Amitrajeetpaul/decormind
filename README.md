# DecorMind: Heritage-First AI Interior Design 🏠✨🏛️

**DecorMind** is a full-stack AI-powered interior design platform that bridges modern minimalist aesthetics with traditional Indian heritage and Vastu wisdom. 

👉 **Live Demo (Local):** [http://localhost:5173/](http://localhost:5173/)

---

## 🏗️ The Vision
In an era of generic designs, DecorMind brings your cultural roots into your living space. Whether it's the wooden havens of **Kashmir**, the vibrant palettes of **Rajasthan**, or the bamboo-inspired sustainable living of **Assam**, our AI engine transforms your room in real-time while ensuring 100% **Vastu Compliance**.

---

## 🛠️ The Tech Stack

### Frontend (User Interface)
- **Vanilla Core**: High-performance HTML5, CSS3, and modern JavaScript (ES6+) for a lightweight, blisteringly fast experience.
- **Vite**: Modern frontend tooling for lightning-fast HMR and optimized production builds.
- **Design System**: A custom "Glassmorphism" UI with premium micro-animations and a dynamic theme engine.
- **Typography**: Playfair Display (Luxury Headers) & Inter (Modern UI).

### Backend (Architecture)
- **Vercel Serverless Functions**: A scalable, cloud-native backend built with Node.js.
- **RESTful APIs**:
    - `/api/cultural-data`: The "Heritage Brain" serving regional design insights, material palettes, and themes.
    - `/api/analyze-room`: The space analysis engine providing Vastu and lighting scores.
- **CORS-Enabled**: Secure cross-origin communication for cloud deployments.

---

## 🌟 Key Features

### 1. Heritage Transformation Engine
Swap your entire room's aesthetic in one click. The engine dynamically updates:
- **CSS Variables**: Real-time palette shifts (e.g., *Sindoor Red* for Bengal, *Indigo* for Rajasthan).
- **Asset Morphing**: Smooth image transitions between regional interior styles.

### 2. AI Room Analysis
Snap a photo of your space to get instant insights:
- **Vastu Scoring**: 🪷 Traditional energy alignment checks.
- **Lighting & Space**: ☀️ Automatic detection of natural exposure and layout efficiency.

### 3. Integrated Shopping
AI-curated inventory matching your selected cultural theme, with estimated costs and direct links to materials (Dhokra art, Walnut wood, Cane furniture).

---

## 🚀 Deployment

### Cloud (Vercel)
DecorMind is optimized for Vercel. To deploy:
```bash
npx vercel --prod
```

### Local Development
```bash
# Clone the repo
git clone https://github.com/Amitrajeetpaul/decormind.git

# Install dependencies
npm install

# Run Frontend
npm run dev

# The API is automatically served by Vercel Functions locally via 'vercel dev'
```

---

## 🤝 Project Structure
- `api/`: Cloud-native serverless functions.
- `dist/`: Production-ready compiled assets.
- `src/`: Core UI components and styles.
- `index.html`: The unified full-stack entry point.

---

**Developed with ❤️ for Cultural Heritage.**
