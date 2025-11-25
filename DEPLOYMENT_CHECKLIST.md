# ✅ Deployment Checklist - Follow Along

Print this or keep it open while deploying!

---

## 🔵 RENDER - BACKEND SETUP

### Account Setup
- [ ] Go to https://render.com
- [ ] Click "Get Started for Free"
- [ ] Sign up with GitHub
- [ ] Authorize Render

### Database Creation
- [ ] Click "New +" → "PostgreSQL"
- [ ] Name: `farmease-db`
- [ ] Database: `farmease`
- [ ] Plan: Free
- [ ] Click "Create Database"
- [ ] Wait for database to be ready (2-3 min)

### Get Database URL
- [ ] Open database dashboard
- [ ] Go to "Connect" tab
- [ ] Copy "Internal Database URL"
- [ ] **Paste it here:** `_________________________________`

### Run Migration
- [ ] Open database "Shell" tab
- [ ] Connect to shell
- [ ] Copy SQL from `backend/migrations/001_create_tables.sql`
- [ ] Paste and execute in shell
- [ ] Verify tables created (should see CREATE TABLE messages)

### Deploy Backend
- [ ] Click "New +" → "Web Service"
- [ ] Connect GitHub repo: `Joellate/Farm-Ease`
- [ ] Root Directory: `backend`
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] Add Environment Variable: `NODE_ENV` = `production`
- [ ] Add Environment Variable: `PORT` = `5000`
- [ ] Add Environment Variable: `DATABASE_URL` = (paste from above)
- [ ] Add Environment Variable: `JWT_SECRET` = `farmease-secret-2025`
- [ ] Click "Create Web Service"
- [ ] Wait for deployment (5-10 min)
- [ ] **Copy backend URL:** `https://____________________.onrender.com`

### Test Backend
- [ ] Open backend URL in browser
- [ ] Should see: `{"message":"FarmEase API is running"}`
- [ ] If error, check logs in Render dashboard

---

## 🟣 VERCEL - FRONTEND SETUP

### Account Setup
- [ ] Go to https://vercel.com
- [ ] Click "Sign Up"
- [ ] Sign up with GitHub
- [ ] Authorize Vercel

### Deploy Frontend
- [ ] Click "Add New Project"
- [ ] Import: `Joellate/Farm-Ease`
- [ ] Root Directory: `frontend`
- [ ] Framework: Vite (auto)
- [ ] **BEFORE DEPLOY**, click "Environment Variables"
- [ ] Add: `VITE_API_BASE_URL` = `https://your-backend-url.onrender.com/api`
  (Replace with your actual backend URL!)
- [ ] Click "Deploy"
- [ ] Wait for deployment (2-3 min)
- [ ] **Copy frontend URL:** `https://____________________.vercel.app`

### Test Frontend
- [ ] Open frontend URL in browser
- [ ] Should see FarmEase login page
- [ ] Try registering a user
- [ ] Try logging in
- [ ] Try adding a crop
- [ ] Try viewing crop details

---

## 📝 FINAL STEPS

### Update Documentation
- [ ] Update `README.md` with deployment URLs
- [ ] Commit and push:
  ```bash
  git add README.md
  git commit -m "Add deployment URLs"
  git push
  ```

### Update Google Doc
- [ ] Open Google Doc template
- [ ] Add frontend URL
- [ ] Add backend URL
- [ ] Test all links work
- [ ] Make doc publicly accessible

---

## 🎉 DONE!

Your application is now live and accessible to the facilitator!

**Next:** Record your video demo using the deployed URLs.

---

## 🆘 Need Help?

If you get stuck:
1. Check `DEPLOYMENT_STEP_BY_STEP.md` for detailed instructions
2. Check Render/Vercel documentation
3. Look at error logs in dashboard
4. Common issues:
   - Database URL wrong format → Check "Internal Database URL"
   - Frontend can't connect → Make sure URL ends with `/api`
   - Backend won't start → Check environment variables are set

