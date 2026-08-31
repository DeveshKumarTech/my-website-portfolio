# ⚡ Quick Customization Guide

Get your portfolio personalized in 5 minutes!

## 1️⃣ Update Your Information

**File:** `data/portfolio.json`

```json
{
  "personal": {
    "name": "YOUR NAME",
    "title": "YOUR TITLE",
    "location": "YOUR LOCATION",
    "email": "your@email.com",
    "phone": "YOUR PHONE"
  },
  "hero": {
    "headline": "YOUR HEADLINE",
    "description": "YOUR DESCRIPTION"
  }
}
```

## 2️⃣ Add Your Profile Image

**Option A: Image File**
1. Add image to `/assets` folder (e.g., `profile.jpg`)
2. In `index.html`, find the profile image line
3. Change: `<img src="assets/profile.jpg" alt="Devesh Kumar Profile">`

**Option B: Online URL**
1. Use any image hosting service (imgur, cloudinary, etc.)
2. Replace with your URL: `<img src="YOUR_IMAGE_URL" alt="Profile">`

## 3️⃣ Update Your Skills

**File:** `data/portfolio.json` → `skills` section

```json
"skills": {
  "programming": [
    {
      "name": "Your Language",
      "level": "intermediate",
      "icon": "💻"
    }
  ]
}
```

**Icon Options:**
- 💻 Code/Generic
- ⚙️ Systems
- ☕ Java
- 🐍 Python
- 🎨 Design
- 🎮 Gaming
- 📱 Mobile

## 4️⃣ Update Your Projects

**File:** `data/portfolio.json` → `projects` array

```json
"projects": [
  {
    "name": "Project Name",
    "subtitle": "Project Subtitle",
    "description": "Project description",
    "status": "In Development",
    "features": [
      "Feature 1",
      "Feature 2"
    ],
    "technologies": ["HTML", "CSS", "JS"],
    "links": {
      "github": "https://github.com/you/project",
      "demo": "https://project-demo.com"
    }
  }
]
```

## 5️⃣ Update Your Social Links

**File:** Multiple locations:

**In HTML (Footer & Profiles):**
```html
<!-- Find and replace these URLs -->
https://github.com/YOUR-USERNAME
https://linkedin.com/in/YOUR-PROFILE
https://leetcode.com/u/YOUR-USERNAME
https://hackerrank.com/profile/YOUR-USERNAME
```

**In JSON (data/portfolio.json):**
```json
"profiles": [
  {
    "name": "GitHub",
    "url": "https://github.com/YOUR-USERNAME",
    "primary": true
  }
]
```

## 6️⃣ Update Contact Info

**File:** `data/portfolio.json` → `contact` section

```json
"contact": {
  "email": "your@email.com",
  "phone": "YOUR-PHONE"
}
```

**Connect Email Form:**
The contact form is set up to easily connect to services like:
- **Formspree** (recommended for beginners)
- **EmailJS** (client-side)
- **Resend** (modern alternative)

### Using Formspree:
1. Go to formspree.io
2. Create new form
3. In `index.html`, update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 7️⃣ Customize Colors

**File:** `css/variables.css`

```css
:root {
  --primary-color: #00d9ff;      /* Change this to your primary color */
  --secondary-color: #7c3aed;    /* Change this to your secondary color */
  --bg-primary: #0f1419;         /* Background color */
}

/* Light mode colors */
[data-theme="light"] {
  --bg-primary: #f9fafb;         /* Light background */
  --text-primary: #111827;       /* Dark text for light mode */
}
```

**Color Ideas:**
- Blue Gradient: `#0066ff` to `#00d9ff`
- Purple Gradient: `#7c3aed` to `#c084fc`
- Green Gradient: `#10b981` to `#34d399`
- Red Gradient: `#ef4444` to `#f97316`

## 8️⃣ Update Resume Link

**File:** Multiple locations in `index.html`

Replace Google Drive link:
```html
https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing
```

**How to get File ID:**
1. Upload PDF to Google Drive
2. Right-click → Share
3. Get shareable link: `docs.google.com/file/d/{FILE_ID}`

## 9️⃣ Customize Sections

### Rename Sections
**File:** `index.html` navigation

```html
<li><a class="nav-link" data-section="about">YOUR SECTION NAME</a></li>
```

### Add New Section
```html
<section id="your-section" class="section-padding">
  <div class="container">
    <h2 class="scroll-reveal">Your Title</h2>
    <!-- Your content -->
  </div>
</section>
```

### Hide Sections
Add `display: none` to the section style:
```html
<section id="section" style="display: none;">
  <!-- Hidden content -->
</section>
```

## 🔟 Deploy Your Portfolio

### GitHub Pages (Free)
1. Create GitHub repo: `username.github.io`
2. Push portfolio files
3. Enable Pages in Settings
4. Live at: `https://username.github.io`

### Netlify (Free)
1. Connect GitHub repo
2. Set build command: (none for static)
3. Set publish directory: `/`
4. Deploy!

### Vercel (Free)
1. Connect GitHub account
2. Select portfolio repository
3. Click Deploy
4. Get custom domain

## ✨ Pro Tips

- **Use WebP images** for better performance
- **Keep resume updated** on Google Drive
- **Test on mobile** (use Chrome DevTools)
- **Check accessibility** (lighthouse in DevTools)
- **Monitor performance** (check Core Web Vitals)
- **Update projects** regularly

## 🎯 Essential Customizations (Must Do)

- [ ] Update name and email
- [ ] Add profile picture
- [ ] Update social links
- [ ] Add your projects
- [ ] Update skills
- [ ] Set up contact form
- [ ] Update resume link

## 🚀 Next Steps

1. ✅ Customize content
2. ✅ Test locally
3. ✅ Deploy to web
4. ✅ Share with recruiters
5. ✅ Keep updating

---

**Need help?** Check README.md for detailed documentation.

Happy customizing! 🎉
