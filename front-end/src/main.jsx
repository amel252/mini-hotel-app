// import React from "react";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";

// import "antd/dist/reset.css";
// import App from "./App.jsx";

// import { BrowserRouter as Router } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <Router>
//             <App />
//         </Router>
//     </StrictMode>
// );
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    //<React.StrictMode> // <-- commente temporairement si ça double les effets
    <BrowserRouter>
        <App />
    </BrowserRouter>
    //</React.StrictMode>
);
