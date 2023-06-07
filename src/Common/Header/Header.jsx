import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="info">
                <Container>
                    <Navbar.Brand className="fw-bold">CineFlix</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav  className="ms-auto">
                            <Link to={'/'} style={{textDecoration: "none"}} className="text-dark px-2 py-1">
                                Home
                            </Link>
                            <Link to={'/my-booking'} style={{textDecoration: "none"}} className="ms-md-2 text-dark px-2 py-1">
                                My Show
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;