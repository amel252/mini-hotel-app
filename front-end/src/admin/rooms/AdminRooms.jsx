import React, { useEffect, useState } from "react";
import { Table, Button, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";

const AdminRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch all rooms
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch("/api/rooms");
                if (!response.ok) throw new Error("Failed to fetch rooms");
                const data = await response.json();
                setRooms(data);
            } catch (error) {
                message.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);

    // Delete a room
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/rooms/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Failed to delete room");
            setRooms(rooms.filter((room) => room._id !== id));
            message.success("Room deleted successfully");
        } catch (error) {
            message.error(error.message);
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "City",
            dataIndex: "adressCity",
            key: "adressCity",
        },
        {
            title: "Max Persons",
            dataIndex: "maxPersons",
            key: "maxPersons",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => `$${price}`,
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <Link to={`/admin/rooms/edit/${record._id}`}>
                        <Button type="primary">Edit</Button>
                    </Link>
                    <Button
                        type="danger"
                        onClick={() => handleDelete(record._id)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    if (loading) return <Spin size="large" style={{ marginTop: "2rem" }} />;

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Admin Rooms</h2>
            <Button
                type="primary"
                style={{ marginBottom: "1rem" }}
                onClick={() => navigate("/admin/rooms/create")}
            >
                Add New Room
            </Button>
            <Table dataSource={rooms} columns={columns} rowKey="_id" />
        </div>
    );
};

export default AdminRooms;
