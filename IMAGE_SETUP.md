# 📸 Image Setup Guide

## What's Been Added

Your HoneyBunni Lexi site now includes Lexi's images in strategic locations:

### 1. Hero Section (Right side of homepage)
- **Image**: lexi-hero.png
- **Purpose**: First impression, main visual
- **Size**: Full width on mobile, 50% on desktop
- **Effect**: Soft shadow, rounded corners

### 2. Meet Lexi Gallery (New section)
- **Images**: lexi-outdoor.png, lexi-happy.png, lexi-cozy.png
- **Purpose**: Show personality and approachability
- **Effect**: Hover reveals captions explaining each mood
- **Layout**: 3-column grid (1 column on mobile)

### 3. Testimonial Section (With quote)
- **Image**: lexi-relaxed.png (circular)
- **Purpose**: Visual credibility with testimonial
- **Size**: 200px circle on desktop, 150px on mobile
- **Effect**: Soft shadow, perfectly round

### 4. Extra Image Available
- **Image**: lexi-golden.png
- **Status**: Not currently used, ready for future sections

## Image Files Included

All images are in the `assets/images/` folder:

```
assets/
└── images/
    ├── lexi-hero.png       # 112 KB - Main hero image
    ├── lexi-outdoor.png    # 135 KB - Golden hour outdoor
    ├── lexi-happy.png      # 118 KB - Bright smile
    ├── lexi-cozy.png       # 137 KB - Relaxed bedroom
    ├── lexi-relaxed.png    # 141 KB - Testimonial image
    └── lexi-golden.png     # 136 KB - Extra/future use
```

## How Images Load

### Performance Optimizations:
1. **Hero image**: `loading="eager"` - loads immediately
2. **Gallery images**: `loading="lazy"` - loads as user scrolls
3. **Total size**: ~780 KB for all images
4. **Format**: PNG with good compression

### Mobile Optimization:
- Hero image moves to top on mobile
- Gallery switches to single column
- Testimonial image shrinks to 150px
- All images remain crisp on retina displays

## Customizing Images

### Option 1: Use Your Own Photos
1. Replace files in `assets/images/` folder
2. Keep same filenames
3. Recommended sizes:
   - Hero: 800-1200px wide
   - Gallery: 600-800px wide
   - All: 1.25:1 ratio (portrait orientation)

### Option 2: Generate AI Images
If you want to create more images with the same style:

**Midjourney Prompt** (based on these images):
```
young blonde woman with blue eyes, platinum blonde wavy hair, natural makeup 
with freckles, soft natural lighting, cozy bedroom setting, pastel colors, 
professional photography, warm and inviting expression, 35mm lens, f/1.8
--ar 4:5 --v 6
```

**For outdoor shots**:
```
[same base prompt] golden hour lighting, outdoor natural setting, 
soft focus background --ar 4:5 --v 6
```

### Option 3: Different Styling
Want a different vibe? Update the prompts:
- **Professional**: "corporate office setting, business casual"
- **Fitness**: "yoga studio, athletic wear, energetic"
- **Coffee shop**: "laptop at cafe, creative workspace"

## Adding More Gallery Images

To add a 4th image to the gallery:

```html
<!-- Add this after the existing 3 gallery items -->
<div class="gallery-item">
    <img src="assets/images/lexi-golden.png" alt="Lexi with golden light" loading="lazy">
    <div class="gallery-caption">
        <h4>Your caption here</h4>
        <p>Description text</p>
    </div>
</div>
```

## Removing Images

If you want a simpler site without images:

### Remove Hero Image:
1. Delete `.hero-image` section from HTML (around line 440)
2. Remove `.hero-image` CSS (around line 156)
3. Result: Text-only hero section

### Remove Gallery Section:
1. Delete entire `<section class="meet-lexi">` block
2. Result: Goes straight from features to "how it works"

### Keep It Minimal:
Just comment out image sections you don't want:
```html
<!-- Temporarily hidden
<div class="hero-image">
    <img src="assets/images/lexi-hero.png" alt="Lexi">
</div>
-->
```

## Testing Images

Before deploying, verify:
- [ ] All images load on desktop
- [ ] All images load on mobile
- [ ] No broken image icons
- [ ] Images don't look pixelated
- [ ] Page loads in under 3 seconds
- [ ] Lazy loading works (check Network tab)

## Troubleshooting

**Images not showing after deploy?**
- Check that `assets/images/` folder is in your GitHub repo
- Verify file names match exactly (case-sensitive)
- Make sure images are committed and pushed
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

**Images look blurry?**
- Use higher resolution source images
- Minimum 800px width for hero
- Export at 2x for retina displays

**Page loading slow?**
- Compress images (use tinypng.com or squoosh.app)
- Target 100-150KB per image maximum
- Keep total image payload under 1MB

## Future Enhancements

Ideas for the images:

1. **Video Background**: Replace hero image with looping video
2. **Instagram Feed**: Pull latest IG posts into gallery
3. **Animated GIFs**: Add subtle movement to gallery
4. **Image Slider**: Rotate through different Lexi images
5. **Parallax Effect**: Make hero image move with scroll

---

**Quick Deploy Check**: After deploying, visit your site and verify all 6 images load correctly. If any are missing, check the browser console (F12) for error messages.
