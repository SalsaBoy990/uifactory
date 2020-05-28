/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Container from "../components/container/container.js"
import Row from "../components/row/row.js"
import Tag from "../components/tag/tag.js"
import Share from "../components/share/share.js"
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"
import Breadcrumb from "../components/breadcrumb/breadcrumb.js"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Header></Header>
      <img
        alt={post.frontmatter.title}
        className="p0 m0"
        src={post.frontmatter.cover_image.publicURL}
        css={css`
          margin-top: 0;
          width: 100%;
          height: auto;
        `}
      />
      <Container>
        <Row>
          <SEO
            title={post.frontmatter.title}
            description={post.excerpt}
            image={post.frontmatter.cover_image.publicURL}
            pathname={post.fields.slug}
            article={true}
          />

          <div className={`col-12 m0 p0 mb1 mt2 m-mt1`}>
            <Breadcrumb>{post.frontmatter.title}</Breadcrumb>

            <h1 className={`mb2 m-mb1`}>{post.frontmatter.title}</h1>
            <hr></hr>

            <div className="row p0 m0 min-size mb1">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p0 prhalf">
                <span className="bold-700 san-juan">Szakterület</span>
                <br></br>
                <ul className="no-bullets small-size mthalf mb1">
                  {post.frontmatter.expertise.map((node, index) => (
                    <li className="no-list-image" id={`${node}${index}`}>{node}</li>
                  ))}
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p0 prhalf">
                <span className="bold-700 san-juan">Platform</span>
                <br></br>
                <ul className="no-bullets small-size mthalf mb1">
                  {post.frontmatter.platform.map((node, index) => (
                    <li className="no-list-image" id={`${node}${index}`}>{node}</li>
                  ))}
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p0 prhalf">
                <span className="bold-700 san-juan">Átadott termék</span>
                <br></br>
                <ul className="no-bullets small-size mthalf mb1">
                  {post.frontmatter.deliverables.map((node, index) => (
                    <li className="no-list-image" id={`${node}${index}`}>{node}</li>
                  ))}
                </ul>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p0">
                <span className="bold-700 san-juan">Weboldal</span>
                <br></br>
                <ul className="no-bullets small-size mthalf mb1">
                  {post.frontmatter.website ? (
                    <li className="no-list-image"><a href={post.frontmatter.website}>{post.frontmatter.website}</a></li>
                  ) : (
                    <li className="no-list-image">{"-"}</li>
                  )}
                </ul>
                <span className="bold-700 san-juan">Dátum</span>
                <br></br>
                <ul className="no-bullets small-size mthalf mb1">
                  <li className="no-list-image">{post.frontmatter.date}</li>
                </ul>
              </div>
            </div>

            <div className="row p0 m0 small-size mb2 bg-hawkes-blue">
              <div className="col-12 m0 p0 phalf">
                <h2 className="mt0 h3">Háttér</h2>
                <p>{post.frontmatter.excerpt}</p>
              </div>
            </div>

            <div
              className={`mt1 mb2`}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr></hr>

            <div className="row m0 p0">
              <div
                className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb1 p0`}
              >
                <h1 className="h5 bold-500">Címkék:</h1>
                {post.frontmatter.tags.map(tag => (
                  <Link
                    to={`/cimkek/${kebabCase(tag)}`}
                    key={tag}
                    className={`no-underline mbhalf`}
                  >
                    <Tag
                      css={css`
                        color: #999;
                      `}
                      className={`small-size`}
                    >{`${tag} `}</Tag>
                  </Link>
                ))}
              </div>
            </div>

            <div className="row m0 mt1">
              <div className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb1 p0`}>
                <h1 className="h5 bold-500">Megosztás:</h1>
                <Share to={post.fields.slug}></Share>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "hu", formatString: "Y-MM-DD")
        tags
        cover_image {
          publicURL
        }
        category
        expertise
        platform
        deliverables
        website
        excerpt
      }
      excerpt(pruneLength: 160)
    }
  }
`
