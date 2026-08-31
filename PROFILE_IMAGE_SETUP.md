# 📸 Profile Image Setup Guide

Replace the placeholder profile image with your actual photo.

## 📍 Current Status

Currently, the portfolio uses a **base64 encoded placeholder image**. You need to replace it with your actual professional photo.

The image is located in `index.html` in the Hero section:
```html
<img src="data:image/jpeg;base64,/9j/4AAQSkZ..." alt="Devesh Kumar Profile">
```

## 🎯 Option 1: Add Image File (Recommended)

### Step 1: Prepare Your Image

1. Choose a professional, high-quality photo
2. Crop to a square (e.g., 500x500px, 1000x1000px)
3. Optimize the file:
   - Format: JPG or WebP (smaller file size)
   - Size: Under 500KB
   - Resolution: 2x for retina displays (e.g., 1000x1000px)

**Tools for optimization:**
- Online: TinyPNG, Squoosh, ImageOptim
- Adobe: Photoshop, Lightroom
- Free: GIMP, Paint.NET

### Step 2: Add Image to Project

1. Create `/assets` folder if it doesn't exist
2. Save your optimized image as `profile.jpg` in `/assets`

Directory structure:
```
portfolio/
├── assets/
│   └── profile.jpg          ← Your image here
├── css/
├── js/
├── data/
└── index.html
```

### Step 3: Update HTML

In `index.html`, find the profile image line (around line 200-210):

**Find this:**
```html
<img src="data:image/jpeg;base64,/9j/4AAQSkZ..." alt="Devesh Kumar Profile" ...>
```

**Replace with:**
```html
<img src="assets/profile.jpg" alt="Devesh Kumar Profile" 
     style="width: 100%; max-width: 340px; border-radius: var(--radius-2xl); position: relative; z-index: 1; box-shadow: var(--shadow-lg), var(--shadow-glow); border: 2px solid var(--border-color);">
```

### Step 4: Test

Open `index.html` in your browser and verify the image appears correctly.

---

## 🌐 Option 2: Use Online Image URL

### Best Services:

1. **Imgur** (free, simple)
   - Upload image
   - Copy direct link (ending in .jpg)
   - Use in HTML

2. **Cloudinary** (free tier, powerful)
   - Create account
   - Upload image
   - Get optimized URL

3. **Firebase Storage** (free, reliable)
   - Set up Firebase project
   - Upload to storage
   - Get download URL

4. **GitHub** (free, reliable)
   - Add image to `/assets` in repo
   - Get raw URL from GitHub
   - Use in HTML

### Implementation:

In `index.html`, update the image src:

```html
<img src="https://your-image-url.com/profile.jpg" alt="Devesh Kumar Profile" ...>
```

**Example with GitHub:**
```html
<img src="https://raw.githubusercontent.com/DeveshKumarTech/portfolio/main/assets/profile.jpg" alt="Devesh Kumar Profile" ...>
```

---

## 🎨 Option 3: Add Artistic Treatment

### Ghibli-Style Artistic Portrait

If you want an AI-generated artistic version of your photo:

1. **Services to use:**
   - Adobe Firefly
   - Midjourney
   - Stable Diffusion
   - Leonardo.ai

2. **Prompt example:**
   ```
   Create a Ghibli-inspired artistic portrait of a person with [your description].
   Maintain recognizable facial features, art style: Studio Ghibli.
   ```

3. **Save and add:**
   - Save artistic image
   - Add to `/assets/profile-artistic.jpg`
   - Update HTML src

---

## 📏 Image Specifications

### Recommended Specs:
- **Format:** JPG (smaller) or WebP (best quality/size)
- **Dimensions:** 500x500px minimum, 1000x1000px recommended
- **File Size:** Under 500KB (ideally 50-200KB)
- **Aspect Ratio:** Square (1:1)
- **Quality:** High quality, well-lit, professional

### Ideal Photo:
- ✅ Professional headshot
- ✅ Good lighting
- ✅ Clean background
- ✅ Clear facial features
- ✅ Neutral or slight smile
- ✅ Business casual dress (optional)
- ✅ Directly facing camera

---

## ✅ Verification Checklist

After adding your image:

- [ ] Image displays in hero section
- [ ] Image is square and properly sized
- [ ] Image has rounded corners
- [ ] Image has glowing border effect
- [ ] Image responsive (resizes on mobile)
- [ ] No broken link errors in console
- [ ] Image loads quickly

---

## 🔧 Troubleshooting

### Image Not Showing

**Problem:** Image appears as broken link

**Solutions:**
1. Check file path is correct
2. Verify file exists in `/assets` folder
3. Check file name spelling and extension
4. Clear browser cache and reload
5. Try different browser

### Image Quality Issues

**Problem:** Image is blurry or pixelated

**Solutions:**
1. Use higher resolution image
2. Check browser zoom level (should be 100%)
3. Optimize image using online tool
4. Re-export with better quality settings

### File Size Too Large

**Problem:** Website loads slowly

**Solutions:**
1. Use TinyPNG to compress
2. Convert JPG to WebP format
3. Reduce dimensions (max 1000x1000px)
4. Use lazy-loading (browser default)

### CORS or Security Error

**Problem:** Error loading external image URL

**Solutions:**
1. Use HTTPS URLs only
2. Check image is publicly accessible
3. Verify URL is directly to image (not webpage)
4. Use trusted services (GitHub, Cloudinary)

---

## 🚀 Performance Tips

1. **Use WebP Format**
   - 25-35% smaller than JPG
   - Better quality
   - Browser support: Modern browsers

2. **Optimize Before Upload**
   ```
   Original: 5MB JPG
   → Compressed: 150KB
   → Optimized WebP: 80KB
   ```

3. **Responsive Images**
   The HTML already includes responsive styling.
   The image automatically resizes for mobile.

4. **Lazy Loading**
   ```html
   <img src="..." loading="lazy" alt="...">
   ```
   (Already optimized in portfolio)

---

## 📱 Testing on Different Devices

Test your image on:

1. **Desktop** (1920px, 1440px)
2. **Tablet** (768px)
3. **Mobile** (375px, 414px)

Use Chrome DevTools:
1. Press F12
2. Click device toggle
3. Select different devices
4. Verify image displays correctly

---

## 💡 Pro Tips

- **Use a professional headshot** for credibility
- **Update every year** for freshness
- **Keep consistent** across all platforms
- **High quality matters** - recruiters notice
- **Proper lighting** is key to good photos
- **Simple background** keeps focus on you

---

## 📞 Need Help?

If you're stuck:

1. **Check file path** - most common issue
2. **Verify file exists** - make sure it's actually there
3. **Try different format** - JPG vs PNG vs WebP
4. **Test locally first** - use local file before uploading
5. **Use browser DevTools** - check Network tab for 404 errors

---

## 🎉 You're Done!

Once your image is added:
1. Commit to GitHub
2. Deploy to Netlify/Vercel
3. Share your portfolio
4. Impress those recruiters!

**Remember:** Your image is the first thing visitors see. Make it count! 🌟

---

**Questions?** Check the main README.md or CUSTOMIZATION.md for more help.
