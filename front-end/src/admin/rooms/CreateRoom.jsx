import React from "react";
import { Form, Input, InputNumber, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const CreateRoom = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        // transformer les photos (string -> array)
        const payload = {
            ...values,
            photos: values.photos.split(",").map((p) => p.trim()),
        };

        try {
            const response = await fetch("/api/rooms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("creation failed");
            }

            message.success("room created succeffuly ✅");
            navigate("/admin/rooms");
        } catch (error) {
            message.error(error.message);
        }
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Create Room</h2>

            <Form
                layout="vertical"
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Room name"
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
                    label="Photos (URLs séparées par des virgules)"
                    name="photos"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="https://img1.jpg, https://img2.jpg" />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true }]}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Max persons"
                    name="maxPersons"
                    rules={[{ required: true }]}
                >
                    <InputNumber min={1} max={20} style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="City"
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
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Breakfast"
                    name="breackfast"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Included / Not included" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create Room
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateRoom;
