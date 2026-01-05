import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import renderStars from "../utils/renderStars";
import { Pagination } from "antd";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const roomsPerPage = 6; //  le nombre de rooms par page

    //
    const indexOfLastRoom = currentPage * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
    useEffect(() => {
        //  function fetchData
        const fetchRooms = async () => {
            try {
                // je veux récuperer les donné a travers le chemin
                const data = await window.fetch("/api/rooms");
                //  quand je récup mes données & je converti en json
                const json = await data.json();
                setRooms(json);
            } catch (error) {
                console.log("error in réceiving rooms ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);

    if (loading) return <p>Loading rooms...</p>;

    return (
        <>
            {/* Page Title */}
            <div className="page-title light-background">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Rooms</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="current">Rooms</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Rooms Section */}
            <section id="rooms-2" className="rooms-2 section">
                <div
                    className="container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {/* Filters */}
                    <div
                        className="room-filters"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-3 col-md-6">
                                <label className="form-label">
                                    Price Range
                                </label>
                                <select className="form-select">
                                    <option>All Prices</option>
                                    <option>$100 - $200</option>
                                    <option>$200 - $350</option>
                                    <option>$350+</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <label className="form-label">
                                    Guest Capacity
                                </label>
                                <select className="form-select">
                                    <option>Any Capacity</option>
                                    <option>1-2 Guests</option>
                                    <option>3-4 Guests</option>
                                    <option>5+ Guests</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <label className="form-label">View Type</label>
                                <select className="form-select">
                                    <option>All Views</option>
                                    <option>Ocean View</option>
                                    <option>City View</option>
                                    <option>Garden View</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <label className="form-label">Sort By</label>
                                <select className="form-select">
                                    <option>Popularity</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Room Size</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Rooms Grid */}
                    <div
                        className="rooms-grid"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="row g-4">
                            {currentRooms.map((room) => (
                                <div
                                    className="col-xl-4 col-lg-6"
                                    key={room._id}
                                >
                                    <div className="room-card">
                                        <div className="room-image">
                                            <img
                                                src={
                                                    room.photos &&
                                                    room.photos.length > 0
                                                        ? room.photos[0]
                                                        : "/assets/img/hotel/default-room.jpg"
                                                }
                                                alt={room.name}
                                                className="img-fluid"
                                            />
                                            <div className="room-features">
                                                {/* Exemple de badge dynamique selon Advantages */}
                                                {room.Advantages && (
                                                    <span className="feature-badge popular">
                                                        {room.Advantages}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="room-content">
                                            <div className="room-header">
                                                <h3>{room.name}</h3>
                                                <div className="room-rating">
                                                    {renderStars(room.rating)}
                                                    <span className="ms-2 text-muted">
                                                        ({room.numOfReviews})
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="room-description">
                                                {room.description}
                                            </p>

                                            <div className="room-amenities">
                                                <span>
                                                    <i className="bi bi-people"></i>{" "}
                                                    Up to {room.maxPersons}{" "}
                                                    guests
                                                </span>
                                                <span>
                                                    <i className="bi bi-geo-alt"></i>{" "}
                                                    {room.adressCity}
                                                </span>
                                                <span>
                                                    <i className="bi bi-cup-hot"></i>{" "}
                                                    {room.breackfast}
                                                </span>
                                            </div>

                                            <div className="room-footer">
                                                <div className="room-price">
                                                    <span className="price-from">
                                                        From
                                                    </span>{" "}
                                                    <span className="price-amount">
                                                        ${room.price}
                                                    </span>
                                                    <span className="price-period">
                                                        {" "}
                                                        / night
                                                    </span>
                                                </div>
                                                <Link
                                                    to={`/rooms/${room._id}`}
                                                    className="btn-room-details"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Load More */}
                    <div
                        className="load-more-section"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {/* Pagination */}
                        <div className="d-flex justify-content-center mt-4">
                            <Pagination
                                current={currentPage}
                                pageSize={roomsPerPage}
                                total={rooms.length}
                                onChange={(page) => setCurrentPage(page)}
                                showSizeChanger={false}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Rooms;
