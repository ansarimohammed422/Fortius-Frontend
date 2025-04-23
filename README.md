# Fortius Diagnostic Center — Frontend

Namaste! 👋 Welcome to the **Fortius Diagnostic Center** frontend, built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack
- **Framework**: React  
- **Bundler**: Vite  
- **Styling**: Tailwind CSS  
- **Language**: JavaScript (or TypeScript)

## 🔧 Prerequisites
- Node.js v14+  
- npm or Yarn

## ⚙️ Setup & Installation
1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/fortius-frontend.git
   cd fortius-frontend
   ```
2. **Install dependencies**  
   ```bash
   npm install
   # or
   yarn
   ```
3. **Configure environment variables**  
   Create a `.env` file in the root:
   ```env
   VITE_API_BASE_URL=https://api.your-domain.com
   ```
4. **Start the development server**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open <http://localhost:5173> to view in your browser.

## 📦 Available Scripts
- `npm run dev` / `yarn dev` — Development mode with hot-reload  
- `npm run build` / `yarn build` — Build for production into `dist/`  
- `npm run preview` / `yarn preview` — Preview the production build locally

## 📁 Project Structure
```
fortius-frontend/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images, fonts, icons
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components / routes
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── tailwind.config.js # Tailwind config
└── vite.config.js     # Vite config
```

## 🚀 Deployment
Deploy on **Netlify** or **Vercel** in a few clicks:
1. Connect your GitHub repo.  
2. Set Build Command → `npm run build`, Publish Directory → `dist/`.  
3. Add any required environment variables in the platform’s dashboard.

## 🤝 Contributing
1. Fork the repo  
2. Create a feature branch:  
   ```bash
   git checkout -b feature/awesome-component
   ```
3. Commit your changes:  
   ```bash
   git commit -m "feat: add awesome component"
   ```
4. Push to your branch and open a Pull Request  
