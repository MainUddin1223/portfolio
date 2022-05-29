import React from 'react';
import Service from './Service';
import image1 from '../../images/webdesign.png'
import image2 from '../../images/webdesign7.png'
import image3 from '../../images/webdesign3.png'

const Services = () => {

    const services = [
        {
            img: image1,
            name: 'Hourly Service',
            description: 'Available for hourly basis work.I am available for 42 hours in a week.',
            services: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Tailwind', 'React.js', 'Node.js', 'Express.js', 'Mongodb', 'Firebase']
        },
        {
            img: image2,
            name: 'Contractual Service',
            description: 'Available for contract basis work.I am available for 42 hours in a week.',
            services: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Tailwind', 'React.js', 'Node.js', 'Express.js', 'Mongodb', 'Firebase']
        },
        {
            img: image3,
            name: 'Fulltime Work',
            description: 'Available for fulltime  work.I am available for 42 hours in a week.',
            services: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Tailwind', 'React.js', 'Node.js', 'Express.js', 'Mongodb', 'Firebase']
        }
    ]

    return (
        <div className='min-h-screen bg-blue-100 font-serif pt-16'>
            <h1 className='text-4xl text-center py-8 shadow-xl mx-8'>Available Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-8 pt-16'>
                {
                    services.map((service, index) => <Service service={service} index={index}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;