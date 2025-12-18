import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const { Header, Content, Footer } = Layout;

// Couleur du thème hôtelier
const themeColor = "#42675a";

// Police globale
const fontFamily = "'Lato', sans-serif";

const contentStyle = {
    display: "flex",
    flexWrap: "wrap",
    padding: "3rem",
    justifyContent: "center",
    minHeight: "80vh",
    fontFamily,
};

const footerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    gap: "2rem",
    padding: "2rem",
    backgroundColor: themeColor,
    color: "#fff",
    fontFamily,
};

const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginLeft: "2rem",
    fontWeight: "bold",
};

const MLLayout = ({ children }) => {
    return (
        <Layout>
            {/* Header */}
            <Header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: themeColor,
                    padding: "0 3rem",
                    fontFamily,
                    fontSize: "1rem",
                }}
            >
                {/* Logo à gauche */}
                <Link
                    to="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#fff",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                    }}
                >
                    Grandoria
                </Link>

                {/* Liens affichés directement à droite */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to="/" style={navLinkStyle}>
                        Home
                    </Link>
                    <Link to="/rooms" style={navLinkStyle}>
                        Rooms
                    </Link>
                    <Link to="/aboutus" style={navLinkStyle}>
                        About us
                    </Link>
                    <Link to="/services" style={navLinkStyle}>
                        Services
                    </Link>
                    <Link to="/contact" style={navLinkStyle}>
                        Contact
                    </Link>
                </div>
            </Header>

            {/* Contenu */}
            <Content style={contentStyle}>{children}</Content>

            {/* Footer */}
            <Footer style={footerStyle}>
                <div className="footer-about">
                    <a
                        href="/"
                        style={{
                            color: "#fff",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                    >
                        Grandoria
                    </a>
                    <div
                        className="footer-contact"
                        style={{ marginTop: "1rem" }}
                    >
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                        <p>
                            <strong>Phone:</strong> +1 5589 55488 55
                        </p>
                        <p>
                            <strong>Email:</strong> info@example.com
                        </p>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>
                            <Link to="/" style={{ color: "#fff" }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={{ color: "#fff" }}>
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" style={{ color: "#fff" }}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <a href="#" style={{ color: "#fff" }}>
                                Terms of service
                            </a>
                        </li>
                        <li>
                            <a href="#" style={{ color: "#fff" }}>
                                Privacy policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Social media</h4>
                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            gap: "1rem",
                        }}
                    >
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <FaFacebookF />
                            <a href="#" style={{ color: "#fff" }}>
                                Facebook
                            </a>
                        </li>
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <FaInstagram />
                            <a href="#" style={{ color: "#fff" }}>
                                Instagram
                            </a>
                        </li>
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <FaTiktok />
                            <a href="#" style={{ color: "#fff" }}>
                                Tiktok
                            </a>
                        </li>
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <FaTwitter />
                            <a href="#" style={{ color: "#fff" }}>
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </Footer>
        </Layout>
    );
};

export default MLLayout;
