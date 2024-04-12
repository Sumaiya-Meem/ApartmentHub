import { Button } from "flowbite-react";
import { FaLocationDot } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";
const Location = () => {
  return (
    <div>
      <div className="text-center my-10 text-[#bc0024] text-4xl font-bold font-serif">
        <h1>Location</h1>
      </div>
      <div className="flex gap-6 flex-col lg:flex-row mx-2">
        <div className="flex-1 w-[400px] lg:w-[600px] h-[400px] border-[2px] border-red-300 overflow-hidden">
          <iframe
            className=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34729.086172303665!2d90.35134398263011!3d23.80275194324609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710667307444!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-4xl text-[#525050] font-bold font-serif">
            Location
          </h1>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-[#bc0024]"></FaLocationDot>
            <span className="font-serif"> Mirpur 10, Dhaka</span>
          </div>
          <p className="text-[#525050] text-justify mx-1">
            Apartment Hub, situated in the vibrant locale of Mirpur, offers a
            contemporary living experience at the heart of the city. With its
            modern amenities and convenient location, Apartment Hub is the
            perfect destination for urban dwellers seeking comfort and style.
            Rising 200 feet with 100 apartments within its 92,860 sqm expanse
          </p>

          <div className="flex items-center gap-2 ">
          <a  href="https://www.google.com/maps/place/Mirpur+10,+Dhaka/@23.7933037,90.3695718,15z/data=!3m1!4b1!4m5!3m4!1s0x3755c6be4a4eef2d:0x44a9470e01d82f77!8m2!3d23.7933037!4d90.3776981" target="_blank" rel="noreferrer">
            
          <Button color="light" className="bg-[#f6ecec] text-[#bc0024]">
              <GiClick className="mr-2 h-5 w-5 " />
              OPEN MAP
            </Button>
            </a>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
