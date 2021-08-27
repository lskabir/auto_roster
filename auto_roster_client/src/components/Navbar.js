import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/cars">Car List</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new">New Car</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default NavBar