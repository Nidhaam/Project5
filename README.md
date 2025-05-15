# 🌐 Personal Portfolio Website - Nidhaam

Welcome to my official portfolio website!  
🎯 Live Demo: [https://nidhaam.netlify.app](https://nidhaam.netlify.app)

---

## 📌 Project Description

This project is a multi-page personal portfolio website developed as part of the CP 221 Practical Assignment. It showcases my skills, academic background, and project experience in Computer Networks and Information Security Engineering.

---

## 🛠️ Tools & Technologies Used

- **HTML5**: Semantic structure and SEO metadata
- **CSS3**: Responsive layouts, 2-column and 3-column grids, print-friendly styling, dark mode theme
- **JavaScript (ES6)**: Form validation, DOM manipulation, theme toggle, greeting message
- **Google Maps Embed API**: Location display (Iyumbu, Dodoma)
- **W3C Validator**: Code validation
- **Netlify**: Live deployment of the portfolio

---

## 🧩 Key Features Implemented

### ✅ HTML
- Semantic tags (`<main>`, `<section>`, `<article>`, etc.)
- Meta tags for SEO (description, keywords, author)
- Anchor, email, relative, and absolute links
- Embedded Google Map via `iframe` (Iyumbu, Dodoma)
- Image map integration (optional placeholder)
- Lists (ordered, unordered, nested)

### ✅ CSS
- Combined use of external, internal, and inline styles
- 2-column layout for the About page
- 3-column responsive grid for the Projects page
- Styled tables, navbars, and responsive sections
- Print-friendly resume section
- Theme toggle: dark/light mode with persistent storage
- Media queries for mobile responsiveness

### ✅ JavaScript
- Greeting function based on time of day
- Regex-based contact form validation
- Event listeners for project interactions
- Dark/light mode toggle with `localStorage` support
- Dynamic content manipulation (show/hide project details)

### ✅ Pages
- **Homepage**
- **About Me**
- **Projects**
- **Contact Form**
- **Survey Page** (with validation for checkboxes, radios, textarea)

---

## 🧠 Challenges Faced & Solutions

### 1. **Theme Toggle Not Persisting**
- **Problem**: Dark/light mode reset on reload.
- **Solution**: Implemented `localStorage` to save user preference and applied theme on page load using `DOMContentLoaded`.

### 2. **Responsive Layout Glitches on Small Screens**
- **Problem**: 3-column grid broke on smaller viewports.
- **Solution**: Used `grid-template-columns: repeat(auto-fit, minmax(...))` and media queries to ensure fluid responsiveness.

### 3. **JavaScript Validation Conflicts**
- **Problem**: Native form validations interfered with custom messages.
- **Solution**: Disabled browser validation with `novalidate`, added regex-based manual checks with alert messages.

### 4. **Map Integration**
- **Problem**: Locating precise coordinates for Iyumbu, Dodoma.
- **Solution**: Used Google Maps search link with `output=embed` to generate iframe code.

---

## 🚀 Live Demo

🔗 [https://nidhaam.netlify.app](https://nidhaam.netlify.app)

---

## 👨‍💻 Author

**Nidhaam**  
*Student, BSc in Computer Networks and Information Security Engineering*

---

