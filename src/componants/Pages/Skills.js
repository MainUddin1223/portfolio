import React from 'react';
import './Skills.css'

const Skills = () => {


    return (
        <div className='my-16 '>
            <h1 className='my-16 text-5xl  text-center'>MY SKILL STATUS</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center' >
                <div className=''>
                   <p className='text-lg font-bold'>HTML</p> <progress class="progress w-48 md:w-96 block h-4  " value="85" max="100"></progress>
                   <p className='text-lg font-bold'>Css</p> <progress class="progress w-48 md:w-96 block h-4  progress-primary" value="80" max="100"></progress>
                   <p className='text-lg font-bold'>Bootstrap</p> <progress class="progress w-48 md:w-96 block h-4  progress-info" value="70" max="100"></progress>
                   <p className='text-lg font-bold'>Tailwind</p> <progress class="progress w-48 md:w-96 block h-4  " value="80" max="100"></progress>
                   <p className='text-lg font-bold'>Javascript</p> <progress class="progress w-48 md:w-96 block h-4  progress-primary" value="70" max="100"></progress>
                   <p className='text-lg font-bold'>Node.js</p> <progress class="progress w-48 md:w-96 block h-4  progress-info" value="45" max="100"></progress>
                   <p className='text-lg font-bold'>Express.js</p> <progress class="progress w-48 md:w-96 block h-4  " value="35" max="100"></progress>
                   <p className='text-lg font-bold'>Firebase</p> <progress class="progress w-48 md:w-96 block h-4  progress-primary" value="65" max="100"></progress>
                   <p className='text-lg font-bold'>Mongobd</p> <progress class="progress w-48 md:w-96 block h-4  progress-info" value="35" max="100"></progress>
                    
                </div>
                <div className=''>
                    <h1 className='text-4xl m-8 font-bold'>This is my Skills progress bar</h1>
                    <p className='text-2xl m-8'>I'm improving my skills day by day.For that I have been working heard since when I started.The process will be continued</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;