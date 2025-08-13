# Udyam Registration Frontend

A Next.js application for UDYAM Registration Form - For New Enterprise who are not Registered yet as MSME.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
udyamfrontend/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (Aadhaar verification)
│   └── globals.css        # Global styles
├── components/            # React components
│   └── PanVerification.tsx
├── public/               # Static assets
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── vercel.json          # Vercel deployment configuration
```

## 🌐 Vercel Deployment

This application is now fully configured and optimized for deployment on Vercel.

### What was configured:

1. **Deployment files added:**
   - `vercel.json` - Vercel deployment configuration
   - `.vercelignore` - Build optimization exclusions
   - `tailwind.config.ts` - Proper Tailwind CSS configuration
   - `.env.example` - Environment variables template

2. **Next.js optimizations:**
   - Updated `next.config.ts` with production settings
   - Security headers configuration
   - Image optimization settings
   - Performance optimizations

3. **Build process:**
   - TypeScript configuration optimized
   - Build scripts enhanced
   - Linting and type-checking enabled

### Deployment Steps:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js configuration
   - Set environment variables (see below)
   - Deploy!

3. **Automatic Deployments:**
   - Every push to `main` branch triggers a new deployment
   - Preview deployments for pull requests are automatically created

### Environment Variables

Set these environment variables in Vercel dashboard:

**Required:**
- `NEXT_PUBLIC_BACKEND_URL` - Your backend API URL (e.g., `https://your-backend.railway.app`)

**Optional:**
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` - Vercel Analytics ID

### Setting Environment Variables in Vercel:

1. Go to your project dashboard in Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add `NEXT_PUBLIC_BACKEND_URL` with your backend URL
4. Choose environments: Production, Preview, and Development
5. Save and redeploy

## 🎯 Features

- **Aadhaar Verification:** Step 1 with OTP validation
- **PAN Verification:** Step 2 with document validation  
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Form Validation:** Client-side validation with error handling
- **Test Data Panel:** Development helper with sample data
- **TypeScript:** Full type safety
- **Next.js 15:** Latest features with App Router

## 🤝 Backend Integration

This frontend connects to a Node.js/Express backend with the following endpoints:

- `POST /api/v1/udyam/aadhaar` - Aadhaar verification
- `POST /api/v1/udyam/aadhaar/otp` - OTP validation
- `POST /api/v1/udyam/pan` - PAN verification

Make sure your backend is deployed (e.g., on Railway) and the `NEXT_PUBLIC_BACKEND_URL` environment variable points to it.

## 🚀 Going Live Checklist

- [ ] Backend deployed and accessible
- [ ] Environment variables set in Vercel
- [ ] Domain configured (optional)
- [ ] Performance testing completed
- [ ] Mobile responsiveness tested
# udyam_frontend
