const path = require('path')

module.exports = ({
  images: {
    domains: ['dkstatics-public.digikala.com'],
    hostname : "dkstatics-public.digikala.com"
  },
  sassOptions: {includePaths: [path.join(__dirname, 'styles')],},
  reactStrictMode: true,
});


