import React from "react";
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";
import {
    useGetRoomsQuery,
    useDeleteRoomMutation,
    useCreateRoomMutation,
} from "../../redux/roomApiSlice";
import { Table, Button, Space, Typography, Spin, Alert } from "antd";
const { Title } = Typography;
import { Link } from "react-router-dom";

function RoomListScreen() {
    const { data: rooms, isLoading, error, refetch } = useGetRoomsQuery();
    const [deleteRoom, { isLoading: loadingDelete }] = useDeleteRoomMutation();
    const [createRoom, { isLoading: loadingCreate }] = useCreateRoomMutation();

    const deleteHandler = async (id) => {
        if (window.confirm("Are you sure you want to delete this room")) {
            try {
                await deleteRoom(id).unwrap();
                alert("Room deleted successfully !");
                refetch();
            } catch (err) {
                alert("Error while deleting room");
            }
        }
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "_id",
            key: "_id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Max Guests",
            dataIndex: "maxPersons",
            key: "maxPersons",
        },
        {
            title: "Image",
            dataIndex: "photos",
            key: "photos",
            render: (photos, room) =>
                photos && photos.length > 0 ? (
                    <img
                        src={photos[0]} // 👈 première image
                        alt={room.name}
                        style={{
                            width: 100,
                            height: 70,
                            objectFit: "cover",
                            borderRadius: 6,
                        }}
                    />
                ) : (
                    "—"
                ),
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, room) => (
                <Space size="middle">
                    <Link to={`/admin/room/${room._id}/edit`}>
                        <FaEdit />
                    </Link>
                    <Button
                        danger
                        type="text"
                        icon={<FaTrash />}
                        onClick={() => deleteHandler(room._id)}
                    />
                </Space>
            ),
        },
    ];

    // if (isLoading) return <p>Loading the room ...</p>;
    // if (error) return <p>Error : {error?.data?.message || " server error"}</p>;

    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Title level={2} style={{ margin: 0 }}>
                    Rooms
                </Title>

                <Button type="primary" icon={<FaPlus />}>
                    <Link to="/admin/room/create">Add a Room</Link>
                </Button>
            </div>

            {/* Loading */}
            {isLoading && <Spin size="large" />}

            {/* Error */}
            {error && (
                <Alert
                    type="error"
                    message={error?.data?.message || "Server error"}
                />
            )}

            {/* Table */}
            {!isLoading && !error && (
                <Table
                    columns={columns}
                    dataSource={rooms}
                    rowKey="_id"
                    loading={loadingDelete}
                    pagination={{ pageSize: 8 }}
                    bordered
                />
            )}
        </div>
    );
}

export default RoomListScreen;
