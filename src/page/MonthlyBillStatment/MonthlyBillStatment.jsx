import React, { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const MonthlyBillStatment = () => {
    // Sample data
    const data = [
        { id: 1, renterName: 'John Doe', email: 'john@example.com', apartmentName: 'Apt 101', billType: 'Electric', timeDate: '2023-06-01 10:00', actions: 'View' },
        { id: 2, renterName: 'Jane Smith', email: 'jane@example.com', apartmentName: 'Apt 102', billType: 'Water', timeDate: '2023-06-02 12:00', actions: 'View' },
        { id: 3, renterName: 'Alax Tom', email: 'alax@example.com', apartmentName: 'Apt 103', billType: 'Gas', timeDate: '2023-06-03 15:00', actions: 'View' },
        { id: 4, renterName: 'Maria Lee', email: 'maria@example.com', apartmentName: 'Apt 104', billType: 'Internet', timeDate: '2023-06-04 09:00', actions: 'View' },
        { id: 5, renterName: 'Alex Tom', email: 'alex@example.com', apartmentName: 'Apt 105', billType: 'Electric', timeDate: '2023-06-05 11:00', actions: 'View' },
    ];

    // State for managing search inputs
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDate, setSearchDate] = useState('');

    // Filter data based on search term for Renter Name and Time & Date
    const filteredData = data.filter(item =>
        item.renterName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.timeDate.includes(searchDate)
    );

    // Handle input changes for search fields
    const handleNameSearch = (e) => setSearchTerm(e.target.value);
    const handleDateSearch = (e) => setSearchDate(e.target.value);

    return (
        <div className="my-10">
            <div className="flex flex-wrap justify-between items-center mb-4">
                <h2 className="text-2xl font-bold mb-4">Monthly Bill Statement</h2>

                {/* Search Filters */}
                <div className="flex mb-4">
                    <input
                        type="text"
                        placeholder="Search by Renter Name"
                        value={searchTerm}
                        onChange={handleNameSearch}
                        className="p-2 min-w-[200px] border border-gray-300 rounded-md mr-2"
                    />
                    <input
                        type="date"
                        value={searchDate}
                        onChange={handleDateSearch}
                        className="p-2 w-auto md:min-w-[200px] border border-gray-300 rounded-md"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto shadow-sm rounded-md bg-white">
                    <thead className="bg-[#2cb5eb] text-white">
                        <tr>
                            <th className="px-5 py-4 border">SL</th>
                            <th className="px-5 py-4 border">Renter Name</th>
                            <th className="px-5 py-4 border">Email</th>
                            <th className="px-5 py-4 border">Apartment Name</th>
                            <th className="px-5 py-4 border">Bill Type</th>
                            <th className="px-5 py-4 border">Time & Date</th>
                            <th className="px-5 py-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={item.id}>
                                <td className="px-4 py-3 border">{index + 1}</td>
                                <td className="px-4 py-3 border">{item.renterName}</td>
                                <td className="px-4 py-3 border">{item.email}</td>
                                <td className="px-4 py-3 border">{item.apartmentName}</td>
                                <td className="px-4 py-3 border">{item.billType}</td>
                                <td className="px-4 py-3 border">{item.timeDate}</td>
                                <td className="px-4 py-3 border">
                                    <Link to={`/monthly-bill-statement/${item.id}`} className="px-4 py-3 flex items-center justify-center cursor-pointer">
                                        <IoEyeOutline className='text-2xl' />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MonthlyBillStatment;
