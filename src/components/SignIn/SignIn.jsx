import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import "./SignIn.css";

const SignIn = () => {
    const navigate = useNavigate();

    const signInArr = [
        {
            username: "andrei.s@gmail.com",
            email: "andrei.s@gmail.com",
            password: "asd123"
        },
        {
            username: "andrei.s1@gmail.com",
            email: "andrei.s1@gmail.com",
            password: "asd1234"
        },
        {
            username: "andrei.ss1@gmail.com",
            email: "andrei.ss1@gmail.com",
            password: "asd12345"
        },
        {
            username: "andrei.s31@gmail.com",
            email: "andrei.s31@gmail.com",
            password: "asd123456"
        }
    ]

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let [user, setUser] = useState(
        {
            email: "",
            password: "",
            username: ""
        }
    );

    const changeEmail = (event) => {
        setEmail(event.target.value)
    };
    const changePassword = (event) => {
        setPassword(event.target.value)
    };
    const changeUserName = (event) => {
        setUserName(event.target.value)
    };


    const logIn = () => {
        let exist = false;

        signInArr.forEach((obj) => {
            if (obj.email === email && obj.password === password && obj.username === userName) {
                exist = true;
                setUser(
                    {
                        email: obj.email,
                        password: obj.password,
                        username: obj.username
                    }
                );
            }
        })
        setEmail("");
        setPassword("");
        setUserName("");
        navigate('/home');
    }

    return user.email && user.password && user.username ? <h1>You are loged in</h1 > :
        <div className='text-white container w-25'>
            <div>
                <Header />
            </div>

            <div className='border p-3 rounded form-container'>
                <Form>
                    <Form.Group className="mb-3" controlId="formUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control onChange={changeUserName} value={userName} type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onChange={changeEmail} value={email} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={changePassword} value={password} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='d-flex justify-content-center' >
                        <Button onClick={logIn} className='my-3 btn-lg btn-block' variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
}

export default SignIn