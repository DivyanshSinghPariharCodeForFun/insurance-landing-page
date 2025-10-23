require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI || process.env.MONGOURL || '';
const dbName = process.env.MONGO_DB_NAME || 'insurance_app';
const collectionName = process.env.MONGO_COLLECTION || 'submissions';

let client;
let collection;

async function connect() {
  if (!mongoUri) {
    console.warn('MONGO_URI not set. The API will reject writes until configured.');
    return;
  }
  client = new MongoClient(mongoUri, { useUnifiedTopology: true });
  await client.connect();
  const db = client.db(dbName);
  collection = db.collection(collectionName);
  console.log('Connected to MongoDB:', dbName, collectionName);
}

app.post('/submit', async (req, res) => {
  const payload = req.body;
  if (!collection) {
    return res.status(500).json({ ok: false, error: 'Database not configured on server.' });
  }

  try {
    const now = new Date();
    const doc = { ...payload, submittedAt: now };
    const result = await collection.insertOne(doc);
    return res.json({ ok: true, id: result.insertedId });
  } catch (err) {
    console.error('Insert error', err);
    return res.status(500).json({ ok: false, error: String(err) });
  }
});

app.get('/health', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 4000;
connect().catch((err) => console.error('Mongo connection failed', err));

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
