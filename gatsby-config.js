module.exports = {
  siteMetadata: {
    title: `Julius Githaiga`,
    titleTemplate: `%s | Julius Githaiga`,
    description: `Julius Githaiga is a full stack software developer & IT consultant based in Nairobi, Kenya.`,
    keywords: `julius githaiga, full stack, software development, mobile applications, web applications, kenya, nairobi`,
    author: `Julius Githaiga<julius@thirdriver.io>`,
    siteUrl: `https://jgithaiga.github.io`,
    // image: `src/images/logo-icon.png`,
    image: `/icons/icon-512x512.png`,
    twitterUsername: "@juliusgithaiga",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Third River Solutions Website`,
        short_name: `Third River Solutions`,
        start_url: `/`,
        background_color: `#094e6e`,
        theme_color: `#094e6e`,
        display: `standalone`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        }
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-57489631-2", // Google Analytics / GA
        ],
      }
    },
    'gatsby-plugin-postcss',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
  flags: {
    DEV_SSR: false
  }
}
