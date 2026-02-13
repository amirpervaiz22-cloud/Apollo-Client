/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.apollomedbilling.com',
  generateRobotsTxt: true, // This also creates a robots.txt file for you
  exclude: ['/api/*'],    // Don't index your email backend routes
}