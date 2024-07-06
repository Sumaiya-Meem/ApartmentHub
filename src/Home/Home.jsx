import { useState } from "react";
import About from "./About/About";
import Coupon from "./Coupon/Coupon";
import Location from "./Location/Location";
import Slider from "./Slider/Slider";

const Home = () => {
    const images = [
        "https://i.ibb.co/6DpsMgn/pexels-jvdm-1457842.jpg",
        "https://i.ibb.co/W6054y0/1.jpg",
        "https://i.ibb.co/3fFTT61/2.jpg",
        "https://i.ibb.co/0McCmGD/3.jpg",
        "https://i.ibb.co/pnDVhfN/5.jpg",
        "https://i.ibb.co/PW2wwDt/6.jpg",
        "https://i.ibb.co/WDxxCCf/4.jpg",
        "https://i.ibb.co/8g3qq0C/8.jpg",
        "https://i.ibb.co/Nx4Y0nm/7.jpg",
    ];
    
    const [data, setData] = useState({ img: images[0], i: 0 });

    const nextImage = () => {
        if (data.i === images.length - 1) {
            setData({ img: images[0], i: 0 });
        } else {
            setData({ img: images[data.i + 1], i: data.i + 1 });
        }
    };

    const prevImage = () => {
        if (data.i === 0) {
            setData({ img: images[images.length - 1], i: images.length - 1 });
        } else {
            setData({ img: images[data.i - 1], i: data.i - 1 });
        }
    };

    return (
        <div>
            <Slider />
            <About />
            <Coupon />
            <Location />
            <div className="relative flex justify-center items-center">
                <button
                    className="text-black absolute left-0 text-3xl bg-[#b8b6b6] opacity-70 rounded-full p-2"
                    onClick={prevImage}
                >
                    Prev
                </button>
                <img src={data.img} alt="" className="w-full max-w-md" />
                <button
                    className="text-black absolute right-0 text-3xl bg-[#b8b6b6] opacity-70 rounded-full p-2"
                    onClick={nextImage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
