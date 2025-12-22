// import React from "react";
// import { Button, Form, Input, InputNumber } from "antd";
// import Rooms from "../components/Rooms";

// const onFinish = (values) => {
//     console.log("Success:", values);
// };
// const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
// };
// const Dashboard = () => (
//     <Form
//         name="basic"
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//         style={{ maxWidth: 600 }}
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//     >
//         <Form.Item
//             label="Room Name"
//             name="name"
//             rules={[
//                 {
//                     required: true,
//                     message: "Please input the name of the room",
//                 },
//             ]}
//         >
//             <Input name="name" />
//         </Form.Item>

//         <Form.Item label="Max persons" name="maxPersons">
//             <InputNumber
//                 min={1}
//                 max={100}
//                 style={{ width: "100%" }}
//                 name="maxPersons"
//             />
//         </Form.Item>

//         <Form.Item label={null}>
//             <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{ marginLeft: "2rem" }}
//             >
//                 Submit
//             </Button>
//             <Button type="primary" danger style={{ marginLeft: "2rem" }}>
//                 Delete
//             </Button>
//         </Form.Item>
//     </Form>
// );
// export default Dashboard;
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";
// import Message from "../../components/Message";
// import Loader from "../../components/Loader";
import {
    useGetRoomsQuery,
    useDeleteRoomMutation,
    useCreateRoomMutation,
} from "../redux/roomApiSlice.js";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import Pagination from "../../components/Pagination";

function RoomListScreen() {
    const { data, isLoading, error, refetch } = useGetRoomsQuery();
    const [deleteRoom, { isLoading: loadingDelete }] = useDeleteRoomMutation();
    const [createRoom, { isLoading: loadingCreate }] = useCreateRoomMutation();

    const deleteHandler = async (id) => {
        if (window.confirm("Êtes-vous sûr de supprimer cette chambre ?")) {
            try {
                await deleteRoom(id);
                toast.success("Chambre supprimée !");
                refetch();
            } catch (err) {
                toast.error(err?.data?.message || "Erreur suppression");
            }
        }
    };

    const createHandler = async () => {
        if (window.confirm("Créer une nouvelle chambre ?")) {
            try {
                const createdRoom = await createRoom({}).unwrap();
                toast.success("Chambre créée !");
                // Redirection vers édition
                window.location.href = `/admin/room/${createdRoom._id}/edit`;
            } catch (err) {
                toast.error(err?.data?.message || "Erreur création");
            }
        }
    };

    return (
        <div className="container mx-auto p-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Chambres</h1>
                <button
                    onClick={createHandler}
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary flex items-center"
                >
                    <FaPlus className="mr-2" /> Ajouter une chambre
                </button>
            </div>

            {loadingCreate && <Loader />}
            {loadingDelete && <Loader />}
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">
                    {error?.data?.message || error.error}
                </Message>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                    Nom
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                    Max Personnes
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {data.rooms.map((room) => (
                                <tr key={room._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {room._id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {room.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {room.maxPersons}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {room.image ? (
                                            <img
                                                src={room.image}
                                                alt={room.name}
                                                className="w-20 h-16 object-cover rounded"
                                            />
                                        ) : (
                                            "Pas d'image"
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex space-x-2">
                                            <Link
                                                to={`/admin/room/${room._id}/edit`}
                                                className="text-primary hover:text-secondary"
                                            >
                                                <FaEdit size={20} />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deleteHandler(room._id)
                                                }
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <FaTrash size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination si tu l'as */}
                    {data.pages && (
                        <div className="mt-6">
                            <Pagination
                                pages={data.pages}
                                page={data.page}
                                isAdmin={true}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default RoomListScreen;
