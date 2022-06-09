import React from 'react';
import './Skills.css'

const Skills = () => {


    return (
        <div className='my-16 md:w-3/4 px-4 mx-auto font-serif text-white'>
            <div className='text-white'>
                <h1 className='my-16 text-5xl font-bold '>MY SKILL STATUS</h1>
                <p></p>
            </div>

            <div className='md:grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense' >
                <div className='text-white'>
                    <p className='text-lg font-bold'>HTML</p> <progress class="progress w-full md:w-96 block h-4 progress-info bg-white" value="85" max="100"></progress>
                    <p className='text-lg font-bold'>Css</p> <progress class="progress w-fll md:w-96 block h-4  progress-primary bg-white" value="80" max="100"></progress>
                    <p className='text-lg font-bold'>Bootstrap</p> <progress class="progress w-full md:w-96 block h-4  progress-info bg-white" value="70" max="100"></progress>
                    <p className='text-lg font-bold'>Tailwind</p> <progress class="progress w-full md:w-96 block h-4  progress-primary bg-white" value="80" max="100"></progress>
                    <p className='text-lg font-bold'>Javascript</p> <progress class="progress w-full md:w-96 block h-4  progress-info bg-white" value="70" max="100"></progress>
                    <p className='text-lg font-bold'>Node.js</p> <progress class="progress w-full md:w-96 block h-4  progress-primary bg-white" value="45" max="100"></progress>
                    <p className='text-lg font-bold'>Express.js</p> <progress class="progress w-full md:w-96 block h-4  progress-info bg-white" value="35" max="100"></progress>
                    <p className='text-lg font-bold'>Firebase</p> <progress class="progress w-full md:w-96 block h-4  progress-primary bg-white" value="65" max="100"></progress>
                    <p className='text-lg font-bold'>Mongobd</p> <progress class="progress w-full md:w-96 block h-4  progress-info bg-white" value="35" max="100"></progress>

                </div>
                <div className=''>
                    <h1 className='text-4xl my-8 font-bold'>This is my Skills progress bar</h1>
                    <p className='text-2xl my-8'>I'm improving my skills day by day.For that I have been working heard since when I started.The process will be continued</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;