/**
 * INTEGRATION EXAMPLES
 * Copy and paste these code snippets into index.html
 * Replace placeholder values with your actual credentials
 */

// ============================================
// 1. CHATBOT INTEGRATIONS
// ============================================

// OPTION A: Thinkstack Embed Widget
// Add this before closing </body> tag in index.html
/*
<script>
  (function(w,d,s,o,f,js,fjs){
    w['ThinkstackWidget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'tw', 'https://cdn.thinkstack.ai/widget.js'));
  
  tw('init', { 
    botId: 'YOUR_BOT_ID',
    theme: {
      primaryColor: '#FFB6C1',
      bubbleBackground: '#FFF8F0'
    }
  });
</script>
*/

// OPTION B: Direct Redirect to Chat Interface
// Replace the placeholder in handleSubmit() function (around line 492)
function handleSubmitWithRedirect(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    
    // Store email and redirect
    localStorage.setItem('userEmail', email);
    window.location.href = 'https://chat.thinkstack.ai/lexi-bot-id';
}

// OPTION C: Embedded iFrame Chat
// Add this HTML where you want the chat to appear
/*
<div id="chat-container" style="width: 100%; height: 600px; border-radius: 20px; overflow: hidden;">
    <iframe 
        src="https://chat.yourbotplatform.com/embed/YOUR_BOT_ID"
        width="100%" 
        height="100%" 
        frameborder="0"
        allow="microphone; camera">
    </iframe>
</div>
*/


// ============================================
// 2. EMAIL MARKETING INTEGRATIONS
// ============================================

// OPTION A: ConvertKit
function submitToConvertKit(email) {
    const FORM_ID = 'YOUR_CONVERTKIT_FORM_ID';
    const API_KEY = 'YOUR_CONVERTKIT_PUBLIC_API_KEY';
    
    return fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            api_key: API_KEY,
            email: email,
            tags: ['landing-page-signup']
        })
    });
}

// OPTION B: Mailchimp
function submitToMailchimp(email) {
    // You'll need a server-side endpoint for this due to CORS
    // Or use their embedded form
    return fetch('/api/mailchimp/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email })
    });
}

// OPTION C: Simple Backend (Node.js/Express example)
// Create a serverless function in /api/subscribe.js
/*
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { email } = req.body;
    
    // Store in your database
    // Send welcome email
    // Add to email service
    
    return res.status(200).json({ success: true });
}
*/

// OPTION D: Zapier Webhook (No Code!)
function submitToZapier(email) {
    const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID';
    
    return fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            source: 'landing-page',
            timestamp: new Date().toISOString()
        })
    });
}


// ============================================
// 3. COMPLETE FORM HANDLER WITH EMAIL + CHATBOT
// ============================================

// Replace the handleSubmit function in index.html with this:
async function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    const submitButton = event.target.querySelector('button');
    
    // Update button to show loading
    submitButton.textContent = 'Starting...';
    submitButton.disabled = true;
    
    try {
        // Send to email service
        await submitToConvertKit(email);
        // OR await submitToZapier(email);
        
        // Store email for chatbot
        localStorage.setItem('userEmail', email);
        
        // Track conversion
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
                'value': 1.0,
                'currency': 'USD'
            });
        }
        
        // Redirect to chat
        window.location.href = 'https://chat.thinkstack.ai/YOUR_BOT_ID?email=' + encodeURIComponent(email);
        
    } catch (error) {
        console.error('Submission error:', error);
        alert('Oops! Something went wrong. Please try again.');
        submitButton.textContent = 'Let\'s Go! 💕';
        submitButton.disabled = false;
    }
}


// ============================================
// 4. ANALYTICS INTEGRATIONS
// ============================================

// OPTION A: Google Analytics 4 (GA4)
// Add this in the <head> section of index.html
/*
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
  
  // Custom events
  function trackEvent(category, action, label) {
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }
</script>
*/

// OPTION B: Facebook Pixel
/*
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
*/

// OPTION C: Plausible (Privacy-friendly)
// Add this in the <head> section
/*
<script defer data-domain="honeybunnilexi.com" src="https://plausible.io/js/script.js"></script>
*/

// Track custom events
function trackConversion(eventName) {
    // GA4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName);
    }
    
    // Plausible
    if (typeof plausible !== 'undefined') {
        plausible(eventName);
    }
}


// ============================================
// 5. PAYMENT/SUBSCRIPTION INTEGRATION
// ============================================

