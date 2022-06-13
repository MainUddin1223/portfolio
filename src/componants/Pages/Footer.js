import React from 'react';

const Footer = () => {
    return (
        <footer class="py-4 flex justify-around bg-gray-700 mt-screen">
            <p className='text-lg  text-white'>MD Main Uddin</p>
            <p className='text-lg  text-white'>Copyright {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;