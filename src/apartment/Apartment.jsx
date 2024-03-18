import { useEffect, useState } from "react";

import './../index.css'
import { FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import ApartCard from "./ApartCard";





const Apartment = () => {
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading] = useState(true)
    const [apartments, setApartments] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const [result, setResult] = useState(10);
    const [perPage, setParPage] = useState(6);
    const numberOfPages = Math.ceil(result / perPage);

    const arrOFPages = [...Array(numberOfPages).keys()]

    


    useEffect(() => {
        axiosPublic.get(`/apartment?page=${currentPage}&size=${perPage}`)
            .then(res => {         
                setApartments(res.data)
                setIsLoading(false);             
            })

    }, [axiosPublic, currentPage, perPage])



    useEffect(() => {
        fetch('http://localhost:5000/apartment-count')
            .then(res => res.json())
            .then(data => setResult(data.result))
    }, [])

    const handleSelectPage = (page) => {
        setParPage(parseInt(page.target.value))
        setCurrentPage(0)

    }


    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)

        }
    }
    const handleNextPage = () => {


        if ((numberOfPages - 1) > currentPage) {
            setCurrentPage(currentPage + 1)

        }

    }

    return (
        <div className="min-h-[calc(100vh-295px)] container mx-auto  my-10">
            { isLoading ? <div className="flex justify-center items-center"><span className="loading loading-ring loading-lg my-24"></span></div>:
                <div>
                <div className={`grid lg:grid-cols-3 px-3 lg:px-0 md:grid-cols-2 grid-cols-1  gap-10`}>
                    {
                        apartments.map(apartment => <ApartCard apartment={apartment} key={apartment.id}></ApartCard>)
                    }
                </div>
                <div className='flex justify-center mt-5 items-center'>

                    <button className="btn-circle text-2xl" onClick={handlePrevPage}><FaArrowCircleLeft className="text-blue-800"/></button>
                    {
                        arrOFPages.map(page => <button className={` mx-2 bg-blue-100 px-2 rounded-md font-bold ${page === currentPage ? 'selected' : ''}`}
                            onClick={() => setCurrentPage(page)}
                            key={page}>{page}</button>)
                    }
                    <select className="border border-blue-500" value={perPage} onChange={handleSelectPage} id="">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="6">6</option>

                    </select>
                    <button className=" mx-3 text-2xl " onClick={handleNextPage}><FaArrowCircleRight className="text-blue-800"/></button>
                </div>
            </div>
            }
        </div>
    );
};

export default Apartment;