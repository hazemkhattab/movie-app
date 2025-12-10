# 🚀 Quick Vercel Deployment Guide

## Step 1: Push Your Code

```bash
git add .
git commit -m "Update to server-side environment variables"
git push origin main
```

## Step 2: Set Environment Variables in Vercel

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these **2 variables**:

### Variable 1
- **Name**: `TMDB_API_URL`
- **Value**: `https://api.themoviedb.org`
- **Environments**: ✅ Production ✅ Preview ✅ Development

### Variable 2
- **Name**: `TMDB_API_KEY`
- **Value**: `8a8a9a0da8e68fef73130a166b104788`
- **Environments**: ✅ Production ✅ Preview ✅ Development

## Step 3: Redeploy

1. Go to **Deployments** tab
2. Click **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Wait 1-2 minutes

## Step 4: Test

Visit your site - movies should load! 🎉

---

## Why This Works Now

**Before:** Used `NEXT_PUBLIC_*` variables (accessible in browser - security issue)

**Now:** Uses server-only variables (only accessible in API routes - secure ✅)

The API routes now have proper access to the environment variables on Vercel!

---

## Still Not Working?

### Check API Route Directly
Visit: `https://your-site.vercel.app/api/movies?page=1`

**Should return:** JSON with movie data

**If error:** Environment variables not set correctly

### Check Vercel Logs
1. Vercel Dashboard → Deployments
2. Click latest deployment
3. Check **Runtime Logs**
4. Look for error messages

### Common Issues
- ❌ Variable names wrong (must be exact: `TMDB_API_URL`, `TMDB_API_KEY`)
- ❌ Forgot to redeploy after adding variables
- ❌ Didn't check all 3 environment boxes

---

That's it! Your app is now properly configured for Vercel with server-side API routes. 🎊
