/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import IntroStyles from "./intro.module.css"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: allFile(filter: { relativePath: { eq: "profile.png" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 298) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="col-12 col-sm-12 col-md-8 col-lg-8 p0 order-last order-sm-last order-md-first mt3 mt-tablet-0 mb3 m-mb2">
        <h1
          className={`${IntroStyles.siteTitle} m0 site-title large-title mt0 mb1`}
        >
          Gulácsi András
        </h1>
        <p
          className="m0 p0"
          css={css`
            padding-bottom: 5px;
          `}
        >
          UI/web designer és frontend fejlesztő
        </p>
        <p className={IntroStyles.secondary}>
          Wordpress + WooCommerce | Gatsby.js
        </p>
      </div>
      <div className="col-8 col-sm-6 col-md-4 col-lg-3 order-first order-sm-first order-md-last p0 mt3 mb0 m-mt2">
        <Img
          fixed={data.profile.edges[0].node.childImageSharp.fixed}
          alt="Profilkép"
          className="mt0 mr0"
        ></Img>
      </div>
    </>
  )
}

export default Intro
