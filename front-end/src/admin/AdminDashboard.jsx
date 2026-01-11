import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();
    //  fonction de déconnexion
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user?.isAdmin) return <p>Accès interdit</p>;

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
            <nav>
                <ul>
                    <li>
                        <Link to="users">Users</Link>
                    </li>
                    <li>
                        <Link to="rooms">Rooms</Link>
                    </li>
                    <li>
                        <Link to="bookings">Bookings</Link>
                    </li>
                </ul>
            </nav>

            {/* Outlet pour afficher la sous-page */}
            <div className="admin-content">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
