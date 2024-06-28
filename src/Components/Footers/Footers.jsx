import { Button, Footer } from "flowbite-react";
import logo from "../../../public/logo.png";
import { FaDribbble, FaGooglePlay, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import img from "../../../public/wave2.png"
const Footers = () => {
  return (
    <div className="mt-10 bg-[#f0f0f1]">
      <img src={img} alt="" />
      <Footer container className="bg-[#f0f0f1]">
        <div className="w-full">
          <div className="w-full justify-between sm:flex sm:justify-center md:flex md:grid-cols-1">
            <div className="mt-10">
              <img src={logo} alt="" className="w-[100px] h-[100px] mx-auto" />
              <p className=" text-2xl font-semibold text-center">
                Apartment Hub
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center  gap-10 sm:mt-2  ">
              <div>
                <Footer.Title title="Address" className="mt-4 md:mt-0 text-lg text-center md:text-left ml-0 md:ml-4" />
                <Footer.LinkGroup col className="ml-0 md:ml-4">
                  <Footer.Link href="#">
                    28 , Islam Centre, Mirpur, Dhaka
                  </Footer.Link>
                  <Footer.Link href="#">Email: apartmenthub@gmail.com</Footer.Link>
                  <Footer.Link href="#">Helpline: 0123291315</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="About" className="mt-4 text-lg text-center md:text-left ml-0 md:ml-4"/>
                <Footer.LinkGroup col className="ml-0 md:ml-4">
                  <Footer.Link href="#">About Us</Footer.Link>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                  <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.LinkGroup>
              </div>
              
              <div>
                <Footer.Title title="Install App" className="mt-4 text-lg text-center md:text-left "/>
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                  From App Store or Google Play
                  <Button color="light" className="mt-3">
        <FaGooglePlay className="mr-2 h-5 w-5 text-[#088178]" />
       Google Play
      </Button>
                  <Button color="light" className="mt-3">
        <IoLogoApple className="mr-2 h-5 w-5 text-[#1a1a1a]" />
       App tore
      </Button>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full mx-auto flex gap-2 justify-center items-center">
          <Footer.Copyright href="#" by="ApartmentHub™" year={2024} className="mt-4  text-center"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={FaFacebook} />
            <Footer.Icon href="#" icon={FaInstagram} />
            <Footer.Icon href="#" icon={FaTwitter} />
            <Footer.Icon href="#" icon={FaDribbble} />
          </div>
        </div>
        </div>
      </Footer>
      <div>
        

    
      </div>
    </div>
  );
};

export default Footers;
