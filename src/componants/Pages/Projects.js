import React from 'react';
import project1 from '../../images/project-1.png'
import project2 from '../../images/project-2.png'
import project3 from '../../images/project-3.png'
import project4 from '../../images/project-4.png'

const Projects = () => {
    return (
        <div>
            <div className=''>
                <div>
                    <img src={project1} alt="" />
                </div>
                <div>
                    <img src={project1} alt="" />
                </div>
                <div>
                    <img src={project1} alt="" />
                </div>
                <div>
                    <img src={project1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Projects;