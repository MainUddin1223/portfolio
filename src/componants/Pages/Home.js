import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';
import Spinner from './Spinner';
import Status from './Status';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Status></Status>
            <hr className='md:w-3/4  my-8 mx-2 md:mx-auto'/>
            <Projects></Projects>
            <hr className='md:w-3/4  my-8 mx-2 md:mx-auto'/>
            <Skills></Skills>
            <hr className='md:w-3/4  my-8 mx-2 md:mx-auto'/>
            <Services></Services>
            <hr className='md:w-3/4  my-8 mx-2 md:mx-auto'/>
            <About></About>
            <hr className='md:w-3/4  my-8 mx-2 md:mx-auto'/>
            <Contact></Contact>
            <hr className='md:w-3/4  my-8 mx-2 md:mx-auto'/>
        </div>
    );
};

export default Home;