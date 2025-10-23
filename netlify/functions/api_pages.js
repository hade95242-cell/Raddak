const { Client } = require('pg');

const handler = async () => {
  if (!process.env.DATABASE_URL) return { statusCode: 200, body: '[]' };
  const client = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await client.connect();
  const result = await client.query('SELECT page_id, page_name FROM pages ORDER BY created_at DESC');
  await client.end();
  return { statusCode: 200, body: JSON.stringify(result.rows) };
};
exports.handler = handler;
