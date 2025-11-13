import React from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import RoomsPage from "./pages/RoomsPage.jsx";
import Rooms from "./components/Rooms";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<RoomsPage />}>
                        <Route index element={<Rooms />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </>
    );
};

export default App;
