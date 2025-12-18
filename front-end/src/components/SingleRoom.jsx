import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

const SingleRoom = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/rooms/${id}`);
                if (!response.ok) throw new Error("Erreur API");
                const json = await response.json();
                setRoom(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    // ⚡ Ici on retourne l'UI, pas dans useEffect
    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;
    if (!room) return <p>Chambre introuvable</p>;

    // return (
    //     <div
    //         style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             alignItems: "center",
    //             marginTop: "2rem",
    //         }}
    //     >
    //         <div>
    //             <img
    //                 style={{
    //                     width: "750px",
    //                     height: "400px",
    //                     objectFit: "cover",
    //                     borderRadius: "15px", // ← coins arrondis
    //                 }}
    //                 className="border-raduis"
    //                 src={room.photo}
    //                 alt={room.name}
    //             />
    //         </div>
    //         <div
    //             style={{
    //                 width: "750px",
    //                 border: "solid",
    //                 padding: "20px",
    //                 marginTop: "2rem",
    //                 textAlign: "center",
    //             }}
    //         >
    //             <h2>{room.name.toUpperCase()}</h2>
    //             <p>{room.description}</p>
    //             <h3>Room price: ${room.price}</h3>
    //             <p>Number of persons: {room.maxPersons}</p>
    //             <Link
    //                 to={"/booking"}
    //                 style={{
    //                     display: "inline-block",
    //                     width: "120px",
    //                     height: "45px",
    //                     lineHeight: "35px",
    //                     fontWeight: "bold",
    //                     border: "2px solid",
    //                     borderRadius: "15px",
    //                     textAlign: "center",
    //                     textDecoration: "none",
    //                     color: "red",
    //                 }}
    //             >
    //                 Book this room{" "}
    //             </Link>
    //         </div>
    //     </div>
    // );
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2rem",
            }}
        >
            <div
                style={{
                    width: "750px",
                    borderRadius: "15px",
                    overflow: "hidden",
                }}
            >
                <Carousel autoplay>
                    {room.photos.map((photo, index) => (
                        <div key={index}>
                            <img
                                src={photo}
                                alt={`${room.name} ${index + 1}`}
                                style={{
                                    width: "100%",
                                    height: "400px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div
                style={{
                    width: "750px",
                    border: "solid",
                    padding: "20px",
                    marginTop: "2rem",
                    textAlign: "center",
                    borderRadius: "15px",
                }}
            >
                <h2>{room.name.toUpperCase()}</h2>
                <p>{room.description}</p>
                <h3>Room price: ${room.price}</h3>
                <p>Number of persons: {room.maxPersons}</p>

                <Link
                    to={"/booking"}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "120px",
                        height: "45px",
                        fontWeight: "bold",
                        border: "2px solid black",
                        borderRadius: "15px",
                        textDecoration: "none",
                        color: "red",
                        margin: "0 auto",
                        marginTop: "2rem",
                    }}
                >
                    Book this room
                </Link>
            </div>
        </div>
    );
};

export default SingleRoom;
