import { faCoffee, faGithub } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typical from 'react-typical'
import banner from '../../images/IMG_0527-removebg-preview.png'


const Banner = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 place-content-center'>
                <div className='flex flex-col font-serif justify-center items-center '
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h1 class="text-4xl font-bold text-center mt-8">Welcome to my portfolio</h1>
                    <h1 className='my-4 text-3xl'>This is Md Main Uddin</h1>
                    <h3 className="typical text-2xl">
                        I Am a
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                " Full-Stack Web Developer",
                                1000,
                                " MERN Stack Developer",
                                1000,
                                " JavaScrip Developer",
                                1000,
                                " React Developer",
                                1000,
                            ]}
                        />
                    </h3>
                    <div className='my-8'>
                        <button class="btn btn-primary mx-2">Hire Me</button>
                        <button class="btn btn-primary">DownLoad CV</button>
                    </div>
                </div >
                <div className=''    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <img src={banner} alt="img" class="min-w-md rounded-lg mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner;