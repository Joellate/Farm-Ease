# 🚀 Step-by-Step Deployment Guide

Follow these exact steps to deploy FarmEase to make it publicly accessible.

---

## Part 1: Deploy Backend to Render

### Step 1: Create Render Account
1. Go to https://render.com
2. Click "Get Started for Free"
3. Sign up with GitHub (recommended) or email

### Step 2: Create PostgreSQL Database
1. In Render dashboard, click "New +" → "PostgreSQL"
2. Name: `farmease-db`
3. Database: `farmease`
4. Region: Choose closest to you
5. Plan: **Free** (for testing)
6. Click "Create Database"
7. **Wait 2-3 minutes** for database to be created
8. Once ready, go to database dashboard
9. Copy the **Internal Database URL** (looks like: `postgresql://farmease_user:password@dpg-xxxxx-a/farmease`)
10. **Save this URL** - you'll need it!

### Step 3: Run Database Migration
1. In Render database dashboard, click "Connect" tab
2. Use "psql" connection string or connect via pgAdmin
3. Run the SQL from `backend/migrations/001_create_tables.sql`
   - Copy the SQL content
   - Paste and execute in database

**OR** use Render's Shell:
1. In database dashboard, click "Shell"
2. Connect and run:
```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'farmer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS crops (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  quantity DECIMAL(10, 2) DEFAULT 0,
  price_per_kg DECIMAL(10, 2) DEFAULT 0,
  status VARCHAR(50) DEFAULT 'available',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_crops_user_id ON crops(user_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
```

### Step 4: Deploy Backend Service
1. In Render dashboard, click "New +" → "Web Service"
2. Connect your GitHub account (if not already)
3. Select repository: `Joellate/Farm-Ease`
4. Configure:
   - **Name:** `farmease-backend`
   - **Region:** Same as database
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Click "Advanced" and add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `5000` (or leave default)
   - `DATABASE_URL` = (paste the Internal Database URL from Step 2)
   - `JWT_SECRET` = (generate a random string, e.g., use https://randomkeygen.com/)
6. Click "Create Web Service"
7. **Wait 5-10 minutes** for deployment
8. Once deployed, copy the URL (e.g., `https://farmease-backend.onrender.com`)
9. **Save this URL** - you'll need it for frontend!

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub (recommended)

### Step 2: Import Project
1. In Vercel dashboard, click "Add New Project"
2. Import Git Repository: `Joellate/Farm-Ease`
3. Configure Project:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

### Step 3: Add Environment Variable
1. Before deploying, click "Environment Variables"
2. Add:
   - **Key:** `VITE_API_BASE_URL`
   - **Value:** `https://your-backend-url.onrender.com/api`
     (Replace with your actual backend URL from Part 1, Step 4)
3. Click "Save"

### Step 4: Deploy
1. Click "Deploy"
2. **Wait 2-3 minutes** for deployment
3. Once deployed, copy the URL (e.g., `https://farmease.vercel.app`)
4. **Save this URL** - this is your public app URL!

---

## Part 3: Test Deployment

### Test Backend:
1. Open browser
2. Go to: `https://your-backend-url.onrender.com/api`
3. Should see: `{"message":"FarmEase API is running"}`

### Test Frontend:
1. Open browser
2. Go to: `https://your-frontend-url.vercel.app`
3. Should see FarmEase login page
4. Try registering a new user
5. Try adding a crop
6. Verify everything works!

---

## Part 4: Update Documentation

### Update README.md:
Add a section:
```markdown
## 🌐 Live Application

**Frontend:** https://your-frontend-url.vercel.app  
**Backend API:** https://your-backend-url.onrender.com/api
```

### Update Google Doc:
- Add frontend URL
- Add backend URL
- Test all links work

---

## Troubleshooting

### Backend won't start?
- Check environment variables are set correctly
- Verify DATABASE_URL is correct
- Check build logs in Render dashboard

### Frontend can't connect to backend?
- Verify `VITE_API_BASE_URL` is set correctly
- Check CORS is enabled in backend (it is)
- Make sure backend URL includes `/api` at the end

### Database connection errors?
- Verify DATABASE_URL format
- Check database is running in Render
- Verify migrations were run

### Slow first request?
- Render free tier has "cold starts" - first request may take 30-60 seconds
- This is normal for free tier
- Consider upgrading for production

---

## Free Tier Limitations

**Render:**
- Services spin down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- 750 hours/month free

**Vercel:**
- 100GB bandwidth/month
- Unlimited deployments
- Perfect for frontend hosting

---

## Next Steps After Deployment

1. ✅ Test all features on deployed app
2. ✅ Update Google Doc with URLs
3. ✅ Record video demo using deployed URLs
4. ✅ Submit Google Doc link on Canvas

---

**Estimated Total Time:** 30-45 minutes  
**Cost:** $0 (using free tiers)

