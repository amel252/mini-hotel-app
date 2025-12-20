import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "antd";

const SingleRoom = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("ID reçu :", id);
        if (!id) return; // protection si id est undefined
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
        <div className="room-details-page">
            {/* Header et photo principale et details */}
            <div style={{ display: "flex" }}>
                <div className="container d-lg-flex justify-content-between align-items-center">
                    {room.photos && room.photos.length > 0 && (
                        <div className="room-header-image mb-4">
                            <img
                                style={{
                                    width: "750px",
                                    height: "450px",
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

                <div
                    style={{
                        marginLeft: "35px",
                        padding: "55px 55px ",
                        gap: "25px",
                        alignItems: "center",
                    }}
                    className="room-description"
                >
                    <h1 className="section-subtitle">{room.name}</h1>
                    <p>{room.description}</p>
                    <p>
                        <strong>Price:</strong> ${room.price}
                    </p>
                    <p>
                        <i className="bi bi-people">
                            <span> Max persons :{room.maxPersons}</span>
                        </i>
                    </p>

                    <Link to="/booking">
                        <Button
                            style={{
                                // width: "8rem",
                                height: "3rem",
                                color: "#fff",
                                background: "#42675a",
                                marginTop: "10px",
                            }}
                        >
                            Book Now
                        </Button>
                        {/* className="btn btn-outline-danger fw-bold mt-3" style=
                        {{ width: "150px" }} */}
                    </Link>
                </div>
            </div>
            {/* Room galerie*/}
            <div id="room-details" className="room-details section container">
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
            </div>
            {/* Amenities / Avantages */}
            <div className="room-amenities mb-8">
                <h3
                    style={{ marginLeft: "30px" }}
                    className="section-subtitle mb-4"
                >
                    Room Amenities
                </h3>
                <div
                    style={{
                        display: "flex", // active le mode flex
                        gap: "65px", // espace entre les colonnes
                        flexWrap: "wrap", // permet de passer à la ligne sur petit écran
                        overflowX: "auto", // scroll horizontal si écran trop petit
                        fontSize: "1rem",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* Sleeping */}
                    <div className="amenity-category" style={{}}>
                        <h4 style={{ marginLeft: "50px", gap: "55px" }}>
                            Sleeping
                        </h4>
                        <ul>
                            <li>King size bed</li>
                            <li>Premium linens</li>
                            <li>Memory foam pillows</li>
                            <li>Blackout curtains</li>
                        </ul>
                    </div>

                    {/* Technology */}
                    <div className="amenity-category">
                        <h4 style={{ marginLeft: "50px", gap: "55px" }}>
                            Technology
                        </h4>
                        <ul>
                            <li>High-speed WiFi</li>
                            <li>55" Smart TV</li>
                            <li>Bluetooth speakers</li>
                            <li>USB charging ports</li>
                        </ul>
                    </div>

                    {/* Comfort */}
                    <div className="amenity-category">
                        <h4 style={{ marginLeft: "50px", gap: "55px" }}>
                            Comfort
                        </h4>
                        <ul>
                            <li>Climate control</li>
                            <li>Mini refrigerator</li>
                            <li>Coffee machine</li>
                            <li>Safe deposit box</li>
                        </ul>
                    </div>

                    {/* Bathroom */}
                    <div className="amenity-category">
                        <h4 style={{ marginLeft: "50px", gap: "55px" }}>
                            Bathroom
                        </h4>
                        <ul>
                            <li>Marble bathroom</li>
                            <li>Rain shower</li>
                            <li>Luxury toiletries</li>
                            <li>Heated floors</li>
                        </ul>
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
                                <span className="price">{room.price}$</span>
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
        </div>
    );
};

export default SingleRoom;
