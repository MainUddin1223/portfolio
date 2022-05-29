import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Skills from './Skills';
import Spinner from './Spinner';
import Status from './Status';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Status></Status>
            <Skills></Skills>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;