import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./Cart.css"
import { Cart4 } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const Cart = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="cart-container">
                <Cart4 className='logo h1' />
                <br />
                <p className='text-center'>Your cart is empty. Go ahead and add some cool stuff to it! Or <a className='cart-login' href='/login'>log In</a> to check if there's something in it already!</p>
                <Button variant="outline-success" className="browse-button">
                    <a href="/">
                        Browse Deals
                    </a>
                </Button>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}


export default Cart