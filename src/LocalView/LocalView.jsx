import { Parallax } from "react-parallax";
import img from "../../public/local.png";

const LocalView = () => {
    return (
        <div>
           <Parallax bgImage={img} strength={600} className="" style={{ opacity: '0.8' }}>
        <div className="h-[440px] flex flex-col items-center justify-center text-white bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)] ">
          <h1 className="text-4xl font-serif text-[#ac0221d6] mb-4 font-bold">
          Neighborhood Overview
          </h1>
          <p className="w-2/3">
          Explore our vibrant neighborhood through a lens of convenience and charm. Discover nearby amenities, bustling streets, and the essence of community living. Our apartments are nestled in the heart of a thriving urban landscape, offering the perfect balance of modernity and tranquility.
          </p>
        </div>
      </Parallax>
        </div>
    );
};

export default LocalView;
