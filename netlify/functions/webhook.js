const handler = async (event) => {
  if (event.httpMethod === 'GET') {
    const params = event.queryStringParameters || {};
    if (params['hub.mode'] === 'subscribe' && params['hub.verify_token'] === process.env.WEBHOOK_VERIFY_TOKEN) {
      return { statusCode: 200, body: params['hub.challenge'] };
    }
    return { statusCode: 403, body: 'Forbidden' };
  }

  if (event.httpMethod === 'POST') {
    console.log('Webhook Event:', event.body);
    return { statusCode: 200, body: 'EVENT_RECEIVED' };
  }

  return { statusCode: 404, body: 'Not found' };
};
exports.handler = handler;
