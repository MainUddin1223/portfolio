import { faCoffee , faGithub} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import banner from '../../images/IMG_0527-removebg-preview.png'


const Banner = () => {
    return (
        <div class="hero   bg-blue-100 font-serif">
            <div class="hero-content w-full shadow-xl flex-col lg:flex-row my-4">
                <div className='text-left'>
                    <h1 class="text-4xl font-bold">Hello <br />
                    This is MD Main Uddin</h1>
                    <p class="py-6">I am a React developer</p>

                    <div>
                    </div>
                    <button class="btn btn-primary mx-2">Hire Me</button>
                    <button class="btn btn-primary">DownLoad CV</button>
                </div>
                <img src={banner} class="min-w-md rounded-lg" />
            </div>
        </div>
    );
};

export default Banner;