/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Congratulations - you just destroyed the Enterprise",
    description: "My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant?",
    author: "I may be surrounded by insanity, but I am not insane.",
    data: {
      age: 75,
      name: 'First Officer'
    },
    twitterUsername: "@blug",
    image: "/william.gif",
    siteUrl: "https://blissful-wozniak-f24279.netlify.com",

  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://blissful-wozniak-f24279.netlify.com',
        sitemap: 'https://blissful-wozniak-f24279.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ]
}
