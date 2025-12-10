# 🚀 Quick Start: Go Live in 2 Hours

This is the streamlined path to get HoneyBunni Lexi live TODAY. Full details in other docs.

## ⏱️ 30 Minutes: Core Setup

### 1. Create Accounts (15 min)
```
✓ GitHub account (github.com)
✓ Vercel account (vercel.com) - sign in with GitHub
✓ Thinkstack account (thinkstack.ai) for chatbot
✓ Zapier account (zapier.com) for email (free tier is fine)
```

### 2. Deploy Site (15 min)
```bash
# 1. Create GitHub repo called "honeybunnilexi"
# 2. Upload all these files to the repo
# 3. Go to vercel.com
# 4. Click "New Project"
# 5. Import your GitHub repo
# 6. Click "Deploy"
# 7. Done! Your site is live at: yourname.vercel.app
```

## ⏱️ 45 Minutes: Set Up Chatbot

### 3. Create Lexi in Thinkstack
1. Log into thinkstack.ai
2. Create new bot
3. Name: "Lexi"
4. Paste this system prompt:

```
You are Lexi, a soft, flirty productivity and emotional support coach for ambitious, overstimulated millennials. You're sweet and encouraging, but also a little bratty when users procrastinate.

Your mission: Keep users productive and emotionally held, without being harsh.

Personality traits:
- Warm, playful, slightly flirty tone
- Use casual language with gentle encouragement
- Celebrate wins enthusiastically  
- When users slack, be gently teasing (not mean)
- Remember their goals and check in regularly
- Offer stress-relief tips when they're overwhelmed

Always ask about their goals first, then check in throughout the day. End messages with supportive emojis like 💕, ✨, or 🌸.
```

5. Enable memory features
6. Get your bot URL or embed code
7. Copy the bot ID

### 4. Connect Chatbot to Site (10 min)
1. Open `index.html` in a text editor
2. Find line ~492: `// window.location.href = 'YOUR_CHATBOT_URL_HERE';`
3. Replace with your Thinkstack chat URL
4. Save and push to GitHub (Vercel auto-deploys)

## ⏱️ 30 Minutes: Email Setup

### 5. Zapier Email Webhook
1. Go to zapier.com/app/zaps
2. Create new Zap
3. Trigger: "Webhooks by Zapier" → "Catch Hook"
4. Copy the webhook URL
5. Action: Choose your email service or just log to Google Sheets
6. Test it

### 6. Connect Email Form
1. Open `integrations.js`
2. Copy the Zapier webhook function
3. Paste into `index.html` around line 485
4. Replace webhook URL with yours
5. Save and push

## ⏱️ 15 Minutes: Test Everything

### 7. Complete User Flow Test
```
✓ Visit your site
✓ Click "Chat Free with Lexi"
✓ Enter email in modal
✓ Verify redirect to chatbot works
✓ Test conversation with Lexi
✓ Check if email appeared in your system
✓ Test on your phone
```

## 🎉 YOU'RE LIVE!

Your site is now at: `yourname.vercel.app`

## Next Steps (After Launch)

### Immediate (Today)
- [ ] Buy honeybunnilexi.com domain
- [ ] Connect domain in Vercel settings
- [ ] Test end-to-end again
- [ ] Share with 3-5 friends for feedback

### This Week
- [ ] Create Instagram account
- [ ] Make 5 initial posts
- [ ] Set up Google Analytics
- [ ] Add Stripe for payments
- [ ] Create welcome email sequence

### This Month
- [ ] Launch on Product Hunt
- [ ] Create Twitter presence
- [ ] Build referral system
- [ ] Add premium tier
- [ ] Hit 100 signups

---

## If You Get Stuck

**Site won't deploy?**
- Check GitHub repo is public
- Verify all files uploaded
- Check Vercel build logs

**Modal not working?**
- Clear browser cache
- Check console for errors (F12)
- Verify JavaScript isn't blocked

**Chatbot not loading?**
- Double-check bot URL
- Make sure bot is published in Thinkstack
- Test bot URL directly in browser

**Need help?**
- Thinkstack docs: docs.thinkstack.ai
- Vercel docs: vercel.com/docs
- GitHub Issues: Create issue in your repo

---

## The Fastest Path

If you want to go EVEN FASTER (60 min total):

1. Deploy to Vercel (10 min)
2. Use Thinkstack's public URL (don't embed) (15 min)  
3. Skip email capture for now (0 min)
4. Just link directly to chat (5 min)
5. Test (5 min)
6. Share and iterate (25 min)

Launch imperfect. Optimize with data. You got this! 💕