// OPTION A: Stripe Checkout
function redirectToStripeCheckout(planType) {
    const STRIPE_LINKS = {
        'soft-support': 'https://buy.stripe.com/YOUR_BASIC_LINK',
        'obsession-mode': 'https://buy.stripe.com/YOUR_PREMIUM_LINK'
    };
    
    // Track upgrade intent
    trackConversion('upgrade_clicked');
    
    window.location.href = STRIPE_LINKS[planType];
}

// OPTION B: Gumroad Overlay
// Add this script in <head>
/*
<script src="https://gumroad.com/js/gumroad.js"></script>
*/
// Then use this for product links:
/*
<a href="https://yourname.gumroad.com/l/lexi-premium" class="gumroad-button">
    Upgrade to Premium
</a>
*/

// OPTION C: Paddle
/*
<script src="https://cdn.paddle.com/paddle/paddle.js"></script>
<script>
    Paddle.Setup({ vendor: YOUR_VENDOR_ID });
    
    function openCheckout() {
        Paddle.Checkout.open({
            product: YOUR_PRODUCT_ID,
            email: localStorage.getItem('userEmail')
        });
    }
</script>
*/


// ============================================
// 6. INSTAGRAM DM BOT INTEGRATION
// ============================================

// This is typically configured on your chatbot platform
// But you can add IG story links that trigger DMs

// Example: Add to Instagram Story with link
/*
Story text: "Want your own productivity girlfriend? 💕"
Link: https://honeybunnilexi.com/?ref=instagram
CTA: "Start chatting"
*/

// Then track Instagram traffic
const urlParams = new URLSearchParams(window.location.search);
const referrer = urlParams.get('ref');
if (referrer === 'instagram') {
    trackConversion('instagram_visit');
}


// ============================================
// 7. A/B TESTING SETUP
// ============================================

// Simple headline A/B test
function initABTest() {
    const variant = Math.random() < 0.5 ? 'A' : 'B';
    
    const headlines = {
        'A': 'Meet Lexi, your soft, flirty focus coach',
        'B': 'Your AI productivity girlfriend is here'
    };
    
    document.querySelector('h1 .highlight').textContent = 
        headlines[variant].split(' ')[1]; // Just the name part
    
    // Track which variant user saw
    localStorage.setItem('variant', variant);
    trackConversion('variant_' + variant);
}

// Call on page load
// initABTest();


// ============================================
// 8. ENHANCED MODAL WITH MULTIPLE STEPS
// ============================================

let modalStep = 1;

function advancedHandleSubmit(event) {
    event.preventDefault();
    
    if (modalStep === 1) {
        // Step 1: Email capture
        const email = event.target.querySelector('input[type="email"]').value;
        localStorage.setItem('userEmail', email);
        
        // Show step 2: Quick survey
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
        modalStep = 2;
        
    } else if (modalStep === 2) {
        // Step 2: Get their main goal
        const goal = event.target.querySelector('select').value;
        localStorage.setItem('userGoal', goal);
        
        // Send both to backend
        submitToConvertKit(localStorage.getItem('userEmail'));
        
        // Redirect to chat with context
        const chatUrl = `https://chat.thinkstack.ai/YOUR_BOT_ID?goal=${goal}`;
        window.location.href = chatUrl;
    }
}

// Example multi-step modal HTML:
/*
<div id="step1" class="modal-step">
    <h3>Start chatting with Lexi ✨</h3>
    <input type="email" placeholder="your.email@example.com" required>
    <button type="submit" class="btn-primary">Continue</button>
</div>

<div id="step2" class="modal-step" style="display:none;">
    <h3>What's your biggest challenge?</h3>
    <select required>
        <option value="focus">Staying focused</option>
        <option value="motivation">Feeling motivated</option>
        <option value="stress">Managing stress</option>
        <option value="habits">Building habits</option>
    </select>
    <button type="submit" class="btn-primary">Meet Lexi 💕</button>
</div>
*/


// ============================================
// USAGE INSTRUCTIONS
// ============================================

/*
1. Choose your integrations from above
2. Copy the relevant code snippets
3. Replace placeholder values (YOUR_BOT_ID, API_KEY, etc.)
4. Paste into index.html in the appropriate sections
5. Test thoroughly before launching

RECOMMENDED STACK FOR QUICK START:
- Chatbot: Thinkstack (easiest multi-platform)
- Email: Zapier Webhook → ConvertKit (no code needed)
- Analytics: Plausible or GA4
- Payment: Stripe Checkout Links (simplest)

This gets you live in ~1 hour vs. days of custom development.
*/
