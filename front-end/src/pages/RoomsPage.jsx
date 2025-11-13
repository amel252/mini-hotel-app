import React from "react";
import Rooms from "../components/Rooms";
// import { Routes, Route } from "react-router-dom";
// outlet
import { Outlet } from "react-router-dom";

export default function RoomsPage() {
    return (
        <div>
            <h1>Rooms</h1>
            <Outlet />
        </div>
    );
}
//  revoir demain outlet c mieux que créer des route dans des routes
