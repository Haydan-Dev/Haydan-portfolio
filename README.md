# Haydan's Developer Portfolio

A highly responsive, JSON-driven Single Page Application (SPA) designed to showcase full-stack engineering projects, technical skills, and professional experience.

## Architecture & Engineering

This portfolio is not just a static website; it is engineered with a **strict decoupled architecture**:
* **Presentation Layer:** Built with **React.js** and styled using **Tailwind CSS** for dynamic, zero-latency component rendering.
* **Data Layer:** All textual content, project data, and personal information are strictly isolated into a `data.json` file. This eliminates hardcoded values in JSX, making the application highly maintainable and instantly updatable.
* **Build Tool:** Powered by **Vite** for lightning-fast HMR (Hot Module Replacement) and optimized production builds.

## Tech Stack
* **Frontend Framework:** React.js
* **Styling:** Tailwind CSS
* **Build Engine:** Vite
* **State Management:** React Hooks
* **Deployment Pipeline:** Vercel (CI/CD)

## Local Installation & Setup

If you wish to run this architecture locally, follow these steps:

1. **Clone the repository:**
   ```bash
git clone https://github.com/Haydan-Dev/Haydan-portfolio.git
cd haydan-portfolio
2. **Install dependencies:**
   ```bash
npm install
3. **Start the development server:**
   ```bash
npm run dev
4. Update the Data:
Navigate to src/data/data.json to modify the site's content without touching a single line of React UI code.
