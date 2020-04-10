import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import {Row, Col, Container} from 'react-bootstrap'

const Gallery = () => {
    const data = useStaticQuery(graphql`
        query Images {
            images: allFile(filter: {relativeDirectory: {eq: "images/gallery"}}) {
                nodes {
                  id
                  childImageSharp {
                       fluid(maxWidth: 600) {
                         ...GatsbyImageSharpFluid
                       }
                  }
                }
              }
        }
    `)

    console.log(data)

    return (
        <section className="galerie" id="galerie">
            <Container>
            <h2>Galerie</h2>
            <Row className="gallery">
                {data.images.nodes.map(image => (
                    <Col md={6} xl={4} className="mb-3">
                        <Img key={image.id}  fluid={image.childImageSharp.fluid} />
                    </Col>
                ))}
            </Row>
            </Container>
        </section>
    )
}

export default Gallery