// import React from 'react';

import About from "../../About/About";
import Categorys from "../../Category/Categorys";
import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <Categorys></Categorys>
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;