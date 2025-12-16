import React, { useEffect, useState } from "react";

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
            console.log(json);
        };
        fetchData();
    }, []);

    return (
        <div>
            Rooms of my hotel
            {/* <ul>
                {rooms.map((room) => (
                    <li key={room.id}>{room.name}</li>
                ))}
            </ul> */}
        </div>
    );
};
export default Rooms;
