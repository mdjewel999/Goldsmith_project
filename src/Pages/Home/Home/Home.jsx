// import React from 'react';

import Categorys from "../../Category/Categorys";
import Gallery from "../Gallery/Gallery";
import Banner from "./Banner/Banner";
// import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           {/* <Services></Services> */}
           <Categorys></Categorys>
        </div>
    );
};

export default Home;