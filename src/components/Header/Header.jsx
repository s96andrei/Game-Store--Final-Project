import React, { useState } from "react";
import { Badge, Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Cart4, Controller, PersonCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { connect, useDispatch } from "react-redux";
import { filterGames, setUserStore } from "../../store/actions";

const Header = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Container className="mt-4 mb-4">
                    <Navbar.Brand href="/">
                        <div>
                            <Controller className="me-2 brand" />
                            <span>OG Store</span>
                        </div>

                    </Navbar.Brand>
                    <Form className="d-flex ms-5">
                        <Form.Control
                            type="search"
                            placeholder="Search Games"
                            className="me-2"
                            aria-label="Search"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <Button variant="outline-success" onClick={() => dispatch(filterGames(text))}>Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="buttons">
                        <Nav className="ms-5">
                            {
                                !props.user ?
                                    <Nav.Link onClick={() => navigate("/login")}>
                                        <PersonCircle className="me-2 mw-75" />
                                        Sign In / Register
                                    </Nav.Link>
                                    :
                                    <Nav.Link onClick={() => dispatch(setUserStore(null))}>
                                        <PersonCircle className="me-2 mw-75" />
                                        Logout
                                    </Nav.Link>
                            }
                            <Nav.Link onClick={() => navigate("/Cart")} className="cart-button">
                                <Cart4 className="ms-3 me-2 mb-1 " />
                                Cart
                                <Badge></Badge>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);