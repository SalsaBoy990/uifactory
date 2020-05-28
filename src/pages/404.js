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
  const island = data.island
  return (
    <>
      <SEO
        title={`404`}
        pathname={`/404/`}
        website={true}
        description={"Sajnos az általad keresett oldal nem található."}
      />
      <Header></Header>
      <div className="container-max-width">
        <Container>
          <Row>
            <div className="col-12 p0 mt3">
              <div className="text-center">
                <Img
                  className="mx-auto mt0 mb1"
                  fixed={island.edges[0].node.childImageSharp.fixed}
                  alt="Hajótörött egy szigeten. Talán Robinson Crusoe?"
                >
                  </Img>
                <h1 className="h2 mb0">Hej, úgy tűnik elvesztél. Kimentsünk?</h1>
                <a
                  href="\"
                  className="mt1 mb3 white btn bg-light-pink uppercase no-underline min-size btn-text expanded"
                  role="button"
                >
                  <i className="ri-lifebuoy-line ri-lg" css={css`top: 3px; position: relative;`}></i>
                  <span className="bold-700">Kimentést kérek</span>
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      <Footer></Footer>
    </>
  )
}

export const query = graphql`
  query {
    island: allFile(filter: { relativePath: { eq: "island.png" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 177, height: 177) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
