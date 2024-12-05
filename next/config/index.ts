const CONFIG = {
  STRAPI_API_TOKEN: process.env['STRAPI_API_TOKEN'] || '',
  STRAPI_API_URL: process.env['STRAPI_API_URL'] || '',
  STRAPI_URL: process.env['STRAPI_URL'] || '',
  MAX_RETRIES: +(process.env['MAX_RETRIES'] || 5),
  UNOPTIMIZED_IMAGES: !!(process.env['UNOPTIMIZED_IMAGES'] || true),
};

export default CONFIG;
