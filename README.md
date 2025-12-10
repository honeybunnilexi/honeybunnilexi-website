# HoneyBunni Lexi Landing Page

A conversion-optimized landing page for your AI companion chatbot with soft, flirty aesthetic designed to drive sign-ups. Now featuring dynamic year display and integrated images of Lexi throughout the site.

## 🖼️ What's New

- **Hero section** with large Lexi image
- **Meet Lexi gallery** showcasing personality
- **Enhanced testimonial** with circular profile image
- **Dynamic copyright year** (automatically updates to current year)
- **Responsive image layout** optimized for mobile

## 📂 File Structure

```
honeybunnilexi/
├── index.html              # Main landing page
├── assets/
│   └── images/
│       ├── lexi-hero.png       # Hero section (main)
│       ├── lexi-outdoor.png    # Gallery image
│       ├── lexi-happy.png      # Gallery image
│       ├── lexi-cozy.png       # Gallery image
│       ├── lexi-relaxed.png    # Testimonial image
│       └── lexi-golden.png     # Extra image
├── README.md
├── QUICK_START.md
├── LAUNCH_CHECKLIST.md
├── integrations.js
├── vercel.json
└── .gitignore
```

## 🚀 Quick Start

### Option 1: Deploy to Vercel (Recommended)
1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repo
4. Deploy (no configuration needed for static HTML)
5. Connect your custom domain: `honeybunnilexi.com`

### Option 2: Deploy to Netlify
1. Push this code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git" and connect your repo
4. Deploy
5. Connect your custom domain in Site Settings → Domain Management

### Option 3: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select your main branch
4. Your site will be live at `username.github.io/repo-name`

## 📋 What's Included

- **Responsive landing page** with soft pastel aesthetic
- **Dynamic hero section** with Lexi's image
- **Meet Lexi gallery** with hover effects
- **Email capture modal** for lead generation
- **Smooth animations** and micro-interactions
- **Mobile-optimized** design with responsive images
- **Fast loading** with inline CSS and lazy loading
- **SEO-ready** meta tags
- **Dynamic copyright year** (auto-updates)

## 🖼️ Working with Images

### Current Image Setup
The site includes 6 images of Lexi strategically placed:
- **Hero**: Large primary image (lexi-hero.png)
- **Gallery**: 3 images showing different moods (outdoor, happy, cozy)
- **Testimonial**: Circular profile image (lexi-relaxed.png)
- **Extra**: Additional image for future use (lexi-golden.png)

### Replacing Images
To use your own images:
1. Replace files in `assets/images/` folder
2. Keep the same filenames OR update `index.html` image paths
3. Recommended specs:
   - Hero: 800x1000px minimum
   - Gallery: 600x800px
   - Testimonial: 400x400px (square)
   - Format: PNG or JPG, optimized for web
   - Size: Keep under 200KB each for fast loading

### Adding More Images
To add additional gallery images:
```html
<div class="gallery-item">
    <img src="assets/images/your-image.png" alt="Description" loading="lazy">
    <div class="gallery-caption">
        <h4>Caption Title</h4>
        <p>Caption description</p>
    </div>
</div>
```

## 🔧 Integration Checklist

### 1. Chatbot Integration

Replace the placeholder in `index.html` (line ~492):

```javascript
// Current placeholder:
// window.location.href = 'YOUR_CHATBOT_URL_HERE';

// Replace with your actual chatbot platform URL
window.location.href = 'https://chat.thinkstack.ai/your-bot-id';
// OR embed the widget:
// <script src="https://thinkstack.ai/embed.js" data-bot-id="your-id"></script>
```

