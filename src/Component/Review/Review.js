import React from 'react';

const ReviewForm = () => (
  <div className="max-w-md mx-auto">
    <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
    <form className="space-y-4">
      <div>
        <label className="block mb-1">First Name:</label>
        <input id="firstName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block mb-1">Last Name:</label>
        <input id="lastName" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block mb-1">Review:</label>
        <textarea id="review" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Submit</button>
      </div>
    </form>
  </div>
);

export default ReviewForm;
