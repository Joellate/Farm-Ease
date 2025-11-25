# FarmEase

Smart full-stack platform enabling smallholder farmers to list produce, learn storage techniques, and connect with buyers.

## 🚀 **QUICK START - CLICK HERE!**

**👉 [START_HERE.md](./START_HERE.md) - Step-by-step guide to run the app and see it in your browser!**

**📍 Where to open the app:** `http://localhost:5173` (after starting both servers)

## Tech Stack

- Backend: Node.js, Express, PostgreSQL, JWT auth.
- Frontend: React (Vite), React Router, Axios.

## Project Structure

```
backend/        Express API, models, routes
frontend/       Vite React client
docs/           Optional written artifacts
.gitignore
README.md
```

## Prerequisites

- Node.js 18+
- npm 9+
- PostgreSQL 14+
- Git

## Environment Variables

Duplicate the sample files and update with project-specific secrets:

- `backend/env.example` → `backend/.env`
  - `PORT`, `DATABASE_URL`, `JWT_SECRET`
- `frontend/env.example` → `frontend/.env`
  - `VITE_API_BASE_URL`

## Installation

```bash
# backend
cd backend
npm install

# frontend
cd ../frontend
npm install
```

## Running Locally

### 1. Prepare PostgreSQL

Create a database named `farmease` (or adjust `DATABASE_URL`).

### 2. Start the API

```bash
cd backend
npm run dev   # nodemon
# or npm start
```

API base URL: `http://localhost:5000/api`

### 3. Start the Frontend

```bash
cd frontend
npm run dev
```

App URL: `http://localhost:5173`

## REST Endpoints

| Method | Route                | Description        |
| ------ | -------------------- | ------------------ |
| POST   | `/api/auth/register` | Register user      |
| POST   | `/api/auth/login`    | Login + JWT token  |
| GET    | `/api/crops`         | List crops         |
| GET    | `/api/crops/:id`     | Crop details       |
| POST   | `/api/crops`         | Create crop        |
| PUT    | `/api/crops/:id`     | Update crop        |
| DELETE | `/api/crops/:id`     | Delete crop        |

_Add auth middleware before production so only authenticated farmers can create/update resources._

## Frontend Pages

- `/` Login
- `/signup` Signup
- `/dashboard` Crop feed
- `/crops/new` Add crop form
- `/crops/:id` Crop detail view

## Deployment Checklist

- Provision managed PostgreSQL.
- Host backend (Render/Fly/Heroku) with environment variables.
- Host frontend (Vercel/Netlify) pointing to deployed API.
- Update `VITE_API_BASE_URL` to public API URL.

## Assignment Status

- ✅ Public repository: `https://github.com/Joellate/Farm-Ease.git`
- ✅ Backend + frontend fully implemented
- ✅ README setup guide with step-by-step instructions
- ✅ Database migration scripts included
- ✅ All functional requirements from SRS implemented
- ⚠️ Deployment: Configs ready (see `DEPLOYMENT.md`)
- ⏸️ Google Doc + video deliverables: To be added

**📋 See [REQUIREMENTS_CHECKLIST.md](./REQUIREMENTS_CHECKLIST.md) for detailed compliance status.**

