# Cloudflare Pages Deployment Guide

## Setup Instructions

1. **Go to Cloudflare Pages**
   - Visit: https://dash.cloudflare.com/
   - Navigate to: Workers & Pages → Create Application → Pages → Connect to Git

2. **Connect Your GitHub Repository**
   - Select your GitHub account
   - Choose repository: `mirulasyrani/true-health-clinic`
   - Click "Begin setup"

3. **Configure Build Settings**

   **Framework preset**: `Vite`
   
   **Build command**:
   ```
   cd frontend && npm install && npm run build
   ```
   
   **Build output directory**:
   ```
   frontend/dist
   ```
   
   **Root directory**: (leave empty or use `/`)
   
   **Environment variables**: (optional)
   ```
   NODE_VERSION=20
   ```

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be available at: `https://your-project.pages.dev`

## Custom Domain (Optional)

After deployment:
1. Go to your project settings
2. Click "Custom domains"
3. Add your domain (e.g., truehealthkd.com)
4. Follow DNS configuration instructions

## Important Notes

- ✅ No credentials needed - uses GitHub OAuth
- ✅ Automatic deployments on git push
- ✅ Free tier includes unlimited requests
- ✅ Global CDN for fast loading
- ✅ Automatic HTTPS

## Troubleshooting

If build fails, check:
- Build command navigates to frontend directory
- Output directory is `frontend/dist`
- Node version is 20.x
