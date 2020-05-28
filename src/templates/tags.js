/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

// Components
import SEO from "../components/seo"
import Container from "../components/container/container.js"
import Row from "../components/row/row.js"
import Header from "../components/header/header.js"
import Breadcrumb from "../components/breadcrumb/breadcrumb-tags.js"

const LightBlueBg = styled.div`
background: linear-gradient(161.89deg, #ffffff 9.09%, #DFE6FF 78.44%), #bdcbfa;
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} bejegyzésem van a(z) "${tag}" témakörben`

  return (
    <>
      <SEO title={tag} pathname={`/cimkek/${tag}/`} article={true} />
      <Header></Header>
      <LightBlueBg>
        <Container>
          <Row>
            <div
              className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p0 mt1`}
            >
              <Breadcrumb>{tag}</Breadcrumb>
              <h1
                className="h2"
                css={css`
                  padding-bottom: 51px;
                `}
              >
                {tagHeader}
              </h1>
            </div>
          </Row>
        </Container>
      </LightBlueBg>
      <Container>
        <Row>
          <div
            className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p0 mt1`}
          >
            <ul>
              {edges.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                return (
                  <li key={slug}>
                    <Link to={slug}>{title}</Link>
                  </li>
                )
              })}
            </ul>
            {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
            <Link to="/cimkek">Az összes címke</Link>
          </div>
        </Row>
      </Container>
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 500
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
