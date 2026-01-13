// import React, { useEffect, useState } from "react";
// import {
//     Table,
//     Button,
//     Space,
//     Spin,
//     Alert,
//     Typography,
//     Tooltip,
//     message,
// } from "antd";
// import { FaEdit, FaTrash } from "react-icons/fa";

// const { Title } = Typography;

// const UsersListScreen = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const user = JSON.parse(localStorage.getItem("user"));
//     const token = localStorage.getItem("token");

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const res = await fetch("/admin/users", {
//                     // <-- ton backend
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (!res.ok) {
//                     throw new Error("Error in fetch user");
//                 }

//                 const data = await res.json();
//                 setUsers(data);
//             } catch (err) {
//                 console.error(err);
//                 message.error("Impossible to charge users");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (user?.isAdmin) fetchUsers();
//     }, [user, token]);
//     if (!user?.isAdmin) return <p>Access not allowed </p>;
//     // fonction en +
//     const deleteHandler = async (id) => {
//         if (window.confirm("are you sure that you want to delete user?")) {
//             try {
//                 const res = await fetch(`/api/users/${id}`, {
//                     method: "DELETE",
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 if (!res.ok) throw new Error("Error in delete");
//                 setUsers(users.filter((u) => u._id !== id));
//                 message.success("delete successfuly!");
//             } catch (err) {
//                 console.error(err);
//                 message.error("Impossible to delete user");
//             }
//         }
//     };
//     // ------------
//     const columns = [
//         {
//             title: "Nom",
//             dataIndex: "username",
//             key: "username",
//         },
//         {
//             title: "Email",
//             dataIndex: "email",
//             key: "email",
//         },
//         {
//             title: "Actions",
//             key: "actions",
//             render: (_, record) => (
//                 <Space size="middle">
//                     <Tooltip title="Editer">
//                         <Button type="primary" icon={<FaEdit />} />
//                     </Tooltip>
//                     <Tooltip title="Supprimer">
//                         <Button
//                             danger
//                             type="text"
//                             icon={<FaTrash />}
//                             onClick={() => deleteHandler(record._id)}
//                         />
//                     </Tooltip>
//                 </Space>
//             ),
//         },
//     ];

//     return (
//         <div className="container-fluid">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//                 <Title level={2} style={{ margin: 0 }}>
//                     Utilisateurs
//                 </Title>
//             </div>

//             {loading ? (
//                 <Spin size="large" />
//             ) : (
//                 <Table
//                     columns={columns}
//                     dataSource={users}
//                     rowKey="_id"
//                     pagination={{ pageSize: 10 }}
//                     bordered
//                 />
//             )}
//         </div>
//     );
// };

// // return (
// //     <div>
// //         <h2>Liste des utilisateurs</h2>
// //         <table>
// //             <thead>
// //                 <tr>
// //                     <th>Nom</th>
// //                     <th>Email</th>
// //                     <th>Actions</th>
// //                 </tr>
// //             </thead>
// //             <tbody>
// //                 {users.map((u) => (
// //                     <tr key={u._id}>
// //                         <td>{u.username}</td>
// //                         <td>{u.email}</td>
// //                         <td>
// //                             {user.isAdmin && (
// //                                 <>
// //                                     <button>Edit</button>
// //                                     <button>Delete</button>
// //                                 </>
// //                             )}
// //                         </td>
// //                     </tr>
// //                 ))}
// //             </tbody>
// //         </table>
// //     </div>
// // );

// export default UsersListScreen;
import React, { useEffect, useState } from "react";
import { Table, Button, Space, Spin, Typography, Tooltip, message } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";

const { Title } = Typography;

const UsersListScreen = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    // Fetch users depuis backend
    useEffect(() => {
        const fetchUsers = async () => {
            if (!user?.isAdmin) return;

            setLoading(true);
            try {
                const res = await fetch("/admin/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok)
                    throw new Error("Impossible de récupérer les utilisateurs");

                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error(err);
                message.error(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [user, token]);

    if (!user?.isAdmin) return <p>Accès interdit</p>;

    // Supprimer un utilisateur
    const deleteHandler = async (id) => {
        if (!window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?"))
            return;

        try {
            const res = await fetch(`http://localhost:3200/admin/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) throw new Error("Erreur lors de la suppression");

            setUsers(users.filter((u) => u._id !== id));
            message.success("Utilisateur supprimé avec succès !");
        } catch (err) {
            console.error(err);
            message.error("Impossible de supprimer l'utilisateur");
        }
    };

    const columns = [
        {
            title: "Nom",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="Editer">
                        <Button type="primary" icon={<FaEdit />} />
                    </Tooltip>
                    <Tooltip title="Supprimer">
                        <Button
                            danger
                            type="text"
                            icon={<FaTrash />}
                            onClick={() => deleteHandler(record._id)}
                        />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Title level={2} style={{ margin: 0 }}>
                    Users
                </Title>
            </div>

            {loading ? (
                <Spin size="large" />
            ) : (
                <Table
                    columns={columns}
                    dataSource={users}
                    rowKey="_id"
                    pagination={{ pageSize: 10 }}
                    bordered
                />
            )}
        </div>
    );
};

export default UsersListScreen;
