// import React from 'react';

import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <Services></Services>
        </div>
    );
};

export default Home;