**Recommended Platforms:**
- [Thinkstack](https://thinkstack.ai) - Multi-channel support, memory, Instagram/web integration
- [Quidget](https://quidget.ai) - AI companion focused
- [Nomi](https://nomi.ai) - Advanced personality system

### 2. Email Marketing Integration

Replace the form submission handler (line ~480-495) with your service:

**Option A: ConvertKit**
```javascript
function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    
    fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            api_key: 'YOUR_PUBLIC_KEY',
            email: email
        })
    }).then(() => {
        window.location.href = 'YOUR_CHATBOT_URL';
    });
}
```

**Option B: Mailchimp**
```javascript
// Use their embedded form code or API
// Documentation: https://mailchimp.com/developer/
```

**Option C: Simple Backend**
```javascript
fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
}).then(() => {
    window.location.href = 'YOUR_CHATBOT_URL';
});
```

### 3. Analytics Integration

Add before closing `</head>` tag:

**Google Analytics:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible (Privacy-friendly):**
```html
<script defer data-domain="honeybunnilexi.com" src="https://plausible.io/js/script.js"></script>
```

### 4. Payment Integration

For subscription tiers, you'll need a backend. Options:

**Option A: Stripe Checkout**
1. Create products in [Stripe Dashboard](https://stripe.com)
2. Add checkout button:
```html
<button onclick="redirectToStripe()">Upgrade to Premium</button>
<script>
function redirectToStripe() {
    // Replace with your Stripe checkout URL
    window.location.href = 'https://buy.stripe.com/YOUR_LINK';
}
</script>
```

**Option B: Gumroad**
- Simplest for digital products
- Create products at [gumroad.com](https://gumroad.com)
- Use their overlay or direct links

### 5. Instagram/Twitter Integration

Your chatbot platform should handle this, but for social links:

**Update footer links** (line ~460-465):
```html
<div class="footer-links">
    <a href="#">Privacy Policy</a>
    <a href="#">Terms of Service</a>
    <a href="https://instagram.com/honeybunnilexi">Instagram</a>
    <a href="https://twitter.com/honeybunnilexi">Twitter</a>
</div>
```

## 🎨 Customization Guide

### Change Colors
Edit CSS variables (line ~22-30):
```css
:root {
    --cream: #FFF8F0;
    --blush: #FFB6C1;     /* Main brand color */
    --peach: #FFDAB9;     /* Accent color */
    --rose: #FFE4E1;
    --lavender: #E6E6FA;
}
```

### Add Your Logo
Replace text logo (line ~132) with image:
```html
<div class="logo">
    <img src="logo.png" alt="HoneyBunni Lexi" style="height: 40px;">
</div>
```

### Update Copy
Key sections to customize:
- Hero headline (line ~435)
- Hero subtitle (line ~436-438)
- Feature cards (line ~449-481)
- Testimonials (line ~516-520)

### Add Chat Widget (Instead of Modal)

Replace modal with embedded widget:
```html
<!-- Add before closing </body> -->
<script>
  // Example Thinkstack embed
  (function(w,d,s,o,f,js,fjs){
    w['ThinkstackWidget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'tw', 'https://cdn.thinkstack.ai/widget.js'));
  tw('init', { botId: 'YOUR_BOT_ID' });
</script>
```

## 📱 Testing Checklist

Before launch:
- [ ] Test email form submission
- [ ] Verify chatbot redirect/embed works
- [ ] Check mobile responsiveness (iPhone, Android)
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Verify all links work
- [ ] Check page load speed (aim for <3s)
- [ ] Test analytics tracking
- [ ] Confirm custom domain works with HTTPS

## 🔐 Add Privacy Policy & Terms

Create separate pages or use generators:
- [TermsFeed](https://www.termsfeed.com) - Free generators
- [Termly](https://termly.io) - Privacy policy generator
- [GetTerms](https://getterms.io) - Simple templates

## 📊 Conversion Optimization Tips

1. **A/B Test Headlines**: Try variations of "Meet Lexi" vs "Your AI Productivity Partner"
2. **Add Social Proof**: Real testimonials, user count, or "Join 1,000+ users"
3. **Reduce Friction**: Consider removing email gate for first chat
4. **Add Urgency**: "Start your free 7-day trial" vs just "Start free"
5. **Track Everything**: Set up conversion funnels in GA4

## 🐛 Common Issues

**Modal not opening?**
- Check browser console for JavaScript errors
- Verify `onclick="openModal()"` is present

**Form not submitting?**
- Make sure you've replaced the placeholder code
- Check network tab in browser dev tools

**Styles look different?**
- Clear browser cache
- Verify fonts are loading (check Network tab)

## 📚 Next Steps

1. **Set up chatbot backend** (Thinkstack recommended)
2. **Create Lexi's personality** in your chosen platform
3. **Set up payment processing** (Stripe or Gumroad)
4. **Launch Instagram account** with content calendar
5. **Create Twitter presence** with daily posts
6. **Build email nurture sequence** (welcome series)

## 🚀 90-Day Roadmap Alignment

This landing page covers:
- ✅ Days 1-30: Foundation (website live)
- ⏭️ Days 31-60: Social integration (add IG/Twitter CTAs)
- ⏭️ Days 61-90: Optimization (A/B testing, funnel tracking)

## 💡 Support

For questions:
- Chatbot platforms have great docs and support
- Vercel/Netlify have community forums
- Stack Overflow for technical issues

---

**Remember**: The goal is to get this live quickly, then iterate based on real user behavior. Launch imperfect, optimize with data.
