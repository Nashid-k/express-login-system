# Express Session Login Demo

A small server-rendered login and dashboard demo built with Express, EJS and express-session. It demonstrates a basic login flow, protected dashboard route and logout/session destruction.

> **Learning project, not production authentication.** Credentials are configured as environment variables for the demo; there is no user database, password hashing, registration or password-reset flow. Do not reuse this as a production auth system.

## Stack

- Node.js 20.6+
- Express 4
- EJS
- express-session
- Nodemon for development

## Run locally

```bash
git clone https://github.com/Nashid-k/express-login-system.git
cd express-login-system
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
| --- | --- |
| `PORT` | HTTP port (defaults to 3000) |
| `SESSION_SECRET` | Long, random secret used to sign session cookies |
| `DEMO_LOGIN_EMAIL` | Demo login email |
| `DEMO_LOGIN_PASSWORD` | Demo login password |
| `NODE_ENV` | Set to `production` to enable secure cookies (HTTPS required) |

Generate a strong session secret; never commit your local `.env` file.

## Routes

- `GET /` — login page
- `POST /login` — validates the configured demo credentials
- `GET /dashboard` — protected dashboard
- `GET /logout` — ends the session

## Security limitations

For a real application, replace the single demo account with persisted users, strong password hashing (such as bcrypt or Argon2), server-side validation, CSRF protection, rate limiting, a production session store, HTTPS-only cookies and secure account-recovery flows.
