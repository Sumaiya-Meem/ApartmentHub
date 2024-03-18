import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import Swal from "sweetalert2";
import { useCopyToClipboard } from "usehooks-ts";
import './Coupon.css'
import useCouponAvail from "../../Hooks/useCouponAvail"
import Aos from "aos";
import 'aos/dist/aos.css'
const Coupon = () => {
  const [coupon, setCoupon] = useState([]);
  const [coupons] = useCouponAvail()

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("coupon.json");
      setCoupon(res.data);
    };
    data();
  }, []);

  useEffect(()=> {
    Aos.init()     
},[])

  const [copyValue, setCopy] = useCopyToClipboard();

  const handleCopy = () => {
    setCopy(coupon);
    Swal.fire({
      title: "Copy Coupon",
      text: "",
      icon: "success",
    });
    console.log(copyValue)
  };
  return (
    <>
      
      <div className="text-center my-10  ">
        <h1 className="text-4xl font-bold font-serif text-[#bc0024]">Coupon</h1>
        <p className="text-[#c04159] font-serif italic">Use Coupon to save pay</p>
      </div>
      <div className="couponCon" data-aos="zoom-in-up">
        {coupons.map((data) => (
          <>
            <div className="flex flex-col items-center gap-2 border-[2px] border-dashed border-[#bc0024] p-2">
              <div className="flex gap-2 items-center">
              <div
                className=" text-[#bc0024] "
                onClick={() => handleCopy()}
              >
                <MdOutlineContentCopy className="text-xl"></MdOutlineContentCopy>
              </div>
              <p className="font-semibold text-[#bc0024] text-xl">{data.discount}% OFF</p>
              </div>
              <h3 className="font-semibold">{data.couponCode}</h3>
              <p>{data.description}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Coupon;
