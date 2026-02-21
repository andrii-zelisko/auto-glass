# Autoglass Zelena

Autoglass Zelena is a React-based web application for a specialized service in the sale, installation, and repair of automotive glass for all car brands.

## Table of Contents
- [Installation](#installation)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder># autoglass
    ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## File Structure
project-root/
├── public/                     # Static files
│   ├── index.html              # Main HTML file
│   ├── favicon.ico             # Favicon
│   └── assets/                 # Static assets (images, fonts, etc.)
├── src/                        # Source code
│   ├── component/              # Reusable components
│   │   ├── Navbar/             # Navbar component
│   │   ├── Section/            # Section wrapper component
│   │   └── Footer/             # Footer component
│   ├── pages/                  # Page-level components
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About page
│   │   ├── Services.jsx        # Services page
│   │   ├── Advantages.jsx      # Advantages page
│   │   ├── Companies.jsx       # Companies page
│   │   ├── Gallery.jsx         # Gallery page
│   │   └── Contact.jsx         # Contact page
│   ├── styles/                 # Global and component-specific styles
│   │   ├── base/               # Base styles (variables, mixins, resets)
│   │   ├── components/         # Component-specific styles
│   │   ├── layouts/            # Layout-specific styles
│   │   ├── pages/              # Page-specific styles
│   │   ├── fonts.scss          # Font imports
│   │   ├── app.scss            # Main global styles
│   │   └── index.scss          # Entry point for styles
│   ├── store.js                # Centralized data store
│   ├── theme/                  # MUI theme configuration
│   │   └── theme.js            # Custom Material-UI theme
│   ├── App.js                  # Main app component
│   ├── index.js                # Entry point
│   └── reportWebVitals.js      # Performance reporting
├── .gitignore                  # Git ignore file
├── package.json                # NPM dependencies and scripts
├── README.md                   # Project documentation
└── yarn.lock / package-lock.json # Dependency lock file

## Technologies Used
React: Frontend library for building user interfaces.
Material-UI (MUI): Component library for styling and theming.
JavaScript (ES6+): Programming language.
SCSS: Preprocessor for CSS.
npm: Package manager for dependencies.