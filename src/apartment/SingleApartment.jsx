import {  useLoaderData } from "react-router-dom";
import { MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { MdOutlineGarage } from "react-icons/md";
import { RxRulerSquare } from "react-icons/rx";
import { AiOutlineSafety } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "flowbite-react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const SingleApartment = () => {
    const loadedApartment= useLoaderData();
    const {floorNo,apartmentNo,apartmentImage,rent,blockName}=loadedApartment;

    const images = [
        "https://i.ibb.co/6DpsMgn/pexels-jvdm-1457842.jpg",
        "https://i.ibb.co/W6054y0/1.jpg",
        "https://i.ibb.co/3fFTT61/2.jpg",
        "https://i.ibb.co/0McCmGD/3.jpg",
        "https://i.ibb.co/pnDVhfN/5.jpg",
        "https://i.ibb.co/PW2wwDt/6.jpg",
        "https://i.ibb.co/WDxxCCf/4.jpg",    
        "https://i.ibb.co/8g3qq0C/8.jpg",
        "https://i.ibb.co/Nx4Y0nm/7.jpg"
      ]
    const [data,setData]=useState({img: '',i:0})
    const [openModal, setOpenModal] = useState(false);

    const viewImage =(img,i)=>{
        setOpenModal(true);
        setData({img,i})
    }
    const nextImage=(i)=>{
        if(i==8){
            setData({img:images[0],i:0}) 
        }
        else{
            setData({img:images[i+1],i:i+1})
        }
        
    }
    const PrevImage=(i)=>{
        if(i==0){
            setData({img:images[8],i:8}) 
        }
        else{
            setData({img:images[i-1],i:i-1})
        }
        
    }
    return (
        <div>
            
                <div className="bg-[#54595F] w-full h-[800px]">
                    <div className="w-[85%] mx-auto bg-[#54595F] pt-4">

                        <div className="grid grid-cols-3 text-white justify-between mb-3">
                            <h1 className="font-semibold">Awesome family <br/>Apartment</h1>

                            <div className="grid grid-cols-4 gap-7">
                                <div className="flex flex-col items-center">
                                    <MdOutlineBed className="text-2xl text-[#23A455]"></MdOutlineBed>
                                    <p className="text-gray-300">4 Beds</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaBath className="text-2xl text-[#23A455]"></FaBath>
                                    <p className="text-gray-300">3 Baths</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <MdOutlineGarage className="text-2xl text-[#23A455]"></MdOutlineGarage>
                                    <p className="text-gray-300">2 Garage</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <RxRulerSquare className="text-2xl text-[#23A455]"></RxRulerSquare>
                                    <p className="text-gray-300">3556sq ft</p>
                                </div>
                            </div>

                           <h1>$345</h1>
                        </div>
                      
                      <div className="flex gap-4">
                      <div className="">
                          <img src="https://i.ibb.co/6DpsMgn/pexels-jvdm-1457842.jpg" alt="" className="h-[500px]"/>
                      </div>
                       
                      <div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {
                        images.map((img,i)=>(
                                <img src={img}  key={i} alt="image" className="w-[100px] h-[80px]"
                                
                                onClick={()=>viewImage(img,i)}/>
                       
                        ))
                       }
                       </div>
                       <div className="bg-white mt-3 p-2">
                           <div className="flex">
                              <div className="text-sm text-[#666565]">
                                 <h1>Call: 015*******</h1>
                                 <div className="flex items-center gap-1">
                                 <AiOutlineSafety></AiOutlineSafety> 
                                    <p>Jonathan Scott</p></div>
                              </div>
                           </div>
                       </div>
                      </div>
                      </div>
                      
                        
                    </div>
                   
            </div>

            <Modal className="mt-5 bg-black " show={openModal} onClose={() => setOpenModal(false)}>
        
            <Modal.Body className="bg-[#363535]">
                <button className="text-white absolute top-0 right-2 "
                onClick={() => setOpenModal(false)}
                >X</button>
                <button className="text-black absolute top-[50%] text-3xl 
                bg-[#b8b6b6] opacity-70 rounded-[50%]"
                onClick={()=>PrevImage(data.i)}
                ><MdKeyboardArrowLeft></MdKeyboardArrowLeft></button>
            <img src={data.img} alt="" />
                 <button className="text-black absolute top-[50%] right-[5%] text-3xl 
                bg-[#b8b6b6] opacity-70 rounded-[50%]"
                 onClick={()=>nextImage(data.i)}
                 > <MdKeyboardArrowRight></MdKeyboardArrowRight></button>
            </Modal.Body>
      </Modal>
        </div>
    );
};

export default SingleApartment;