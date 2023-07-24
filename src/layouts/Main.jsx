import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <ScrollRestoration />
            <Navbar />

            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;