import { FaLocationArrow } from 'react-icons/fa';
import './NewsletterModal.css';

// eslint-disable-next-line react/prop-types
const NewsletterModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className=" w-[400px]  md:w-[600px] mx-auto mt-20 mb-5 p-6 rounded space-y-2 modal-overlay ">
      <div className="modal-content">
        <button className="modal-close " onClick={onClose}>x</button>
        <h1 className="text-xl lg:text-2xl font-semibold mt-5">Subscribe to Apartment Hub Newsletter</h1> 
             <h1 className="my-3">Get the latest news & updates</h1>  
             <form action="" className="relative">
                  <FaLocationArrow className="absolute mt-4 ml-4  text-xl text-[#c981c9]"></FaLocationArrow>
                  <input type="email" placeholder="Enter your email" className="input-field w-[95%] py-[12px] rounded-2xl  border-[#f0d2f0]" />
                  <button className="bg-[#dcbddc] p-3 font-serif  absolute right-2 rounded-lg font-semibold">Subscribe</button>
             </form>  
      </div>
    </div>
  );
};

export default NewsletterModal;
