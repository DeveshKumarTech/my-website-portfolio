# Devesh Kumar - Professional Developer Portfolio

A premium, production-quality personal developer portfolio built with vanilla HTML, CSS, and JavaScript. The portfolio features a modern design system, smooth animations, dark/light theme support, and a responsive layout optimized for all devices.

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/                    # Stylesheets
│   ├── variables.css       # Design system & CSS variables
│   ├── base.css            # Base styles & resets
│   ├── components.css      # Component styles
│   ├── animations.css      # Keyframes & animations
│   └── responsive.css      # Media queries & responsiveness
├── js/                     # JavaScript modules
│   ├── theme.js           # Theme management
│   ├── animations.js      # Scroll animations
│   ├── interactions.js    # Interactive elements
│   └── main.js            # Initialization
├── data/                   # Data files
│   └── portfolio.json      # Portfolio content (centralized)
└── assets/                 # Images & media
```

## 🎨 Design System

### Color Palette

**Dark Mode (Default)**
- Primary: `#00d9ff` (Cyan)
- Secondary: `#7c3aed` (Purple)
- Background: `#0f1419` (Deep Navy)
- Text Primary: `#f0f4f8` (Light Gray)

**Light Mode**
- Automatically generated from dark mode with enhanced contrast
- Toggle with the theme button (☀️/🌙) in navigation

### Typography

- **Font Family:** Segoe UI, system fonts
- **Sizes:** 6 scale levels (xs to 6xl)
- **Weights:** 300-700

### Spacing & Sizing

- Base unit: `1rem`
- Scale: `0.25rem` to `6rem`
- Consistent gap & padding system

## 🚀 Getting Started

### 1. **Update Portfolio Content**

Edit `data/portfolio.json` to customize all portfolio content:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your-email@example.com"
  },
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description",
      "status": "In Development"
    }
  ]
}
```

### 2. **Add Your Profile Image**

Replace the profile image in two ways:

**Option A: Use a file**
- Place your image in `/assets` folder (e.g., `profile.jpg`)
- Update the `<img>` tag in `index.html`:

```html
<img src="assets/profile.jpg" alt="Profile">
```

**Option B: Use a URL**
```html
<img src="https://your-image-url.com/profile.jpg" alt="Profile">
```

### 3. **Customize Colors**

Edit CSS variables in `css/variables.css`:

```css
:root {
  --primary-color: #00d9ff;      /* Change cyan */
  --secondary-color: #7c3aed;    /* Change purple */
  --bg-primary: #0f1419;         /* Change background */
}
```

### 4. **Update Links**

All social and contact links are in:
- HTML footer and profiles section
- `data/portfolio.json` (profiles array)

Update URLs to your own profiles:
- GitHub
- LinkedIn
- LeetCode
- Email

## 🌐 Serving the Portfolio

### Local Development

**Using Python 3:**
```bash
cd portfolio
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (if available):**
```bash
npm install -g http-server
http-server
```

### Production Deployment

The portfolio is static HTML/CSS/JS—deploy anywhere:

- **Netlify** (drag & drop)
- **Vercel** (git-based)
- **GitHub Pages** (free hosting)
- **Any static host** (Firebase, Surge, etc.)

**For GitHub Pages:**
```bash
# Build and push to gh-pages branch
git add .
git commit -m "Deploy portfolio"
git push origin main
```

## 📝 Content Sections

### 1. **Hero Section** (`#home`)
- Name, title, and headline
- Call-to-action buttons
- Quick stats

### 2. **About** (`#about`)
- Personal introduction
- Development philosophy
- 5-step methodology flow

### 3. **Skills** (`#skills`)
- Programming languages (with skill rings)
- Web development skills
- Tools & technologies
- Currently learning

### 4. **Projects** (`#projects`)
- Featured projects
- Project timeline
- Feature lists
- Links to GitHub

### 5. **What's Next** (`#exploring`)
- Future directions
- Learning areas
- Status indicators

### 6. **Journey** (`#journey`)
- Developer timeline
- Career stages
- Growth narrative

### 7. **Education** (`#education`)
- University info
- Degree details
- Certificates section

### 8. **Developer Profiles** (`#profiles`)
- GitHub (primary)
- LinkedIn
- LeetCode
- HackerRank

### 9. **Contact** (`#contact`)
- Contact form
- Direct contact options
- Email & social links

## 🎯 Features

### ✅ Implemented

- **Dark/Light Theme** with persistence
- **Responsive Design** (mobile, tablet, desktop)
- **Smooth Animations** (scroll reveal, hover effects)
- **Accessible Navigation** (keyboard friendly)
- **Contact Form** (with validation)
- **Social Profile Links**
- **SEO Optimized** (meta tags, structured data)
- **Print Friendly**
- **Performance Optimized**
- **Reduced Motion** support

### 🎨 Animation Capabilities

The portfolio includes CSS animations for:
- Scroll reveal animations
- Hover effects
- Smooth transitions
- Loading screen
- Typing effect
- Interactive skill rings

## 🔧 Customization Guide

### Adding a New Section

1. Add HTML section in `index.html`:
```html
<section id="new-section" class="section-padding">
  <div class="container">
    <h2 class="scroll-reveal">Section Title</h2>
    <!-- Content -->
  </div>
</section>
```

2. Add navigation link:
```html
<li><a class="nav-link" data-section="new-section" href="#new-section">Link</a></li>
```

### Adding a New Project

Edit `data/portfolio.json`:
```json
"projects": [
  {
    "id": "project-id",
    "name": "Project Name",
    "subtitle": "Subtitle",
    "description": "Description",
    "status": "In Development",
    "technologies": ["Tech1", "Tech2"],
    "links": {
      "github": "url",
      "demo": "url"
    }
  }
]
```

### Changing Fonts

In `css/variables.css`:
```css
--font-family: 'Your Font Name', sans-serif;
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 1279px
- **Desktop**: 1280px+
- **Large Desktop**: 1920px+

All breakpoints are defined in `css/responsive.css`

## ♿ Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- High color contrast
- Skip-to-main-content link
- Screen reader support

## 🚀 Performance Tips

1. Optimize images (use WebP format)
2. Minify CSS/JS for production
3. Enable GZIP compression on server
4. Use a CDN for static assets
5. Lazy-load images below fold

## 🐛 Troubleshooting

**Theme not saving?**
- Check browser localStorage is enabled
- Clear cache and reload

**Form not submitting?**
- Verify all required fields are filled
- Check browser console for errors
- Form data is validated client-side

**Images not loading?**
- Verify image path is correct
- Check file permissions
- Use absolute URLs for external images

**Animations not smooth?**
- Check `prefers-reduced-motion` setting
- Reduce animations on low-end devices
- Ensure GPU acceleration is enabled

## 📚 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

The code includes:
- CSS custom properties (CSS variables)
- CSS Grid & Flexbox
- Intersection Observer API
- Event handling & delegation
- Async/await
- LocalStorage API

Great for learning vanilla JavaScript & CSS!

## 📄 License

Personal portfolio. Feel free to fork and customize for your own use.

## 🤝 Contributing

This is a personal portfolio, but you can:
- Suggest design improvements
- Report bugs
- Propose new features

## 📞 Support

For issues or questions:
- Check the troubleshooting section
- Review the code comments
- Test in different browsers

---

**Built with curiosity, creativity, and code.** 🚀

Last Updated: 2026-01-09
