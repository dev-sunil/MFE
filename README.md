# MFE Banking Dashboard (minimal scaffold)

This repository contains a micro-frontend banking dashboard using Webpack 5 Module Federation.

Apps and ports:
- Shell App: http://localhost:3000
- Accounts MFE: http://localhost:3001
- Transactions MFE: http://localhost:3002
- Profile MFE: http://localhost:3003

Quick start (PowerShell):

```powershell
npm install
# In 4 shells run:
npm run start:shell
npm run start:accounts
npm run start:transactions
npm run start:profile
```

Notes:
- The repo is a scaffold. Install deps then run the dev servers.
- The shell lazy-loads remote apps via Module Federation.
- Supabase client is a stub in `src/lib/supabase.ts` — add your credentials in an `.env` file.
