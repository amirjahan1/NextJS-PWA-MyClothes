const path = require('path')
const withPWA = require('next-pwa');

module.exports = ({
  images: {
    domains: ['dkstatics-public.digikala.com'],
    hostname : "dkstatics-public.digikala.com"
  },
  sassOptions: {includePaths: [path.join(__dirname, 'styles')],},
  reactStrictMode: true,
});


