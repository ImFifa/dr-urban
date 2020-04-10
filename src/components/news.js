import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import { Col, Row, Container } from 'react-bootstrap'

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <section class="aktuality" id="aktuality">
        <Container>
          
        <h2>Aktuality</h2>
        <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col className="aktualita" key={node.id} xl={4}>
            <h4>
              {node.frontmatter.title}{" "}
              <small>
                — {node.frontmatter.date}
              </small>
            </h4>
            <p>{node.excerpt}</p>
            <Link className="link" to={node.fields.slug} >Číst více <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
          </Col>
        ))}
        </Row>
        
        </Container>
    </section>
  )
}

export default News