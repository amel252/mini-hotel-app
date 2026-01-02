// Main.js
import React from "react";
import Grandoria from "./Grandoria";
// import Footer from "./components/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Grandoria />
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
