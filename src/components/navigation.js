import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import icon from '../images/icon.png'
import '../scripts/navigation'

const Navigation = () => (
        <Navbar id="navbar" fixed="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/#"><Image src={icon} className="icon" alt="MUDr. Miroslav Urban"/>MUDr. Miroslav Urban</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/#aktuality">Aktuality</Nav.Link>
                <Nav.Link href="/#ordinace">Ordinace</Nav.Link>
                <Nav.Link href="/#cenik">Ceník</Nav.Link>
                <Nav.Link href="/#pojistovny">Pojišťovny</Nav.Link>
                <Nav.Link href="/#galerie">Galerie</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )

export default Navigation
