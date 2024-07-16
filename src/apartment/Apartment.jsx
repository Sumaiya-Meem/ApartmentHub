import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// import './../index.css'
import useAxiosPublic from "../Hooks/useAxiosPublic";
import ApartCard from "./ApartCard";

const Apartment = () => {
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(true);
  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [result, setResult] = useState(10);
  const [perPage, setParPage] = useState(5);

  const numberOfPages = Math.ceil(result / perPage);

  const arrOFPages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axiosPublic
      .get(`/apartment?page=${currentPage}&size=${perPage}`)
      .then((res) => {
        setApartments(res.data);
        setIsLoading(false);
      });
  }, [axiosPublic, currentPage, perPage]);

  useEffect(() => {
    fetch("http://localhost:5000/apartment-count")
      .then((res) => res.json())
      .then((data) => setResult(data.result));
  }, []);

  const handleSelectPage = (page) => {
    setParPage(parseInt(page.target.value));
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (numberOfPages - 1 > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-[calc(100vh-295px)] container mx-auto  my-10">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-ring loading-lg my-24"></span>
        </div>
      ) : (
        <div>
          <div
            className={`grid lg:grid-cols-3 px-3 lg:px-0 md:grid-cols-2 grid-cols-1  gap-10`}
          >
            {apartments.map((apartment) => (
              <ApartCard apartment={apartment} key={apartment.id}></ApartCard>
            ))}
          </div>

          <div className="flex ml-8 mt-5 items-center justify-between gap-2">
            <div className="flex items-center gap-2">
                <h1 className="font-serif">Show</h1>
          <select
              className="border border-blue-700 rounded"
              value={perPage}
              onChange={handleSelectPage}
              id=""
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select> 
            <h1 className="font-serif">entries</h1>
            </div>
            <div>
            <p className=" text-[#505050] font-[500] mr-10">
                Showing 1 to {perPage} of {result} entries
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-5 ml-8 items-center">
            
              <button className="btn-circle " onClick={handlePrevPage}>
                <p className="text-black dark:bg-[#7f86e4]  bg-[#1514144d] py-1 px-[4px] rounded-md">
                  <IoIosArrowBack></IoIosArrowBack>
                </p>
              </button>

              {arrOFPages.map((page) => (
                <button
                  className={`text-[#6a73fa] mx-1  px-2 font-medium rounded-md ${
                    page === currentPage ? " bg-[#565fd8] text-white" : "text-black bg-[#e9e9e9]"
                  }`}
                  onClick={() => setCurrentPage(page)}
                  key={page}
                >
                  {page}
                </button>
              ))}

              <button className="mr-3" onClick={handleNextPage}>
                <p className="text-black dark:bg-[#7f86e4]  bg-[#6a73fa] py-1 px-[5px]  rounded-md">
                <IoIosArrowForward></IoIosArrowForward>
                </p>
              </button>
         
          </div>
        </div>
      )}
    </div>
  );
};

export default Apartment;
