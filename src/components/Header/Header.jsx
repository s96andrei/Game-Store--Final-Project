import React from "react";
import { Dropdown, Badge, Navbar } from "react-bootstrap";
import { Cart4, Controller, PersonCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Header.css"

const Header = () => {
    const navigate = useNavigate();



    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div>
                    <a className="navbar-brand " href="/">
                        <Controller className="me-2 mx-5" />
                        OG Store
                    </a>
                </div>

                <div>
                    <form className="form-inline">
                        <div className="d-flex my-4">
                            <input className="form-control m-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success m-2" type="submit">Search</button>
                        </div>
                    </form>
                </div>
                <div className="collapse navbar-collapse buttons" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">
                                <button className="rounded p-2" onClick={() => navigate("/SignIn")}>
                                    <PersonCircle className="me-2 mw-75" />
                                    Sign In
                                </button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle variant="success">
                                    <div className="p-1 d-flex ">
                                        <Cart4 className="me-2" />
                                        <Cart color="white" />
                                        <Badge></Badge>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <span style={{ padding: 20 }}>Cart is Empty!</span>
                                    <button>Checkout</button>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                <div>

                    <button className="navbar-toggler mx-5" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" id="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

            </nav>
        </div >
    );
}

export default Header;