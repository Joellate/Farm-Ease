# 🚀 FarmEase - Quick Start Guide

## 📍 **WHERE TO OPEN THE APP**

Once everything is running, open your web browser and go to:

### **🌐 Frontend (React App):**
```
http://localhost:5173
```
**This is where you'll see the FarmEase interface!**

### **🔧 Backend API (for testing):**
```
http://localhost:5000/api
```
**This shows the API is running (you'll see a JSON message)**

---

## ⚙️ Setup Steps

### 1. **Configure Environment Variables**

#### Backend (`backend/.env`):
```env
PORT=5000
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/farmease
JWT_SECRET=your-super-secret-jwt-key-change-this
```

**Important:** 
- Replace `your_password` with your PostgreSQL password
- Replace `your-super-secret-jwt-key-change-this` with a random string (you can generate one online)

#### Frontend (`frontend/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api
```
*(This is already set correctly)*

### 2. **Create PostgreSQL Database**

1. Open PostgreSQL (pgAdmin or command line)
2. Create a new database named `farmease`
3. Make sure your PostgreSQL server is running

### 3. **Run Database Migration**

Open a terminal in the `backend` folder and run:
```bash
node setup-db.js
```

This creates the `users` and `crops` tables.

### 4. **Start the Backend Server**

Open a terminal and run:
```bash
cd backend
npm run dev
```

**You should see:** `FarmEase server listening on port 5000`

### 5. **Start the Frontend Server**

Open a **NEW terminal** (keep backend running) and run:
```bash
cd frontend
npm run dev
```

**You should see:** `Local: http://localhost:5173`

---

## 🎯 **How to Access the App**

1. **Open your web browser** (Chrome, Firefox, Edge)
2. **Navigate to:** `http://localhost:5173`
3. You'll see the FarmEase login page!

---

## 📱 Available Pages

- **`/`** - Login page
- **`/signup`** - Create new account
- **`/dashboard`** - View all crops (after login)
- **`/crops/new`** - Add a new crop listing
- **`/crops/:id`** - View crop details

---

## 🐛 Troubleshooting

### Backend won't start?
- Check PostgreSQL is running
- Verify `DATABASE_URL` in `backend/.env` is correct
- Make sure you ran `node setup-db.js` first

### Frontend won't start?
- Make sure backend is running on port 5000
- Check `VITE_API_BASE_URL` in `frontend/.env`

### Can't connect to database?
- Verify PostgreSQL is installed and running
- Check database name is `farmease`
- Verify username/password in `DATABASE_URL`

---

## ✅ Quick Test

1. Start backend: `cd backend && npm run dev`
2. Start frontend: `cd frontend && npm run dev` (in new terminal)
3. Open browser: `http://localhost:5173`
4. Click "Signup" to create an account
5. Login and try adding a crop!

---

**Need help?** Check the main `README.md` for more details.

