import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../scripts/navigation'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Navigation = () => {
    const data = useStaticQuery(graphql`
        query image {
            image: allImageSharp(filter: {id: {eq: "ac408ac1-8e8c-5fa4-bf09-178b72902a5a"}}) {
                nodes {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
        }
    `)

    return (
        <Navbar id="navbar" fixed="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/#"><Img fixed={data.image.nodes.fixed} className="icon" alt="MUDr. Miroslav Urban"/>MUDr. Miroslav Urban</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/#aktuality">Aktuality</Nav.Link>
                <Nav.Link href="/#ordinace">Ordinace</Nav.Link>
                <Nav.Link href="/#cenik">Ceník</Nav.Link>
                <Nav.Link href="/#pojistovny">Pojišťovny</Nav.Link>
                <Nav.Link href="/#galerie">Galerie</Nav.Link>
                <Nav.Link href="/#kontakt">Kontakt</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
