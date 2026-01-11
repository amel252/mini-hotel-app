//  gére l'affichage utilisateur et logout
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const UserMenu = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <li className="d-flex align-items-center">
            {user ? (
                <>
                    <Link
                        to="/profile"
                        className="d-flex align-items-center gap-1 text-white"
                    >
                        <FaUser size={22} />
                        <span>{user.username || user.name}</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="btn btn-link text-white p-0 ms-2 d-flex align-items-center"
                    >
                        <FaSignOutAlt size={24} />
                    </button>
                </>
            ) : (
                <Link
                    to="/login"
                    className="d-flex align-items-center gap-1 text-white"
                >
                    <FaUser size={24} />
                    <span>Signin</span>
                </Link>
            )}
        </li>
    );
};

export default UserMenu;
