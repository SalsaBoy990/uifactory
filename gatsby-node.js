const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `works` })
    console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}



exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      worksRemark: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const works = result.data.worksRemark.edges

  // console.log(JSON.stringify(result, null, 4))
  works.forEach((work, index) => {
    createPage({
      path: work.node.fields.slug,
      component: blogPostTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: work.node.fields.slug,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/cimkek/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

    // Create blog-list pages
    // const worksPerPage = 4
    // const numPages = Math.ceil(works.length / worksPerPage)
    // Array.from({ length: numPages }).forEach((_, i) => {
    //   createPage({
    //     path: i === 0 ? `/` : `/${i + 1}`,
    //     component: path.resolve("./src/templates/index.js"),
    //     context: {
    //       limit: worksPerPage,
    //       skip: i * worksPerPage,
    //       numPages,
    //       currentPage: i + 1,
    //     },
    //   })
    // })
}

