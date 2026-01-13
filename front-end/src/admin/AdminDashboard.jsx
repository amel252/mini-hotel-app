import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.isAdmin) return <p>Access not allowed</p>;

    //  fonction de déconnexion
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="admin-dashboard container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Admin Dashboard</h2>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <nav className="mb-4">
                <ul className="list-unstyled d-flex gap-2">
                    <li>
                        <Link className="btn btn-primary" to="users">
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link className="btn btn-primary" to="rooms">
                            Rooms
                        </Link>
                    </li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
};
export default AdminDashboard;
