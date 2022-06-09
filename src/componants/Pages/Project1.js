import React from 'react';
import project1 from '../../images/project-detail-3.png'
import project2 from '../../images/project1-detail-3.png'
import project3 from '../../images/project1-detail-2.png'
import project4 from '../../images/project1-detail1.png'

const Project1 = () => {
    return (
        <div className=' '>
            <div className=' rounded-xl md:w-3/4 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
                <div className='text-white px-2'>
                    <h1 className='text-4xl font-bold  py-4'>HM Electronics</h1>
                    <p className=' text-xl'>It has Login Authentication system . User can  see buy product from here. User can put feedback. Admin feature also developed in this website . An admin can see orders that are placed . He can also update a product or add a product even delete product.</p>
                </div>
                <div className='px-2 text-white'>
                    <h1 className='text-2xl font-bold  py-4'>Technologies are used to develop this site :</h1>
                    <div className="flex flex-wrap justify-center font-bold text-lg  ">
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>React js</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Tailwind css</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Css3</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Daisyui</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Node js</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Express js</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>React Query</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Firebase</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Mongodb</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>Heroku</h1>
                                    <h1 className='m-4 px-4 py-2 rounded-lg bg-blue-900'>React Hook Form</h1>
                                   
                                    
                                </div>
                </div>
            </div>
            <div className='shadow-lg hover:shadow-2xl shadow-4xl  m-4'>
                <div className=' project-demo'>
                    <div className='md:w-3/4 px-4 grid grid-cols-2 md:grid-cols-2 mx-auto gap-4'>
                        <img src={project1} alt="" className=' ' />
                        <img src={project2} alt="" className=' ' />
                        <img src={project3} alt="" className='' />
                        <img src={project4} alt="" className=' ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;