import React, { useState } from 'react';

const InputForm = () => {
    const [formData, setFormData] = useState({ user: '', reason: '', location: '' });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentTime = new Date().toLocaleTimeString();
        console.log("Current Time: ", currentTime, formData);
        setSubmittedData({ ...formData, time: currentTime });
        setFormData({ user: '', reason: '', location: '' });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <div>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="user" className="block text-gray-700 text-sm font-bold mb-2">User:</label>
                                <input type="text" id="user" name="user" value={formData.user} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">Reason:</label>
                                <input type="text" id="reason" name="reason" value={formData.reason} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                {submittedData && (
                    <div className="bg-gray-200 rounded-md px-4 py-2 h-fit">
                        <h2 className="text-lg font-bold mb-2">Submitted Data:</h2>
                        <p>User: {submittedData.user}</p>
                        <p>Reason: {submittedData.reason}</p>
                        <p>Location: {submittedData.location}</p>
                        <p>Time: {submittedData.time}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputForm;
