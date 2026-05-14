# Vercel Deployment Guide

## ✅ Cara Deploy ke Vercel

### Step 1: Persiapan
1. Pastikan project sudah di-push ke GitHub/GitLab/Bitbucket
2. Buka https://vercel.com
3. Login dengan akun Anda

### Step 2: Import Project
1. Klik "Add New..." → "Project"
2. Pilih repository Anda
3. Klik "Import"

### Step 3: Configure Project
1. **Project Name**: Biarkan default atau ubah sesuai keinginan
2. **Framework Preset**: Pilih "Vite"
3. **Root Directory**: Biarkan default (.)
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Install Command**: `npm install`

### Step 4: Environment Variables (Optional)
Jika Anda memiliki environment variables:
1. Klik "Environment Variables"
2. Tambahkan variable yang diperlukan
3. Contoh:
   - Key: `VITE_API_URL`
   - Value: `https://api.example.com`

### Step 5: Deploy
1. Klik "Deploy"
2. Tunggu proses build selesai
3. Vercel akan memberikan URL untuk website Anda

## 🔄 Automatic Deployments

Setelah setup awal, setiap kali Anda push ke branch utama (main/master), Vercel akan otomatis:
1. Pull latest code
2. Run build command
3. Deploy ke production

## 📝 Environment Variables Setup

Jika Anda perlu menambahkan environment variables di Vercel:

1. Buka project di Vercel dashboard
2. Klik "Settings"
3. Pilih "Environment Variables"
4. Tambahkan variable:
   - **Development**: Untuk `npm run dev`
   - **Preview**: Untuk preview deployments
   - **Production**: Untuk production deployment

### Contoh Environment Variables:
```
VITE_API_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 🚀 Custom Domain

1. Buka project di Vercel dashboard
2. Klik "Settings" → "Domains"
3. Tambahkan domain Anda
4. Follow instruksi untuk setup DNS

## 📊 Monitoring

### Analytics
- Buka project di Vercel dashboard
- Klik "Analytics" untuk melihat:
  - Page views
  - Response times
  - Error rates

### Logs
- Klik "Deployments"
- Pilih deployment yang ingin dilihat
- Klik "Logs" untuk melihat build logs

## 🔒 Security

### Secrets Management
- Gunakan Environment Variables untuk sensitive data
- Jangan commit `.env` files ke repository
- Gunakan `.env.example` untuk dokumentasi

### Security Headers
Vercel.json sudah dikonfigurasi dengan security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 🐛 Troubleshooting

### Build Failed
1. Check build logs di Vercel dashboard
2. Pastikan `npm run build` berjalan di local
3. Pastikan semua dependencies terinstall

### Environment Variable Error
1. Pastikan variable sudah ditambahkan di Vercel dashboard
2. Pastikan nama variable sesuai dengan yang digunakan di code
3. Redeploy setelah menambahkan variable

### Performance Issues
1. Check "Analytics" di Vercel dashboard
2. Gunakan PageSpeed Insights untuk detailed analysis
3. Optimize images dan code jika diperlukan

## 📚 Useful Links

- **Vercel Docs**: https://vercel.com/docs
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html#vercel
- **Environment Variables**: https://vercel.com/docs/concepts/projects/environment-variables

## ✅ Deployment Checklist

- [ ] Project di-push ke GitHub/GitLab/Bitbucket
- [ ] Vercel project sudah dibuat
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Environment variables sudah ditambahkan (jika ada)
- [ ] Custom domain sudah setup (jika ada)
- [ ] Test deployment di preview URL
- [ ] Verify performance di PageSpeed Insights
- [ ] Check security headers
- [ ] Monitor logs untuk errors

---

**Last Updated**: 2026-05-14
**Status**: ✅ Ready for Production
