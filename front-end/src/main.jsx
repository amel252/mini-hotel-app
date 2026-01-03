import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import App from "./App";
//

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"; //  bootstrap icons
import "./style/scss/main.css"; // ton CSS template
import "aos/dist/aos.css"; // AOS
import "glightbox/dist/css/glightbox.css"; // GLightbox
// swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//  ant design
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            {" "}
            <App />
        </BrowserRouter>
    </Provider>
);
