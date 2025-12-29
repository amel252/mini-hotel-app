// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../../style/custom.css"; // Assure-toi d'importer ton CSS

// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false); // état menu mobile
//     const [dropdownOpen, setDropdownOpen] = useState(null); // état dropdown mobile
//     const [isMobile, setIsMobile] = useState(false);

//     const toggleMenu = () => setMenuOpen(!menuOpen);
//     const toggleDropdown = (index) =>
//         setDropdownOpen(dropdownOpen === index ? null : index);

//     return (
//         <header
//             className={`header sticky-top ${
//                 menuOpen ? "mobile-nav-active" : ""
//             }`}
//         >
//             {/* Top bar */}
//             <div className="topbar d-flex align-items-center dark-background">
//                 <div className="container d-flex justify-content-center justify-content-md-between">
//                     <div className="contact-info d-flex align-items-center">
//                         <i className="bi bi-envelope d-flex align-items-center">
//                             <a href="mailto:contact@example.com">
//                                 contact@example.com
//                             </a>
//                         </i>
//                         <i className="bi bi-phone d-flex align-items-center ms-4">
//                             <span>+1 5589 55488 55</span>
//                         </i>
//                     </div>
//                     <div className="social-links d-none d-md-flex align-items-center">
//                         <a href="#" className="twitter">
//                             <i className="bi bi-twitter-x"></i>
//                         </a>
//                         <a href="#" className="facebook">
//                             <i className="bi bi-facebook"></i>
//                         </a>
//                         <a href="#" className="instagram">
//                             <i className="bi bi-instagram"></i>
//                         </a>
//                         <a href="#" className="linkedin">
//                             <i className="bi bi-linkedin"></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Branding / Navigation */}
//             <div className="branding d-flex align-items-center">
//                 <div className="container position-relative d-flex align-items-center justify-content-between">
//                     {/* Logo */}
//                     <Link to="/" className="logo d-flex align-items-center">
//                         <h1 className="sitename">Grandoria</h1>
//                     </Link>

//                     {/* Burger button mobile */}
//                     <button
//                         className="mobile-nav-toggle d-xl-none"
//                         onClick={toggleMenu}
//                     >
//                         ☰
//                     </button>

//                     {/* Menu */}
//                     <nav className="navmenu">
//                         <ul>
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/about">About</Link>
//                             </li>
//                             <li>
//                                 <Link to="/rooms">Rooms</Link>
//                             </li>
//                             <li>
//                                 <Link to="/amenities">Amenities</Link>
//                             </li>
//                             <li>
//                                 <Link to="/location">Location</Link>
//                             </li>

//                             {/* Dropdown Pages */}
//                             <li className="dropdown">
//                                 <span
//                                     onClick={() => toggleDropdown(0)}
//                                     className="d-flex align-items-center justify-content-between"
//                                     style={{ cursor: "pointer" }}
//                                 >
//                                     Pages{" "}
//                                     <i className="bi bi-chevron-down toggle-dropdown"></i>
//                                 </span>
//                                 <ul
//                                     style={{
//                                         display:
//                                             dropdownOpen === 0
//                                                 ? "block"
//                                                 : "none",
//                                     }}
//                                 >
//                                     <li>
//                                         <Link to="/room-details">
//                                             Room Details
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/restaurant">Restaurant</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/offers">Offers</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/events">Events</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/gallery">Gallery</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/booking">Booking</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/terms">Terms Page</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/privacy">Privacy Page</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/404">404 Page</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/starter-page">
//                                             Starter Page
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </li>

//                             <li>
//                                 <Link to="/contact">Contact</Link>
//                             </li>

//                             {/* Dropdown Language */}
//                             <li className="dropdown">
//                                 <span
//                                     onClick={() => toggleDropdown(1)}
//                                     className="d-flex align-items-center justify-content-between"
//                                     style={{ cursor: "pointer" }}
//                                 >
//                                     English{" "}
//                                     <i className="bi bi-chevron-down toggle-dropdown"></i>
//                                 </span>
//                                 <ul
//                                     style={{
//                                         display:
//                                             dropdownOpen === 1
//                                                 ? "block"
//                                                 : "none",
//                                     }}
//                                 >
//                                     <li>
//                                         <Link to="#french">French</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="#deutsch">Deutsch</Link>
//                                     </li>
//                                     <li>
//                                         <Link to="#spanish">Spanish</Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/custom.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropdown = (index) =>
        setDropdownOpen(dropdownOpen === index ? null : index);

    const handleResize = () => {
        const mobile = window.innerWidth < 1200;
        setIsMobile(mobile);
        if (!mobile) setMenuOpen(false); // fermer menu mobile sur desktop
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="header sticky-top">
            {/* Top bar */}
            <div className="topbar d-flex align-items-center dark-background">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="contact-info d-flex align-items-center gap-3">
                        <i className="bi bi-envelope d-flex align-items-center">
                            <a href="mailto:contact@example.com">
                                contact@example.com
                            </a>
                        </i>
                        <i className="bi bi-phone d-flex align-items-center">
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

            {/* Branding / Navigation */}
            <div className="branding d-flex align-items-center">
                <div className="container position-relative d-flex align-items-center justify-content-between">
                    {/* Logo */}
                    <Link to="/" className="logo d-flex align-items-center">
                        <h1 className="sitename">Grandoria</h1>
                    </Link>

                    {/* Burger button */}
                    {isMobile && (
                        <button
                            className={`mobile-nav-toggle ${
                                menuOpen ? "open" : ""
                            }`}
                            onClick={toggleMenu}
                        >
                            ☰
                        </button>
                    )}

                    {/* Menu */}
                    <nav className={`navmenu ${menuOpen ? "active" : ""}`}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/rooms">Rooms</Link>
                            </li>
                            <li>
                                <Link to="/amenities">Amenities</Link>
                            </li>
                            <li>
                                <Link to="/location">Location</Link>
                            </li>

                            {/* Dropdown Pages */}
                            <li className="dropdown">
                                <span onClick={() => toggleDropdown(0)}>
                                    Pages{" "}
                                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                                </span>
                                <ul
                                    className={dropdownOpen === 0 ? "show" : ""}
                                >
                                    <li>
                                        <Link to="/room-details">
                                            Room Details
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/restaurant">Restaurant</Link>
                                    </li>
                                    <li>
                                        <Link to="/offers">Offers</Link>
                                    </li>
                                    <li>
                                        <Link to="/events">Events</Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link to="/booking">Booking</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms">Terms Page</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy">Privacy Page</Link>
                                    </li>
                                    <li>
                                        <Link to="/404">404 Page</Link>
                                    </li>
                                    <li>
                                        <Link to="/starter-page">
                                            Starter Page
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>

                            {/* Dropdown Language */}
                            <li className="dropdown">
                                <span onClick={() => toggleDropdown(1)}>
                                    English{" "}
                                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                                </span>
                                <ul
                                    className={dropdownOpen === 1 ? "show" : ""}
                                >
                                    <li>
                                        <Link to="#french">French</Link>
                                    </li>
                                    <li>
                                        <Link to="#deutsch">Deutsch</Link>
                                    </li>
                                    <li>
                                        <Link to="#spanish">Spanish</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
