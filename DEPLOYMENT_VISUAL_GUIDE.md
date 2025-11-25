# 🎯 Visual Deployment Guide

## Step-by-Step with Screenshots Guide

### 🔵 STEP 1: Render - Create Account

1. Open: https://render.com
2. Click **"Get Started for Free"**
3. Choose **"Sign up with GitHub"** (easiest)
4. Authorize Render to access your GitHub

---

### 🟢 STEP 2: Render - Create PostgreSQL Database

1. In Render dashboard, click **"New +"** button (top right)
2. Select **"PostgreSQL"**
3. Fill in:
   ```
   Name: farmease-db
   Database: farmease
   User: (auto-generated)
   Region: (choose closest to you)
   PostgreSQL Version: 14 or 15
   Plan: Free
   ```
4. Click **"Create Database"**
5. **WAIT 2-3 minutes** for database to be created ⏳

---

### 🟡 STEP 3: Get Database Connection String

1. Once database is ready, click on it
2. Go to **"Connect"** tab
3. Find **"Internal Database URL"**
4. It looks like: `postgresql://farmease_user:xxxxx@dpg-xxxxx-a.frankfurt-postgres.render.com/farmease`
5. **COPY THIS ENTIRE STRING** 📋
6. Save it somewhere safe!

---

### 🟠 STEP 4: Run Database Migration

1. In database dashboard, click **"Shell"** tab
2. Click **"Connect"** to open psql shell
3. Copy the entire SQL from `backend/migrations/001_create_tables.sql`
4. Paste into the shell and press Enter
5. You should see: `CREATE TABLE` messages
6. Type `\q` to exit

**OR** use pgAdmin/any PostgreSQL client:
- Connect using the connection string
- Run the SQL migration file

---

### 🔴 STEP 5: Deploy Backend Service

1. In Render dashboard, click **"New +"** → **"Web Service"**
2. Connect your GitHub account (if not already)
3. Select repository: **`Joellate/Farm-Ease`**
4. Configure:
   ```
   Name: farmease-backend
   Region: (same as database)
   Branch: main
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```
5. Click **"Advanced"** to add Environment Variables:
   ```
   NODE_ENV = production
   PORT = 5000
   DATABASE_URL = (paste the Internal Database URL from Step 3)
   JWT_SECRET = farmease-secret-key-2025-change-me
   ```
6. Click **"Create Web Service"**
7. **WAIT 5-10 minutes** for first deployment ⏳
8. Once deployed, copy the URL (e.g., `https://farmease-backend-xxxx.onrender.com`) 📋

---

### 🟣 STEP 6: Vercel - Create Account

1. Open: https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel

---

### 🟤 STEP 7: Deploy Frontend to Vercel

1. In Vercel dashboard, click **"Add New Project"**
2. Import Git Repository: **`Joellate/Farm-Ease`**
3. Configure Project:
   ```
   Framework Preset: Vite (auto-detected)
   Root Directory: frontend
   Build Command: npm run build (auto)
   Output Directory: dist (auto)
   Install Command: npm install (auto)
   ```
4. **BEFORE DEPLOYING**, click **"Environment Variables"**
5. Add:
   ```
   Name: VITE_API_BASE_URL
   Value: https://your-backend-url.onrender.com/api
   ```
   (Replace `your-backend-url` with your actual backend URL from Step 5)
6. Click **"Deploy"**
7. **WAIT 2-3 minutes** ⏳
8. Once deployed, copy the URL (e.g., `https://farmease.vercel.app`) 📋

---

## ✅ Verification Checklist

After deployment, test:

- [ ] Backend URL shows: `{"message":"FarmEase API is running"}`
- [ ] Frontend URL shows login page
- [ ] Can register a new user
- [ ] Can login
- [ ] Can view dashboard
- [ ] Can add a crop
- [ ] Can view crop details with storage/nutrition info

---

## 📋 URLs to Save

```
Backend API: https://____________________.onrender.com
Frontend App: https://____________________.vercel.app
GitHub Repo: https://github.com/Joellate/Farm-Ease.git ✅
```

---

## 🎬 What to Do Next

1. ✅ Update README.md with your deployment URLs
2. ✅ Update Google Doc with all links
3. ✅ Record video demo using deployed URLs
4. ✅ Submit on Canvas!

---

**Total Time:** ~30-45 minutes  
**Cost:** $0 (free tiers)

