import axios from "axios";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import "./slider.css"
import { Typewriter } from "react-simple-typewriter";
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
        <div className="-mt-[6px]">
            
      <div className="h-[450px]">
      <Carousel
        >
          {slides.map((slide) => (
            // eslint-disable-next-line react/jsx-key
            <>
              <div className="relative ">
                <img src={slide.image} alt="" className="w-full h-[450px]" />
                <div className="h-full  py-4   flex flex-col justify-center absolute left-0 top-0 bg-gradient-to-r from-[#020202] to-[rgba(21,21,21,0.3)]">
                  <div className="pl-20 w-[80%] lg:w-2/3 ">
                    <h1 className=" mb-1 lg:mb-6  font-semibold font-serif text-xl md:text-2xl lg:text-[50px] text-[#e72549dd] ">
                      {slide.title}
                    </h1>
                    <h3 className="mb-1 lg:mb-6 text-xl md:text-[25px] lg:text-[40px] text-white font-semibold font-serif">{slide.subtitle}</h3>
                    <p className="mb-1 lg:mb-6 text-sm text-[#e0e0e0] lg:w-2/3 text-justify">{slide.description}</p>
                   <div className="w-[140px] flex items-center gap-2 bg-[#fff] p-2 mt-2 rounded-lg text-[#bc0022dd] ">
                    <span><FaLocationArrow></FaLocationArrow></span>
                   <button className="font-bold"> 
                    <Typewriter
                            words={[slide.button]}
                            loop={true}
                            cursor
                            cursorStyle='..'
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></button>
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