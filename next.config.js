const path = require('path')
const withPWA = require('next-pwa');


module.exports = withPWA({
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
  },
  images: {
    domains: ['dkstatics-public.digikala.com'],
    hostname : "dkstatics-public.digikala.com"
  },
  sassOptions: {includePaths: [path.join(__dirname, 'styles')],},
  reactStrictMode: true,

});
