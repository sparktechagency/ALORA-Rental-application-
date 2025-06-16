import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ApartmentCreate = () => {
    return (
        <div>
            <div className='flex justify-between flex-wrap my-10'>
                <Link to={"/"} className="text-2xl flex items-center gap-2 ">
                    <FaArrowLeft />  Apartment Create
                </Link>
                <button className='bg-[#2cb5eb] text-white p-2 rounded-md'>Apartment Create</button>
            </div>
        </div>
    );
}

export default ApartmentCreate;
