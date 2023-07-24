import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <ScrollRestoration />
            <Header/>
            <Navbar />

            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;