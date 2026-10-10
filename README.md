# Isha Gupta - Personal Portfolio Website

A modern, minimal, responsive, and recruiter-friendly portfolio website for **Isha Gupta** (B.Tech CSE - AI/ML). Engineered with **HTML5, Tailwind CSS, Lucide Icons, Chart.js, and ES6 JavaScript**.

---

## 🌟 Highlights & Features

1. **Hero / Home**:
   - Status badge: `Open to AI/ML & SDE Roles / Internships`
   - Role & tagline, bio, and quick stats bar (CGPA 9.18, 6+ projects, 350+ LeetCode)
   - Action CTAs: Explore Projects, View Resume, 1-Click Copy Email
   - Direct social links (GitHub, LinkedIn, LeetCode, Email)

2. **About Me**:
   - Academic narrative & career focus (Predictive Modeling, Computer Vision, BI, Scalable Web)
   - 4 interactive cards detailing engineering passions with Lucide icons

3. **Skills & Tooling**:
   - Categorized grids: Programming, Data & BI, Machine Learning & AI, Web Development, Tools
   - **Live skill search bar** to filter skills instantly (e.g. typing "Python" or "SQL")
   - Visual proficiency indicators and badges

4. **Featured Projects ⭐**:
   - 5 comprehensive projects with problems solved, technical solutions, and quantified results
   - **Interactive filter buttons**: All | Machine Learning | Data & BI | Web & Analytics
   - Direct GitHub repo links, live demo links, and full Case Study popup modals

5. **Interactive Live Dashboard (Feature Highlight)**:
   - Live **Chart.js** data sandbox embedded on page
   - 3 selectable datasets:
     - *ML Model Training vs. Validation Loss*
     - *SHAP Feature Importance Weights*
     - *12-Month SaaS Churn Cohorts*
   - Smoothly adapts to both Dark and Light themes!

6. **Education & Certifications**:
   - Timeline with B.Tech CSE (AI/ML) 9.18 CGPA, Class XII (95.4%), Class X (96.2%)
   - Coursework tags and leadership activities
   - Cards for Microsoft PL-300, DeepLearning.AI, Stanford Online, and Google certifications

7. **GitHub & Coding Metrics**:
   - Visual stats cards: 680+ commits, 18 repos, 350+ LeetCode problems, 74+ stars
   - Featured repository cards with language dots, stars, and forks

8. **Resume & 1-Minute Recruiter Mode**:
   - Embedded clean resume viewer modal
   - Dedicated ATS-friendly printable resume (`assets/resume.html`) ready to print or save as PDF
   - **⚡ Recruiter 1-Minute View**: A tailored executive modal highlighting key metrics in 60 seconds

9. **Contact & Modern Micro-interactions**:
   - Contact cards with 1-click clipboard copy + feedback toast
   - Validated message form with mailto client launcher
   - Dark / Light mode toggle with persistent `localStorage`
   - Floating smooth-scroll Back-to-Top button
   - Fully responsive down to 320px mobile screens

---

## 📁 Project Structure

```
isha-portfolio/
├── index.html              # Main single-page application
├── css/
│   └── styles.css          # Glassmorphism, animations, print styles
├── js/
│   ├── config.js           # Centralized data store (easy to update content)
│   ├── dashboard.js        # Interactive Chart.js data visualization widget
│   └── main.js             # Theme toggle, filters, search, modals, toasts
├── assets/
│   └── resume.html         # Clean, printable ATS-friendly resume template
└── README.md               # Documentation & deployment guide
```

---

## 🚀 How to Run Locally

No installations or build commands required!

1. Open `C:\Users\Isha\.gemini\antigravity\scratch\isha-portfolio\index.html` directly in **Google Chrome** or **Microsoft Edge**.
2. Or in PowerShell:
   ```powershell
   Start-Process "C:\Users\Isha\.gemini\antigravity\scratch\isha-portfolio\index.html"
   ```

---

## ✏️ How to Customize Your Information

All content is managed in **`js/config.js`**. You can update:
- Your name, role, email, phone, location
- Your LinkedIn and GitHub URLs
- Your college name, CGPA, and course list
- Add or edit projects, metrics, and repository links
- Add new certifications or skills

Changes in `js/config.js` will immediately reflect across the entire site without touching the HTML layout!

---

## 🌐 Free 60-Second Deployment Guide

### Option 1: GitHub Pages (Recommended)
1. Create a new repository on GitHub named `portfolio` or `ishagupta.github.io`.
2. Push the files in this folder to the repository.
3. In GitHub repo settings, go to **Pages** > select branch `main` and root `/` > click **Save**.
4. Your website will be live at `https://<your-username>.github.io`!

### Option 2: Vercel / Netlify
1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. Drag and drop the `isha-portfolio` folder.
3. It deploys instantly with a free SSL custom domain!
