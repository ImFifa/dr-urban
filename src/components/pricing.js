import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Container } from 'react-bootstrap'

const Pricing = () => {
    const data = useStaticQuery(graphql`
    query {
        pricing: markdownRemark(fields: {slug: {eq: "/content/pricing/"}}) {
          frontmatter {
            items {
              name
              price
            }
            title
            description
          }
        }
      }
  `)

    return (
        <section className="cenik" id="cenik">
            <Container>
            <h2>{data.pricing.frontmatter.title}</h2>
            <p>{data.pricing.frontmatter.description}</p>
            
            <ul>
                {data.pricing.frontmatter.items.map(({name, price}) =>
                    <li>{name} {price}</li>
                )}
            </ul>
            </Container>
        </section>
    )
}

export default Pricing
