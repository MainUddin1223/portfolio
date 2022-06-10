import React from 'react';
import Service from './Service';
import image1 from '../../images/webdesign.png'
import image2 from '../../images/webdesign7.png'
import image3 from '../../images/webdesign3.png'

const Services = () => {

    const services = [
        {
            img: image1,
            name: 'Hourly Job',
            description: 'Available for hourly basis work.I am available for 42 hours in a week.',
            services: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Tailwind', 'React.js', 'Node.js', 'Express.js', 'Mongodb', 'Firebase']
        },
        {
            img: image2,
            name: 'Contractual Job',
            description: 'Available for contract basis work.I am available for 42 hours in a week.',
            services: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Tailwind', 'React.js', 'Node.js', 'Express.js', 'Mongodb', 'Firebase']
        },
        {
            img: image3,
            name: 'Fulltime Job',
            description: 'Available for fulltime  work.I am available for 42 hours in a week.',
            services: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Tailwind', 'React.js', 'Node.js', 'Express.js', 'Mongodb', 'Firebase']
        }
    ]

    return (
        <div className='min-h-screen md:w-3/4 mx-auto px-4 font-sans pt-16 text-white'>
            <h1 className='text-5xl font-bold py-8 '>Available Services</h1>
            <p className='text-xl py-2'>I am available to provide you below services</p>
            <p className='text-xl py-2'>Feel free to contact with me</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-2 lg:m-8 pt-16'>
                {
                    services.map((service, index) => <Service service={service} index={index}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;