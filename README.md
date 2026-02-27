# Scalz.ai Facebook AutoPoster

AI-powered Facebook posting tool that generates 25 daily posts with photorealistic AI images across Business & Marketing, AI & Technology, and Lifestyle & Motivation niches.

## Features

- 🤖 AI-generated photorealistic images for every post
- 📅 Smart scheduling across peak engagement times
- 🔐 Supabase authentication (email/password)
- 💾 Persistent post storage with Supabase database
- 📊 Dashboard with real-time stats
- 🎨 Category filtering and content management
- ⚙️ Configurable settings (tone, hashtags, image style)
- 📱 Responsive dark-mode dashboard

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS
- **Backend:** Supabase (Auth, Database, Storage)
- **AI Images:** Generated with AI image models
- **Design:** Custom dark SaaS dashboard

## Setup

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to **SQL Editor** and run the contents of `supabase-setup.sql`
3. Go to **Settings > API** and copy your Project URL and anon/public key

### 2. Configure the App
1. Open `config.js`
2. Replace `YOUR_SUPABASE_URL` with your Project URL
3. Replace `YOUR_SUPABASE_ANON_KEY` with your anon key

### 3. Create Storage Bucket
1. In Supabase, go to **Storage**
2. Create a new bucket called `post-images`
3. Set it to **Public**

### 4. Run Locally
Open `index.html` in your browser, or use a local server:
```bash
npx serve .
```

### 5. Deploy
Deploy to Vercel, Netlify, or any static hosting:
```bash
# Vercel
npx vercel

# Netlify
npx netlify deploy --prod
```

## Facebook API Setup
See the Settings tab in the dashboard for a step-by-step guide to connecting your Facebook Page via the Graph API.

## Project Structure
```
├── index.html          # Main dashboard HTML
├── style.css           # Dark theme styles
├── config.js           # Supabase configuration
├── supabase-client.js  # Supabase API wrapper
├── app.js              # Application logic
├── supabase-setup.sql  # Database schema
├── assets/             # AI-generated images
│   ├── post-01-scaling.png
│   ├── post-02-customers.png
│   └── ... (25 images)
└── README.md
```

## Graceful Fallback
The app works without Supabase configured — all posts generate locally in-browser. Database saving is attempted non-blocking; if it fails (e.g., placeholder credentials), a warning toast is shown and the UI continues working normally.

## License
MIT
