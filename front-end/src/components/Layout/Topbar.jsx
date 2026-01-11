//  gere la partie top avec reseaux sociaux
import React from "react";

const Topbar = () => (
    <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-between align-items-center">
            <div className="contact-info d-flex align-items-center gap-3">
                <i className="bi bi-envelope">
                    <a href="mailto:contact@example.com">contact@example.com</a>
                </i>
                <i className="bi bi-phone">
                    <span>+1 5589 55488 55</span>
                </i>
            </div>
            <div className="social-links d-flex align-items-center gap-3">
                <a href="#" className="twitter">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
);

export default Topbar;
