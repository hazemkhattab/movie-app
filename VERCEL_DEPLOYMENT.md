# Vercel Deployment Guide for CineHub

## Prerequisites
- A [Vercel account](https://vercel.com/signup)
- A [TMDB API key](https://www.themoviedb.org/settings/api)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure Environment Variables**
   - In the Vercel project settings, go to "Environment Variables"
   - Add the following variables:
     ```
     NEXT_PUBLIC_MAIN_API_URL=https://api.themoviedb.org
     NEXT_PUBLIC_MAIN_API_KEY=your_actual_api_key_here
     ```
   - Apply to: Production, Preview, and Development

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Add Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_MAIN_API_URL
   vercel env add NEXT_PUBLIC_MAIN_API_KEY
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables Required

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_MAIN_API_URL` | `https://api.themoviedb.org` | TMDB API base URL |
| `NEXT_PUBLIC_MAIN_API_KEY` | Your API key | Get from TMDB settings |

## Troubleshooting

### Build Fails
- Check that all environment variables are set correctly
- Ensure your TMDB API key is valid
- Check Vercel build logs for specific errors

### Images Not Loading
- Vercel automatically handles Next.js Image optimization
- Ensure `next.config.mjs` has the correct `remotePatterns` configuration

### API Calls Failing
- Verify environment variables are set in Vercel dashboard
- Check TMDB API key permissions
- Ensure API key has not expired

## Auto-Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch (Production)
- Create preview deployments for pull requests
- Run builds and checks before deploying

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

The app is already optimized for Vercel with:
- ✅ Static page generation where possible
- ✅ Image optimization via Next.js Image component
- ✅ API route caching and revalidation
- ✅ Automatic code splitting

## Support

For issues with:
- **Vercel deployment**: [Vercel Documentation](https://vercel.com/docs)
- **TMDB API**: [TMDB API Docs](https://developers.themoviedb.org/3)
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
