const { fetchData } = require("./src/strapi");

exports.createPages = async ({ graphql, actions }) => {
  const pages = await fetchData();
  pages.data.forEach((page) => {
    const { template, path, title } = page.attributes;
    actions.createPage({
      path: path,
      component: require.resolve(`./src/templates/${template}.jsx`),
      context: page.attributes,
    });
  });
};
