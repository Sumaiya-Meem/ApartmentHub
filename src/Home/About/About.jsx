import { Parallax } from "react-parallax";
import about1 from "../../../public/about1.jpg";
import about2 from "../../../public/about2.avif";
import about3 from "../../../public/about3.jpg";
import "./About.css";
import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <div className="text-center my-10 text-[#bc0024] text-2xl font-bold font-serif">
        <h1>About The Building</h1>
      </div>
      <Parallax bgImage={about1} strength={500} className="">
        <div className="h-[440px] flex flex-col items-center justify-center text-white bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)] ">
          <h1 className="text-4xl font-serif text-[#bc0022d6] mb-4">
            Apartment Hub
          </h1>
          <p className="w-2/3">
            Meticulous design with striking appearance. A masterwork of
            postmodernism. Situated near the diplomatic zones of Mahamadpur and
            Mirpur, in the center of Mirpur 10.
          </p>
        </div>
      </Parallax>
      <div className="mt-10 mx-4 flex flex-col items-center gap-20">
        <div className="aboutImg hidden md:block">
          <img src={about2} alt="" className="bigImg rounded-md" />
          <img src={about3} alt="" className="smImg" />
        </div>
        <div className=" ml-3  space-y-5">
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
          <p className="w-[350px] md:w-[600px] mx-auto  text-gray-700">
            Nestled in the vibrant neighborhood of Mirpur 10, ApartmentHub
            stands as a beacon of modern living. With its strategic location and
            contemporary design, ApartmentHub offers a seamless blend of
            comfort, convenience, and style.
          </p>
          <h1 className="text-xl font-serif font-bold text-gray-800">Your Modern Living Space</h1>
          <p className="w-[350px] md:w-[600px] mx-auto  text-gray-700">
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
          <p className="w-[350px] md:w-[600px] mx-auto  text-gray-700">
          Discover the epitome of modern living at ApartmentHub. Whether you seek comfort, style, or convenience, ApartmentHub offers it all. Come, be a part of our thriving community
           and experience urban living like never before.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
