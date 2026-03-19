# 📦 CRUD App — Product Management System

<div align="center">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/LocalStorage-API-1D546D?style=for-the-badge" />
<img src="https://img.shields.io/badge/Lottie-Animations-00DDB3?style=for-the-badge" />

<br/><br/>

### A full-featured, responsive product management system built from scratch with React, Vite, and Tailwind CSS .
<br/>

<br/>



https://github.com/user-attachments/assets/a7b12273-8f17-4ebe-937d-1722d55e74be


</div>

---

## 📖 Introduction

**CRUD App** is a complete front-end product management application that delivers a full data management experience. Every feature — from creating and searching products, to editing and deleting — is fully implemented with real validation, persistent storage, and smooth animations .

This project was built entirely from scratch with no UI component libraries. 

## 🎬 Demo Video

---

## ✨ Features

### ➕ Create Product
- Fill in Title, Price, Taxes, Ads, Discount, Count, and Category
- Auto-calculates **Total** in real time as you type
- **$ sign** shown next to every price field
- Create **multiple copies** of the same product using the Count field
- All fields validated before submission

### ✏️ Edit Product
- Click Edit on any row to fill the form with existing data
- Count field hidden during edit mode
- **Cancel button** appears to discard changes

### 🗑️ Delete Product
- Delete individual products with the Del button
- **Delete All** button appears when products exist — shows count in brackets
- All deletions immediately reflected in localStorage

### 🔍 Search Products
- Search by **Title** or **Category** — toggle between modes
- **Live filtering** as you type — no submit needed

### 💾 Data Persistence
- All products saved to **localStorage** automatically
- Data survives page refresh and browser restarts
- 10 default products pre-loaded on first visit

### 🌙 Dark / Light Mode
- Toggle between deep ocean dark and soft ice light
- Smooth transition on every element
- Custom PNG icons for each mode

### 🎞️ Animations
- **Typewriter** effect on the title — types and deletes in a loop
- **Neon breath** animation on subtitle — glows and pulses
- **Fade-up** entrance on all cards with staggered delays
- **Lottie** animations on section labels and Create button

---

## 🚀 Tech Stack

### ⚛️ React 
React is the core UI framework. The app is split into clean reusable components — `TopBar`, `FormCard`, `SearchCard`, `ProductTable`. React hooks `useState`, `useEffect`, `useRef`, and `useCallback` are used throughout.

### 🎨 Tailwind CSS 
Tailwind v4 handles all styling via utility classes. The full design system — colors, shadows, gradients, animations — is defined in the `@theme` block inside `index.css`. No separate config file needed for customization.

### 🎞️ Lottie — @lottiefiles/dotlottie-react
Three lottie animations bring the UI to life — plus, create, and searching animations loaded from local `.lottie` files.

### 💾 localStorage API
All product data is persisted using the browser's built-in `localStorage`. No backend, no database, no server required.

### 🔤 IosevkaCharon Font
A custom local font loaded from `public/fonts/` using `@font-face`. All 8 weights registered and applied globally via Tailwind's `--font-sans` theme token.

---

## 🔗 Live Demo



## 📄 License

MIT License — free to use for learning, portfolios, and commercial projects.

---

<div align="center">

**Built with ❤️ using React + Tailwind CSS **

<br/>

</div>
