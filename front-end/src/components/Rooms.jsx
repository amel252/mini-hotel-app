import React, { useEffect, useState } from "react";
import RoomCardDetail from "./RoomCardDetail";
import { Link } from "react-router-dom";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    //  function quand je lance mon coposant , ca me récupere les données (mes chambres)

    useEffect(() => {
        //  function fetchData
        const fetchData = async () => {
            // je veux récuperer les donné a travers le chemin
            const data = await window.fetch("/api/rooms");
            //  quand je récup mes données & je converti en json
            const json = await data.json();

            setRooms(json);
        };
        fetchData();
    }, []);

    return (
        // permet d'afficher la liste des chambres
        <div
            style={{
                display: "flex",
                flexWrap: "wrap", // permet de passer à la ligne si beaucoup de cartes
                gap: "20px", // espace entre les cartes
                justifyContent: "center", // centre la ligne
            }}
        >
            {rooms.map((room) => (
                <Link to={room._id} key={room._id}>
                    <RoomCardDetail room={room} />
                </Link>
            ))}
        </div>
    );
};
export default Rooms;
