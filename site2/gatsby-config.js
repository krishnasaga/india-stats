/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const strapiConfig = {
  apiURL: "http://localhost:8000",
  accessToken:
    "fd424fbeb43f5f2f25ba380bbafabd7b50bd66bf607e776e587d71f7749ae53b3b7f1e09519641cc89b9076627a08acb349abe2a9aa1c352875f9fc007de54435261ac59754a1dc5cb50d600b3e11675af90731e6c7d8c53c338ab4077f88141ebf9c73d71b8270c096b20c5c110acd838394f8b2fdad57acaf41aac0234604d",
  collectionTypes: ["User", "article-page"],
  singleTypes: [],
  maxParallelRequests: 5, // (Optional) Default: Number.POSITIVE_INFINITY
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "localhost:8000",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        portalZIndex: undefined,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Inter pro:200,400,700,700"],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingIds: ["G-JJW7NYLSS8"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};
