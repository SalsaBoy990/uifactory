/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Container from "../components/container/container.js"
import Row from "../components/row/row.js"
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"
import Breadcrumb from "../components/breadcrumb/breadcrumb.js"

const LightBlueBg = styled.div`
  background: linear-gradient(161.89deg, #ffffff 9.09%, #dfe6ff 78.44%), #bdcbfa;
`

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <>
    <SEO title={`Címkék`} pathname={`/cimkek/`} article={false} />
    <Header></Header>
    <LightBlueBg>
      <Container>
        <Row>
          
          <div
            className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 xl-offset-1 p0 mt1`}
          >
            <Breadcrumb>Címkék</Breadcrumb>
            <h1
              className="h2"
              css={css`
                padding-bottom: 51px;
              `}
            >
              Címkék
            </h1>
          </div>
        </Row>
      </Container>
    </LightBlueBg>
    <Container>
      <Row>
        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10 xl-offset-1 p0 mb2 mt1`}
        >
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/cimkek/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Row>
    </Container>
    <Footer></Footer>
  </>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
