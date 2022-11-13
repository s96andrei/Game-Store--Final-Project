import React from 'react';
import "./Footer.css"
import { Facebook, Instagram, Twitch, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <div className=''>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row ">
                        <div className="col-md-6 mt-md-0 mt-3 description">
                            <h5 className="text-uppercase">OG Store</h5>
                            <p>The site specializes in the resale of gaming products by the use of redemption keys. Other products sold on the site include software, prepaid activation codes, electronics, and merchandise.</p>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3 links">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Facebook color="#3b5998" />
                                    <a href="https://www.facebook.com/">Facebook</a>
                                </li>
                                <li>
                                    <Instagram color="#8a3ab9" />
                                    <a href="https://www.instagram.com/">Instagram</a>
                                </li>
                                <li>
                                    <Twitch color="#6441a5" />
                                    <a href="https://www.twitch.tv/">Twitch</a>
                                </li>
                                <li>
                                    <Linkedin color="#0072b1" />
                                    <a href="https://www.linkedin.com/feed/">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2022 Copyright: OG Store</div>
            </footer>
        </div>
    )
}

export default Footer