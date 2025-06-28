import React from 'react';
import { CiCreditCard2 } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MonthlyBillStatmentDetails = () => {
    return (
        <div className="p-6 max-w-4xl space-y-6">
            <div>
                <Link to="/monthly-bill-statement" className="inline-flex items-center gap-2 text-2xl mb-4">
                    <FaArrowLeft /> Details
                </Link>
            </div>
            {/* User Details and Apartment Description */}
            <div className="flex justify-between space-x-6">
                {/* User Details Card */}
                <div className="w-1/2 p-6 bg-white rounded-xl border border-[#2cb5eb] shadow-lg">
                    <h2 className="text-2xl font-semibold   mb-4">User Details</h2>
                    <div className='flex items-center gap-4 my-4'>
                        <img className='w-12 h-12 rounded-full' src="/Apartment/image-1.jpg" alt="" />
                        <h3>
                            <span className='font-semibold text-xl'>Nimur Rahman Nerob</span><br />
                        </h3>
                    </div>
                    <div>
                        <p className="font-medium flex items-center justify-between border p-2 rounded-lg mb-1">Name: <span className="text-gray-600">Basha B52</span></p>
                        <p className="font-medium flex items-center justify-between border p-2 rounded-lg mb-1">Email: <span className="text-gray-600">demo@gmail.com</span></p>
                        <p className="font-medium flex items-center justify-between border p-2 rounded-lg mb-1">Phone number: <span className="text-gray-600">555555555555</span></p>
                        <p className="font-medium flex items-center justify-between border p-2 rounded-lg mb-1">Location: <span className="text-gray-600">San Francisco, CA</span></p>
                    </div>
                </div>

                {/* Apartment Description Card */}
                <div className="w-1/2 p-6 bg-white rounded-xl border border-[#2cb5eb] shadow-lg">
                    <h2 className="text-2xl font-semibold   mb-4">Apartment Description</h2>
                    <div className='flex items-center gap-4 my-4'>
                        <img className='w-12 h-12 rounded-full' src="/Apartment/image-1.jpg" alt="" />
                        <h3>
                            <span className='font-semibold text-xl'>Apartment</span><br />
                            <span className='text-blue-500'>100 Smart Street, LA, USA</span>
                        </h3>
                    </div>
                    <div>
                        <p className="font-medium flex items-center justify-between border p-2 rounded-lg mb-1">Apartment Name: <span className="text-gray-600">Suncity Apartment</span></p>
                        <p className="font-medium flex items-center justify-between border p-2 rounded-lg mb-1">Location: <span className="text-gray-600">San Francisco, CA</span></p>
                        <p className="font-medium flex items-center justify-between border p-2 rounded-lg mb-1">Room Number: <span className="text-gray-600">BG101</span></p>
                        <p className="font-medium flex items-center justify-between border p-2 rounded-lg mb-1">Floor: <span className="text-gray-600">1st floor</span></p>
                    </div>
                </div>
            </div>

            {/* Bill Statement Section */}
            <div className="bg-white p-6 rounded-xl border border-[#2cb5eb] shadow-lg">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-2xl font-semibold  mb-4">Bill Statement</h2>
                    <div className="flex items-center space-x-2">
                        <input
                            type="date"
                            className="border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                </div>
                {/* Bill Date and Search */}

                <div className="text-sm flex items-center justify-between font-medium text-white bg-[#66b366] px-4 py-3 rounded-md my-5">
                    <span>Jan 1, 2025</span>
                    <span className="ml-4">Payment success</span>
                </div>


                {/* Bill Items */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between border p-2 rounded-lg mb-1">
                        <span>Gas Bill</span>
                        <span>$ 150.99</span>
                    </div>
                    <div className="flex items-center justify-between border p-2 rounded-lg mb-1">
                        <span>Water Bill</span>
                        <span>$ 150.99</span>
                    </div>
                    <div className="flex items-center justify-between border p-2 rounded-lg mb-1">
                        <span>Utility Administration Fee</span>
                        <span>$ 150.99</span>
                    </div>
                    <div className="flex items-center justify-between border p-2 rounded-lg mb-1">
                        <span>Trash Reimbursement</span>
                        <span>$ 150.99</span>
                    </div>
                    <div className="flex items-center justify-between border p-2 rounded-lg mb-1">
                        <span>Renters Insurance</span>
                        <span>$ 150.99</span>
                    </div>
                    <div className="flex items-center justify-between border p-2 rounded-lg mb-1">
                        <span>Parking Rent</span>
                        <span>$ 150.99</span>
                    </div>
                    <div className="flex items-center justify-between border p-2 rounded-lg mb-1">
                        <span>Pest Control Bill</span>
                        <span>$ 150.99</span>
                    </div>
                </div>

                {/* Total Balance */}
                <div className="flex justify-between font-semibold text-lg mt-4">
                    <span>Total Balance:</span>
                    <span>$ 1959.00</span>
                </div>

                {/* Transaction ID */}
                <div className="mt-4 flex items-center space-x-2 bg-blue-100 p-4 rounded-lg">
                    <div className="bg-white p-2 rounded-full">
                        <CiCreditCard2 className='text-2xl' />
                    </div>
                    <span className="text-sm text-gray-600">Transaction ID: 1234 5678 2345</span>
                </div>
            </div>
        </div>
    );
};

export default MonthlyBillStatmentDetails;
