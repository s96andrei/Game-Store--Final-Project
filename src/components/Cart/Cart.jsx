import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./Cart.css"

const Cart = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container cart-container">
                <div>
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                        <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                        <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export default Cart