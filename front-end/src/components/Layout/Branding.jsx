import React from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const Branding = ({ menuOpen, toggleMenu }) => {
    const handleMobileToggle = () => {
        toggleMenu(); // state React
        document.body.classList.toggle("mobile-nav-active"); // classe CSS
    };
    const handleCloseMenu = () => {
        document.body.classList.remove("mobile-nav-active");
        toggleMenu(false);
    };
    return (
        <div className="branding d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center position-relative">
                <Link to="/" className="logo d-flex align-items-center">
                    <h1 className="sitename">Grandoria</h1>
                </Link>

                <button
                    className="navbar-toggler d-xl-none mobile-nav-toggle"
                    type="button"
                    onClick={handleMobileToggle}
                >
                    ☰
                </button>

                <nav className={`navmenu ${menuOpen ? "show" : ""}`}>
                    <ul>
                        <li>
                            <Link to="/" onClick={handleCloseMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={handleCloseMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/rooms" onClick={handleCloseMenu}>
                                Rooms
                            </Link>
                        </li>
                        <li>
                            <Link to="/amenities" onClick={handleCloseMenu}>
                                Amenities
                            </Link>
                        </li>
                        <li>
                            <Link to="/location" onClick={handleCloseMenu}>
                                Location
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={handleCloseMenu}>
                                Contact
                            </Link>
                        </li>

                        {/* Bloc utilisateur */}
                        <UserMenu onItemClick={handleCloseMenu} />
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Branding;
