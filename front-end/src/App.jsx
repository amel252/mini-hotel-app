import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// route public
import RoomsPage from "./pages/RoomsPage";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
// admin
import AdminDashboard from "./admin/AdminDashboard";
import UserListScreen from "./admin/screen/userListScreen";
import RoomListScreen from "./admin/rooms/AdminRooms";
import BookingListScreen from "./admin/screen/BookingListScreen";
import AdminRoute from "./components/AdminRoute";
//
// import CreateRoom from "./admin/rooms/CreateRoom";
// import EditRoom from "./admin/rooms/EditRoom";
// import AdminRooms from "./admin/rooms/AdminRooms";
// stylisation
import AOS from "aos";
import "aos/dist/aos.css";
//  route auth
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <>
            <Layout>
                <Routes>
                    {/*  routes Public */}
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<RoomsPage />}>
                        <Route index element={<Rooms />} />
                        <Route path=":id" element={<SingleRoom />} />{" "}
                    </Route>

                    {/* route pages  */}
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />

                    {/*  route authentification */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Route admin parent */}
                    <Route
                        path="/admin"
                        element={
                            <AdminRoute>
                                <AdminDashboard />
                            </AdminRoute>
                        }
                    >
                        {/* les sous-routes */}
                        <Route path="users" element={<UserListScreen />} />
                        <Route path="rooms" element={<RoomListScreen />} />
                        <Route
                            path="bookings"
                            element={<BookingListScreen />}
                        />
                    </Route>
                    {/* <Route path="/admin/rooms" element={<AdminRooms />} />
                    <Route
                        path="/admin/rooms/create"
                        element={<CreateRoom />}
                    />
                    <Route
                        path="/admin/rooms/:id/edit"
                        element={<EditRoom />}
                    /> */}
                </Routes>
            </Layout>
        </>
    );
};

export default App;
