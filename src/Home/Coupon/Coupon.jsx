import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import Swal from "sweetalert2";
import { useCopyToClipboard } from "usehooks-ts";
import './Coupon.css'

const Coupon = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("coupon.json");
      setCoupons(res.data);
    };
    data();
  }, []);
  const [copyValue, setCopy] = useCopyToClipboard();

  const handleCopy = () => {
    setCopy(coupons);
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
      <div className="couponCon">
        {coupons.map((data) => (
          <>
            <div className="flex items-center gap-2 border-[2px] border-dashed border-[#bc0024] p-2">
              <div
                className=" text-[#bc0024] "
                onClick={() => handleCopy()}
              >
                <MdOutlineContentCopy className="text-xl"></MdOutlineContentCopy>
              </div>
              <p className="font-semibold">{data.title}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Coupon;
