

import { Modal } from 'antd';
import React, { useState } from 'react';
import { FaAngleLeft, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';

const ApartmentListDetails = () => {
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
            <Link to={"/apartment-list"} className="text-2xl flex items-center mt-10">
                <FaAngleLeft />  Apartment details
            </Link>

            <div className='md:grid grid-cols-3 items-start gap-5 my-5'>
                <div className='col-span-2  rounded-lg p-5 bg-white '>
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
                        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mt-3">
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
                </div>
                <div className="cal-span-1 p-4 bg-white h-auto rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] border border-[#39ceec]">
                    {/* Front Desk Agent Card */}
                    <div className="mb-4 border p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-500">Front Desk Agent</h3>
                        <div className="flex items-center mt-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="Profile" className="rounded-full w-12 h-12 mr-4" />
                            <div>
                                <p className="font-medium">Alax Tom</p>
                                <p className="text-sm text-gray-500">Support@Gmail.Com</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-end'>
                            <button className="mt-2 text-blue-500 text-sm hover:underline">Details</button>
                        </div>
                    </div>

                    {/* Maintenance Crew Card */}
                    <div className="mb-4 border p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-500">Maintenance Crew</h3>
                        <div className="flex items-center mt-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="Profile" className="rounded-full w-12 h-12 mr-4" />
                            <div>
                                <p className="font-medium">Alax Tom</p>
                                <p className="text-sm text-gray-500">Support@Gmail.Com</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-end'>
                            <button className="mt-2 text-blue-500 text-sm hover:underline">Details</button>
                        </div>
                    </div>

                    {/* Apartment Owner Card */}
                    <div className='mb-4 border p-4 rounded-lg'>
                        <h3 className="text-lg font-semibold text-blue-500">Apartment Owner</h3>
                        <div className="flex items-center mt-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="Profile" className="rounded-full w-12 h-12 mr-4" />
                            <div>
                                <p className="font-medium">Alax Tom</p>
                                <p className="text-sm text-gray-500">Support@Gmail.Com</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-end'>
                            <button className="mt-2 text-blue-500 text-sm hover:underline">Details</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Apartment Details */}
            <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                width={600}
                footer={null}
            >
                <div className="max-w-[800px] mx-auto mt-10 ">
                    <img className='w-full h-[300px] rounded-lg mb-2' src="/Apartment/image-1.jpg" alt="" />
                    {/* Studio Title and Room Number */}
                    <div className="">
                        <div>
                            <h2 className="text-3xl font-semibold text-orange-500 mb-5">Studio</h2>
                            <p className="text-gray-600 flex items-center justify-between space-y-2 text-base">Room Number: <strong>BG101</strong></p>
                            <p className="text-gray-600 flex items-center justify-between space-y-2 text-base">Floor: <strong>1st Floor</strong></p>
                        </div>
                    </div>

                    {/* Apartment Facilities */}
                    <div className="my-5">
                        <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">BG101 Facilities</span>
                        <div className="grid grid-cols-3 gap-3 mt-3">
                            {/* Facilities Icons */}
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🛏️</span>
                                <span>3 Bedrooms</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🛁</span>
                                <span>2 Bathrooms</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">📏</span>
                                <span>1600 Sq Ft</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🍽️</span>
                                <span>1 Kitchen Room</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🌐</span>
                                <span>Wi-Fi</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🚗</span>
                                <span>Parking</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🌳</span>
                                <span>Garden</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-tl from-[#39ceec] to-[#125461] text-white rounded-full p-2 justify-center">
                                <span className="text-blue-500">🔲</span>
                                <span>Lift</span>
                            </div>
                        </div>
                    </div>

                    {/* Images Section */}
                    <div className='mt-5'>
                        <span className="text-2xl font-semibold border-b-2 border-[#39ceec]">BG101 Images</span>
                        <div className="grid grid-cols-4 gap-3 mt-3">
                            <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment Image 1" />
                            <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment Image 2" />
                            <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment Image 3" />
                            <img className="w-full rounded-lg" src="/Apartment/image-1.jpg" alt="Apartment Image 4" />
                        </div>
                    </div>
                </div>

            </Modal>

        </div>
    );
}

export default ApartmentListDetails;
