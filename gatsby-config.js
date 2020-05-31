const path = require('path')

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `UIfactory - Gulácsi András portóliója`,
    shortTitle: `UIfactory portfólió`,
    author: `Gulácsi András`,
    description: `Üdv! Gulácsi András vagyok, egy junior UI designer, webdesigner, frontend fejlesztő Szegeden, és munkát keresek.`,
    tel: `+36 20 442 7225`,
    siteUrl: 'https://uifactory.design',
    author: 'Gulácsi András',
    currentYear: new Date().getFullYear(),
    google_analytics: 'UA-136754581-1',
    github: 'https://github.com/SalsaBoy990',
    linkedin: 'https://www.linkedin.com/in/andr%C3%A1s-gul%C3%A1csi/',
    behance: 'https://www.behance.net/guland7a4a',
    email: 'gulandras90@gmail.com',
    cv: 'https://www.docdroid.net/YIFs1FI/gulacsi-andras-resume-2019.pdf',
    facebook_app_id: '424772158245419',
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Serif`,
            variants: [`400`, `500`, `600`, `700`],
            subsets: [`latin-ext`],
          },
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `400i`, `600`, `700`],
            subsets: [`latin-ext`],
          },
        ],
      },
    },


    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/uploads`, //path to your media-folder
        name: "media",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/images/`),
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `certificates`,
        path: path.join(__dirname, `src/images/certificates`),
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: path.join(__dirname, `src/works`),
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: path.join(__dirname, `src/files`),
      },
    },



    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                image: "mt2 mb2",
              }
            }
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UIfactory - Gulácsi András portóliója`,
        short_name: `UIfactory portfólió`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
//     {
//       resolve: `gatsby-plugin-purgecss`,
//       options: {
//         printRejected: true, // Print removed selectors and processed file names
//         develop: false, // Enable while using `gatsby develop`
//         // tailwind: true, // Enable tailwindcss support
//         // whitelist: ['whitelist'], // Don't remove this selector
//         ignore: [], // Ignore files/folders
//         purgeOnly: [], // Purge only these files/folders
//       },
//     },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-136754581-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,

      },
    },

  ]
}
