import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import App from "./App";
//

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import "./assets/scss/main.css"; // ton CSS template
import "aos/dist/aos.css"; // AOS
import "glightbox/dist/css/glightbox.css"; // GLightbox
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            {" "}
            <App />
        </BrowserRouter>
    </Provider>
);
