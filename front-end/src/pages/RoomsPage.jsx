// import React from "react";
// import Rooms from "../components/Rooms";
// import { Routes, Route } from "react-router-dom";
// import RoomCardDetail from "../components/RoomCardDetail";

// export default function RoomsPage() {
//     return (
//         <Routes>
//             <Route path="/" element={<Rooms />} />
//             <Route path=":id" element={<RoomCardDetail />} />
//         </Routes>
//     );
// }
import React from "react";
import { Outlet } from "react-router-dom";

const RoomsPage = () => {
    return (
        <div>
            <h1>Our rooms</h1>
            <Outlet />
        </div>
    );
};

export default RoomsPage;
