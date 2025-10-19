# Delta CPA - Veterinary Accounting & Tax Website

Professional website for Delta CPA Group's veterinary accounting and tax services.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 📝 How to Update Content

### Edit Text Content
Open `app/page.tsx` and find the section you want to edit:
- **Hero section**: Lines 30-70
- **What You Get**: Lines 75-110
- **Services**: Lines 115-200
- **Guarantee**: Lines 205-225
- **About**: Lines 230-280
- **CTA**: Lines 285-305
- **Footer**: Lines 310-330

### Change Colors
All colors use Tailwind CSS classes. Search for:
- `bg-teal-600` - Teal buttons and accents
- `bg-slate-900` - Navy/dark backgrounds
- `text-white` - White text

Replace with your preferred colors.

### Add Images
1. Place images in `public/` folder
2. Import in `app/page.tsx`:
   ```jsx
   import Image from 'next/image';
   ```
3. Use in JSX:
   ```jsx
   <Image src="/image-name.jpg" alt="Description" width={400} height={300} />
   ```

## 🔧 Making Changes

1. Edit files locally
2. Test with `npm run dev`
3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Your change description"
   git push origin main
   ```
4. Vercel automatically deploys!

## 📦 Project Structure
```
vet-accounting/
├── app/
│   ├── page.tsx          # Main website content
│   ├── layout.tsx        # Global layout
│   └── favicon.ico       # Browser tab icon
├── components/
│   └── ui/               # Reusable UI components
├── public/               # Static files (images, etc)
├── package.json          # Dependencies
└── tailwind.config.ts    # Tailwind CSS config
```

## 🌐 Deployment to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select this repository
5. Click "Deploy"
6. Point your domain in GoDaddy DNS settings

## 📞 Contact Info
- Email: info@deltacpagroup.com
- Phone: 260-440-2747
- Location: Fort Wayne, IN

## 📄 License
© 2025 Delta CPA Group. All rights reserved.
