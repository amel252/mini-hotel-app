// ce fichier gère le logo, la nav et le bloc utilisateur.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const Branding = ({ menuOpen, toggleMenu }) => {
    return (
        <div className="branding d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="logo d-flex align-items-center">
                    <h1 className="sitename">Grandoria</h1>
                </Link>

                <button
                    className="navbar-toggler d-xl-none"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <nav className={`navmenu ${menuOpen ? "show" : ""}`}>
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
                        {/* Dropdown Pages à part si besoin */}
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                        {/* Bloc utilisateur */}
                        <UserMenu />
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Branding;
