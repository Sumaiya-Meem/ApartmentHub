import { Outlet } from "react-router-dom";
import Header from "../Components/Navbar/Header";
import Footers from "../Components/Footers/Footers"

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default MainLayout;