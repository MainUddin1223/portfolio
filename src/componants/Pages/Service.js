import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = ({ service, index }) => {
    const { name, description, services, img } = service;
    console.log(index);
    return (
        <div className='mt-16'>
            {index === 1 ? <div className='rounded-2xl m-4 lg:-mt-16 shadow-md hover:shadow-2xl bg-white'>
                <img className='max-h-max w-full' src={img} alt="" />
                <div className='p-4'>
                    <h1 className='text-4xl'>{name}</h1>
                    <p className='text-xl mt-2'>{description}</p>
                    <ul className='text-xl'>
                        {
                            services.map(service => <li className='my-1'>
                                <FontAwesomeIcon className='font-fold text-primary px-2' icon={faArrowRight} />
                                {service}</li>)
                        }
                    </ul>
                </div>
            </div> : <div className='rounded-2xl m-4 shadow-md hover:shadow-2xl bg-white'>
                <img className='max-h-max w-full' src={img} alt="" />
                <div className='p-4'>
                    <h1 className='text-4xl'>{name}</h1>
                    <p className='text-xl mt-2'>{description}</p>
                    <ul className='text-xl'>
                        {
                            services.map(service => <li>
                                <FontAwesomeIcon className='font-fold text-primary px-2' icon={faArrowRight} />
                                {service}</li>)
                        }
                    </ul>
                </div>
            </div>}
        </div>
    );
};

export default Service;