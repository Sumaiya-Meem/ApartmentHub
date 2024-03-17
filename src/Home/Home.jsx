import Footers from "../Components/Footers/Footers";
import Header from "../Components/Navbar/Header";
import About from "./About/About";
import Location from "./Location/Location";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <About></About>
            <Location></Location>
            <Footers></Footers>
        
            
        </div>
    );
};

export default Home;