import React from "react";
import { Navbar, Nav, Container, FormControl, Dropdown, Badge } from "react-bootstrap";
import { Cart4, Tornado } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import SignIn from "../SignIn/SignIn";
import "./Header.css"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ height: 100 }}>
            <Container>
                <Navbar.Brand>
                    <Tornado style={{ margin: "10px" }} color="white" fontSize="25px" />
                    <Link to="/">OG Store</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Text style={{ margin: "10px" }} className="search">
                    <FormControl style={{ maxWidth: "300px" }} placeholder="Search a product" className="m-auto" />
                </Navbar.Text>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Dropdown style={{ margin: "20px" }}>
                            <Dropdown.Toggle variant="success">
                                <Cart color="white" />
                                <Cart4 />
                                <Badge></Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ minWidth: 370 }}>
                                <span style={{ padding: 20 }}>Cart is Empty!</span>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link style={{ margin: "20px" }} href="/login">
                            <SignIn />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;