# 🚀 Deploy FarmEase - Quick Start

## ⚡ Fast Track (15 minutes)

### Part A: Backend on Render (10 min)

1. **Go to:** https://render.com → Sign up (use GitHub)

2. **Create Database:**
   - Click "New +" → "PostgreSQL"
   - Name: `farmease-db`
   - Database: `farmease`
   - Plan: **Free**
   - Click "Create Database"
   - **Wait 2 minutes** ⏳

3. **Get Database URL:**
   - In database dashboard → "Connect" tab
   - Copy **Internal Database URL**
   - Format: `postgresql://user:pass@host:5432/farmease`
   - **SAVE THIS!** 📋

4. **Run Migration:**
   - In database dashboard → "Shell" tab
   - Copy/paste SQL from `backend/migrations/001_create_tables.sql`
   - Execute it

5. **Deploy Backend:**
   - Click "New +" → "Web Service"
   - Connect repo: `Joellate/Farm-Ease`
   - Settings:
     - **Root Directory:** `backend`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
   - Environment Variables:
     - `DATABASE_URL` = (paste Internal Database URL)
     - `JWT_SECRET` = (use: `farmease-secret-key-2025-change-in-production`)
     - `NODE_ENV` = `production`
   - Click "Create Web Service"
   - **Wait 5 minutes** ⏳
   - **Copy the URL** (e.g., `https://farmease-backend-xxxx.onrender.com`) 📋

---

### Part B: Frontend on Vercel (5 min)

1. **Go to:** https://vercel.com → Sign up (use GitHub)

2. **Import Project:**
   - "Add New Project"
   - Import: `Joellate/Farm-Ease`
   - Settings:
     - **Root Directory:** `frontend`
     - **Framework:** Vite (auto-detected)
   - Environment Variables:
     - `VITE_API_BASE_URL` = `https://your-backend-url.onrender.com/api`
     - (Replace with your actual backend URL from Part A)
   - Click "Deploy"
   - **Wait 2 minutes** ⏳
   - **Copy the URL** (e.g., `https://farmease.vercel.app`) 📋

---

## ✅ Test Your Deployment

1. **Test Backend:**
   - Open: `https://your-backend-url.onrender.com/api`
   - Should see: `{"message":"FarmEase API is running"}`

2. **Test Frontend:**
   - Open: `https://your-frontend-url.vercel.app`
   - Should see login page
   - Try registering a user
   - Try adding a crop

---

## 📝 Save These URLs

- **Backend:** `https://____________________.onrender.com`
- **Frontend:** `https://____________________.vercel.app`
- **GitHub:** `https://github.com/Joellate/Farm-Ease.git` ✅

---

## 🆘 Troubleshooting

**Backend won't start?**
- Check environment variables are set
- Verify DATABASE_URL is correct
- Check logs in Render dashboard

**Frontend can't connect?**
- Verify `VITE_API_BASE_URL` includes `/api` at end
- Check backend is running
- Wait 30 seconds (Render free tier has cold starts)

**Database errors?**
- Make sure you ran the migration SQL
- Verify DATABASE_URL format is correct

---

## 🎉 Done!

Once you have both URLs, update your Google Doc and you're ready to submit!

**Next:** Record your video demo using the deployed URLs.

