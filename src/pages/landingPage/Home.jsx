import React from 'react';

import home from "../images/home.svg";
import Common from './Common';
import Navbar from './Navbar'

const Home = () => (
    <>
        <Navbar />
        <Common 
            name='Grow your business with' 
            imgsrc={home} 
            isCompName
            compName="InnoConnect"
            visit='/signup' 
            btnname="Get Started" 
        />
    </>
);

export default Home;