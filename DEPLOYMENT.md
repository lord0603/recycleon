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
- **Publish directory**: `out`
- **Base directory**: (leave empty)

### 3. Set Environment Variables

In Netlify dashboard, go to:
**Site settings → Environment variables → Add a variable**

Add these two variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://tbkhfsmizldtcrasazhc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRia2hmc21pemxkdGNyYXNhemhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1Mzc1MzEsImV4cCI6MjA3OTExMzUzMX0.pBW2NBbZdqoS_r4YQqRy_ufPtBjzbTXAJee5StQ6Z9o
```

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

The project builds to a static site in the `out/` directory:
- Total bundle size: ~169 KB (largest page)
- Fully optimized for production
- All pages pre-rendered as static HTML

## Need Help?

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
