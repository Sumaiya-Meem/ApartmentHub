import { FaLocationArrow } from "react-icons/fa";
import './NewsletterModal.css'
const Newsletter = () => {
return (
<div className="bg-[#ddd3f3]  w-[400px]  md:w-[600px] mx-auto mt-20 mb-5 p-6 rounded space-y-2 ">
             <h1 className="text-xl lg:text-2xl font-semibold ">Subscribe to Apartment Hub Newsletter</h1> 
             <h1 className="">Get the latest news & updates</h1>  
             <form action="" className="relative">
                  <FaLocationArrow className="absolute mt-4 ml-3  text-xl text-[#c981c9]"></FaLocationArrow>
                  <input type="email" placeholder="Enter your email" className="input-field w-[95%] py-[12px] rounded-2xl  border-[#f0d2f0]" />
                  <button className="bg-[#dcbddc] p-3 font-serif  absolute right-3 lg:right-6 rounded-lg font-semibold">Subscribe</button>
             </form>                                      
</div>
                  );
};

export default Newsletter;