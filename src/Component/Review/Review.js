import React, { useState } from 'react';

const ReviewForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [review, setReview] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { firstName, lastName, review });

        setFirstName('');
        setLastName('');
        setReview('');
        setIsFormOpen(false);
    };

    const openForm = () => {
        setIsFormOpen(true);
    };

    return (
        <div className="relative h-screen flex justify-center items-center">
            {isFormOpen && (
                <div className="fixed inset-0 backdrop-blur-md"></div>
            )}
            <div className="absolute inset-0 flex justify-center items-center">
                {!isFormOpen && (
                    <button onClick={openForm} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Give Review</button>
                )}
                {isFormOpen && (
                    <div className="bg-white/30 p-4 rounded-md">
                        <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-1 text-[1.3rem] font-[500]">First Name:</label>
                                <input onChange={handleFirstNameChange} value={firstName} id="firstName" className="w-full px-4 py-2 border-[0.2rem] border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                            </div>

                            <div>
                                <label className="block mb-1 text-[1.3rem] font-[500]">Last Name:</label>
                                <input onChange={handleLastNameChange} value={lastName} id="lastName" className="w-full px-4 py-2 border-[0.2rem] border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                            </div>

                            <div>
                                <label className="block mb-1 text-[1.3rem] font-[500]">Review:</label>
                                <textarea onChange={handleReviewChange} value={review} id="review" className="w-full px-4 py-2 border-[0.2rem] border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                            </div>

                            <div>
                                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Submit</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewForm;
