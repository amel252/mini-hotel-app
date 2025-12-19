import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
const onFinish = (values) => {
    console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
const RoomForm = () => (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="Room Name"
            name="name"
            rules={[
                {
                    required: true,
                    message: "Please input the name of the room",
                },
            ]}
        >
            <Input name="name" />
        </Form.Item>

        <Form.Item label="Max persons" name="maxPersons">
            <InputNumber
                min={1}
                max={100}
                style={{ width: "100%" }}
                name="maxPersons"
            />
        </Form.Item>

        <Form.Item label={null}>
            <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: "2rem" }}
            >
                Submit
            </Button>
            <Button type="primary" danger style={{ marginLeft: "2rem" }}>
                Delete
            </Button>
        </Form.Item>
    </Form>
);
export default RoomForm;
