import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <ScrollRestoration />
            <Navbar />

            <Outlet />
        </div>
    );
};

export default Main;