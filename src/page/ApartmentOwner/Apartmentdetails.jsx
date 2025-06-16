import { Modal } from 'antd';
import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';

const Apartmentdetails = () => {
    // State for Modal Visibility
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Function to handle showing the modal
    const handleShowModal = () => {
        setIsModalVisible(true);
    };

    // Function to handle modal cancellation
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Link to={"/apartment-owner"} className="text-2xl flex items-center mt-10">
                <FaAngleLeft />  Apartment details
            </Link>

            <div className='max-w-[650px] my-5'>
                {/* Apartment Image */}
                <img className="w-full h-[300px] rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                
                {/* Apartment Info */}
                <div className="flex items-center justify-between my-5">
                    <div>
                        <h2 className="text-2xl font-semibold">Driftwood Apartment</h2>
                        <p>100 Smart Street, LA, USA</p>
                    </div>
                </div>

                {/* Apartment Description */}
                <div className="space-y-3 mt-5">
                    <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">Apartment Description</span>
                    <p>
                        Welcome to Suncity Apartments, where comfort meets convenience. Located in a prime urban neighborhood, Suncity offers stylish 1, 2, and 3-bedroom units designed for modern living. 
                        Each apartment features spacious layouts, large windows with natural light, fully equipped kitchens, premium fittings, and private balconies with stunning city views.
                    </p>
                </div>

                {/* Apartment Facilities */}
                <div className="space-y-3 mt-5">
                    <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">Apartment Facilities</span>
                    <div className='flex gap-3'>
                        <button className='flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white py-2 px-5 rounded-full'>
                            <img src="/Apartment/icons/scal.png" alt="" /> 1600 Sq ft
                        </button>
                        <button className='flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white py-2 px-5 rounded-full'>
                            <img src="/Apartment/icons/car.png" alt="" /> Parking
                        </button>
                        <button className='flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white py-2 px-5 rounded-full'>
                            <img src="/Apartment/icons/ground.png" alt="" /> Garden
                        </button>
                        <button className='flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white py-2 px-5 rounded-full'>
                            <img src="/Apartment/icons/left.png" alt="" /> Lift
                        </button>
                    </div>
                </div>

                {/* Apartment Image Gallery */}
                <div className="space-y-3 mt-5">
                    <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">Apartment Images</span>
                    <div className="grid grid-cols-4 gap-3 mt-3">
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment" />
                    </div>
                </div>

            </div>

            {/* Apartment Unit List Section */}
            <div className="space-y-3 my-5">
                <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">Apartment Unit List</span>
                <div className="grid grid-cols-8 gap-3 mt-3">
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Studio</span>
                    </div>
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Studio</span>
                    </div>
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Studio</span>
                    </div>
                    <div onClick={handleShowModal} className='border cursor-pointer border-[#39ceec] p-2 rounded-lg'>
                        <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Studio" />
                        <hr className='mt-3 mb-2' />
                        <span className='border-b-2 border-[#222222]'>Studio</span>
                    </div>
                </div>
            </div>

            {/* Modal for Apartment Details */}
            <Modal
                title="Apartment Details"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    {/* Apartment unit details */}
                    <p>Here will be the detailed information about the selected apartment unit.</p>
                    <p>You can add more info about this specific unit here.</p>
                </div>
            </Modal>

        </div>
    );
}

export default Apartmentdetails;
