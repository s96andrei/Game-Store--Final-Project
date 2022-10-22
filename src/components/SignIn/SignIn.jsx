import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import "./SignIn.css";

const SignIn = () => {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }


    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
    }

    const Logout = () => {
        console.log("Logout")
    }


    return (
        <div className='text-white'>
            <Header />
            <div className='border container w-25 p-3 d-flex flex-column my-5 rounded'>
                <Form>
                    <Form.Group className="mb-3" controlId="formUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='d-flex justify-content-center' >
                        <Button className='d-flex justify-content-center my-3 d-flex btn-lg btn-block' variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>

                </Form>
            </div>

        </div>


    )
}

export default SignIn