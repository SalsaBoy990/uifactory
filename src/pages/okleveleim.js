/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import SEO from "../components/seo"

import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Container from "../components/container/container"
import Row from "../components/row/row"
import Breadcrumb from "../components/breadcrumb/breadcrumb"

const LightBlueBg = styled.div`
  background: linear-gradient(161.89deg, #ffffff 9.09%, #dfe6ff 78.44%), #bdcbfa;
`

export default ({ data }) => {
  const myCertificates = data.certificates
  console.log(myCertificates)
  return (
    <>
      <SEO title={`Okleveleim`} pathname={`/okleveleim/`} website={true} description={"Az általam teljesített Udemy, UXstudio kurzusok - válogatott okleveleim listája."} />
      <Header>
      </Header>
      <LightBlueBg className="container-max-width bg-linear-blue">
        <Container>
          <Row>
            <div className="col-12 p0 mt1">
              <Breadcrumb>Okleveleim</Breadcrumb>
              <h1
                className="h2"
                css={css`
                  padding-bottom: 51px;
                `}
              >
                Okleveleim
              </h1>
            </div>
          </Row>
        </Container>
      </LightBlueBg>
      <div className="container-max-width">
        <Container>
          <Row>
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 p0 m0 mbhalf mt1">
              <h2 className="h4 mb1">
                UX Studio Digital Product Design kurzus, 2018. ősz
              </h2>
              <Img
                fluid={data.uxStudio.edges[0].node.childImageSharp.fluid}
              ></Img>
            </div>
          </Row>
        </Container>
        <Container>
          <div className="row mx-responsive p0 mb2">
            <div className="col-12 p0 m0">
              <h2 className="h4">Udemy.com válogatott oklevelek</h2>
            </div>
            {myCertificates.edges.map(({ node }) => (
              <>
                <div className="col-12 col-md-12 col-lg-6 p0 m0">
                  <Img id={node.id} fluid={node.childImageSharp.fluid}></Img>
                </div>
              </>
            ))}
          </div>
        </Container>
      </div>

      <Footer></Footer>
    </>
  )
}

export const query = graphql`
  query {
    uxStudio: allFile(
      filter: { relativePath: { eq: "uxstudio-oklevel.jpg" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    certificates: allFile(
      filter: { relativeDirectory: { eq: "certificates" } }
      sort: { fields: name, order: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
          id
        }
      }
    }
  }
`
