import { faBriefcase, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Status = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2  mx-auto'>
            <div className='w-full  text-white  mx-auto' data-aos="zoom-in">
            <div className="flex flex-col md:flex-row  md:flex-auto justify-center bg-accent py-8 my-8 rounded items-center mx-8">
                    <FontAwesomeIcon icon={faBriefcase} className='text-5xl ' />
                    <div className='px-4'>
                        <h1 className='text-3xl font-bold '>Ready To be Hired</h1>
                        <p className='text-xl'>Available Remotely and Office</p>
                    </div>
                </div>
            </div>
            <div className='w-full  text-white  mx-auto' data-aos="zoom-in">
                <div className="flex flex-col md:flex-row  md:flex-auto justify-center bg-accent py-8 my-8 rounded items-center mx-8">
                    <FontAwesomeIcon icon={faFileContract } className='text-5xl  ' />
                    <div className='px-4 md:py-0 py-4'>
                        <h1 className='text-3xl font-bold '>Ready for Project</h1>
                        <p className='text-xl'>Available for any contractual project</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Status;