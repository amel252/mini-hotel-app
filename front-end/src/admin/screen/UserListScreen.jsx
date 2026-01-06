import React, { useEffect, useState } from "react";

const UserListScreen = () => {
    const [users, setUsers] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("http://localhost:5000/users", {
                    // <-- ton backend
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) {
                    throw new Error("Erreur lors du fetch des utilisateurs");
                }

                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error(err);
            }
        };

        if (user?.isAdmin) fetchUsers();
    }, [user, token]);

    if (!user?.isAdmin) return <p>Accès interdit</p>;

    return (
        <div>
            <h2>Liste des utilisateurs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u._id}>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>
                                {user.isAdmin && (
                                    <>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserListScreen;
