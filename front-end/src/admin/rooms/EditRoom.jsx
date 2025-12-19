import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Button, message, Spin } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const { TextArea } = Input;

const EditRoom = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch existing room data
    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const response = await fetch(`/api/rooms/${id}`);
                if (!response.ok) throw new Error("Failed to fetch room data");
                const data = await response.json();
                setRoom(data);
            } catch (error) {
                message.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchRoom();
    }, [id]);

    // Submit form to update room
    const onFinish = async (values) => {
        try {
            const response = await fetch(`/api/rooms/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...values,
                    photos: values.photos.split(",").map((url) => url.trim()), // convert string to array
                }),
            });

            if (!response.ok) throw new Error("Failed to update room");

            const updatedRoom = await response.json();
            message.success("Room updated successfully!");
            setRoom(updatedRoom);
            navigate("/admin/rooms"); // redirect to admin room list
        } catch (error) {
            message.error(error.message);
        }
    };

    if (loading) return <Spin size="large" style={{ marginTop: "2rem" }} />;
    if (!room) return <p>Room not found</p>;

    return (
        <div style={{ maxWidth: 700, margin: "2rem auto" }}>
            <h2>Edit Room</h2>
            <Form
                layout="vertical"
                initialValues={{
                    name: room.name,
                    description: room.description,
                    photos: room.photos.join(", "),
                    maxPersons: room.maxPersons,
                    price: room.price,
                    adressCity: room.adressCity,
                    Advantages: room.Advantages,
                    breackfast: room.breackfast,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Room Name"
                    name="name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true }]}
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label="Photos (comma separated URLs)"
                    name="photos"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Maximum Persons"
                    name="maxPersons"
                    rules={[{ required: true }]}
                >
                    <InputNumber min={1} max={100} style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true }]}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Address / City"
                    name="adressCity"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Advantages"
                    name="Advantages"
                    rules={[{ required: true }]}
                >
                    <TextArea rows={2} />
                </Form.Item>

                <Form.Item
                    label="Breakfast"
                    name="breackfast"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginRight: "1rem" }}
                    >
                        Update
                    </Button>
                    <Button
                        type="default"
                        onClick={() => navigate("/admin/rooms")}
                    >
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditRoom;
