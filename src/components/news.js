import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row } from 'react-bootstrap'

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <section class="aktuality" id="aktuality">
        <h2>Aktuality</h2>

        <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col className="aktualita" key={node.id} lg={4}>
            <h4>
              {node.frontmatter.title}{" "}
              <small>
                — {node.frontmatter.date}
              </small>
            </h4>
            <p>{node.excerpt}</p>
          </Col>
        ))}
        </Row>
    </section>
  )
}

export default News