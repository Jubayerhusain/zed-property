import React from 'react';
import Banner from '../components/About/Banner';
import Founder from '../components/About/Founder';
import Discover from '../components/About/Discover';
import Network from '../components/About/Network';

const About = () => {
    return (
        <div className='px-4'>
            <Banner></Banner>
            <Founder></Founder>
            <Discover></Discover>
            <Network></Network>
        </div>
    );
};

export default About;