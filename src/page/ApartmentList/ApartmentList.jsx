
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ApartmentList = () => {
    return (
        <div>
            <div className='flex justify-between flex-wrap my-10'>
                <Link to={"/"} className="text-2xl flex items-center gap-2 ">
                    <FaArrowLeft />  Apartment  list 
                </Link>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>

                {
                    [...Array(5)].map((_, i) => (
                        <div className='border border-[#39ceec] rounded-lg p-2'>
                            <Link to={`/apartment-list/${i}`} key={i} >
                                <img className="w-full h-[300px] rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                                <div className="flex items-center justify-between my-5">
                                    <div>
                                        <h2 className="text-2xl font-semibold">Driftwood Apartment</h2>
                                        <p>100 Smart Street, LA, USA</p>
                                    </div>
                                </div>

                                <span className='text-2xl font-semibold border-b-2 border-[#39ceec]'>Apartment Images</span>
                                <div className="grid grid-cols-4 gap-3 mt-3">
                                    <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                                    <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                                    <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                                    <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                                </div>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default ApartmentList;
