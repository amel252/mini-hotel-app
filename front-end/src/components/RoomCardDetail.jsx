// import React from "react";
// import { Card, Badge } from "antd";
// const { Meta } = Card;

// const RoomCardDetail = ({ room }) => {
//     return (
//         <div style={{ width: 300, margin: "1rem" }}>
//             <Card
//                 cover={
//                     <img
//                         style={{
//                             width: "300px",
//                             height: "350px",
//                             objectFit: "cover",
//                         }}
//                         alt={room.name}
//                         src={room.photo}
//                     />
//                 }
//             >
//                 {/* Titre avec badge */}
//                 <Badge
//                     count="BEST PRICE"
//                     style={{ backgroundColor: "#f50", marginBottom: "10px" }}
//                 >
//                     <div>
//                         <Meta
//                             title={room.name.toUpperCase()}
//                             description={room.description}
//                         />
//                     </div>
//                 </Badge>

//                 {/* Infos supplémentaires */}
//                 <div style={{ marginTop: "10px" }}>
//                     <p>Maximum Persons: {room.maxPersons}</p>
//                     <h4>Price: {room.price}</h4>
//                 </div>
//             </Card>
//         </div>
//     );
// };

// export default RoomCardDetail;
import React from "react";
import { Card, Badge } from "antd";
const { Meta } = Card;

const RoomCardDetail = ({ room }) => {
    return (
        <div style={{ width: 300, margin: "1rem" }}>
            <Card
                cover={
                    <img
                        style={{
                            width: "300px",
                            height: "350px",
                            objectFit: "cover",
                        }}
                        alt={room.name}
                        src={room.photo} // image de la chambre
                    />
                }
            >
                {/* Badge sur le titre */}
                <Badge count="BEST PRICE" style={{ backgroundColor: "#f50" }}>
                    <div>
                        <Meta
                            title={room.name.toUpperCase()}
                            description={room.description}
                        />
                    </div>
                </Badge>

                {/* Infos supplémentaires */}
                <div style={{ marginTop: "10px" }}>
                    <p>Maximum Persons: {room.maxPersons}</p>
                    <h4>Price: {room.price}</h4>
                </div>
            </Card>
        </div>
    );
};

export default RoomCardDetail;
