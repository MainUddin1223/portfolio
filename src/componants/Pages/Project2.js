import React from 'react';
import project1 from '../../images/Untitled design (1).png'
import project2 from '../../images/Untitled design (2).png'

const Project2 = () => {
    return (
        <div className=' '>
            <div className=' rounded-xl md:w-3/4 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
                <div className='text-white px-2'>
                    <h1 className='text-4xl font-bold  py-4'>Car Fantasy</h1>
                    <p className=' text-xl'>It is a warehouse management website.
                    Car dealers can store their cars in the warehouse  through the website.They can add , remove , or decrease or increase their cars as hey need . </p>
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
                    <h1 className='text-3xl text-center text-white my-8'>Project Overview</h1>
                    <div className='md:w-3/4 px-4 grid grid-cols-2 mx-auto gap-8'>
                        <img src={project1} alt="" className=' w-full mx-2' />
                        <img src={project2} alt="" className='w-full mx-2' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;