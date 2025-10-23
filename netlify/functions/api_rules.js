const { Client } = require('pg');

const handler = async (event) => {
  if (!process.env.DATABASE_URL) return { statusCode: 500, body: 'No database configured' };
  const client = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await client.connect();

  try {
    if (event.httpMethod === 'GET') {
      const { page_id } = event.queryStringParameters;
      const res = await client.query('SELECT * FROM rules WHERE page_id=$1', [page_id]);
      return { statusCode: 200, body: JSON.stringify(res.rows) };
    } else if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body);
      await client.query('INSERT INTO rules (page_id, trigger_text, reply_text, send_private) VALUES ($1,$2,$3,$4)', [
        body.page_id,
        body.trigger_text,
        body.reply_text,
        body.send_private,
      ]);
      return { statusCode: 200, body: 'Rule added' };
    }
  } catch (e) {
    return { statusCode: 500, body: e.message };
  } finally {
    await client.end();
  }
};
exports.handler = handler;
