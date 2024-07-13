import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Navbar/Header";
import Footers from "../Components/Footers/Footers"

const MainLayout = () => {
    
    const location=useLocation();

    const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('registration');
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footers></Footers>}
        </div>
    );
};

export default MainLayout;