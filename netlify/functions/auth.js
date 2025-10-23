const handler = async () => {
  const APP_ID = process.env.APP_ID;
  const BASE_URL = process.env.BASE_URL;
  const redirect = encodeURIComponent(`${BASE_URL}/.netlify/functions/callback`);
  const scope = encodeURIComponent('pages_show_list,pages_read_engagement,pages_manage_engagement,pages_messaging');
  const fbUrl = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${redirect}&scope=${scope}&response_type=code`;
  return { statusCode: 302, headers: { Location: fbUrl } };
};
exports.handler = handler;
