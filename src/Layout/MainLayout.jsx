import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div className=" container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;