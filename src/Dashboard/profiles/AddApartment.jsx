import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import axios from "axios";

const IMG_HOASTING_KEY = import.meta.env.VITE_IMAGE_UPLOAD_API;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${IMG_HOASTING_KEY}`;

const AddApartment = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
                  const imgFile = new FormData();
                  imgFile.append("image", data.photo[0]);
                  console.log("image file is", imgFile);
              
                  try {
                    const res = await axios.post(img_hosting_api, imgFile, {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    });
              
                    const img_url = res?.data?.data?.display_url;
                    console.log("img url is", img_url);
              
                    if (img_url) {
                      const apartment = {
                        apartmentImage: img_url,
                        floorNo: data.floorNo,
                        blockName: data.blockName,
                        apartmentNo: data.apartmentNo,
                        rent: data.rent,
                      };
              
                      axiosSecure.post("/apartment", apartment).then((res) => {
                        if (res.data.acknowledged) {
                          toast.success("Apartment added successfully");
                          reset();
                        }
                      });
                    }
                  } catch (error) {
                    console.error("Error uploading image:", error);
                    toast.error("Failed to upload image");
                  }
                };

  return (
    <div className="bg-[#17171E] h-[100vh]">
      <div className="bg-[#272738]">
        <h1 className="text-[#b6b6b6] text-xl p-4 font-serif font-medium">
          Add Apartment
        </h1>
        
      </div>

      {/* Add Apartment form */}
      <div className="bg-[#272738] mx-5  mt-10 text-white">

      <p className="text-[#a4a4a4] px-4 pt-5 font-serif">Apartment Basic Info</p>
      <div className="h-[1px] bg-[#464646] my-4"></div>

        <form onSubmit={handleSubmit(onSubmit)} className="px-5">
          <div className="flex pt-4">
            <div className="mb-4 flex-1 ">
              <label htmlFor="title" className="block  text-sm font-bold mb-2">
                Apartment No
              </label>
              <input
                type="number"
                id="apartmentNo"
                {...register("apartmentNo", {
                  required: "Apartment No is required",
                })}
                placeholder="Enter apartment no"
                className="bg-[#17171E] border-none rounded focus:outline-none focus:ring "
              />
            </div>

            <div className="mb-4 flex-1">
              <label htmlFor="title" className="block  text-sm font-bold mb-2">
                Floor No
              </label>
              <input
                type="number"
                id="floorNo"
                placeholder="Enter floor no"
                {...register("floorNo", { required: "FloorNo is required" })}
                 className="bg-[#17171E] border-none rounded focus:outline-none focus:ring "
              />
            </div>
          </div>

          <div className="flex ">
            <div className="mb-4 flex-1">
              <label htmlFor="title" className="block  text-sm font-bold mb-2">
                Block Name
              </label>
              <input
                type="text"
                id="blockName"
                {...register("blockName", { required: "blockName is required" })}
                 className="bg-[#17171E] border-none rounded focus:outline-none focus:ring "
                 placeholder="Enter Block No"
              />
            </div>
            <div className="mb-4 flex-1">
              <label htmlFor="title" className="block  text-sm font-bold mb-2">
                Rent
              </label>
              <input
                type="number"
                id="rent"
                {...register("rent", { required: "rent is required" })}
                className="bg-[#17171E] border-none rounded focus:outline-none focus:ring "
                 placeholder="Enter Rent Amount"
              />
            </div>
          </div>

          <div className="mb-4">
              <label className="block  text-sm font-bold mb-2">
                Apartment Image
              </label>
              <input
                type="file"
                id="photo"
                {...register("photo", { required: "Photo is required" })}
                className={`w-1/2 p-2 block border rounded bg-[#17171E] ${
                  errors.password ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.photo && (
                <span className="text-red-500 text-sm">
                  {errors.photo.message}
                </span>
              )}
          </div>

          <button
            type="submit"
            className="bg-[#3642e8] text-white py-2 px-4  mb-5 rounded hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddApartment;
