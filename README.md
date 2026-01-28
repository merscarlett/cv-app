# CV App

This is a **React + TypeScript** project that displays a professional CV for Claudette Lening.  
It includes a sidebar for adding comments and a modal for reviewing feedback. The design is optimized to look like an A4 page, making it easy to test and print.

## Features
- Modern CV layout using **React** and **SCSS**
- **Comments sidebar** with localStorage persistence
- **Review modal** for adding comments
- Mobile-friendly and print-ready A4 format
- Easy to customize with your own content

## Technologies
- React 18 + TypeScript  
- SCSS for styling  
- LocalStorage for comment persistence  
- Vite for fast development and build

## 📂 Project Structure
```
cv-app/
├─ public/                            # Static files
│  └─ favicon.png                      # Favicon for the site
├─ src/
│  ├─ components/                      # All React components
│  │  ├─ CVPage/
│  │  │  ├─ CVPage.tsx                 # Main CV component
│  │  │  └─ CVPage.scss
│  │  ├─ CommentsSidebar/
│  │  │  ├─ CommentsSidebar.tsx        # Sidebar for comments
│  │  │  └─ CommentsSidebar.scss
│  │  └─ ReviewModal/
│  │     ├─ ReviewModal.tsx            # Modal for adding comments
│  │     └─ ReviewModal.scss
│  ├─ App.tsx                          # Root App component
│  └─ main.tsx                          # React root entry point
├─ index.html                           # HTML template
├─ vite.config.ts                        # Vite configuration
├─ package.json
├─ tsconfig.json
├─ .gitignore
└─ README.md
```
## How to Run
1. git clone https://github.com/merscarlett/cv-app.git
2. cd cv-app
3. npm install
4. npm run dev

