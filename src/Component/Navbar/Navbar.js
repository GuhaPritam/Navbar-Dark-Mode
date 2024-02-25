import React from "react";


export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-900 text-white sticky top-0 w-full px-2.3rem py-0.5rem font-bold font-sans">
            <div className="text-white font-normal text-xl m-4 no-underline">
                Pritam Guha
            </div>
            <div className="menu">
                <span className="bg-white"></span>
                <span className="bg-rose-500"></span>
                <span className="bg-white"></span>
            </div>
            <ul className="flex p-2">
                <li className="text-white p-4 mx-1 rounded-lg hover:bg-red-500">Blog</li>
                <li className="text-white p-4 mx-1 rounded-lg hover:bg-red-500">About</li>
                <li className="text-white p-4 mx-1 rounded-lg hover:bg-red-500">Home</li>
            </ul>
        </nav>
    );
}
