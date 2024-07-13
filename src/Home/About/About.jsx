import { Parallax } from "react-parallax";
import about1 from "../../../public/about1.jpg";

import { FaLocationDot } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
const About = () => {
  useEffect(()=> {
    Aos.init()     
},[])

  return (
    <div>
      <div className="text-center my-10 text-[#bc0024] text-2xl font-bold font-serif">
        <h1>
        <Typewriter
                      words={['About The Building']}
                      loop={true}
                      cursor
                      cursorStyle='..'
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                </h1>
      </div>
      <Parallax bgImage={about1} strength={500} className="">
        <div className="h-[440px] flex flex-col items-center justify-center  bg-gradient-to-t from-[#060606] to-[rgba(21,21,21,0.4)] ">
          <h1 className="text-4xl font-serif text-[#fff] mb-4">
            Apartment Hub
          </h1>
          <p className="w-2/3 text-[#c7c7c7]">
            Meticulous design with striking appearance. A masterwork of
            postmodernism. Situated near the diplomatic zones of Mahamadpur and
            Mirpur, in the center of Mirpur 10. This area boasts a blend of
                    residential and commercial vibrancy.
          </p>
        </div>
      </Parallax>
     
        <div className="mt-10 space-y-5 ml-10">
          <h1 className="text-xl font-serif font-bold text-gray-800">
            ApartmentHub: Your Premier Living Destination
          </h1>
          <div className="flex items-center">
            <FaLocationDot></FaLocationDot>
            <span> Mirpur 10, Dhaka</span>
          </div>
          <h1 className="text-xl font-serif font-bold text-gray-800">
            Welcome to ApartmentHub
          </h1>
          <p className="w-[350px] md:w-[600px] text-justify  text-gray-700">
            Nestled in the vibrant neighborhood of Mirpur 10, ApartmentHub
            stands as a beacon of modern living. With its strategic location and
            contemporary design, ApartmentHub offers a seamless blend of
            comfort, convenience, and style.
          </p>
          <h1 className="text-xl font-serif font-bold text-gray-800">Your Modern Living Space</h1>
          <p className="w-[350px] md:w-[600px] text-justify   text-gray-700">
            Inaugurated in 2021, ApartmentHub offers 1000 meticulously designed
            apartments spread across its expansive 92,860 square meter
            structure. With its towering presence reaching 300 feet,
            ApartmentHub redefines luxury living in Mirpur 10.
          </p>
          {/* <h1 className="text-xl font-serif font-bold text-gray-800">
          Precision Design with Eye-Catching Aesthetics
          </h1>
          <p className="w-[600px] text-gray-700">
          At ApartmentHub, every detail is meticulously crafted to create a postmodern masterpiece. Designed by renowned architect Nazmul Islam Sakib and developed by ABC Builders,
           ApartmentHub boasts a striking exterior that captures the essence of urban life.
          </p> */}

          <h1 className="text-xl font-serif font-bold text-gray-800">
          Experience Luxury Living at ApartmentHub
          </h1>
          <p className="w-[350px] md:w-[600px] text-justify  text-gray-700">
          Discover the epitome of modern living at ApartmentHub. Whether you seek comfort, style, or convenience, ApartmentHub offers it all. Come, be a part of our thriving community
           and experience urban living like never before.
          </p>

        </div>
      </div>
  );
};

export default About;
