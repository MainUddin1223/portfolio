import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../images/project-1.png'
import project2 from '../../images/project-2.png'
import project3 from '../../images/project-3.png'
import project4 from '../../images/project-4.png'
import project2_1 from '../../images/Car-Fantasy-1.png'
import project2_2 from '../../images/Car-Fantasy-2.png'
import project2_3 from '../../images/Car-Fantasy-3.png'
import project2_4 from '../../images/Car-Fantasy-4.png'
import project1_1 from '../../images/project-detail-3.png'
import project1_2 from '../../images/project1-detail-3.png'
import project1_3 from '../../images/project1-detail-2.png'
import project1_4 from '../../images/project1-detail1.png'
import project3_1 from '../../images/Home-Tutor1.png'
import project3_2 from '../../images/Home-Tutor2.png'
import project3_3 from '../../images/Home-Tutor2.png'
import project3_4 from '../../images/Home-Tutor1.png'
import project4_1 from '../../images/Health-Care1.png'
import project4_2 from '../../images/Health-Care2.png'
import project4_3 from '../../images/Health-Care3.png'
import project4_4 from '../../images/Health-Care4.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "HM Electronics",
            title: "It is a Electronics product seeling Website",
            des: "It has Login Authentication system . User can see buy product from here. User can put feedback. Admin feature also developed in this website . An admin can see orders that are placed . He can also update a product or add a product even delete product.",
            img: project1,
            live: 'http://hm-electronics.firebaseapp.com',
            clientSite: "https://github.com/MainUddin1223/tools-hub",
            serverSite: "https://github.com/MainUddin1223/tools-hub-server",
            technology: ["React js", "Tailwind css", "Css3", "Daisyui", "Node js", "Express js", "React Query", "Firebase", "Mongodb", "Heroku", "React Hook Form", "Axios", "JWT"],
            demo: [project1_1, project1_2, project1_3, project1_4]
        },
        {
            id: 2,
            name: "Car Fantasy",
            title: "It is a warehouse management Website",
            des: "It is a warehouse management website. Car dealers can store their cars in the warehouse through the website.They can add , remove , or decrease or increase their cars as hey need .",
            img: project2,
            live: 'http://hm-electronics.firebaseapp.com',
            clientSite: "https://github.com/MainUddin1223/car-fantasy-client",
            serverSite: "https://github.com/MainUddin1223/car-fantasy-server",
            technology: ["React js", "Tailwind css", "Css3", "Daisyui", "Node js", "Express js", "React Query", "Firebase", "Mongodb", "Heroku", "React Hook Form", "Axios", "JWT"],
            demo: [project2_1, project2_2, project2_3, project2_4]
        },
        {
            id: 3,
            name: "Home Tutor",
            title: "It is a Course selling",
            des: "It is a Course selling website.It has login authentication.Students can purchase course clicking a button",
            img: project1,
            live: 'home-tutor-ec1d8.web.app',
            clientSite: "https://github.com/MainUddin1223/Home-tutor",
            serverSite: "",
            technology: ["React js", "Bootstrap", "Css3", "Firebase"],
            demo: [project3_1, project3_2, project3_3, project3_4]
        },
        {
            id: 4,
            name: "One Health",
            title: "It is a Medical Management website",
            img: project1,
            live: 'https://mainuddin1223.github.io/One-health/',
            clientSite: "https://github.com/MainUddin1223/One-health",
            serverSite: "",
            technology: ["HTML", "CSS", "Bootstrap", "JavaScript"],
            demo: [project4_1, project4_2, project4_3, project4_4]
        }

    ]
    return (
        <div className='lg:w-3/4 mx-auto text-white font-sans'>
            <div className=' p-4'>
                <h1 className='text-5xl  py-4 '>Projects</h1>
                <p className='text-xl my-2   lg:px-0'>I have done many projects.All of them , Some projects are given below</p>
                <p className='text-xl my-2   lg:px-0'>These projects are my favorite</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  mt-8'>
                <div className='shadow-lg hover:shadow-2xl  m-4'>
                    <div className=' project-demo' data-aos="fade-up "
                        data-aos-anchor-placement="top-bottom"
                        data-aos-offset="300">
                        <img src={project1} alt="" className='rounded-xl w-full' />
                        <div className='project-demo-hover rounded-xl flex flex-col font-sans justify-center items-center'>
                            <div className='text-white px-2'>
                                <h1 className='text-lg lg:text-2xl text-center py-1 lg:py-2'>HM Electronics</h1>
                                <p className='text-center text-xl'>It is a Electronics product seeling Website</p>
                                <div className="flex flex-wrap justify-center ">
                                    <h1 className='m-2 px-4 py-2  rounded-lg bg-orange-600'><a href="http://hm-electronics.firebaseapp.com" target="_blank">Live Demo</a></h1>
                                    <h1 className='m-2 px-4 py-2 rounded-lg bg-orange-600'><a href="https://github.com/MainUddin1223/tools-hub" target="_blank">Client Site Code</a></h1>
                                    <h1 className='m-2 px-4 py-2 rounded-lg bg-orange-600'><a href="https://github.com/MainUddin1223/tools-hub-server" target="_blank">Server Site Code</a></h1>
                                    <Link to="/projects/detail1"> <h1 className='m-2 px-4 py-2 rounded-lg bg-orange-600'>Details</h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:relative m-4 project-demo'>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-offset="300"
                        className='md:w-3/4 md:absolute md:bottom-0  md:left-0 shadow-lg hover:shadow-2xl  '>
                        <img src={project2} alt="" className='rounded-xl ' />
                        <div className='project-demo-hover rounded-xl flex flex-col font-sans justify-center items-center'>
                            <div className='text-white px-2'>
                                <h1 className='text-lg lg:text-2xl text-center py-1 lg:py-2'>Car Fantasy</h1>
                                <p className='text-center text-xl'>It is an inventory  Management Web Application</p>
                                <div className="flex flex-wrap justify-center ">
                                    <h1 className='m-2 px-2 py-2  rounded-lg bg-orange-600'><a href="https://car-fantasy-44f0b.firebaseapp.com/" target="_blank">Live Demo</a></h1>
                                    <h1 className='m-2 px-2 py-2 rounded-lg bg-orange-600'><a href="https://github.com/MainUddin1223/car-fantasy-client" target="_blank">Client Site Code</a></h1>
                                    <h1 className='m-2 px-2 py-2 rounded-lg bg-orange-600'><a href="https://github.com/MainUddin1223/car-fantasy-server" target="_blank">Server Site Code</a></h1>
                                    <Link to="/projects/detail2"> <h1 className='m-2 px-4 py-2 rounded-lg bg-orange-600'>Details</h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:relative m-4 project-demo'>
                    <div data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-anchor-placement="top-bottom"
                        className='md:w-3/4 md:absolute md:top-0 md:right-0 shadow-lg hover:shadow-2xl '>
                        <img src={project3} alt="" className='rounded-xl ' />
                        <div className='project-demo-hover-reverse rounded-xl flex flex-col font-sans justify-center items-center'>
                            <div className='text-white px-2'>
                                <h1 className='text-lg lg:text-2xl text-center py-1 lg:py-2'>HM Electronics</h1>
                                <p className='text-center text-xl'>It is a Electronics product seeling Website</p>
                                <div className="flex flex-wrap justify-center ">
                                    <h1 className='m-2 px-2 py-2  rounded-lg bg-orange-600'><a href="http://home-tutor-ec1d8.web.app" target="_blank">Live Demo</a></h1>
                                    <h1 className='m-2 px-2 py-2 rounded-lg bg-orange-600'><a href="https://github.com/MainUddin1223/Home-tutor" target="_blank">Client Site Code</a></h1>
                                    <Link to="/projects/detail3"> <h1 className='m-2 px-4 py-2 rounded-lg bg-orange-600'>Details</h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-anchor-placement="top-bottom" className='shadow-lg project-demo hover:shadow-2xl  m-4'>
                    <img src={project4} alt="" className='rounded-xl ' />
                    <div className='project-demo-hover rounded-xl flex flex-col font-sans justify-center items-center'>
                        <div className='text-white px-2'>
                            <h1 className='text-lg lg:text-2xl text-center py-1 lg:py-2'>HM Electronics</h1>
                            <p className='text-center text-xl'>It is a Electronics product seeling Website</p>
                            <div className="flex flex-wrap justify-center ">
                                <h1 className='m-2 px-2 py-2  rounded-lg bg-orange-600'><a href="https://mainuddin1223.github.io/One-health/" target="_blank">Live Demo</a></h1>
                                <h1 className='m-2 px-2 py-2 rounded-lg bg-orange-600'><a href="https://github.com/MainUddin1223/One-health" target="_blank">Client Site Code</a></h1>
                                <Link to="/projects/detail4"> <h1 className='m-2 px-4 py-2 rounded-lg bg-orange-600'>Details</h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;