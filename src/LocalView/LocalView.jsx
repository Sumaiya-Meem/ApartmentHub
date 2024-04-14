import { Parallax } from "react-parallax";
import img from "../../public/local.png";
import { BsHouses } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TbCheckbox } from "react-icons/tb";
import { MdOutlineMenuBook } from "react-icons/md";
import { Rating } from "flowbite-react";
import { GrServices } from "react-icons/gr";

import heating from "../../public/heating.png";
import ac from "../../public/ac.png";
import sqaure from "../../public/sqaure.png";
import garage from "../../public/garage.png";
import food from "../../public/food.png";

const LocalView = () => {
  return (
    <div>
      <Parallax
        bgImage={img}
        strength={600}
        className=""
        style={{ opacity: "0.8" }}
      >
        <div className="h-[440px] flex flex-col items-center justify-center text-white bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)] ">
          <h1 className="text-4xl font-serif text-[#ac0221d6] mb-4 font-bold">
            Neighborhood Overview
          </h1>
          <p className="w-2/3">
            Explore our vibrant neighborhood through a lens of convenience and
            charm. Discover nearby amenities, bustling streets, and the essence
            of community living. Our apartments are nestled in the heart of a
            thriving urban landscape, offering the perfect balance of modernity
            and tranquility.
          </p>
        </div>
      </Parallax>

      <div className="mb-12 mt-7">
        <h1 className="text-2xl  py-3 px-4">Facts and Features</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 px-4 mt-7">
          <div className="flex gap-3 items-center">
            <BsHouses className="text-[#234dd4] text-[45px]"></BsHouses>
            <div>
              <h3>STORIES</h3>
              <h3 className="font-bold font-serif">Multi Family</h3>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <BsBuildings className="text-[#234dd4] text-[45px]"></BsBuildings>
            <div>
              <h3>YEAR BUILT</h3>
              <h3 className="font-bold font-serif">2021</h3>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <img src={sqaure} alt="" />
            <div>
              <h3>$/SQFT</h3>
              <h3 className="font-bold font-serif">3770</h3>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <img src={garage} alt="" />
            <div>
              <h3>GARAGE</h3>
              <h3 className="font-bold font-serif">3</h3>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <img src={heating} alt="" />
            <div>
              <h3>HEATING</h3>
              <h3 className="font-bold font-serif">NO</h3>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img src={ac} alt="" />
            <div>
              <h3>COOLING</h3>
              <h3 className="font-bold font-serif">YES</h3>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <LiaSwimmingPoolSolid className="text-[#234dd4] text-[50px]"></LiaSwimmingPoolSolid>
            <div>
              <h3>SWIMMING POOL</h3>
              <h3 className="font-bold font-serif">YES</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[1px] bg-gray-400  my-10"></div> */}

      <div className="mb-12 mt-7">
        <h1 className="text-2xl  py-3 px-4">Apartment Hub Amenities</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5 px-4 mt-7 border-[1px] p-4 border-gray-400 mx-7">
          <div className="flex gap-3 items-center">
            <TbCheckbox className="text-[#234dd4] text-xl"></TbCheckbox>
            <div>
              <h3 className="font-semibold text-sm">Air Conditioning</h3>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <TbCheckbox className="text-[#234dd4] text-xl"></TbCheckbox>
            <div>
              <h3 className="font-semibold text-sm">Dining Room</h3>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <TbCheckbox className="text-[#234dd4] text-xl"></TbCheckbox>
            <div>
              <h3 className="font-semibold text-sm">Dishwasher</h3>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <TbCheckbox className="text-[#234dd4] text-xl"></TbCheckbox>
            <div>
              <h3 className="font-semibold text-sm">Onsite Parking</h3>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <TbCheckbox className="text-[#234dd4] text-xl"></TbCheckbox>
            <div>
              <h3 className="font-semibold text-sm">Hardwood Flows</h3>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <TbCheckbox className="text-[#234dd4] text-xl"></TbCheckbox>
            <div>
              <h3 className="font-semibold text-sm">Unit Washer/Dryer</h3>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <TbCheckbox className="text-[#234dd4] text-xl"></TbCheckbox>
            <div>
              <h3 className="font-semibold text-sm ">Waterfront</h3>
            </div>
          </div>
       
        </div>
      </div>

      {/* <div className="w-full h-[1px] bg-gray-400  my-10 "></div> */}

      <h1 className="text-2xl  py-3 px-4">What's Nearby?</h1>
      <div className="border-t-[2px] border-[#000000] mx-6">
         <div className="flex items-center gap-1 py-2">
         <img src={food} alt="" /> 
         <p className="text-xl font-serif">FOOD</p>
         </div>
         <div className="border-y-[1px] border-gray-400 py-4 flex  justify-between">
            <h1>Melchor Bakery <span className="text-gray-400">(0.15 mi)</span></h1>
            <div className="flex items-center gap-3 mr-5">
            <p>2 REVIEWS</p>
            <div>
            <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false}  />
     
    </Rating>
            </div>
            </div>
         </div>
         <div className="py-4 flex  justify-between">
            <h1> Bridgford Foods Corporation <span className="text-gray-400">(0.27 mi)</span></h1>
            <div className="flex items-center gap-3 mr-5">
            <p>4 REVIEWS</p>
            <div>
            <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star className="text-red-500"/>
      <Rating.Star filled={false}  />
     
    </Rating>
            </div>
            </div>
         </div>
        
      </div>

      {/* Education */}
      <div className="border-t-[2px] border-[#000000] mx-6 my-8">
         <div className="flex items-center gap-1 py-6">
         <MdOutlineMenuBook className="text-[#234dd4] text-3xl"></MdOutlineMenuBook>
         <p className="text-xl font-serif">EDUCATION</p>
         </div>
         <div className="  py-4 flex  justify-between">
            <h1>Grace Lutheran Christian Schools <span className="text-gray-400">(0.11 mi)</span></h1>
            <div className="flex items-center gap-3 mr-5">
            <p>4 REVIEWS</p>
            <div>
            <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star className="text-red-500"/>
      <Rating.Star />
      <Rating.Star filled={false}  />
     
    </Rating>
            </div>
            </div>
         </div>
         <div className="py-4 flex  justify-between">
            <h1> Anaheim Elementary School District  <span className="text-gray-400">(0.22 mi)</span></h1>
            <div className="flex items-center gap-3 mr-5">
            <p>3 REVIEWS</p>
            <div>
            <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false}  />
     
    </Rating>
            </div>
            </div>
         </div>
         <div className="py-4 flex  justify-between">
            <h1> Thomas Jefferson Elementary School  <span className="text-gray-400">(0.35 mi)</span></h1>
            <div className="flex items-center gap-3 mr-5">
            <p>5 REVIEWS</p>
            <div>
            <Rating>
      <Rating.Star className="text-red-600"/>
      <Rating.Star className="text-red-600"/>
      <Rating.Star className="text-red-600"/>
      <Rating.Star className="text-red-600"/>
      <Rating.Star className="text-red-600"/>
     
    </Rating>
            </div>
            </div>
         </div>
        
      </div>

      {/* service */}
      <div className="border-t-[2px] border-[#000000] mx-6 my-8">
         <div className="flex items-center gap-1 py-6">
         <GrServices className="text-[#234dd4] text-3xl"></GrServices>
         <p className="text-xl font-serif">HOMESERVICES</p>
         </div>
         <div className="border-y-[1px] border-gray-400 py-4 flex  justify-between">
            <h1>Candy Chatchaiyan - Realty ONE Group <span className="text-gray-400"> (1.76 mi) </span></h1>
            <div className="flex items-center gap-3 mr-5">
            <p>1 REVIEWS</p>
            <div>
            <Rating>
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false}  />
     
    </Rating>
            </div>
            </div>
         </div>
         <div className="py-4 flex  justify-between">
            <h1> Ruth Kang Fox- Berkshire Hathaway HomeServices <span className="text-gray-400">(6.47 mi) </span></h1>
            <div className="flex items-center gap-3 mr-5">
            <p>7 REVIEWS</p>
            <div>
            <Rating>
      <Rating.Star className="text-red-600"/>
      <Rating.Star className="text-red-600"/>
      <Rating.Star className="text-red-600"/>
      <Rating.Star className="text-red-600" />
      <Rating.Star  className="text-red-600"/>
     
    </Rating>
            </div>
            </div>
         </div>
         <div className="py-4 flex  justify-between border-b-[1px] border-gray-400">
            <h1>Kelly Rhee - Berkshire Hathaway HomeServices <span className="text-gray-400">(6.35 mi)</span></h1>
            <div className="flex items-center gap-3 mr-5">
            <p>3 REVIEWS</p>
            <div>
            <Rating>
      <Rating.Star />
      <Rating.Star className="text-red-500"/>
      <Rating.Star />
      <Rating.Star filled={false}/>
      <Rating.Star filled={false}/>
     
    </Rating>
            </div>
            </div>
         </div>
        
      </div>
    </div>
  );
};

export default LocalView;
