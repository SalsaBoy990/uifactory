/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FooterStyles from "./footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      mySite: site {
        siteMetadata {
          github
          linkedin
          email
          behance
          cv
          tel
        }
      }
      cv: file(relativePath: {eq: "Andras-Gulacsi-CV-2020.pdf"}) {
        id
        publicURL
      }
    }
  `)

  return (
    <>
      <footer>
        <div className="bg-dark-honeycombs pt1 container-max-width">
          <div className="container-fluid pl0 pr0">
            <div className="row mx-responsive p0">
              <div className="col-12 p0 text-center">
                <div className="mx-auto"
                  css={css`
                    width: 280px;
                    border: 3px dashed #b94c60;
                  `}
                >
                  <h2
                    css={css`
                      font-weight: 600;
                      font-size: 37px;
                      line-height: 52px;
                      text-transform: uppercase;

                      color: #fff;
                    `}
                  >
                    Keress meg!
                  </h2>
                  <ul className="no-bullets mt1">
                    <li className="no-list-image">
                      <i
                        className={`${FooterStyles.contactInfoIcon} ri-phone-line`}
                        css={css`
                          margin-right: 3px;
                          position: relative;
                          top: 5px;
                        `}
                      ></i>
                      <a href={`tel:+36204427225`} className="white-link">
                        <span className={FooterStyles.contactInfoText}>
                          {data.mySite.siteMetadata.tel}
                        </span>
                      </a>
                    </li>
                    <li className="no-list-image">
                      <i
                        className={`${FooterStyles.contactInfoIcon} ri-mail-line`}
                        css={css`
                          margin-right: 5px;
                          position: relative;
                          top: 5px;
                        `}
                      ></i>
                      <a href={`mailto:${data.mySite.siteMetadata.email}`} className="white-link">
                        <span className={FooterStyles.contactInfoText}>
                          {data.mySite.siteMetadata.email}
                        </span>
                      </a>
                    </li>
                    <li className="no-list-image">
                      <i
                        className={`${FooterStyles.contactInfoIcon} ri-profile-line`}
                        css={css`
                          margin-right: 5px;
                          position: relative;
                          top: 4px;
                        `}
                      ></i>
                      <a href={data.cv.publicURL} className="white-link">
                        <span className={FooterStyles.contactInfoText}>
                          Curriculum vitae
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="no-bullets mt0 mb2 nav flex-column text-center">
                    <li className="no-list-image mbhalf">
                      <a
                        href={data.mySite.siteMetadata.linkedin}
                        className="no-underline"
                        title="Linkedin"
                      >
                        <i
                          className={`${FooterStyles.socialIcon} ri-linkedin-box-fill ri-2x`}
                        ></i>
                      </a>
                    </li>
                    <li className="no-list-image mbhalf">
                      <a
                        href={data.mySite.siteMetadata.github}
                        className="no-underline"
                        title="Github"
                      >
                        <i
                          className={`${FooterStyles.socialIcon} ri-github-fill ri-2x`}
                        ></i>
                      </a>
                    </li>
                    <li className="no-list-image mbhalf">
                      <a
                        href={data.mySite.siteMetadata.behance}
                        className="no-underline"
                        title="Behance"
                      >
                        <i
                          css={css`
                            left: -2px;
                            position: relative;
                          `}
                          className={`${FooterStyles.socialIcon} ri-behance-fill ri-2x`}
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
