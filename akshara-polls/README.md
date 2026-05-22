# akshara-polls
Production-ready monorepo for real-time audience engagement.
## Architecture
- `apps/web`: Next.js 15 dashboard/projector/join UIs
- `apps/api`: NestJS REST + Socket.IO + Prisma
- PostgreSQL + Redis via Docker Compose
## Setup
```bash
pnpm i
cp .env.example .env
docker compose up -d postgres redis
pnpm --filter api prisma migrate dev
pnpm --filter api prisma db seed
pnpm dev
```
## Security
JWT auth, validation pipes, throttling, CORS, bcrypt password hashing.
## Deploy
- Frontend: Vercel using `vercel.json`
- Backend: Railway using `railway.json`
- CI: `.github/workflows/deploy.yml`
