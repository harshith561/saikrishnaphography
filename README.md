# Sai Krishna Photography & Cinema Studio

A luxury digital platform and showcase for Sai Krishna Photography, featuring 4K cinematic wedding films, high-resolution galleries, client testimonials, and an automated inquiry contact system.

## Architecture

- **`frontend/`**: Vite + React 19 + Tailwind CSS single page application with native HTML5 cinematic video modal player, interactive gallery filtering, and contact inquiry form.
- **`backend/`**: Node.js Express server with Nodemailer SMTP email integration for client booking notifications.
- **`api/`**: Vercel Serverless Function (`api/contact.js`) for direct deployment.

## Deployment on Vercel

1. In Vercel Project Settings -> **Build and Deployment**:
   - Set **Root Directory** to `frontend`.
2. Ensure environment variables (`EMAIL_USER`, `EMAIL_PASS`, etc.) are configured if needed.
3. Every commit pushed to `main` will automatically trigger a clean production build.
