import axios from "axios";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import "./slider.css"
const Slider = () => {
    const [slides, setSlide] = useState([]);

    useEffect(() => {
      const data = async () => {
        const res = await axios.get("/slide.json");
        setSlide(res.data);
      };
      data();
    }, []);
    return (
        <div>
            
      <div className="h-[450px]">
      <Carousel
        >
          {slides.map((slide) => (
            // eslint-disable-next-line react/jsx-key
            <>
              <div className="relative ">
                <img src={slide.image} alt="" className="w-full h-[450px]" />
                <div className="h-full  py-4  flex flex-col justify-center absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                  <div className="pl-20 w-1/3">
                    <h1 className="font-semibold font-serif  text-[50px] text-[#bc0022dd] ">
                      {slide.title}
                    </h1>
                    <h3 className="text-[40px] text-white font-semibold font-serif">{slide.subtitle}</h3>
                    <p className="text-sm text-[#ffffffba]">{slide.description}</p>
                   <div className="w-[120px] flex items-center gap-2 bg-[#fff] p-2 mt-2 rounded-lg text-[#bc0022dd] ">
                    <span><FaLocationArrow></FaLocationArrow></span>
                   <button className="  font-bold">{slide.button}</button>
                   </div>
                  </div>
                
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>
   
        </div>
    );
};

export default Slider;