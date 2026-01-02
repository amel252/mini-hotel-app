import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div
                id="footer"
                className="footer position-relative dark-background"
            >
                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6 footer-about">
                                <Link
                                    to="/index"
                                    className="logo d-flex align-items-center"
                                >
                                    <span className="sitename">Grandoria</span>
                                </Link>
                                <div className="footer-contact pt-3">
                                    <p>A108 Adam Street</p>
                                    <p>New York, NY 535022</p>
                                    <p className="mt-3">
                                        <strong>Phone:</strong>{" "}
                                        <span>+1 5589 55488 55</span>
                                    </p>
                                    <p>
                                        <strong>Email:</strong>{" "}
                                        <span>info@example.com</span>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <Link to="#">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="#">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Terms of service</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Privacy policy</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li>
                                        <Link to="#">Web Design</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Web Development</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Product Management</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Marketing</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Graphic Design</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Hic solutasetp</h4>
                                <ul>
                                    <li>
                                        <Link to="#">
                                            Molestiae accusamus iure
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            Excepturi dignissimos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">Suscipit distinctio</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Dilecta</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Sit quas consectetur</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Nobis illum</h4>
                                <ul>
                                    <li>
                                        <Link to="#">Ipsam</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Laudantium dolorum</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Dinera</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Trodelas</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Flexo</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright text-center">
                    <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
                        <div className="d-flex flex-column align-items-center align-items-lg-start">
                            <div>
                                © Copyright{" "}
                                <strong>
                                    <span>MyWebsite</span>
                                </strong>
                                . All Rights Reserved
                            </div>
                        </div>

                        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                            <Link to="">
                                <i className="bi bi-twitter-x"></i>
                            </Link>
                            <Link to="">
                                <i className="bi bi-facebook"></i>
                            </Link>
                            <Link to="">
                                <i className="bi bi-instagram"></i>
                            </Link>
                            <Link to="">
                                <i className="bi bi-linkedin"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
