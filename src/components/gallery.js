import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import {Row, Col} from 'react-bootstrap'

const Gallery = () => {
    const data = useStaticQuery(graphql`
        query Images {
            images: allFile(filter: {relativeDirectory: {eq: "images/gallery"}}) {
                nodes {
                  id
                  childImageSharp {
                       fixed(width: 400) {
                         ...GatsbyImageSharpFixed
                       }
                  }
                }
              }
        }
    `)

    console.log(data)

    return (
        <section className="galerie" id="galerie">
            <h2>Galerie</h2>
            <Row className="gallery">
                {data.images.nodes.map(image => (
                    <Col>
                        <Img key={image.id}  fixed={image.childImageSharp.fixed} />
                    </Col>
                ))}
            </Row>
        </section>
    )
}

export default Gallery