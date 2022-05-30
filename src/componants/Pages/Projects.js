import React from 'react';
import project1 from '../../images/project-1.png'
import project2 from '../../images/project-2.png'
import project3 from '../../images/project-3.png'
import project4 from '../../images/project-4.png'

const Projects = () => {
    return (
        <div>
            <h1 className='text-center py-8 mx-4 text-4xl bg-slate-200'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-4 mt-8'>
                <div className='shadow-lg hover:shadow-2xl  m-4'>
                    <div className='' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-offset="300">
                        <a href="" target='_blank'>
                            <img src={project1} alt="" className='rounded-xl ' />
                        </a>
                    </div>
                </div>
                <div className='md:relative m-4'>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-offset="300"
                        className='md:w-3/4 md:absolute md:bottom-0  md:left-0 shadow-lg hover:shadow-2xl  '>
                        <img src={project2} alt="" className='rounded-xl ' />
                    </div>
                </div>
                <div className='md:relative m-4'>
                    <div data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-anchor-placement="top-bottom"
                        className='md:w-3/4 md:absolute md:top-0 md:right-0 shadow-lg hover:shadow-2xl '>
                        <img src={project3} alt="" className='rounded-xl ' />
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-anchor-placement="top-bottom" className='shadow-lg hover:shadow-2xl  m-4'>
                    <img src={project4} alt="" className='rounded-xl ' />
                </div>
            </div>
        </div>
    );
};

export default Projects;