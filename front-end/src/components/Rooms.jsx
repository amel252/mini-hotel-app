import React, { useEffect, useState } from "react";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    //  function quand je lance mon coposant , ca me récupere les données

    useEffect(() => {
        //  function
        const fetchData = async () => {
            const data = await window.fetch("/api/rooms");
            //  quand je récup mes données je converti en json
            const json = await data.json();
            console.log(json);
        };
        fetchData();
    }, []);

    return <div>Rooms en outlet </div>;
};
export default Rooms;
