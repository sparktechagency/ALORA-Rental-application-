import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllAdminsCreate = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    // State to store validation errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.phone) formErrors.phone = 'Phone number is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(formErrors);

        // If there are no errors, you can proceed with the form submission (e.g., send data to a server)
        if (Object.keys(formErrors).length === 0) {
            console.log('Form data submitted:', formData);
            // Proceed with further actions (e.g., API call)
        }
    };

    return (
        <div className="w-full  max-w-md bg-white ">
            <Link to="/admins" className="text-2xl font-bold mt-4 flex items-center gap-3"><FaArrowLeft /> Create Sub Admin Account</Link>

            <form onSubmit={handleSubmit} className="space-y-4 my-10 p-8 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                {/* Sub Admin Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Sub Admin Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Enter Sub Admin Name"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                {/* Sub Admin Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Sub Admin Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Enter Sub Admin Email"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Enter Phone Number"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Enter Password"
                    />
                    {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                </div>

                {/* Submit Button */}
                <div>
                    <button type="submit" className="w-full bg-[#2cb5eb] text-white p-2 rounded-md">
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AllAdminsCreate;
