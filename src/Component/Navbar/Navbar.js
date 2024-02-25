import React, {useState} from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <nav className='flex justify-between items-center bg-gray-900 text-white sticky top-0 font-semibold py-2 px-6 font-sans'>
            <div className='text-[1.8rem] m-1'>Pritam Guha</div>
            <div className="absolute top-[1.5rem] right-[0.5rem] flex flex-col justify-between w-9 h-8" onClick={handleMenuClick}>
                <span className="bg-white h-1 w-full rounded-md"></span>
                <span className="bg-rose-500 h-1 w-full rounded-md"></span>
                <span className="bg-white h-1 w-full rounded-md"></span>
            </div>
            <div>
                <ul className='flex space-x-10 text-[1.2rem]'>
                    <li className='block text-white rounded-lg hover:bg-red-400 p-2'>Home</li>
                    <li className='block text-white rounded-lg hover:bg-red-400 p-2'>Project</li>
                    <li className='block text-white rounded-lg hover:bg-red-400 p-2'>About</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
