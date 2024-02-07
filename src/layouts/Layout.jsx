import { Outlet } from "react-router-dom";
import "../css/Responsive_2.css";
import "../css/Index_2.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
