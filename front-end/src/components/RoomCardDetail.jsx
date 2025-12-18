import React from "react";
import { Card, Badge } from "antd";
const { Meta } = Card;

// petite unité visuelle qui représente la structure de ma carte
const RoomCardDetail = ({ room }) => {
    if (!room) return null; // ou un message "Chargement..."
    return (
        <div style={{ width: 300, margin: "1rem" }}>
            <Badge count="PROMO" style={{ backgroundColor: "#f50" }}>
                <Card
                    cover={
                        <img
                            style={{
                                width: "300px",
                                height: "350px",
                                objectFit: "cover",
                            }}
                            alt={`Photo de la chambre ${room.name}`}
                            src={room.photos[0]} // image de la chambre
                        />
                    }
                >
                    {/* Badge sur le titre */}

                    <div>
                        <Meta
                            title={room.name.toUpperCase()}
                            description={room.description}
                        />
                    </div>

                    {/* Infos supplémentaires */}
                    <div style={{ marginTop: "10px" }}>
                        <p>Maximum Persons: {room.maxPersons}</p>
                        <h4>Price: ${room.price.toLocaleString()}</h4>
                    </div>
                </Card>
            </Badge>
        </div>
    );
};

export default RoomCardDetail;
