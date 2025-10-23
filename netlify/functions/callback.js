const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { Client } = require('pg');

const handler = async (event) => {
  const code = event.queryStringParameters?.code;
  if (!code) return { statusCode: 400, body: 'No code provided' };

  try {
    const tokenUrl = `https://graph.facebook.com/v17.0/oauth/access_token?client_id=${process.env.APP_ID}&redirect_uri=${encodeURIComponent(process.env.BASE_URL + '/.netlify/functions/callback')}&client_secret=${process.env.APP_SECRET}&code=${code}`;
    const tokenResp = await fetch(tokenUrl);
    const tokenData = await tokenResp.json();

    const userAccessToken = tokenData.access_token;
    const accountsUrl = `https://graph.facebook.com/v17.0/me/accounts?access_token=${userAccessToken}`;
    const accountsResp = await fetch(accountsUrl);
    const accountsData = await accountsResp.json();

    return { statusCode: 200, body: JSON.stringify(accountsData) };
  } catch (err) {
    return { statusCode: 500, body: `Error: ${err.message}` };
  }
};
exports.handler = handler;
