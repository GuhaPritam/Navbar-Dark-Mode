import React, { useState } from 'react';

const InputForm = () => {
    const [formData, setFormData] = useState({ user: '', time: '', reason: '', location: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ user: '', time: '', reason: '', location: '' });
    };

    return (
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="user" className="block mb-2">User:</label>
                <input type="text" id="user" name="user" value={formData.user} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="time" className="block mb-2">Time:</label>
                <input type="text" id="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="reason" className="block mb-2">Reason:</label>
                <input type="text" id="reason" name="reason" value={formData.reason} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="location" className="block mb-2">Location:</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </form>
    );
};

export default InputForm;
