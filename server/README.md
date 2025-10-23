# Server for Insurance Landing Page

This is a minimal Express server to accept contact form submissions and store them in MongoDB.

Environment variables

- MONGO_URI - full MongoDB connection string (e.g. mongodb+srv://user:pass@cluster0...)
- MONGO_DB_NAME - optional, defaults to `insurance_app`
- MONGO_COLLECTION - optional, defaults to `submissions`
- PORT - optional, defaults to 4000

Run locally

1. Create a `.env` in `server/` with MONGO_URI set.
2. npm install
3. npm run dev

Endpoint

- POST /submit - accepts JSON body and inserts into the configured collection
- GET /health - health check
