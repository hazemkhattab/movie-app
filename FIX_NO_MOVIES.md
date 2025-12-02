# 🚨 "No Movies Found" - Quick Fix Guide

## The Problem
Your app now uses serverless API routes (recommended by Vercel). You need to set environment variables in Vercel for the backend API routes to work.

## The Solution (5 Minutes)

### Step 1: Go to Vercel Dashboard
1. Visit [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project (cinemahub or movie-app)

### Step 2: Add Environment Variables
1. Click **Settings** (top menu)
2. Click **Environment Variables** (left sidebar)
3. Add these two variables:

#### Variable 1:
- **Key**: `NEXT_PUBLIC_MAIN_API_URL`
- **Value**: `https://api.themoviedb.org`
- **Environments**: ✅ Production ✅ Preview ✅ Development

#### Variable 2:
- **Key**: `NEXT_PUBLIC_MAIN_API_KEY`
- **Value**: `8a8a9a0da8e68fef73130a166b104788`
- **Environments**: ✅ Production ✅ Preview ✅ Development

### Step 3: Redeploy
1. Go to **Deployments** tab (top menu)
2. Find your latest deployment
3. Click the **three dots** (**⋯**) on the right
4. Click **"Redeploy"**
5. Wait 1-2 minutes for the build to complete

### Step 4: Verify
Visit your site at: `https://your-project.vercel.app/env-check`

You should see:
- ✅ NEXT_PUBLIC_MAIN_API_URL: SET
- ✅ NEXT_PUBLIC_MAIN_API_KEY: SET
- ✅ All environment variables are set correctly!

### Step 5: Test
Now visit: `https://your-project.vercel.app/movies?page=1`

You should see movies! 🎉

---

## Why This Happens

Environment variables in `.env.local` are **only for local development**. They are **NOT** deployed to Vercel.

You must add them manually in the Vercel dashboard for your deployed site to access them.

## Screenshot Guide

### Where to Add Variables:
```
Vercel Dashboard
  → Your Project
    → Settings
      → Environment Variables
        → Add New
```

### Format:
```
Key: NEXT_PUBLIC_MAIN_API_URL
Value: https://api.themoviedb.org
☑ Production  ☑ Preview  ☑ Development

Key: NEXT_PUBLIC_MAIN_API_KEY  
Value: 8a8a9a0da8e68fef73130a166b104788
☑ Production  ☑ Preview  ☑ Development
```

### After Adding:
```
Deployments
  → Latest Deployment
    → ⋯ (three dots)
      → Redeploy
```

---

## Still Not Working?

### Check the Logs:
1. Vercel Dashboard → Your Project → Deployments
2. Click on latest deployment
3. Look at the **Runtime Logs**
4. Check for error messages about environment variables

### Verify in Browser Console:
1. Open your deployed site
2. Press F12 to open DevTools
3. Go to Console tab
4. Look for messages like "Missing environment variables"

### Common Mistakes:
- ❌ Variable name typo (must be EXACT: `NEXT_PUBLIC_MAIN_API_URL`)
- ❌ Forgot to check all three environment boxes (Production, Preview, Development)
- ❌ Didn't redeploy after adding variables
- ❌ Extra spaces in the variable values

---

## Need Help?

If you're still seeing "No movies found":

1. Visit `/env-check` on your deployed site
2. Take a screenshot
3. Check the browser console (F12) for errors
4. Look at Vercel deployment logs

The issue is almost always that environment variables aren't set correctly in Vercel! 🔧
