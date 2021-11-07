const path = require('path')
const withSass = require('@zeit/next-sass');
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa:{
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  }

})


module.exports = withSass(
    {cssModules: true})

module.exports = {
  /* Add Your Scss File Folder Path Here */
  sassOptions: {includePaths: [path.join(__dirname, 'styles')],},
}
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['dkstatics-public.digikala.com'],
    hostname : "dkstatics-public.digikala.com"
  },
}