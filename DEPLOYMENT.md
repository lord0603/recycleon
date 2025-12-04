# Netlify Deployment Guide

## Prerequisites
- A Netlify account (free tier is sufficient)
- Your Supabase credentials (URL and Anon Key)

## Deployment Steps

### 1. Connect Your Repository to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your repository

### 2. Configure Build Settings

Netlify should auto-detect these settings from `netlify.toml`, but verify:

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Base directory**: (leave empty)

The site uses the `@netlify/plugin-nextjs` plugin for optimal Next.js deployment.

### 3. Set Environment Variables (CRITICAL)

**This step is required for the site to work properly!**

In Netlify dashboard, go to:
**Site settings → Environment variables → Add a variable**

Add these two variables with their exact values from your `.env` file:

1. **Variable name**: `NEXT_PUBLIC_SUPABASE_URL`
   **Value**: (copy from your `.env` file)

2. **Variable name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   **Value**: (copy from your `.env` file)

**Important**: Make sure these values are set as "Environment variables" and not "Build environment variables" to ensure they're available during both build and runtime.

### 4. Deploy

Click "Deploy site" - Netlify will:
- Install dependencies
- Run the build command
- Deploy your static site to a unique URL

### 5. Custom Domain (Optional)

After deployment, you can:
1. Go to **Site settings → Domain management**
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] Navigation works (all menu items)
- [ ] Contact form submits successfully
- [ ] All images display properly
- [ ] Mobile responsiveness verified
- [ ] Supabase connection working

## Troubleshooting

### Contact Form Not Working
- Verify environment variables are set correctly in Netlify
- Check Supabase dashboard for connection errors
- Ensure `contact_submissions` table exists in Supabase

### Images Not Loading
- All images are in `/public/images/` directory
- Paths use `/images/` prefix (not `public/images/`)

### Routing Issues
- The `_redirects` file ensures SPA routing works
- All routes should redirect to index.html for client-side routing

## Build Output

The project builds using Next.js with Netlify's plugin:
- Total bundle size: ~169 KB (largest page)
- Fully optimized for production
- Static pages pre-rendered at build time
- Dynamic pages (like contact) rendered on-demand

## Need Help?

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
