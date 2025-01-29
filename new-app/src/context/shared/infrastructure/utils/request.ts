import CONFIG from '@/config';

export function strapiRequest(
  url: string,
  method: 'GET' | 'POST' | 'PUT' = 'GET',
  payload?: string
) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${CONFIG.STRAPI_API_TOKEN}`,
    },
    cache: 'force-cache' as any,
  };
  if (method === 'GET') {
    console.log(`Calling GET: ${CONFIG.STRAPI_API_URL}/${url}`);
    return fetch(`${CONFIG.STRAPI_API_URL}/${url}`, {
      ...options,
    });
  }
  console.log(`Calling ${method}: ${CONFIG.STRAPI_API_URL}/${url}`);
  console.log(`Payload: ${payload}`);
  return fetch(`${CONFIG.STRAPI_API_URL}/${url}`, {
    ...options,
    body: payload,
  });
}
