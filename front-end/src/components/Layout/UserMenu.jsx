import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const UserMenu = ({ onItemClick }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    // return (
    // <li className="d-flex align-items-center">
    //     {user ? (
    //         <>
    //             <li>
    //                 <Link
    //                     to="/profile"
    //                     className="user-link"
    //                     onClick={onItemClick}
    //                 >
    //                     <FaUser size={22} />
    //                     <span>{user.username || user.name}</span>
    //                 </Link>
    //             </li>
    //             <li>
    //                 <button
    //                     className="logout-btn"
    //                     onClick={() => {
    //                         handleLogout();
    //                         onItemClick();
    //                     }}
    //                 >
    //                     <FaSignOutAlt size={24} />
    //                 </button>
    //             </li>
    //         </>
    //     ) : (
    //         <li>
    //             <Link
    //                 to="/login"
    //                 className="user-link"
    //                 onClick={onItemClick}
    //             >
    //                 <FaUser size={24} />
    //                 <span>Signin</span>
    //             </Link>
    //         </li>
    //     )}
    // </li>
    if (user) {
        return (
            <>
                <li>
                    <Link
                        to="/profile"
                        className="user-link"
                        onClick={onItemClick}
                    >
                        <FaUser size={18} />
                        <span>{user.username || user.name}</span>
                    </Link>
                </li>

                <li>
                    <button
                        className="logout-btn"
                        onClick={() => {
                            handleLogout();
                            onItemClick();
                        }}
                    >
                        <FaSignOutAlt size={18} />
                        <span>Logout</span>
                    </button>
                </li>
            </>
        );
    }

    return (
        <li>
            <Link to="/login" className="user-link" onClick={onItemClick}>
                <FaUser size={22} />
                <span>Signin</span>
            </Link>
        </li>
    );
};

export default UserMenu;
