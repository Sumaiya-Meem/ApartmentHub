import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { useCopyToClipboard } from "usehooks-ts";
import "./Coupon.css";
import useCouponAvail from "../../Hooks/useCouponAvail";
import Aos from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import "../About/About.css";
import about2 from "../../../public/about2.avif";
import about3 from "../../../public/about3.jpg";
import { Typewriter } from "react-simple-typewriter";

const Coupon = () => {
  const [coupon, setCoupon] = useState([]);
  const [coupons] = useCouponAvail();

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("coupon.json");
      setCoupon(res.data);
    };
    data();
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  const [copyValue, setCopy] = useCopyToClipboard();

  const handleCopy = () => {
    setCopy(coupon);
    toast.success("Copy the coupon!");
    console.log(copyValue);
  };
  return (
    <>
      <div className="text-center my-10  ">
        <h1 className="text-4xl font-bold font-serif text-[#bc0024]">Coupon</h1>
        <p className="text-[#c04159] font-medium text-lg font-serif italic">
          <Typewriter
            words={["Use Coupon to save pay"]}
            loop={true}
            cursor
            cursorStyle=".."
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </p>
      </div>

      <div className="flex">
        

        <div className="couponCon " data-aos="zoom-in-up">
          {coupons.map((data) => (
            <>
              <div className="flex flex-col items-center gap-2 border-[2px] border-dashed border-[#bc0024] p-2 h-[150px]">
                <div className="flex gap-2 items-center">
                  <div
                    className=" text-[#bc0024] cursor-pointer"
                    onClick={() => handleCopy()}
                  >
                    <MdOutlineContentCopy className="text-xl"></MdOutlineContentCopy>
                  </div>
                  <p className="font-semibold text-[#bc0024] text-xl">
                    {data.discount}% OFF
                  </p>
                </div>
                <h3 className="font-semibold">{data.couponCode}</h3>
                <p>{data.description}</p>
              </div>
            </>
          ))}
        </div>

        <div className="mt-10 lg:mb-20  mr-10">
          <div className="aboutImg hidden lg:block" data-aos="zoom-in-up">
            <img src={about2} alt="" className="bigImg rounded-md " />
            <img src={about3} alt="" className="smImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
