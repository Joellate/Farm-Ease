# 🚀 FarmEase Deployment Guide

## Quick Deployment Options

### Option 1: Render (Recommended - Free Tier Available)

#### Backend Deployment:
1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `Joellate/Farm-Ease`
4. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:**
     - `PORT` = `5000` (or leave default)
     - `DATABASE_URL` = (from Render PostgreSQL or external)
     - `JWT_SECRET` = (generate a strong random string)
5. Click "Create Web Service"
6. **Copy the URL** (e.g., `https://farmease-backend.onrender.com`)

#### Database Setup on Render:
1. Click "New +" → "PostgreSQL"
2. Create database named `farmease`
3. Copy the **Internal Database URL**
4. Add to backend environment variables as `DATABASE_URL`
5. Run migration: Connect to database and run `backend/migrations/001_create_tables.sql`

#### Frontend Deployment:
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New Project"
3. Import GitHub repository: `Joellate/Farm-Ease`
4. Configure:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Environment Variables:**
     - `VITE_API_BASE_URL` = `https://your-backend-url.onrender.com/api`
5. Click "Deploy"
6. **Copy the URL** (e.g., `https://farmease.vercel.app`)

---

### Option 2: Railway (Alternative)

#### Backend:
1. Go to [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Select `Farm-Ease` repository
4. Add PostgreSQL service
5. Set environment variables
6. Deploy

#### Frontend:
1. Same Railway project
2. Add new service → "GitHub Repo"
3. Select `frontend` directory
4. Set `VITE_API_BASE_URL` to backend URL
5. Deploy

---

### Option 3: Vercel (Frontend) + Fly.io (Backend)

#### Backend on Fly.io:
```bash
# Install flyctl
# Then in backend directory:
fly launch
fly postgres create
fly secrets set DATABASE_URL="..." JWT_SECRET="..."
fly deploy
```

#### Frontend on Vercel:
- Same as Option 1 Frontend steps

---

## Environment Variables for Production

### Backend (.env on hosting platform):
```env
PORT=5000
DATABASE_URL=postgresql://user:pass@host:5432/farmease
JWT_SECRET=your-super-secret-production-key-change-this
NODE_ENV=production
```

### Frontend (Environment Variables on Vercel/Netlify):
```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api
```

---

## Post-Deployment Checklist

- [ ] Backend deployed and accessible
- [ ] Database created and migrations run
- [ ] Frontend deployed and accessible
- [ ] Frontend environment variable points to backend URL
- [ ] Test registration/login flow
- [ ] Test crop CRUD operations
- [ ] Update README.md with public URLs
- [ ] Add URLs to Google Doc

---

## Public URLs (Update After Deployment)

**Backend API:** `https://your-backend-url.onrender.com/api`

**Frontend App:** `https://your-frontend-url.vercel.app`

**GitHub Repo:** `https://github.com/Joellate/Farm-Ease.git`

---

## Troubleshooting

### Backend won't start?
- Check environment variables are set
- Verify database connection string
- Check build logs for errors

### Frontend can't connect to backend?
- Verify `VITE_API_BASE_URL` is correct
- Check CORS settings in backend
- Ensure backend is publicly accessible

### Database connection errors?
- Verify `DATABASE_URL` format
- Check database is accessible from hosting platform
- Run migrations manually if needed

---

**Need help?** Check hosting platform documentation or contact support.

