import React from 'react';
import project4_1 from '../../images/Health-Care1.png'
import project4_2 from '../../images/Health-Care2.png'
import project4_3 from '../../images/Health-Care3.png'
import project4_4 from '../../images/Health-Care4.png'

const Project4 = () => {
    return (
        <div className='pt-16 '>
            <div className=' rounded-xl md:w-3/4 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
                <div className='text-white px-2'>
                    <h1 className='text-4xl font-bold  py-4'>Car Fantasy</h1>
                    <p className=' text-xl'>It is a Course selling website.It has login authentication.Students can purchase course clicking a button</p>
                </div>
                <div className='px-2 text-white'>
                    <h1 className='text-2xl font-bold  py-4'>Technologies are used to develop this site :</h1>
                    <div className="flex flex-wrap justify-center font-bold text-lg  ">
                        <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>HTML</h1>
                        <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Bootstrap</h1>
                        <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Css3</h1>
                        <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>JavaScript</h1>


                    </div>
                </div>
            </div>
            <div className='shadow-lg hover:shadow-2xl shadow-4xl  m-4'>
                <div className=' project-demo'>
                    <div className='md:w-3/4 px-4 grid grid-cols-4 mx-auto gap-4'>
                        <img src={project4_1} alt="" className=' ' />
                        <img src={project4_2} alt="" className=' ' />
                        <img src={project4_3} alt="" className='' />
                        <img src={project4_4} alt="" className=' ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project4;