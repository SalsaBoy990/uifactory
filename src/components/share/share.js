/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import shareStyles from "./share.module.scss"
import { useStaticQuery, graphql } from "gatsby"

export default ({ to }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  return (
  <>
    <a
      href={`https://facebook.com/sharer.php?u=${data.site.siteMetadata.siteUrl}${to}`}
      rel="noreferrer noopener"
      className="no-underline"
      target="_blank"
      title="Megosztás a Facebook-on"
    >
      <span className={shareStyles.tagContainer}>
        <i
          className="ri-facebook-box-fill ri-xl"
          css={css`
            top: 4px;
            position: relative;
          `}
        ></i>
        Facebook
      </span>
    </a>

    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${data.site.siteMetadata.siteUrl}${to}`}
      rel="noreferrer noopener"
      className="no-underline"
      target="_blank"
      title="Megosztás a LinkedIn-en"
    >
      <span className={shareStyles.tagContainer}>
        <i
          className="ri-linkedin-box-fill ri-xl"
          css={css`
            top: 4px;
            position: relative;
          `}
        ></i>
        LinkedIn
      </span>
    </a>
  </>
  )
}
