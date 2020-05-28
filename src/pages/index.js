/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import SEO from "../components/seo"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Container from "../components/container/container"
import Row from "../components/row/row"
import Intro from "../components/intro/intro"

export default ({ data }) => {
  const myDesignWorks = data.designWorks
  console.log(myDesignWorks)
  const gatsbyImg = data.gatsby
  const earthEngineImg = data.googleEarthEngine
  const npmImg = data.npm
  const netlifyImg = data.netlify

  return (
    <>
      <SEO title={`Portfólió kezdőlap`} pathname={`/`} website={true} description={"Sziasztok! Gulácsi András vagyok. UI designer és/vagy frontend fejlesztő munkát keresek Szegeden. Sürgősen!"} />
      <Header></Header>
      <Container>
        <div className="bg-light-honeycombs container-max-width">
          <Row>
            <Intro></Intro>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="container-max-width">
          <div className="row mx-responsive p0 mb1 m-mb0">
            <div className="col-12 m0 p0">
              <h2 className="black-subtitle mt3 m-mt2 mb2 m-mb1">
                Esettanulmányok
              </h2>
              {myDesignWorks.edges.map((elem, index) => (
                <div
                  key={`munka-${elem.node.id}`}
                  className="row m0 p0 mb2 bradius07"
                  css={css`
                    background-color: #f1f5fc;
                    border: 1px solid rgba(0, 0, 0, 0.125);
                  `}
                >
                  <div
                    className="col-12 col-md-5 p0"
                    css={css`
                      background-color: #f1f5fc;
                      border-radius: 0 7px;
                      width: 100%;
                    `}
                  >
                    <motion.div
                      whileHover={{
                        scale: 0.97,
                        transition: {
                          type: "tween",
                          damping: 9,
                          stiffness: 95,
                          duration: 1,
                        },
                      }}
                    >
                      <Link to={elem.node.fields.slug}>
                        <Img
                          fluid={
                            elem.node.frontmatter.cover_image.childImageSharp
                              .fluid
                          }
                          className="mt0 img-fluid bradius07"
                          alt={`${elem.node.frontmatter.title} mockup`}
                        ></Img>
                      </Link>
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-7 p0 pl1 pr1">
                    <h3 className="mthalf">
                      <Link to={elem.node.fields.slug}>
                        {elem.node.frontmatter.title}
                      </Link>
                    </h3>
                    <p className="">{elem.node.frontmatter.excerpt}</p>
                    <div className="clearfix">
                      {elem.node.frontmatter.website ? (
                        <span>
                          <i
                            className="ri-global-line ri-sm"
                            css={css`
                              color: #7e919e;
                              margin-right: 2px;
                              top: 3px;
                              position: relative;
                            `}
                          ></i>
                          <a
                            className="small-size item-link pthalf pbhalf"
                            href={elem.node.frontmatter.website}
                          >
                            Weboldal
                          </a>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row mx-responsive p0">
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8 p0 m0">
              <h2 className="black-subtitle mt0 mb2 m-mb1">Fejlesztés projektek</h2>
              <ul className="list-unstyled mb3 m-mb2">
                <li className="media mt1">
                  <Img
                    fixed={netlifyImg.edges[0].node.childImageSharp.fixed}
                    className="mr-3"
                    alt="Netlify logo"
                  ></Img>
                  <div className="media-body">
                    <h3 className="h4 mt0">
                      <a
                        href="https://github.com/SalsaBoy990/static-site-express"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        static-site-express (forráskód)
                      </a>
                    </h3>
                    <div className="extra-small topic mbhalf">
                      Node.js, JavaScript
                    </div>
                    <p className="mbhalf">
                      A Node.js-ben írt statikus oldalgenerátorom, amit
                      2018-2020 között használtam a Netlify platformon. Template engine: EJS, markup:
                      Markdown, tartalomkezelő: Netlify CMS, devszerver:
                      Express.
                    </p>
                  </div>
                </li>
                <li className="media mt1">
                  <Img
                    fixed={gatsbyImg.edges[0].node.childImageSharp.fixed}
                    className="mr-3"
                    alt="Gatsby logo"
                  ></Img>

                  <div className="media-body">
                    <h3 className="h4 mt0">
                      <a
                        href="https://github.com/SalsaBoy990/static-site-express"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        UIfactory portfólió oldal (forráskód)
                      </a>
                    </h3>
                    <div className="extra-small topic mbhalf">JavaScript</div>
                    <p>
                      A Gatsby.js keretrendszer segítségével készült statikus
                      portfólió oldalam forráskódja. Szolgáltató: a Netlify
                      felhőplatform. Nagyon hasznos projekt volt, mert
                      megtanította nekem a React alapjait. És tetszik a GraphQL
                      beleintegrálása a Gatsby-ba.
                    </p>
                  </div>
                </li>
                <li className="media mt1">
                  <Img
                    fixed={gatsbyImg.edges[0].node.childImageSharp.fixed}
                    className="mr-3"
                    alt="Gatsby logo"
                  ></Img>
                  <div className="media-body">
                    <h3 className="h4 mt0">
                      <a
                        href="https://github.com/SalsaBoy990/newgeographer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        New Geographer blog (forráskód)
                      </a>
                    </h3>
                    <div className="extra-small topic mbhalf">JavaScript</div>
                    <p>
                      A Gatsby.js keretrendszer segítségével készült blogom
                      forrása. A keresést az Algolia API segítségével
                      valósítottam meg. A keresés frontendjét az InstantSearch
                      biztosítja.
                    </p>
                  </div>
                </li>
                <li className="media mt1">
                  <Img
                    fixed={earthEngineImg.edges[0].node.childImageSharp.fixed}
                    className="mr-3"
                    alt="Google Earth Engine logo"
                  ></Img>
                  <div className="media-body">
                    <h3 className="h4 mt0">
                      <a
                        href="https://github.com/SalsaBoy990/gee_s1_sar_wetlands"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sentinel-1 C-SAR radarképeket feldolgozó szkriptek
                      </a>
                    </h3>
                    <div className="extra-small topic mbhalf">JavaScript</div>
                    <p>
                      A Google Earth Engine felhő alapú számításplatformjának
                      JavaScript API-ját használtam több mint 500 db ESA
                      Sentinel-1 műholdfelvétel automatizált feldolgozására. Az
                      eredményeim a világ egyik legrangosabb távérzékeléses
                      folyóiratában, a Remote Sensing-ben jelentek meg.
                    </p>
                  </div>
                </li>
                <li className="media mt1">
                  <Img
                    fixed={earthEngineImg.edges[0].node.childImageSharp.fixed}
                    className="mr-3"
                    alt="Google Earth Engine logo"
                  ></Img>
                  <div className="media-body">
                    <h3 className="h4 mt0">
                      <a
                        href="https://github.com/SalsaBoy990/modis-standardize"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MODIS műholdképeket feldolgozó szkriptek
                      </a>
                    </h3>
                    <div className="extra-small topic mbhalf">Python</div>
                    <p>
                      A NASA Terra műhold MODIS szenzorának felvételeinek
                      feldolgozására a Google Earth Engine Python API-ját
                      használtam. A készülő doktori dolgozatom részét képezi.
                    </p>
                  </div>
                </li>
                <li className="media mt1">
                  <Img
                    fixed={npmImg.edges[0].node.childImageSharp.fixed}
                    className="mr-3"
                    alt="NPM logo"
                  ></Img>
                  <div className="media-body">
                    <h3 className="h4 mt0">
                      <a
                        href="https://github.com/SalsaBoy990/basestats"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        basestats npm csomag
                      </a>
                    </h3>
                    <div className="extra-small topic mbhalf">
                      Node.js, JavaScript
                    </div>
                    <p>
                      Egy Node.js modul, ami egyszerű statisztikákat számít
                      tömbökből, tömbszerű objektumokból, JSON-ból és MongoDB
                      adatokból.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <Footer></Footer>
    </>
  )
}

export const query = graphql`
  query {
    designWorks: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            excerpt
            website
            title
            cover_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      totalCount
    }
    gatsby: allFile(filter: { relativePath: { eq: "gatsby.png" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 64, height: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    googleEarthEngine: allFile(
      filter: { relativePath: { eq: "google-earth-engine.png" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    npm: allFile(filter: { relativePath: { eq: "npm.png" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    netlify: allFile(filter: { relativePath: { eq: "netlify.png" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 64) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
