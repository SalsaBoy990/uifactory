/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

import Container from "../container/container.js"
import Row from "../row/row.js"

const { useState } = React

const BlueBox = styled.div`
  background-color: #21263c;
`

const BlueLink = styled.a`
  padding-top: 9px;
  padding-bottom: 9px;
  // color: #9bd9fd;
  color: rgba(255, 255, 255, 0.7);
  /* pseudo selectors work as well */
  text-decoration: none;
  &:hover {
    color: #fff !important;
  }
`

const HamburgerMenu = props => {
  const [open, setOpen] = useState(false)

  const replaceIconOnClick = () => {
    setOpen(!open)
  }

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      whileTap={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      className="navbar-toggler"
      onClick={replaceIconOnClick}
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="">
        <i className={"ri-menu-fill" + (open ? " close" : " open")}></i>
        <i
          className={"ri-close-line initialClose" + (open ? " open" : " close")}
        ></i>
      </span>
    </motion.button>
  )
}

const ResponsiveHeader = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      mySite: site {
        siteMetadata {
          siteUrl
          shortTitle
          github
          behance
          linkedin
        }
      }
      myLogo: file(relativePath: { eq: "images/uifactory-logo-white.png" }) {
        childImageSharp {
          fixed(width: 167, height: 42, pngQuality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <header>
      <BlueBox className="container-max-width">
        <Container>
          <Row>
            <div className="col-12 p0">
              <nav className="navbar navbar-dark mr-auto navbar-expand-lg pl0 pr0" css={css`background-color: #21263c;`}>
               
                <a className="navbar-brand no-underline mr1" css={css`width: 147px;`} href="/">
                  <img className="m0" src="/uifactory-logo-white.png" alt="UIfactory logó" css={css`bottom: 0px; position: relative;`} />
                </a>
                <HamburgerMenu></HamburgerMenu>
                <div
                  className="collapse navbar-collapse m-align-center"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <Link
                      to="/"
                      className={`nav-item nav-link m-border-top mrhalf m-navbar-item`}
                      activeClassName={"activeLink"}
                    >
                      Portfólió
                    </Link>
                    <Link
                      to="/frontend-desk/"
                      className={`nav-item nav-link m-border-top mrhalf m-navbar-item`}
                      activeClassName={"activeLink"}
                    >
                      Frontend-desk
                    </Link>
                    <Link
                      to="/okleveleim/"
                      className={`nav-item nav-link m-border-top m-navbar-item`}
                      activeClassName={"activeLink"}
                    >
                      Okleveleim
                    </Link>
                  </div>
                  <div
                    className="navbar-nav flex-row ml-sm-auto m-mr0 m-border-top"
                    css={css`
                      justify-content: center;
                    `}
                  >
                    <BlueLink
                      href={data.mySite.siteMetadata.github}
                      rel="noreferrer noopener"
                      target="_blank"
                      title="Github profil"
                      className={`mrhalf no-underline`}
                      >
                      <i className="ri-github-fill ri-xl" css={css`top: 5px; position: relative;`}></i>
                    </BlueLink>
                    <BlueLink
                      href={data.mySite.siteMetadata.linkedin}
                      rel="noreferrer noopener"
                      target="_blank"
                      title="Linkedin profil"
                      className={`mrhalf no-underline`}
                      >
                      <i className="ri-linkedin-fill ri-xl" css={css`top: 4px; position: relative;`}></i>
                    </BlueLink>
                    <BlueLink
                      href={data.mySite.siteMetadata.behance}
                      rel="noreferrer noopener"
                      target="_blank"
                      title="Behance profil"
                      className={`no-underline`}
                    >
                      <i className="ri-behance-fill ri-xl" css={css`top: 5px; position: relative;`}></i>
                    </BlueLink>
                  </div>
                </div>
               
              </nav>
            </div>
          </Row>
        </Container>
      </BlueBox>
    </header>
  )
}

export default ResponsiveHeader
