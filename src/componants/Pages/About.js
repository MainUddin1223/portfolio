import React from 'react';
import about from '../../images/IMG_0527-removebg-preview.png'

const About = () => {
    return (
        <div className='bg-blue-200'>
            <h1 className='text-center text-5xl py-8 font-bold text-primary'>About Me</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-4 place-items-center'>
                <div>
                    <img src={about} alt="" />
                </div>
                <div className='p-8'>
                    <h1 className='text-3xl my-4'>Hello Visitors</h1>
                    <p className='text-xl my-2'>This is Md Main Uddin . I am a MERN developer. Here is my some important information about me,please have a look</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 '>
                        <div>
                            <h1 className='text-2xl my-2 font-bold'>Name : </h1>
                            <p className='text-xl'>MD Main Uddin</p>
                            <h1 className='text-2xl my-2 font-bold'>Phone : </h1>
                            <p className='text-xl'>+8801852902208</p>
                        </div>
                        <div>
                        <h1 className='text-2xl my-2 font-bold'>Email :</h1>
                        <p className='text-xl'>mainuddin.dev@gmail.com</p>
                            <h1 className='text-2xl my-2 font-bold'>GitHub</h1>
                            <a href='https://github.com/MainUddin1223/'target="_blank" className='text-xl'>https://github.com/MainUddin1223/</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;