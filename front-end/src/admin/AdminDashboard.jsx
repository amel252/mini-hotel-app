import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user?.isAdmin) return <p>Accès interdit</p>;

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
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
