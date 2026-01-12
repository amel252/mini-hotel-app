import React, { useEffect, useState } from "react";
import {
    Table,
    Button,
    Space,
    Spin,
    Typography,
    message,
    Tag,
    Tooltip,
} from "antd";
import { FaTrash } from "react-icons/fa";

const { Title } = Typography;

const BookingListScreen = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchBookings = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/bookings", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.ok)
                    throw new Error("Erreur lors du fetch des bookings");
                const data = await res.json();
                setBookings(data);
            } catch (err) {
                console.error(err);
                message.error("Impossible de charger les réservations");
            } finally {
                setLoading(false);
            }
        };

        if (user?.isAdmin) fetchBookings();
    }, [user, token]);

    if (!user?.isAdmin) return <p>Access not allowed</p>;

    const deleteHandler = async (id) => {
        if (
            window.confirm("Voulez-vous vraiment supprimer cette réservation ?")
        ) {
            try {
                const res = await fetch(`/api/bookings/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.ok) throw new Error("Erreur lors de la suppression");
                setBookings(bookings.filter((b) => b._id !== id));
                message.success("Réservation supprimée avec succès !");
            } catch (err) {
                console.error(err);
                message.error("Impossible de supprimer la réservation");
            }
        }
    };

    const columns = [
        {
            title: "Utilisateur",
            dataIndex: ["user", "username"],
            key: "user",
            render: (_, record) => record.user?.username || "—",
        },
        {
            title: "Email",
            dataIndex: ["user", "email"],
            key: "email",
            render: (_, record) => record.user?.email || "—",
        },
        {
            title: "Chambre",
            dataIndex: ["room", "name"],
            key: "room",
            render: (_, record) => record.room?.name || "—",
        },
        {
            title: "Check In",
            dataIndex: "checkIn",
            key: "checkIn",
        },
        {
            title: "Check Out",
            dataIndex: "checkOut",
            key: "checkOut",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                let color = "blue";
                if (status === "cancelled") color = "red";
                else if (status === "completed") color = "green";
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Space size="middle">
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
                    Réservations
                </Title>
            </div>

            {loading ? (
                <Spin size="large" />
            ) : (
                <Table
                    columns={columns}
                    dataSource={bookings}
                    rowKey="_id"
                    pagination={{ pageSize: 10 }}
                    bordered
                />
            )}
        </div>
    );
};

export default BookingListScreen;
