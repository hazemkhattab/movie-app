# 🎯 Architecture Update - Serverless API Routes

## What Changed?

Your app now uses **Next.js API Routes** (serverless functions) instead of calling TMDB directly from the frontend. This is the **recommended approach for Vercel**.

## New Architecture

### Before (Direct API Calls):
```
Browser → TMDB API
- API key exposed in browser
- CORS issues possible
- Less secure
```

### After (Serverless API Routes):
```
Browser → Your API Routes → TMDB API
- API key stays on server
- No CORS issues
- More secure
- Better for Vercel
```

## API Routes Created

### 1. `/api/movies` - Get Popular Movies
- **File**: `src/app/api/movies/route.js`
- **Method**: GET
- **Query Params**: `?page=1`
- **Returns**: List of popular movies

### 2. `/api/movie/[id]` - Get Movie Details
- **File**: `src/app/api/movie/[id]/route.js`
- **Method**: GET
- **Params**: Movie ID in URL
- **Returns**: Movie details

### 3. `/api/search` - Search Movies
- **File**: `src/app/api/search/route.js`
- **Method**: GET
- **Query Params**: `?query=movie+name`
- **Returns**: Search results

## Updated Components

### 1. Movies Page (`src/app/movies/page.js`)
**Before:**
```javascript
fetch(`${TMDB_URL}/3/movie/popular?api_key=${API_KEY}`)
```

**After:**
```javascript
fetch(`/api/movies?page=${page}`)
```

### 2. Movie Detail Page (`src/app/movie/[movieId]/page.js`)
**Before:**
```javascript
fetch(`${TMDB_URL}/3/movie/${id}?api_key=${API_KEY}`)
```

**After:**
```javascript
fetch(`/api/movie/${id}`)
```

### 3. Search Component (`src/app/components/SearchMovie.jsx`)
**Before:**
```javascript
fetch(`${TMDB_URL}/3/search/movie?api_key=${API_KEY}&query=${q}`)
```

**After:**
```javascript
fetch(`/api/search?query=${q}`)
```

## Benefits

### ✅ Security
- API key never exposed to browser
- Prevents API key theft
- Server-side validation possible

### ✅ Vercel Optimization
- Runs as serverless functions
- Auto-scales
- Global edge network
- Faster response times

### ✅ Better Control
- Add caching strategies
- Implement rate limiting
- Transform/filter data
- Add error handling

### ✅ No CORS Issues
- Same origin requests
- No preflight OPTIONS requests
- Simpler debugging

## Environment Variables

The API routes still need these environment variables (set in Vercel dashboard):

```env
NEXT_PUBLIC_MAIN_API_URL=https://api.themoviedb.org
NEXT_PUBLIC_MAIN_API_KEY=your_tmdb_api_key
```

**Important:** These are read by the **API routes on the server**, not by the browser.

## Deployment on Vercel

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Add serverless API routes"
   git push
   ```

2. **Set environment variables in Vercel**
   - Go to project Settings → Environment Variables
   - Add both variables
   - Apply to Production, Preview, Development

3. **Deploy**
   - Vercel auto-deploys on push
   - Or manually trigger from Deployments tab

4. **Test**
   - Visit `/movies?page=1`
   - Should load movies via API routes
   - Check Network tab: calls go to `/api/movies`

## How It Works on Vercel

```
User visits /movies
  ↓
Next.js Server Component runs
  ↓
Calls /api/movies (internal)
  ↓
API route (serverless function) executes
  ↓
Fetches from TMDB using env variables
  ↓
Returns data to Server Component
  ↓
Page renders with movie data
  ↓
Sent to user's browser
```

## Testing Locally

1. **Start dev server**
   ```bash
   npm run dev
   ```

2. **Test API routes directly**
   - http://localhost:3000/api/movies?page=1
   - http://localhost:3000/api/movie/550
   - http://localhost:3000/api/search?query=matrix

3. **Test pages**
   - http://localhost:3000/movies?page=1
   - Should work perfectly!

## Troubleshooting

### API routes return 500 error
- Check environment variables are set
- Check Vercel deployment logs
- Verify TMDB API key is valid

### "Configuration missing" error
- Environment variables not set in Vercel
- Go to Settings → Environment Variables
- Add both NEXT_PUBLIC_MAIN_API_URL and NEXT_PUBLIC_MAIN_API_KEY

### Movies still not loading
1. Check browser console for errors
2. Check Network tab: are calls going to `/api/*`?
3. Visit `/api/movies?page=1` directly to test
4. Check Vercel deployment logs

## Performance Notes

- API routes are cached appropriately
- Popular movies: `cache: "no-store"` (always fresh)
- Movie details: Cached for 1 hour
- Search: Real-time, not cached

## Future Enhancements

With API routes, you can now easily add:
- Request caching with Redis
- Rate limiting per user
- Data transformation/filtering
- Analytics tracking
- Response compression
- Error monitoring
- A/B testing

This architecture is production-ready and follows Vercel best practices! 🚀
