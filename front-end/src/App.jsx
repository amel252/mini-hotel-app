import React from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import RoomsPage from "./pages/RoomsPage";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Route principale pour la liste des chambres */}
                    <Route path="/rooms" element={<RoomsPage />}>
                        <Route index element={<Rooms />} />
                        {/* Route pour la chambre unique avec l'id */}
                        <Route path=":id" element={<SingleRoom />} />{" "}
                        {/* relatif à /rooms */}
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
