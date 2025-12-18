import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import { Carousel } from "antd";

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

    return (
        // <div
        //     style={{
        //         display: "flex",
        //         flexDirection: "column",
        //         alignItems: "center",
        //         marginTop: "2rem",
        //     }}
        // >
        //     <div
        //         style={{
        //             width: "750px",
        //             borderRadius: "15px",
        //             overflow: "hidden",
        //         }}
        //     >
        //         <Carousel autoplay>
        //             {room.photos.map((photo, index) => (
        //                 <div key={index}>
        //                     <img
        //                         src={photo}
        //                         alt={`${room.name} ${index + 1}`}
        //                         style={{
        //                             width: "100%",
        //                             height: "400px",
        //                             objectFit: "cover",
        //                         }}
        //                     />
        //                 </div>
        //             ))}
        //         </Carousel>
        //     </div>

        //     <div
        //         style={{
        //             width: "750px",
        //             border: "solid",
        //             padding: "20px",
        //             marginTop: "2rem",
        //             textAlign: "center",
        //             borderRadius: "15px",
        //         }}
        //     >
        //         <h2>{room.name.toUpperCase()}</h2>
        //         <p>{room.description}</p>
        //         <h3>Room price: ${room.price}</h3>
        //         <p>Number of persons: {room.maxPersons}</p>

        //         <Link
        //             to={"/booking"}
        //             style={{
        //                 display: "flex",
        //                 justifyContent: "center",
        //                 alignItems: "center",
        //                 width: "120px",
        //                 height: "45px",
        //                 fontWeight: "bold",
        //                 border: "2px solid black",
        //                 borderRadius: "15px",
        //                 textDecoration: "none",
        //                 color: "red",
        //                 margin: "0 auto",
        //                 marginTop: "2rem",
        //             }}
        //         >
        //             Book this room
        //         </Link>
        //     </div>
        // </div>

        <div className="room-details-page">
            {/* Header et photo principale */}
            <div className="page-title light-background mb-4">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h2 className="mb-3">Room Details</h2>
                </div>
                {room.photos && room.photos.length > 0 && (
                    <div className="room-header-image mb-4">
                        <img
                            style={{
                                width: "950px",
                                borderRadius: "15px",
                                overflow: "hidden",
                            }}
                            src={room.photos[0]}
                            alt={room.name}
                            className="img-fluid rounded"
                        />
                    </div>
                )}
            </div>

            {/* Galerie */}
            {room.photos && room.photos.length > 0 && (
                <div className="room-gallery mb-5 container">
                    <h3 className="section-subtitle mb-4">Room Gallery</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {room.photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`${room.name} ${index + 1}`}
                                className="img-fluid rounded"
                                style={{
                                    width: "150px",
                                    height: "100px",
                                    objectFit: "cover",
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Détails de la chambre */}
            <section
                id="room-details"
                className="room-details section container"
            >
                <div className="row mb-5">
                    <div className="col-lg-8">
                        <div className="room-description">
                            <h3 className="section-subtitle">Room Overview</h3>
                            <p>{room.description}</p>
                            <p>
                                <strong>Price:</strong> ${room.price}
                            </p>
                            <p>
                                <strong>Max persons:</strong> {room.maxPersons}
                            </p>
                            <Link
                                to="/booking"
                                className="btn btn-outline-danger fw-bold mt-3"
                                style={{ width: "150px" }}
                            >
                                Book this room
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Amenities / Avantages */}
                <div className="room-amenities mb-5">
                    <h3 className="section-subtitle mb-4">Room Amenities</h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="amenity-category">
                                <h5>Sleeping</h5>
                                <ul>
                                    <li>King size bed</li>
                                    <li>Premium linens</li>
                                    <li>Memory foam pillows</li>
                                    <li>Blackout curtains</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="amenity-category">
                                <h5>Technology</h5>
                                <ul>
                                    <li>High-speed WiFi</li>
                                    <li>55" Smart TV</li>
                                    <li>Bluetooth speakers</li>
                                    <li>USB charging ports</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="amenity-category">
                                <h5>Comfort</h5>
                                <ul>
                                    <li>Climate control</li>
                                    <li>Mini refrigerator</li>
                                    <li>Coffee machine</li>
                                    <li>Safe deposit box</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="amenity-category">
                                <h5>Bathroom</h5>
                                <ul>
                                    <li>Marble bathroom</li>
                                    <li>Rain shower</li>
                                    <li>Luxury toiletries</li>
                                    <li>Heated floors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Policies */}
                <div className="room-tabs mb-5">
                    <h3 className="nav-item">Policies</h3>
                    <div className="tab-content">
                        <div className="tab-pane fade show active">
                            <div className="tab-content-wrapper row">
                                <div className="col-md-4">
                                    <h6>Check-in / Check-out</h6>
                                    <p>
                                        Check-in: 3:00 PM
                                        <br />
                                        Check-out: 11:00 AM
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <h6>Cancellation</h6>
                                    <p>
                                        Free cancellation up to 24 hours before
                                        arrival
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <h6>Pets</h6>
                                    <p>Pet-friendly with additional fee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking CTA */}
                <div className="booking-cta mb-5">
                    <div className="booking-card p-4 border rounded">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h4>Ready to book your stay?</h4>
                                <p>Experience luxury and comfort. Book now!</p>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <div className="price-display mb-2">
                                    <span className="price">${room.price}</span>
                                    <span className="period"> per night</span>
                                </div>
                                <Link
                                    to="/booking"
                                    className="btn btn-primary btn-lg"
                                >
                                    Check Availability
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleRoom;
