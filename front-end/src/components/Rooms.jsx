import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";

//  component qui affiche une liste des chambre
const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    //  function quand je lance mon coposant , ca me récupere les données (mes chambres)
    const [currentPage, setCurrentPage] = useState(1);
    const roomsPerPage = 6; // nombre de chambres par page

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
    // Calculer les chambres pour la page actuelle
    const indexOfLastRoom = currentPage * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);

    const totalPages = Math.ceil(rooms.length / roomsPerPage);

    const goToPage = (pageNumber) => setCurrentPage(pageNumber);

    return (
        // permet d'afficher la liste des chambres
        <div>
            {/* Liste des chambres */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                }}
            >
                {currentRooms.map((room) => (
                    <Link to={`/rooms/${room._id}`} key={room._id}>
                        <RoomCard room={room} />
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2rem",
                        gap: "10px",
                    }}
                >
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => goToPage(i + 1)}
                            style={{
                                padding: "5px 10px",
                                backgroundColor:
                                    currentPage === i + 1
                                        ? "#42675a"
                                        : "#f0f0f0",
                                color: currentPage === i + 1 ? "#fff" : "#000",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Rooms;
